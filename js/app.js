/* ============================================
   APP.JS — SPA Router & Views
   ============================================ */

const App = {
  EXAM_DATE: new Date('2026-08-22T00:00:00'),
  root: null,
  
  init() {
    this.root = document.getElementById('app');
    
    // Setup router
    window.addEventListener('hashchange', () => this.route());
    
    // Initial route
    if (!window.location.hash) {
      window.location.hash = '#/';
    } else {
      this.route();
    }
    
    // Update streak on load
    Storage.updateStreak();
    
    // Setup time tracking
    this.setupTimeTracking();
  },
  
  setupTimeTracking() {
    let startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const mins = Math.floor((Date.now() - startTime) / 60000);
      if (mins > 0) Storage.addTimeSpent(mins);
    });
    // Save every 5 minutes
    setInterval(() => {
      const mins = Math.floor((Date.now() - startTime) / 60000);
      if (mins > 0) {
        Storage.addTimeSpent(mins);
        startTime = Date.now();
      }
    }, 5 * 60 * 1000);
  },

  route() {
    const hash = window.location.hash || '#/';
    const path = hash.split('?')[0];
    const params = new URLSearchParams(hash.split('?')[1]);
    
    // Update nav active state
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const navLink = document.querySelector(`.nav-links a[href="${path}"]`);
    if (navLink) navLink.classList.add('active');
    
    // Close mobile nav if open
    document.getElementById('navLinks').classList.remove('open');
    
    // Route logic
    if (path === '#/') {
      this.renderDashboard();
    } else if (path === '#/study-plan') {
      this.renderStudyPlan();
    } else if (path === '#/progress') {
      this.renderProgress();
    } else if (path === '#/subject') {
      const subjectId = params.get('id');
      if (subjectId && window.SUBJECTS && window.SUBJECTS[subjectId]) {
        this.renderSubject(subjectId);
      } else {
        window.location.hash = '#/';
      }
    } else if (path === '#/quiz') {
      const subjectId = params.get('id');
      if (subjectId && window.SUBJECTS && window.SUBJECTS[subjectId]) {
        this.renderQuiz(subjectId);
      } else {
        window.location.hash = '#/';
      }
    } else {
      window.location.hash = '#/';
    }
    
    window.scrollTo(0, 0);
  },

  // ----------------------------------------------------
  // VIEWS
  // ----------------------------------------------------

  renderDashboard() {
    const stats = Storage.getOverallStats();
    
    // Calculate days left
    const today = new Date();
    const diffTime = Math.abs(this.EXAM_DATE - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Get today's plan
    const todayStr = today.toISOString().split('T')[0];
    let todaysPlan = null;
    if (window.STUDY_PLAN) {
      todaysPlan = window.STUDY_PLAN.find(day => day.date === todayStr);
    }
    
    let html = `
      <div class="animate-in">
        <div class="countdown-section">
          <div class="countdown-label">🎯 Exam mein baaki hain</div>
          <div class="countdown-grid">
            <div class="countdown-item">
              <div class="countdown-number">${diffDays}</div>
              <div class="countdown-unit">Days</div>
            </div>
            <div class="countdown-item">
              <div class="countdown-number">22</div>
              <div class="countdown-unit">August</div>
            </div>
          </div>
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon green">📚</div>
            <div>
              <div class="stat-value">${stats.completedTopics} <span style="font-size: 0.9rem; color: var(--text-muted)">/ ${stats.totalTopics}</span></div>
              <div class="stat-label">Topics Padh Liye (${stats.topicPercent}%)</div>
              <div class="progress-bar-container" style="margin-top: 8px; height: 4px;">
                <div class="progress-bar-fill success" style="width: ${stats.topicPercent}%"></div>
              </div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon purple">🎯</div>
            <div>
              <div class="stat-value">${stats.accuracy}%</div>
              <div class="stat-label">Overall Accuracy</div>
              <div class="progress-bar-container" style="margin-top: 8px; height: 4px;">
                <div class="progress-bar-fill" style="width: ${stats.accuracy}%"></div>
              </div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon orange">🔥</div>
            <div>
              <div class="stat-value">${stats.streak} Days</div>
              <div class="stat-label">Study Streak</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon blue">⏱️</div>
            <div>
              <div class="stat-value">${Math.floor(stats.timeSpent / 60)}h ${stats.timeSpent % 60}m</div>
              <div class="stat-label">Total Time Spent</div>
            </div>
          </div>
        </div>
    `;

    // Today's Plan Section
    if (todaysPlan && todaysPlan.subjects.length > 0) {
      html += `
        <div class="today-card animate-in-delay">
          <div class="today-badge">📅 Aaj ka target</div>
          <div class="today-title">Day ${todaysPlan.day}: ${todaysPlan.title}</div>
          <div class="today-subjects">
            ${todaysPlan.subjects.map(sid => {
              const sub = window.SUBJECTS[sid];
              if(!sub) return '';
              return `<a href="#/subject?id=${sid}" class="today-subject-chip">${sub.icon} ${sub.name}</a>`;
            }).join('')}
          </div>
        </div>
      `;
    }

    // Subjects Grid
    html += `
        <div class="section-header">
          <h2 class="section-title"><span>📚</span> Sabhi Subjects (Paper-II)</h2>
        </div>
        <div class="subjects-grid">
    `;

    // Render subjects from window.SUBJECTS
    if (window.SUBJECTS) {
      for (const id in window.SUBJECTS) {
        const sub = window.SUBJECTS[id];
        const subStats = Storage.getSubjectQuizStats(id);
        const topicsDone = Storage.getSubjectTopicProgress(id);
        const totalTopics = sub.topics.length;
        const progressPct = totalTopics > 0 ? Math.round((topicsDone / totalTopics) * 100) : 0;
        
        html += `
          <a href="#/subject?id=${id}" class="subject-card">
            <div class="subject-card-header">
              <div class="subject-emoji">${sub.icon}</div>
              <div class="subject-name">${sub.name}</div>
            </div>
            <div class="subject-meta">
              <div class="subject-meta-item">📝 ${sub.questions.length} Qs</div>
              <div class="subject-meta-item">🎯 ${subStats.accuracy}% Acc</div>
              <div class="subject-meta-item">🏆 ${subStats.bestScore}% Best</div>
            </div>
            <div class="subject-progress">
              <div class="subject-progress-text">
                <span>Topics: ${topicsDone}/${totalTopics}</span>
                <span>${progressPct}%</span>
              </div>
              <div class="progress-bar-container">
                <div class="progress-bar-fill ${progressPct === 100 ? 'success' : ''}" style="width: ${progressPct}%"></div>
              </div>
            </div>
          </a>
        `;
      }
    }

    html += `
        </div>
      </div>
    `;
    this.root.innerHTML = html;
  },

  renderStudyPlan() {
    if (!window.STUDY_PLAN) {
      this.root.innerHTML = `<div class="empty-state">Study plan data missing.</div>`;
      return;
    }

    const todayStr = new Date().toISOString().split('T')[0];
    
    let html = `
      <div class="animate-in">
        <div class="section-header">
          <h2 class="section-title"><span>📅</span> Complete Study Plan (37 Days)</h2>
        </div>
        <p style="color: var(--text-secondary); margin-bottom: 24px;">
          15 July se 20 August tak ka day-wise breakdown. Ek din mein 2 subjects padhne hain taaki syllabus timely cover ho.
        </p>
        <div class="plan-timeline">
    `;

    window.STUDY_PLAN.forEach(day => {
      let statusClass = '';
      let badgeHtml = '';
      
      if (day.date === '2026-08-22') {
        statusClass = 'exam-day';
        badgeHtml = '<span class="plan-day-badge exam-badge">🎯 EXAM DAY</span>';
      } else if (day.date === todayStr) {
        statusClass = 'today';
        badgeHtml = '<span class="plan-day-badge today-badge-sm">TODAY</span>';
      } else if (day.date < todayStr) {
        // Check if completed (simplified: if past, we just mark it differently, 
        // ideally we check if topics for those subjects are done)
        statusClass = 'completed'; // or 'missed' if tracking
      }

      html += `
        <div class="plan-day ${statusClass}">
          <div class="plan-day-header">
            <div class="plan-day-title">Day ${day.day}: ${day.title}</div>
            <div style="display: flex; gap: 8px; align-items: center;">
              ${badgeHtml}
              <div class="plan-day-date">${this.formatDate(day.date)}</div>
            </div>
          </div>
          <div class="plan-day-topics">
            ${day.subjects.map(sid => {
              const sub = window.SUBJECTS ? window.SUBJECTS[sid] : null;
              if(!sub) return `<span class="plan-topic-tag">${sid}</span>`;
              return `<a href="#/subject?id=${sid}" class="plan-topic-tag">${sub.icon} ${sub.name}</a>`;
            }).join('')}
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
    this.root.innerHTML = html;
  },

  renderSubject(subjectId) {
    const sub = window.SUBJECTS[subjectId];
    if (!sub) return;

    let topicsHtml = '';
    sub.topics.forEach((topic, idx) => {
      const isCompleted = Storage.isTopicCompleted(subjectId, topic.id);
      topicsHtml += `
        <div class="topic-item">
          <div class="topic-header" onclick="App.toggleTopicContent('${topic.id}')">
            <input type="checkbox" class="topic-checkbox" id="check-${topic.id}" 
                   ${isCompleted ? 'checked' : ''} 
                   onclick="event.stopPropagation(); App.toggleTopicStatus('${subjectId}', '${topic.id}')">
            <div class="topic-title ${isCompleted ? 'completed' : ''}" id="title-${topic.id}">${idx + 1}. ${topic.name}</div>
            <div class="topic-toggle" id="toggle-${topic.id}">▼</div>
          </div>
          <div class="topic-content" id="content-${topic.id}">
            <div class="topic-body">
              ${topic.theory}
            </div>
          </div>
        </div>
      `;
    });

    const html = `
      <div class="animate-in">
        <a href="#/" class="back-btn">← Back to Dashboard</a>
        
        <div class="subject-hero">
          <div class="subject-hero-header">
            <div class="subject-hero-emoji">${sub.icon}</div>
            <div class="subject-hero-info">
              <h1>${sub.name}</h1>
              <p>${sub.description}</p>
            </div>
          </div>
          
          <div class="quiz-controls">
            <a href="#/quiz?id=${subjectId}&mode=practice" class="quiz-mode-btn">
              🧠 Practice Mode (No Timer)
            </a>
            <a href="#/quiz?id=${subjectId}&mode=test" class="quiz-mode-btn" style="border-color: var(--warning); color: var(--warning);">
              ⏱️ Real Exam Test (Timer & -1/3 Negative)
            </a>
          </div>
        </div>

        <div class="subject-tabs">
          <button class="subject-tab active">📚 Theory & Topics</button>
        </div>

        <div class="topics-list">
          ${topicsHtml}
        </div>
      </div>
    `;
    this.root.innerHTML = html;
  },

  renderProgress() {
    const stats = Storage.getOverallStats();
    let html = `
      <div class="animate-in">
        <div class="section-header">
          <h2 class="section-title"><span>📈</span> Mera Progress</h2>
        </div>
        
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon purple">🎯</div>
            <div>
              <div class="stat-value">${stats.accuracy}%</div>
              <div class="stat-label">Average Accuracy</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon blue">📝</div>
            <div>
              <div class="stat-value">${stats.attemptedQuestions}</div>
              <div class="stat-label">Questions Solved</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon green">✅</div>
            <div>
              <div class="stat-value">${stats.completedTopics}</div>
              <div class="stat-label">Topics Completed</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon orange">⏱️</div>
            <div>
              <div class="stat-value">${Math.floor(stats.timeSpent / 60)}h ${stats.timeSpent % 60}m</div>
              <div class="stat-label">Total Time Spent</div>
            </div>
          </div>
        </div>

        <h3 style="margin: 30px 0 16px;">Subject-wise Analysis</h3>
        <div class="progress-table-header">
          <div>Subject</div>
          <div>Topics Done</div>
          <div>Accuracy</div>
          <div>Best Score</div>
          <div>Status</div>
        </div>
    `;

    if (window.SUBJECTS) {
      for (const id in window.SUBJECTS) {
        const sub = window.SUBJECTS[id];
        const subStats = Storage.getSubjectQuizStats(id);
        const topicsDone = Storage.getSubjectTopicProgress(id);
        const totalTopics = sub.topics.length;
        
        let statusBadge = '';
        if (subStats.attempted === 0) statusBadge = '<span class="badge">Not Started</span>';
        else if (subStats.accuracy < 50) statusBadge = '<span class="badge badge-danger">⚠️ Revise</span>';
        else if (subStats.accuracy > 80) statusBadge = '<span class="badge badge-success">🌟 Strong</span>';
        else statusBadge = '<span class="badge badge-warning">Good</span>';

        html += `
          <div class="progress-subject-row">
            <div class="name">${sub.icon} ${sub.name}</div>
            <div>${topicsDone} / ${totalTopics}</div>
            <div>${subStats.accuracy}%</div>
            <div>${subStats.bestScore}%</div>
            <div>${statusBadge}</div>
          </div>
        `;
      }
    }

    html += `</div>`;
    this.root.innerHTML = html;
  },

  renderQuiz(subjectId) {
    const sub = window.SUBJECTS[subjectId];
    if (!sub) return;
    
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const mode = params.get('mode') || 'practice'; // 'practice' or 'test'
    
    // We will initialize the Quiz engine here
    this.root.innerHTML = `<div id="quiz-container"></div>`;
    
    // Defer to Quiz module
    if (window.Quiz) {
      window.Quiz.init(subjectId, mode);
    } else {
      this.root.innerHTML = `<div class="empty-state">Quiz module loading...</div>`;
    }
  },

  // ----------------------------------------------------
  // HELPERS
  // ----------------------------------------------------

  toggleTopicContent(topicId) {
    const content = document.getElementById(`content-${topicId}`);
    const toggle = document.getElementById(`toggle-${topicId}`);
    if (content.classList.contains('open')) {
      content.classList.remove('open');
      toggle.classList.remove('open');
    } else {
      content.classList.add('open');
      toggle.classList.add('open');
    }
  },

  toggleTopicStatus(subjectId, topicId) {
    const isCompleted = Storage.toggleTopic(subjectId, topicId);
    const title = document.getElementById(`title-${topicId}`);
    if (isCompleted) {
      title.classList.add('completed');
    } else {
      title.classList.remove('completed');
    }
  },

  formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  }
};

// Global Nav Handlers
window.navClick = function(e, path) {
  e.preventDefault();
  window.location.hash = '#' + path;
};

window.toggleMobileNav = function() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('open');
};

// Start App when DOM ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

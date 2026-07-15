/* ============================================
   QUIZ.JS — Practice and Test Engine
   ============================================ */

window.Quiz = {
  subjectId: null,
  mode: null,
  questions: [],
  currentIndex: 0,
  answers: {}, // index -> selected option
  timerInterval: null,
  timeRemaining: 0, // seconds
  startTime: null,
  
  init(subjectId, mode) {
    this.subjectId = subjectId;
    this.mode = mode; // 'practice' or 'test'
    this.subject = window.SUBJECTS[subjectId];
    
    if (!this.subject || !this.subject.questions || this.subject.questions.length === 0) {
      document.getElementById('quiz-container').innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📝</div>
          <div class="empty-state-text">Questions not available yet.</div>
          <a href="#/subject?id=${subjectId}" class="btn btn-primary" style="margin-top: 10px;">Go Back</a>
        </div>
      `;
      return;
    }
    
    // Setup questions
    // For test mode, maybe pick random 20? For now, we take all available up to 30.
    this.questions = [...this.subject.questions].sort(() => Math.random() - 0.5).slice(0, 30);
    this.currentIndex = 0;
    this.answers = {};
    
    if (this.mode === 'test') {
      // 1 min per question for test
      this.timeRemaining = this.questions.length * 60;
      this.startTimer();
    }
    
    this.startTime = Date.now();
    this.render();
  },
  
  startTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timeRemaining--;
      if (this.timeRemaining <= 0) {
        this.finishQuiz();
      } else {
        this.updateTimerDisplay();
      }
    }, 1000);
  },
  
  updateTimerDisplay() {
    const el = document.getElementById('q-timer');
    if (el) {
      const m = Math.floor(this.timeRemaining / 60).toString().padStart(2, '0');
      const s = (this.timeRemaining % 60).toString().padStart(2, '0');
      el.innerText = `⏱️ ${m}:${s}`;
      if (this.timeRemaining < 60) el.style.color = 'var(--danger)';
    }
  },
  
  render() {
    const q = this.questions[this.currentIndex];
    const total = this.questions.length;
    const isAnswered = this.answers[this.currentIndex] !== undefined;
    const selectedOpt = this.answers[this.currentIndex];
    
    let timerHtml = '';
    if (this.mode === 'test') {
      const m = Math.floor(this.timeRemaining / 60).toString().padStart(2, '0');
      const s = (this.timeRemaining % 60).toString().padStart(2, '0');
      timerHtml = `<div class="quiz-timer" id="q-timer">⏱️ ${m}:${s}</div>`;
    } else {
      timerHtml = `<div class="quiz-timer" style="color: var(--text-muted)">🧠 Practice Mode</div>`;
    }
    
    const letters = ['A', 'B', 'C', 'D'];
    let optionsHtml = '';
    
    q.options.forEach((opt, idx) => {
      let optClass = 'quiz-option';
      if (isAnswered) {
        if (idx === q.correct) optClass += ' correct';
        else if (idx === selectedOpt) optClass += ' wrong';
      }
      
      optionsHtml += `
        <div class="${optClass}" onclick="Quiz.selectOption(${idx})">
          <div class="quiz-option-letter">${letters[idx]}</div>
          <div class="quiz-option-text">${opt}</div>
        </div>
      `;
    });
    
    let explanationHtml = '';
    if (isAnswered && this.mode === 'practice') {
      explanationHtml = `
        <div class="quiz-explanation">
          <strong>Explanation:</strong><br>
          ${q.explanation || 'The correct answer is ' + letters[q.correct] + '.'}
        </div>
      `;
    }
    
    const html = `
      <div class="animate-in">
        <div class="quiz-header">
          <a href="#/subject?id=${this.subjectId}" class="back-btn" style="margin:0" onclick="return confirm('Quit quiz?')">← Quit</a>
          ${timerHtml}
        </div>
        
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: ${((this.currentIndex + 1) / total) * 100}%"></div>
        </div>
        
        <div class="quiz-question-card">
          <div class="quiz-q-number">Question ${this.currentIndex + 1} of ${total}</div>
          <div class="quiz-q-text">${q.question}</div>
          <div class="quiz-options">
            ${optionsHtml}
          </div>
          ${explanationHtml}
          
          ${q.topic ? `<div class="quiz-topic-tag">Topic: ${q.topic}</div>` : ''}
        </div>
        
        <div class="quiz-nav">
          <button class="btn btn-secondary" onclick="Quiz.prev()" ${this.currentIndex === 0 ? 'disabled' : ''}>← Previous</button>
          
          ${this.currentIndex === total - 1 
            ? `<button class="btn btn-primary" onclick="Quiz.finishQuiz()">Finish & Submit ✅</button>`
            : `<button class="btn btn-primary" onclick="Quiz.next()">Next →</button>`
          }
        </div>
      </div>
    `;
    
    document.getElementById('quiz-container').innerHTML = html;
  },
  
  selectOption(idx) {
    if (this.mode === 'practice' && this.answers[this.currentIndex] !== undefined) return; // locked in practice
    this.answers[this.currentIndex] = idx;
    this.render();
  },
  
  next() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.render();
    }
  },
  
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.render();
    }
  },
  
  finishQuiz() {
    clearInterval(this.timerInterval);
    
    let correct = 0;
    let wrong = 0;
    let skipped = 0;
    
    this.questions.forEach((q, idx) => {
      const ans = this.answers[idx];
      if (ans === undefined) skipped++;
      else if (ans === q.correct) correct++;
      else wrong++;
    });
    
    const totalQ = this.questions.length;
    // RSSB rule: -1/3 for wrong answers
    let rawScore = correct - (wrong * (1/3));
    if (rawScore < 0) rawScore = 0;
    
    const percentage = Math.round((rawScore / totalQ) * 100);
    const timeTaken = Math.floor((Date.now() - this.startTime) / 1000);
    
    // Save
    Storage.saveQuizResult({
      subjectId: this.subjectId,
      mode: this.mode,
      totalQ, correct, wrong, skipped,
      score: rawScore.toFixed(2),
      percentage,
      timeTaken
    });
    
    this.renderResults(correct, wrong, skipped, rawScore, percentage, totalQ);
  },
  
  renderResults(correct, wrong, skipped, score, pct, total) {
    let msg = '';
    let ringClass = '';
    if (pct >= 60) { msg = 'Great Job! 🌟'; ringClass = 'good'; }
    else if (pct >= 40) { msg = 'Passed (RSSB 40% threshold) ✅'; ringClass = 'avg'; }
    else { msg = 'Needs Improvement ⚠️'; ringClass = 'bad'; }
    
    const offset = 440 - (440 * pct) / 100;
    
    let reviewHtml = '';
    if (this.mode === 'test') {
      reviewHtml = `
        <h3 style="margin-top: 30px;">Mistakes & Review</h3>
        <div style="text-align: left; margin-top: 16px;">
      `;
      
      this.questions.forEach((q, idx) => {
        const ans = this.answers[idx];
        if (ans !== q.correct) {
          reviewHtml += `
            <div style="background: var(--bg-card); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 12px;">
              <div style="font-weight: 600; margin-bottom: 8px;">Q${idx+1}: ${q.question}</div>
              <div style="color: var(--danger); font-size: 0.85rem;">Your answer: ${ans !== undefined ? q.options[ans] : 'Skipped'}</div>
              <div style="color: var(--success); font-size: 0.85rem; margin-bottom: 8px;">Correct: ${q.options[q.correct]}</div>
              <div style="font-size: 0.85rem; color: var(--text-secondary);">${q.explanation || ''}</div>
            </div>
          `;
        }
      });
      reviewHtml += `</div>`;
    }
    
    const html = `
      <div class="animate-in quiz-results">
        <h2>Quiz Completed!</h2>
        <div style="color: var(--text-muted); margin-top: 4px;">${this.subject.name} - ${this.mode === 'test' ? 'Test Mode' : 'Practice Mode'}</div>
        
        <div class="quiz-score-ring">
          <svg>
            <circle cx="80" cy="80" r="70" class="bg"></circle>
            <circle cx="80" cy="80" r="70" class="fill ${ringClass}" style="stroke-dashoffset: ${offset}"></circle>
          </svg>
          <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            <div class="quiz-score-text">${pct}%</div>
          </div>
        </div>
        
        <h3 style="color: ${ringClass === 'good' ? 'var(--success)' : ringClass === 'avg' ? 'var(--warning)' : 'var(--danger)'}">${msg}</h3>
        
        <div class="quiz-results-grid">
          <div class="quiz-result-item">
            <div class="quiz-result-value">${score} / ${total}</div>
            <div class="quiz-result-label">Net Score (-1/3 mark)</div>
          </div>
          <div class="quiz-result-item" style="border-bottom: 2px solid var(--success)">
            <div class="quiz-result-value">${correct}</div>
            <div class="quiz-result-label">Correct</div>
          </div>
          <div class="quiz-result-item" style="border-bottom: 2px solid var(--danger)">
            <div class="quiz-result-value">${wrong}</div>
            <div class="quiz-result-label">Wrong</div>
          </div>
          <div class="quiz-result-item" style="border-bottom: 2px solid var(--text-muted)">
            <div class="quiz-result-value">${skipped}</div>
            <div class="quiz-result-label">Skipped</div>
          </div>
        </div>
        
        ${reviewHtml}
        
        <div style="margin-top: 30px; display: flex; gap: 12px; justify-content: center;">
          <a href="#/subject?id=${this.subjectId}" class="btn btn-secondary">Back to Subject</a>
          <a href="#/" class="btn btn-primary">Go to Dashboard</a>
        </div>
      </div>
    `;
    
    document.getElementById('quiz-container').innerHTML = html;
  }
};

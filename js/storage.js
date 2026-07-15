/* ============================================
   STORAGE.JS — localStorage CRUD for all tracking
   ============================================ */

const Storage = {
  KEYS: {
    TOPICS_COMPLETED: 'rssb_topics_completed',
    QUIZ_RESULTS: 'rssb_quiz_results',
    STUDY_STREAK: 'rssb_study_streak',
    LAST_ACTIVE: 'rssb_last_active',
    TIME_SPENT: 'rssb_time_spent',
    DAILY_LOG: 'rssb_daily_log'
  },

  // --- Generic get/set ---
  get(key, fallback = null) {
    try {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : fallback;
    } catch { return fallback; }
  },

  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { console.warn('Storage full:', e); }
  },

  // --- Topics Completed ---
  getCompletedTopics() {
    return this.get(this.KEYS.TOPICS_COMPLETED, {});
  },

  toggleTopic(subjectId, topicId) {
    const completed = this.getCompletedTopics();
    const key = `${subjectId}::${topicId}`;
    if (completed[key]) {
      delete completed[key];
    } else {
      completed[key] = Date.now();
    }
    this.set(this.KEYS.TOPICS_COMPLETED, completed);
    this.updateStreak();
    return !!completed[key];
  },

  isTopicCompleted(subjectId, topicId) {
    const completed = this.getCompletedTopics();
    return !!completed[`${subjectId}::${topicId}`];
  },

  getSubjectTopicProgress(subjectId) {
    const completed = this.getCompletedTopics();
    let count = 0;
    for (const key in completed) {
      if (key.startsWith(subjectId + '::')) count++;
    }
    return count;
  },

  // --- Quiz Results ---
  getQuizResults() {
    return this.get(this.KEYS.QUIZ_RESULTS, []);
  },

  saveQuizResult(result) {
    // result: { subjectId, mode, totalQ, correct, wrong, skipped, score, maxScore, percentage, timestamp, timeTaken, answers }
    const results = this.getQuizResults();
    results.push({ ...result, timestamp: Date.now() });
    this.set(this.KEYS.QUIZ_RESULTS, results);
    this.updateStreak();
  },

  getSubjectQuizStats(subjectId) {
    const results = this.getQuizResults().filter(r => r.subjectId === subjectId);
    if (results.length === 0) return { attempted: 0, totalAttempted: 0, bestScore: 0, accuracy: 0, avgPercentage: 0 };
    
    let totalCorrect = 0, totalAttempted = 0, bestPct = 0;
    results.forEach(r => {
      totalCorrect += r.correct;
      totalAttempted += r.totalQ;
      if (r.percentage > bestPct) bestPct = r.percentage;
    });

    return {
      attempted: results.length,
      totalAttempted,
      bestScore: Math.round(bestPct),
      accuracy: totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0,
      avgPercentage: Math.round(results.reduce((s, r) => s + r.percentage, 0) / results.length)
    };
  },

  // --- Study Streak ---
  updateStreak() {
    const today = new Date().toISOString().split('T')[0];
    const dailyLog = this.get(this.KEYS.DAILY_LOG, {});
    dailyLog[today] = true;
    this.set(this.KEYS.DAILY_LOG, dailyLog);
    this.set(this.KEYS.LAST_ACTIVE, today);
  },

  getStudyStreak() {
    const dailyLog = this.get(this.KEYS.DAILY_LOG, {});
    const dates = Object.keys(dailyLog).sort().reverse();
    if (dates.length === 0) return 0;
    
    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let i = 0; i < 200; i++) {
      const checkDate = new Date(today);
      checkDate.setDate(checkDate.getDate() - i);
      const dateStr = checkDate.toISOString().split('T')[0];
      if (dailyLog[dateStr]) {
        streak++;
      } else if (i > 0) {
        break;
      }
    }
    return streak;
  },

  // --- Time Tracking ---
  addTimeSpent(minutes) {
    const total = this.get(this.KEYS.TIME_SPENT, 0);
    this.set(this.KEYS.TIME_SPENT, total + minutes);
  },

  getTotalTimeSpent() {
    return this.get(this.KEYS.TIME_SPENT, 0);
  },

  // --- Aggregate Stats ---
  getOverallStats() {
    const subjects = window.SUBJECTS || {};
    let totalTopics = 0, completedTopics = 0;
    let totalQuestions = 0, attemptedQuestions = 0, correctAnswers = 0;

    for (const id in subjects) {
      const s = subjects[id];
      totalTopics += s.topics.length;
      completedTopics += this.getSubjectTopicProgress(id);
      totalQuestions += s.questions.length;
      
      const stats = this.getSubjectQuizStats(id);
      attemptedQuestions += stats.totalAttempted;
      correctAnswers += Math.round(stats.accuracy * stats.totalAttempted / 100);
    }

    return {
      totalTopics,
      completedTopics,
      topicPercent: totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0,
      totalQuestions,
      attemptedQuestions,
      questionPercent: totalQuestions > 0 ? Math.round((attemptedQuestions / totalQuestions) * 100) : 0,
      accuracy: attemptedQuestions > 0 ? Math.round((correctAnswers / attemptedQuestions) * 100) : 0,
      streak: this.getStudyStreak(),
      timeSpent: this.getTotalTimeSpent()
    };
  },

  // --- Reset ---
  resetAll() {
    Object.values(this.KEYS).forEach(k => localStorage.removeItem(k));
  }
};

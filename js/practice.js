document.addEventListener('DOMContentLoaded', () => {
    // Globals
    let currentExamData = null; // Holds the specific paper data (array of 100 Qs)
    let currentExamId = '';
    let currentPaperId = '';
    let currentQuestionIndex = 0;
    
    // User responses: array of objects { status: 'answered'|'marked'|'not-answered'|'not-visited', selectedOption: index }
    let userResponses = [];
    let timerInterval = null;
    let timeRemaining = 7200; // 120 minutes in seconds

    // DOM Elements
    const dashboard = document.getElementById('exam-dashboard');
    const examInterface = document.getElementById('exam-interface');
    const examResult = document.getElementById('exam-result');
    const examList = document.getElementById('exam-list');
    
    // Check if window.EXAMS exists, if not initialize it (will be populated by data files)
    window.EXAMS = window.EXAMS || {};

    // 1. Initialize Dashboard
    function initDashboard() {
        examList.innerHTML = '';
        
        // We expect 4 exams to be loaded eventually. Let's dynamically render based on what's available
        const totalExams = 4;
        
        for (let i = 1; i <= totalExams; i++) {
            const examId = `exam${i}`;
            const hasData = window.EXAMS[examId] !== undefined;
            
            const card = document.createElement('div');
            card.className = 'exam-card';
            
            // Check local storage for previous scores
            const p1Score = localStorage.getItem(`${examId}_paper1_score`);
            const p2Score = localStorage.getItem(`${examId}_paper2_score`);
            
            card.innerHTML = `
                <h3>Mock Exam ${i}</h3>
                <div class="exam-meta">200 Questions • 200 Marks • 4 Hours</div>
                
                <div style="margin-bottom: 1rem;">
                    <strong>Paper I (GK & Aptitude)</strong>
                    <div style="font-size:0.85rem; color:#666;">${p1Score ? `Score: ${p1Score}/100` : 'Not attempted'}</div>
                </div>
                <div style="margin-bottom: 1rem;">
                    <strong>Paper II (Technical)</strong>
                    <div style="font-size:0.85rem; color:#666;">${p2Score ? `Score: ${p2Score}/100` : 'Not attempted'}</div>
                </div>

                <div class="exam-actions">
                    <button class="btn-start-paper ${p1Score ? 'completed' : ''}" 
                            ${!hasData ? 'disabled' : ''} 
                            onclick="startExam('${examId}', 'paper1')">
                        ${hasData ? (p1Score ? 'Retake P1' : 'Start P1') : 'Coming Soon'}
                    </button>
                    <button class="btn-start-paper ${p2Score ? 'completed' : ''}" 
                            ${!hasData ? 'disabled' : ''} 
                            onclick="startExam('${examId}', 'paper2')">
                        ${hasData ? (p2Score ? 'Retake P2' : 'Start P2') : 'Coming Soon'}
                    </button>
                </div>
            `;
            examList.appendChild(card);
        }
    }

    // Expose to window for inline onclick handler
    window.startExam = function(examId, paperId) {
        if (!window.EXAMS[examId] || !window.EXAMS[examId][paperId]) {
            alert('Exam data not loaded yet!');
            return;
        }

        currentExamData = window.EXAMS[examId][paperId];
        currentExamId = examId;
        currentPaperId = paperId;
        
        // Initialize responses
        userResponses = currentExamData.map(() => ({
            status: 'not-visited',
            selectedOption: null
        }));
        userResponses[0].status = 'not-answered'; // First question is visited

        currentQuestionIndex = 0;
        timeRemaining = 7200; // 120 mins

        // UI Transition
        dashboard.classList.add('hidden');
        examResult.classList.add('hidden');
        examInterface.classList.remove('hidden');

        const title = paperId === 'paper1' ? 'Paper I (General)' : 'Paper II (Technical)';
        document.getElementById('current-exam-title').textContent = `Mock Exam ${examId.replace('exam','')} - ${title}`;

        buildPalette();
        renderQuestion();
        startTimer();
    };

    // 2. Exam Logic
    function startTimer() {
        clearInterval(timerInterval);
        const timerEl = document.getElementById('exam-timer');
        
        timerInterval = setInterval(() => {
            timeRemaining--;
            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                submitExam();
            } else {
                const mins = Math.floor(timeRemaining / 60);
                const secs = timeRemaining % 60;
                timerEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
                if(timeRemaining < 300) { // Last 5 mins
                    timerEl.style.color = 'red';
                }
            }
        }, 1000);
    }

    function buildPalette() {
        const palette = document.getElementById('question-palette');
        palette.innerHTML = '';
        
        currentExamData.forEach((q, index) => {
            const btn = document.createElement('button');
            btn.className = `q-btn ${userResponses[index].status}`;
            btn.textContent = index + 1;
            btn.onclick = () => jumpToQuestion(index);
            palette.appendChild(btn);
        });
    }

    function updatePaletteColor() {
        const btns = document.querySelectorAll('.q-btn');
        btns.forEach((btn, index) => {
            btn.className = `q-btn ${userResponses[index].status}`;
            if (index === currentQuestionIndex) {
                btn.classList.add('current');
            }
        });
    }

    function renderQuestion() {
        const q = currentExamData[currentQuestionIndex];
        const state = userResponses[currentQuestionIndex];
        
        document.getElementById('q-number').textContent = `Question ${currentQuestionIndex + 1}`;
        document.getElementById('question-text').innerHTML = q.text;
        
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        q.options.forEach((opt, idx) => {
            const optDiv = document.createElement('label');
            optDiv.className = `option-item ${state.selectedOption === idx ? 'selected' : ''}`;
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'exam-option';
            radio.value = idx;
            if (state.selectedOption === idx) radio.checked = true;
            
            radio.addEventListener('change', () => {
                document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
                optDiv.classList.add('selected');
                // Don't change status to answered immediately, wait for Save & Next
            });

            optDiv.appendChild(radio);
            optDiv.appendChild(document.createTextNode(opt));
            optionsContainer.appendChild(optDiv);
        });

        // Update button states
        document.getElementById('btn-prev').disabled = currentQuestionIndex === 0;
        document.getElementById('btn-next').textContent = (currentQuestionIndex === currentExamData.length - 1) ? 'Save' : 'Save & Next';

        updatePaletteColor();
    }

    function saveCurrentResponse(isMarkedForReview = false) {
        const selectedRadio = document.querySelector('input[name="exam-option"]:checked');
        const state = userResponses[currentQuestionIndex];
        
        if (selectedRadio) {
            state.selectedOption = parseInt(selectedRadio.value);
            state.status = isMarkedForReview ? 'marked' : 'answered';
        } else {
            state.selectedOption = null;
            state.status = isMarkedForReview ? 'marked' : 'not-answered';
        }
    }

    // Button Listeners
    document.getElementById('btn-next').addEventListener('click', () => {
        saveCurrentResponse(false);
        if (currentQuestionIndex < currentExamData.length - 1) {
            currentQuestionIndex++;
            if (userResponses[currentQuestionIndex].status === 'not-visited') {
                userResponses[currentQuestionIndex].status = 'not-answered';
            }
            renderQuestion();
        } else {
            updatePaletteColor(); // Just update color if last question
        }
    });

    document.getElementById('btn-prev').addEventListener('click', () => {
        saveCurrentResponse(false); // Optionally save on prev too
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderQuestion();
        }
    });

    document.getElementById('btn-mark-review').addEventListener('click', () => {
        saveCurrentResponse(true);
        if (currentQuestionIndex < currentExamData.length - 1) {
            currentQuestionIndex++;
            if (userResponses[currentQuestionIndex].status === 'not-visited') {
                userResponses[currentQuestionIndex].status = 'not-answered';
            }
            renderQuestion();
        } else {
            updatePaletteColor();
        }
    });

    document.getElementById('btn-clear').addEventListener('click', () => {
        document.querySelectorAll('input[name="exam-option"]').forEach(r => r.checked = false);
        document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
        userResponses[currentQuestionIndex].selectedOption = null;
        userResponses[currentQuestionIndex].status = 'not-answered';
        updatePaletteColor();
    });

    function jumpToQuestion(index) {
        saveCurrentResponse(userResponses[currentQuestionIndex].status === 'marked'); // preserve marked state
        currentQuestionIndex = index;
        if (userResponses[currentQuestionIndex].status === 'not-visited') {
            userResponses[currentQuestionIndex].status = 'not-answered';
        }
        renderQuestion();
    }

    // Submit Logic
    document.getElementById('btn-submit-exam').addEventListener('click', () => {
        if (confirm('Are you sure you want to submit the exam? You cannot change your answers after submission.')) {
            saveCurrentResponse(userResponses[currentQuestionIndex].status === 'marked');
            submitExam();
        }
    });

    function submitExam() {
        clearInterval(timerInterval);
        
        let correct = 0;
        let incorrect = 0;
        let unattempted = 0;

        currentExamData.forEach((q, idx) => {
            const state = userResponses[idx];
            if (state.selectedOption === null) {
                unattempted++;
            } else if (state.selectedOption === q.correctIndex) {
                correct++;
            } else {
                incorrect++;
            }
        });

        const totalScore = (correct * 1) - (incorrect * 0.33);
        const finalScoreStr = totalScore.toFixed(2);

        // Save to local storage
        localStorage.setItem(`${currentExamId}_${currentPaperId}_score`, finalScoreStr);

        // Show Results
        examInterface.classList.add('hidden');
        examResult.classList.remove('hidden');
        
        const title = currentPaperId === 'paper1' ? 'Paper I' : 'Paper II';
        document.getElementById('result-exam-title').textContent = `Mock Exam ${currentExamId.replace('exam','')} - ${title}`;
        document.getElementById('res-total').textContent = `${finalScoreStr} / 100`;
        document.getElementById('res-correct').textContent = correct;
        document.getElementById('res-incorrect').textContent = incorrect;
        document.getElementById('res-unattempted').textContent = unattempted;

        buildSolutions();
    }

    // 3. Solutions Logic
    function buildSolutions() {
        const container = document.getElementById('solutions-list');
        container.innerHTML = '';

        currentExamData.forEach((q, idx) => {
            const state = userResponses[idx];
            const div = document.createElement('div');
            div.className = 'solution-item';
            
            let statusText = '<span style="color:#666">Not Attempted</span>';
            if (state.selectedOption !== null) {
                if (state.selectedOption === q.correctIndex) statusText = '<span style="color:#4caf50; font-weight:bold;">Correct (+1)</span>';
                else statusText = '<span style="color:#e53935; font-weight:bold;">Incorrect (-0.33)</span>';
            }

            let html = `
                <div class="sol-q-text">Q${idx + 1}. ${q.text}</div>
                <div style="margin-bottom: 10px;">Your Result: ${statusText}</div>
                <div class="sol-options">
            `;

            q.options.forEach((opt, optIdx) => {
                let optClass = 'sol-opt';
                if (optIdx === q.correctIndex) optClass += ' correct-ans';
                else if (state.selectedOption === optIdx) optClass += ' wrong-ans';

                html += `<div class="${optClass}">${optIdx === state.selectedOption ? '👉 ' : ''}${opt}</div>`;
            });

            html += `</div>
                <div class="sol-explanation"><strong>Explanation:</strong> ${q.explanation}</div>
            `;
            
            div.innerHTML = html;
            container.appendChild(div);
        });
    }

    document.getElementById('btn-view-solutions').addEventListener('click', () => {
        const solContainer = document.getElementById('solutions-container');
        solContainer.classList.toggle('hidden');
        const btn = document.getElementById('btn-view-solutions');
        btn.textContent = solContainer.classList.contains('hidden') ? 'View Solutions' : 'Hide Solutions';
    });

    document.getElementById('btn-back-dashboard').addEventListener('click', () => {
        initDashboard(); // Re-render to show updated scores
        examResult.classList.add('hidden');
        document.getElementById('solutions-container').classList.add('hidden');
        document.getElementById('btn-view-solutions').textContent = 'View Solutions';
        dashboard.classList.remove('hidden');
    });

    // Boot
    initDashboard();
});

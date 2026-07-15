window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['pedagogy'] = {
  id: 'pedagogy',
  name: 'Pedagogy',
  icon: '📚',
  description: 'Teaching Methods, Learning Theories, Bloom\'s Taxonomy, NCF, Assessment, Inclusive Education',
  topics: [
    {
      id: 'teaching-learning',
      name: 'Teaching-Learning Process',
      theory: `
        <h3>Teaching-Learning Process kya hai?</h3>
        <p>Teaching-Learning ek interactive process hai jisme teacher (instructor) aur learner (student) milke knowledge, skills, aur values ka exchange karte hain. Effective teaching ke liye dono parties ka active participation zaruri hai.</p>

        <h4>Teaching ke Levels:</h4>
        <table class="comparison-table">
          <tr><th>Level</th><th>Focus</th><th>Teacher's Role</th><th>Student's Role</th></tr>
          <tr><td><strong>Memory Level (Herbartian)</strong></td><td>Facts yaad karna</td><td>Presenter (rote learning)</td><td>Passive listener</td></tr>
          <tr><td><strong>Understanding Level (Morrison)</strong></td><td>Concepts samajhna</td><td>Facilitator (explain + discuss)</td><td>Active participant</td></tr>
          <tr><td><strong>Reflective Level (Hunt)</strong></td><td>Critical thinking, problem-solving</td><td>Guide (encourage analysis)</td><td>Thinker, analyzer</td></tr>
        </table>

        <h4>Teaching Methods:</h4>
        <ul>
          <li><strong>Lecture Method:</strong> Teacher directly students ko batata hai. One-way communication. Good for large groups, but passive learning. Oldest method.</li>
          <li><strong>Discussion Method:</strong> Teacher aur students ke beech interactive discussion. Two-way communication. Critical thinking develop hoti hai.</li>
          <li><strong>Demonstration Method:</strong> Practically dikhake sikhana. "Learning by seeing." Lab-based subjects ke liye best.</li>
          <li><strong>Project Method (John Dewey/Kilpatrick):</strong> Students real-world projects pe kaam karte hain. "Learning by doing." Self-learning promote karta hai.</li>
          <li><strong>Problem-Solving Method:</strong> Students ko real problems diye jaate hain solve karne ke liye. Analytical aur logical thinking develop hoti hai.</li>
          <li><strong>Flipped Classroom:</strong> Students ghar pe content padhte hain, class mein activities, discussion, aur problem-solving hoti hai. Modern teaching approach.</li>
          <li><strong>Team Teaching:</strong> Multiple teachers milke ek class ko padhate hain, har teacher apni expertise ke area mein.</li>
          <li><strong>Micro-Teaching:</strong> Short teaching sessions (5-10 min) jisme specific teaching skills practice hoti hain. Teacher training ke liye used.</li>
        </ul>

        <h4>Maxims of Teaching:</h4>
        <ul>
          <li>Known to Unknown (pehle jo pata hai, usse shuru karo)</li>
          <li>Simple to Complex (easy se mushkil ki taraf)</li>
          <li>Concrete to Abstract (practical se theoretical ki taraf)</li>
          <li>Particular to General (specific examples se general rules)</li>
          <li>Whole to Part (poora concept pehle, fir details)</li>
          <li>Empirical to Rational (experience se logic ki taraf)</li>
          <li>Analysis to Synthesis (todke samjho, jodke seekho)</li>
        </ul>
      `
    },
    {
      id: 'learning-theories',
      name: 'Learning Theories & Psychology',
      theory: `
        <h3>Major Learning Theories</h3>
        
        <h4>1. Behaviorism (Pavlov, Skinner, Thorndike):</h4>
        <p>Learning = Observable behavior change through stimulus-response associations.</p>
        <ul>
          <li><strong>Classical Conditioning (Pavlov):</strong> Dog experiment — bell (neutral stimulus) ko food (unconditioned stimulus) ke saath pair kiya. Eventually bell alone pe salivation (conditioned response) aane laga.</li>
          <li><strong>Operant Conditioning (B.F. Skinner):</strong> Behavior ke baad jo consequence aata hai (reward ya punishment) wo future behavior ko influence karta hai. Reinforcement (positive/negative) behavior strengthen karta hai, Punishment weak karta hai.</li>
          <li><strong>Thorndike's Laws:</strong>
            <ul>
              <li><strong>Law of Readiness:</strong> Jab learner ready ho toh learning effective hoti hai.</li>
              <li><strong>Law of Exercise:</strong> Practice se connection strong hota hai (use it or lose it).</li>
              <li><strong>Law of Effect:</strong> Agar result satisfying ho toh learning strong hoti hai, unpleasant ho toh weak.</li>
            </ul>
          </li>
        </ul>

        <h4>2. Cognitivism (Piaget, Bruner, Ausubel):</h4>
        <p>Learning = Mental processes — thinking, memory, problem-solving.</p>
        <ul>
          <li><strong>Piaget's Stages of Cognitive Development:</strong>
            <table class="comparison-table">
              <tr><th>Stage</th><th>Age</th><th>Characteristics</th></tr>
              <tr><td>Sensorimotor</td><td>0-2 years</td><td>Learning through senses, object permanence</td></tr>
              <tr><td>Preoperational</td><td>2-7 years</td><td>Symbolic thinking, egocentrism, no conservation</td></tr>
              <tr><td>Concrete Operational</td><td>7-11 years</td><td>Logical thinking (concrete), conservation understood</td></tr>
              <tr><td>Formal Operational</td><td>11+ years</td><td>Abstract thinking, hypothetical reasoning</td></tr>
            </table>
          </li>
          <li><strong>Bruner's Discovery Learning:</strong> Students khud explore karke seekhein (guided discovery). Three modes: Enactive (doing), Iconic (images), Symbolic (language/symbols).</li>
          <li><strong>Ausubel's Meaningful Learning:</strong> Naya knowledge purane knowledge se connect karke seekhna. Advance Organizer concept — pehle overview do, fir detail.</li>
        </ul>

        <h4>3. Constructivism (Vygotsky, Piaget):</h4>
        <p>Learning = Learner actively constructs knowledge through experiences.</p>
        <ul>
          <li><strong>Vygotsky's Zone of Proximal Development (ZPD):</strong> Jo student akele nahi kar sakta lekin kisi ki help se kar sakta hai — ye ZPD hai. "Scaffolding" = temporary support jo gradually hata di jati hai.</li>
        </ul>

        <h4>4. Humanism (Maslow, Rogers):</h4>
        <p>Learning = Self-actualization, personal growth. Focus on the whole person.</p>
        <ul>
          <li><strong>Maslow's Hierarchy of Needs:</strong> Physiological → Safety → Belonging → Esteem → Self-Actualization. Lower needs pehle fulfill hone chahiye.</li>
        </ul>

        <div class="tip-box">
          <div class="tip-title">💡 Exam Trick</div>
          Pavlov = Classical Conditioning (dog, bell)<br>
          Skinner = Operant Conditioning (rat, lever, reinforcement)<br>
          Piaget = Cognitive Development Stages<br>
          Vygotsky = ZPD + Scaffolding<br>
          Bruner = Discovery Learning<br>
          Maslow = Hierarchy of Needs
        </div>
      `
    },
    {
      id: 'blooms',
      name: 'Bloom\'s Taxonomy & Assessment',
      theory: `
        <h3>Bloom's Taxonomy of Educational Objectives</h3>
        <p>Benjamin Bloom ne 1956 mein ek framework diya tha jo learning objectives ko 6 levels mein classify karta hai — simple se complex ki taraf:</p>

        <h4>Cognitive Domain (Original → Revised):</h4>
        <table class="comparison-table">
          <tr><th>Level (Low→High)</th><th>Original (1956)</th><th>Revised (2001)</th><th>Example Verbs</th></tr>
          <tr><td>1 (Lowest)</td><td>Knowledge</td><td>Remember</td><td>Define, List, Recall, State</td></tr>
          <tr><td>2</td><td>Comprehension</td><td>Understand</td><td>Explain, Describe, Summarize</td></tr>
          <tr><td>3</td><td>Application</td><td>Apply</td><td>Use, Solve, Demonstrate, Implement</td></tr>
          <tr><td>4</td><td>Analysis</td><td>Analyze</td><td>Compare, Contrast, Differentiate, Examine</td></tr>
          <tr><td>5</td><td>Synthesis</td><td>Evaluate</td><td>Judge, Justify, Critique, Assess</td></tr>
          <tr><td>6 (Highest)</td><td>Evaluation</td><td>Create</td><td>Design, Construct, Develop, Formulate</td></tr>
        </table>

        <h4>Three Domains of Learning:</h4>
        <ul>
          <li><strong>Cognitive Domain:</strong> Knowledge aur intellectual skills (Bloom — 6 levels above)</li>
          <li><strong>Affective Domain:</strong> Attitudes, values, feelings (Krathwohl — Receiving → Responding → Valuing → Organizing → Characterizing)</li>
          <li><strong>Psychomotor Domain:</strong> Physical skills, motor skills (Simpson — Perception → Set → Guided Response → Mechanism → Complex Overt → Adaptation → Origination)</li>
        </ul>

        <h3>Assessment & Evaluation</h3>
        <h4>Types of Assessment:</h4>
        <table class="comparison-table">
          <tr><th>Formative Assessment</th><th>Summative Assessment</th></tr>
          <tr><td>Learning process ke DURING hoti hai</td><td>Learning period ke END mein hoti hai</td></tr>
          <tr><td>Goal: feedback dena, improve karna</td><td>Goal: grade/marks dena, certify karna</td></tr>
          <tr><td>Low stakes (quizzes, class work)</td><td>High stakes (final exam, board exam)</td></tr>
          <tr><td>Continuous</td><td>One-time / Periodic</td></tr>
        </table>

        <h4>Measurement Terms:</h4>
        <ul>
          <li><strong>Reliability:</strong> Test kitna consistent results deta hai (bar bar same results aayein).</li>
          <li><strong>Validity:</strong> Test wo cheez measure kar raha hai jo measure karni chahiye (right thing measure ho rahi hai).</li>
          <li><strong>Objectivity:</strong> Scorer kaun bhi ho, result same aaye (e.g., MCQ tests are highly objective).</li>
          <li><strong>Norm-Referenced Test:</strong> Students ko ek doosre se compare karta hai (ranking).</li>
          <li><strong>Criterion-Referenced Test:</strong> Students ko ek fixed standard se compare karta hai (pass/fail threshold).</li>
        </ul>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Revised Bloom's mein top two levels SWAP ho gaye: Original mein top = Evaluation, Revised mein top = Create (Synthesis became Create and moved to top). Ye exam mein zaroor confuse karta hai!
        </div>
      `
    },
    {
      id: 'curriculum',
      name: 'Curriculum & NCF',
      theory: `
        <h3>Curriculum kya hai?</h3>
        <p>Curriculum ek planned set of learning experiences hai jo students ko provide ki jati hain — syllabus, teaching methods, activities, assessment sab include hota hai.</p>

        <h4>NCF (National Curriculum Framework) — Key Points:</h4>
        <p>NCERT ne multiple NCFs release kiye hain. Kuch important principles:</p>
        <ul>
          <li>Connecting knowledge to life outside school</li>
          <li>Learning should be joyful, not stressful (reduce curriculum burden)</li>
          <li>Enriching curriculum beyond textbooks</li>
          <li>Making exams more flexible and integrating them with classroom life</li>
          <li>Child-centered pedagogy</li>
        </ul>

        <h4>CCE (Continuous and Comprehensive Evaluation):</h4>
        <p>Ek evaluation system jisme students ki academic aur co-scholastic performance CONTINUOUSLY assess hoti hai (sirf final exam se nahi). Scholastic (academic) + Co-scholastic (life skills, attitudes, values) dono evaluate hote hain.</p>

        <h4>ICT in Education:</h4>
        <ul>
          <li><strong>E-Learning:</strong> Online platforms, LMS (Learning Management Systems like Moodle)</li>
          <li><strong>Smart Classrooms:</strong> Projectors, interactive whiteboards, digital content</li>
          <li><strong>MOOC (Massive Open Online Courses):</strong> Coursera, edX, Swayam</li>
          <li><strong>Computer-Aided Instruction (CAI):</strong> Software jo teaching mein help kare</li>
          <li><strong>Computer-Managed Instruction (CMI):</strong> Computer se student progress track karna</li>
        </ul>

        <div class="tip-box">
          <div class="tip-title">💡 Important Abbreviations for Exam</div>
          NCF = National Curriculum Framework<br>
          CCE = Continuous and Comprehensive Evaluation<br>
          CAI = Computer-Aided Instruction<br>
          CMI = Computer-Managed Instruction<br>
          MOOC = Massive Open Online Course<br>
          LMS = Learning Management System<br>
          NEP = National Education Policy
        </div>
      `
    },
    {
      id: 'inclusive-education',
      name: 'Inclusive Education & Individual Differences',
      theory: `
        <h3>Inclusive Education</h3>
        <p>Inclusive education ka matlab hai ki <strong>sabhi students</strong> — chahe unki ability, disability, caste, gender, socio-economic background kuch bhi ho — ko ek hi mainstream classroom mein quality education milni chahiye.</p>

        <h4>Key Principles:</h4>
        <ul>
          <li>Every child has a right to education</li>
          <li>No discrimination on any basis</li>
          <li>Adapt teaching methods to meet diverse needs</li>
          <li>Provide necessary support (special educators, assistive technology)</li>
        </ul>

        <h4>Individual Differences:</h4>
        <p>Har student alag hai — intelligence, learning style, pace, interest, socio-economic background mein differences hoti hain.</p>

        <h4>Gardner's Multiple Intelligences (1983):</h4>
        <table class="comparison-table">
          <tr><th>Intelligence Type</th><th>Description</th></tr>
          <tr><td>Linguistic</td><td>Language skills (reading, writing, speaking)</td></tr>
          <tr><td>Logical-Mathematical</td><td>Logic, reasoning, numbers</td></tr>
          <tr><td>Spatial</td><td>Visual thinking, mental images</td></tr>
          <tr><td>Musical</td><td>Rhythm, melody, pitch</td></tr>
          <tr><td>Bodily-Kinesthetic</td><td>Physical movement, coordination</td></tr>
          <tr><td>Interpersonal</td><td>Understanding others</td></tr>
          <tr><td>Intrapersonal</td><td>Understanding self</td></tr>
          <tr><td>Naturalistic</td><td>Nature, classification of species</td></tr>
        </table>

        <h4>Learning Styles:</h4>
        <ul>
          <li><strong>Visual Learners:</strong> Diagrams, charts, videos se achha seekhte hain</li>
          <li><strong>Auditory Learners:</strong> Listening, discussion se achha seekhte hain</li>
          <li><strong>Kinesthetic Learners:</strong> Hands-on activities, practice se achha seekhte hain</li>
          <li><strong>Reading/Writing Learners:</strong> Notes, textbooks se achha seekhte hain</li>
        </ul>

        <h4>Motivation:</h4>
        <ul>
          <li><strong>Intrinsic Motivation:</strong> Andar se aati hai — interest, curiosity, satisfaction (e.g., padhai mein maza aata hai)</li>
          <li><strong>Extrinsic Motivation:</strong> Bahar se aati hai — rewards, grades, praise, punishment (e.g., achhe marks ke liye phone milega)</li>
        </ul>

        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Gardner ne kaha ki intelligence sirf IQ test se nahi measure hoti — har person mein alag-alag types ki intelligences hoti hain. Traditional education sirf Linguistic aur Logical-Mathematical pe focus karti hai.
        </div>
      `
    }
  ],
  questions: [
    {
      id: 1, topic: 'teaching-learning',
      question: 'The "Project Method" of teaching was proposed by:',
      options: ['John Dewey', 'W.H. Kilpatrick', 'B.F. Skinner', 'Jean Piaget'],
      correct: 1,
      explanation: 'Project Method W.H. Kilpatrick ne propose kiya tha (based on John Dewey ke philosophy pe). Isme students real-world projects complete karte hain — "learning by doing".'
    },
    {
      id: 2, topic: 'teaching-learning',
      question: 'The teaching maxim "Simple to Complex" means:',
      options: ['Teaching should start with complex topics first', 'Teaching should progress from easy concepts to difficult ones', 'Only simple topics should be taught', 'Complex topics should be avoided'],
      correct: 1,
      explanation: 'Simple to Complex maxim kehta hai ki teacher ko easy concepts se shuru karke gradually difficult concepts ki taraf jaana chahiye. Isse student overwhelm nahi hota.'
    },
    {
      id: 3, topic: 'teaching-learning',
      question: 'Micro-teaching is used primarily for:',
      options: ['Teaching large classes', 'Training teachers in specific teaching skills', 'Online education', 'Student assessment'],
      correct: 1,
      explanation: 'Micro-teaching teacher training ke liye use hoti hai. Short sessions (5-10 min) mein specific skills practice hoti hain (e.g., questioning skill, blackboard usage).'
    },
    {
      id: 4, topic: 'learning-theories',
      question: 'Pavlov\'s Classical Conditioning experiment involved:',
      options: ['A rat pressing a lever for food', 'A dog salivating to a bell', 'Children solving puzzles', 'Pigeons pecking at colored buttons'],
      correct: 1,
      explanation: 'Pavlov ne dog experiment kiya — bell (neutral stimulus) ko food ke saath pair kiya. Eventually dog sirf bell sunke salivate karne laga — ye Classical Conditioning hai.'
    },
    {
      id: 5, topic: 'learning-theories',
      question: 'In Operant Conditioning, positive reinforcement means:',
      options: ['Punishing bad behavior', 'Adding a pleasant stimulus to increase behavior', 'Removing a pleasant stimulus', 'Ignoring the behavior'],
      correct: 1,
      explanation: 'Positive reinforcement mein ek pleasant stimulus ADD kiya jata hai desired behavior ke baad — jisse wo behavior future mein repeat ho. Jaise: "Achhe marks laaye → chocolate mili" → aur padhega.'
    },
    {
      id: 6, topic: 'learning-theories',
      question: 'According to Piaget, a child in the "Concrete Operational" stage (7-11 years) can:',
      options: ['Think abstractly and hypothetically', 'Only learn through senses and motor actions', 'Think logically about concrete objects', 'Not yet understand conservation'],
      correct: 2,
      explanation: 'Concrete Operational stage (7-11) mein child logically soch sakta hai lekin sirf concrete (real) objects ke baare mein. Abstract thinking Formal Operational stage (11+) mein aati hai.'
    },
    {
      id: 7, topic: 'learning-theories',
      question: 'Vygotsky\'s "Zone of Proximal Development" (ZPD) refers to:',
      options: ['The area closest to the school', 'Tasks a child can do independently', 'The gap between what a child can do alone and with help', 'The teacher\'s teaching zone'],
      correct: 2,
      explanation: 'ZPD wo zone hai jo student akele nahi kar sakta lekin kisi experienced person (teacher, peer) ki help se kar sakta hai. Scaffolding = temporary support jo is zone mein diya jata hai.'
    },
    {
      id: 8, topic: 'learning-theories',
      question: 'Thorndike\'s "Law of Effect" states that:',
      options: ['Practice makes perfect', 'Learning is most effective when the learner is ready', 'Responses followed by satisfaction are strengthened', 'All learning is through conditioning'],
      correct: 2,
      explanation: 'Law of Effect kehta hai ki agar kisi response ke baad satisfying result mile toh wo response strengthen hoti hai (dobara hogi), aur agar unpleasant result mile toh weak hoti hai.'
    },
    {
      id: 9, topic: 'learning-theories',
      question: 'The "Discovery Learning" approach was proposed by:',
      options: ['B.F. Skinner', 'Jean Piaget', 'Jerome Bruner', 'Lev Vygotsky'],
      correct: 2,
      explanation: 'Jerome Bruner ne Discovery Learning propose kiya — students khud explore, discover, aur construct karte hain knowledge ko, instead of teacher directly bataye. Three modes: Enactive, Iconic, Symbolic.'
    },
    {
      id: 10, topic: 'learning-theories',
      question: 'In Maslow\'s Hierarchy of Needs, which need comes FIRST (must be satisfied first)?',
      options: ['Safety needs', 'Physiological needs', 'Belonging needs', 'Self-actualization'],
      correct: 1,
      explanation: 'Maslow ke hierarchy mein physiological needs (food, water, shelter, sleep) sabse basic hain aur pehle fulfill honi chahiye. Uske baad Safety → Belonging → Esteem → Self-Actualization.'
    },
    {
      id: 11, topic: 'blooms',
      question: 'In Bloom\'s Revised Taxonomy, the HIGHEST level of cognitive domain is:',
      options: ['Evaluate', 'Analyze', 'Create', 'Apply'],
      correct: 2,
      explanation: 'Revised Bloom\'s Taxonomy (2001) mein levels: Remember → Understand → Apply → Analyze → Evaluate → Create. Create (designing something new) sabse highest level hai.'
    },
    {
      id: 12, topic: 'blooms',
      question: 'A question like "Compare and contrast the Waterfall and Agile models" falls under which level of Bloom\'s Taxonomy?',
      options: ['Remember', 'Understand', 'Analyze', 'Create'],
      correct: 2,
      explanation: 'Compare and contrast karna Analyze level mein aata hai — information ko break down karke relationships find karna. Ye higher-order thinking hai.'
    },
    {
      id: 13, topic: 'blooms',
      question: 'Formative Assessment is conducted:',
      options: ['At the end of the academic year only', 'During the learning process to provide feedback', 'Only through written examinations', 'By external examiners'],
      correct: 1,
      explanation: 'Formative Assessment learning process ke DURING hoti hai — goal hai students ko feedback dena aur unki learning improve karna. Ye continuous hoti hai (quizzes, class activities, homework).'
    },
    {
      id: 14, topic: 'blooms',
      question: 'A test that consistently gives the same results when administered multiple times is said to have high:',
      options: ['Validity', 'Reliability', 'Objectivity', 'Usability'],
      correct: 1,
      explanation: 'Reliability matlab consistency — agar ek test baar baar same results de toh wo reliable hai. Validity matlab test wo cheez measure kar raha hai jo measure karni chahiye.'
    },
    {
      id: 15, topic: 'curriculum',
      question: 'MOOC stands for:',
      options: ['Multiple Online Open Course', 'Massive Open Online Course', 'Modern Online Open Curriculum', 'Managed Open Online Class'],
      correct: 1,
      explanation: 'MOOC = Massive Open Online Course. Ye online courses hain jo kisi ke liye bhi open hain aur large number of participants ke liye designed hain (e.g., Coursera, Swayam, edX).'
    },
    {
      id: 16, topic: 'curriculum',
      question: 'Computer-Aided Instruction (CAI) refers to:',
      options: ['Using computers to manage student records', 'Using software to assist in teaching-learning', 'Teaching students how to use computers', 'Online examinations only'],
      correct: 1,
      explanation: 'CAI mein computer software teaching-learning process mein assist karti hai — tutorials, drills, simulations, educational games ke through. Ye Computer-Managed Instruction (CMI) se alag hai jo student progress track karta hai.'
    },
    {
      id: 17, topic: 'inclusive-education',
      question: 'Gardner\'s theory proposes that intelligence is:',
      options: ['A single general ability (g factor)', 'Measured only by IQ tests', 'Multiple types of intelligences', 'Genetically fixed and cannot change'],
      correct: 2,
      explanation: 'Howard Gardner ne Multiple Intelligences theory di — intelligence ek nahi, 8 alag-alag types ki hoti hain (Linguistic, Logical, Spatial, Musical, Bodily, Interpersonal, Intrapersonal, Naturalistic).'
    },
    {
      id: 18, topic: 'inclusive-education',
      question: 'Intrinsic motivation comes from:',
      options: ['External rewards like money or prizes', 'Fear of punishment', 'Internal desire, interest, or curiosity', 'Peer pressure'],
      correct: 2,
      explanation: 'Intrinsic motivation andar se aati hai — khudki interest, curiosity, satisfaction. Extrinsic motivation bahar se aati hai — rewards, marks, praise.'
    },
    {
      id: 19, topic: 'teaching-learning',
      question: 'In a "Flipped Classroom", students:',
      options: ['Attend lectures in class and do homework at home as usual', 'Study content at home and do activities in class', 'Only learn from textbooks', 'Never attend physical classes'],
      correct: 1,
      explanation: 'Flipped Classroom mein students ghar pe video lectures, readings se content learn karte hain. Class mein teacher ke saath discussions, problem-solving, aur activities hoti hain.'
    },
    {
      id: 20, topic: 'blooms',
      question: 'The Affective Domain in Bloom\'s Taxonomy deals with:',
      options: ['Knowledge and intellectual skills', 'Physical and motor skills', 'Attitudes, values, and emotions', 'Memorization and recall'],
      correct: 2,
      explanation: 'Affective Domain attitudes, values, feelings, aur emotions se deal karta hai. Cognitive = knowledge/thinking, Psychomotor = physical skills.'
    },
    {
      id: 21, topic: 'learning-theories',
      question: 'The concept of "Scaffolding" in education means:',
      options: ['Building physical structures for schools', 'Providing temporary support that is gradually removed as the student learns', 'Giving students all the answers', 'Testing students repeatedly'],
      correct: 1,
      explanation: 'Scaffolding (Vygotsky ke concept se related) mein teacher temporary support provide karta hai jo student ki ability ke saath gradually hata di jati hai — jab student independently kar sake.'
    },
    {
      id: 22, topic: 'curriculum',
      question: 'CCE (Continuous and Comprehensive Evaluation) evaluates:',
      options: ['Only academic performance', 'Only co-scholastic areas', 'Both scholastic and co-scholastic areas', 'Only final examination results'],
      correct: 2,
      explanation: 'CCE dono evaluate karta hai — Scholastic (academic subjects) aur Co-scholastic (life skills, attitudes, values, work education, art, physical health). Continuous + Comprehensive dono.'
    },
    {
      id: 23, topic: 'teaching-learning',
      question: 'The most effective teaching method for a computer programming class would be:',
      options: ['Lecture Method', 'Demonstration and Practice Method', 'Storytelling', 'Memorization'],
      correct: 1,
      explanation: 'Programming sikhane ke liye Demonstration (practically dikhake) aur Practice (students khud code karein) best hai. "Learning by doing" approach programming ke liye most effective hai.'
    },
    {
      id: 24, topic: 'inclusive-education',
      question: 'A student who learns best through diagrams, charts, and visual presentations is likely a:',
      options: ['Auditory learner', 'Visual learner', 'Kinesthetic learner', 'Reading/Writing learner'],
      correct: 1,
      explanation: 'Visual learners diagrams, charts, maps, aur visual presentations se best seekhte hain. Teacher ko different learning styles cater karne ke liye varied teaching methods use karne chahiye.'
    },
    {
      id: 25, topic: 'blooms',
      question: 'Which of the following questions tests the "Apply" level of Bloom\'s Taxonomy?',
      options: ['Define the term "algorithm"', 'List the types of sorting algorithms', 'Use binary search to find element 25 in the given sorted array', 'Compare merge sort and quick sort'],
      correct: 2,
      explanation: 'Apply level mein students knowledge ko USE karte hain ek specific situation mein. "Use binary search to find..." requires APPLYING the learned algorithm on given data.'
    },
    {
      id: 26, topic: 'learning-theories',
      question: 'B.F. Skinner is associated with:',
      options: ['Classical Conditioning', 'Operant Conditioning', 'Cognitive Development', 'Social Learning Theory'],
      correct: 1,
      explanation: 'B.F. Skinner Operant Conditioning ke father hain. Pavlov = Classical Conditioning, Piaget = Cognitive Development, Bandura = Social Learning Theory.'
    },
    {
      id: 27, topic: 'blooms',
      question: 'A test that measures what it is supposed to measure is said to have high:',
      options: ['Reliability', 'Validity', 'Objectivity', 'Discrimination'],
      correct: 1,
      explanation: 'Validity matlab test wo cheez measure kar raha hai jo measure karni chahiye. Jaise agar Maths test mein Hindi ka question aaye toh validity low hai.'
    },
    {
      id: 28, topic: 'teaching-learning',
      question: 'The maxim "Known to Unknown" suggests that a teacher should:',
      options: ['Start teaching with the most difficult topics', 'Begin with what students already know and build upon it', 'Skip familiar topics entirely', 'Test students before teaching'],
      correct: 1,
      explanation: 'Known to Unknown maxim kehta hai ki pehle students ko jo already pata hai wahan se shuru karo, fir naye concepts introduce karo. Ye learning ko relatable aur easy banata hai.'
    },
    {
      id: 29, topic: 'inclusive-education',
      question: 'Inclusive Education means:',
      options: ['Separate schools for disabled children', 'Only gifted students in one classroom', 'All children learning together in the same school regardless of their differences', 'Education only for economically weaker sections'],
      correct: 2,
      explanation: 'Inclusive Education mein sabhi children (different abilities, backgrounds, etc.) ek hi mainstream school mein saath padhte hain. Koi segregation ya discrimination nahi hota.'
    },
    {
      id: 30, topic: 'blooms',
      question: 'Norm-Referenced Test compares a student\'s performance with:',
      options: ['A fixed standard or criterion', 'The performance of other students', 'The teacher\'s expectations', 'International benchmarks'],
      correct: 1,
      explanation: 'Norm-Referenced Test mein student ki performance ko doosre students ki performance se compare kiya jata hai (ranking system). Criterion-Referenced Test mein fixed standard se compare hota hai.'
    },
    {
      id: 31, topic: 'learning-theories',
      question: 'Piaget\'s "Formal Operational" stage begins at approximately:',
      options: ['Birth', '2 years', '7 years', '11 years'],
      correct: 3,
      explanation: 'Formal Operational stage 11 years ke baad start hoti hai. Isme child abstract thinking, hypothetical reasoning, aur logical deduction kar sakta hai. Ye Piaget ke stages ki last stage hai.'
    },
    {
      id: 32, topic: 'curriculum',
      question: 'NCF stands for:',
      options: ['National Curriculum Framework', 'National Certification Forum', 'New Course Foundation', 'National Computer Federation'],
      correct: 0,
      explanation: 'NCF = National Curriculum Framework. Ye NCERT dwara prepare kiya jata hai aur school education ke curriculum, pedagogy, aur assessment ke guidelines deta hai.'
    }
  ]
};

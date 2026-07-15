window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['pedagogy'] = {
  id: 'pedagogy',
  name: 'Pedagogy',
  icon: '🧠',
  description: 'Shikshan vidhiyan, psychology aur classroom management ke essential concepts for computer instructors.',
  topics: [
    {
      id: 'ed-psychology',
      name: 'Educational Psychology & Learner',
      theory: `
        <h3>Educational Psychology (Shiksha Manovigyan)</h3>
        <p>Educational psychology ek aisi branch hai jo seekhne (learning) aur sikhane (teaching) ki process ko study karti hai. Ek teacher ko students ka behaviour, unki learning style aur unke mental level ko samajhne mein psychology madad karti hai.</p>
        
        <h4>Key Principles (Thorndike's Laws)</h4>
        <ul>
          <li><strong>Law of Readiness (Tatparta ka Niyam):</strong> Jab tak student mentally seekhne ke liye taiyar nahi hai, tab tak aap use nahi sikha sakte. Isliye class start karne se pehle interest create karna zaroori hai.</li>
          <li><strong>Law of Exercise (Abhyas ka Niyam):</strong> Practice makes perfect. Computer typing ya programming mein ye law sabse zyada use hota hai kyunki coding bina abhyas ke nahi aati.</li>
          <li><strong>Law of Effect (Prabhav ka Niyam):</strong> Agar result positive ya satisfying hai, toh student aur seekhna chahega (Motivation). Agar result negative hai toh bachha frustrate ho jayega.</li>
        </ul>

        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Thorndike ne ye teen main laws of learning diye the (Readiness, Exercise, Effect). Ye "Trial and Error" (Prayas evam truti) theory ka hissa hain.
        </div>

        <h4>Individual Differences (Vyaktigat Vibhinnata)</h4>
        <p>Har baccha alag hota hai. Koi jaldi samajh jata hai, kisi ko zyada practice chahiye. Computer lab mein aapko kuch students milenge jo logical errors turant find kar lete hain, aur kuch jo syntax error mein phanse rehte hain. Ek teacher ko in differences ke according apni pace aur method adjust karni chahiye.</p>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Exam mein puchte hain ki individual differences ka main reason kya hai? Sahi jawab hai 'Heredity AND Environment' (Vanshanukram aur Vatavaran) dono ka joint product.
        </div>
      `
    },
    {
      id: 'teaching-methods',
      name: 'Teaching Methods & Strategies',
      theory: `
        <h3>Teaching Methods (Shikshan Vidhiyan)</h3>
        <p>Computer Science padhane ke liye traditional lecture method utna effective nahi hota jitna practical aur interactive methods hote hain.</p>
        
        <h4>Important Methods for CS Instructors</h4>
        <ul>
          <li><strong>Project Method (Pariyojana Vidhi):</strong> Given by W.H. Kilpatrick. Students ko ek real-world problem di jati hai, jaise "School ke liye library management system banana". Best for programming and software engineering classes.</li>
          <li><strong>Problem-Solving Method:</strong> Given by John Dewey. Baccho ko ek problem dekar unhe khud solution nikalne diya jata hai (e.g., Debugging a code). Teacher ek guide ki tarah kaam karta hai.</li>
          <li><strong>Demonstration Method (Pradarshan Vidhi):</strong> Teacher projector pe screen share karke dikhata hai (jaise MS Word mein mail merge kaise karein) aur bacche dekhte hain aur copy karte hain. Practical software tools ke liye best hai.</li>
          <li><strong>Inductive-Deductive Method (Aagman-Nigaman):</strong> Inductive mein pehle examples dete hain fir rule banate hain. Deductive mein pehle rule/formula batate hain aur fir examples karate hain. Programming logic sikhane ke liye Inductive best mani jati hai.</li>
          <li><strong>Heuristic Method:</strong> Given by H.E. Armstrong. 'Heurisco' matlab "I find out". Isme baccha khud ek scientist/researcher ki tarah khoj karke seekhta hai.</li>
        </ul>

        <table class="comparison-table">
          <tr>
            <th>Feature</th>
            <th>Inductive Method (Aagman)</th>
            <th>Deductive Method (Nigaman)</th>
          </tr>
          <tr>
            <td>Direction</td>
            <td>Example to Rule (Specific to General)</td>
            <td>Rule to Example (General to Specific)</td>
          </tr>
          <tr>
            <td>Nature</td>
            <td>Discovery-based, time-consuming</td>
            <td>Direct, fast, good for revision</td>
          </tr>
          <tr>
            <td>Use Case</td>
            <td>New concepts sikhane ke liye (like Loops logic)</td>
            <td>Math formulas ya Syntax rules ratne ke liye</td>
          </tr>
        </table>

        <div class="formula-box">
          <div class="formula-title">📐 Key Definition</div>
          "A project is a whole-hearted purposeful activity proceeding in a social environment." - W.H. Kilpatrick
        </div>
      `
    },
    {
      id: 'ict-education',
      name: 'ICT in Education',
      theory: `
        <h3>ICT (Information & Communication Technology)</h3>
        <p>Education mein technology ka use karna aaj ke time mein bahut zaroori hai. As a CS instructor, ye apka core area hai, kyunki aapko baaki teachers ko bhi train karna pad sakta hai.</p>
        
        <h4>Computer Assisted Instruction (CAI)</h4>
        <p>Jab students computer/software ki madad se directly padhte hain bina teacher ki active involvement ke. Isme alag-alag modes hote hain:</p>
        <ul>
          <li><strong>Drill and Practice:</strong> Jo pehle padha hai uski practice karna (e.g., typing software, math quizzes).</li>
          <li><strong>Tutorial:</strong> Naya concept sikhana step-by-step.</li>
          <li><strong>Simulation:</strong> Real-life situation ko computer par recreate karna (e.g., flight simulator, circuit design software).</li>
        </ul>
        
        <h4>Modern Approaches</h4>
        <ul>
          <li><strong>Blended Learning:</strong> Face-to-face traditional classroom teaching aur online digital media ka blend (combination). Baccha class mein bhi padhta hai aur ghar jaake portal se bhi padhta hai.</li>
          <li><strong>Flipped Classroom:</strong> Traditional model ka ulta. Bacche ghar pe video lecture dekh kar pehle theory samajhte hain, aur agle din school aakar teacher ke samne homework/practical karte hain. Isse class time ka better use hota hai.</li>
          <li><strong>MOOCs (Massive Open Online Courses):</strong> Badi sankhya mein students ko online free/paid education dena. Platforms like SWAYAM, Coursera, edX are examples.</li>
        </ul>

        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          SWAYAM (Study Webs of Active-Learning for Young Aspiring Minds) ek Indian government ka initiative hai for free online courses.
        </div>

        <h4>Edgar Dale's Cone of Experience</h4>
        <p>Ek visual model jo batata hai ki hum alag-alag tarike se padhkar kitna yaad rakhte hain. Iske anusar, bacche sabse zyada tab seekhte hain jab wo kisi real ya simulated activity mein directly involve hote hain ("doing the real thing" - approx 90% retention), aur sabse kam tab seekhte hain jab wo sirf text padhte hain (approx 10% retention).</p>
      `
    },
    {
      id: 'assessment',
      name: 'Assessment & Evaluation',
      theory: `
        <h3>Mulyankan (Evaluation)</h3>
        <p>Students ne kitna seekha, ye janne ke liye assessment kiya jata hai. Measurement (mapan) sirf marks deta hai, jabki Evaluation un marks ki value batata hai ki baccha pass hai, fail hai, ya excellent hai.</p>
        
        <h4>Formative vs Summative Assessment</h4>
        <table class="comparison-table">
          <tr>
            <th>Formative Assessment (Rachnatmak)</th>
            <th>Summative Assessment (Yogatmak)</th>
          </tr>
          <tr>
            <td>During the learning process (class ke dauran ya turant baad)</td>
            <td>End of the term ya course ke end mein</td>
          </tr>
          <tr>
            <td>Feedback dena aur mistakes improve karna iska aim hai</td>
            <td>Grades ya marks/certification dena iska aim hai</td>
          </tr>
          <tr>
            <td>Assessment <strong>FOR</strong> learning</td>
            <td>Assessment <strong>OF</strong> learning</td>
          </tr>
          <tr>
            <td>E.g., Class test, oral questions, coding assignments, quizzes</td>
            <td>E.g., Half-yearly exams, Annual Board exams, Final Practical</td>
          </tr>
        </table>

        <h4>CCE (Continuous and Comprehensive Evaluation)</h4>
        <p>CBSE dwara shuru kiya gaya system. <strong>Continuous</strong> matlab lagatar assessment (sirf end mein ek baar nahi), aur <strong>Comprehensive</strong> matlab student ki har tarah ki growth ka mulyankan. Isme do areas aate hain:</p>
        <ul>
          <li><strong>Scholastic (Shaikshik):</strong> Core subjects like Maths, Science, Computer Science.</li>
          <li><strong>Co-scholastic (Sah-shaikshik):</strong> Life skills, values, sports, art, behavior, etc.</li>
        </ul>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Rubric kya hai? Ek rubric scoring ki guide hoti hai jisme criteria likhe hote hain ki project check karte time kin baaton pe kitne marks diye jayenge (e.g., UI = 5 marks, Code logic = 10 marks). Ye subjective checking ko fair banata hai.
        </div>
      `
    },
    {
      id: 'lesson-planning',
      name: 'Lesson Planning & Bloom\'s Taxonomy',
      theory: `
        <h3>Bloom's Taxonomy (1956 & 2001)</h3>
        <p>Benjamin Bloom ne educational objectives (shikshan uddeshyon) ko 3 domains mein bata tha:</p>
        <ul>
          <li><strong>Cognitive Domain:</strong> Mental/Brain activities (Thinking).</li>
          <li><strong>Affective Domain:</strong> Emotions/Heart (Feeling, values).</li>
          <li><strong>Psychomotor Domain:</strong> Physical skills/Hand (Doing, like typing or mouse control).</li>
        </ul>
        
        <h4>Cognitive Domain Levels (Old 1956 Nouns → New 2001 Verbs)</h4>
        <ol>
          <li>Knowledge → <strong>Remembering:</strong> Facts yaad rakhna (e.g., Define CPU).</li>
          <li>Comprehension → <strong>Understanding:</strong> Samajhna (e.g., Difference between RAM & ROM).</li>
          <li>Application → <strong>Applying:</strong> Nayi situation mein use karna (e.g., Write a C program to add numbers using a formula).</li>
          <li>Analysis → <strong>Analyzing:</strong> Break down karna (e.g., Find errors in a code block by checking each line).</li>
          <li>Synthesis → <strong>Evaluating:</strong> Judge karna (e.g., Compare two sorting algorithms and select the best one).</li>
          <li>Evaluation → <strong>Creating:</strong> Kuch naya banana (e.g., Design a new software architecture or logic). <em>(Notice how creating became the highest level in the revised taxonomy).</em></li>
        </ol>

        <h4>Lesson Plan (Paath Yojna)</h4>
        <p>Class mein jaane se pehle teacher jo preparation karta hai usko Lesson Plan kehte hain. <strong>J.F. Herbart</strong> ki 5-step approach sabse famous hai:</p>
        <ol>
          <li><strong>Preparation (Prastavna):</strong> Bacchon ke purv gyan (previous knowledge) ko naye topic se connect karna.</li>
          <li><strong>Presentation (Prastutikaran):</strong> Naya topic examples ke sath padhana.</li>
          <li><strong>Comparison/Association (Tulna):</strong> Purane aur naye concepts ki tulna karna.</li>
          <li><strong>Generalization (Samanyakaran):</strong> Rule ya conclusion nikalna.</li>
          <li><strong>Application (Anuprayog):</strong> Jo seekha usko use karwana (Homework/Practice).</li>
        </ol>
      `
    },
    {
      id: 'classroom-management',
      name: 'Classroom & Lab Management',
      theory: `
        <h3>Classroom and Lab Management</h3>
        <p>Ek computer lab ya classroom ko smoothly chalana ek teacher ki sabse badi skill hai. Discipline aur learning environment maintain karna zaroori hai.</p>
        
        <h4>Inclusive Education (Samaveshi Shiksha)</h4>
        <p>Normal baccho ke sath-sath specially-abled (Divyang) baccho ko ek hi normal classroom mein ek sath padhana. Isme education system ko bacche ki needs ke according adjust kiya jata hai (jaise visually impaired bacche ke liye screen reader software install karna), na ki bacche ko system ke according adjust hone ko bola jata hai.</p>
        
        <table class="comparison-table">
          <tr>
            <th>Integrated Education</th>
            <th>Inclusive Education</th>
          </tr>
          <tr>
            <td>Disabled bachha regular school aayega par usko general environment mein khud adjust hona padega.</td>
            <td>School apna environment aur methods bachhe ke hisaab se change karega (Zero rejection policy).</td>
          </tr>
        </table>

        <h4>Managing a Computer Lab</h4>
        <ul>
          <li><strong>Clear Rules:</strong> Lab mein no food/drink, no changing desktop background/settings. Ye rules shuru din se establish hone chahiye.</li>
          <li><strong>Visibility:</strong> Monitor screens aise arranged hon ki jab teacher round lagaye, toh sabki screen easily visible ho (U-shape arrangement is often best for labs).</li>
          <li><strong>Peer Tutoring (Sah-pathi Shikshan):</strong> Agar ek bright student jaldi apna practical task complete kar leta hai, toh usko idle baithne dene ke bajaye, doosre slow learner bacche ki help karne ke liye assign karna chahiye. Isse dono ka fayda hota hai.</li>
          <li><strong>Constructivism (Nirmitivaad):</strong> Teacher ka role ek 'dictator' ka nahi balki ek 'facilitator' (suvidhadata) aur guide ka hona chahiye. Baccho ko khud experiment karke sikhne dena chahiye.</li>
        </ul>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'assessment',
      question: 'What is the main objective of Formative Assessment?',
      options: [
        'To monitor student learning to provide ongoing feedback',
        'To assign grades at the end of the academic year',
        'To promote students to the next class',
        'To compare students with each other'
      ],
      correct: 0,
      explanation: 'Formative assessment (rachnatmak mulyankan) class ke dauran hota hai aur iska main purpose baccho ko feedback dena aur unki mistakes ko turant improve karna hai. Baaki options Summative assessment (end of term exams) ke features hain.'
    },
    {
      id: 2,
      topic: 'lesson-planning',
      question: 'Which domain of Bloom\'s Taxonomy deals with physical skills, movement, and hand-eye coordination?',
      options: [
        'Cognitive Domain',
        'Affective Domain',
        'Psychomotor Domain',
        'Spiritual Domain'
      ],
      correct: 2,
      explanation: 'Psychomotor domain physical movement, coordination aur motor skills (jaise keyboard par fast typing karna, mouse control) se related hai. Cognitive mind se, aur Affective heart (emotions/values) se related hai.'
    },
    {
      id: 3,
      topic: 'ict-education',
      question: 'SWAYAM is an initiative by the Government of India for providing:',
      options: [
        'Free mid-day meals to government schools',
        'Free Massive Open Online Courses (MOOCs)',
        'Free laptops to merit students',
        'Scholarships for studying abroad'
      ],
      correct: 1,
      explanation: 'SWAYAM (Study Webs of Active-Learning for Young Aspiring Minds) ek MOOC platform hai jo 9th class se lekar Post Graduation tak ke free online courses provide karta hai.'
    },
    {
      id: 4,
      topic: 'teaching-methods',
      question: 'According to John Dewey, education is a:',
      options: [
        'One-way process',
        'Bipolar process',
        'Tripolar process',
        'Multipolar process'
      ],
      correct: 2,
      explanation: 'John Dewey ne education ko ek Tripolar (Tri-mukhi) process mana hai jisme Teacher, Student aur Environment (Curriculum/Society) teeno aapas mein interact karte hain. John Adams ne isko pehle Bipolar bola tha (Teacher & Student).'
    },
    {
      id: 5,
      topic: 'teaching-methods',
      question: 'Which teaching method involves moving from \'Specific Examples\' to \'General Rules\'?',
      options: [
        'Deductive Method',
        'Inductive Method',
        'Project Method',
        'Lecture Method'
      ],
      correct: 1,
      explanation: 'Inductive method (Aagman vidhi) mein pehle hum bacchon ko specific examples dete hain aur fir unse analyze karwa ke ek general rule ya formula banate hain. Deductive iska bilkul opposite hota hai (Rule -> Examples).'
    },
    {
      id: 6,
      topic: 'teaching-methods',
      question: 'The idea of the \'Project Method\' of teaching was given by:',
      options: [
        'Socrates',
        'Jean-Jacques Rousseau',
        'William Heard Kilpatrick',
        'Friedrich Froebel'
      ],
      correct: 2,
      explanation: 'Project Method W.H. Kilpatrick ne develop kiya tha. Ye method pragmatism (prayojanvaad) philosophy par based hai aur Computer Science (Software development projects) sikhane ke liye sabse best methods mein se ek hai.'
    },
    {
      id: 7,
      topic: 'ict-education',
      question: 'What does CAI stand for in educational technology?',
      options: [
        'Computer Assisted Instruction',
        'Computer Aided Information',
        'Common Artificial Intelligence',
        'Central Academic Institute'
      ],
      correct: 0,
      explanation: 'CAI (Computer Assisted Instruction) ek self-learning technique hai jisme computers/software ka use karke students ko interactive tutorials, simulation aur practice exercises karwayi jati hain, bin kisi teacher ki direct help ke.'
    },
    {
      id: 8,
      topic: 'classroom-management',
      question: 'A bright student in your programming class has quickly finished his practical assignment while others are struggling. The best classroom management strategy is:',
      options: [
        'Let him play computer games to pass the time',
        'Ask him to leave the lab and take a break',
        'Assign him as a peer tutor to help slower students debug their code',
        'Tell him to sit quietly and read a book'
      ],
      correct: 2,
      explanation: 'Peer tutoring (saha-pathi shikshan) ek excellent strategy hai. Isse fast learner bacche ka revision aur confidence badhta hai (teaching helps learning), aur slow learner ko ek dost se comfort ke sath help mil jati hai.'
    },
    {
      id: 9,
      topic: 'ict-education',
      question: 'In a "Flipped Classroom" model:',
      options: [
        'Students sit facing the back of the classroom',
        'Theory is learned at home via videos, and homework/practicals are done in class with the teacher',
        'The teacher only asks questions and students do all the teaching',
        'Physical books are completely banned'
      ],
      correct: 1,
      explanation: 'Flipped classroom traditional teaching ka ulta hota hai. Bacche lecture ya theory ghar par pre-recorded video dekh kar aate hain, aur class ka time doubt-solving, practical activities aur assignments (jo pehle homework hota tha) karne mein use hota hai.'
    },
    {
      id: 10,
      topic: 'assessment',
      question: '"Assessment FOR learning" is another name for:',
      options: [
        'Summative Assessment',
        'Formative Assessment',
        'Diagnostic Assessment',
        'Placement Assessment'
      ],
      correct: 1,
      explanation: 'Formative Assessment ko "Assessment for learning" kaha jata hai kyunki ye sikhne ki process ke dauran aur aage improvement ke liye kiya jata hai. Summative "Assessment of learning" hota hai (jo seekh liya usko judge karna).'
    },
    {
      id: 11,
      topic: 'ed-psychology',
      question: 'Which law of learning by Thorndike emphasizes that "practice makes a man perfect"?',
      options: [
        'Law of Readiness',
        'Law of Exercise',
        'Law of Effect',
        'Law of Multiple Response'
      ],
      correct: 1,
      explanation: 'Law of Exercise (Abhyas ka niyam) kehta hai ki jis cheez ki baar-baar practice ki jati hai, wo utni hi strongly yaad rehti hai (use), aur jiski practice chhod di jaye wo weak ho jati hai (disuse).'
    },
    {
      id: 12,
      topic: 'ict-education',
      question: 'According to Edgar Dale\'s Cone of Experience, which of the following provides the highest retention of learning?',
      options: [
        'Reading a textbook',
        'Listening to an audio recording',
        'Watching a video demonstration',
        'Doing a real, direct purposeful experience (hands-on)'
      ],
      correct: 3,
      explanation: 'Edgar Dale ke experience cone ke anusar, jab bacche khud activity perform karte hain (hands-on/doing the real thing), toh retention sabse zyada (approx 90%) hota hai. Sirf padhne ya sunne se retention sabse kam hota hai.'
    },
    {
      id: 13,
      topic: 'lesson-planning',
      question: 'According to the Revised Bloom\'s Taxonomy (2001), what is the highest level of the cognitive domain?',
      options: [
        'Evaluating',
        'Synthesizing',
        'Creating',
        'Analyzing'
      ],
      correct: 2,
      explanation: '2001 mein Anderson aur Krathwohl ne taxonomy ko revise kiya jisme unhone "Creating" (Kuch naya banana) ko sabse highest level banaya. Purani 1956 taxonomy mein "Evaluation" top par tha.'
    },
    {
      id: 14,
      topic: 'assessment',
      question: 'An objective type test (like MCQs) is considered better than an essay type test primarily because it has high:',
      options: [
        'Subjectivity',
        'Reliability',
        'Length',
        'Vagueness'
      ],
      correct: 1,
      explanation: 'Objective tests ki Reliability (Vishvasniyata) bahut high hoti hai kyunki koi bhi examiner copy check kare, ya machine check kare, marks hamesha same aayenge. Essay type mein alag-alag teachers alag-alag marks de sakte hain (low reliability).'
    },
    {
      id: 15,
      topic: 'classroom-management',
      question: 'Inclusive Education implies:',
      options: [
        'Building special separate schools for disabled children',
        'Teaching regular and specially-abled children together in the same classroom by modifying the system',
        'Teaching boys and girls in separate classrooms',
        'Providing education only to highly gifted children'
      ],
      correct: 1,
      explanation: 'Inclusive Education (Samaveshi Shiksha) ka arth hai sabhi prakar ke bacchon ko (chahe wo kisi bhi tarah ke physically/mentally challenged hon) ek hi regular class mein sath bithakar padhana aur environment ko unke anukul banana.'
    },
    {
      id: 16,
      topic: 'lesson-planning',
      question: 'Which of the following is NOT a step in J.F. Herbart\'s lesson planning approach?',
      options: [
        'Preparation',
        'Presentation',
        'Generalization',
        'Punishment'
      ],
      correct: 3,
      explanation: 'Herbart ki 5-step paath yojna (Lesson Plan) mein Preparation, Presentation, Comparison/Association, Generalization aur Application aate hain. Punishment teaching ka koi step nahi hai.'
    },
    {
      id: 17,
      topic: 'assessment',
      question: 'The main focus of Continuous and Comprehensive Evaluation (CCE) is on:',
      options: [
        'Taking written exams every single day',
        'Holistic development of the learner',
        'Creating a sense of fear among students to make them study',
        'Making the evaluation system very rigid'
      ],
      correct: 1,
      explanation: 'CCE ka main udyaeshya student ka samagra vikas (holistic development) check karna hai. Isme academics (scholastic) ke sath-sath bache ka behavior, sports, art aur overall personality (co-scholastic) ko evaluate kiya jata hai.'
    },
    {
      id: 18,
      topic: 'teaching-methods',
      question: 'A teacher starts teaching \'Loops in C++\' by directly writing the \'for-loop\' syntax on the board and asking students to copy and memorize it. Which method is she using?',
      options: [
        'Deductive Method',
        'Inductive Method',
        'Project Method',
        'Heuristic Method'
      ],
      correct: 0,
      explanation: 'Teacher ne pehle Rule/Syntax bataya aur use ratne ko kaha, ye Deductive (Nigaman) vidhi hai (Rule to Example). Agar wo pehle example ke through repetitive task karwate aur fir us pattern se loop ka formula banate, toh wo Inductive (Aagman) hota.'
    },
    {
      id: 19,
      topic: 'teaching-methods',
      question: 'The Heuristic method of teaching, where the student is put in the place of an independent discoverer, was propounded by:',
      options: [
        'B.F. Skinner',
        'H.E. Armstrong',
        'Jean Piaget',
        'Lev Vygotsky'
      ],
      correct: 1,
      explanation: 'Heuristic method H.E. Armstrong ne diya tha. \'Heurisco\' ek Greek word hai jiska matlab hai "I find out" (Main khojta hun). Isme baccha khud ek scientist ki tarah problems ki khoj karke sikhata hai.'
    },
    {
      id: 20,
      topic: 'ict-education',
      question: 'What does MOOC stand for in the context of digital education?',
      options: [
        'Modern Open Online Courses',
        'Massive Open Online Courses',
        'Multiple Open Online Classes',
        'Micro Open Online Computers'
      ],
      correct: 1,
      explanation: 'MOOC ka full form Massive Open Online Courses hota hai. Ye internet par badi sankhya (Massive) mein students ko free ya affordable education dene ka ek open platform hai (e.g., Coursera, edX, NPTEL).'
    },
    {
      id: 21,
      topic: 'classroom-management',
      question: 'If a student repeatedly makes a syntax error in coding, the best action for a teacher is to:',
      options: [
        'Scold him in front of the whole class',
        'Take his keyboard and write the correct code for him',
        'Guide him to read compiler error messages and identify the issue himself',
        'Reduce his internal marks immediately'
      ],
      correct: 2,
      explanation: 'As a facilitator, teacher ko bacche ko khud apni galti dhundhna sikhana chahiye. Error messages read karke debugging sikhana problem-solving skill develop karega. Khud code theek karke dena (spoon-feeding) galat approach hai.'
    },
    {
      id: 22,
      topic: 'ed-psychology',
      question: 'Which psychologist is famous for his theory that a child is a "little scientist" who constructs his own knowledge by interacting with the physical environment?',
      options: [
        'Lev Vygotsky',
        'Jean Piaget',
        'Ivan Pavlov',
        'B.F. Skinner'
      ],
      correct: 1,
      explanation: 'Jean Piaget ki Cognitive Development theory manti hai ki bacche "Little Scientists" hote hain jo apne environment ke sath physically interact karke apni samajh (schemas) khud banate hain. Vygotsky ne social interaction ko zaroori mana tha.'
    },
    {
      id: 23,
      topic: 'ict-education',
      question: 'Blended Learning is defined as a combination of:',
      options: [
        'Two different offline coaching classes',
        'Online digital educational materials and traditional place-based classroom methods',
        'Mixing two different subjects in one textbook',
        'Reading books and writing notes simultaneously'
      ],
      correct: 1,
      explanation: 'Blended learning mein traditional face-to-face offline classes aur online e-learning ka mishran (blend) hota hai. Isse students ko flexibility bhi milti hai aur teacher ki personal attention bhi.'
    },
    {
      id: 24,
      topic: 'assessment',
      question: 'What is the fundamental difference between Measurement and Evaluation?',
      options: [
        'They are exactly the same concept',
        'Measurement is purely quantitative, while Evaluation includes quantitative data plus qualitative value judgements',
        'Evaluation is only about numbers, Measurement is about feelings',
        'Measurement is a much broader concept than Evaluation'
      ],
      correct: 1,
      explanation: 'Measurement (Mapan) ka matlab sirf numbers ya marks dena hai (jaise test mein 40/100 lana). Jabki Evaluation (Mulyankan) un numbers ko analyze karke batata hai ki 40/100 ka matlab kya hai (pass/fail/good/bad). Evaluation ek broader term hai.'
    },
    {
      id: 25,
      topic: 'ed-psychology',
      question: 'The law of "Readiness, Exercise, and Effect" are the primary laws of learning proposed by:',
      options: [
        'Ivan Pavlov',
        'B.F. Skinner',
        'E.L. Thorndike',
        'Albert Bandura'
      ],
      correct: 2,
      explanation: 'Edward Thorndike ne apni Trial and Error learning theory mein ye teen main laws diye the, jo batate hain ki motivation (readiness), practice (exercise), aur reward/punishment (effect) learning mein kaise kaam karte hain.'
    },
    {
      id: 26,
      topic: 'assessment',
      question: 'Which of the following is evaluated under the "Co-scholastic" area in CCE?',
      options: [
        'Mathematics examination score',
        'Programming practical exam',
        'Life skills, values, and attitudes',
        'Science project marks'
      ],
      correct: 2,
      explanation: 'CCE mein Scholastic (shaikshik) area mein school ke main subjects (Maths, Science, CS) aate hain. Co-scholastic (sah-shaikshik) area mein bache ke life skills, morals, games/sports, art, aur behavior ko evaluate kiya jata hai.'
    },
    {
      id: 27,
      topic: 'assessment',
      question: 'A computer teacher uses a \'Rubric\' for grading a final year software project. What is a Rubric?',
      options: [
        'A red-colored pen used strictly for checking exam papers',
        'A scoring guide detailing the specific criteria and standards used for evaluating student work',
        'A software tool that auto-generates error-free code',
        'A complex mathematical formula to calculate percentiles'
      ],
      correct: 1,
      explanation: 'Rubric ek scoring guide ya matrix hoti hai jisme pehle se defined hota hai ki kin-kin criteria par marking ki jayegi (e.g., Design ke 5 marks, Code logic ke 10 marks, Documentation ke 5 marks). Ye project grading ko fair aur transparent banata hai.'
    },
    {
      id: 28,
      topic: 'teaching-methods',
      question: 'Micro-teaching is a technique primarily used for:',
      options: [
        'Teaching complex topics to very small children',
        'Teaching biology topics under a microscope',
        'Teacher training to develop and master specific teaching skills',
        'Teaching a very short topic to a massive class of 500 students'
      ],
      correct: 2,
      explanation: 'Micro-teaching (Sukshma shikshan) teachers ki training (B.Ed/D.Ed) ka ek tarika hai. Isme ek teacher ek choti class (5-10 peers) ko chote time (5-10 min) ke liye padhata hai, taaki kisi ek specific teaching skill (jaise questioning ya board writing) ki practice kar sake.'
    },
    {
      id: 29,
      topic: 'classroom-management',
      question: 'What is the ideal role of a teacher in a Constructivist (Nirmitivaad) classroom?',
      options: [
        'A strict dictator who controls every action',
        'A passive observer who does nothing',
        'An active facilitator and guide who helps students discover knowledge',
        'The sole absolute provider of all knowledge'
      ],
      correct: 2,
      explanation: 'Constructivism (Nirmitivaad) manta hai ki bache gyan ka nirman apne aap khud karte hain. Isliye yahan teacher ka role sirf ek Facilitator (Suvidhadata) ka hota hai jo unhe resources de aur sahi rasta dikhaye, spoon-feeding na kare.'
    },
    {
      id: 30,
      topic: 'ed-psychology',
      question: 'The word \'Pedagogy\' literally means:',
      options: [
        'To scientifically guide the child',
        'To deeply understand the child',
        'To properly educate the child',
        'To lead the child'
      ],
      correct: 3,
      explanation: 'Pedagogy ek Greek word \'paidagogos\' se aaya hai. Yahan \'paidos\' ka matlab child (bachha) aur \'agogos\' ka matlab lead (netritva karna/le jana) hota hai. So it literally means "to lead the child" (shiksha shastra).'
    }
  ]
};

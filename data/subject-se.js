window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['se'] = {
  id: 'se',
  name: 'Software Engineering',
  icon: '📐',
  description: 'Learn SDLC, SRS, DFDs, Testing, aur Software Project Management ko easy Hinglish mein.',
  topics: [
    {
      id: 'sdlc-phases',
      name: 'Phases of SDLC',
      theory: `
        <h3>Software Development Life Cycle (SDLC)</h3>
        <p>SDLC ek step-by-step process hai jo software industry mein high-quality software design, develop aur test karne ke liye use hota hai. Iska main aim hota hai customer expectations ko meet karna within time and cost estimates.</p>
        
        <h4>Phases of SDLC</h4>
        <ul>
          <li><strong>1. Requirement Gathering & Analysis:</strong> Kya banana hai? Customer se requirements li jaati hain. Feasibility study hoti hai.</li>
          <li><strong>2. Design:</strong> Kaise banana hai? High-level aur Low-level design (Architecture, UI/UX, Database schema).</li>
          <li><strong>3. Implementation/Coding:</strong> Actual code likhna. Developers apna jaadu dikhate hain.</li>
          <li><strong>4. Testing:</strong> Jo banaya hai wo sahi chal raha hai ya nahi? Bugs find aur fix karna.</li>
          <li><strong>5. Deployment:</strong> Software ko real environment (production) mein dalna.</li>
          <li><strong>6. Maintenance:</strong> Future updates, bug fixes, aur improvements.</li>
        </ul>

        <h4>Popular SDLC Models</h4>
        <p>Waterfall, Spiral, Agile, V-Model, aur Iterative models commonly use hote hain.</p>
        
        <table class="comparison-table">
          <tr><th>Feature</th><th>Waterfall Model</th><th>Agile Model</th></tr>
          <tr><td>Flexibility</td><td>Rigid (Changes allow nahi hote easily)</td><td>Highly flexible (Welcome changes)</td></tr>
          <tr><td>Delivery</td><td>End mein ek sath</td><td>Sprints mein iterative delivery</td></tr>
          <tr><td>Best For</td><td>Small projects, clear requirements</td><td>Large, evolving projects</td></tr>
        </table>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Spiral Model specifically <strong>Risk Analysis</strong> ke liye best hota hai. Exam mein risk management ka naam aaye toh Spiral tick karna!
        </div>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          "Feasibility Study" kis phase mein aati hai? Ye Requirement Analysis phase ka hi ek part hai jismein check karte hain ki project financially aur technically possible hai ya nahi.
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p><strong>Scenario:</strong> Ek nayi WhatsApp jaisi chat app banani hai.</p>
        <p><strong>Step-by-step SDLC:</strong></p>
        <ul>
          <li><em>Requirement:</em> Texting, media share, end-to-end encryption chahiye.</li>
          <li><em>Design:</em> Screens kaise dikhengi, database mein messages kaise store honge.</li>
          <li><em>Coding:</em> Java/Kotlin aur Node.js mein code likhna.</li>
          <li><em>Testing:</em> Fake users bana kar check karna ki message deliver ho rahe hain.</li>
          <li><em>Deployment:</em> Play Store par app publish karna.</li>
        </ul>
      `
    },
    {
      id: 'srs',
      name: 'Software Requirements Specification (SRS)',
      theory: `
        <h3>Software Requirements Specification (SRS)</h3>
        <p>SRS ek document hai jo software ki saari zarooraton ko detail mein likhta hai. Ye customer aur development team ke beech ek 'agreement' ya contract ki tarah kaam karta hai.</p>
        
        <h4>Characteristics of a Good SRS</h4>
        <p>Ek acche SRS document mein IEEE standard (830) ke hisaab se ye khoobiyan honi chahiye:</p>
        <ul>
          <li><strong>Correct:</strong> Jo customer ko chahiye, wahi likha ho.</li>
          <li><strong>Unambiguous:</strong> Koi double meaning na ho. Har line clear ho.</li>
          <li><strong>Complete:</strong> Saari functionality aur constraints covered hon.</li>
          <li><strong>Consistent:</strong> Apas mein koi contradictions na hon (e.g., ek jagah password 8 chars, dusri jagah 6 chars na likha ho).</li>
          <li><strong>Modifiable:</strong> Changes easily kiye ja sakein.</li>
          <li><strong>Traceable:</strong> Har requirement ka origin pata ho aur uske aage ka development track ho sake.</li>
        </ul>

        <h4>Types of Requirements</h4>
        <table class="comparison-table">
          <tr><th>Functional Requirements</th><th>Non-Functional Requirements (NFR)</th></tr>
          <tr><td>System ko <em>kya</em> karna chahiye.</td><td>System ko <em>kaise</em> perform karna chahiye.</td></tr>
          <tr><td>Examples: Login functionality, payment processing, sending email.</td><td>Examples: Performance, Security, Scalability, Reliability.</td></tr>
        </table>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Non-functional requirements aksar system ki "Quality Attributes" ko define karti hain (e.g., system 2 seconds mein load hona chahiye).
        </div>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Exam mein puchte hain ki "Maintainability" kis type ki requirement hai. Ye Functional nahi, balki Non-Functional Requirement hai.
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p><strong>Library Management System ki Requirements:</strong></p>
        <ul>
          <li><strong>Functional:</strong> Librarian naya book add kar sake. Student book issue history dekh sake.</li>
          <li><strong>Non-Functional:</strong> App 500 concurrent users ko bina crash hue handle kare (Performance). Passwords encrypted store hon (Security).</li>
        </ul>
      `
    },
    {
      id: 'system-modeling',
      name: 'System Modeling (UML)',
      theory: `
        <h3>System Modeling & UML</h3>
        <p>Code likhne se pehle system ka blueprint banana System Modeling kehlata hai. Iske liye sabse popular language <strong>UML (Unified Modeling Language)</strong> hai.</p>
        
        <h4>Types of UML Diagrams</h4>
        <p>UML diagrams mainly do categories mein divided hain: <strong>Structural</strong> aur <strong>Behavioral</strong>.</p>
        
        <ul>
          <li><strong>Structural Diagrams (Static view):</strong> System ka structure dikhate hain.
            <ul>
              <li><strong>Class Diagram:</strong> Object-oriented design ki jaan. Classes, attributes, methods aur unke relationships (inheritance, association) dikhata hai.</li>
              <li><strong>Component Diagram:</strong> Software components kaise connected hain.</li>
              <li><strong>Deployment Diagram:</strong> Hardware nodes aur undeployed software.</li>
            </ul>
          </li>
          <li><strong>Behavioral Diagrams (Dynamic view):</strong> System ka behavior/flow dikhate hain.
            <ul>
              <li><strong>Use Case Diagram:</strong> Actors aur unke interactions (Use cases) dikhata hai. System <em>kya</em> karega from user's perspective.</li>
              <li><strong>Sequence Diagram:</strong> Objects ke beech messages ka time-ordered sequence.</li>
              <li><strong>Activity Diagram:</strong> Flowchart jaisa hota hai, ek activity se dusri tak ka control flow.</li>
              <li><strong>State Chart Diagram:</strong> Ek object ke alag-alag states aur transitions dikhata hai.</li>
            </ul>
          </li>
        </ul>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          UML mein <code>&lt;&lt;include&gt;&gt;</code> ka matlab hai mandatory relationship (e.g., Login is included in Withdraw Money), aur <code>&lt;&lt;extend&gt;&gt;</code> ka matlab hai optional behavior (e.g., Print Receipt extends Withdraw Money).
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p><strong>ATM System Use Case Analysis:</strong></p>
        <ul>
          <li><strong>Actors:</strong> Customer, Bank Admin, Bank Server.</li>
          <li><strong>Use Cases:</strong> Check Balance, Withdraw Cash, Deposit Cash.</li>
          <li><strong>Relationships:</strong> 'Withdraw Cash' use case hamesha 'Authenticate User' (Login) ko <em>include</em> karega, kyunki bina pin dale paise nahi nikal sakte.</li>
        </ul>
      `
    },
    {
      id: 'dfd',
      name: 'Data Flow Diagrams (DFDs)',
      theory: `
        <h3>Data Flow Diagrams (DFD)</h3>
        <p>DFD ek graphical representation hai jo dikhata hai ki information (data) system mein kaise flow karti hai. Ye batata hai data kahan se aata hai, kahan process hota hai, aur kahan store hota hai.</p>
        
        <h4>Components of DFD</h4>
        <ul>
          <li><strong>Process (Circle ya Bubble):</strong> Data ko transform karta hai (e.g., "Calculate Salary").</li>
          <li><strong>Data Flow (Arrow):</strong> Data kis direction mein ja raha hai.</li>
          <li><strong>Data Store (Open Rectangle / Parallel lines):</strong> Data kahan save hota hai (e.g., Database, File).</li>
          <li><strong>External Entity (Rectangle):</strong> System ke bahar ki cheezein jo data deti hain ya leti hain (e.g., User, Sensor, Another System).</li>
        </ul>
        
        <h4>Levels of DFD</h4>
        <ul>
          <li><strong>Level 0 DFD (Context Diagram):</strong> Pura system as a single process (1 bubble) dikhaya jata hai. Internal details hide hoti hain.</li>
          <li><strong>Level 1 DFD:</strong> Level 0 process ko main sub-processes mein break kiya jata hai.</li>
          <li><strong>Level 2 DFD:</strong> Level 1 ki aur detailed processes.</li>
        </ul>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          DFD mein kabhi bhi Control Flow (loops, if-else conditions) nahi dikhate. DFD sirf DATA ka flow dikhata hai. Control flow ke liye Flowchart use hota hai.
        </div>
        
        <table class="comparison-table">
          <tr><th>Rule</th><th>Valid / Invalid</th></tr>
          <tr><td>Entity se Entity direct data flow</td><td>❌ Invalid (Bich mein process hona zaroori hai)</td></tr>
          <tr><td>Data store se Data store direct flow</td><td>❌ Invalid</td></tr>
          <tr><td>Entity se Data store direct flow</td><td>❌ Invalid</td></tr>
          <tr><td>Process to Process</td><td>✅ Valid</td></tr>
        </table>
        
        <h4>Example (Worked Out)</h4>
        <p><strong>Food Delivery App (Level 0 DFD):</strong></p>
        <p>External Entities: Customer, Restaurant, Delivery Boy.</p>
        <p>Central Process: "Food Ordering System".</p>
        <p>Flow: Customer -&gt; (Order Info) -&gt; System -&gt; (Order Details) -&gt; Restaurant.</p>
        <p>Yahan sirf external entities aur central system ka interaction dikhega.</p>
      `
    },
    {
      id: 'software-testing',
      name: 'Software Testing',
      theory: `
        <h3>Software Testing</h3>
        <p>Testing ka maqsad ye find karna hai ki software mein errors/bugs toh nahi hain aur kya wo requirements ko meet karta hai.</p>
        
        <h4>Verification vs Validation (V&V)</h4>
        <table class="comparison-table">
          <tr><th>Verification</th><th>Validation</th></tr>
          <tr><td>"Are we building the product right?"</td><td>"Are we building the right product?"</td></tr>
          <tr><td>Process ko check karta hai (Reviews, Walkthroughs, Inspections).</td><td>Actual software ko test karta hai (Execution).</td></tr>
          <tr><td>Dynamic execution of code not required.</td><td>Requires execution of code.</td></tr>
        </table>
        
        <h4>Testing Techniques</h4>
        <ul>
          <li><strong>Black Box Testing:</strong> Tester ko internal code/logic ka kuch nahi pata hota. Sirf input deta hai aur output check karta hai. Techniques: Boundary Value Analysis (BVA), Equivalence Partitioning.</li>
          <li><strong>White Box Testing (Glass Box):</strong> Tester ko internal code pata hota hai. Techniques: Statement coverage, Branch coverage, Path coverage. Cyclomatic Complexity yahan kaam aati hai.</li>
        </ul>
        
        <h4>Levels of Testing</h4>
        <ol>
          <li><strong>Unit Testing:</strong> Sabse chota part (function/module) developer khud test karta hai.</li>
          <li><strong>Integration Testing:</strong> Modules ko jod kar test karna ki mil kar theek se kaam kar rahe hain ya nahi (Top-down, Bottom-up).</li>
          <li><strong>System Testing:</strong> Pure complete system ko as a whole test karna (Black box testing ka part).</li>
          <li><strong>Acceptance Testing:</strong> Customer/User end mein test karta hai.
            <ul>
              <li><strong>Alpha Testing:</strong> Developer ki site par hoti hai.</li>
              <li><strong>Beta Testing:</strong> Real environment mein real users (customers) karte hain.</li>
            </ul>
          </li>
        </ol>
        
        <div class="formula-box">
          <div class="formula-title">📐 Cyclomatic Complexity Formula</div>
          V(G) = E - N + 2
          <br>
          (E = Edges, N = Nodes in Control Flow Graph)
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p><strong>Boundary Value Analysis (BVA):</strong></p>
        <p>Agar password length 6 se 12 characters ki allow karni hai.</p>
        <p>BVA ke hisaab se hum boundaries par test karenge: Min, Min-1, Min+1, Max, Max-1, Max+1.</p>
        <p>Test values: 5, 6, 7, 11, 12, 13. (Kyunki sabse zyada bugs boundary limits par hi aate hain).</p>
      `
    },
    {
      id: 'spm',
      name: 'Software Project Management',
      theory: `
        <h3>Software Project Management (SPM)</h3>
        <p>SPM deal karta hai project planning, scheduling, cost estimation, aur risk management se. Goal hai project ko time, budget, aur quality ke andar deliver karna.</p>
        
        <h4>Cost & Effort Estimation</h4>
        <p>Size estimation ke liye KLOC (Kilo Lines of Code) ya Function Point (FP) metric use hota hai.</p>
        
        <h5>COCOMO Model (Constructive Cost Model)</h5>
        <p>Boehm ne diya tha. Ye project ko 3 categories mein divide karta hai:</p>
        <ul>
          <li><strong>Organic:</strong> Chota project, experienced team (e.g., Simple payroll system).</li>
          <li><strong>Semi-detached:</strong> Medium project, mixed experience team (e.g., Database system).</li>
          <li><strong>Embedded:</strong> Bahut complex, tight constraints (e.g., Flight control software).</li>
        </ul>
        
        <div class="formula-box">
          <div class="formula-title">📐 Basic COCOMO Formula</div>
          Effort (E) = a * (KLOC)^b  [Person-Months]
          <br>
          Development Time (D) = c * (E)^d  [Months]
          <br>
          <small>Values of a, b, c, d fix hoti hain depending on organic, semi-detached, ya embedded.</small>
        </div>
        
        <h4>Project Scheduling</h4>
        <ul>
          <li><strong>Gantt Chart:</strong> Ek bar chart hota hai jo project schedule dikhata hai (Start and finish dates of elements).</li>
          <li><strong>PERT / CPM:</strong> Network diagrams. <em>Critical Path</em> sabse lamba path hota hai network mein, jo project ka minimum completion time batata hai. Agar critical path delay hua, toh pura project delay hoga.</li>
        </ul>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          <strong>Risk Management</strong> ke 3 main steps hote hain: Risk Identification, Risk Analysis, aur Risk Mitigation.
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p><strong>Basic COCOMO Calculation:</strong></p>
        <p>Project size = 32 KLOC. Organic mode hai (constants: a=2.4, b=1.05).</p>
        <p>Effort = 2.4 * (32)^1.05 = 2.4 * 38.35 = ~92 Person-Months.</p>
        <p>Iska matlab ek insaan ko akele ye banane mein 92 mahine lagenge, ya 10 logo ko lagbhag 9.2 mahine.</p>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'sdlc-phases',
      question: 'Which of the following SDLC models is best suited for projects where requirements are highly uncertain and risk is high?',
      options: ['Waterfall Model', 'Spiral Model', 'Iterative Model', 'V-Model'],
      correct: 1,
      explanation: 'Spiral model mein Risk Analysis ka ek alag phase hota hai har loop/spiral mein. Isliye highly risky aur uncertain requirements wale projects ke liye ye sabse best hai. Waterfall clear requirements ke liye hota hai.'
    },
    {
      id: 2,
      topic: 'sdlc-phases',
      question: 'In the Software Development Life Cycle, during which phase is the "Feasibility Study" primarily conducted?',
      options: ['System Design', 'Requirement Analysis', 'Coding', 'Testing'],
      correct: 1,
      explanation: 'Requirement Analysis phase mein hi Feasibility study ki jaati hai taaki pata chal sake ki project financially, technically aur operationally feasible (possible) hai ya nahi.'
    },
    {
      id: 3,
      topic: 'sdlc-phases',
      question: 'Which SDLC model promotes continuous iteration of development and testing throughout the software development lifecycle of the project?',
      options: ['Agile Model', 'Waterfall Model', 'Big Bang Model', 'RAD Model'],
      correct: 0,
      explanation: 'Agile Model continuous iteration aur rapid delivery par focus karta hai. Sprints ke through development aur testing sath-sath chalti hai.'
    },
    {
      id: 4,
      topic: 'sdlc-phases',
      question: 'The phase in which the system is actually deployed in the real user environment is called:',
      options: ['Implementation', 'Integration', 'Deployment', 'Maintenance'],
      correct: 2,
      explanation: 'Deployment phase mein ready software ko production environment mein user ke liye release/install kiya jata hai. Implementation ka matlab coding hota hai.'
    },
    {
      id: 5,
      topic: 'sdlc-phases',
      question: 'What is a major drawback of the Waterfall Model?',
      options: ['It is very complex to understand', 'It cannot accommodate changes in requirements easily', 'It does not have a testing phase', 'It is only for very large projects'],
      correct: 1,
      explanation: 'Waterfall model rigid hota hai. Ek baar phase khatam hone ke baad piche jana mushkil hota hai, isliye requirement changes ko handle karna bahut costly aur difficult hota hai.'
    },
    {
      id: 6,
      topic: 'srs',
      question: 'Which of the following is an example of a Non-Functional Requirement (NFR)?',
      options: ['The system should allow users to reset their password', 'The system should generate a monthly sales report', 'The system should load the dashboard within 2 seconds', 'The admin can add new employees to the database'],
      correct: 2,
      explanation: '"System should load within 2 seconds" ek Performance metric hai jo Non-Functional Requirement (NFR) mein aati hai. Baaki sab Functional Requirements hain (system kya karega).'
    },
    {
      id: 7,
      topic: 'srs',
      question: 'An SRS document is said to be _________ if no two of its requirements conflict with each other.',
      options: ['Complete', 'Unambiguous', 'Consistent', 'Verifiable'],
      correct: 2,
      explanation: 'Consistent ka matlab hota hai contradictions na hona. Agar ek line mein password min 8 char hai aur dusri mein 6 char, toh SRS inconsistent hai.'
    },
    {
      id: 8,
      topic: 'srs',
      question: 'IEEE Standard for Software Requirements Specification (SRS) is:',
      options: ['IEEE 829', 'IEEE 830', 'IEEE 1012', 'IEEE 1058'],
      correct: 1,
      explanation: 'IEEE 830 standard specifically Software Requirements Specification (SRS) ke structure aur characteristics ke liye define kiya gaya hai.'
    },
    {
      id: 9,
      topic: 'srs',
      question: 'Which characteristic of an SRS ensures that a requirement has only one interpretation?',
      options: ['Correctness', 'Completeness', 'Unambiguous', 'Traceability'],
      correct: 2,
      explanation: 'Unambiguous matlab koi double meaning na hona. Har reader (developer, tester, client) ko requirement ka ek hi meaning samajh aana chahiye.'
    },
    {
      id: 10,
      topic: 'system-modeling',
      question: 'In UML, which diagram is used to represent the static structure of the system by showing system classes and their relationships?',
      options: ['Activity Diagram', 'Class Diagram', 'Sequence Diagram', 'Use Case Diagram'],
      correct: 1,
      explanation: 'Class Diagram ek structural diagram hai jo classes, unke attributes, methods aur relationships (like inheritance) ko statically dikhata hai.'
    },
    {
      id: 11,
      topic: 'system-modeling',
      question: 'Which UML diagram emphasizes the time-ordering of messages between objects?',
      options: ['State Chart Diagram', 'Component Diagram', 'Sequence Diagram', 'Activity Diagram'],
      correct: 2,
      explanation: 'Sequence Diagram behavioral category ka part hai aur ye dikhata hai ki objects ek dusre se over time (chronological order) kaise interact/communicate karte hain.'
    },
    {
      id: 12,
      topic: 'system-modeling',
      question: 'In a Use Case diagram, an actor represents:',
      options: ['Only a human user', 'A class in the system', 'Any external entity that interacts with the system', 'A software subsystem'],
      correct: 2,
      explanation: 'Actor zaroori nahi ki human ho. Wo koi dusra system, hardware device, ya timer bhi ho sakta hai jo system ke bahar hai aur usse interact karta hai.'
    },
    {
      id: 13,
      topic: 'system-modeling',
      question: 'What does the <code>&lt;&lt;extend&gt;&gt;</code> stereotype mean in a Use Case diagram?',
      options: ['A mandatory part of the base use case', 'An optional or exceptional behavior of the base use case', 'An inheritance relationship between actors', 'None of the above'],
      correct: 1,
      explanation: '<code>&lt;&lt;extend&gt;&gt;</code> batata hai ki ek use case dusre base use case ka optional ya conditional behavior add karta hai (e.g., Print Receipt optional hai Withdraw Cash mein).'
    },
    {
      id: 14,
      topic: 'dfd',
      question: 'Which of the following is NOT a valid component of a Data Flow Diagram (DFD)?',
      options: ['Data Store', 'Process', 'Control Flow', 'External Entity'],
      correct: 2,
      explanation: 'DFD mein sirf Data ka flow hota hai. Control Flow (jaise if-else, loops) DFD mein dikhana galat hai, uske liye flowcharts use hote hain.'
    },
    {
      id: 15,
      topic: 'dfd',
      question: 'A Level 0 DFD is also known as:',
      options: ['Detailed DFD', 'Context Diagram', 'System Architecture Diagram', 'Entity Relationship Diagram'],
      correct: 1,
      explanation: 'Level 0 DFD ko Context Diagram kehte hain kyunki ye pure system ko as a single process dikhata hai uske external environment (entities) ke context mein.'
    },
    {
      id: 16,
      topic: 'dfd',
      question: 'According to DFD rules, which of the following data flows is strictly prohibited?',
      options: ['From Process to Data Store', 'From External Entity to Process', 'From Data Store to Data Store', 'From Process to Process'],
      correct: 2,
      explanation: 'Data store khud se data transfer nahi kar sakte. Data flow hamesha kisi Process ke through hi hona chahiye (Data Store -&gt; Process -&gt; Data Store).'
    },
    {
      id: 17,
      topic: 'dfd',
      question: 'In a DFD, a rectangle symbol is typically used to represent:',
      options: ['Process', 'Data Store', 'External Entity', 'Data Flow'],
      correct: 2,
      explanation: 'Standard DFD notations (Gane & Sarson / Yourdon & DeMarco) mein External Entity ko square/rectangle se represent karte hain. Process ke liye circle/bubble hota hai.'
    },
    {
      id: 18,
      topic: 'software-testing',
      question: '"Are we building the right product?" - This question is answered during:',
      options: ['Verification', 'Validation', 'Debugging', 'Maintenance'],
      correct: 1,
      explanation: 'Validation ensure karta hai ki actual software customer ki zarurat (requirements) poori kar raha hai ("Are we building the right product?"). Verification process check karta hai ("Are we building the product right?").'
    },
    {
      id: 19,
      topic: 'software-testing',
      question: 'Which of the following is a Black Box Testing technique?',
      options: ['Statement Coverage', 'Cyclomatic Complexity', 'Boundary Value Analysis', 'Path Coverage'],
      correct: 2,
      explanation: 'Boundary Value Analysis (BVA) ek black-box testing technique hai. Statement, Path coverage aur Cyclomatic complexity White Box testing se related hain jahan code dekha jata hai.'
    },
    {
      id: 20,
      topic: 'software-testing',
      question: 'Beta testing is typically performed by:',
      options: ['Independent testing team in the development environment', 'The developers of the software', 'End users at their own site/environment', 'Quality Assurance team before release'],
      correct: 2,
      explanation: 'Beta testing software ko live hone se theek pehle real end-users ke dwara unke real environment mein ki jati hai (e.g., Beta versions of apps). Alpha testing developer site par hoti hai.'
    },
    {
      id: 21,
      topic: 'software-testing',
      question: 'What is the Cyclomatic Complexity of a program with 8 edges and 6 nodes in its control flow graph?',
      options: ['4', '5', '6', '2'],
      correct: 0,
      explanation: 'Cyclomatic Complexity ka formula hai V(G) = Edges - Nodes + 2. Yahan E=8, N=6. So V(G) = 8 - 6 + 2 = 4.'
    },
    {
      id: 22,
      topic: 'software-testing',
      question: 'Testing individual components or modules of a software independently is known as:',
      options: ['Integration Testing', 'System Testing', 'Acceptance Testing', 'Unit Testing'],
      correct: 3,
      explanation: 'Sabse basic level par jab ek akela function ya module isolate karke test hota hai usko Unit Testing kehte hain. Ye generally developers khud karte hain.'
    },
    {
      id: 23,
      topic: 'spm',
      question: 'In the COCOMO model, a project that is relatively small, with well-understood requirements and an experienced team, is classified as:',
      options: ['Embedded', 'Semi-detached', 'Organic', 'Iterative'],
      correct: 2,
      explanation: 'Organic mode chote aur simple projects ke liye hota hai jahan team experienced hoti hai. Embedded mode complex aur strict constraint wale projects ke liye hota hai.'
    },
    {
      id: 24,
      topic: 'spm',
      question: 'In Project Scheduling, the longest path through a network diagram that determines the minimum project duration is called the:',
      options: ['Slack Path', 'Critical Path', 'PERT Path', 'Milestone Path'],
      correct: 1,
      explanation: 'Critical Path network (CPM/PERT) ka sabse lamba path hota hai. Is path par aane wale tasks mein delay ka matlab hai pure project ke schedule mein delay hona (Slack = 0).'
    },
    {
      id: 25,
      topic: 'spm',
      question: 'Which metric is primarily used in the basic COCOMO model to estimate effort?',
      options: ['Function Points (FP)', 'Lines of Code (KLOC)', 'Number of Classes', 'Number of Use Cases'],
      correct: 1,
      explanation: 'Basic COCOMO model mein effort calculate karne ke liye size of software use hota hai, jo KLOC (Kilo Lines Of Code) mein measure kiya jata hai.'
    },
    {
      id: 26,
      topic: 'spm',
      question: 'A bar chart that shows the start and finish dates of the terminal elements and summary elements of a project is a:',
      options: ['PERT Chart', 'Use Case Diagram', 'Gantt Chart', 'Control Flow Graph'],
      correct: 2,
      explanation: 'Gantt chart ek horizontal bar chart hota hai jo project schedule, tasks ki start/end dates aur dependencies ko visually track karne ke kaam aata hai.'
    },
    {
      id: 27,
      topic: 'spm',
      question: 'Which is NOT a core step in the Risk Management process?',
      options: ['Risk Identification', 'Risk Mitigation', 'Risk Analysis', 'Risk Coding'],
      correct: 3,
      explanation: 'Risk Management mein 3 main steps aate hain: Risk ko Identify karna, usko Analyze karna (impact aur probability), aur phir Risk ko Mitigate (kam ya khatam) karna. "Risk Coding" jaisa kuch nahi hota.'
    },
    {
      id: 28,
      topic: 'system-modeling',
      question: 'In Object-Oriented Modeling, which concept allows a new class to inherit attributes and methods from an existing class?',
      options: ['Polymorphism', 'Encapsulation', 'Inheritance', 'Abstraction'],
      correct: 2,
      explanation: 'Inheritance wo mechanism hai jismein ek child class parent class ke features (attributes aur methods) ko inherit/reuse karti hai, isse code reusability badhti hai.'
    },
    {
      id: 29,
      topic: 'dfd',
      question: 'When decomposing a Level 0 DFD into a Level 1 DFD, the rule that inputs and outputs must remain consistent between the levels is called:',
      options: ['Balancing', 'Decomposition', 'Abstraction', 'Normalization'],
      correct: 0,
      explanation: 'Balancing ka matlab hota hai ki parent DFD aur child DFD ke external inputs aur outputs same hone chahiye, taaki system boundary change na ho.'
    },
    {
      id: 30,
      topic: 'sdlc-phases',
      question: 'Which of the following is NOT a phase of the standard Software Development Life Cycle (SDLC)?',
      options: ['Requirement Analysis', 'Hardware Assembly', 'Design', 'Maintenance'],
      correct: 1,
      explanation: 'SDLC purely software ki life cycle hoti hai (Requirements, Design, Coding, Testing, Deployment, Maintenance). Hardware assembly iska part nahi hai.'
    }
  ]
};

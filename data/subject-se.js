window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['se'] = {
  id: 'se',
  name: 'Software Engineering',
  icon: '📐',
  description: 'SDLC, Software Models, SRS, DFD, Testing, Project Management — complete coverage',
  topics: [
    {
      id: 'sdlc',
      name: 'Software Development Life Cycle (SDLC)',
      theory: `
        <h3>SDLC kya hai?</h3>
        <p>SDLC (Software Development Life Cycle) ek systematic process hai jo software ke planning se leke maintenance tak ke saare steps define karta hai. Ye ensure karta hai ki high-quality software time pe aur budget mein deliver ho.</p>

        <h4>SDLC ke Phases:</h4>
        <ol>
          <li><strong>Requirement Gathering & Analysis:</strong> Client se milke samajhna ki software kya karna chahiye. Output: SRS (Software Requirement Specification) document.</li>
          <li><strong>System Design:</strong> Architecture, modules, data flow, database design — sab plan karna. Output: HLD (High Level Design) aur LLD (Low Level Design) documents.</li>
          <li><strong>Implementation/Coding:</strong> Actual code likhna based on design documents. Developers coding karte hain.</li>
          <li><strong>Testing:</strong> Bugs dhundhna aur fix karna. Unit testing, Integration testing, System testing, Acceptance testing.</li>
          <li><strong>Deployment:</strong> Software ko production environment mein release karna.</li>
          <li><strong>Maintenance:</strong> Bugs fix karna, updates dena, enhancements karna. Ye sabse lamba phase hota hai.</li>
        </ol>

        <h4>SDLC Models:</h4>

        <p><strong>1. Waterfall Model (Classical/Linear Sequential):</strong></p>
        <ul>
          <li>Phases ek ke baad ek sequentially hote hain — previous phase complete hone ke baad hi next start hota hai.</li>
          <li>Koi backtracking nahi — ek baar phase complete, toh wapas nahi jaate.</li>
          <li><strong>Advantages:</strong> Simple, easy to understand, well-documented.</li>
          <li><strong>Disadvantages:</strong> No flexibility, late feedback, high risk — agar requirement galat samjhi toh end mein pata chalega.</li>
          <li><strong>Best for:</strong> Small projects with well-defined, stable requirements.</li>
        </ul>

        <p><strong>2. Iterative/Incremental Model:</strong></p>
        <ul>
          <li>Software ko chote-chote increments mein develop karte hain. Har increment ek usable version deliver karta hai.</li>
          <li><strong>Advantages:</strong> Early delivery, feedback milta rehta hai, risk kam.</li>
        </ul>

        <p><strong>3. Spiral Model (Boehm, 1988):</strong></p>
        <ul>
          <li>Risk-driven model. Har iteration (spiral) mein 4 quadrants hote hain: Planning → Risk Analysis → Engineering → Evaluation.</li>
          <li><strong>Key Feature:</strong> Risk analysis har phase mein hoti hai — isliye ye high-risk, large projects ke liye best hai.</li>
          <li><strong>Disadvantages:</strong> Expensive, risk analysis ke liye expertise chahiye.</li>
        </ul>

        <p><strong>4. V-Model (Verification & Validation):</strong></p>
        <ul>
          <li>Waterfall ka extension — har development phase ke corresponding ek testing phase hota hai.</li>
          <li>Requirements → Acceptance Testing, System Design → System Testing, Module Design → Integration Testing, Coding → Unit Testing.</li>
          <li><strong>Key Feature:</strong> Testing early plan hoti hai (test planning development ke saath).</li>
        </ul>

        <p><strong>5. Agile Model:</strong></p>
        <ul>
          <li>Iterative + Incremental + Flexible. Customer feedback ke basis pe continuously adapt karte hain.</li>
          <li><strong>Agile Manifesto Values:</strong> Individuals & interactions > processes & tools; Working software > comprehensive documentation; Customer collaboration > contract negotiation; Responding to change > following a plan.</li>
          <li><strong>Popular Agile Methodologies:</strong> Scrum, Kanban, XP (Extreme Programming).</li>
          <li><strong>Scrum:</strong> Sprints (2-4 week iterations), Daily standup, Product backlog, Sprint review.</li>
        </ul>

        <p><strong>6. Prototype Model:</strong></p>
        <ul>
          <li>Pehle ek prototype (working model) banate hain jo user ko dikhate hain. Feedback ke baad refine karte hain.</li>
          <li><strong>Best for:</strong> Jab requirements clear nahi hain.</li>
          <li><strong>Types:</strong> Throwaway prototype (use karke discard) vs Evolutionary prototype (refine karke final product banao).</li>
        </ul>

        <p><strong>7. RAD (Rapid Application Development):</strong></p>
        <ul>
          <li>Fast development with minimal planning. Reusable components aur visual tools use karta hai.</li>
          <li>Phases: Requirements → User Design → Construction → Cutover.</li>
        </ul>

        <table class="comparison-table">
          <tr><th>Model</th><th>Best For</th><th>Risk Handling</th><th>Flexibility</th></tr>
          <tr><td>Waterfall</td><td>Small, well-defined projects</td><td>Low</td><td>No</td></tr>
          <tr><td>Spiral</td><td>Large, high-risk projects</td><td>Excellent</td><td>High</td></tr>
          <tr><td>V-Model</td><td>Safety-critical systems</td><td>Medium</td><td>No</td></tr>
          <tr><td>Agile</td><td>Dynamic requirements, web apps</td><td>Good</td><td>Very High</td></tr>
          <tr><td>Prototype</td><td>Unclear requirements</td><td>Medium</td><td>High</td></tr>
          <tr><td>RAD</td><td>Quick delivery needed</td><td>Low</td><td>Medium</td></tr>
        </table>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Spiral Model = Risk-driven (ye sabse common exam question hai!). V-Model = Testing ke saath development parallel plan hoti hai. Waterfall = No backtracking.
        </div>
      `
    },
    {
      id: 'srs',
      name: 'SRS & System Modeling',
      theory: `
        <h3>Software Requirement Specification (SRS)</h3>
        <p>SRS document software ke liye ek <strong>complete description</strong> hai — kya karna hai, kaise behave karna hai, constraints kya hain — sab kuch likha hota hai. Ye development team aur client ke beech ka agreement hai.</p>

        <h4>SRS mein kya hota hai:</h4>
        <ul>
          <li><strong>Functional Requirements:</strong> System kya karega — features, inputs, outputs, behavior (e.g., "User login kar sake", "Report generate ho").</li>
          <li><strong>Non-Functional Requirements:</strong> Quality attributes — performance, security, reliability, usability, scalability (e.g., "Page 2 seconds mein load ho", "99.9% uptime").</li>
          <li><strong>Constraints:</strong> Technical, budget, timeline, regulatory limitations.</li>
        </ul>

        <h4>Good SRS ki Properties (IEEE 830):</h4>
        <ul>
          <li><strong>Correct</strong> — Har requirement accurate ho</li>
          <li><strong>Unambiguous</strong> — Sirf ek hi interpretation possible ho</li>
          <li><strong>Complete</strong> — Koi requirement chhooti na rahe</li>
          <li><strong>Consistent</strong> — Requirements ek doosre se contradict na karein</li>
          <li><strong>Verifiable</strong> — Test kiya ja sake ki requirement meet ho rahi hai ya nahi</li>
          <li><strong>Traceable</strong> — Har requirement ko trace kar sakein design, code, test mein</li>
          <li><strong>Modifiable</strong> — Asani se change kar sakein</li>
        </ul>

        <h3>System Modeling Tools:</h3>
        <h4>Data Flow Diagram (DFD):</h4>
        <p>DFD system mein data ka flow dikhata hai — data kahan se aata hai, kahan process hota hai, kahan store hota hai, kahan jata hai.</p>
        <table class="comparison-table">
          <tr><th>Symbol</th><th>Name</th><th>Description</th></tr>
          <tr><td>Rectangle</td><td>External Entity</td><td>System ke bahar ka source/destination (e.g., Customer, Admin)</td></tr>
          <tr><td>Circle/Rounded Rectangle</td><td>Process</td><td>Data pe action hoti hai (e.g., Validate, Calculate)</td></tr>
          <tr><td>Open Rectangle (two lines)</td><td>Data Store</td><td>Data storage (e.g., Database, File)</td></tr>
          <tr><td>Arrow</td><td>Data Flow</td><td>Direction of data movement</td></tr>
        </table>

        <h4>DFD Levels:</h4>
        <ul>
          <li><strong>Level 0 (Context Diagram):</strong> Poora system ek single process ke roop mein. External entities dikhaata hai.</li>
          <li><strong>Level 1:</strong> Main processes break kiye jaate hain.</li>
          <li><strong>Level 2, 3...:</strong> Further decomposition — processes aur detail mein break hote hain.</li>
        </ul>

        <div class="tip-box">
          <div class="tip-title">💡 DFD Rules</div>
          <ul>
            <li>Do external entities directly ek doosre se data exchange nahi kar sakte (process ke through jaana chahiye).</li>
            <li>Do data stores directly ek doosre ko data nahi bhej sakte.</li>
            <li>Har process mein minimum ek input aur ek output hona chahiye.</li>
          </ul>
        </div>
      `
    },
    {
      id: 'testing',
      name: 'Software Testing',
      theory: `
        <h3>Software Testing kya hai?</h3>
        <p>Testing ek process hai jisme hum software mein bugs, defects, aur errors dhundhte hain. Goal ye hai ki software expected results de aur quality standards meet kare.</p>

        <h4>Testing Levels:</h4>
        <ol>
          <li><strong>Unit Testing:</strong> Individual modules/functions test karna. Developer karta hai. Sabse pehle hoti hai.</li>
          <li><strong>Integration Testing:</strong> Modules ko combine karke test karna — interfaces sahi kaam kar rahe hain ya nahi. Types: Big Bang, Top-Down, Bottom-Up, Sandwich/Hybrid.</li>
          <li><strong>System Testing:</strong> Poora system as a whole test karna against SRS. Independent test team karta hai.</li>
          <li><strong>Acceptance Testing:</strong> Client/user test karta hai — software requirements meet kar raha hai ya nahi. Alpha (in-house) aur Beta (select users ke paas).</li>
        </ol>

        <h4>Testing Types:</h4>
        <table class="comparison-table">
          <tr><th>White Box (Structural)</th><th>Black Box (Functional)</th><th>Grey Box</th></tr>
          <tr><td>Internal code structure test hoti hai</td><td>Sirf input/output test hota hai, code nahi dekhte</td><td>Partial knowledge of code</td></tr>
          <tr><td>Developer karta hai</td><td>Tester karta hai</td><td>Both</td></tr>
          <tr><td>Techniques: Statement Coverage, Branch Coverage, Path Coverage, Loop Testing</td><td>Techniques: Equivalence Partitioning, Boundary Value Analysis (BVA), Decision Table, State Transition</td><td>Mix of both</td></tr>
        </table>

        <h4>White Box Testing Techniques:</h4>
        <ul>
          <li><strong>Statement Coverage:</strong> Har line of code kam se kam ek baar execute ho. Formula: (Executed statements / Total statements) × 100%</li>
          <li><strong>Branch/Decision Coverage:</strong> Har branch (if-else ka true & false dono) kam se kam ek baar execute ho.</li>
          <li><strong>Path Coverage:</strong> Sabhi possible execution paths test karna. Most thorough but most expensive.</li>
          <li><strong>Cyclomatic Complexity (McCabe):</strong> V(G) = E - N + 2P, where E=edges, N=nodes, P=connected components. Ye minimum test cases batata hai jo path coverage ke liye chahiye.</li>
        </ul>

        <div class="formula-box">
          <div class="formula-title">📐 Cyclomatic Complexity Formulas</div>
          V(G) = E - N + 2 (for single component graph)<br>
          V(G) = Number of decision points + 1<br>
          V(G) = Number of regions in the flow graph
        </div>

        <h4>Black Box Testing Techniques:</h4>
        <ul>
          <li><strong>Equivalence Partitioning:</strong> Input domain ko valid aur invalid partitions mein divide karo. Har partition se ek test case enough hai.</li>
          <li><strong>Boundary Value Analysis (BVA):</strong> Boundaries pe test karo (min, min+1, max-1, max) kyunki most bugs boundaries pe hote hain.</li>
          <li><strong>Decision Table Testing:</strong> Complex business rules ke liye combinations test karna.</li>
        </ul>

        <h4>Other Important Testing Types:</h4>
        <ul>
          <li><strong>Regression Testing:</strong> Code change ke baad purane test cases dobara run karna — kahi naya change purane features na tod de.</li>
          <li><strong>Smoke Testing:</strong> Initial testing — basic functions kaam kar rahe hain ya nahi (build stable hai ya nahi).</li>
          <li><strong>Sanity Testing:</strong> Specific bug fix ke baad wo particular area test karna.</li>
          <li><strong>Performance Testing:</strong> Load Testing (expected load), Stress Testing (beyond capacity), Volume Testing (large data).</li>
          <li><strong>Security Testing:</strong> Vulnerabilities dhundhna.</li>
        </ul>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Alpha Testing = Developer's site pe users karte hain (controlled environment).<br>
          Beta Testing = User's site pe users karte hain (real environment).<br>
          Ye exam mein aksar confuse karte hain!
        </div>
      `
    },
    {
      id: 'project-management',
      name: 'Software Project Management',
      theory: `
        <h3>Software Project Management</h3>
        <p>Project management ka goal hai ki software project ko successfully deliver karna — on time, within budget, with quality.</p>

        <h4>Project Planning Activities:</h4>
        <ul>
          <li><strong>Estimation:</strong> Size, effort, cost, time estimate karna.</li>
          <li><strong>Scheduling:</strong> Tasks ko timeline pe plan karna.</li>
          <li><strong>Risk Management:</strong> Risks identify, analyze, aur mitigate karna.</li>
          <li><strong>Quality Assurance:</strong> Quality standards define aur enforce karna.</li>
        </ul>

        <h4>Effort Estimation Techniques:</h4>
        <p><strong>1. Lines of Code (LOC):</strong> Code ki lines se size estimate karna.</p>
        <p><strong>2. Function Point Analysis (FPA):</strong> Software ki functionality ke basis pe size estimate karna, language independent. External Inputs, External Outputs, External Inquiries, Internal Logical Files, External Interface Files count karte hain.</p>
        <p><strong>3. COCOMO (COnstructive COst MOdel) — by Barry Boehm:</strong></p>
        <ul>
          <li><strong>Basic COCOMO:</strong> Effort = a × (KLOC)^b. Three modes — Organic (small team, simple), Semi-detached (medium), Embedded (complex, tight constraints).</li>
          <li><strong>Intermediate COCOMO:</strong> Basic + cost drivers (reliability, complexity, experience, etc.).</li>
          <li><strong>Detailed COCOMO:</strong> Phase-wise estimation.</li>
        </ul>

        <div class="formula-box">
          <div class="formula-title">📐 Basic COCOMO Formulas</div>
          <strong>Organic:</strong> Effort = 2.4 × (KLOC)^1.05, Time = 2.5 × (Effort)^0.38<br>
          <strong>Semi-detached:</strong> Effort = 3.0 × (KLOC)^1.12, Time = 2.5 × (Effort)^0.35<br>
          <strong>Embedded:</strong> Effort = 3.6 × (KLOC)^1.20, Time = 2.5 × (Effort)^0.32
        </div>

        <h4>Scheduling Tools:</h4>
        <ul>
          <li><strong>Gantt Chart:</strong> Bar chart jo tasks ka time duration dikhata hai. Simple, visual, easy to understand. Limitation: task dependencies clearly nahi dikhata.</li>
          <li><strong>PERT (Program Evaluation and Review Technique):</strong> Network diagram — activities as nodes/arrows. Probabilistic time estimates use karta hai (Optimistic, Most Likely, Pessimistic).</li>
          <li><strong>CPM (Critical Path Method):</strong> Longest path in the network = Critical Path. Ye minimum project duration batata hai. Activities on critical path mein delay = project delay.</li>
        </ul>

        <div class="formula-box">
          <div class="formula-title">📐 PERT Expected Time</div>
          Expected Time (TE) = (Optimistic + 4 × Most Likely + Pessimistic) / 6<br>
          Variance = ((Pessimistic - Optimistic) / 6)²
        </div>

        <h4>Software Quality Models:</h4>
        <ul>
          <li><strong>CMM/CMMI (Capability Maturity Model Integration):</strong> 5 levels — Initial (1), Managed (2), Defined (3), Quantitatively Managed (4), Optimizing (5).</li>
          <li><strong>ISO 9001:</strong> Quality management system standard.</li>
          <li><strong>Six Sigma:</strong> Quality improvement methodology — DMAIC (Define, Measure, Analyze, Improve, Control).</li>
        </ul>

        <h4>Coupling & Cohesion:</h4>
        <table class="comparison-table">
          <tr><th>Coupling (Module Dependency)</th><th>Cohesion (Module Internal Strength)</th></tr>
          <tr><td>Modules ke beech ki dependency ka measure</td><td>Ek module ke andar elements kitne related hain</td></tr>
          <tr><td><strong>LOW coupling = GOOD</strong></td><td><strong>HIGH cohesion = GOOD</strong></td></tr>
          <tr><td>Types (Low→High): Data → Stamp → Control → External → Common → Content</td><td>Types (Low→High): Coincidental → Logical → Temporal → Procedural → Communicational → Sequential → Functional</td></tr>
        </table>

        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Good software design = LOW Coupling + HIGH Cohesion. "Low Co, High Co" yaad rakho. Functional cohesion best hai, Coincidental worst. Data coupling best hai, Content coupling worst.
        </div>
      `
    }
  ],
  questions: [
    {
      id: 1, topic: 'sdlc',
      question: 'Which SDLC model is best suited for projects where requirements are well-defined and unlikely to change?',
      options: ['Agile Model', 'Spiral Model', 'Waterfall Model', 'Prototype Model'],
      correct: 2,
      explanation: 'Waterfall Model best hai jab requirements stable aur well-defined hain, kyunki isme ek baar phase complete hone ke baad wapas nahi jaate.'
    },
    {
      id: 2, topic: 'sdlc',
      question: 'The Spiral Model is primarily driven by:',
      options: ['Customer feedback', 'Risk analysis', 'Code reuse', 'Rapid prototyping'],
      correct: 1,
      explanation: 'Spiral Model ek risk-driven model hai. Har iteration mein risk analysis hoti hai, isliye ye large aur high-risk projects ke liye best hai.'
    },
    {
      id: 3, topic: 'sdlc',
      question: 'In the V-Model, which testing phase corresponds to the System Design phase?',
      options: ['Unit Testing', 'Integration Testing', 'System Testing', 'Acceptance Testing'],
      correct: 2,
      explanation: 'V-Model mein har development phase ki ek corresponding testing phase hoti hai. System Design → System Testing, Module Design → Integration Testing, Coding → Unit Testing, Requirements → Acceptance Testing.'
    },
    {
      id: 4, topic: 'sdlc',
      question: 'Which of the following is NOT a principle of the Agile Manifesto?',
      options: ['Individuals and interactions over processes and tools', 'Working software over comprehensive documentation', 'Following a plan over responding to change', 'Customer collaboration over contract negotiation'],
      correct: 2,
      explanation: 'Agile Manifesto kehta hai "Responding to change over following a plan" — matlab change ko welcome karo, rigid plan follow mat karo. Option C iska ulta hai.'
    },
    {
      id: 5, topic: 'sdlc',
      question: 'The RAD (Rapid Application Development) model emphasizes:',
      options: ['Thorough documentation and planning', 'Extremely short development cycles using reusable components', 'Extensive risk analysis in every iteration', 'Strict sequential phase execution'],
      correct: 1,
      explanation: 'RAD model ka focus fast development hai — reusable components, visual tools, aur minimal planning ke saath. Short development cycles (60-90 days) mein deliver karna goal hai.'
    },
    {
      id: 6, topic: 'sdlc',
      question: 'In Scrum (Agile), a time-boxed iteration of 2-4 weeks is called a:',
      options: ['Milestone', 'Sprint', 'Phase', 'Build'],
      correct: 1,
      explanation: 'Scrum mein ek iteration ko Sprint kehte hain, jo typically 2-4 weeks ki hoti hai. Har Sprint ke end mein ek potentially shippable product increment deliver hota hai.'
    },
    {
      id: 7, topic: 'sdlc',
      question: 'Which SDLC model creates a working model of the system early on to clarify requirements?',
      options: ['Waterfall', 'Spiral', 'Prototype', 'V-Model'],
      correct: 2,
      explanation: 'Prototype Model mein pehle ek working model (prototype) banate hain jo client ko dikhate hain. Isse requirements clear hoti hain. Unclear requirements ke liye best hai.'
    },
    {
      id: 8, topic: 'srs',
      question: 'Which of the following is a Non-Functional Requirement?',
      options: ['The system shall allow user login', 'The system shall generate monthly reports', 'The system shall respond within 2 seconds', 'The system shall send email notifications'],
      correct: 2,
      explanation: 'Response time ek performance attribute hai — ye Non-Functional Requirement hai. Functional requirements define karte hain ki system KYA karega, Non-functional batate hain ki KITNA achha karega (performance, security, reliability).'
    },
    {
      id: 9, topic: 'srs',
      question: 'A Context Diagram (Level 0 DFD) shows the system as:',
      options: ['Multiple detailed processes with data stores', 'A single process with external entities and data flows', 'Only the database schema', 'The physical architecture of the system'],
      correct: 1,
      explanation: 'Context Diagram (Level 0 DFD) poora system ek single process circle ke roop mein dikhata hai, uske saath external entities (sources/destinations) aur data flows dikhata hai. Koi data store nahi hota Level 0 mein.'
    },
    {
      id: 10, topic: 'srs',
      question: 'In a DFD, data cannot flow directly between:',
      options: ['A process and an external entity', 'A process and a data store', 'Two external entities', 'An external entity and a data store through a process'],
      correct: 2,
      explanation: 'DFD rules ke according, do external entities ke beech direct data flow NAHI ho sakta — data hamesha ek process ke through jaana chahiye. Similarly, do data stores ke beech bhi direct flow nahi ho sakta.'
    },
    {
      id: 11, topic: 'srs',
      question: 'According to IEEE 830 standard, which of the following is NOT a desirable property of SRS?',
      options: ['Unambiguous', 'Consistent', 'Implementation-specific', 'Verifiable'],
      correct: 2,
      explanation: 'SRS implementation-independent hona chahiye — ye batana chahiye ki KYA karna hai, KAISE nahi. Implementation-specific hona ek defect hai SRS mein.'
    },
    {
      id: 12, topic: 'testing',
      question: 'Cyclomatic complexity of a program with 15 edges, 12 nodes, and 1 connected component is:',
      options: ['3', '4', '5', '6'],
      correct: 2,
      explanation: 'Cyclomatic Complexity V(G) = E - N + 2P = 15 - 12 + 2(1) = 5. Ye minimum number of independent paths batata hai jo test karne chahiye.'
    },
    {
      id: 13, topic: 'testing',
      question: 'Which testing technique focuses on testing values at the boundaries of equivalence classes?',
      options: ['Equivalence Partitioning', 'Boundary Value Analysis', 'Decision Table Testing', 'State Transition Testing'],
      correct: 1,
      explanation: 'Boundary Value Analysis (BVA) boundary values pe focus karta hai (min, min+1, max-1, max) kyunki statistically most errors boundaries pe hote hain.'
    },
    {
      id: 14, topic: 'testing',
      question: 'Which type of testing is performed after a code change to ensure existing functionality is not broken?',
      options: ['Smoke Testing', 'Sanity Testing', 'Regression Testing', 'Exploratory Testing'],
      correct: 2,
      explanation: 'Regression Testing ensures ki naye code changes purane (already working) features ko break nahi karte. Purane test cases dobara run kiye jaate hain.'
    },
    {
      id: 15, topic: 'testing',
      question: 'Alpha testing is performed at:',
      options: ['The user\'s site by end users', 'The developer\'s site by a select group of users', 'The testing lab by the QA team only', 'After the software is released to the public'],
      correct: 1,
      explanation: 'Alpha Testing developer ki site pe hoti hai — select users ya internal testers controlled environment mein test karte hain. Beta Testing user ki site pe hoti hai real environment mein.'
    },
    {
      id: 16, topic: 'testing',
      question: 'White box testing is also known as:',
      options: ['Functional testing', 'Structural testing', 'Behavioral testing', 'Acceptance testing'],
      correct: 1,
      explanation: 'White box testing ko Structural testing, Glass box testing, ya Clear box testing bhi kehte hain kyunki ismein internal code structure visible hoti hai aur ussi ko test karte hain.'
    },
    {
      id: 17, topic: 'testing',
      question: 'Which testing level combines individual modules and tests them as a group?',
      options: ['Unit Testing', 'Integration Testing', 'System Testing', 'Acceptance Testing'],
      correct: 1,
      explanation: 'Integration Testing mein individual modules combine karke group mein test karte hain — interfaces aur data flow between modules verify karte hain.'
    },
    {
      id: 18, topic: 'testing',
      question: 'Statement coverage measures:',
      options: ['Whether all branches in the code are executed', 'Whether all statements are executed at least once', 'Whether all paths through the code are tested', 'Whether all functions are called'],
      correct: 1,
      explanation: 'Statement Coverage ensure karta hai ki har executable statement code mein kam se kam ek baar execute ho. Formula: (Executed statements / Total statements) × 100%.'
    },
    {
      id: 19, topic: 'project-management',
      question: 'In the COCOMO model, "Organic" mode is used for:',
      options: ['Complex projects with tight constraints', 'Small teams working on well-understood applications', 'Medium-sized projects with mixed experience teams', 'Projects with unstable requirements'],
      correct: 1,
      explanation: 'COCOMO Organic mode choti, simple projects ke liye hai jaha experienced small teams kaam karti hain aur requirements well-understood hoti hain.'
    },
    {
      id: 20, topic: 'project-management',
      question: 'The critical path in a project network diagram represents:',
      options: ['The shortest path through the network', 'The path with the most resources', 'The longest path, determining minimum project duration', 'The path with the highest risk'],
      correct: 2,
      explanation: 'Critical Path wo LONGEST path hai network diagram mein. Ye minimum project duration determine karta hai. Critical path pe kisi bhi activity mein delay = poore project mein delay.'
    },
    {
      id: 21, topic: 'project-management',
      question: 'In PERT, if the optimistic time is 2 days, most likely time is 5 days, and pessimistic time is 14 days, the expected time is:',
      options: ['5 days', '6 days', '7 days', '8 days'],
      correct: 1,
      explanation: 'PERT Expected Time = (O + 4M + P) / 6 = (2 + 4×5 + 14) / 6 = (2 + 20 + 14) / 6 = 36/6 = 6 days.'
    },
    {
      id: 22, topic: 'project-management',
      question: 'Which type of cohesion is the BEST (most desirable)?',
      options: ['Logical Cohesion', 'Temporal Cohesion', 'Functional Cohesion', 'Sequential Cohesion'],
      correct: 2,
      explanation: 'Functional Cohesion best hai — module ek single, well-defined function perform karta hai. Worst = Coincidental Cohesion (unrelated elements).'
    },
    {
      id: 23, topic: 'project-management',
      question: 'Which type of coupling is the WORST (least desirable)?',
      options: ['Data Coupling', 'Stamp Coupling', 'Control Coupling', 'Content Coupling'],
      correct: 3,
      explanation: 'Content Coupling worst hai — ek module directly doosre module ke internal data ya code ko modify karta hai. Best = Data Coupling (sirf simple data parameters pass hote hain).'
    },
    {
      id: 24, topic: 'project-management',
      question: 'CMMI Level 3 is known as:',
      options: ['Initial', 'Managed', 'Defined', 'Quantitatively Managed'],
      correct: 2,
      explanation: 'CMMI levels: Level 1 = Initial, Level 2 = Managed, Level 3 = Defined (standard processes organization-wide defined hain), Level 4 = Quantitatively Managed, Level 5 = Optimizing.'
    },
    {
      id: 25, topic: 'project-management',
      question: 'Function Point Analysis is a measure of:',
      options: ['Lines of code in the program', 'The number of functions in the program', 'The functionality delivered to the user, independent of technology', 'The execution time of the program'],
      correct: 2,
      explanation: 'FPA software ki size ko functionality ke basis pe estimate karta hai — ye technology/language independent hai. LOC count nahi karta, balki External Inputs, Outputs, Inquiries, Files count karta hai.'
    },
    {
      id: 26, topic: 'testing',
      question: 'Which of the following is a Black Box testing technique?',
      options: ['Statement Coverage', 'Branch Coverage', 'Path Testing', 'Equivalence Partitioning'],
      correct: 3,
      explanation: 'Equivalence Partitioning ek Black Box technique hai — input domain ko valid/invalid classes mein divide karta hai bina code dekhke. Statement, Branch, aur Path coverage sab White Box techniques hain.'
    },
    {
      id: 27, topic: 'sdlc',
      question: 'Which phase of SDLC is typically the LONGEST in duration?',
      options: ['Requirements Analysis', 'Design', 'Testing', 'Maintenance'],
      correct: 3,
      explanation: 'Maintenance phase sabse lamba hota hai — typically software ki total cost ka 60-80% maintenance mein jata hai (bug fixes, updates, enhancements, adaptations).'
    },
    {
      id: 28, topic: 'testing',
      question: 'Top-Down integration testing uses ______ to simulate lower-level modules that are not yet developed.',
      options: ['Drivers', 'Stubs', 'Proxies', 'Mocks'],
      correct: 1,
      explanation: 'Top-Down integration mein upper modules pehle test hote hain. Lower modules jo abhi ready nahi hain unke liye STUBS (dummy modules) use karte hain. Bottom-Up mein DRIVERS use hote hain.'
    },
    {
      id: 29, topic: 'srs',
      question: 'Feasibility study in software engineering evaluates:',
      options: ['Only technical feasibility', 'Only economic feasibility', 'Technical, economic, and operational feasibility', 'Only legal feasibility'],
      correct: 2,
      explanation: 'Feasibility study teen aspects evaluate karti hai: Technical (kya technically possible hai?), Economic (kya budget mein hai?), aur Operational (kya organization use kar payegi?). Legal feasibility bhi dekhi jati hai.'
    },
    {
      id: 30, topic: 'project-management',
      question: 'A Gantt chart is primarily used for:',
      options: ['Risk analysis', 'Project scheduling and tracking', 'Cost estimation', 'Requirements gathering'],
      correct: 1,
      explanation: 'Gantt Chart ek bar chart hai jo project schedule dikhata hai — tasks kab start honge, kab khatam honge, overlap kaha hai. Simple aur visual scheduling tool hai.'
    },
    {
      id: 31, topic: 'testing',
      question: 'The testing technique where only the basic and critical functionalities of an application are tested is called:',
      options: ['Regression Testing', 'Smoke Testing', 'Stress Testing', 'Load Testing'],
      correct: 1,
      explanation: 'Smoke Testing (Build Verification Testing) mein sirf basic critical features test hote hain — ye check karta hai ki build stable hai ya nahi. Agar smoke test fail ho toh detailed testing nahi karte.'
    },
    {
      id: 32, topic: 'sdlc',
      question: 'The Waterfall model does NOT allow:',
      options: ['Documentation', 'Sequential execution', 'Backtracking to a previous phase', 'Testing'],
      correct: 2,
      explanation: 'Waterfall model ki key limitation ye hai ki ek baar phase complete hone ke baad previous phase pe wapas nahi ja sakte (no backtracking). Ye iska biggest disadvantage hai.'
    },
    {
      id: 33, topic: 'project-management',
      question: 'The COCOMO model was proposed by:',
      options: ['Pressman', 'Boehm', 'Sommerville', 'Dijkstra'],
      correct: 1,
      explanation: 'COCOMO (COnstructive COst MOdel) Barry Boehm ne 1981 mein propose kiya tha. Ye software effort estimation ka ek popular model hai.'
    },
    {
      id: 34, topic: 'testing',
      question: 'For a valid input range of 1 to 100, using BVA, the test values should be:',
      options: ['0, 1, 50, 100, 101', '1, 50, 100', '0, 50, 101', '1, 100'],
      correct: 0,
      explanation: 'BVA mein boundary aur boundary ke just andar/bahar test karte hain: 0 (just below min), 1 (min), 50 (normal), 100 (max), 101 (just above max).'
    },
    {
      id: 35, topic: 'srs',
      question: 'A Data Flow Diagram (DFD) represents:',
      options: ['The sequence of operations in a program', 'The flow of data through a system', 'The entity-relationship model of a database', 'The class hierarchy of the system'],
      correct: 1,
      explanation: 'DFD specifically data ka flow dikhata hai — kahan se data aata hai (source), kahan process hota hai, kahan store hota hai, aur kahan jata hai (destination).'
    },
    {
      id: 36, topic: 'project-management',
      question: 'In a software project, "Data Coupling" between two modules means:',
      options: ['Modules share global data', 'One module controls the execution flow of another', 'Modules communicate only through simple data parameters', 'One module modifies the internal data of another'],
      correct: 2,
      explanation: 'Data Coupling mein modules sirf simple data values (parameters) pass karte hain — ye best (lowest) type of coupling hai. Koi shared global data, control flow, ya internal access nahi hota.'
    },
    {
      id: 37, topic: 'testing',
      question: 'McCabe\'s Cyclomatic Complexity metric provides:',
      options: ['The number of bugs in the code', 'The minimum number of linearly independent paths through the code', 'The execution time of the program', 'The memory usage of the program'],
      correct: 1,
      explanation: 'Cyclomatic Complexity minimum linearly independent paths ki count deta hai. Ye batata hai ki minimum kitne test cases chahiye complete path coverage ke liye.'
    },
    {
      id: 38, topic: 'sdlc',
      question: 'The Spiral Model has four quadrants. Which quadrant is unique to this model compared to others?',
      options: ['Planning', 'Engineering', 'Risk Analysis', 'Customer Evaluation'],
      correct: 2,
      explanation: 'Risk Analysis quadrant Spiral Model ko unique banata hai. Ye kisi aur model mein explicitly nahi hota. Har iteration mein risk identify, analyze, aur resolve kiya jata hai.'
    }
  ]
};

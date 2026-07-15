window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['mental-ability'] = {
  id: 'mental-ability',
  name: 'Mental Ability',
  icon: '🧩',
  description: 'Logical reasoning, data interpretation, problem-solving, aur latest IT developments ke concepts aur tricks.',
  topics: [
    {
      id: 'decision-making',
      name: 'Decision Making',
      theory: `
        <h3>Decision Making (Nirnay Lena)</h3>
        <p>Decision making questions mein aapko ek candidate ya kisi situation ke baare mein kuch rules aur conditions di jaati hain. Aapko un conditions ko carefully check karke decide karna hota hai ki candidate select hoga, reject hoga, ya uska case kisi higher authority (jaise Manager ya Director) ko refer kiya jayega.</p>

        <h4>Key Concepts</h4>
        <ul>
          <li><b>Main Conditions:</b> Jo criteria strictly fulfill hone chahiye (Jaise, age > 21 ya Graduation with 60%).</li>
          <li><b>Sub-conditions / Alternatives:</b> Agar ek main condition satisfy nahi hoti, toh kya koi aur alternative rasta hai? (Jaise, agar marks 60% nahi hain par experience 5 saal ka hai, toh refer to GM).</li>
        </ul>

        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Aise questions ko solve karte time hamesha ek chota sa flowchart ya short table bana lein conditions ka. Isse aapko baar-baar lamba paragraph nahi padhna padega.
        </div>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Agar kisi candidate ki koi information missing hai (jaise age nahi di hui), toh usko apni taraf se assume mat karna! Seedha "Data Inadequate" (Aankde Aparyapt) mark karein.
        </div>

        <h4>Example (Worked Out)</h4>
        <p><b>Conditions for selection:</b><br>
        1. Age 21-30 years as on 01.01.2023<br>
        2. At least 60% in B.Tech<br>
        3. If condition 2 is not met but has 70% in MCA, refer to Director.</p>
        <p><b>Candidate Details:</b> Rahul is 25 years old. He scored 55% in B.Tech and 75% in MCA.</p>
        <p><b>Solution:</b><br>
        - Age 25: (Satisfies condition 1)<br>
        - B.Tech marks = 55%: (Fails condition 2)<br>
        - Let's check alternative for condition 2 (which is condition 3): MCA marks > 70%? Yes, he has 75%. (Satisfies condition 3)<br>
        <b>Final Decision:</b> Refer to Director.</p>
      `
    },
    {
      id: 'problem-solving',
      name: 'Problem Solving',
      theory: `
        <h3>Problem Solving</h3>
        <p>Problem solving section mein normally puzzles, seating arrangement, blood relations aur direction sense se related aate hain. Yahan aapko ek complex, uljhi hui situation di jati hai jise aapko logically step-by-step simplify karna hota hai.</p>

        <h4>1. Seating Arrangement</h4>
        <p>Log circular (gol) ya linear (seedhi line) mein baithe hote hain. Circle mein dhyan rakhein ki face center ki taraf hai ya outside.</p>

        <div class="formula-box">
          <div class="formula-title">📐 Key Point: Directions in Circle</div>
          Agar sabhi log <b>Center (Kendra)</b> ki taraf dekh rahe hain:
          <ul>
            <li><b>Left (Baayein):</b> Clockwise movement (Ghadi ki disha)</li>
            <li><b>Right (Daayein):</b> Anti-clockwise movement (Ghadi ki vipreet disha)</li>
          </ul>
        </div>

        <h4>2. Blood Relations (Rakt Sambandh)</h4>
        <p>Family tree draw karna sabse best aur error-free approach hai.</p>
        <ul>
          <li><b>Symbols use karein:</b> Square 🔲 = Male, Circle ⚪ = Female.</li>
          <li><b>Lines use karein:</b> Horizontal line (—) = Siblings (Bhai-Behan), Vertical line (|) = Generation gap (Mata-pita aur bache), Double line (==) = Married couple.</li>
        </ul>

        <h4>3. Direction Sense</h4>
        <p>Hamesha pen se roughly map draw karein. North upar, South neeche, East right aur West left hota hai (N-E-S-W clockwise).</p>

        <h4>Example (Worked Out)</h4>
        <p><b>Question:</b> P is the brother of Q. Q is the sister of R. R is the son of S. How is P related to S?</p>
        <p><b>Solution Step-by-Step:</b><br>
        1. P (Male) is brother of Q (Female). [P(+) — Q(-)]<br>
        2. Q is sister of R. [P(+) — Q(-) — R]<br>
        3. R (Male) is son of S. Since P, Q, aur R teeno bhai-behen hain, aur R, S ka beta hai, iska matlab teeno hi S ke bache hain.<br>
        <b>Conclusion:</b> P is the son of S.</p>
      `
    },
    {
      id: 'data-interpretation',
      name: 'Data Interpretation',
      theory: `
        <h3>Data Interpretation (DI)</h3>
        <p>DI questions mein aapko data alag-alag graphical formats jaise tables, pie charts, bar graphs ya line graphs mein diya jata hai. Aapko us data ko analyze karke basic mathematical calculation (Percentage, Ratio, Average) karni hoti hai.</p>

        <h4>Common Data Formats</h4>
        <ul>
          <li><b>Pie Chart:</b> Circle ke form mein data. Total circle 360° ya 100% ke barabar hota hai.</li>
          <li><b>Bar Graph:</b> Pillars jinke height se values pata chalti hain. Comparision ke liye best hota hai.</li>
          <li><b>Table Chart:</b> Rows aur columns mein raw numerical data.</li>
        </ul>

        <div class="formula-box">
          <div class="formula-title">📐 Important Formulas for DI</div>
          <ul>
            <li><b>Percentage Change:</b> <code>[(New Value - Old Value) / Old Value] × 100</code></li>
            <li><b>Degree to Percentage (Pie Chart):</b> <code>(Value in Degrees / 360) × 100</code></li>
            <li><b>Percentage to Degree:</b> <code>(Value in % / 100) × 360</code></li>
          </ul>
        </div>

        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Exact decimal values calculate karne se pehle MCQ ke options zaroor dekh lo. Agar options door-door hain (jaise 10, 50, 100, 200), toh approximation (andaza) use karo. Isse exam mein bahut time bachega!
        </div>

        <h4>Example (Worked Out)</h4>
        <p><b>Question:</b> Ek pie chart mein total 500 students ka data hai. "Computer Science" ka sector 72 degrees (72°) ka angle banata hai. Computer Science mein kitne students hain?</p>
        <p><b>Solution:</b><br>
        Humein degrees ko numbers mein convert karna hai.<br>
        Total circle = 360° (jo ki 500 students ke barabar hai).<br>
        Formula: (Sector Angle / 360) × Total Students<br>
        = (72 / 360) × 500<br>
        = (1 / 5) × 500 = 100 students.</p>
      `
    },
    {
      id: 'data-sufficiency',
      name: 'Data Sufficiency',
      theory: `
        <h3>Data Sufficiency (Aankde Ki Paryaptata)</h3>
        <p>Data Sufficiency ke questions thode tricky hote hain. Isme aapko ek Question aur uske neeche do Statements (I aur II) diye jate hain. Aapko ye decide karna hai ki question ka <b>answer dene ke liye kaunsa statement sufficient (kaafi) hai.</b></p>
        <p><i>Maza ki baat ye hai ki aapko exact answer nikalna hi nahi hota! Sirf ye check karna hai ki information kaafi hai ya nahi.</i></p>

        <h4>Standard Options Format</h4>
        <table class="comparison-table">
          <tr><th>Option</th><th>Meaning (Iska matlab)</th></tr>
          <tr><td><b>Only I</b></td><td>Statement I akela kaafi hai, par II akela kaafi nahi hai.</td></tr>
          <tr><td><b>Only II</b></td><td>Statement II akela kaafi hai, par I akela kaafi nahi hai.</td></tr>
          <tr><td><b>Either I or II</b></td><td>Dono statements akele-akele answer de sakte hain (koi bhi ek use kar lo).</td></tr>
          <tr><td><b>Both I and II</b></td><td>Dono ko ek sath mila kar answer nikalta hai, akele kisi se nahi.</td></tr>
          <tr><td><b>Neither I nor II</b></td><td>Dono ko mila kar bhi exact answer nahi nikalta. (Data Inadequate).</td></tr>
        </table>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Kabhi bhi apne mind mein kuch bhi data assume mat karna. Jo information statements mein exact di hai, sirf usi ka use karna hai. Exact calculation karne mein time waste mat karna!
        </div>

        <h4>Example (Worked Out)</h4>
        <p><b>Question:</b> What is the exact value of x?</p>
        <p><b>Statements:</b><br>
        I. x + y = 10<br>
        II. y = 4</p>
        <p><b>Solution approach:</b><br>
        - <b>Check Statement I alone:</b> x + y = 10. Humein y ki value nahi pata, isliye x nahi nikal sakte. (Insufficient)<br>
        - <b>Check Statement II alone:</b> y = 4. Yahan x ka koi zikar hi nahi hai. (Insufficient)<br>
        - <b>Combine both:</b> Agar hum x + y = 10 mein y = 4 rakh dein, toh x = 6 nikal aayega. Ek unique value mil gayi!<br>
        <b>Decision:</b> <i>Both I and II</i> are necessary to answer the question.</p>
      `
    },
    {
      id: 'logical-reasoning',
      name: 'Logical Reasoning and Analytical Ability',
      theory: `
        <h3>Logical Reasoning and Analytical Ability</h3>
        <p>Is section mein aapki tark-shakti (deductive aur inductive reasoning) test hoti hai. Major topics jo exams mein aate hain wo hain Syllogism, Number/Letter Series, Coding-Decoding, Analogies, aur Statement-Conclusion.</p>

        <h4>1. Syllogism (Nyaya Vakya)</h4>
        <p>Statements ko 100% true maan kar, logical conclusions nikalne hote hain. Iske liye Venn Diagram method sabse fast aur accurate hota hai.</p>
        <pre>
Statement: All A are B, Some A are C.
Conclusion check: "Some B are C"
        </pre>
        <p>Agar aap venn diagram banayenge, toh C ka circle A ko cut karega. Kyunki pura A, B ke andar hai, isliye C automatic B ko bhi cut karega. So conclusion true hoga.</p>

        <h4>2. Coding-Decoding</h4>
        <p>A-Z alphabet ki numerical positions yaad rakhna bahut zaruri hai (A=1, B=2... Z=26) aur inka reverse (Z=1... A=26).</p>

        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho: EJOTY Rule</div>
          Alphabet numbering jaldi yaad rakhne ka shortcut hai EJOTY:<br>
          <b>E(5), J(10), O(15), T(20), Y(25).</b> Iske aas-paas ke letters aap turant calculate kar sakte ho.
        </div>

        <h4>3. Number & Letter Series</h4>
        <p>Series mein logic dhoondhna hota hai: Difference (Antar), Multiply/Divide, Squares/Cubes, ya Prime Numbers ka logic.</p>

        <h4>Example (Worked Out)</h4>
        <p><b>Question:</b> In a certain code, 'CAT' is written as 'ECV', how is 'DOG' written?</p>
        <p><b>Solution:</b><br>
        Pattern check karte hain:<br>
        C (+2 positions forward) = E<br>
        A (+2 positions forward) = C<br>
        T (+2 positions forward) = V<br>
        Same logic DOG par apply karein:<br>
        D (+2) = F<br>
        O (+2) = Q<br>
        G (+2) = I<br>
        <b>Answer:</b> FQI</p>
      `
    },
    {
      id: 'it-developments',
      name: 'Major Developments in IT',
      theory: `
        <h3>Major Developments in Information Technology (IT)</h3>
        <p>Computer aur IT sector roz tezi se badal raha hai. Competitive exams mein specifically emerging technologies (nayee takneek) aur Indian Govt ke IT initiatives par questions aate hain.</p>

        <h4>Emerging Technologies (Nayee Tech)</h4>
        <ul>
          <li><b>Artificial Intelligence (AI) & Machine Learning (ML):</b> Machines ko insaano ki tarah sochna sikhana. Examples: ChatGPT (Generative AI), Deep Learning, Neural Networks.</li>
          <li><b>Internet of Things (IoT):</b> Normal devices aur appliances (jaise AC, Bulb, Watch) ka internet se connect hona aur data exchange karna.</li>
          <li><b>Blockchain:</b> Ek secure, decentralized aur distributed ledger (bahi-khata) technology. Ye Cryptocurrency (jaise Bitcoin) aur smart contracts ka base hai. Isme data ko tamper karna almost impossible hai.</li>
          <li><b>Cloud Computing:</b> Internet ke through on-demand computing services (servers, storage, databases) provide karna. Models: IaaS (Infrastructure), PaaS (Platform), SaaS (Software).</li>
          <li><b>5G Technology:</b> 5th gen mobile network jo high speed (multi-Gbps), ultra-low latency aur massive machine connectivity provide karta hai.</li>
          <li><b>Quantum Computing:</b> Bits (0/1) ki jagah Qubits ka use karke complex problems ko superfast speed mein solve karna.</li>
        </ul>

        <h4>Indian IT Initiatives (Digital India)</h4>
        <table class="comparison-table">
          <tr><th>Initiative</th><th>Description (Kya hai?)</th></tr>
          <tr><td><b>UPI (Unified Payments Interface)</b></td><td>Real-time mobile payment system developed by NPCI (National Payments Corporation of India).</td></tr>
          <tr><td><b>DigiLocker</b></td><td>Digital issuance and secure verification of certificates/documents (Aadhar, marksheet).</td></tr>
          <tr><td><b>Bhashini</b></td><td>National Language Translation Mission using AI to break language barriers in India.</td></tr>
          <tr><td><b>UMANG App</b></td><td>Ek hi mobile app par all India Govt (Center + State) services ka access.</td></tr>
        </table>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Kaafi baar abbreviations (Short forms) puchi jati hain. Ensure aapko IoT, SaaS, IaaS, UPI, NPCI, AI, AR (Augmented Reality), VR (Virtual Reality) ki full forms acche se pata hon.
        </div>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'decision-making',
      question: 'Candidate selection conditions: 1. Graduation with 60% 2. Typing speed 40 wpm. If fails in typing but has 1 year data entry experience, refer to Manager. Sneha has 65% in Graduation, typing speed 35 wpm, and 2 years data entry experience. What is the decision?',
      options: ['Select candidate', 'Reject candidate', 'Refer to Manager', 'Data Inadequate'],
      correct: 2,
      explanation: 'Sneha graduation wali condition (65% > 60%) fulfill karti hai. Typing speed (35) main condition ko fail karti hai, but uske paas alternative (2 years exp > 1 year) hai, isliye case Manager ko refer hoga.'
    },
    {
      id: 2,
      topic: 'decision-making',
      question: 'Condition for loan: 1. Salary minimum ₹50,000. 2. CIBIL Score minimum 750. If salary is less but has Govt job, refer to Branch Head. Ravi works in a private firm, salary ₹45,000 and CIBIL score is 780. What is the decision?',
      options: ['Grant Loan', 'Reject Loan', 'Refer to Branch Head', 'Data Inadequate'],
      correct: 1,
      explanation: 'Ravi ki salary ₹50k se kam hai (₹45k). Alternative condition thi "Govt job", par Ravi private firm me hai. Isliye main aur sub-condition dono fail hain. Loan reject hoga.'
    },
    {
      id: 3,
      topic: 'decision-making',
      question: 'Conditions: Candidate must be an Indian citizen, age between 18-25 years, and must have passed 12th class. Priya is 22 years old and passed 12th class with 80%. What is the decision?',
      options: ['Select candidate', 'Reject candidate', 'Refer to HR', 'Data Inadequate'],
      correct: 3,
      explanation: 'Priya ki age aur education di gayi hai, par uski "Citizenship" (wo Indian hai ya nahi) ke baare me kuch bhi nahi likha hai. Missing data matlab Data Inadequate.'
    },
    {
      id: 4,
      topic: 'decision-making',
      question: 'Promotion conditions: 1. Minimum 5 years in company 2. Last year rating "A". If rating is "B" but has completed 8 years, refer to Director. Amit has been in the company for 9 years and his last rating was "B".',
      options: ['Promoted', 'Not Promoted', 'Refer to Director', 'Data Inadequate'],
      correct: 2,
      explanation: 'Amit ka tenure 9 years hai (>5). Uski rating "B" hai (fails main condition) but tenure 8 saal se zyada hai, isliye alternative satisfy hota hai. Refer to Director is correct.'
    },
    {
      id: 5,
      topic: 'decision-making',
      question: 'Admission criteria: 1. B.Sc with 70%. 2. Entrance test 80 marks. 3. Interview 50 marks. If B.Sc < 70% but has Sports Quota, refer to Principal. Rahul has B.Sc 72%, Entrance 85 marks, and Interview 55 marks. Does he have Sports Quota?',
      options: ['Yes', 'No', 'Cannot be determined', 'Question is irrelevant'],
      correct: 2,
      explanation: 'Rahul main conditions me hi perfectly pass hai (72% > 70%, 85 > 80, 55 > 50), toh uske select hone ke liye sports quota ki zarurat hi nahi hai. Data me diya bhi nahi hai, so Cannot be determined.'
    },
    {
      id: 6,
      topic: 'problem-solving',
      question: 'In a queue, Aman is 12th from the front and 24th from the back. How many people are there in the queue?',
      options: ['34', '35', '36', '37'],
      correct: 1,
      explanation: 'Formula: Total = (Position from front + Position from back) - 1. So, 12 + 24 - 1 = 36 - 1 = 35.'
    },
    {
      id: 7,
      topic: 'problem-solving',
      question: 'Pointing to a girl in the photograph, Rajat said, "She is the daughter of the only son of my grandfather." How is the girl related to Rajat?',
      options: ['Sister', 'Mother', 'Cousin', 'Aunt'],
      correct: 0,
      explanation: 'Rajat ke grandfather ka only son = Rajat ke father. Us girl ki wo father ki daughter hai. Toh wo Rajat ki sister (behan) lagi.'
    },
    {
      id: 8,
      topic: 'problem-solving',
      question: 'A person walks 10 km North, then turns right and walks 5 km, then turns right again and walks 10 km. How far and in which direction is he from the starting point?',
      options: ['5 km North', '5 km South', '5 km East', '5 km West'],
      correct: 2,
      explanation: 'North gaya 10km, right mudkar East gaya 5km, wapas right (South) mudkar 10km aaya. Starting line ke level par wapas aa gaya. Toh wo initial point se 5km East direction mein hai.'
    },
    {
      id: 9,
      topic: 'problem-solving',
      question: 'A, B, C, D and E are sitting on a bench. A is sitting next to B. C is sitting next to D. D is not sitting with E. E is on the left end of the bench. C is on the second position from the right. Where is A sitting if A is to the right of B and E?',
      options: ['Between B and C', 'Between E and D', 'Between B and D', 'Extreme right'],
      correct: 0,
      explanation: 'Let us place them: E is at extreme left (Position 1). C is second from right (Position 4). So _ _ _ C _. D is next to C, but D cannot sit with E, so D cannot be at Pos 2. D must be at Pos 5. Bench: E _ _ C D. A sits next to B, so B and A take 2 and 3. A is right of B, so B is at 2, A is at 3. Final: E B A C D. A is between B and C.'
    },
    {
      id: 10,
      topic: 'problem-solving',
      question: 'If 3 days before yesterday was Wednesday, what will be 2 days after tomorrow?',
      options: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
      correct: 0,
      explanation: '3 days before yesterday was Wed. So yesterday was Wed + 3 days = Saturday. Today is Sunday. Tomorrow is Monday. 2 days after tomorrow = Monday + 2 = Wednesday.'
    },
    {
      id: 11,
      topic: 'data-interpretation',
      question: 'In a survey of 200 people, 45% liked Tea, 35% liked Coffee and the rest liked Juice. How many people liked Juice?',
      options: ['20', '30', '40', '50'],
      correct: 2,
      explanation: 'Total percentage = 100%. Tea + Coffee = 45 + 35 = 80%. Remaining for Juice = 20%. 20% of 200 = (20/100) * 200 = 40 people.'
    },
    {
      id: 12,
      topic: 'data-interpretation',
      question: 'A company\'s revenue was ₹40,000 in 2021 and ₹50,000 in 2022. What is the percentage increase in revenue?',
      options: ['20%', '25%', '30%', '10%'],
      correct: 1,
      explanation: 'Increase = Final - Initial = 50k - 40k = 10k. % Increase = (Increase / Initial) * 100 = (10,000 / 40,000) * 100 = 25%.'
    },
    {
      id: 13,
      topic: 'data-interpretation',
      question: 'In a pie chart representing monthly expenses, Rent corresponds to an angle of 90°. If the total monthly income is ₹60,000, how much is spent on Rent?',
      options: ['10,000', '12,000', '15,000', '20,000'],
      correct: 2,
      explanation: 'Rent amount = (Degree / 360) * Total Amount. = (90/360) * 60,000 = (1/4) * 60,000 = ₹15,000.'
    },
    {
      id: 14,
      topic: 'data-interpretation',
      question: 'The average marks of 4 subjects is 75. If a 5th subject with 85 marks is added, what is the new average?',
      options: ['75', '77', '78', '80'],
      correct: 1,
      explanation: 'Total marks for 4 subjects = 4 * 75 = 300. New total = 300 + 85 = 385. New average = 385 / 5 = 77.'
    },
    {
      id: 15,
      topic: 'data-interpretation',
      question: 'The ratio of male to female employees in an IT company is 5:3. If there are 150 female employees, what is the total number of employees?',
      options: ['250', '300', '400', '500'],
      correct: 2,
      explanation: 'Female ratio = 3 parts = 150. So 1 part = 50. Total parts = 5 (Male) + 3 (Female) = 8 parts. Total employees = 8 * 50 = 400.'
    },
    {
      id: 16,
      topic: 'data-sufficiency',
      question: 'Question: What is the present age of Rahul? <br>Statements: <br>I. Rahul is 5 years older than his brother. <br>II. Rahul\'s brother is currently 15 years old.',
      options: ['Only I is sufficient', 'Only II is sufficient', 'Both I and II are necessary', 'Neither I nor II is sufficient'],
      correct: 2,
      explanation: 'Statement I se relation (Rahul = Brother + 5) pata chala. Statement II se brother ki age (15) pata chali. Jab dono ko combine karenge tabhi Rahul ki age 20 saal niklegi. So both are necessary.'
    },
    {
      id: 17,
      topic: 'data-sufficiency',
      question: 'Question: What is the value of A? <br>Statements: <br>I. A + B = 10 <br>II. A - B = 4',
      options: ['Only I is sufficient', 'Only II is sufficient', 'Both I and II are necessary', 'Neither I nor II is sufficient'],
      correct: 2,
      explanation: 'Dono statements linear equations hain. I akela insufficient hai kyunki B nahi pata. Dono ko add karenge (A+B+A-B = 10+4 => 2A = 14 => A = 7). Both required.'
    },
    {
      id: 18,
      topic: 'data-sufficiency',
      question: 'Question: Is the integer X positive? <br>Statements: <br>I. X² = 16 <br>II. X > 0',
      options: ['Only I is sufficient', 'Only II is sufficient', 'Either I or II is sufficient', 'Both I and II are necessary'],
      correct: 1,
      explanation: 'Statement I: X² = 16 matlab X = 4 ya -4 ho sakta hai (so positive confirm nahi hua). Statement II: X > 0 seedha batata hai ki X positive hai. Isliye Only II is sufficient.'
    },
    {
      id: 19,
      topic: 'data-sufficiency',
      question: 'Question: How many students are there in the class? <br>Statements: <br>I. Amit ranks 10th from the top. <br>II. Amit ranks 15th from the bottom.',
      options: ['Only I is sufficient', 'Only II is sufficient', 'Both I and II are necessary', 'Neither I nor II is sufficient'],
      correct: 2,
      explanation: 'Total students = (Top rank + Bottom rank) - 1. Top rank Statement I me hai, Bottom rank Statement II me. Toh dono ko milakar hi total niklega.'
    },
    {
      id: 20,
      topic: 'data-sufficiency',
      question: 'Question: Who earns the highest salary among P, Q, and R? <br>Statements: <br>I. P earns more than Q. <br>II. R earns less than P.',
      options: ['Only I is sufficient', 'Only II is sufficient', 'Both I and II are necessary', 'Neither I nor II is sufficient'],
      correct: 2,
      explanation: 'I: P > Q. II: P > R. Combine karein toh P dono Q aur R se zyada kamata hai. Kyunki P, Q aur R dono se bada hai, isliye P sabse highest hai. Both I and II are necessary.'
    },
    {
      id: 21,
      topic: 'logical-reasoning',
      question: 'Complete the series: 5, 10, 20, 40, ?',
      options: ['60', '80', '100', '120'],
      correct: 1,
      explanation: 'Har number pichle number ka double hai (x2). So, 40 x 2 = 80.'
    },
    {
      id: 22,
      topic: 'logical-reasoning',
      question: 'Statement: All computers are machines. No machine is a toy.<br>Conclusion: I. No computer is a toy. II. Some machines are computers.',
      options: ['Only I follows', 'Only II follows', 'Both I and II follow', 'Neither follows'],
      correct: 2,
      explanation: 'Computers ka pura circle Machines ke andar hai. Aur Machine ka circle Toy se alag (No) hai. Jab badi cheez (Machine) Toy nahi hai, toh Computer bhi Toy nahi hoga (I true). Machines ka kuch hissa Computers ne cover kiya hai (II true). Both follow.'
    },
    {
      id: 23,
      topic: 'logical-reasoning',
      question: 'Find the odd one out:',
      options: ['Monitor', 'Keyboard', 'Mouse', 'Scanner'],
      correct: 0,
      explanation: 'Keyboard, Mouse aur Scanner input devices hain. Jabki Monitor ek output device hai.'
    },
    {
      id: 24,
      topic: 'logical-reasoning',
      question: 'If "PAPER" is written as "QBQFS", how is "BOARD" written?',
      options: ['CPBSE', 'CPBRC', 'CPBSD', 'CPBQF'],
      correct: 0,
      explanation: 'Pattern +1 ka hai. P(+1)=Q, A(+1)=B, P(+1)=Q, E(+1)=F, R(+1)=S. BOARD me: B(+1)=C, O(+1)=P, A(+1)=B, R(+1)=S, D(+1)=E. Answer: CPBSE.'
    },
    {
      id: 25,
      topic: 'logical-reasoning',
      question: 'Analogy: Program is to Programmer as House is to ?',
      options: ['Bricks', 'Architect', 'Resident', 'Cement'],
      correct: 1,
      explanation: 'Jaise Programmer ek naya Program banata (design/code) karta hai, waise hi Architect ek House ko design aur plan karta hai.'
    },
    {
      id: 26,
      topic: 'it-developments',
      question: 'Which technology forms the basis of cryptocurrencies like Bitcoin?',
      options: ['Artificial Intelligence', 'Blockchain', 'Quantum Computing', 'Cloud Computing'],
      correct: 1,
      explanation: 'Blockchain ek distributed aur tamper-proof ledger (bahi-khata) technology hai jispar Bitcoin jaisi cryptocurrencies kaam karti hain.'
    },
    {
      id: 27,
      topic: 'it-developments',
      question: 'SaaS, PaaS, and IaaS are service models related to which of the following technologies?',
      options: ['Internet of Things (IoT)', 'Cloud Computing', 'Machine Learning', 'Big Data'],
      correct: 1,
      explanation: 'Ye Cloud Computing ke teen main service models hain: Software as a Service, Platform as a Service, aur Infrastructure as a Service.'
    },
    {
      id: 28,
      topic: 'it-developments',
      question: 'What is the full form of UPI, the payment system developed by NPCI?',
      options: ['Universal Payments Interface', 'Unified Payments Interface', 'United Public Interface', 'Unified Public Integration'],
      correct: 1,
      explanation: 'UPI stands for Unified Payments Interface. Ye real-time payment system hai jo mobile phones se instant bank-to-bank transfer allow karta hai.'
    },
    {
      id: 29,
      topic: 'it-developments',
      question: 'Which Indian government initiative focuses on breaking language barriers by providing AI-driven translation?',
      options: ['DigiLocker', 'UMANG', 'Bhashini', 'MyGov'],
      correct: 2,
      explanation: 'Bhashini (National Language Translation Mission) Indian government ka project hai jo AI aur Machine Learning use karke Indian languages me digital services accessible banata hai.'
    },
    {
      id: 30,
      topic: 'it-developments',
      question: 'ChatGPT, which can write essays and code, is an example of which specific type of AI?',
      options: ['Generative AI', 'Predictive AI', 'Reactive Machines', 'Computer Vision'],
      correct: 0,
      explanation: 'ChatGPT (Generative Pre-trained Transformer) ek Generative AI hai kyunki ye naya text, code ya content "generate" (paida) kar sakta hai.'
    }
  ]
};

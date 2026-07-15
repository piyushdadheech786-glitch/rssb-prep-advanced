window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['digital-logic'] = {
  id: 'digital-logic',
  name: 'Digital Logic Systems',
  icon: '🔌',
  description: 'Boolean Algebra, Logic Gates, Combinational circuits aur Sequential FSMs ka detailed analysis.',
  topics: [
    {
      id: 'boolean-expressions',
      name: 'Boolean Expressions & Logic Gates',
      theory: `
        <h3>Boolean Algebra & Logic Gates</h3>
        <p>Digital circuits base hote hain Boolean Algebra par, jahan variables ki value sirf 0 (Low/False) ya 1 (High/True) hoti hai. Computer ke andar hardware level par har logical aur arithmetic operation inhe logic gates aur Boolean logic se hota hai.</p>
        
        <h4>Basic Logic Gates</h4>
        <ul>
          <li><strong>AND Gate:</strong> Iska output tabhi 1 (High) hoga jab iske <em>sabhi</em> inputs 1 honge. Yeh logical multiplication karta hai. <code>Y = A . B</code></li>
          <li><strong>OR Gate:</strong> Iska output tabhi 1 hoga jab iska <em>koi bhi ek</em> (ANY) input 1 hoga. Yeh logical addition karta hai. <code>Y = A + B</code></li>
          <li><strong>NOT Gate (Inverter):</strong> Yeh ek single input gate hai jo state ko invert karta hai. 0 ko 1 aur 1 ko 0 banata hai. <code>Y = A'</code></li>
        </ul>

        <h4>Universal Gates</h4>
        <p>NAND (NOT + AND) aur NOR (NOT + OR) gates ko <strong>Universal Gates</strong> kaha jata hai. Aisa isliye kyunki sirf NAND ya sirf NOR gates use karke hum duniya ka koi bhi digital logic circuit ya basic gate (AND, OR, NOT) bana sakte hain.</p>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          XOR (Exclusive OR) gate parity generation aur error checking me kaam aata hai. Iska output 1 tabhi hota hai jab inputs <strong>different</strong> hon (yaani odd number of 1s). Equation: <code>Y = A ⊕ B = A'B + AB'</code>. XNOR iska ulta hota hai (Equality detector).
        </div>

        <h4>Boolean Laws & De Morgan's Theorem</h4>
        <p>Boolean expressions ko chota aur simple banane ke liye hum laws use karte hain (jaise Commutative, Associative, Distributive, Absorption). Inme sabse imporatant hai De Morgan's theorem jo exams me directly pucha jata hai.</p>
        
        <div class="formula-box">
          <div class="formula-title">📐 De Morgan's Theorem</div>
          1. (A + B)' = A' . B'<br>
          2. (A . B)' = A' + B'<br>
          <em>"Break the line, change the sign!" (Plus ko dot banao, dot ko plus banao aur complement ko alag kar do)</em>
        </div>

        <h4>Example (Worked Out)</h4>
        <p><strong>Simplify the expression:</strong> <code>Y = A'B + AB + A'B'</code></p>
        <p>Step 1: Pehle do terms me se B common le lijiye: <code>Y = B(A' + A) + A'B'</code></p>
        <p>Step 2: Hum jante hain Complement law se <code>A + A' = 1</code> hota hai. So: <code>Y = B(1) + A'B' = B + A'B'</code></p>
        <p>Step 3: Ab Distributive law apply kijiye (X + X'Y = X + Y): <code>Y = B + A'</code> jisko hum <code>A' + B</code> bhi likh sakte hain.</p>
        <p>Result: The simplified expression is <code>A' + B</code>.</p>
      `
    },
    {
      id: 'k-maps',
      name: 'Karnaugh Maps (K-maps)',
      theory: `
        <h3>Karnaugh Maps (K-maps)</h3>
        <p>K-map ek graphical method hai jiske zariye hum Boolean expressions ko minimize karte hain, bina complex Boolean laws yaad kiye. Isme hum truth table ki values ko ek grid ya map me likhte hain aur cells ka group banate hain.</p>

        <h4>SOP aur POS Forms</h4>
        <ul>
          <li><strong>SOP (Sum of Products):</strong> Isme Minterms (output = 1) ko focus kiya jata hai. Unko group karke products nikale jate hain aur fir add kiye jate hain. Example: <code>AB + A'C</code>. Minterms ko \(\Sigma m\) se denote karte hain.</li>
          <li><strong>POS (Product of Sums):</strong> Isme Maxterms (output = 0) ko focus kiya jata hai. Pehle sum terms aati hain fir unka product. Example: <code>(A + B)(A' + C)</code>. Maxterms ko \(\Pi M\) se denote karte hain.</li>
        </ul>

        <h4>Grouping Rules</h4>
        <p>K-map me minimize karne ke liye hum adjacent (padosi) 1s (SOP me) ya 0s (POS me) ke groups banate hain. Group ka size hamesha 2 ki power me hota hai: 1, 2, 4 (Quad), 8 (Octet), ya 16.</p>
        <ul>
          <li>Pair (2 cells): Eliminates 1 variable.</li>
          <li>Quad (4 cells): Eliminates 2 variables.</li>
          <li>Octet (8 cells): Eliminates 3 variables.</li>
        </ul>
        <p>Bada group hamesha zyada terms eliminate karta hai isliye primary goal sabse bada group banana hota hai. Hum K-map ke edges ko fold karke corners ko bhi map kar sakte hain (ise map rolling kehte hain).</p>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Kabhi bhi K-map me diagonal (tircha) group mat banana. Sirf horizontal ya vertical adjacent cells hi group hote hain.
        </div>

        <h4>Don't Care Conditions (X)</h4>
        <p>Don't Care conditions wo input combinations hote hain jo real-world problem me kabhi occur nahi karenge (jaise BCD me 1010 se 1111 tak ke numbers). Unhe map me 'X' se darshaya jata hai. Grouping karte waqt hum 'X' ko 1 ya 0 kuch bhi maan sakte hain agar usse humara group <em>bada</em> ban raha ho. Agar group bada nahi ban raha, toh 'X' ko totally ignore kar dena chahiye.</p>

        <h4>Example (Worked Out)</h4>
        <p><strong>Question:</strong> Minimize F(A,B,C) = \(\Sigma m(0, 2, 4, 6)\)</p>
        <p>Step 1: 3-variable K-map (A, B, C) banao jisme 8 cells honge.</p>
        <p>Step 2: Minterms 0, 2, 4, 6 positions par '1' place karo. Agar dhyan se dekho toh ye charo cells map ke chaaro corners par aayenge.</p>
        <p>Step 3: Corner elements aas paas hi mane jate hain map rolling property ke wajah se. In chaaro corners ko milakar ek 'Quad' (4 ka group) banaya jayega.</p>
        <p>Step 4: Group ki equation padho:<br>
        - A variable 0 aur 1 dono ho raha hai -> Cancel ho gaya.<br>
        - B variable bhi 0 aur 1 dono ho raha hai -> Cancel ho gaya.<br>
        - C variable sirf '0' par constant hai.</p>
        <p><strong>Result:</strong> F = C' (Kyunki C zero hai aur hum SOP likh rahe hain).</p>
      `
    },
    {
      id: 'logic-families',
      name: 'Logic Families (TTL/CMOS)',
      theory: `
        <h3>Logic Families</h3>
        <p>Digital ICs banate waqt alag-alag manufacturing technologies use hoti hain. Ek "Logic Family" ek set of integrated circuits hai jo same technology use karta hai taki sabhi components aapas me easily connect (interface) kiye ja sakein.</p>

        <h4>Key Characteristics</h4>
        <ul>
          <li><strong>Propagation Delay:</strong> Input change hone se output change hone tak jo nanoseconds (ns) ka time lagta hai. Circuit ki speed inversely proportional hoti hai delay ke. (Kam delay = Fast speed).</li>
          <li><strong>Power Dissipation:</strong> Ek logic gate kaam karte waqt kitni power (milliwatts) heat me waste karta hai. Isko kam rakhna zaroori hota hai battery-operated devices me.</li>
          <li><strong>Fan-In:</strong> Ek gate ke kitne max inputs ho sakte hain bina uski limit exceed kiye.</li>
          <li><strong>Fan-Out:</strong> Ek gate ka single output aage jaake kitne dusre gates ko drive (power) kar sakta hai effectively.</li>
          <li><strong>Noise Margin:</strong> System me external noise (voltage spikes) ko jhelne ki shamta bina output ko galat kiye (0 ko 1 ya 1 ko 0 banne se roke).</li>
        </ul>

        <h4>TTL vs CMOS</h4>
        <p>Mainly do types ki families most common hain: TTL (Transistor-Transistor Logic) jo BJTs (Bipolar Junction Transistors) use karta hai, aur CMOS (Complementary Metal-Oxide-Semiconductor) jo MOSFETs use karta hai.</p>

        <table class="comparison-table">
          <tr><th>Feature</th><th>TTL</th><th>CMOS</th></tr>
          <tr><td>Power Consumption</td><td>High</td><td>Very Low (Static)</td></tr>
          <tr><td>Speed / Propagation Delay</td><td>Fast (Low delay)</td><td>Slower (but improving now)</td></tr>
          <tr><td>Fan-out</td><td>Medium (~10)</td><td>High (>50)</td></tr>
          <tr><td>Packing Density</td><td>Low (Takes more space)</td><td>Very High (Ideal for VLSI)</td></tr>
          <tr><td>Basic Gate</td><td>NAND</td><td>NOR / NAND</td></tr>
        </table>

        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Exams me aksar puchte hain ki sabse <strong>FASTEST</strong> logic family kaunsi hai? Answer: <strong>ECL</strong> (Emitter Coupled Logic), par iski power dissipation bahut high hoti hai. Wahin sabse <strong>LOWEST POWER</strong> consumption <strong>CMOS</strong> ki hoti hai, isliye hamare mobile aur PC processors CMOS ke bante hain.
        </div>

        <h4>Example (Worked Out)</h4>
        <p><strong>Question:</strong> Ek logic gate ki power dissipation 12mW hai aur propagation delay 5ns hai. Is gate ka "Figure of Merit" (Speed-Power Product) kya hoga?</p>
        <p>Solution: Figure of Merit measure karta hai ki logic family ki overall performance kaisi hai. Yeh in dono ka product hota hai.</p>
        <p>Figure of Merit (SPP) = Power Dissipation &times; Propagation Delay</p>
        <p>= 12 &times; 10<sup>-3</sup> W &times; 5 &times; 10<sup>-9</sup> s = 60 &times; 10<sup>-12</sup> Joules.</p>
        <p><strong>Result:</strong> 60 pJ (pico-Joules). Ek ideal logic family ke liye SPP hamesha kam se kam hona chahiye.</p>
      `
    },
    {
      id: 'arithmetic-circuits',
      name: 'Combinational Logic: Adders & Subtractors',
      theory: `
        <h3>Arithmetic Combinational Circuits</h3>
        <p>Combinational circuits wo circuits hote hain jinka output sirf unke <em>present inputs</em> par depend karta hai. Inke andar koi memory element ya feedback loop nahi hota. Arithmetic circuits iska sabse bada example hain.</p>

        <h4>Half Adder</h4>
        <p>Half adder ka kaam hota hai do single-bit numbers (A aur B) ko add karna. Isme pichle stage se aayi hui 'Carry' (Carry-In) add karne ka provision nahi hota.</p>
        <ul>
          <li><strong>Sum (S)</strong> = A ⊕ B (A XOR B)</li>
          <li><strong>Carry (C)</strong> = A . B (A AND B)</li>
        </ul>
        <p>Is circuit ko banane ke liye ek XOR gate aur ek AND gate chahiye.</p>
        
        <h4>Full Adder</h4>
        <p>Practical additions me carry zaroor aati hai. Full adder teen single bits ko add kar sakta hai: A, B, aur Carry-In (C_in).</p>
        <div class="formula-box">
          <div class="formula-title">📐 Full Adder Equations</div>
          Sum = A ⊕ B ⊕ C_in<br>
          Carry_out = AB + BC_in + AC_in
        </div>

        <h4>Half Subtractor aur Full Subtractor</h4>
        <p>Half Subtractor 2 bits ka difference nikalta hai. Isme Carry ki jagah 'Borrow' use hota hai.</p>
        <ul>
          <li><strong>Difference (D)</strong> = A ⊕ B</li>
          <li><strong>Borrow (B_out)</strong> = A'B</li>
        </ul>
        <p>Full Subtractor teen bits ko minus karta hai (A - B - B_in).<br>
        Difference = A ⊕ B ⊕ B_in<br>
        Borrow_out = A'B + A'B_in + BB_in</p>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Half Subtractor me Borrow ka expression <code>A'B</code> hota hai, jabki Half Adder me Carry <code>A.B</code> hota hai. Aksar students Borrow me confuse ho jate hain. Yaad rakho, Borrow me jisme se aap subtract kar rahe ho (Minuend 'A'), us par complement lagega. Agar <code>B - A</code> hota, toh <code>B'A</code> hota.
        </div>

        <h4>Example (Worked Out)</h4>
        <p><strong>Question:</strong> Ek Full Adder ko design karne ke liye kitne Half Adders ki zaroorat hoti hai?</p>
        <p>Step 1: Pehle Half Adder me A aur B input dijiye. Output milega Sum1 = A ⊕ B aur Carry1 = AB.</p>
        <p>Step 2: Dusre Half Adder me input denge Sum1 aur C_in. Iska sum aayega Final Sum = (A ⊕ B) ⊕ C_in. Ye Full adder ke Sum se match kar gaya!</p>
        <p>Step 3: Dusre HA ka Carry2 banega (A ⊕ B) . C_in.</p>
        <p>Step 4: Full adder ki Carry_out paane ke liye humein Carry1 aur Carry2 dono ko add karna hoga. Iske liye ek OR gate chahiye: C_out = AB + (A ⊕ B)C_in.</p>
        <p><strong>Result:</strong> Ek Full Adder banane ke liye humein <strong>2 Half Adders aur 1 OR gate</strong> lagta hai.</p>
      `
    },
    {
      id: 'multiplexer',
      name: 'Multiplexers & Decoders',
      theory: `
        <h3>Multiplexers (MUX)</h3>
        <p>Multiplexer (MUX) ek combinational circuit hai jisko <strong>"Data Selector"</strong> ya <strong>"Many-to-One"</strong> circuit bhi kaha jata hai. Iske paas bahut saare data inputs hote hain, par ek time par ye kisi ek data input ko choose karke output par bhejta hai. Ye choice "Select Lines" (Control Lines) karti hain.</p>
        
        <p>Ek <strong>2<sup>n</sup>:1 MUX</strong> me:</p>
        <ul>
          <li>2<sup>n</sup> Data Input lines hoti hain.</li>
          <li>'n' Select lines hoti hain.</li>
          <li>Sirf 1 Output line hoti hai.</li>
        </ul>

        <div class="tip-box">
          <div class="tip-title">💡 Universal Logic Block</div>
          MUX ko ek Universal Combinational Circuit maana jata hai. Bina kisi extra hardware (logic gates) ke, ek n-select line wale MUX se aap 'n' variable ka koi bhi Boolean logic function implement kar sakte ho! (Agar n+1 variable function implement karna hai, toh ek NOT gate extra lagta hai).
        </div>

        <h4>Demultiplexer (DEMUX)</h4>
        <p>DEMUX MUX ka bilkul ulta hota hai. Yeh ek single input leta hai, aur select lines ke basis par us data ko 2<sup>n</sup> possible output lines me se kisi ek par bhej deta hai. Isey <strong>"Data Distributor"</strong> ya <strong>"1-to-Many"</strong> kehte hain.</p>

        <h4>Decoders aur Encoders</h4>
        <ul>
          <li><strong>Decoder:</strong> Yeh 'n' binary input lines leta hai aur 2<sup>n</sup> unique output lines activate karta hai. Yeh actually without data-input line wale DEMUX jaisa hi kaam karta hai (DEMUX ke input ko decoder me Enable line bana diya jata hai). Iska kaam hai coded information (jaise binary 101) ko wapas original state (decimal 5) me decode karna.</li>
          <li><strong>Encoder:</strong> Yeh Decoder ka reverse process karta hai. Yeh 2<sup>n</sup> input lines mese us line ko check karta hai jo HIGH (1) hai, aur uske crossponding 'n' bit ka binary code output me generate karta hai. Keyboard input ko binary me badalna encoder ka kaam hai.</li>
        </ul>

        <h4>Example (Worked Out)</h4>
        <p><strong>Question:</strong> Humein ek 16x1 MUX banana hai, lekin hamare paas sirf 4x1 MUX available hain. Batao total kitne 4x1 MUX chahiye honge?</p>
        <p>Step 1: First level par inputs accommodate karne hain. Total inputs 16 hain, ek MUX 4 leta hai. <br> Level 1: 16 / 4 = <strong>4 MUX</strong> chahiye. In 4 MUX se humein 4 outputs milenge.</p>
        <p>Step 2: Ab in 4 outputs ko wapas combine karke 1 final output banana hai. Iske liye ek aur stage lagegi.<br> Level 2: 4 inputs hain, 4x1 MUX usko handle kar lega. Toh 4 / 4 = <strong>1 MUX</strong> aur chahiye.</p>
        <p><strong>Result:</strong> Total = 4 + 1 = <strong>5 multiplexers</strong> (4x1 size ke) chahiye honge.</p>
      `
    },
    {
      id: 'sequential-design',
      name: 'Synchronous Sequential Systems',
      theory: `
        <h3>Sequential Circuits</h3>
        <p>Combinational circuits me memory nahi hoti thi. Sequential circuits me memory hoti hai! Iska output <em>present inputs</em> aur <em>past outputs</em> (yaani current state ya memory) dono par depend karta hai. Memory maintain karne ke liye isme ek feedback path hota hai.</p>
        
        <h4>Latches vs Flip-Flops</h4>
        <p>Dono 1-bit of data store karte hain par inka trigger mechanism alag hota hai:</p>
        <ul>
          <li><strong>Latch:</strong> Yeh <em>Level-triggered</em> hote hain. Jab tak clock pulse HIGH rahegi, input badalne par output bhi continuous change hota rahega. Isey transparent bhi kehte hain.</li>
          <li><strong>Flip-Flop:</strong> Yeh <em>Edge-triggered</em> hote hain. Yeh sirf tab state change karenge jab clock apni edge par hogi (ya toh 0 se 1 jate waqt - positive edge, ya 1 se 0 aate waqt - negative edge).</li>
        </ul>

        <h4>Types of Flip-Flops</h4>
        <ul>
          <li><strong>SR Flip-Flop (Set-Reset):</strong> S=1 set karta hai (Q=1), R=1 reset karta hai (Q=0). Problem ye hai ki S=1 aur R=1 ek saath dene par output unpredictable/invalid ho jata hai.</li>
          <li><strong>JK Flip-Flop:</strong> SR ka sudhara hua roop. Isme J=1, K=1 par output invalid nahi hota, balki apne pichle state ka ulta ho jata hai (Toggle). Characteristic Eq: <code>Q(n+1) = JQ' + K'Q</code></li>
          <li><strong>D Flip-Flop (Data/Delay):</strong> Ye sabse simple hai. Jo input D par doge, wahi agli clock cycle me Q par aa jayega (Q(n+1) = D). CPU Registers banane me yahi kaam aate hain.</li>
          <li><strong>T Flip-Flop (Toggle):</strong> Agar T=1 hai toh state toggle karegi (0 ka 1, 1 ka 0). Agar T=0 hai toh state same rahegi (hold). Ye Counters banane me bahut useful hote hain.</li>
        </ul>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap (Race Around Condition)</div>
          Race Around Condition JK flip-flop ki sabse badi bimari hai! Agar J=1, K=1 hai (toggle mode) aur clock pulse ki width flip-flop ke delay se lambi ho gayi, toh jab tak clock HIGH rahegi, output baar-baar toggle (0-1-0-1...) karta rahega! Isko solve karne ke liye hum <strong>Master-Slave JK Flip-flop</strong> ya <strong>Edge triggering</strong> use karte hain.
        </div>

        <h4>Counters & Shift Registers</h4>
        <p><strong>Registers:</strong> Multiple flip-flops ka group jo data store karta hai. Agar data left ya right sarak (shift) sakta hai, toh wo Shift Register kehlata hai.</p>
        <p><strong>Counters:</strong> Yeh clock pulses ginte hain. Do tarah ke hote hain:
          <br>1. <em>Asynchronous (Ripple) Counter:</em> Pehle FF ko main clock milti hai, uske baad wale FFs ko pichle FF ka output as a clock milta hai. Delay bahut zyada hota hai (Ripple effect) isliye ye slow hote hain.
          <br>2. <em>Synchronous Counter:</em> Saare FFs ko ek saath same main clock di jati hai. Design complex hoti hai par ye bahut fast hote hain.
        </p>

        <h4>Example (Worked Out)</h4>
        <p><strong>Question:</strong> Ek MOD-10 (Decade) counter design karne ke liye minimum kitne flip-flops chahiye?</p>
        <p>Solution: Ek Mod-N counter ko 0 se N-1 tak ki states ginti karni hoti hai. Number of Flip-Flops (n) calculate karne ka formula hai ki <strong>2<sup>n</sup> ≥ N</strong> hona chahiye.</p>
        <p>Yahan N = 10 (States 0 to 9).</p>
        <p>Agar hum n=3 len (3 FFs), toh 2<sup>3</sup> = 8. Yeh 10 se kam hai, toh states cover nahi hongi.</p>
        <p>Agar hum n=4 len, toh 2<sup>4</sup> = 16. Yeh 10 se bada hai, iska matlab 4 FFs lag jayenge. Bachi hui 6 states ko hum logic gate laga kar skip karwa dete hain (reset karwa dete hain).</p>
        <p><strong>Result:</strong> Minimum <strong>4 flip-flops</strong> chahiye honge.</p>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'boolean-expressions',
      question: 'Which of the following gates is considered a Universal Gate?',
      options: ['AND', 'NAND', 'XOR', 'OR'],
      correct: 1,
      explanation: 'NAND aur NOR gates ko Universal gates kaha jata hai kyunki inki madad se hum baaki sabhi digital logic gates aur functions implement kar sakte hain. AND aur OR basic gates hain, jabki XOR ek derived gate hai.'
    },
    {
      id: 2,
      topic: 'boolean-expressions',
      question: 'According to Boolean algebra laws, what is the simplified form of A + A\'B ?',
      options: ['A', 'A + B', 'B', '1'],
      correct: 1,
      explanation: 'A + A\'B ko distributive law ka special case maana jata hai jise absorption theorem ka extension bolte hain. Isko simplify karne par (A+A\')(A+B) milta hai. Kyunki A+A\' = 1 hota hai, toh result (1)(A+B) = A+B aata hai. Isliye option B (A + B) sahi hai.'
    },
    {
      id: 3,
      topic: 'boolean-expressions',
      question: 'The output of an XOR gate is HIGH (1) only when:',
      options: ['Both inputs are 1', 'Both inputs are 0', 'Inputs are different', 'Inputs are same'],
      correct: 2,
      explanation: 'XOR (Exclusive-OR) gate inequality detector ki tarah kaam karta hai. Iska output 1 tabhi hota hai jab iske inputs alag alag hon (jaise A=0,B=1 ya A=1,B=0). Agar inputs same hue (0,0 ya 1,1) toh output 0 aata hai. Same hone par 1 dene wala XNOR gate hota hai.'
    },
    {
      id: 4,
      topic: 'boolean-expressions',
      question: 'According to De Morgan\'s First Theorem, (A + B + C)\' is equivalent to:',
      options: ['A\' + B\' + C\'', 'A . B . C', 'A\' . B\' . C\'', 'A + B\' + C'],
      correct: 2,
      explanation: 'De Morgan ka theorem kehta hai ki "Break the line, change the sign". Jab hum NOR operation (A+B+C)\' ko break karte hain, toh beech ke plus (+) sign dot (.) me badal jate hain, aur complement sab par distribute ho jata hai. Isliye answer A\'.B\'.C\' hoga.'
    },
    {
      id: 5,
      topic: 'boolean-expressions',
      question: 'How many 2-input NAND gates are required to construct a basic XOR gate?',
      options: ['3', '4', '5', '6'],
      correct: 1,
      explanation: 'Ek XOR gate ko completely NAND gates ki madad se banane ke liye minimum 4 NAND gates ki zaroorat padti hai. Waise hi XOR ko NOR se banane ke liye minimum 5 NOR gates lagte hain. Yeh ek standard circuit design question hai jo exam me direct pucha jata hai.'
    },
    {
      id: 6,
      topic: 'k-maps',
      question: 'A 4-variable Karnaugh map contains how many cells?',
      options: ['8', '12', '16', '32'],
      correct: 2,
      explanation: 'K-map me cells ki sankhya 2^n hoti hai jahan n number of variables hai. Agar 4 variables (A,B,C,D) hain, toh 2^4 = 16 cells ka grid banega. Option C sahi hai. 8 cells 3-variable map me hote hain.'
    },
    {
      id: 7,
      topic: 'k-maps',
      question: 'In SOP (Sum of Products) K-map minimization, grouping is done for which elements?',
      options: ['0s', '1s', 'Don\'t cares only', 'Both 0s and 1s'],
      correct: 1,
      explanation: 'SOP expression (Sum of Products) Minterms par based hota hai, aur minterms table me \'1\' se darshaye jate hain. Isliye SOP method me hum K-map me hamesha 1s ka group banate hain. POS (Product of Sums) expression me hum Maxterms pe focus karte hain jo \'0\' hote hain, wahan hum 0s ka group banate hain.'
    },
    {
      id: 8,
      topic: 'k-maps',
      question: 'Making an "Octet" (group of 8 cells) in a K-map eliminates how many Boolean variables?',
      options: ['1 variable', '2 variables', '3 variables', '4 variables'],
      correct: 2,
      explanation: 'K-map ka rule hai: \n- Pair (2 cells) = 1 variable remove hota hai \n- Quad (4 cells) = 2 variables remove hote hain \n- Octet (8 cells) = 3 variables remove hote hain. \nOctet sabse zyada simplification karta hai jisse expression me teen variables ud jaate hain.'
    },
    {
      id: 9,
      topic: 'k-maps',
      question: 'What is the primary purpose of using Don\'t Care (X) conditions in a K-map?',
      options: ['To indicate error states', 'To invert the final output', 'To further minimize the Boolean expression', 'To balance the number of 1s and 0s'],
      correct: 2,
      explanation: 'Don\'t care conditions (X) aise input states hain jo kabhi occur hi nahi hote (jaise BCD me 1010 to 1111). Hum inhe K-map me apni zarurat ke hisaab se 1 ya 0 maan lete hain, jisse humare 1s ke group aur bade ho jate hain aur final expression aur bhi simplify (minimize) ho jata hai. Agar group bada na ban raha ho toh inhe ignore kar dena chahiye.'
    },
    {
      id: 10,
      topic: 'k-maps',
      question: 'Which of the following is an INVALID group size in a K-map?',
      options: ['2', '4', '6', '8'],
      correct: 2,
      explanation: 'K-map me group ka size humesha 2 ki powers me hona chahiye (2^n). Jaise 1, 2, 4, 8, 16. Isliye 6 ka group banana K-map rules ke khilaaf hai (invalid hai). Aap 6 cells cover karne ke liye ek quad (4) aur ek pair (2) ya do quads over-lap karke bana sakte ho.'
    },
    {
      id: 11,
      topic: 'logic-families',
      question: 'Which logic family is known for the lowest power dissipation?',
      options: ['TTL', 'ECL', 'CMOS', 'DTL'],
      correct: 2,
      explanation: 'CMOS (Complementary Metal-Oxide-Semiconductor) ki static power dissipation lagbhag zero ke barabar hoti hai, isliye iska power consumption sabse lowest hota hai. TTL moderate hota hai. ECL sabse fast hota hai lekin uski power dissipation sabse high (worst) hoti hai.'
    },
    {
      id: 12,
      topic: 'logic-families',
      question: 'Which of the following logic families operates at the fastest switching speed (lowest propagation delay)?',
      options: ['CMOS', 'TTL', 'ECL', 'I2L'],
      correct: 2,
      explanation: 'ECL (Emitter-Coupled Logic) non-saturated region me operate karta hai (transistors fully ON ya OFF nahi hote), isliye usme switching delay sabse kam hota hai aur wo sabse FASTEST logic family hai. CMOS sabse kam power leta hai par speed me ECL se slow hai.'
    },
    {
      id: 13,
      topic: 'logic-families',
      question: 'What does "Fan-out" of a logic gate mean?',
      options: ['The time taken for output to change', 'Maximum number of inputs it can have', 'Maximum number of similar logic gates it can successfully drive', 'The amount of heat generated'],
      correct: 2,
      explanation: 'Fan-out ka matlab hai ki ek logic gate ka single output pin, kitne aage wale gates ke input pins ko reliable signal de sakta hai bina voltage drop kiye. Fan-in ka matlab hota hai ki ek gate me kitne inputs lagaye ja sakte hain.'
    },
    {
      id: 14,
      topic: 'logic-families',
      question: 'The "Figure of Merit" for a logic family is calculated as the product of:',
      options: ['Voltage and Current', 'Fan-in and Fan-out', 'Propagation Delay and Power Dissipation', 'Noise Margin and Voltage'],
      correct: 2,
      explanation: 'Figure of Merit, jisko Speed-Power Product (SPP) bhi bolte hain, wo Propagation delay (speed) aur Power dissipation ka multiplication hota hai. Ek achhi logic family wo hoti hai jiska SPP kam se kam ho. Iski unit normally pico-Joules hoti hai.'
    },
    {
      id: 15,
      topic: 'arithmetic-circuits',
      question: 'In a Half Adder circuit, the Carry output is logically equivalent to which gate?',
      options: ['OR gate', 'AND gate', 'XOR gate', 'NAND gate'],
      correct: 1,
      explanation: 'Half adder me do equations hoti hain. Sum = A XOR B, aur Carry = A AND B (A.B). Isliye Carry ka logic directly ek AND gate dwara implement kiya jata hai. Wahi Sum ka expression XOR gate jaisa hota hai.'
    },
    {
      id: 16,
      topic: 'arithmetic-circuits',
      question: 'A Full Adder can add how many bits simultaneously?',
      options: ['2 bits', '3 bits', '4 bits', '8 bits'],
      correct: 1,
      explanation: 'Half adder sirf 2 bits (A aur B) add karta hai. Full adder me 3 input pins hote hain (A, B, aur Carry-In). Isliye ek waqt par ye exactly 3 bits ko add karke ek Sum aur ek Carry-Out generate karta hai. 4 ya 8 bits ke liye multiple full adders ko cascade kiya jata hai (Parallel Adder).'
    },
    {
      id: 17,
      topic: 'arithmetic-circuits',
      question: 'What is the Boolean expression for the Borrow (B_out) in a Half Subtractor (A - B)?',
      options: ['A . B', 'A\' . B', 'A . B\'', 'A ⊕ B'],
      correct: 1,
      explanation: 'Half subtractor jab do bits ko subtract karta hai (A - B), toh Difference (D) = A ⊕ B hota hai (XOR gate). Lekin Borrow nikalne ke liye humein jisme se hum ghata rahe hain (A) usko invert karna hota hai. So Borrow = A\' . B hota hai. A . B toh adder ka carry hota hai.'
    },
    {
      id: 18,
      topic: 'arithmetic-circuits',
      question: 'To construct one Full Subtractor, what basic combinational blocks are required?',
      options: ['2 Half Subtractors and 1 OR gate', '2 Half Subtractors and 1 AND gate', '1 Half Subtractor and 1 OR gate', '3 Half Subtractors'],
      correct: 0,
      explanation: 'Jaise ek Full Adder ko do Half Adders aur ek OR gate se banaya jata hai, theek waise hi ek Full Subtractor ko banane ke liye bhi exactly 2 Half Subtractors aur 1 OR gate ki zarurat padti hai jo dono subtractors ke borows ko combine karke final borrow-out nikalta hai.'
    },
    {
      id: 19,
      topic: 'arithmetic-circuits',
      question: 'Which combinational circuit is used to perform 4-bit addition?',
      options: ['Half adder', 'Multiplexer', 'Parallel Adder (Ripple Carry Adder)', 'Encoder'],
      correct: 2,
      explanation: 'Jab humein 1-bit se zyada numbers (jaise 4-bit numbers) ko add karna hota hai, toh hum 4 Full Adders ko series me connect karte hain jise Parallel Adder ya Ripple Carry Adder kehte hain. Pichle adder ki carry aage wale ke carry-in me jaati hai.'
    },
    {
      id: 20,
      topic: 'multiplexer',
      question: 'A Multiplexer (MUX) is commonly known as:',
      options: ['Data Distributor', 'Data Selector', 'Decoder', 'Counter'],
      correct: 1,
      explanation: 'Multiplexer ko "Data Selector" bhi kehte hain kyunki uske paas multiple data inputs hote hain, par select lines ki configuration ke base par wo sirf kisi EK data input ko choose (select) karke output par bhejta hai. Data Distributor DEMUX ko kaha jata hai.'
    },
    {
      id: 21,
      topic: 'multiplexer',
      question: 'How many select lines are required for a 32-to-1 Multiplexer?',
      options: ['4', '5', '16', '32'],
      correct: 1,
      explanation: 'Ek MUX me total inputs 2^n hote hain jahan \'n\' number of select lines hoti hain. 32-to-1 MUX ka matlab 32 input lines. 32 ko 2 ki power me likhenge toh 2^5 = 32 aata hai. Isliye isme exactly 5 select lines chahiye (S0, S1, S2, S3, S4).'
    },
    {
      id: 22,
      topic: 'multiplexer',
      question: 'Which of the following circuits is called a Universal Combinational Logic circuit?',
      options: ['Decoder', 'Encoder', 'Multiplexer', 'Half Adder'],
      correct: 2,
      explanation: 'Multiplexer ko Universal Combinational Circuit maana jata hai kyunki kisi bhi Boolean function ya expression ko implement karne ke liye aap akele MUX ka use kar sakte hain bina AND/OR gates ke. Isliye ROM aur FPGA arrays me MUX ki theory bahut kaam aati hai.'
    },
    {
      id: 23,
      topic: 'multiplexer',
      question: 'A Demultiplexer (DEMUX) can function as a ________ if the data input is permanently tied to HIGH (Logic 1) and inputs are given to select lines.',
      options: ['Multiplexer', 'Decoder', 'Encoder', 'Priority Encoder'],
      correct: 1,
      explanation: 'Jab ek DEMUX ki single input data line ko as a Enable line use karte hain aur usko hamesha HIGH rakhte hain, aur main inputs select lines me dete hain, toh wo circuit perfectly ek Decoder ki tarah kaam karta hai. DEMUX aur Decoder ka hardware logic diagram lagbhag identical hota hai.'
    },
    {
      id: 24,
      topic: 'multiplexer',
      question: 'How many 4x1 multiplexers are needed to implement a 16x1 multiplexer?',
      options: ['3', '4', '5', '8'],
      correct: 2,
      explanation: '16 inputs ko process karne ke liye pehle stage par 16/4 = 4 multiplexers lagenge. In 4 MUX se 4 output aayenge. Un 4 outputs ko select karke ek single final output nikalne ke liye second stage par (4/4 = 1) ek aur 4x1 multiplexer lagega. Total = 4 + 1 = 5 multiplexers.'
    },
    {
      id: 25,
      topic: 'sequential-design',
      question: 'Which problem uniquely occurs in a JK Flip-Flop when both J=1 and K=1 and the clock pulse is wide?',
      options: ['Forbidden State', 'Race Around Condition', 'Data Loss', 'Current Leakage'],
      correct: 1,
      explanation: 'Jab JK flip flop me J=1, K=1 hota hai toh output toggle karna chahiye. Par agar clock signal ki duration (width) flip flop ke apne propagation delay se badi ho gayi, toh jab tak clock HIGH rahegi, FF baar baar toggle karta rahega (0..1..0..1). Isey Race Around Condition kehte hain. SR flip-flop me J=1, K=1 jaise state pe forbidden state aati hai.'
    },
    {
      id: 26,
      topic: 'sequential-design',
      question: 'To avoid the Race Around Condition, which of the following is commonly used?',
      options: ['Master-Slave configuration', 'Increasing clock frequency', 'Converting it to SR flip-flop', 'Removing the clock'],
      correct: 0,
      explanation: 'Race Around condition theek karne ka sabse solid tareeka hai Master-Slave JK Flip-flop use karna. Isme do flip-flops cascade hote hain (ek master, ek slave). Master positive edge/level par aur slave negative edge/level par kaam karta hai, jisse output ek clock pulse me sirf ek hi baar change hota hai.'
    },
    {
      id: 27,
      topic: 'sequential-design',
      question: 'Minimum how many flip-flops are required to design a MOD-12 counter?',
      options: ['3', '4', '6', '12'],
      correct: 1,
      explanation: 'Mod-N counter ko 0 se N-1 tak state chahiye hoti hai. Flip flops (n) ka formula hai 2^n >= N. Yahan N=12 hai. Agar n=3 rakhein toh 2^3=8 jo chota pad jayega. Agar n=4 rakhein toh 2^4=16 jo 12 ke liye sufficient hai. Isliye minimum 4 flip-flops lagenge.'
    },
    {
      id: 28,
      topic: 'sequential-design',
      question: 'What is the characteristic equation of a D (Data) Flip-Flop?',
      options: ['Q(t+1) = D', 'Q(t+1) = D\'', 'Q(t+1) = Q(t)', 'Q(t+1) = D . Q(t)'],
      correct: 0,
      explanation: 'D Flip flop sabse basic "Transparent" memory element hai (clock ki presence me). Jo bhi aap D (Data) pin par dete ho, agli state (Q(t+1)) wahi ban jati hai. Isliye characteristic equation simply Q(t+1) = D hoti hai. Ye CPU registers banane me kaam aata hai.'
    },
    {
      id: 29,
      topic: 'sequential-design',
      question: 'What is the main difference between a Latch and a Flip-Flop?',
      options: ['Latches are edge-triggered, Flip-flops are level-triggered', 'Latches have no memory, Flip-flops have memory', 'Latches are level-triggered, Flip-flops are edge-triggered', 'Latches use AC voltage, Flip-flops use DC voltage'],
      correct: 2,
      explanation: 'Asli difference unki trigger method me hota hai. Latches Level-triggered hote hain (jab tak clock signal high ya low ek level pe rahega tab tak inputs accept honge aur output continuous badal sakta hai). Flip-flops Edge-triggered hote hain (sirf clock pulse transition - yani 0 se 1 jate waqt ya 1 se 0 aate waqt hi input lock karte hain).'
    },
    {
      id: 30,
      topic: 'sequential-design',
      question: 'An asynchronous counter is also known as:',
      options: ['Parallel Counter', 'Decade Counter', 'Ripple Counter', 'Ring Counter'],
      correct: 2,
      explanation: 'Asynchronous counter me saare flip flops ek hi main clock se jude nahi hote. Pehle ka output dusre ke liye clock banta hai. Isliye ek state ka change dusre me paani ki lehron (ripple) ki tarah pass hota hai. Isi delay effect ke wajah se isey Ripple Counter kehte hain.'
    }
  ]
};

window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['digital-logic'] = {
  id: 'digital-logic',
  name: 'Digital Logic Systems',
  icon: '🔌',
  description: 'Boolean Algebra, K-maps, Combinational & Sequential Circuits, Multiplexers',
  topics: [
    {
      id: 'boolean-algebra',
      name: 'Boolean Algebra & Logic Gates',
      theory: `
        <h3>Boolean Algebra</h3>
        <p>Boolean algebra deals with binary variables (0 and 1) and logic operations. It forms the mathematical basis for digital circuit design.</p>

        <h4>Basic Logic Operations:</h4>
        <table class="comparison-table">
          <tr><th>Operation</th><th>Gate</th><th>Expression</th><th>Description</th></tr>
          <tr><td>AND</td><td>AND</td><td>Y = A · B</td><td>Output 1 ONLY if BOTH inputs are 1.</td></tr>
          <tr><td>OR</td><td>OR</td><td>Y = A + B</td><td>Output 1 if AT LEAST ONE input is 1.</td></tr>
          <tr><td>NOT</td><td>NOT (Inverter)</td><td>Y = A'</td><td>Output is complement of input.</td></tr>
          <tr><td>NAND</td><td>NAND</td><td>Y = (A · B)'</td><td>Universal Gate. Output 0 ONLY if BOTH inputs 1.</td></tr>
          <tr><td>NOR</td><td>NOR</td><td>Y = (A + B)'</td><td>Universal Gate. Output 1 ONLY if BOTH inputs 0.</td></tr>
          <tr><td>XOR</td><td>EX-OR</td><td>Y = A ⊕ B</td><td>Output 1 if inputs are DIFFERENT (Odd parity).</td></tr>
          <tr><td>XNOR</td><td>EX-NOR</td><td>Y = A ⊙ B</td><td>Output 1 if inputs are SAME (Even parity).</td></tr>
        </table>

        <h4>Boolean Laws and Theorems:</h4>
        <ul>
          <li><strong>Commutative:</strong> A+B = B+A, A·B = B·A</li>
          <li><strong>Associative:</strong> A+(B+C) = (A+B)+C, A·(B·C) = (A·B)·C</li>
          <li><strong>Distributive:</strong> A·(B+C) = A·B + A·C, <strong>A+(B·C) = (A+B)·(A+C)</strong> [Very important!]</li>
          <li><strong>Identity:</strong> A+0 = A, A·1 = A</li>
          <li><strong>Null/Dominance:</strong> A+1 = 1, A·0 = 0</li>
          <li><strong>Idempotent:</strong> A+A = A, A·A = A</li>
          <li><strong>Involution:</strong> (A')' = A</li>
          <li><strong>Complement:</strong> A+A' = 1, A·A' = 0</li>
          <li><strong>Absorption:</strong> A + A·B = A, A·(A + B) = A</li>
        </ul>

        <div class="formula-box">
          <div class="formula-title">📐 De Morgan's Theorems</div>
          1. (A + B)' = A' · B' (NOR = Bubbled AND)<br>
          2. (A · B)' = A' + B' (NAND = Bubbled OR)
        </div>

        <div class="tip-box">
          <div class="tip-title">💡 Universal Gates</div>
          NAND and NOR are called Universal Gates because any logic circuit (including AND, OR, NOT) can be implemented using ONLY NAND gates or ONLY NOR gates.
        </div>
      `
    },
    {
      id: 'kmaps',
      name: 'K-Maps (Karnaugh Maps)',
      theory: `
        <h3>Karnaugh Maps (K-Maps)</h3>
        <p>K-Map is a graphical method used to minimize Boolean expressions without using algebra theorems. It relies on human pattern recognition capability.</p>

        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>Gray Code:</strong> K-Map cells are arranged in Gray Code order (only 1 bit changes between adjacent cells: 00, 01, 11, 10).</li>
          <li><strong>Minterms (SOP):</strong> Sum of Products. Represented by 1s. Variables are uncomplemented if 1, complemented if 0. Example: A'BC (m3).</li>
          <li><strong>Maxterms (POS):</strong> Product of Sums. Represented by 0s. Variables are uncomplemented if 0, complemented if 1. Example: A+B'+C' (M3).</li>
        </ul>

        <h4>Grouping Rules (Subcubes):</h4>
        <ol>
          <li>Groups must contain 1, 2, 4, 8, 16... cells (powers of 2).</li>
          <li>Groups can be horizontal or vertical, not diagonal.</li>
          <li>Groups should be as large as possible.</li>
          <li>Every 1 must be covered by at least one group.</li>
          <li>Overlapping groups are allowed.</li>
          <li>"Wrap-around" grouping is allowed (top edge with bottom edge, left edge with right edge).</li>
        </ol>

        <h4>Terminologies:</h4>
        <table class="comparison-table">
          <tr><th>Term</th><th>Description</th></tr>
          <tr><td><strong>Implicant</strong></td><td>Any single 1 or group of 1s in the K-Map.</td></tr>
          <tr><td><strong>Prime Implicant (PI)</strong></td><td>A group that cannot be combined with any other group to form a larger group.</td></tr>
          <tr><td><strong>Essential Prime Implicant (EPI)</strong></td><td>A PI that covers at least one '1' which is NOT covered by any other PI. Must be in final expression.</td></tr>
          <tr><td><strong>Don't Care (X or d)</strong></td><td>Input conditions that never occur. Can be used as 1 to make larger groups, or ignored if not helpful.</td></tr>
        </table>
      `
    },
    {
      id: 'combinational',
      name: 'Combinational Logic Circuits',
      theory: `
        <h3>Combinational Circuits</h3>
        <p>In combinational circuits, the output depends ONLY on the current input values. They have NO memory. Example: Adders, Multiplexers, Decoders.</p>

        <h4>1. Half Adder and Full Adder</h4>
        <p><strong>Half Adder:</strong> Adds two 1-bit numbers. Outputs: Sum and Carry.</p>
        <ul>
          <li>Sum = A ⊕ B</li>
          <li>Carry = A · B</li>
          <li>Hardware: 1 XOR gate, 1 AND gate.</li>
        </ul>

        <p><strong>Full Adder:</strong> Adds three 1-bit numbers (A, B, and Carry-in).</p>
        <ul>
          <li>Sum = A ⊕ B ⊕ Cin</li>
          <li>Cout = AB + BCin + ACin</li>
          <li>Hardware: 2 Half Adders + 1 OR gate. (Or 2 XOR, 2 AND, 1 OR)</li>
        </ul>

        <h4>2. Half/Full Subtractor</h4>
        <ul>
          <li><strong>Half Subtractor (A - B):</strong> Difference = A ⊕ B, Borrow = A' · B</li>
          <li><strong>Full Subtractor:</strong> Diff = A ⊕ B ⊕ Bin, Bout = A'B + A'Bin + BBin</li>
        </ul>

        <h4>3. Multiplexer (MUX) - "Data Selector"</h4>
        <p>Selects one of many inputs and forwards it to a single output line.</p>
        <ul>
          <li>Has <strong>2^n data inputs</strong>, <strong>n select lines</strong>, and <strong>1 output</strong>.</li>
          <li>Example: 4-to-1 MUX has 4 inputs (D0..D3), 2 select lines (S1, S0), 1 output.</li>
          <li>Equation for 4:1 MUX: Y = S1'S0'D0 + S1'S0D1 + S1S0'D2 + S1S0D3</li>
          <li>Application: Parallel to serial conversion, implementing boolean functions.</li>
        </ul>

        <h4>4. Demultiplexer (DEMUX) - "Data Distributor"</h4>
        <p>Takes one input and routes it to one of many outputs.</p>
        <ul>
          <li>Has <strong>1 input</strong>, <strong>n select lines</strong>, and <strong>2^n outputs</strong>.</li>
          <li>Often identical to a Decoder with an enable input.</li>
        </ul>

        <h4>5. Decoder / Encoder</h4>
        <table class="comparison-table">
          <tr><th>Decoder</th><th>Encoder</th></tr>
          <tr><td>n inputs to 2^n outputs</td><td>2^n inputs to n outputs</td></tr>
          <tr><td>Only one output is active at a time</td><td>Only one input should be active at a time</td></tr>
          <tr><td>Used for memory addressing</td><td>Priority encoder handles multiple active inputs</td></tr>
        </table>

        <div class="warning-box">
          <div class="tip-title">⚠️ Implementation Tricks</div>
          Any n-variable boolean function can be implemented using a 2^(n-1)-to-1 MUX. E.g., A 3-variable function can be implemented using a 4-to-1 MUX.
        </div>
      `
    },
    {
      id: 'sequential',
      name: 'Sequential Logic Circuits',
      theory: `
        <h3>Sequential Circuits</h3>
        <p>In sequential circuits, the output depends on the CURRENT inputs AND PAST inputs (current state). They HAVE memory (Flip-Flops/Latches). Uses a clock signal for synchronization.</p>
        <p><strong>Sequential = Combinational Logic + Memory Elements</strong></p>

        <h4>Latches vs Flip-Flops</h4>
        <table class="comparison-table">
          <tr><th>Latch</th><th>Flip-Flop (FF)</th></tr>
          <tr><td>Level-triggered (active during high/low level)</td><td>Edge-triggered (active at positive/negative edge)</td></tr>
          <tr><td>Faster but less reliable</td><td>Slower but more reliable (no glitching)</td></tr>
          <tr><td>Basic memory element</td><td>Made using latches and clock</td></tr>
        </table>

        <h4>Types of Flip-Flops:</h4>

        <p><strong>1. SR Flip-Flop (Set-Reset):</strong></p>
        <ul>
          <li>S=0, R=0 → No change (Q)</li>
          <li>S=0, R=1 → Reset (0)</li>
          <li>S=1, R=0 → Set (1)</li>
          <li>S=1, R=1 → <strong>Invalid / Race condition</strong></li>
        </ul>

        <p><strong>2. JK Flip-Flop:</strong></p>
        <p>Solves SR's invalid state.</p>
        <ul>
          <li>J=0, K=0 → No change</li>
          <li>J=0, K=1 → Reset (0)</li>
          <li>J=1, K=0 → Set (1)</li>
          <li>J=1, K=1 → <strong>Toggle (Q')</strong></li>
        </ul>
        <p><em>Race Around Condition:</em> Occurs in level-triggered JK FF when J=K=1 and clock pulse is too long. Solved using Master-Slave JK FF or Edge-triggering.</p>

        <p><strong>3. D Flip-Flop (Delay/Data):</strong></p>
        <ul>
          <li>Output strictly follows input D after a clock pulse. Q(next) = D.</li>
          <li>Used in registers and memory.</li>
        </ul>

        <p><strong>4. T Flip-Flop (Toggle):</strong></p>
        <ul>
          <li>T=0 → No change</li>
          <li>T=1 → Toggle (Q')</li>
          <li>Used in counters and frequency dividers.</li>
        </ul>

        <h4>Registers & Counters</h4>
        <p><strong>Registers:</strong> Group of 'n' Flip-Flops used to store 'n' bits of data. Types: SISO, SIPO, PISO, PIPO.</p>
        <p><strong>Counters:</strong> Sequential circuit that counts clock pulses.</p>
        <ul>
          <li><strong>Asynchronous (Ripple) Counter:</strong> Clock is applied only to the first FF. Subsequent FFs are clocked by previous FF's output. Slow due to propagation delay.</li>
          <li><strong>Synchronous Counter:</strong> Same clock applied to ALL FFs simultaneously. Faster.</li>
          <li><strong>Ring Counter:</strong> Shift register where output of last FF is connected to input of first. Mod-n counter.</li>
          <li><strong>Johnson Counter (Twisted Ring):</strong> Output of last FF is inverted and connected to first. Mod-2n counter.</li>
        </ul>
      `
    },
    {
      id: 'logic-families',
      name: 'Logic Families (TTL/CMOS)',
      theory: `
        <h3>Digital Logic Families</h3>
        <p>A logic family is a group of electronic logic gates constructed using a specific design methodology.</p>

        <h4>Key Characteristics:</h4>
        <ul>
          <li><strong>Propagation Delay:</strong> Time taken for output to change after input changes. Lower is better (faster speed).</li>
          <li><strong>Power Dissipation:</strong> Power consumed per gate. Lower is better.</li>
          <li><strong>Figure of Merit:</strong> Propagation Delay × Power Dissipation. Lower is better.</li>
          <li><strong>Fan-in:</strong> Max number of inputs a gate can have.</li>
          <li><strong>Fan-out:</strong> Max number of standard loads a gate can drive without degrading output logic levels.</li>
          <li><strong>Noise Margin:</strong> Maximum noise voltage that can be added to input without causing a false output state.</li>
        </ul>

        <h4>Major Logic Families:</h4>
        <table class="comparison-table">
          <tr><th>Feature</th><th>TTL (Transistor-Transistor Logic)</th><th>CMOS (Complementary Metal Oxide Semiconductor)</th><th>ECL (Emitter Coupled Logic)</th></tr>
          <tr><td>Base Component</td><td>BJT (Bipolar Junction Transistor)</td><td>MOSFET (NMOS + PMOS)</td><td>BJT (Operates in active region)</td></tr>
          <tr><td>Speed</td><td>Moderate</td><td>Slower than TTL (but improving)</td><td><strong>Fastest</strong> (Non-saturated logic)</td></tr>
          <tr><td>Power Dissipation</td><td>High</td><td><strong>Lowest</strong> (almost 0 in static state)</td><td>Highest</td></tr>
          <tr><td>Fan-out</td><td>Medium (~10)</td><td>Very High (>50)</td><td>High (~25)</td></tr>
          <tr><td>Noise Margin</td><td>Moderate</td><td>Excellent</td><td>Poor</td></tr>
          <tr><td>Usage</td><td>Legacy systems</td><td>Modern ICs, Microprocessors, Phones</td><td>High-speed applications (Supercomputers)</td></tr>
        </table>

        <div class="tip-box">
          <div class="tip-title">💡 Important Note for Exam</div>
          <strong>ECL is the fastest</strong> logic family because its transistors never saturate (they operate in active region). <strong>CMOS has the lowest power consumption</strong>, making it standard for modern electronics (VLSI).
        </div>
      `
    }
  ],
  questions: [
    {
      id: 1, topic: 'boolean-algebra',
      question: 'Which of the following gates is considered a Universal Gate?',
      options: ['AND', 'OR', 'XOR', 'NAND'],
      correct: 3,
      explanation: 'NAND and NOR are Universal Gates because any boolean function or logic gate can be implemented using only NAND or only NOR gates.'
    },
    {
      id: 2, topic: 'boolean-algebra',
      question: 'According to Boolean algebra, the expression A + A·B is equal to:',
      options: ['A', 'B', '1', 'A + B'],
      correct: 0,
      explanation: 'By the Absorption Law: A + A·B = A(1 + B). Since 1 + B = 1, this simplifies to A·1 = A.'
    },
    {
      id: 3, topic: 'boolean-algebra',
      question: 'The output of an XOR gate is HIGH (1) when:',
      options: ['Both inputs are HIGH', 'Both inputs are LOW', 'The inputs are different', 'At least one input is HIGH'],
      correct: 2,
      explanation: 'The XOR (Exclusive-OR) gate outputs 1 only when its inputs are unequal (e.g., 0,1 or 1,0). It acts as an inequality detector or odd parity generator.'
    },
    {
      id: 4, topic: 'boolean-algebra',
      question: 'Which boolean theorem states that (A + B)\' = A\' · B\' ?',
      options: ['Consensus Theorem', 'De Morgan\'s Theorem', 'Distributive Law', 'Absorption Law'],
      correct: 1,
      explanation: 'De Morgan\'s Theorem states: The complement of a sum is the product of complements ((A+B)\' = A\'·B\'), and the complement of a product is the sum of complements ((AB)\' = A\'+B\').'
    },
    {
      id: 5, topic: 'kmaps',
      question: 'In a Karnaugh map, the cells are arranged according to:',
      options: ['Binary code', 'BCD code', 'Gray code', 'Excess-3 code'],
      correct: 2,
      explanation: 'K-Map cells follow Gray code sequencing (e.g., 00, 01, 11, 10). This ensures that only one bit changes between any two adjacent cells, allowing visual simplification.'
    },
    {
      id: 6, topic: 'kmaps',
      question: 'An Essential Prime Implicant (EPI) in a K-Map is a group that:',
      options: ['Contains the maximum number of 1s', 'Covers at least one 1 that is not covered by any other group', 'Contains only 0s', 'Includes don\'t care conditions only'],
      correct: 1,
      explanation: 'An EPI covers at least one minterm (a \'1\') that cannot be covered by any other prime implicant. EPIs MUST be included in the final minimized expression.'
    },
    {
      id: 7, topic: 'kmaps',
      question: 'Don\'t care conditions in a K-map can be used to:',
      options: ['Increase the number of terms in the output', 'Make groups larger and simplify the expression further', 'Represent invalid output states only', 'Convert SOP to POS'],
      correct: 1,
      explanation: 'Don\'t cares (X) represent input combinations that will never occur. We can optionally treat them as 1s (or 0s) to create larger groupings, which leads to a more simplified final equation.'
    },
    {
      id: 8, topic: 'combinational',
      question: 'A Full Adder can be constructed using:',
      options: ['Two Half Adders and one OR gate', 'Two Half Adders and one AND gate', 'One Half Adder and two OR gates', 'Three Half Adders'],
      correct: 0,
      explanation: 'A Full Adder adds 3 bits. It requires two Half Adders (to generate sum) and an OR gate (to combine the carry outputs of the two half adders).'
    },
    {
      id: 9, topic: 'combinational',
      question: 'A combinational circuit that selects one from many inputs and directs it to a single output is called a:',
      options: ['Decoder', 'Encoder', 'Multiplexer', 'Demultiplexer'],
      correct: 2,
      explanation: 'A Multiplexer (MUX) acts as a digital switch. It selects one of 2^n input lines and routes it to a single output line, based on the value of n select lines.'
    },
    {
      id: 10, topic: 'combinational',
      question: 'To implement a full subtractor, the minimum number of 2-input XOR gates required is:',
      options: ['1', '2', '3', '4'],
      correct: 1,
      explanation: 'The difference output of a full subtractor is D = A ⊕ B ⊕ Bin. This requires two 2-input XOR gates.'
    },
    {
      id: 11, topic: 'combinational',
      question: 'How many select lines are required for an 8-to-1 Multiplexer?',
      options: ['1', '2', '3', '4'],
      correct: 2,
      explanation: 'A multiplexer with 2^n data inputs requires n select lines. For 8 inputs (2^3), 3 select lines are needed.'
    },
    {
      id: 12, topic: 'sequential',
      question: 'The key difference between combinational and sequential logic circuits is that sequential circuits:',
      options: ['Do not use clock signals', 'Have memory elements', 'Are faster', 'Use only universal gates'],
      correct: 1,
      explanation: 'Sequential circuits have memory (feedback loop) so their output depends on present inputs AND past states. Combinational circuits have no memory.'
    },
    {
      id: 13, topic: 'sequential',
      question: 'In an SR flip-flop, the state S=1 and R=1 is considered:',
      options: ['Set state', 'Reset state', 'No change state', 'Invalid/Race condition'],
      correct: 3,
      explanation: 'Applying 1 to both S and R inputs of a basic SR flip-flop causes both outputs (Q and Q\') to try to become 0 (in NOR implementation), violating the rule that outputs must be complements. It is invalid.'
    },
    {
      id: 14, topic: 'sequential',
      question: 'Which flip-flop eliminates the invalid state of the SR flip-flop?',
      options: ['D flip-flop', 'T flip-flop', 'JK flip-flop', 'Master-Slave flip-flop'],
      correct: 2,
      explanation: 'The JK flip-flop resolves the SR invalid state. When J=1 and K=1, instead of being invalid, the JK flip-flop toggles its output (changes state).'
    },
    {
      id: 15, topic: 'sequential',
      question: 'The "Race Around Condition" occurs in which type of flip-flop?',
      options: ['Level-triggered JK flip-flop', 'Edge-triggered D flip-flop', 'SR latch', 'T flip-flop'],
      correct: 0,
      explanation: 'Race around condition occurs in level-triggered JK flip-flops when J=1, K=1, and the clock pulse width is longer than the propagation delay, causing the output to toggle multiple times in one clock pulse.'
    },
    {
      id: 16, topic: 'sequential',
      question: 'A Mod-16 counter requires a minimum of how many flip-flops?',
      options: ['2', '3', '4', '16'],
      correct: 2,
      explanation: 'To count up to Mod-N, you need n flip-flops such that 2^n ≥ N. For Mod-16, 2^n ≥ 16, so n = 4 flip-flops are needed.'
    },
    {
      id: 17, topic: 'sequential',
      question: 'In an asynchronous (ripple) counter, the clock pulse is applied to:',
      options: ['All flip-flops simultaneously', 'Only the first flip-flop', 'Only the last flip-flop', 'Even numbered flip-flops only'],
      correct: 1,
      explanation: 'In a ripple counter, the external clock is given only to the LSB flip-flop. The output of one flip-flop acts as the clock input for the next flip-flop.'
    },
    {
      id: 18, topic: 'logic-families',
      question: 'Which digital logic family has the lowest power dissipation?',
      options: ['TTL', 'ECL', 'CMOS', 'DTL'],
      correct: 2,
      explanation: 'CMOS (Complementary Metal Oxide Semiconductor) has near-zero static power dissipation, making it the standard for modern ICs and microprocessors.'
    },
    {
      id: 19, topic: 'logic-families',
      question: 'Which digital logic family is known for the fastest switching speed?',
      options: ['TTL', 'CMOS', 'ECL', 'RTL'],
      correct: 2,
      explanation: 'ECL (Emitter Coupled Logic) is the fastest because its transistors operate in the active region and never saturate, eliminating storage time delay.'
    },
    {
      id: 20, topic: 'logic-families',
      question: 'The term "Fan-out" of a logic gate refers to:',
      options: ['The amount of heat it generates', 'The maximum number of standard inputs it can drive reliably', 'The number of inputs it has', 'The delay from input to output'],
      correct: 1,
      explanation: 'Fan-out is the maximum number of similar logic gates that the output of a gate can drive without the voltage levels dropping below specified limits.'
    },
    {
      id: 21, topic: 'boolean-algebra',
      question: 'The boolean expression A + A\'B is simplified to:',
      options: ['A', 'B', 'A + B', '1'],
      correct: 2,
      explanation: 'By the distributive property of OR over AND: A + A\'B = (A + A\')(A + B). Since A + A\' = 1, it becomes 1(A + B) = A + B.'
    },
    {
      id: 22, topic: 'combinational',
      question: 'A 3-to-8 line decoder can be used to implement any boolean function of:',
      options: ['2 variables', '3 variables', '4 variables', '8 variables'],
      correct: 1,
      explanation: 'A 3-to-8 decoder generates all 8 minterms of 3 variables. By connecting the desired minterm outputs to an OR gate, any 3-variable boolean function can be implemented.'
    },
    {
      id: 23, topic: 'sequential',
      question: 'A Shift Register is an example of a:',
      options: ['Combinational circuit', 'Sequential circuit', 'Analog circuit', 'Memoryless circuit'],
      correct: 1,
      explanation: 'A shift register is made of a cascade of flip-flops (memory elements) sharing the same clock. Since it stores and shifts data over time, it is a sequential circuit.'
    },
    {
      id: 24, topic: 'sequential',
      question: 'To divide the frequency of a clock signal by 2, which flip-flop configuration is commonly used?',
      options: ['D flip-flop with D connected to 1', 'T flip-flop with T connected to 1', 'SR flip-flop with S=1, R=0', 'JK flip-flop with J=0, K=0'],
      correct: 1,
      explanation: 'A T flip-flop with its input T tied to logic 1 toggles its output on every clock edge. This effectively halves the frequency of the input clock signal.'
    },
    {
      id: 25, topic: 'kmaps',
      question: 'In a 4-variable K-Map, how many cells does the map contain?',
      options: ['4', '8', '16', '32'],
      correct: 2,
      explanation: 'The number of cells in a K-Map is 2^n, where n is the number of variables. For 4 variables, 2^4 = 16 cells.'
    },
    {
      id: 26, topic: 'kmaps',
      question: 'Grouping 4 adjacent ones (a quad) in a K-map eliminates how many variables from the term?',
      options: ['1 variable', '2 variables', '3 variables', '4 variables'],
      correct: 1,
      explanation: 'Grouping 2 cells eliminates 1 variable. Grouping 4 cells eliminates 2 variables. Grouping 8 cells eliminates 3 variables.'
    },
    {
      id: 27, topic: 'logic-families',
      question: 'The base element of TTL logic family is:',
      options: ['MOSFET', 'BJT', 'Diode', 'Resistor'],
      correct: 1,
      explanation: 'Transistor-Transistor Logic (TTL) uses Bipolar Junction Transistors (BJTs) as its primary switching and amplifying components.'
    },
    {
      id: 28, topic: 'boolean-algebra',
      question: 'Which of the following boolean expressions represents the Ex-NOR operation?',
      options: ['AB\' + A\'B', 'AB + A\'B\'', '(A+B)(A\'+B\')', 'A\'B\''],
      correct: 1,
      explanation: 'Ex-NOR output is 1 when inputs are the same. It is represented by AB + A\'B\'. Ex-OR is AB\' + A\'B.'
    },
    {
      id: 29, topic: 'combinational',
      question: 'A priority encoder is used to:',
      options: ['Encode data securely', 'Handle multiple active inputs by assigning priority', 'Convert serial to parallel data', 'Generate parity bits'],
      correct: 1,
      explanation: 'In a standard encoder, only one input can be active. A priority encoder allows multiple active inputs and outputs the binary code corresponding to the input with the highest priority.'
    },
    {
      id: 30, topic: 'sequential',
      question: 'A Ring Counter built with n flip-flops provides how many distinct states?',
      options: ['n', '2n', 'n/2', '2^n'],
      correct: 0,
      explanation: 'A Ring Counter passes a single \'1\' through a ring of n flip-flops, so it has exactly n states. A Johnson counter with n flip-flops has 2n states.'
    },
    {
      id: 31, topic: 'logic-families',
      question: 'Figure of Merit for a logic family is defined as:',
      options: ['Power Dissipation / Propagation Delay', 'Propagation Delay × Power Dissipation', 'Fan-out × Noise Margin', 'Propagation Delay + Power Dissipation'],
      correct: 1,
      explanation: 'The Figure of Merit (or Speed-Power Product) is the product of Propagation Delay (time) and Power Dissipation. A lower value indicates a better overall logic family.'
    },
    {
      id: 32, topic: 'sequential',
      question: 'Which component is essential for building a synchronous sequential circuit but NOT for a combinational circuit?',
      options: ['AND Gate', 'Clock', 'Multiplexer', 'Decoder'],
      correct: 1,
      explanation: 'Synchronous sequential circuits require a Clock signal to synchronize state changes in their memory elements (flip-flops). Combinational circuits do not use a clock.'
    }
  ]
};

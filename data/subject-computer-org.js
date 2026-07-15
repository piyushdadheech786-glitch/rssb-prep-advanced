window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['computer-org'] = {
  id: 'computer-org',
  name: 'Computer Organization',
  icon: '🏗️',
  description: 'Processor, memory, aur system architecture ki internal working ka complete breakdown.',
  topics: [
    {
      id: 'von-neumann',
      name: 'Von-Neumann Architecture',
      theory: `
        <h3>Von-Neumann Architecture</h3>
        <p>Von-Neumann architecture ek classical computer design model hai. Iska main concept hai <b>Stored Program Concept</b>, jiska matlab hai ki instructions (program) aur data dono ek hi memory mein store hote hain. CPU sequentially ek-ek instruction fetch karta hai, decode karta hai aur execute karta hai.</p>
        
        <h4>Key Components</h4>
        <ul>
          <li><b>CPU:</b> Jismein ALU (Arithmetic Logic Unit) aur CU (Control Unit) hote hain.</li>
          <li><b>Memory:</b> Ek unified memory (RAM) jo data aur instructions dono ko hold karti hai.</li>
          <li><b>I/O Devices:</b> Input aur Output ke liye.</li>
        </ul>
        
        <table class="comparison-table">
          <tr><th>Feature</th><th>Von-Neumann Architecture</th><th>Harvard Architecture</th></tr>
          <tr><td>Memory</td><td>Data aur Instructions ke liye single memory.</td><td>Data aur Instructions ke liye separate memories.</td></tr>
          <tr><td>Buses</td><td>Single common bus (bottleneck hota hai).</td><td>Separate buses (faster execution).</td></tr>
          <tr><td>Cost & Space</td><td>Cheaper aur kam space leta hai.</td><td>Expensive aur complex wiring.</td></tr>
        </table>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Von-Neumann bottleneck us situation ko kehte hain jab CPU bhot fast hota hai par memory access slow hone ki wajah se common bus par traffic jam ho jata hai.
        </div>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Exam mein puchte hain "Which architecture uses single memory for data and instructions?" - Sahi answer hamesha Von-Neumann hoga. Harvard mat tick karna!
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p>Agar CPU ko ek addition perform karna hai (C = A + B):</p>
        <ol>
          <li>Instruction (Add A, B) memory se fetch hoga.</li>
          <li>Data A memory se fetch hoga.</li>
          <li>Data B memory se fetch hoga.</li>
          <li>ALU add karega aur result memory mein C location par store hoga.</li>
        </ol>
        <p>Kyunki sab kuch ek hi memory aur bus par ho raha hai, ye sequential aur slow process ban jata hai.</p>
      `
    },
    {
      id: 'registers',
      name: 'Registers & RTL',
      theory: `
        <h3>CPU Registers</h3>
        <p>Registers CPU ke andar sabse choti aur sabse fast memory units hote hain. Ye temporarily data, instructions, aur memory addresses hold karte hain jab processing chal rahi hoti hai.</p>
        
        <h4>Important Registers</h4>
        <ul>
          <li><b>PC (Program Counter):</b> Next execute hone wali instruction ka address hold karta hai.</li>
          <li><b>IR (Instruction Register):</b> Currently executing instruction ko hold karta hai.</li>
          <li><b>MAR (Memory Address Register):</b> Memory ka wo address hold karta hai jahan se read ya write karna hai.</li>
          <li><b>MDR/MBR (Memory Data Register):</b> Memory se jo data aata hai ya memory mein jo data likhna hai, usko hold karta hai.</li>
          <li><b>AC (Accumulator):</b> ALU operations ke initial data aur final results ko temporarily hold karta hai.</li>
        </ul>
        
        <div class="formula-box">
          <div class="formula-title">📐 Register Transfer Language (RTL)</div>
          RTL ek notation hai jo registers ke beech data flow ko dikhata hai.<br>
          Format: <code>Destination <- Source</code><br>
          Example: <code>MAR <- PC</code> (PC ki value MAR mein transfer ho gayi)
        </div>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          "Which register holds the address of the NEXT instruction?" is directly PC (Program Counter). Lekin agar pucha ho "Which register holds the currently executing instruction?", toh answer IR (Instruction Register) hoga.
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p><b>Instruction Fetch Cycle ka RTL:</b></p>
        <pre>
T0: MAR <- PC         (PC ka address MAR ko diya)
T1: MDR <- M[MAR],    (Memory se data read karke MDR mein dala)
    PC <- PC + 1      (PC ko increment kiya next instruction ke liye)
T2: IR <- MDR         (MDR ka data Instruction Register mein load kiya)
        </pre>
        <p>Ye sequence exam mein directly arrange karne ke liye aa sakta hai!</p>
      `
    },
    {
      id: 'micro-ops',
      name: 'Micro Operations',
      theory: `
        <h3>Micro Operations</h3>
        <p>Machine instruction ko execute karne ke liye jo chote-chote fundamental operations ek clock pulse mein CPU ke andar hote hain, unko Micro-operations kehte hain.</p>
        
        <h4>Types of Micro-operations</h4>
        <ul>
          <li><b>Register Transfer:</b> Ek register se doosre register mein data copy karna (e.g., <code>R1 <- R2</code>).</li>
          <li><b>Arithmetic:</b> Add, subtract, increment, decrement (e.g., <code>R3 <- R1 + R2</code>).</li>
          <li><b>Logic:</b> Bitwise operations jaise AND, OR, XOR, NOT (e.g., <code>R1 <- R1 ^ R2</code>).</li>
          <li><b>Shift:</b> Data bits ko left ya right shift karna (Logical shift, Circular shift, Arithmetic shift).</li>
        </ul>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Arithmetic Left Shift hamesha number ko 2 se multiply (x2) karta hai. Arithmetic Right Shift number ko 2 se divide (/2) karta hai. (As long as overflow na ho).
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p><b>Question:</b> Arithmetic Left shift aur Logical Left Shift mein kya difference hai?</p>
        <p><b>Answer:</b> Dono mein same operation hota hai (bits shift left aur LSB par 0 add ho jata hai). Lekin Arithmetic Right Shift (ARS) MSB (sign bit) ko preserve karta hai, jabki Logical Right Shift MSB mein hamesha 0 daal deta hai.</p>
        <pre>
Initial Value: 1011 (-5 in 4-bit 2's complement)
Logical Right Shift: 0101 (5) -> Sign change ho gaya!
Arithmetic Right Shift: 1101 (-3) -> Sign bit preserved rahi.
        </pre>
      `
    },
    {
      id: 'control-logic',
      name: 'Control Unit Design',
      theory: `
        <h3>Control Unit Design</h3>
        <p>Control Unit (CU) ka kaam hai CPU ke saare operations ko control signals bhej kar manage karna. Ye CPU ka "Brain ka supervisor" hai.</p>
        <p>CU do tareeke se design kiya ja sakta hai: <b>Hardwired Control</b> aur <b>Micro-programmed Control</b>.</p>
        
        <table class="comparison-table">
          <tr><th>Feature</th><th>Hardwired Control Unit</th><th>Micro-programmed Control Unit</th></tr>
          <tr><td>Design</td><td>Logic gates, flip-flops aur circuits se banta hai.</td><td>Control memory mein micro-instructions store hoti hain.</td></tr>
          <tr><td>Speed</td><td>Bahut fast hota hai (hardware implementation).</td><td>Thoda slow hota hai (memory read karni padti hai).</td></tr>
          <tr><td>Flexibility</td><td>Rigid hota hai. Modification mushkil hai.</td><td>Highly flexible. Naye instructions easily add kar sakte hain.</td></tr>
          <tr><td>Usage</td><td>RISC processors mein use hota hai.</td><td>CISC processors mein use hota hai.</td></tr>
        </table>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Micro-programmed CU ek software-like approach hai hardware design ke liye. Usme ek choti "Control Memory" hoti hai jismein micro-routines store hote hain.
        </div>
        
        <div class="formula-box">
          <div class="formula-title">📐 Horizontal vs Vertical Microprogramming</div>
          <b>Horizontal:</b> Long control word, no decoding needed, fast. One bit per control signal.<br>
          <b>Vertical:</b> Short control word, decoder needed, slower but saves memory.
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p><b>Scenario:</b> Agar ek processor mein 60 control signals hain.</p>
        <p>Horizontal microprogramming mein control word ka size kam se kam 60 bits ka hoga (har signal ke liye 1 bit).</p>
        <p>Vertical microprogramming mein, agar 60 signals mutually exclusive hain, toh unhe log2(60) ≈ 6 bits mein encode kiya ja sakta hai (plus decoder use karke unhe wapas 60 mein convert kiya jayega). Isse control memory ka size bhot kam ho jata hai.</p>
      `
    },
    {
      id: 'processor-addr',
      name: 'Addressing Modes',
      theory: `
        <h3>Addressing Modes</h3>
        <p>Instruction ke operand (data) ko specify karne ke tarike ko Addressing Mode kehte hain. Alag-alag modes use karke hum pointers, arrays aur loops ko easily implement kar sakte hain.</p>
        
        <h4>Types of Addressing Modes</h4>
        <ul>
          <li><b>Immediate Mode:</b> Operand direct instruction mein hi diya hota hai. (e.g., <code>ADD #5</code> - yahan 5 data hai).</li>
          <li><b>Direct / Absolute Mode:</b> Instruction mein operand ka direct memory address hota hai.</li>
          <li><b>Indirect Mode:</b> Instruction mein ek address hota hai, jahan ek aur address milta hai jisme actual data hota hai (Pointers ke liye best hai).</li>
          <li><b>Register Mode:</b> Operand kisi CPU register mein hota hai. (Fastest mode).</li>
          <li><b>Register Indirect Mode:</b> Register mein data ka memory address hota hai.</li>
          <li><b>Indexed Mode:</b> Effective Address = Base Address + Index Register. Arrays access karne ke liye ideal hai.</li>
          <li><b>Relative Mode:</b> Effective Address = PC + Offset. Branching aur loops ke liye use hota hai.</li>
        </ul>
        
        <div class="formula-box">
          <div class="formula-title">📐 Effective Address (EA)</div>
          EA wo actual physical address hai jahan data rakha hota hai.
        </div>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          "Which addressing mode is used for Relocation of code?" - Relative Addressing Mode. <br>
          "Which addressing mode is used for Array Implementation?" - Indexed Addressing Mode.
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p>Instruction: <code>LOAD 1000</code></p>
        <ul>
          <li><b>Immediate Mode:</b> Memory se 1000 ko read karega as data. (Value = 1000)</li>
          <li><b>Direct Mode:</b> Memory location 1000 par jayega aur waha ka data uthayega. (Value = M[1000])</li>
          <li><b>Indirect Mode:</b> Memory location 1000 par jayega, waha suppose 2500 rakha hai. Phir memory location 2500 par jayega actual data ke liye. (Value = M[M[1000]])</li>
        </ul>
      `
    },
    {
      id: 'bus-org',
      name: 'Bus Organization',
      theory: `
        <h3>Bus Organization</h3>
        <p>Computer ke different components (CPU, Memory, I/O) ko aapas mein connect karne wale wire/lines ke group ko Bus kehte hain.</p>
        
        <h4>System Bus</h4>
        <p>System bus 3 parts mein divided hoti hai:</p>
        <ul>
          <li><b>Data Bus (Bidirectional):</b> Data aur instructions carry karti hai. Iski width decide karti hai ki CPU ek baar mein kitna data read/write kar sakta hai (Word size).</li>
          <li><b>Address Bus (Unidirectional):</b> CPU se Memory ya I/O tak address carry karti hai. Iski width decide karti hai system ki maximum memory capacity kitni hogi.</li>
          <li><b>Control Bus (Bidirectional generally):</b> Control signals (Read, Write, Interrupt, ACK) carry karti hai.</li>
        </ul>
        
        <div class="formula-box">
          <div class="formula-title">📐 Memory Capacity Calculation</div>
          Agar address bus N bits ki hai, toh maximum addressable memory locations = 2<sup>N</sup>.
        </div>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Address bus hamesha Unidirectional hoti hai (CPU -> Memory/IO). Data bus Bidirectional hoti hai kyunki read aur write dono hota hai.
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p><b>Question:</b> Ek processor mein 32-bit address bus aur 64-bit data bus hai. Uski maximum memory capacity kitni hogi?</p>
        <p><b>Answer:</b> Address lines (N) = 32.</p>
        <p>Max memory locations = 2<sup>32</sup> = 4 Giga (4G). Agar memory byte-addressable hai, toh total capacity 4 GB hogi.</p>
        <p>Data bus 64-bit ka matlab hai, CPU ek memory access cycle mein 8 bytes data ek sath utha sakta hai.</p>
      `
    },
    {
      id: 'io-dma',
      name: 'I/O Organization & DMA',
      theory: `
        <h3>I/O Transfer Techniques</h3>
        <p>CPU aur I/O devices ke beech data transfer karne ke 3 main tarike hote hain:</p>
        <ol>
          <li><b>Programmed I/O:</b> CPU baar-baar check karta hai ki device ready hai ya nahi (Polling). Isme CPU ka bahut time waste hota hai.</li>
          <li><b>Interrupt-Driven I/O:</b> CPU apna kaam karta rehta hai. Jab device ready hota hai, wo CPU ko interrupt bhejta hai. CPU ruk kar I/O operation karta hai. (Polling se better hai).</li>
          <li><b>DMA (Direct Memory Access):</b> High-speed data transfer (jaise Hard disk se RAM) ke liye. CPU DMA controller ko kaam dekar free ho jata hai. DMA controller direct memory aur I/O ke beech data transfer karta hai bina CPU ko involve kiye.</li>
        </ol>
        
        <h4>DMA Transfer Modes</h4>
        <ul>
          <li><b>Burst Mode:</b> DMA ek baar system bus ka control leta hai aur poora block transfer karne ke baad hi bus CPU ko wapas deta hai. (Fastest)</li>
          <li><b>Cycle Stealing Mode:</b> DMA 1 byte/word transfer karta hai, phir bus CPU ko de deta hai, phir wapas steal karta hai. Isme CPU completely block nahi hota.</li>
        </ul>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          DMA request signal (DRQ / HOLD) I/O device se aata hai aur uske response mein CPU DMA Acknowledge (HLDA) signal bhejta hai, jiska matlab hai CPU ne buses ka control release kar diya hai.
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p><b>Scenario:</b> Agar ek magnetic disk se 1MB file memory mein laani hai.</p>
        <p>Agar hum Interrupt-driven I/O use karein, toh har byte ke baad interrupt aayega (1 million interrupts), jisse CPU crash ya bhot slow ho jayega. Isliye aisi situations mein hum DMA use karte hain jo direct 1MB memory mein daal kar end mein sirf 1 interrupt deta hai ki "Kaam ho gaya!".</p>
      `
    },
    {
      id: 'memory-org',
      name: 'Memory Hierarchy & RAM',
      theory: `
        <h3>Memory Hierarchy</h3>
        <p>Computer mein memory ko ek pyramid/hierarchy mein arrange kiya jata hai speed aur cost ke basis par.</p>
        <pre>
Registers (CPU ke andar, Fastest, Smallest, Costliest)
    |
Cache Memory (SRAM, Very Fast, Small)
    |
Main Memory (DRAM, Fast, Large)
    |
Magnetic/Secondary Storage (Hard Disk, Slowest, Largest, Cheapest)
        </pre>
        
        <h4>RAM Organization: 2D vs 2.5D</h4>
        <ul>
          <li><b>2D Memory:</b> Har word ke liye ek alag row hoti hai. Row decoder bahut bada ho jata hai. (e.g. 16x8 memory = 16 words, 8 bits/word).</li>
          <li><b>2.5D Memory:</b> Row aur Column decoders dono use hote hain matrix format mein. Isse decoder ka size chota ho jata hai aur space bachti hai. (Most practical implementation).</li>
        </ul>
        
        <h4>Memory Interleaving</h4>
        <p>Main memory ko alag-alag modules/banks mein divide kiya jata hai taaki multiple memory words ko parallel mein access kiya ja sake. Isse memory bandwidth increase hoti hai aur Von-Neumann bottleneck reduce hota hai.</p>
        
        <div class="formula-box">
          <div class="formula-title">📐 Memory Access Time</div>
          Effective Access Time = Hit Time (Cache) + Miss Rate x Miss Penalty (Main Memory Access time)
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p><b>Question:</b> Ek 4-way interleaved memory banani hai. Agar ek module ka access time 100ns hai, toh effective access time kya hoga?</p>
        <p><b>Answer:</b> Kyunki 4 modules parallel mein data de sakte hain, hum successively 4 words ko pipeline karke fetch kar sakte hain. Ideal pipelined scenario mein, per word effective access time = 100ns / 4 = 25ns ho jayega (ignoring bus delays).</p>
      `
    },
    {
      id: 'cache-coherence',
      name: 'Cache Mapping & Coherence',
      theory: `
        <h3>Cache Mapping Techniques</h3>
        <p>Main memory (RAM) bahut badi hoti hai aur Cache choti. RAM ke blocks ko Cache mein laane ke tarike ko mapping kehte hain.</p>
        <ul>
          <li><b>Direct Mapping:</b> Memory ka block Cache ki ek fixed line mein hi aayega. (Formula: <code>Cache_Line = Block_No % Total_Lines</code>). Conflict misses jyada hote hain.</li>
          <li><b>Fully Associative Mapping:</b> Memory ka block Cache ki kisi bhi empty line mein ja sakta hai. Sabse flexible par hardware-wise sabse expensive, kyunki search karne ke liye bhot saare comparators lagte hain.</li>
          <li><b>Set-Associative Mapping:</b> Cache ko "Sets" mein divide karte hain (e.g., 2-way, 4-way). Ek block ek fixed set mein jayega, par us set ke andar kisi bhi line mein reh sakta hai. (Direct aur Associative ka middle ground).</li>
        </ul>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Cache Direct Mapping ka address format: [Tag | Line/Index | Word/Offset].<br>
          Associative ka format: [Tag | Word/Offset].
        </div>
        
        <h4>Cache Coherence Problem</h4>
        <p>Multiprocessor systems mein har CPU ka apna L1 cache hota hai. Agar ek CPU ne cache mein variable 'X' ko update kar diya, par memory aur doosre CPU ke cache mein purani value hai, toh data inconsistency ho jayegi. Ise Cache Coherence Problem kehte hain.</p>
        <p>Isko solve karne ke liye <b>MESI Protocol (Modified, Exclusive, Shared, Invalid)</b> jaise Snooping protocols use hote hain.</p>
        
        <h4>Example (Worked Out)</h4>
        <p><b>Numerical:</b> Cache memory size = 64 KB. Line size = 32 Bytes. Total Cache Lines kitni hongi?</p>
        <p><b>Answer:</b> Total Lines = Cache Size / Line Size<br>
        = 64 KB / 32 Bytes<br>
        = (64 x 1024) / 32<br>
        = 2048 lines.</p>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'von-neumann',
      question: 'Stored program concept kis architecture ka core feature hai?',
      options: ['Harvard Architecture', 'Von-Neumann Architecture', 'RISC Architecture', 'Super-scalar Architecture'],
      correct: 1,
      explanation: 'Von-Neumann architecture stored program concept par based hai jisme instructions aur data dono same memory unit mein store hote hain. Harvard mein dono alag-alag hote hain.'
    },
    {
      id: 2,
      topic: 'von-neumann',
      question: '"Von-Neumann bottleneck" kisse related hai?',
      options: ['ALU ki slow processing speed se', 'CPU aur Memory ke beech single bus hone ki wajah se data transfer delays', 'Hard disk ki low RPM se', 'Cache memory ke chote size se'],
      correct: 1,
      explanation: 'Von-Neumann architecture mein data aur instruction ek hi common bus se aate hain. CPU fast hota hai, bus slow aur single hone ki wajah se execution delay hota hai jise bottleneck kehte hain.'
    },
    {
      id: 3,
      topic: 'von-neumann',
      question: 'Agar CPU ko instruction aur data ek hi time (simultaneously) par fetch karna ho, toh kaunsa architecture better perform karega?',
      options: ['Von-Neumann', 'Harvard', 'Accumulator based', 'Stack based'],
      correct: 1,
      explanation: 'Harvard architecture mein instructions aur data ke liye separate memories aur separate buses hoti hain, isliye dono ek sath (simultaneously) fetch kiye ja sakte hain.'
    },
    {
      id: 4,
      topic: 'registers',
      question: 'Kaunsa register currently executing instruction ke opcode ko hold karta hai?',
      options: ['Program Counter (PC)', 'Memory Data Register (MDR)', 'Instruction Register (IR)', 'Accumulator (AC)'],
      correct: 2,
      explanation: 'IR (Instruction Register) us instruction ko hold karta hai jo decode aur execute ho rahi hoti hai. PC next instruction ka address hold karta hai.'
    },
    {
      id: 5,
      topic: 'registers',
      question: 'Fetch cycle ke dauran, sabse pehla RTL micro-operation kya hota hai?',
      options: ['IR <- MDR', 'MAR <- PC', 'PC <- PC + 1', 'MDR <- Memory[MAR]'],
      correct: 1,
      explanation: 'Sabse pehle PC (Program Counter) us location ka address MAR (Memory Address Register) mein dalta hai jaha se instruction fetch karni hai (MAR <- PC).'
    },
    {
      id: 6,
      topic: 'registers',
      question: 'Kaunsa register ALU ke result ko temporarily store karne ke liye primarily use hota hai 1-address machines mein?',
      options: ['Instruction Register', 'Program Counter', 'Accumulator', 'Index Register'],
      correct: 2,
      explanation: '1-address instruction format mein default source aur destination Accumulator (AC) register hi hota hai.'
    },
    {
      id: 7,
      topic: 'micro-ops',
      question: 'Ek binary number par "Arithmetic Left Shift" (ALS) apply karne ka mathematically kya matlab hota hai?',
      options: ['Divide by 2', 'Multiply by 2', 'Convert positive to negative', 'No change in value'],
      correct: 1,
      explanation: 'Arithmetic Left Shift ek number ke binary representation ko left shift karke uski value ko 2 se multiply karta hai (jab tak overflow na ho).'
    },
    {
      id: 8,
      topic: 'micro-ops',
      question: 'Kaunsa micro-operation bitwise complement operation perform karta hai?',
      options: ['AND', 'OR', 'XOR', 'NOT'],
      correct: 3,
      explanation: 'NOT logic micro-operation har bit ko flip kar deta hai (0 ko 1, aur 1 ko 0), jise bitwise complement (1\\'s complement) kehte hain.'
    },
    {
      id: 9,
      topic: 'micro-ops',
      question: 'Agar hum do same numbers ka XOR karein (A XOR A), toh result kya hoga?',
      options: ['1', '0', 'A', '-A'],
      correct: 1,
      explanation: 'XOR gate mein agar dono inputs same hote hain, toh output hamesha 0 hota hai. Yeh technique register ko clear/zero karne ke liye use hoti hai.'
    },
    {
      id: 10,
      topic: 'control-logic',
      question: 'Hardwired control unit ke baare mein kya sahi hai?',
      options: ['Ye microprograms use karta hai', 'Ye hardware components (gates, flip-flops) ka use karke banta hai', 'Ye easy to modify hota hai', 'Ye CISC processors mein jyada use hota hai'],
      correct: 1,
      explanation: 'Hardwired control unit purely logical hardware (gates, decoders) se bana hota hai, isliye ye bahut fast hota hai lekin ise change/modify karna mushkil hota hai.'
    },
    {
      id: 11,
      topic: 'control-logic',
      question: 'Kaunsi microprogramming technique mein control word lamba hota hai par kisi decoder ki jarurat nahi hoti?',
      options: ['Vertical Microprogramming', 'Horizontal Microprogramming', 'Diagonal Microprogramming', 'Nanoprogramming'],
      correct: 1,
      explanation: 'Horizontal microprogramming mein har control signal ke liye 1 dedicated bit hoti hai. Isliye control word long hota hai, par decoding delay nahi hota isliye execution fast hoti hai.'
    },
    {
      id: 12,
      topic: 'control-logic',
      question: 'Micro-programmed control unit ka main advantage kya hai?',
      options: ['It is faster than hardwired', 'Hardware implementation is simpler', 'It is highly flexible and easy to modify instructions', 'It does not require control memory'],
      correct: 2,
      explanation: 'Micro-programmed CU control memory mein software instructions jaisa pattern save karta hai, isliye nayi instructions add karna ya design modify karna asaan aur flexible hota hai.'
    },
    {
      id: 13,
      topic: 'processor-addr',
      question: 'Arrays aur loops ki processing ke liye kaunsa addressing mode sabse best mana jata hai?',
      options: ['Immediate Addressing', 'Direct Addressing', 'Indexed Addressing', 'Register Direct Addressing'],
      correct: 2,
      explanation: 'Indexed addressing mode mein ek base address hota hai aur Index register ki value usme add hoti hai (EA = Base + Index). Yeh array elements ko sequential access karne (loops mein) perfectly suit karta hai.'
    },
    {
      id: 14,
      topic: 'processor-addr',
      question: 'Kaunse addressing mode mein operand ki value instruction ke andar hi di hoti hai?',
      options: ['Direct', 'Indirect', 'Immediate', 'Relative'],
      correct: 2,
      explanation: 'Immediate addressing mode mein operand data instruction ka hi part hota hai (e.g., ADD #10), memory access ki alag se jarurat nahi hoti data fetch karne ke liye.'
    },
    {
      id: 15,
      topic: 'processor-addr',
      question: 'Relocatable programs banane ke liye primarily kis addressing mode ka use kiya jata hai?',
      options: ['Absolute Addressing', 'PC-Relative Addressing', 'Register Indirect', 'Immediate Addressing'],
      correct: 1,
      explanation: 'PC-Relative addressing mein address Program Counter ki current value ke respect mein offset add karke banta hai. Isliye agar code memory mein kahi aur shift (relocate) ho jaye, toh bhi PC aur offset ka distance same rehta hai.'
    },
    {
      id: 16,
      topic: 'bus-org',
      question: 'Agar ek CPU ka address bus 16-bits lamba hai, toh wo CPU maximum kitni memory locations address kar sakta hai?',
      options: ['16 KB', '32 KB', '64 KB', '128 KB'],
      correct: 2,
      explanation: 'Formula hai 2^n. Agar n = 16 hai, toh 2^16 = 65,536 locations = 64 Kilo locations (64 KB agar byte-addressable ho).'
    },
    {
      id: 17,
      topic: 'bus-org',
      question: 'System bus ka kaunsa part Unidirectional (ek hi direction mein data flow) hota hai?',
      options: ['Data Bus', 'Control Bus', 'Address Bus', 'I/O Bus'],
      correct: 2,
      explanation: 'Address hamesha CPU generate karta hai aur Memory ya I/O ko bhejta hai (CPU -> Memory). Isliye Address Bus Unidirectional hoti hai. Data bus Bidirectional hoti hai (read/write).'
    },
    {
      id: 18,
      topic: 'bus-org',
      question: 'Data bus ki width generally kis parameter ko define karti hai?',
      options: ['Memory Capacity', 'Word length (Processor size, e.g., 32-bit or 64-bit CPU)', 'Number of I/O ports', 'Interrupt priority'],
      correct: 1,
      explanation: 'Data bus ki width batati hai ki CPU ek stroke mein memory se kitne bits ka data utha sakta hai, jise hum processor ki word length (jaise 32-bit processor) kehte hain.'
    },
    {
      id: 19,
      topic: 'io-dma',
      question: 'I/O data transfer ke kis mode mein CPU lagatar (continuously) device ka status check karta rehta hai?',
      options: ['Programmed I/O (Polling)', 'Interrupt-driven I/O', 'Direct Memory Access (DMA)', 'Cycle Stealing'],
      correct: 0,
      explanation: 'Programmed I/O mein CPU wait loop mein phasa rehta hai aur baar-baar status bit check karta hai ki device ready hua ya nahi. Ise Polling ya busy-waiting kehte hain.'
    },
    {
      id: 20,
      topic: 'io-dma',
      question: 'High speed I/O devices (jaise Hard Disk) se memory mein data transfer karne ke liye kaunsi technique sabse efficient hai?',
      options: ['Programmed I/O', 'Interrupt-driven I/O', 'Direct Memory Access (DMA)', 'Software Polling'],
      correct: 2,
      explanation: 'DMA mein DMA controller direct system bus ka control le leta hai aur memory aur I/O ke beech fast block transfer karta hai bina CPU ka time waste kiye. Ye hard disk jaise fast devices ke liye best hai.'
    },
    {
      id: 21,
      topic: 'io-dma',
      question: 'DMA ka "Cycle Stealing" mode kya hota hai?',
      options: ['DMA apna operation hidden rakhta hai', 'DMA CPU ko bataye bina data delete karta hai', 'DMA controller bus ko ek clock cycle ke liye use karta hai, phir wapas CPU ko deta hai', 'I/O device CPU ke instruction cycles steal karta hai'],
      correct: 2,
      explanation: 'Cycle Stealing mode mein DMA controller 1 word/byte transfer karta hai bus ka control lekar, aur phir turant control CPU ko wapas de deta hai taaki CPU bilkul idle na baitha rahe.'
    },
    {
      id: 22,
      topic: 'memory-org',
      question: 'Memory hierarchy mein jab hum top se bottom (Registers -> Cache -> Main Memory -> Disk) aate hain, toh kya badhta hai?',
      options: ['Speed aur Cost', 'Cost aur Size', 'Access time aur Capacity', 'Frequency aur Speed'],
      correct: 2,
      explanation: 'Hierarchy mein niche aane par memory slow hoti jati hai (Access time badhta hai) aur Size (Capacity) badi hoti jati hai. Cost per bit kam hoti hai.'
    },
    {
      id: 23,
      topic: 'memory-org',
      question: 'Memory Interleaving kyo use ki jati hai?',
      options: ['Memory ka size badhane ke liye', 'Cache hit ratio kam karne ke liye', 'Simultaneous parallel memory accesses ko allow karke access time improve karne ke liye', 'Power consumption kam karne ke liye'],
      correct: 2,
      explanation: 'Memory ko multiple banks mein divide karne (interleaving) se CPU ek sath multiple memory modules se alag-alag words parallel mein access kar sakta hai, jisse overall bandwidth badhti hai.'
    },
    {
      id: 24,
      topic: 'memory-org',
      question: 'DRAM (Dynamic RAM) ko baar-baar refresh kyo karna padta hai?',
      options: ['Kyuki ye magnetic material se bani hoti hai', 'Kyuki data capacitors mein store hota hai jo time ke sath charge leak karte hain', 'Kyuki CPU refresh instructions bhejta hai', 'Kyuki SRAM slow hoti hai'],
      correct: 1,
      explanation: 'DRAM ke cells transistor aur capacitor se bane hote hain. Capacitor ka charge naturally leak (discharge) hota rehta hai, isliye data loose hone se bachane ke liye use periodic "refresh" cycle ki jarurat padti hai.'
    },
    {
      id: 25,
      topic: 'cache-coherence',
      question: 'Cache memory aur Main memory ke beech data map karne ki kaunsi technique mein sabse kam "conflict misses" hote hain?',
      options: ['Direct Mapping', 'Fully Associative Mapping', 'Set-Associative Mapping', 'Register Mapping'],
      correct: 1,
      explanation: 'Fully Associative Mapping mein main memory ka block cache mein KAHI BHI empty line par ja sakta hai, isliye conflict miss tabhi hoga jab poori cache full ho.'
    },
    {
      id: 26,
      topic: 'cache-coherence',
      question: 'Multiprocessor systems mein har processor ke apne local cache hone se kaunsi problem aati hai?',
      options: ['Thrashing', 'Page Fault', 'Cache Coherence Problem', 'Fragmentation'],
      correct: 2,
      explanation: 'Jab multiple caches mein ek hi shared data variable ki copy hoti hai aur koi ek processor use update kar de, toh baaki caches mein purana (stale) data reh jata hai. Ise Cache Coherence Problem kehte hain.'
    },
    {
      id: 27,
      topic: 'cache-coherence',
      question: '"Hit Ratio" cache memory ke context mein kya define karta hai?',
      options: ['CPU dwara cache destroy karne ka rate', 'Kitni baar required data direct cache mein mil gaya compared to total access attempts', 'Memory block ko RAM mein likhne ka rate', 'Cache mein errors aane ki probability'],
      correct: 1,
      explanation: 'Hit ratio = (Number of hits) / (Total memory references). Ye batata hai ki cache kitni successfully CPU ki requests ko poora kar raha hai bina main memory par jaye.'
    },
    {
      id: 28,
      topic: 'cache-coherence',
      question: 'Direct Mapped Cache mein address kis format mein split hota hai?',
      options: ['Tag | Word', 'Tag | Index/Line | Word/Offset', 'Index | Word', 'Block | Tag'],
      correct: 1,
      explanation: 'Direct mapping mein memory address teen parts mein divide hota hai: Tag (to verify exact block), Index/Line number (to find the specific line in cache), aur Word/Offset (block ke andar specific byte dhundhne ke liye).'
    }
  ]
};

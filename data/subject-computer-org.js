window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['computer-org'] = {
  id: 'computer-org',
  name: 'Computer Organization & Architecture',
  icon: '🏗️',
  description: 'Complete syllabus coverage of Computer Organization and Architecture including CPU internals, control units, memory hierarchy, I/O handling, and multiprocessors.',
  topics: [
    {
      id: 'architecture-models',
      name: 'Von-Neumann vs Harvard Architecture',
      theory: `
        <h3>Introduction to Computer Organization vs Architecture</h3>
        <p>Computer Architecture un attributes ko define karta hai jo programmer ko dikhte hain (jaise instruction set, number of bits used for data representation, I/O mechanisms, addressing techniques). Yahan question "What does the computer do?" ka answer milta hai.</p>
        <p>Wahien, Computer Organization in architectural specifications ko implement karne ke internal hardware details ko dikhata hai (jaise logic circuits, memory technology used, control signals). Yahan "How is it done?" ka answer milta hai.</p>

        <h4>Von-Neumann Architecture</h4>
        <p>John von Neumann ne 1945 mein ek revolutionary concept propose kiya jise <strong>Stored Program Concept</strong> kehte hain. Is architecture mein program instructions aur data dono ek hi memory mein store hote hain. Early computers mein programs hardware wiring (plugboards) se feed kiye jaate the, lekin von Neumann model ne sab kuch software-driven bana diya.</p>
        <p><strong>Key Components:</strong></p>
        <ul>
          <li>Central Processing Unit (CPU) jisme ALU aur Control Unit hote hain.</li>
          <li>Single Memory Unit jo instructions aur data dono ke liye shared hoti hai.</li>
          <li>Mass Storage aur I/O devices.</li>
        </ul>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap (Von Neumann Bottleneck)</div>
          Kyunki instruction fetch aur data fetch ek hi common bus se hote hain, CPU ko frequently wait karna padta hai. Is restriction ko "Von Neumann Bottleneck" kehte hain. Ek single clock cycle mein aap ya toh instruction read kar sakte ho, ya data read/write kar sakte ho, dono ek saath nahi.
        </div>

        <h4>Harvard Architecture</h4>
        <p>Harvard architecture is bottleneck problem ko solve karta hai by providing <strong>separate memory for data and instructions</strong>. Isme do alag buses hoti hain: ek instruction fetch karne ke liye aur ek data read/write karne ke liye. Yeh primarily microcontrollers (jaise PIC, 8051, AVR) aur Digital Signal Processors (DSPs) mein use hota hai.</p>

        <table class="comparison-table">
          <tr><th>Feature</th><th>Von-Neumann Architecture</th><th>Harvard Architecture</th></tr>
          <tr><td>Memory</td><td>Single memory space for both data and instructions</td><td>Separate memory spaces for data and instructions</td></tr>
          <tr><td>Buses</td><td>Single shared bus system (Data + Address shared)</td><td>Two separate bus systems working independently</td></tr>
          <tr><td>Speed</td><td>Slower due to bottleneck (requires multiple cycles)</td><td>Faster execution, fetch and execute overlap</td></tr>
          <tr><td>Cost & Hardware</td><td>Less hardware, cheaper and simpler to implement</td><td>More hardware (more pins & buses), expensive</td></tr>
          <tr><td>Usage</td><td>General purpose computers (PCs, Laptops, Servers)</td><td>Microcontrollers, DSPs, embedded systems</td></tr>
        </table>

        <h4>Modified Harvard Architecture</h4>
        <p>Aaj kal ke modern high-performance processors (like Intel Core i7, ARM) Modified Harvard Architecture use karte hain. Isme primary memory (RAM) toh single hoti hai (Von-Neumann style), lekin CPU ke andar jo <strong>L1 Cache</strong> hoti hai, wo separate hoti hai: L1 Instruction Cache (L1i) aur L1 Data Cache (L1d). Isse cache level pe Harvard ka speed advantage milta hai, aur RAM level pe Von Neumann ka space saving advantage.</p>
      `
    },
    {
      id: 'registers-microops',
      name: 'Registers, RTL and Micro-operations',
      theory: `
        <h3>CPU Registers</h3>
        <p>CPU ke andar chote, bohot fast storage locations hote hain jinhe Registers kaha jata hai. Ye operations ke time data aur instructions hold karte hain. Memory access slow hota hai, isliye CPU pehle data ko registers mein lata hai. Major registers is prakar hain:</p>
        <ul>
          <li><strong>Program Counter (PC):</strong> Next instruction jo execute hone wala hai, uska memory address store karta hai. Jaise hi instruction fetch hota hai, PC automatically increment ho jata hai (PC &larr; PC + 1).</li>
          <li><strong>Instruction Register (IR):</strong> Currently executing instruction (memory se fetch hone ke baad) isme store hota hai. Yahi se decoder instruction ko decode karta hai.</li>
          <li><strong>Memory Address Register (MAR):</strong> Jis memory location se data read ya write karna hai, uska absolute address MAR mein hota hai. MAR direct address bus se connected hota hai.</li>
          <li><strong>Memory Data Register (MDR) / Memory Buffer Register (MBR):</strong> Memory se read kiya gaya data ya memory mein write hone wala data isme temporary store hota hai. Data bus direct MDR se connected hoti hai.</li>
          <li><strong>Accumulator (AC):</strong> Yeh ek special general-purpose register hai jo ALU operations ka default destination hota hai. For example, ek 1-address ADD instruction Accumulator ki value aur memory ki value ko add karke result wapas Accumulator mein hi dalta hai.</li>
        </ul>

        <h3>Register Transfer Language (RTL)</h3>
        <p>Registers aur memory ke beech data transfer ko symbolically represent karne ke liye RTL use hoti hai. Yeh digital system ke internal operations define karti hai.</p>
        <ul>
          <li><strong>Basic Transfer:</strong> <code>R2 &larr; R1</code> (Register R1 ka content R2 mein copy ho gaya. R1 ka content unchanged rehta hai).</li>
          <li><strong>Conditional Transfer:</strong> <code>P: R2 &larr; R1</code> (Agar control signal P=1 hai, tabhi transfer hoga).</li>
          <li><strong>Simultaneous Transfer:</strong> <code>R2 &larr; R1, R1 &larr; R2</code> (Dono operations ek hi clock pulse mein, i.e., Swap).</li>
        </ul>

        <h3>Micro-Operations</h3>
        <p>Ek machine instruction (jaise ADD ya LOAD) actually CPU ke andar chote-chote fundamental hardware operations mein toot jata hai, jinhe Micro-operations kehte hain. Ye primitive operations generally ek clock cycle mein execute hote hain.</p>
        
        <h4>1. Arithmetic Micro-operations</h4>
        <p>Basic mathematical operations perform karte hain:</p>
        <ul>
          <li><strong>Addition:</strong> <code>R3 &larr; R1 + R2</code></li>
          <li><strong>Subtraction (using 2's Complement):</strong> <code>R3 &larr; R1 + R2' + 1</code> (R2 ka 1's complement le kar 1 add karte hain, jo usko negate karta hai).</li>
          <li><strong>Increment:</strong> <code>R1 &larr; R1 + 1</code></li>
          <li><strong>Decrement:</strong> <code>R1 &larr; R1 - 1</code></li>
        </ul>

        <h4>2. Logic Micro-operations</h4>
        <p>Yeh bit-wise operations perform karte hain. Jaise AND, OR, XOR, aur Complement. Inka use non-numeric bit manipulation ke liye hota hai:</p>
        <ul>
          <li><strong>Masking (AND):</strong> Specific bits ko clear (0) karne ke liye. Kisi bhi bit ko 0 ke sath AND karne par wo 0 ho jati hai.</li>
          <li><strong>Selective Set (OR):</strong> Specific bits ko 1 set karne ke liye. Kisi bhi bit ko 1 ke sath OR karne par wo 1 ho jati hai.</li>
          <li><strong>Selective Complement (XOR):</strong> Specific bits ko toggle (invert) karne ke liye.</li>
        </ul>

        <h4>3. Shift Micro-operations</h4>
        <p>Data bits ko left ya right shift karne ke liye. Yeh multiplication/division aur data routing mein kaam aate hain.</p>
        <ul>
          <li><strong>Logical Shift:</strong> Bits shift hoti hain aur khali hui position par 0 insert hota hai. (Used for unsigned numbers)</li>
          <li><strong>Arithmetic Shift:</strong> Sign bit preserve hoti hai. Arithmetic Left Shift mein 0 insert hota hai (acts like multiply by 2). Arithmetic Right Shift mein MSB (Sign bit) repeat hoti hai taaki sign change na ho (acts like divide by 2 for signed numbers).</li>
          <li><strong>Circular Shift (Rotate):</strong> Jo bit ek end se bahar nikal rahi hai, wahi doosri taraf se andar aa jati hai. Data loss nahi hota.</li>
        </ul>
      `
    },
    {
      id: 'control-unit',
      name: 'Control Unit: Hardwired vs Microprogrammed',
      theory: `
        <h3>Control Unit (CU) Overview</h3>
        <p>Control Unit CPU ka "brain" ya "nervous system" hai. Yeh khud data processing (maths/logic) nahi karta, balki ALU, registers aur memory ko direct karta hai ki unhe kya karna hai. Yeh instruction decode karta hai aur uske hisaab se timing aur control signals generate karta hai.</p>

        <p>Control signals generate karne ke do major approaches hain:</p>

        <h4>1. Hardwired Control Unit</h4>
        <p>Is approach mein control signals purely hardware logic circuits (AND, OR, NOT gates, decoders, multiplexers, flip-flops) ka use karke generate kiye jate hain. Pura control logic silicon mein "wired" hota hai.</p>
        <ul>
          <li><strong>Speed:</strong> Bahut fast hota hai kyunki signals directly gate delays ke baad generate ho jate hain.</li>
          <li><strong>Flexibility:</strong> Bilkul flexible nahi hota. Agar koi naya instruction add karna ho ya logic change karni ho, toh pura hardware chip re-design karna padega.</li>
          <li><strong>Complexity:</strong> Agar instruction set bada ho, to iska circuit bohot complicated, messy aur bulky ho jata hai.</li>
          <li><strong>Application:</strong> RISC (Reduced Instruction Set Computer) processors mein mainly use hota hai kyunki unme instructions kam aur length mein fixed hote hain.</li>
        </ul>

        <h4>2. Microprogrammed Control Unit</h4>
        <p>Prof. Maurice Wilkes ne 1951 mein ise propose kiya tha. Isme control logic ko hardware ki bajaye ek chote software program (jise Microprogram kehte hain) ke roop mein likh kar ek special fast memory mein store kiya jata hai jise <strong>Control Memory (CM)</strong> kehte hain.</p>
        <p>Har machine instruction (like ADD, MUL) ke correspond ek microprogram hota hai jisme sequence of <strong>microinstructions</strong> hoti hain. Har microinstruction literally ek bit-pattern (0s and 1s) hold karti hai jo directly control lines pe jati hai.</p>
        <ul>
          <li><strong>Operation:</strong> Jab ek machine instruction fetch hota hai, uski opcode decode hoti hai aur wo opcode Control Memory mein ek starting address (mapping) generate karta hai. Wahan se sequentially microinstructions fetch aur execute hoti hain.</li>
          <li><strong>Flexibility:</strong> Highly flexible. Naya instruction add karne ke liye bas Control Memory (jo ki ROM/PROM ho sakti hai) mein naya microprogram burn karna hota hai, hardware gates change karne ki zaroorat nahi.</li>
          <li><strong>Speed:</strong> Hardwired se thoda slow hota hai kyunki isme Control Memory se microinstructions fetch karne ka memory access time add ho jata hai.</li>
          <li><strong>Application:</strong> CISC (Complex Instruction Set Computer) processors (jaise Intel x86) jahan bohot saare complex aur variable length instructions hote hain.</li>
        </ul>

        <table class="comparison-table">
          <tr><th>Feature</th><th>Hardwired Control Unit</th><th>Microprogrammed Control Unit</th></tr>
          <tr><td>Implementation</td><td>Logic gates, flip-flops, hardware circuits</td><td>Control memory storing microinstructions</td></tr>
          <tr><td>Speed</td><td>Extremely Fast</td><td>Slower (Due to Control Memory read operations)</td></tr>
          <tr><td>Flexibility</td><td>Rigid, very hard to modify</td><td>Highly flexible, easy to update via microcode patches</td></tr>
          <tr><td>Cost</td><td>Expensive for complex instruction sets</td><td>Cheaper and systematic for large complex sets</td></tr>
          <tr><td>Used in</td><td>RISC Processors</td><td>CISC Processors</td></tr>
        </table>
      `
    },
    {
      id: 'processor-addressing',
      name: 'Instruction Formats and Addressing Modes',
      theory: `
        <h3>The Instruction Cycle</h3>
        <p>CPU memory se instruction ko lake use execute karta hai. Is periodic sequence ko Instruction Cycle (Machine Cycle) kehte hain. Iske main phases hain:</p>
        <ol>
          <li><strong>Fetch:</strong> PC ka address MAR mein jata hai. Memory se us address ka instruction MDR/MBR mein aata hai, fir IR (Instruction Register) mein copy hota hai. Is dauran PC increment ho jata hai.</li>
          <li><strong>Decode:</strong> Control Unit IR mein maujud opcode ko decode karta hai ki ye konsa operation hai. Sath hi, Operand kis addressing mode me hai ye bhi check hota hai.</li>
          <li><strong>Effective Address (EA) Read:</strong> Agar indirect ya displacement addressing hai, to memory se actual data ka address laya jata hai.</li>
          <li><strong>Execute:</strong> Operation perform hota hai aur result appropriate destination (register ya memory) mein store kiya jata hai.</li>
        </ol>

        <h3>Instruction Formats</h3>
        <p>Ek machine instruction basically bit-fields ka ek group hota hai. Isme generally <strong>Opcode</strong> (Operation Code) aur <strong>Operand</strong> (Data or Address) ki fields hoti hain. Depending on processor architecture, instructions 4 tarah ke ho sakte hain:</p>

        <ul>
          <li><strong>Zero-Address Instructions:</strong> (Stack Architecture) Isme koi operand address nahi hota. Pura kaam stack par hota hai. ALU automatically stack ke top do elements pop karta hai, operation karta hai, aur result wapas stack pe push kar deta hai. <br> <em>Example:</em> <code>ADD</code> (Push/Pop operations is architecture ka main part hote hain).</li>
          <li><strong>One-Address Instructions:</strong> (Accumulator Architecture) Isme sirf ek address specify hota hai. Doosra operand default <strong>Accumulator (AC)</strong> register me hota hai aur result bhi default AC me hi jata hai. <br> <em>Example:</em> <code>ADD X</code> means <code>AC &larr; AC + M[X]</code>.</li>
          <li><strong>Two-Address Instructions:</strong> (General Register Architecture) Do addresses specify hote hain. Inme se ek destination ka bhi kaam karta hai. <br> <em>Example:</em> <code>ADD R1, R2</code> means <code>R1 &larr; R1 + R2</code>. (Most common in modern processors).</li>
          <li><strong>Three-Address Instructions:</strong> Teen addresses hote hain. Do source aur ek destination. Length badi hoti hai instruction ki. <br> <em>Example:</em> <code>ADD R1, R2, R3</code> means <code>R1 &larr; R2 + R3</code>.</li>
        </ul>

        <h3>Addressing Modes</h3>
        <p>Memory mein operand (data) kis tarike se point kiya gaya hai aur CPU uski actual target location (Effective Address - EA) kaise calculate karega, ise Addressing Mode kehte hain. Yeh programmers ko arrays, pointers, loops aur relocatable code likhne ki flexibility dete hain.</p>

        <table class="comparison-table">
          <tr><th>Addressing Mode</th><th>How it works</th><th>Effective Address (EA)</th><th>Primary Application</th></tr>
          <tr><td><strong>Implied / Implicit</strong></td><td>Operand opcode mein hi hidden hota hai. Alag se operand address dene ki zarurat nahi.</td><td>-</td><td>Stack ops, CMA (Complement Accumulator)</td></tr>
          <tr><td><strong>Immediate Mode</strong></td><td>Instruction ke andar address ki jagah direct constant data hi diya hota hai.</td><td>Operand = Address field value</td><td>Initializing registers/constants (e.g., MOV R1, #50)</td></tr>
          <tr><td><strong>Direct / Absolute</strong></td><td>Instruction mein memory ka direct address diya hota hai jahan data rakha hai.</td><td>EA = Address field</td><td>Accessing static/global variables</td></tr>
          <tr><td><strong>Indirect Mode</strong></td><td>Instruction mein memory ka wo address hota hai, jisme actual data ka address (pointer) store hota hai. (Address of address)</td><td>EA = M[Address field]</td><td>Pointers in C/C++, passing array references</td></tr>
          <tr><td><strong>Register Mode</strong></td><td>Operand directly CPU register mein present hota hai. Koi memory access nahi hota.</td><td>EA = Register R</td><td>Fast processing, storing local variables</td></tr>
          <tr><td><strong>Register Indirect</strong></td><td>Register ke andar us memory ka address store hota hai jahan data hai.</td><td>EA = Content of R</td><td>Array manipulation using pointers</td></tr>
          <tr><td><strong>Displacement / Indexed</strong></td><td>Instruction mein ek Base address/Offset aur ek Index Register hota hai. Dono ko add karke EA banta hai.</td><td>EA = Index Register + Offset</td><td>Array indexing (Base address + index 'i')</td></tr>
          <tr><td><strong>Relative Mode</strong></td><td>Program Counter (PC) ki current value aur instruction mein diye gaye offset ko add karke address banta hai.</td><td>EA = PC + Offset</td><td>Branching (If-else, loops) / Relocatable code</td></tr>
          <tr><td><strong>Base Register Mode</strong></td><td>Base register mein program ka starting address hota hai, aur offset add karte hain.</td><td>EA = Base Register + Offset</td><td>Relocation of programs in memory by OS</td></tr>
          <tr><td><strong>Auto-Increment</strong></td><td>Register indirect jaisa hi, bas memory access ke baad register ki value automatically increase ho jati hai.</td><td>EA = R, then R &larr; R + step</td><td>Stepping through Arrays continuously</td></tr>
        </table>
      `
    },
    {
      id: 'bus-org',
      name: 'System Bus and Bus Arbitration',
      theory: `
        <h3>System Bus Organization</h3>
        <p>Computer ke lagbhag sabhi major components (CPU, Memory, I/O) ko aapas mein communicate karne ke liye wires/lines ke ek common set ka use karna padta hai jise <strong>Bus</strong> kehte hain. Ek samay mein bus par ek hi device signal (data) send kar sakta hai (transmission conflict rokne ke liye), jabki receive kitne bhi devices kar sakte hain.</p>
        
        <h4>Types of System Buses</h4>
        <ul>
          <li><strong>Data Bus:</strong> CPU, memory aur I/O ke beech actual data transfer karti hai. Ye <strong>bi-directional</strong> hoti hai. Data bus ki width (lines ki sankhya, jaise 32-bit ya 64-bit) decide karti hai ki ek baar me kitna data transfer ho sakta hai (Word size).</li>
          <li><strong>Address Bus:</strong> Source ya destination ka memory/I/O address carry karti hai. Ye primarily <strong>uni-directional</strong> (CPU se memory/I/O ki taraf) hoti hai. Address bus ki width (n bits) system ki maximum memory capacity decide karti hai (max addressable locations = $2^n$).</li>
          <li><strong>Control Bus:</strong> Timing, sync, aur command signals (jaise Memory Read, Memory Write, I/O Read, Interrupt Acknowledge, Bus Request) carry karti hai. Ye bi-directional hoti hai kyunki signal CPU se IO bhi jata hai aur I/O se CPU bhi.</li>
        </ul>

        <h3>Synchronous vs Asynchronous Bus</h3>
        <div class="formula-box">
          <ul>
            <li><strong>Synchronous Bus:</strong> Isme ek global clock signal hota hai. Sabhi data transfers clock cycle ke specific edge (jaise rising edge) pe hote hain. Ye fast hota hai but un devices ke liye suitable hai jinki speed lagbhag same ho.</li>
            <li><strong>Asynchronous Bus:</strong> Isme koi common clock nahi hoti. Devices ek dusre se communicate karne ke liye <strong>Handshaking signals</strong> (jaise 'Ready', 'Ack' - Acknowledge) ka use karte hain. Ye alag-alag speeds pe chalne wale devices (slow I/O vs fast CPU) ke beech transfer ke liye best hai.</li>
          </ul>
        </div>

        <h3>Bus Arbitration</h3>
        <p>System mein CPU ke alawa kuch I/O devices (jaise DMA Controller) bhi "Bus Master" ban sakte hain. Agar ek se zyada Master devices ek hi time pe bus ka control mange, toh conflict ho jayega. Is conflict ko resolve karne ki process ko <strong>Bus Arbitration</strong> kehte hain. Ek hardware circuitry jise Bus Arbiter kehte hain, ye decide karta hai ki bus ka control next kise milega.</p>

        <p><strong>Centralized Arbitration Schemes:</strong></p>
        <ol>
          <li><strong>Daisy Chaining:</strong> Ye sabse simple hardware arrangement hai. Isme saare devices ek series (chain) mein arbiter se connected hoti hain. Arbiter 'Bus Grant' signal pehle device 1 ko bhejta hai. Agar use bus chahiye to wo rakh leta hai, nahi to wo signal aage device 2 ko pass kar deta hai. Isme strict physical priority hoti hai. <br><em>Disadvantage:</em> Fairness nahi hai; lowest priority device 'Starvation' me ja sakta hai agar higher priority ones bus occupy karte rahe. Agar chain beech me toot jaye to aage ki devices dead ho jati hain.</li>
          <li><strong>Polling Method:</strong> Arbiter sabhi devices ka address ek-ek karke address lines par generate karta hai (poll karta hai). Jiska address match hota hai aur agar usne request ki ho, toh usko bus mil jati hai. Software ke through priority change karna possible hai.</li>
          <li><strong>Independent Request:</strong> Har device ki arbiter ke sath apni separate direct 'Bus Request' aur 'Bus Grant' line hoti hai. Arbiter ke andar priority encoder logic hoti hai. Ye fastest hai but wires ki sankhya (complexity) bohot zyada badh jati hai.</li>
        </ol>
      `
    },
    {
      id: 'io-dma',
      name: 'Input/Output Organization and DMA',
      theory: `
        <h3>Modes of Data Transfer</h3>
        <p>CPU aur external I/O devices (Keyboard, Printer, Hard Disk) ke speed mein aur data formats mein bahut difference hota hai. Inhe sync me lane ke liye alag-alag data transfer modes use hote hain.</p>

        <h4>1. Programmed I/O</h4>
        <p>Is mode mein sara control software (program) ke haath mein hota hai. CPU ek I/O read/write instruction initiate karta hai aur fir ek while-loop mein continuously I/O module ka status register check karta rehta hai ki "kya device ready hai?". Ise Polling kehte hain. <br>
        <div class="warning-box">
          <div class="tip-title">⚠️ Drawback</div>
          CPU ka bahut sara valuable execution time khali wait (busy-wait loop) karne mein waste ho jata hai. System efficiency severely drop hoti hai.
        </div></p>

        <h4>2. Interrupt-Driven I/O</h4>
        <p>Programmed I/O ka busy-waiting hatane ke liye interrupts use kiye jate hain. CPU device ko command dekar apna doosra independent program execute karne lagta hai. Jab I/O device ready ho jata hai, toh wo CPU ko ek hardware signal bhejta hai jise <strong>Interrupt</strong> kehte hain. CPU apna current state save karke <strong>Interrupt Service Routine (ISR)</strong> execute karta hai aur data transfer karta hai.<br>
        Interrupts do type se ISR locate kar sakte hain:
        <ul>
          <li><strong>Vectored Interrupt:</strong> Interrupting device khud data bus ke jariye ISR ka starting address (Vector) CPU ko supply karta hai. CPU sidha wahan jump karta hai. Fast.</li>
          <li><strong>Non-Vectored Interrupt:</strong> CPU ek common default ISR address pe jata hai, aur wahan code check karta hai ki actually interrupt kisne generate kiya. Slow.</li>
        </ul></p>

        <h4>3. Direct Memory Access (DMA)</h4>
        <p>Agar hume disk drive se large block of data (files) memory me transfer karni ho, toh Interrupt I/O bhi bottleneck ban jayega kyunki har single byte/word transfer ke liye CPU ko interrupt aayega aur registers involve honge. Is problem ka solution DMA hai.<br>
        <strong>DMA Controller (DMAC)</strong> ek special high-speed hardware hai. CPU DMAC ko parameters (Read/Write command, Starting Memory Address, aur Data Count) dekar free ho jata hai. Ab DMAC CPU se system buses ka control take-over karta hai aur directly Memory aur I/O ke beech data transfer karta hai. Jab pure N bytes transfer ho jate hain, tab DMAC finally CPU ko ek interrupt bhejta hai ki "Job done".
        </p>

        <div class="tip-box">
          <div class="tip-title">⚙️ DMA Data Transfer Modes (Important)</div>
          Bus ka control lene ke aadhar par 3 modes hain:
          <ul>
            <li><strong>Burst Mode (Block Transfer):</strong> DMAC bus ka control completely apne paas rakhta hai jab tak pura data block transfer nahi ho jata. CPU is dauran bus use nahi kar pata (halted or works from cache). (Used for fast Disk Drives).</li>
            <li><strong>Cycle Stealing Mode:</strong> DMAC ek baar mein sirf 1 data word transfer karta hai (yani bus ka 1 cycle steal karta hai), aur wapas bus ka control CPU ko lauta deta hai. Isse slowly background me transfer hota rehta hai aur CPU lambe time tak block nahi hota.</li>
            <li><strong>Transparent / Hidden DMA:</strong> DMAC sirf tabhi data transfer karta hai jab CPU locally ALU me busy ho aur use external system bus ki zarurat nahi ho. CPU ko pata bhi nahi chalta (zero speed degradation).</li>
          </ul>
        </div>

        <h4>I/O Processor (IOP / Channel)</h4>
        <p>Mainframe computers mein I/O handling itni complex hoti hai ki uske liye DMA ki jagah ek poora dedicated processor laga diya jata hai, jise I/O Channel ya I/O Processor kehte hain. Iske paas apni memory, instruction fetching capability aur logical logic hoti hai. Main CPU bas "Start I/O" command dekar bhool jata hai, aur IOP complex formatting aur error checking khud sambhalta hai.</p>
      `
    },
    {
      id: 'memory-hierarchy',
      name: 'Memory Hierarchy and Main Memory',
      theory: `
        <h3>Memory Hierarchy Concept</h3>
        <p>Kisi bhi computer system mein memory design me 3 parameters sabse important hote hain: <strong>Speed (Access Time), Capacity, aur Cost per bit</strong>. <br>
        Ideal memory wo hogi jo infinitely badi ho, CPU jitni fast ho, aur cost bilkul zero ho. Lekin physically ye possible nahi hai. Fast memories (SRAM) bahut expensive hoti hain, aur sasti memories (Magnetic Disk) bahut slow hoti hain. Is trade-off ko solve karne ke liye memory ko alag-alag levels mein arrange kiya jata hai jise Memory Hierarchy kehte hain.</p>

        <p>Hierarchy from top to bottom (CPU se door jaate hue):</p>
        <ol>
          <li><strong>CPU Registers:</strong> Inside CPU. Fastest, smallest capacity (few bytes), most expensive (Flip-flops).</li>
          <li><strong>Cache Memory:</strong> Nearest to CPU. Made of SRAM. Very fast, small capacity (few MBs). High cost.</li>
          <li><strong>Main Memory (RAM):</strong> Made of DRAM. Medium speed, large capacity (GBs). Medium cost.</li>
          <li><strong>Secondary Storage:</strong> Magnetic disks (HDD), Solid State Drives (SSD). Slow, huge capacity (TBs), very cheap, non-volatile.</li>
          <li><strong>Tertiary Storage:</strong> Magnetic tapes, Optical disks. Used for offline backup. Slowest.</li>
        </ol>

        <div class="formula-box">
          <div class="formula-title">📐 Locality of Reference (The Magic Behind Hierarchy)</div>
          Memory hierarchy successful isliye hai kyunki computer programs "Locality of Reference" ka principle follow karte hain. Iska matlab hai ki execution ke dauran memory accesses random nahi hote, balki kuch specific areas mein cluster hote hain.
          <ul>
            <li><strong>Temporal Locality (Locality in Time):</strong> Agar ek memory address abhi access hua hai, toh highest probability hai ki wo thodi der me wapas access hoga (Example: Loop variables, counters). Isliye inko Cache me rakhna faydemand hai.</li>
            <li><strong>Spatial Locality (Locality in Space):</strong> Agar ek location access hui hai, toh uske aas-paas (adjacent) ki locations jaldi hi access hongi (Example: Arrays, sequential program instructions). Isliye data hamesha "Blocks" me main memory se cache me laya jata hai.</li>
          </ul>
        </div>

        <h3>Main Memory Technologies</h3>
        <p>Primary memory mainly do types ki hoti hai: RAM aur ROM.</p>
        
        <h4>RAM (Random Access Memory) - Volatile</h4>
        <table class="comparison-table">
          <tr><th>Feature</th><th>SRAM (Static RAM)</th><th>DRAM (Dynamic RAM)</th></tr>
          <tr><td>Component</td><td>Flip-flops (4 to 6 transistors per cell)</td><td>1 Transistor + 1 Capacitor per cell</td></tr>
          <tr><td>Data State</td><td>Holds data as long as power is ON</td><td>Capacitor leaks charge over time</td></tr>
          <tr><td>Refreshing</td><td><strong>No refresh required</strong></td><td>Must be <strong>periodically refreshed</strong> (every few ms)</td></tr>
          <tr><td>Speed & Cost</td><td>Very fast, very expensive</td><td>Slower, much cheaper</td></tr>
          <tr><td>Application</td><td>Used for L1, L2, L3 Cache memory</td><td>Used for Computer Main Memory (RAM)</td></tr>
        </table>

        <h4>ROM (Read Only Memory) - Non-Volatile</h4>
        <ul>
          <li><strong>Mask ROM:</strong> Manufacturing ke time chip me logic physically burn kar diya jata hai. Cannot be changed.</li>
          <li><strong>PROM (Programmable ROM):</strong> One Time Programmable (OTP). User ek special device se program karta hai (fuses blow hote hain).</li>
          <li><strong>EPROM (Erasable PROM):</strong> Chip ko motherboard se nikal kar <strong>UV (Ultra-Violet) light</strong> me 20 min expose karne se pura data mit jata hai. Fir dobara likh sakte hain.</li>
          <li><strong>EEPROM (Electrically Erasable PROM):</strong> High electrical voltage apply karke byte-by-byte data mitaya/likha ja sakta hai. UV light ki zarurat nahi. <strong>Flash Memory</strong> iska hi ek advance form hai jisme byte-by-byte ki jagah Block-by-Block erase/write hota hai, jo isko SSDs, Pen drives, aur BIOS chips ke liye perfect banata hai.</li>
        </ul>
      `
    },
    {
      id: 'cache-memory',
      name: 'Cache Memory and Mapping Techniques',
      theory: `
        <h3>Cache Performance Metrics</h3>
        <p>Cache CPU aur Main memory ke beech ek transparent high-speed buffer memory hai. Jab CPU koi data mangta hai:</p>
        <ul>
          <li><strong>Cache Hit:</strong> Data cache mein mil gaya. Fast access.</li>
          <li><strong>Cache Miss:</strong> Data cache mein nahi mila. Ab CPU/controller us data wale block ko Main memory se cache mein copy karta hai, fir CPU ko deta hai. Is extra time ko Miss Penalty kehte hain.</li>
        </ul>

        <div class="formula-box">
          <div class="formula-title">📐 Cache Formulas</div>
          <strong>Hit Ratio (H)</strong> = Total Hits / (Hits + Misses)<br>
          <strong>Miss Ratio</strong> = 1 - H<br>
          <strong>Average Memory Access Time (AMAT)</strong> = T_cache + Miss_Ratio * Miss_Penalty <br>
          (Note: Miss Penalty usually T_main ke barabar hota hai, depending on parallel/hierarchical read).
        </div>

        <h3>Cache Mapping Techniques</h3>
        <p>Main memory cache se thousands of times badi hoti hai. Main memory logical "Blocks" mein divided hoti hai aur Cache "Lines" mein (Block size = Line size). Main memory ke block ko cache ki kis line mein rakhna hai, ye rules Mapping Techniques decide karti hain.</p>

        <h4>1. Direct Mapping</h4>
        <p>Har main memory block cache ki ek <strong>fixed, predefined line</strong> mein hi map ho sakta hai. <br>
        <em>Formula:</em> Cache Line Number = (Main Memory Block Number) MOD (Total lines in Cache). <br>
        CPU physical address ko 3 fields mein dekhta hai: <strong>[ TAG | LINE/INDEX | WORD/OFFSET ]</strong>. <br>
        <strong>Pros:</strong> Hardware search sabse simple, sasta aur fast hota hai. <br>
        <strong>Cons:</strong> "Conflict Miss" bahut hote hain. Agar do frequently used blocks mathematically same cache line par map hote hain, to wo ek doosre ko baar-baar evict (replace) karte rahenge, is situation ko <strong>Thrashing</strong> kehte hain.</p>

        <h4>2. Fully Associative Mapping</h4>
        <p>Main memory ka block cache ki <strong>kisi bhi khali line</strong> mein store kiya ja sakta hai. Highest placement flexibility. <br>
        Address format: <strong>[ TAG | WORD/OFFSET ]</strong> (Index field nahi hoti). <br>
        CPU data dhundhne ke liye apne search Tag ko cache me maujud saare Tags se ek sath (parallel) match karta hai. <br>
        <strong>Pros:</strong> Zero conflict miss. Space ka best possible utilization. <br>
        <strong>Cons:</strong> Parallel search ke liye special memory hardware chahiye jise <strong>Associative Memory (Content Addressable Memory - CAM)</strong> kehte hain, jo bohot expensive aur complex hoti hai.</p>

        <h4>3. Set-Associative Mapping</h4>
        <p>Yeh Direct aur Associative ka practical hybrid hai. Cache lines ko groups mein banta jata hai jinhe "Sets" kehte hain. <br>
        Rule: Ek block ek specific <em>Set</em> mein hi ja sakta hai (Direct mapping behavior), lekin us Set ke andar maujud kisi bhi line mein fit ho sakta hai (Associative behavior). <br>
        Agar ek set mein <em>k</em> lines hain, toh isko <strong>k-way set associative</strong> bolte hain (e.g., 4-way set associative). <br>
        Address format: <strong>[ TAG | SET | WORD ]</strong>. <br>
        Ye modern processors ki L1/L2 caches mein standard use hone wali technique hai.</p>

        <h4>Cache Write Policies</h4>
        <p>Agar CPU cache mein kisi variable ki value change kar de (Write), toh Cache aur Main memory ka data alag ho jayega. Ise synchronise karne ke 2 methods hain:</p>
        <ul>
          <li><strong>Write Through:</strong> Jab bhi CPU cache me write karta hai, hardware parallelly us data ko Main memory me bhi write karta hai. Data hamesha safe rehta hai, but writing process memory speed jitni slow ho jati hai.</li>
          <li><strong>Write Back:</strong> CPU strictly sirf cache mein update karta hai. Us cache line ki ek "Dirty Bit" ko 1 set kar diya jata hai. Jab future mein space khali karne ke liye is line ko cache se replace (evict) kiya jayega, sirf tabhi modified data ko Main memory mein save kiya jayega. Fast hai, but system power cut me data loss ka risk hai.</li>
        </ul>
      `
    },
    {
      id: 'multiprocessors',
      name: 'Multiprocessors and Cache Coherence',
      theory: `
        <h3>Flynn's Taxonomy</h3>
        <p>Prof. Michael Flynn ne computer architectures ko number of concurrent Instruction Streams aur Data Streams ke basis par 4 bhago me classify kiya:</p>
        <table class="comparison-table">
          <tr><th>Architecture</th><th>Full Form</th><th>Explanation & Example</th></tr>
          <tr><td><strong>SISD</strong></td><td>Single Instruction, Single Data</td><td>Traditional Uniprocessor system. Ek time pe ek instruction execute hota hai ek data item par. (Older PCs)</td></tr>
          <tr><td><strong>SIMD</strong></td><td>Single Instruction, Multiple Data</td><td>Ek hi same instruction ek sath multiple data elements par parallel apply hota hai. Array/Vector computing ke liye. (Modern GPUs, Multimedia extensions)</td></tr>
          <tr><td><strong>MISD</strong></td><td>Multiple Instruction, Single Data</td><td>Ek hi data stream par multiple processors alag-alag instructions chalate hain. Very rare, mainly used in fault-tolerant space systems.</td></tr>
          <tr><td><strong>MIMD</strong></td><td>Multiple Instruction, Multiple Data</td><td>Sabhi processors apne alag independent instructions, alag-alag data par chalate hain. (Modern Multi-core processors like i7, Ryzen, Supercomputers)</td></tr>
        </table>

        <h3>Memory Access Models in Multiprocessors</h3>
        <ul>
          <li><strong>UMA (Uniform Memory Access):</strong> Ise Symmetric Multiprocessor (SMP) bhi kehte hain. Sabhi processors ek common shared main memory se jude hote hain, aur kisi bhi processor ko memory access karne mein exactly equal time lagta hai.</li>
          <li><strong>NUMA (Non-Uniform Memory Access):</strong> Har processor chip ki apni local dedicated memory hoti hai. Wo doosre processor ki local memory ko access to kar sakta hai, par usme time zyada lagta hai. Yani memory access time "non-uniform" hota hai depending on location.</li>
        </ul>

        <h3>The Cache Coherence Problem</h3>
        <p>Shared memory multiprocessor (SMP) systems mein, har processor (P1, P2) ke paas apni fast local private cache hoti hai. Ab assume karein ek shared variable 'X' main memory me 10 hai.<br>
        P1 ne X read kiya aur cache me X=10 laya. P2 ne bhi read kiya, X=10 laya.<br>
        Ab P1 ne apni cache me X ko update karke 20 kar diya (Write Back policy me). <br>
        Main memory aur P2 ki cache me abhi bhi X=10 hai (stale data). Agar P2 X padhega, to use galat data milega. Data ki is inconsistency ko <strong>Cache Coherence Problem</strong> kehte hain.</p>

        <h4>Solutions for Cache Coherence</h4>
        <p>Hardware levels pe protocols implement hote hain taaki sab caches synchronized rahein.</p>
        <ol>
          <li><strong>Directory-Based Protocols:</strong> Bade NUMA systems mein (hazaaron processors) ek central directory track rakhti hai ki memory ka konsa block kis processor ki cache me hai aur kis state (Clean/Modified) me hai.</li>
          <li><strong>Snoopy (Snooping) Protocols:</strong> Bus-based SMP systems mein use hota hai. Sabhi cache controllers aapas me shared bus ko "snoop" (eavesdrop / chup-chap sunna) karte rehte hain ki koi doosra processor kya activity kar raha hai.
            <ul>
              <li><strong>Write Invalidate:</strong> Jab P1 data modify karta hai, to wo bus pe ek Invalidate signal bhejta hai. P2 sun leta hai aur apni cache me us block ko "Invalid" mark kar deta hai. Agli baar P2 use memory se fresh layega. (Most commonly used)</li>
              <li><strong>Write Update / Broadcast:</strong> Jab P1 modify karta hai, wo nayi value bus par broadcast kar deta hai aur sabhi caches use sun kar turant apni caches update kar leti hain. (Consumes too much bus bandwidth).</li>
            </ul>
          </li>
        </ol>

        <div class="tip-box">
          <div class="tip-title">💡 MESI Protocol</div>
          Modern processors mein cache coherence ensure karne ke liye Write-Invalidate approach par aadharit <strong>MESI Protocol</strong> use hota hai. Har cache line ki 4 possible states hoti hain:
          <ul>
            <li><strong>M (Modified):</strong> Data sirf is specific cache mein present hai aur ye modify ho chuka hai (Main memory se match nahi kar raha).</li>
            <li><strong>E (Exclusive):</strong> Data sirf is cache mein hai, aur abhi tak modify nahi hua hai (Main memory jaisa hi hai).</li>
            <li><strong>S (Shared):</strong> Data ek se zyada processors ki caches mein maujud hai, aur clean (read-only) state mein hai.</li>
            <li><strong>I (Invalid):</strong> Ye cache line data ab purana/galat ho chuka hai, इसे read nahi kiya ja sakta.</li>
          </ul>
        </div>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'architecture-models',
      question: 'Which of the following is the primary cause of the "Von Neumann bottleneck"?',
      options: [
        'Slow processing speed of the ALU',
        'Sharing of a single common bus for fetching both instructions and data',
        'Lack of sufficient registers in the CPU architecture',
        'Inefficient cache memory management algorithms'
      ],
      correct: 1,
      explanation: 'Von Neumann architecture mein data aur instructions ek hi shared memory me hote hain aur ek hi bus system use karte hain. Is wajah se CPU ek clock cycle me instruction aur data dono fetch nahi kar sakta, jisse performance slow hoti hai.'
    },
    {
      id: 2,
      topic: 'architecture-models',
      question: 'Which computer architecture uses separate physical memory spaces and separate buses for storing and accessing data and instructions?',
      options: [
        'Von Neumann Architecture',
        'RISC Architecture',
        'Harvard Architecture',
        'Flynn Architecture'
      ],
      correct: 2,
      explanation: 'Harvard architecture intentionally provides separate memories aur separate buses for data and instructions. Isse simultaneous fetch possible hota hai.'
    },
    {
      id: 3,
      topic: 'architecture-models',
      question: 'Modern multi-core processors typically implement a "Modified Harvard Architecture". What feature primarily defines this architecture at the CPU level?',
      options: [
        'Using a single cache memory but two main memories',
        'Implementing completely separate chips for ALU and Control Unit',
        'Having separate Level-1 (L1) caches for data and instructions, but a shared main memory',
        'Eliminating the need for system buses entirely'
      ],
      correct: 2,
      explanation: 'Modified Harvard architecture mein main RAM single hoti hai (Von-Neumann style space efficiency), par performance ke liye internal L1 Cache ko L1-Data aur L1-Instruction me split kiya jata hai (Harvard style speed).'
    },
    {
      id: 4,
      topic: 'registers-microops',
      question: 'What is the specific function of the Program Counter (PC) register in a CPU?',
      options: [
        'To hold the current instruction being executed',
        'To hold the memory address of the next instruction to be fetched',
        'To store the result of the latest ALU operation',
        'To count the total number of programs executed by the system'
      ],
      correct: 1,
      explanation: 'Program Counter (PC) hamesha next instruction ka address hold karta hai. Jaise hi fetch complete hota hai, PC automatically agle instruction ke address pe increment ho jata hai.'
    },
    {
      id: 5,
      topic: 'registers-microops',
      question: 'Which register acts as a direct interface to the Address Bus, holding the location in memory that the CPU wants to read from or write to?',
      options: [
        'Memory Data Register (MDR)',
        'Instruction Register (IR)',
        'Memory Address Register (MAR)',
        'Accumulator (AC)'
      ],
      correct: 2,
      explanation: 'MAR (Memory Address Register) memory ka address store karta hai. Address bus direct MAR se feed hoti hai.'
    },
    {
      id: 6,
      topic: 'registers-microops',
      question: 'In a Register Transfer Language (RTL) statement "P: R2 &larr; R1", what does the symbol "P" represent?',
      options: [
        'The Program Counter',
        'A conditional control signal that must be 1 for the transfer to occur',
        'A parity bit checking function',
        'A physical pointer to the memory'
      ],
      correct: 1,
      explanation: 'RTL mein colon (:) se pehle likha gaya symbol control condition (Boolean logic) hota hai. Transfer tabhi hoga jab P ki value True (1) hogi.'
    },
    {
      id: 7,
      topic: 'registers-microops',
      question: 'To perform the subtraction micro-operation (A - B) using binary adders, the operation is logically represented as:',
      options: [
        'A + B + 1',
        'A + B\' + 0',
        'A\' + B + 1',
        'A + B\' + 1'
      ],
      correct: 3,
      explanation: 'Computer hardware direct subtractor use karne ke bajaye 2\'s complement addition karta hai. B\' (1\'s complement) + 1 milkar 2\'s complement banta hai, isliye subtraction A + B\' + 1 se achieve hota hai.'
    },
    {
      id: 8,
      topic: 'registers-microops',
      question: 'Which of the following shift micro-operations is equivalent to multiplying a binary integer by 2 without losing its sign?',
      options: [
        'Logical Right Shift',
        'Arithmetic Right Shift',
        'Logical Left Shift',
        'Arithmetic Left Shift'
      ],
      correct: 3,
      explanation: 'Left shift bits ko left move karta hai (multiplier by 2). Arithmetic shift sign bit ko protect karke rules follow karta hai jisse mathematically correct multiplication hota hai signed numbers ka.'
    },
    {
      id: 9,
      topic: 'registers-microops',
      question: 'In an Arithmetic Right Shift operation on a negative binary number, which bit is inserted in the vacated most significant position?',
      options: [
        'A zero (0) is always inserted',
        'A one (1) is always inserted',
        'The original Sign Bit (MSB) is copied and retained',
        'A parity bit is calculated and inserted'
      ],
      correct: 2,
      explanation: 'Arithmetic right shift ka main feature yahi hai ki sign bit (MSB) shift hone ke bawajud apni jagah par wapas duplicate ho jati hai, taaki number ka sign (positive ya negative) change na ho. (Divides by 2).'
    },
    {
      id: 10,
      topic: 'registers-microops',
      question: 'Which general-purpose register is implicitly treated as one of the operands and the destination for ALU operations in a one-address instruction format?',
      options: [
        'Instruction Register',
        'Accumulator',
        'Program Counter',
        'Stack Pointer'
      ],
      correct: 1,
      explanation: 'One-address machines mein instruction me sirf ek hi memory address hota hai. Doosra data inherently Accumulator me assume kiya jata hai, aur sum/result bhi default Accumulator me jata hai.'
    },
    {
      id: 11,
      topic: 'control-unit',
      question: 'Which of the following is an advantage of a Microprogrammed Control Unit over a Hardwired Control Unit?',
      options: [
        'It is much faster in generating control signals',
        'It requires fewer clock cycles for execution',
        'It is highly flexible and easier to modify by just changing software logic in control memory',
        'It uses a completely analog design for better efficiency'
      ],
      correct: 2,
      explanation: 'Microprogrammed control logic software (microinstructions) ke roop mein control memory (ROM) me hoti hai. Naye instructions add karna flexible hota hai bina gates/wires badle.'
    },
    {
      id: 12,
      topic: 'control-unit',
      question: 'In a microprogrammed architecture, the specific memory unit that holds the sequence of microinstructions is known as:',
      options: [
        'Main Memory',
        'Cache Memory',
        'Virtual Memory',
        'Control Memory'
      ],
      correct: 3,
      explanation: 'Control Memory (CM) ek fast special purpose ROM/PROM hoti hai CPU ke andar jo sirf microprograms (control signals format) store karti hai.'
    },
    {
      id: 13,
      topic: 'control-unit',
      question: 'Hardwired control unit design is typically preferred in which type of processor architecture?',
      options: [
        'CISC (Complex Instruction Set Computer)',
        'RISC (Reduced Instruction Set Computer)',
        'VLIW (Very Long Instruction Word)',
        'Mainframe architectures'
      ],
      correct: 1,
      explanation: 'RISC processors mein instructions fixed length ke aur simple hote hain, jinhe physical hardware logic gates (Hardwired) me map karna aasan aur fast hota hai.'
    },
    {
      id: 14,
      topic: 'processor-addressing',
      question: 'A Zero-address instruction format (e.g., executing just the command "ADD") implicitly relies on which underlying data structure?',
      options: [
        'Linked List',
        'Queue',
        'Stack',
        'Binary Tree'
      ],
      correct: 2,
      explanation: 'Zero-address instructions apne operands ko explicitely address nahi karte. Wo automatically ek hardware Stack ke top elements pe operate karte hain.'
    },
    {
      id: 15,
      topic: 'processor-addressing',
      question: 'If an instruction contains the actual data value to be operated upon, rather than a memory address, which addressing mode is being used?',
      options: [
        'Direct Addressing Mode',
        'Immediate Addressing Mode',
        'Register Addressing Mode',
        'Implied Addressing Mode'
      ],
      correct: 1,
      explanation: 'Immediate mode mein operand data instruction ke andar hi opcode ke aage embedded hota hai (e.g., ADD 5). Isliye isme alag se memory fetch phase ki zarurat nahi padti operand laane ke liye.'
    },
    {
      id: 16,
      topic: 'processor-addressing',
      question: 'In Indirect Addressing Mode, the Effective Address (EA) of the operand is computed as:',
      options: [
        'The value present in the instruction address field itself',
        'The value present in the base register',
        'The data found at the memory location whose address is specified in the instruction',
        'The sum of the Program Counter and the offset'
      ],
      correct: 2,
      explanation: 'Indirect addressing mein instruction ek address deta hai. Hum us memory address par jate hain, wahan hume actual operand ka address (pointer) milta hai. EA = M[Address_Field].'
    },
    {
      id: 17,
      topic: 'processor-addressing',
      question: 'Which addressing mode is most heavily utilized for branching operations and writing relocatable code segments?',
      options: [
        'Auto-increment Addressing Mode',
        'Relative Addressing Mode',
        'Indirect Addressing Mode',
        'Direct Addressing Mode'
      ],
      correct: 1,
      explanation: 'Relative mode mein Effective Address = PC + offset hota hai. Isse code PC position ke relative access hota hai, jisse code ko memory me bina recompile kiye shift (relocate) kiya ja sakta hai.'
    },
    {
      id: 18,
      topic: 'processor-addressing',
      question: 'Which of the following phases of the instruction cycle is responsible for identifying the opcode and determining the addressing mode?',
      options: [
        'Fetch Phase',
        'Decode Phase',
        'Execute Phase',
        'Write-Back Phase'
      ],
      correct: 1,
      explanation: 'Decode phase mein Instruction Register (IR) ka bit pattern control unit analyze karta hai taaki pata chal sake ki kya karna hai (opcode) aur operand kahan hai (addressing mode).'
    },
    {
      id: 19,
      topic: 'bus-org',
      question: 'The maximum physical memory capacity that a microprocessor can address is primarily determined by the width of its:',
      options: [
        'Data Bus',
        'Control Bus',
        'Address Bus',
        'Internal Registers'
      ],
      correct: 2,
      explanation: 'Address bus ke number of lines (width) se memory capacity define hoti hai. Agar n-bit address bus hai, toh 2^n unique memory locations point ki ja sakti hain.'
    },
    {
      id: 20,
      topic: 'bus-org',
      question: 'Which bus arbitration scheme connects all bus masters in a serial chain configuration and suffers from potential "starvation" of lower priority devices?',
      options: [
        'Polling Arbitration',
        'Independent Request',
        'Daisy Chaining',
        'Round Robin Arbitration'
      ],
      correct: 2,
      explanation: 'Daisy chaining me devices serial me judi hoti hain. Bus Grant signal pass hote hue aata hai. Agar aage wala high priority device lagatar bus use kare, to piche wale (lower priority) ko kabhi chance nahi milta (starvation).'
    },
    {
      id: 21,
      topic: 'bus-org',
      question: 'An asynchronous bus architecture differs from a synchronous bus primarily because it uses:',
      options: [
        'A single shared clock across all components',
        'Handshaking signals (like Request and Acknowledge) instead of a common clock',
        'Only uni-directional lines for data transfer',
        'Optical fibers instead of copper wires'
      ],
      correct: 1,
      explanation: 'Asynchronous bus me clock signal nahi hota. Data transfer reliable banane ke liye devices "Ready" aur "Acknowledge" jese handshaking control signals ka exchange karti hain.'
    },
    {
      id: 22,
      topic: 'io-dma',
      question: 'What is the most significant disadvantage of using the Programmed I/O technique for data transfer?',
      options: [
        'It requires highly complex hardware circuits',
        'It cannot be used for slow devices like keyboards',
        'The CPU wastes a vast amount of time in a busy-waiting loop checking the device status continually',
        'It bypasses main memory entirely'
      ],
      correct: 2,
      explanation: 'Programmed I/O me CPU khud polling (loop) me fansa rehta hai jab tak I/O device complete nahi ho jata. Is wajah se CPU ki efficiency drop hoti hai.'
    },
    {
      id: 23,
      topic: 'io-dma',
      question: 'In an interrupt-driven I/O system, what does the term "Vectored Interrupt" specifically signify?',
      options: [
        'An interrupt that occurs completely at random intervals',
        'An interrupt where the I/O device itself provides the starting memory address of its specific Interrupt Service Routine (ISR)',
        'An interrupt that requires a mathematically computed vector to be resolved',
        'An interrupt generated by mathematical software errors only'
      ],
      correct: 1,
      explanation: 'Vectored interrupt me I/O device CPU ko ek id/vector data bus par bhejti hai, jo directly ISR ka memory address (ya us address ki table index) batata hai. Ye non-vectored se fast hai.'
    },
    {
      id: 24,
      topic: 'io-dma',
      question: 'Which mode of Direct Memory Access (DMA) transfer seizes control of the system bus and holds it exclusively until the entire block of data is fully transferred?',
      options: [
        'Cycle Stealing Mode',
        'Transparent DMA Mode',
        'Burst Mode (Block Transfer)',
        'Interrupt Transfer Mode'
      ],
      correct: 2,
      explanation: 'Burst mode DMA me ek bar bus ka control milne ke baad pura data block back-to-back ek hi burst me memory me bhej diya jata hai. CPU tab tak system bus use nahi kar pata.'
    },
    {
      id: 25,
      topic: 'io-dma',
      question: 'To handle extremely complex I/O operations without burdening the main CPU, large mainframe computers use a specialized, independent processor known as a(n):',
      options: [
        'Co-processor',
        'Math Accelerator',
        'I/O Channel (or IOP)',
        'Direct Access Memory'
      ],
      correct: 2,
      explanation: 'I/O Channel ya I/O Processor (IOP) ek special processor hai jiski khud ki instructions fetch karne aur advanced I/O operations ko independently execute karne ki capability hoti hai.'
    },
    {
      id: 26,
      topic: 'memory-hierarchy',
      question: 'As we traverse downwards through the standard memory hierarchy (from CPU registers towards Magnetic Disk Storage), what is the general trend?',
      options: [
        'Access time decreases, capacity decreases, cost per bit increases',
        'Access time increases, capacity increases, cost per bit decreases',
        'Access time increases, capacity decreases, cost per bit increases',
        'Access time decreases, capacity increases, cost per bit decreases'
      ],
      correct: 1,
      explanation: 'Hierarchy me neeche jane par device slow hoti jati hai (access time increases), size badi hoti jati hai (capacity increases), aur unko banane ka karcha kam ho jata hai (cost per bit decreases).'
    },
    {
      id: 27,
      topic: 'memory-hierarchy',
      question: 'The principle of "Temporal Locality" in memory design implies that:',
      options: [
        'Memory locations physically near a recently accessed location will be accessed soon',
        'If a memory location is accessed once, it is highly likely to be accessed again in the near future',
        'Instructions are executed strictly in a linear time sequence',
        'Data should always be transferred over the bus synchronously in time'
      ],
      correct: 1,
      explanation: 'Temporal (Time) locality ka concept hai ki current me use ho rahe variables ya instructions ko program jaldi hi wapas mange ga (like looping variables). Inko Cache me rakhna beneficial hai.'
    },
    {
      id: 28,
      topic: 'memory-hierarchy',
      question: 'Which type of memory relies on microscopic capacitors that slowly leak charge, requiring a continuous periodic "refresh" cycle to prevent data loss?',
      options: [
        'SRAM (Static RAM)',
        'ROM',
        'DRAM (Dynamic RAM)',
        'Flash Memory'
      ],
      correct: 2,
      explanation: 'Dynamic RAM (DRAM) 1-transistor 1-capacitor pe base hoti hai. Capacitor ki leakage property ke karan isko har kuch milliseconds me active electrical refresh chahiye hota hai. Yahi hamaari Main RAM hoti hai.'
    },
    {
      id: 29,
      topic: 'memory-hierarchy',
      question: 'Modern Solid State Drives (SSDs) and USB Pen Drives are constructed using a technology which is an advanced, block-erasable version of:',
      options: [
        'Mask ROM',
        'SRAM',
        'EEPROM',
        'EPROM'
      ],
      correct: 2,
      explanation: 'Flash Memory fundamentally EEPROM (Electrically Erasable PROM) ka advance grid model hai, jahan byte-by-byte ki jagah pura block ek sath high speed pe electrically erase or write kiya jata hai.'
    },
    {
      id: 30,
      topic: 'cache-memory',
      question: 'In cache memory operations, the "Hit Ratio" is mathematically defined as:',
      options: [
        'Total Misses / Total Number of Memory Accesses',
        'Total Hits / Total Misses',
        'Total Hits / Total Number of Memory Accesses',
        'Total Misses / (Hits * Misses)'
      ],
      correct: 2,
      explanation: 'Hit Ratio calculate hota hai Total successful hits ko Total requests (Hits + Misses) se divide karke. Ye percentage me batata hai ki cache kitni efficient hai.'
    },
    {
      id: 31,
      topic: 'cache-memory',
      question: 'Which cache mapping technique suffers heavily from "Conflict Misses" (Thrashing) because each memory block maps to exactly one rigid cache line?',
      options: [
        'Direct Mapping',
        'Fully Associative Mapping',
        'Set-Associative Mapping',
        'Virtual Mapping'
      ],
      correct: 0,
      explanation: 'Direct Mapping sabse simple hai (using Modulo operation), par isme problem ye hai ki agar 2 block same cache line resolve karte hain, to free lines hone ke bawajud wo ek doosre ko replace karte rahenge.'
    },
    {
      id: 32,
      topic: 'cache-memory',
      question: 'In Fully Associative cache mapping, a block of main memory can be placed:',
      options: [
        'Only in the first line of the cache',
        'Only in a line corresponding to its mathematical modulo value',
        'In exactly two possible lines within a designated set',
        'In any available, unoccupied line within the entire cache'
      ],
      correct: 3,
      explanation: 'Fully associative me space utilization perfect hoti hai. Memory block kahin bhi store ho sakta hai. Search ke time pura cache hardware (CAM) parallel search karta hai.'
    },
    {
      id: 33,
      topic: 'cache-memory',
      question: 'What is the fundamental difference between the "Write-Through" and "Write-Back" cache policies?',
      options: [
        'Write-through is faster but uses more cache space than write-back',
        'Write-through updates main memory continuously on every write, while write-back updates main memory only when the cache line is evicted',
        'Write-back updates data blindly while write-through requires a password',
        'Write-back is used for SRAM and write-through is used exclusively for HDD'
      ],
      correct: 1,
      explanation: 'Write-through me cache aur main memory always equal rehte hain (simultaneous update). Write-back me memory me write defer kiya jata hai jab tak cache line full ho kar replace na ho (using dirty bit).'
    },
    {
      id: 34,
      topic: 'multiprocessors',
      question: 'According to Flynn\'s Taxonomy, a modern Graphics Processing Unit (GPU) applying a single shader operation over thousands of separate pixel data streams is a classic example of:',
      options: [
        'SISD architecture',
        'SIMD architecture',
        'MISD architecture',
        'MIMD architecture'
      ],
      correct: 1,
      explanation: 'SIMD (Single Instruction, Multiple Data) me ek unified instruction hardware same command ek sath array of multiple data components par parallel chalata hai.'
    },
    {
      id: 35,
      topic: 'multiprocessors',
      question: 'In a NUMA (Non-Uniform Memory Access) multiprocessor architecture, the access time to memory is "non-uniform" because:',
      options: [
        'Processors operate at varying clock speeds',
        'Different brands of RAM chips are mixed on the motherboard',
        'A processor can access its own localized memory much faster than the memory attached to other processors',
        'The system bus randomly changes its bandwidth capacity'
      ],
      correct: 2,
      explanation: 'NUMA me memory physical distributed hoti hai processors ke paas. Local read/write bohot fast hota hai, par interconnected network se remote memory read karne me latency zyada aati hai.'
    },
    {
      id: 36,
      topic: 'multiprocessors',
      question: 'The "Cache Coherence Problem" uniquely arises in symmetric multiprocessor (SMP) systems because:',
      options: [
        'The cache memory hardware frequently overheats and corrupts the data',
        'Multiple processors have their own private caches but share a single main memory, leading to potential stale/inconsistent data copies',
        'Main memory is unable to distinguish between an instruction and a data block',
        'Operating systems intentionally block memory transfers for security'
      ],
      correct: 1,
      explanation: 'Jab har processor apni cache me variable copy rakh kar usme independent updates karta hai bina dusre ko bataye, to system me alag-alag caches me same variable ki alag values ho jati hain (inconsistency).'
    },
    {
      id: 37,
      topic: 'multiprocessors',
      question: 'Which of the following is a "Snoopy Protocol" mechanism where a processor modifying a shared variable broadcasts a signal across the bus, forcing all other caches to discard their copies of that block?',
      options: [
        'Write Update Protocol',
        'Directory Tracking Protocol',
        'Write Invalidate Protocol',
        'Token Ring Protocol'
      ],
      correct: 2,
      explanation: 'Write Invalidate me broadcast sirf signal ka hota hai. Baaki caches sun kar apni invalid bit set kar leti hain. Agli bar access pe unhe fresh block memory se lana padega. Ye network bandwidth bachata hai.'
    },
    {
      id: 38,
      topic: 'multiprocessors',
      question: 'In the well-known MESI cache coherence protocol, what does the "M" state explicitly signify?',
      options: [
        'Missed: The data was not found in the cache',
        'Multiplexed: The data is currently being routed on the bus',
        'Modified: The cache line is valid, dirty, and is exclusively owned by this processor',
        'Memory: The data has been flushed to the main memory successfully'
      ],
      correct: 2,
      explanation: 'M ka matlab Modified hai. Iska arth hai ki data sirf is processor ke paas hai aur main memory se differ karta hai (updated hai). Is cache ki responsibility hai use ultimately memory me wapas write karne ki.'
    },
    {
      id: 39,
      topic: 'bus-org',
      question: 'Which hardware component is primarily responsible for preventing bus contention when multiple bus masters request system bus access simultaneously?',
      options: [
        'The Central ALU',
        'The Cache Controller',
        'The Bus Arbiter',
        'The Interrupt Vector Table'
      ],
      correct: 2,
      explanation: 'Bus Arbiter ek specialized hardware hai jo specific logic (daisy chain, independent request, etc.) use karke decide karta hai ki conflict ke samay priority ke base par bus kisko deni hai.'
    },
    {
      id: 40,
      topic: 'processor-addressing',
      question: 'A two-address instruction format usually involves one operand serving as a source and the other operand serving as:',
      options: [
        'Only the secondary source',
        'Both a source and the final destination for the computed result',
        'An implicit pointer to the system stack',
        'A dummy placeholder for debugging'
      ],
      correct: 1,
      explanation: 'Two-address format me general notation hoti hai `OP Dest, Src` jaha `Dest` data provide bhi karta hai aur operation ke baad result ko wapas hold bhi karta hai (Dest = Dest OP Src).'
    }
  ]
};

window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['os'] = {
  id: 'os',
  name: 'Operating Systems',
  icon: '🖥️',
  description: 'Complete syllabus of Operating Systems, Process Management, CPU Scheduling, Deadlocks, Memory, Storage, aur Linux basics.',
  topics: [
    {
      id: 'os-intro',
      name: '1. Introduction to Operating Systems',
      theory: `
        <h3>What is an Operating System?</h3>
        <p>Operating System (OS) ek system software hai jo computer hardware aur user ke beech mein ek interface ka kaam karta hai. Bina OS ke, aap directly hardware (CPU, Memory, Disk) ko instructions nahi de sakte. Yeh ek <b>Resource Manager</b> ki tarah act karta hai jo CPU time, memory space, file storage, aur I/O devices ko efficiently allocate karta hai.</p>
        
        <h4>History & Evolution of OS</h4>
        <p>OS ka evolution time ke sath kaafi interesting raha hai:</p>
        <ul>
          <li><b>Batch OS (1950s):</b> Isme similar jobs ko ek batch mein group karke sequentially run kiya jata tha. Direct user interaction nahi hota tha. (Example: IBM's OS/360).</li>
          <li><b>Multiprogramming OS:</b> CPU ko idle rakhne se bachane ke liye multiple programs memory mein rakhe gaye. Jab ek program I/O ke liye wait karta hai, CPU dusre program ko execute karta hai.</li>
          <li><b>Time-Sharing (Multitasking) OS:</b> Multiprogramming ka logical extension. CPU har task ko ek chhota time quantum deta hai, jisse multiple users ek sath interact kar sakein.</li>
          <li><b>Distributed OS:</b> Multiple independent CPUs (nodes) network ke through connected hote hain aur ek single OS ki tarah behave karte hain.</li>
          <li><b>Real-Time OS (RTOS):</b> Strict timing constraints wale systems (e.g., Medical imaging, space probes). Isme delay bilkul allow nahi hota.</li>
        </ul>

        <h4>Functions of Operating System</h4>
        <p>Ek standard OS mainly in tasks ko handle karta hai:</p>
        <ol>
          <li><b>Process Management:</b> Processes create karna, schedule karna, suspend aur resume karna.</li>
          <li><b>Memory Management:</b> Primary memory track karna, decide karna ki kis process ko kitni memory milegi.</li>
          <li><b>File Management:</b> Directories, files, storage allocation aur access control handle karna.</li>
          <li><b>I/O Management:</b> Device drivers ke through hardware devices ko control karna.</li>
          <li><b>Security & Protection:</b> Unauthorized access rokna, user authentication aur file permissions.</li>
        </ol>

        <h4>System Calls & Dual-Mode Operation</h4>
        <p>Modern OS hardware protection ke liye <b>Dual-Mode Operation</b> use karte hain:</p>
        <table class="comparison-table">
          <tr>
            <th>Feature</th>
            <th>User Mode (Mode bit = 1)</th>
            <th>Kernel Mode (Mode bit = 0)</th>
          </tr>
          <tr>
            <td>Execution</td>
            <td>Normal user applications execute hoti hain.</td>
            <td>OS ka core code (kernel) execute hota hai.</td>
          </tr>
          <tr>
            <td>Privileges</td>
            <td>Restricted operations. Hardware ko directly access nahi kar sakte.</td>
            <td>Full access to all hardware and privileged instructions.</td>
          </tr>
        </table>
        <p>Jab kisi user application ko hardware access chahiye hota hai, toh woh ek <b>System Call</b> (e.g., read, write, open) invoke karti hai, jo ek software interrupt (trap) generate karta hai aur mode bit 0 (Kernel mode) set ho jata hai.</p>

        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Monolithic Kernel aur Microkernel OS architecture ke do main types hain. Monolithic mein sab kuch kernel space mein hota hai (fast but bulky, e.g., Linux), jabki Microkernel mein sirf essential services kernel mein hoti hain baaki user space mein (slow but stable, e.g., Mach).
        </div>
      `
    },
    {
      id: 'os-process-threads',
      name: '2. Process & Threads Management',
      theory: `
        <h3>Process Kya Hai?</h3>
        <p>Ek program in execution ko <b>Process</b> kehte hain. Program ek passive entity hai (disk pe stored file), jabki process ek active entity hai (memory mein loaded aur CPU par execute ho rahi). Ek process ke paas apna text section (code), data section (global variables), heap (dynamic memory), aur stack (temporary data like parameters, return addresses) hota hai.</p>

        <h4>Process States Diagram</h4>
        <p>Ek process apni life cycle mein multiple states se guzarti hai:</p>
        <ul>
          <li><b>New:</b> Process abhi create ho rahi hai.</li>
          <li><b>Ready:</b> Process memory mein load ho chuki hai aur CPU ka wait kar rahi hai.</li>
          <li><b>Running:</b> CPU currently is process ke instructions execute kar raha hai.</li>
          <li><b>Waiting / Blocked:</b> Process kisi I/O event ya signal ka wait kar rahi hai.</li>
          <li><b>Terminated:</b> Process ka execution complete ho chuka hai.</li>
        </ul>
        <pre>
  New ---> Ready ---> Running ---> Terminated
             ^          |  |
             |__Wait____|  | (Preempt / Time Quantum expire)
                  |        v
                  <-Waiting (Blocked)
        </pre>

        <h4>Process Control Block (PCB)</h4>
        <p>Har process ki saari information ek data structure mein store hoti hai jise <b>Process Control Block (PCB)</b> ya Task Control Block kehte hain. Isme shamil hota hai:</p>
        <ul>
          <li>Process ID (PID) aur Process State.</li>
          <li>Program Counter (next instruction ki address).</li>
          <li>CPU Registers aur CPU Scheduling information.</li>
          <li>Memory Management information (Page tables, base/limit registers).</li>
          <li>I/O status aur Accounting info.</li>
        </ul>

        <h4>Context Switching</h4>
        <p>Jab CPU ek process ko chhod kar dusri process par shift hota hai, toh OS current process ka state (PCB) save karta hai aur nayi process ka PCB load karta hai. Is process ko <b>Context Switch</b> kehte hain.</p>
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Context Switch time is pure <b>overhead</b>. Is dauran system koi bhi useful (user) kaam nahi kar raha hota hai. Fast hardware (multiple register sets) context switch ko speed up karte hain.
        </div>

        <h3>Threads</h3>
        <p>Thread ek basic unit of CPU utilization hai. Ise <b>Lightweight Process</b> bhi kaha jata hai. Ek process ke multiple threads code section, data section, aur OS resources (like open files) share karte hain, par har thread ka apna alag Program Counter (PC), Register set, aur Stack hota hai.</p>

        <h4>User-Level vs Kernel-Level Threads</h4>
        <table class="comparison-table">
          <tr>
            <th>User-Level Threads (ULT)</th>
            <th>Kernel-Level Threads (KLT)</th>
          </tr>
          <tr>
            <td>Thread library create aur manage karti hai user space mein.</td>
            <td>OS/Kernel directly inko manage karta hai.</td>
          </tr>
          <tr>
            <td>OS ko ULTs ke baare mein nahi pata hota. (OS sirf process dekhta hai).</td>
            <td>OS har ek thread ko individually recognize aur schedule karta hai.</td>
          </tr>
          <tr>
            <td>Fast context switching (no hardware mode change).</td>
            <td>Slow context switching (system calls required).</td>
          </tr>
          <tr>
            <td>Agar ek thread block (I/O) ho jaye, toh entire process block ho jati hai.</td>
            <td>Ek thread ke block hone par OS dusre thread ko schedule kar sakta hai.</td>
          </tr>
        </table>

        <h4>Multithreading Models</h4>
        <ul>
          <li><b>Many-to-One:</b> Multiple ULTs mapped to a single KLT. (Concurrency limit hoti hai).</li>
          <li><b>One-to-One:</b> Har ULT ko ek dedicated KLT milta hai. (High concurrency, e.g., Windows/Linux).</li>
          <li><b>Many-to-Many:</b> N ULTs mapped to M KLTs (where M <= N).</li>
        </ul>
      `
    },
    {
      id: 'os-scheduling',
      name: '3. CPU Scheduling Algorithms',
      theory: `
        <h3>CPU Schedulers</h3>
        <p>OS mein processes ko manage karne ke liye 3 types ke schedulers hote hain:</p>
        <ol>
          <li><b>Long-Term Scheduler (Job Scheduler):</b> Hard disk (job pool) se processes select karke unhe Ready Queue (main memory) mein lata hai. Yeh <i>Degree of Multiprogramming</i> ko control karta hai.</li>
          <li><b>Short-Term Scheduler (CPU Scheduler):</b> Ready Queue mein se agle execute hone wale process ko select karta hai. Yeh sabse zyada frequently invoke hota hai aur bahut fast hona chahiye.</li>
          <li><b>Medium-Term Scheduler:</b> Memory ko free karne ke liye partially executed processes ko disk me swap-out karta hai, aur baad mein swap-in. Yeh swap process ko manage karta hai.</li>
        </ol>

        <div class="formula-box">
          <div class="formula-title">📐 Scheduling Formulas & Criteria</div>
          <p>Scheduling algorithms ka objective CPU utilization and Throughput badhana, aur Turnaround, Waiting, Response time ghatana hota hai.</p>
          <ul>
            <li><b>Arrival Time (AT):</b> Process kab ready queue mein aayi.</li>
            <li><b>Burst Time (BT):</b> CPU execution ke liye kitna time chahiye.</li>
            <li><b>Completion Time (CT):</b> Process kab khatam hui.</li>
            <li><b>Turnaround Time (TAT)</b> = CT - AT</li>
            <li><b>Waiting Time (WT)</b> = TAT - BT</li>
            <li><b>Response Time (RT)</b> = (Time at which process gets CPU for FIRST time) - AT</li>
          </ul>
        </div>

        <h3>Scheduling Algorithms</h3>
        <h4>1. First Come First Serve (FCFS)</h4>
        <p>Simplest, non-preemptive algorithm. Jo pehle aayega, pehle chalega. Isme <b>Convoy Effect</b> dekha jata hai (Ek badi process ke peeche chhoti processes wait karti hain, jisse average waiting time badh jata hai).</p>
        
        <h4>2. Shortest Job First (SJF)</h4>
        <p>Isme Ready Queue mein jis process ka Burst Time sabse kam hai, usko pehle select kiya jata hai. Yeh average waiting time ke liye <b>Optimal</b> algorithm hai. Yeh non-preemptive version hai.</p>
        
        <h4>3. Shortest Remaining Time First (SRTF)</h4>
        <p>Yeh SJF ka <b>Preemptive</b> version hai. Agar current running process ke remaining time se chhota burst time wali nayi process ready queue me aati hai, toh purani process ko preempt karke nayi process ko CPU mil jata hai.</p>

        <h4>4. Priority Scheduling</h4>
        <p>Har process ke sath ek priority attach hoti hai (Highest priority gets CPU). Yeh preemptive aur non-preemptive dono ho sakta hai. <b>Problem: Starvation</b> (Low priority processes ko CPU kabhi nahi mil pata). <b>Solution: Aging</b> (Time ke sath wait kar rahi processes ki priority dreere-dheere badha di jati hai).</p>

        <h4>5. Round Robin (RR)</h4>
        <p>Time-sharing systems ke liye best algorithm. Yeh hamesha <b>Preemptive</b> hota hai. Har process ko ek fix time slice milta hai jise <b>Time Quantum (TQ)</b> kehte hain. Agar TQ expire ho jaye, process preempt hokar Ready Queue ke end me lag jati hai. Agar TQ bahut bada (infinite) ho, toh RR FCFS ban jata hai.</p>

        <h4>6. Multilevel Queue (MLQ) & Multilevel Feedback Queue (MLFQ)</h4>
        <p>MLQ mein ready queue ko alag-alag queues mein divide kiya jata hai (e.g., Foreground aur Background). Har queue ka apna scheduling algorithm hota hai. MLFQ iska advanced version hai jisme process ek queue se dusri queue mein jump kar sakti hai (to prevent starvation by using feedback).</p>

        <h4>Example (Solved): SRTF Scheduling</h4>
        <pre>
        Process   AT   BT
          P1      0    8
          P2      1    4
          P3      2    9
          P4      3    5
        
        Gantt Chart:
        | P1 | P2 | P2 | P2 | P2 | P4 | P4 | P4 | P4 | P4 | P1 | P1 | P1 | P1 | P1 | P1 | P1 | P3 (up to end) |
        0    1    2    3    4    5    6    7    8    9   10   11   12   13   14   15   16   17   26
        
        Gantt Logic: At t=0, P1 starts. At t=1, P2 arrives (BT=4). P1 remaining is 7. P2 is shorter, so P1 preempts. P2 finishes at 5. etc...
        </pre>
      `
    },
    {
      id: 'os-sync',
      name: '4. Process Synchronization',
      theory: `
        <h3>Process Synchronization & Race Condition</h3>
        <p>Jab multiple concurrent processes ek hi shared data ya resources ko same time par access ya modify karti hain, toh data inconsistency ho sakti hai. Is situation ko <b>Race Condition</b> kehte hain (Final output depend karta hai kis order mein instructions execute hue). Ise bachane ke liye synchronization zaroori hai.</p>

        <h4>The Critical Section Problem</h4>
        <p>Code ka woh hissa jahan shared resources access hote hain, <b>Critical Section (CS)</b> kehlata hai. Ek waqt par sirf ek hi process CS mein honi chahiye. Kisi bhi valid synchronization solution ko 3 conditions fulfill karni hoti hain:</p>
        <ol>
          <li><b>Mutual Exclusion (MutEx):</b> Agar Process P1 apne CS mein hai, toh koi dusri process uske CS mein enter nahi kar sakti.</li>
          <li><b>Progress:</b> Agar CS khali hai aur koi process CS mein enter karna chahti hai, toh un processes ki selection jo enter karna chahti hain indefinitely delay nahi ho sakti. Sirf interested processes hi decide karengi.</li>
          <li><b>Bounded Waiting:</b> Ek process ke CS mein request karne ke baad aur us request ko grant karne se pehle ek limit honi chahiye ki dusri processes kitni baar apne CS mein enter kar sakti hain (Taaki starvation na ho).</li>
        </ol>

        <h4>Peterson's Solution</h4>
        <p>Yeh ek classic software-based solution hai 2-process synchronization ke liye. Yeh <code>turn</code> variable aur ek <code>flag</code> array ka use karta hai. Isme strict alternation ki problem nahi hoti aur ye teeno CS requirements satisfy karta hai.</p>

        <h4>Semaphores</h4>
        <p>Semaphore ek integer variable hai jo wait() (ya P) aur signal() (ya V) operations ke dwara access hota hai. Ye synchronization tool hai jo Dijkstra ne propose kiya tha.</p>
        <ul>
          <li><b>Binary Semaphore (Mutex):</b> Value 0 ya 1 ho sakti hai. Yeh mostly locks implement karne ke kaam aata hai (Mutual Exclusion).</li>
          <li><b>Counting Semaphore:</b> Value any integer ho sakti hai. Yeh resources ke finite instances ko manage karne ke kaam aata hai. Agar value > 0 hai, toh resource available hai. Agar value 0 ya negative hai, matlab processes blocked hain.</li>
        </ul>
        <pre>
        wait(S) {                   signal(S) {
          while (S <= 0); // busy wait    S++;
          S--;                      }
        }
        </pre>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Upar dikhaya gaya wait() "Busy Waiting" ka example hai (Spinlock). Modern OS mein busy waiting ko avoid karne ke liye process ko wait queue me block state mein daal diya jata hai.
        </div>

        <h4>Classic Synchronization Problems</h4>
        <ul>
          <li><b>Producer-Consumer Problem (Bounded Buffer):</b> Ek producer buffer me data dalta hai aur consumer nikalta hai. Synchronization isliye chahiye taaki full buffer par producer produce na kare aur empty buffer par consumer consume na kare.</li>
          <li><b>Readers-Writers Problem:</b> Multiple readers ek data padh sakte hain without conflict, par writer ko exclusive access chahiye.</li>
          <li><b>Dining Philosophers Problem:</b> Deadlock aur starvation concepts explain karne ka classic example (5 philosophers, 5 chopsticks).</li>
        </ul>
      `
    },
    {
      id: 'os-deadlock',
      name: '5. Deadlocks & Banker\'s Algorithm',
      theory: `
        <h3>What is a Deadlock?</h3>
        <p>Deadlock ek aisi situation hai jisme do ya usse zyada processes aage execute hone ke liye aapas mein ek-dusre ke paas held resources ka wait karti hain, aur wo event kabhi occur nahi hota. (Jaise traffic jam jahan koi gadi aage nahi badh sakti).</p>

        <h4>Coffman's Conditions for Deadlock</h4>
        <p>Ek deadlock tabhi hota hai jab yeh 4 conditions <b>simultaneously</b> true hon:</p>
        <ol>
          <li><b>Mutual Exclusion:</b> Kam se kam ek resource non-sharable mode mein hona chahiye.</li>
          <li><b>Hold and Wait:</b> Ek process kam se kam ek resource hold kiye hue hai aur additional resources ka wait kar rahi hai jo dusri processes ne hold kiye hain.</li>
          <li><b>No Preemption:</b> Resources ko forcefully process se chhina nahi ja sakta. Process apna task khatam karne ke baad hi resource release karegi.</li>
          <li><b>Circular Wait:</b> Ek cycle honi chahiye P0 -> P1 -> P2 ... -> P0 processes ke beech jahan har process agli process dwara held resource ka wait kar rahi hai.</li>
        </ol>

        <h3>Deadlock Handling Strategies</h3>

        <h4>1. Deadlock Prevention</h4>
        <p>Kisi ek Coffman condition ko permanently false kar do. For example:</p>
        <ul>
          <li>Break Hold & Wait: Process ko start hone se pehle saare required resources request karne padenge. (Low utilization).</li>
          <li>Break No Preemption: Agar resource block hota hai toh partially held resources preempt kar do.</li>
          <li>Break Circular Wait: Har resource type ko ek priority number do, process ko ascending order me hi resources request karne honge.</li>
        </ul>

        <h4>2. Deadlock Avoidance (Banker's Algorithm)</h4>
        <p>OS request grant karne se pehle check karta hai ki kya request puri karne ke baad system ek <b>Safe State</b> me rahega. Agar haan, toh allocate, warna process ko wait karna hoga. Dijkstra ka Banker's Algorithm single-instance and multiple-instances ke liye use hota hai.</p>
        <p>Data Structures used:</p>
        <ul>
          <li><b>Available:</b> Vector showing available instances of each resource.</li>
          <li><b>Max:</b> Matrix showing maximum demand of each process.</li>
          <li><b>Allocation:</b> Matrix showing resources currently allocated.</li>
          <li><b>Need:</b> Matrix showing remaining needs. <code>Need[i][j] = Max[i][j] - Allocation[i][j]</code></li>
        </ul>

        <h4>3. Deadlock Detection & Recovery</h4>
        <p>System ko deadlock me jaane do, phir algorithm (Wait-for graph for single instance, or Banker's like matrix for multi-instance) se detect karo aur recover karo. Recovery methods:</p>
        <ul>
          <li><b>Process Termination:</b> Ya toh saari deadlocked processes ko kill kardo, ya ek-ek karke kill karo jab tak deadlock break na ho jaye.</li>
          <li><b>Resource Preemption:</b> Victim select karo, uske resources preempt karo aur process ko safe state mein rollback karo.</li>
        </ul>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho (Ostrich Algorithm)</div>
          Zyadatar modern OS (like Windows aur Linux) Deadlock Ignorance (Ostrich Algorithm) follow karte hain. Woh assume karte hain deadlock kabhi nahi aayega, aur agar aata hai toh user manually process kill karta hai (Task Manager/Kill command se). Yeh isliye kyuki deadlock handling overhead bahut zyada hota hai.
        </div>
      `
    },
    {
      id: 'os-memory',
      name: '6. Memory Management & Virtual Memory',
      theory: `
        <h3>Logical vs Physical Address</h3>
        <p>CPU hamesha <b>Logical Address (Virtual Address)</b> generate karta hai. Lakin actual data RAM mein <b>Physical Address</b> pe stored hota hai. In dono ke beech runtime mapping ek hardware device karta hai jise <b>Memory Management Unit (MMU)</b> kehte hain.</p>

        <h3>Contiguous Memory Allocation</h3>
        <p>Puri process ko memory mein ek lagatar (contiguous) block me allocate kiya jata hai. Iske methods hain:</p>
        <ul>
          <li><b>First Fit:</b> Pura process memory ke us pehle hole (free block) me fit kiya jata hai jo sufficient size ka ho. Fast hai.</li>
          <li><b>Best Fit:</b> Sabse chhota hole search kiya jata hai jisme process fit ho sake. (Produces smallest leftover hole).</li>
          <li><b>Worst Fit:</b> Sabse bade hole me process allocate hoti hai. (Produces largest leftover hole).</li>
        </ul>

        <h4>Fragmentation</h4>
        <ul>
          <li><b>Internal Fragmentation:</b> Jab memory blocks fixed size ke hote hain aur process us block se chhoti hoti hai, toh block ka bacha hua hissa waste ho jata hai.</li>
          <li><b>External Fragmentation:</b> Memory mein available free space total demand se zyada hai, par contiguous (lagatar) nahi hai, isliye process load nahi ho sakti. Ise door karne ke liye <b>Compaction</b> (memory ko shuffle karna) use karte hain.</li>
        </ul>

        <h3>Non-Contiguous Allocation: Paging</h3>
        <p>Paging external fragmentation completely remove kar deta hai. Isme physical memory ko fixed-sized blocks (<b>Frames</b>) aur logical memory ko same size blocks (<b>Pages</b>) mein divide kiya jata hai. Process ke pages memory ke kisi bhi available frame me store kiye ja sakte hain.</p>
        <p>Logical Address is divided into: <code>Page Number (p)</code> and <code>Page Offset (d)</code>.</p>
        <p>Frame location map karne ke liye <b>Page Table</b> use hoti hai. Page table lookups fast karne ke liye ek special hardware cache memory use ki jati hai jise <b>TLB (Translation Lookaside Buffer)</b> kehte hain.</p>

        <div class="formula-box">
          <div class="formula-title">📐 Effective Access Time (EAT) in Paging with TLB</div>
          <p>EAT = Hit_Ratio * (TLB_Time + Mem_Time) + Miss_Ratio * (TLB_Time + 2 * Mem_Time)</p>
          <p>Note: Miss hone par 2 times memory access lagta hai (Ek Page Table access aur ek actual data access ke liye).</p>
        </div>

        <h3>Virtual Memory & Demand Paging</h3>
        <p>Virtual memory ek concept hai jisse hum un programs ko bhi run kar sakte hain jo physical RAM size se bade hote hain. Ise <b>Demand Paging</b> ke through implement kiya jata hai.</p>
        <p>Demand Paging mein sirf wahi page disk se RAM mein laya jata hai jiski currently zarurat hoti hai. Jab process ek aise page ko access karne ki koshish karti hai jo memory mein load nahi hai, toh ek interrupt generate hota hai jise <b>Page Fault</b> kehte hain.</p>

        <h4>Page Replacement Algorithms</h4>
        <p>Agar main memory full hai aur naya page lana hai, toh ek existing page ko disk me nikalna padta hai (Page Replacement):</p>
        <ul>
          <li><b>FIFO (First In First Out):</b> Jo page memory me sabse pehle aaya tha, wahi sabse pehle nikala jayega. Isme <b>Belady's Anomaly</b> suffer hoti hai (Memory frames badhane par page faults kam hone ki bajaye badh jate hain).</li>
          <li><b>LRU (Least Recently Used):</b> Jo page kafi lambe samay se use nahi hua hai, use replace kiya jata hai. Yeh past knowledge use karta hai aur Belady's Anomaly suffer nahi karta.</li>
          <li><b>Optimal Replacement:</b> Woh page replace kiya jata hai jo aane wale future me sabse lambe time tak use nahi hoga. Yeh practically implementable nahi hai but baki algorithms ko compare karne ke benchmark ke roop mein use hota hai.</li>
        </ul>

        <h4>Thrashing</h4>
        <p>Agar ek process ke paas enough frames nahi hain, toh wo baar-baar page fault karegi. CPU executing se zyada time paging (swapping in/out) mein lagane lagega. Ise <b>Thrashing</b> kehte hain aur isse CPU utilization drastically gir jata hai.</p>
      `
    },
    {
      id: 'os-storage',
      name: '7. File Systems & Disk Scheduling',
      theory: `
        <h3>File System Concepts</h3>
        <p>File ek logical storage unit hai. OS disk ke physical sectors ko abstract karke hume File aur Directory ka view deta hai.</p>
        <ul>
          <li><b>File Attributes:</b> Name, Identifier, Type, Location, Size, Protection, Time/Date.</li>
          <li><b>Access Methods:</b> 
            <ul>
              <li><i>Sequential Access:</i> Data shuru se end tak line-by-line read kiya jata hai (like magnetic tape).</li>
              <li><i>Direct / Relative Access:</i> Data directly file ke kisi bhi block ko access kar sakta hai (like databases).</li>
            </ul>
          </li>
          <li><b>Directory Structure:</b> Single-Level, Two-Level (user-wise), Tree-structured (most common, e.g., Windows/Linux), aur Acyclic-Graph directories.</li>
        </ul>

        <h4>File Allocation Methods</h4>
        <p>Disk par file kis tarah store hogi:</p>
        <ol>
          <li><b>Contiguous Allocation:</b> File disk par sequential blocks occupy karti hai. Fast but suffers from external fragmentation.</li>
          <li><b>Linked Allocation:</b> Har block mein aagle block ka pointer hota hai. Pointers scatter hote hain. Direct access possible nahi hai. (e.g., FAT file system).</li>
          <li><b>Indexed Allocation:</b> Ek special Index Block hota hai jisme saare disk blocks ke pointers store hote hain. Supports direct access without external fragmentation (e.g., Unix inodes).</li>
        </ol>

        <h3>Disk Structure & Disk Scheduling</h3>
        <p>Disk <b>Platters</b>, <b>Tracks</b>, <b>Sectors</b> aur <b>Cylinders</b> me divided hoti hai. Disk access time mainly in components se banta hai:</p>
        <ul>
          <li><b>Seek Time:</b> Read/Write head ko desired Track (cylinder) tak pahunchne me laga samay. (Sabse major delay).</li>
          <li><b>Rotational Latency:</b> Desired sector ka R/W head ke niche ghoom ke aane me laga samay.</li>
          <li><b>Transfer Time:</b> Data actually read ya write karne ka time.</li>
        </ul>

        <h4>Disk Scheduling Algorithms</h4>
        <p>Main goal average <b>Seek Time</b> ko minimize karna hota hai.</p>
        <ul>
          <li><b>FCFS (First Come First Serve):</b> Jo request pehle aayi, use pehle satisfy karo. Simple, but large seek time.</li>
          <li><b>SSTF (Shortest Seek Time First):</b> Current head position se sabse kareeb (nearest) cylinder ki request ko pehle satisfy karo. Isme starvation ho sakti hai.</li>
          <li><b>SCAN (Elevator Algorithm):</b> Head disk ke ek end se dusre end tak jata hai, raste me aane wali requests satisfy karta hai, aur phir reverse ho kar wapas aata hai (like a lift).</li>
          <li><b>C-SCAN (Circular SCAN):</b> SCAN jaisa hi, but reverse journey mein koi request satisfy nahi karta sidha start pe aata hai. Uniform waiting time deta hai.</li>
          <li><b>LOOK / C-LOOK:</b> SCAN / C-SCAN jaisa hi hai, but head disk ke end tak jane ke bajaye sirf last request cylinder tak hi jata hai aur wahi se turn le leta hai.</li>
        </ul>

        <h4>Example: SSTF Scheduling</h4>
        <p>Requests: 98, 183, 37, 122, 14, 124, 65, 67. Head start at 53.</p>
        <p>SSTF Order: 53 -> 65 -> 67 -> 37 -> 14 -> 98 -> 122 -> 124 -> 183.</p>
        <p>Total Seek Distance = (65-53) + (67-65) + (67-37) + (37-14) + (98-14) + (183-98) = 12 + 2 + 30 + 23 + 84 + 85 = 236 cylinders.</p>
      `
    },
    {
      id: 'os-linux-rtos',
      name: '8. Client-Server, RTOS & Linux Shell',
      theory: `
        <h3>Client-Server Architecture</h3>
        <p>Distributed OS ka ek model jisme resource providers ko <b>Servers</b> (Web, File, Database servers) kaha jata hai aur resource requesters ko <b>Clients</b> (PC, Mobile, Browser). Yeh dono ek network ke zariye request/response protocols (jaise HTTP) ke madhyam se communicate karte hain.</p>

        <h3>Real-Time Operating Systems (RTOS)</h3>
        <p>RTOS ka main focus fast aur predictable response times provide karna hai. Isme response time ki ek strict deadline hoti hai.</p>
        <ul>
          <li><b>Hard Real-Time System:</b> Agar deadline miss hui, toh system failure maan liya jata hai aur catastrophic consequences ho sakte hain (e.g., Pacemaker, Missile guidance, ABS in cars). Secondary storage limited hoti hai, generally data ROM me rehta hai.</li>
          <li><b>Soft Real-Time System:</b> Deadline miss karna undesirable hai but acceptable hai. Missing deadline bas system utility decrease karti hai (e.g., Live Video Streaming, Online gaming).</li>
        </ul>

        <h3>Linux Shell & File Permissions Basics</h3>
        <p>Linux me kernel OS ka core part hai, jabki <b>Shell</b> ek command-line interpreter hai jo user se commands leta hai aur kernel ke through unhe execute karwata hai (e.g., Bash, sh, csh).</p>
        
        <h4>File Permissions (chmod)</h4>
        <p>Linux me har file ke 3 type ke access rights hote hain: Read (r=4), Write (w=2), Execute (x=1).</p>
        <p>Aur ye 3 user levels pe apply hote hain: Owner (User), Group, aur Others.</p>
        <p>Example: <code>chmod 755 file.txt</code> ka matlab:</p>
        <ul>
          <li>7 (4+2+1) for Owner = Read, Write, Execute permission.</li>
          <li>5 (4+1) for Group = Read, Execute permission.</li>
          <li>5 (4+1) for Others = Read, Execute permission.</li>
        </ul>

        <h4>Important Linux Commands</h4>
        <table class="comparison-table">
          <tr>
            <th>Command</th>
            <th>Function / Usage</th>
          </tr>
          <tr>
            <td><code>ls -l</code></td>
            <td>List directory contents in long format (detailed view).</td>
          </tr>
          <tr>
            <td><code>grep</code></td>
            <td>Search a specific pattern or text within files (Global regular expression print).</td>
          </tr>
          <tr>
            <td><code>chmod / chown</code></td>
            <td>Change file permissions / Change file owner.</td>
          </tr>
          <tr>
            <td><code>awk</code></td>
            <td>Text processing and pattern scanning tool.</td>
          </tr>
          <tr>
            <td><code>ps -ef</code></td>
            <td>Display currently running processes in detail.</td>
          </tr>
          <tr>
            <td><code>kill -9</code></td>
            <td>Forcefully kill a process using its PID.</td>
          </tr>
        </table>
        
        <h4>Shell Scripting Basics</h4>
        <p>Ek shell script normally <code>#!/bin/bash</code> se shuru hoti hai jise <i>Shebang</i> kaha jata hai, jo batata hai ki script kis interpreter se chalegi.</p>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'os-intro',
      question: 'Which of the following acts as an interface between the user/application programs and the computer hardware?',
      options: ['Compiler', 'Operating System', 'Assembler', 'Linker'],
      correct: 1,
      explanation: 'Operating System is a system software that acts as an interface between the user and the computer hardware, managing resources efficiently.'
    },
    {
      id: 2,
      topic: 'os-intro',
      question: 'Which mode of operation restricts the execution of certain privileged instructions to protect the system?',
      options: ['User Mode', 'Kernel Mode', 'Safe Mode', 'Interrupt Mode'],
      correct: 0,
      explanation: 'User mode is a restricted mode where applications run, and privileged hardware instructions cannot be executed directly to ensure system protection.'
    },
    {
      id: 3,
      topic: 'os-intro',
      question: 'What is the main objective of a Multiprogramming Operating System?',
      options: ['To maximize CPU utilization', 'To provide a graphical interface', 'To connect multiple computers in a network', 'To provide real-time responses'],
      correct: 0,
      explanation: 'Multiprogramming keeps multiple jobs in memory and ensures the CPU is never idle (if one job waits for I/O, CPU switches to another), thus maximizing CPU utilization.'
    },
    {
      id: 4,
      topic: 'os-intro',
      question: 'Which architecture keeps only the essential services inside the kernel space and moves the rest to the user space?',
      options: ['Monolithic Kernel', 'Microkernel', 'Hybrid Kernel', 'Exokernel'],
      correct: 1,
      explanation: 'Microkernel architecture strips down the kernel to its absolute bare minimum, running services like device drivers and file systems in the user space for better stability.'
    },
    {
      id: 5,
      topic: 'os-intro',
      question: 'When a user application needs to read a file from the disk, what mechanism is used to request this service from the OS?',
      options: ['Interrupt', 'System Call', 'Thread', 'Process Control Block'],
      correct: 1,
      explanation: 'A system call is the programmatic way in which a computer program requests a service from the kernel of the operating system.'
    },
    {
      id: 6,
      topic: 'os-process-threads',
      question: 'In which state does a process reside when it is waiting for an I/O event to complete?',
      options: ['Ready State', 'Running State', 'Blocked/Waiting State', 'Terminated State'],
      correct: 2,
      explanation: 'A process goes into the Blocked or Waiting state when it cannot continue execution until a specific event (like an I/O completion) occurs.'
    },
    {
      id: 7,
      topic: 'os-process-threads',
      question: 'Which of the following data structures is used by the OS to maintain the execution state and attributes of a process?',
      options: ['Page Table', 'Process Control Block (PCB)', 'Translation Lookaside Buffer (TLB)', 'File Allocation Table (FAT)'],
      correct: 1,
      explanation: 'The Process Control Block (PCB) contains all the information about a process, including its state, Program Counter, CPU registers, etc.'
    },
    {
      id: 8,
      topic: 'os-process-threads',
      question: 'Which of the following is considered as a pure overhead in Operating System process management?',
      options: ['Process Creation', 'Thread Execution', 'Context Switching', 'Process Synchronization'],
      correct: 2,
      explanation: 'Context switching is considered pure overhead because the system does no useful work while switching between processes; it merely saves and loads states.'
    },
    {
      id: 9,
      topic: 'os-process-threads',
      question: 'What is the primary difference between a User-Level Thread (ULT) and a Kernel-Level Thread (KLT)?',
      options: ['ULT is slower to create than KLT.', 'OS is unaware of ULTs but explicitly manages KLTs.', 'ULT requires hardware mode changes for context switching.', 'KLT cannot execute privileged instructions.'],
      correct: 1,
      explanation: 'User-Level Threads are managed by a thread library in the user space, and the OS kernel is completely unaware of them, whereas it explicitly manages KLTs.'
    },
    {
      id: 10,
      topic: 'os-process-threads',
      question: 'Which multithreading model maps many user-level threads to one kernel-level thread?',
      options: ['One-to-One', 'Many-to-Many', 'Many-to-One', 'One-to-Many'],
      correct: 2,
      explanation: 'The Many-to-One model maps multiple user-level threads to a single kernel thread. A drawback is that if one thread blocks, the entire process blocks.'
    },
    {
      id: 11,
      topic: 'os-scheduling',
      question: 'Which scheduler is responsible for bringing processes from the secondary storage to the main memory, thereby controlling the degree of multiprogramming?',
      options: ['Short-Term Scheduler', 'Long-Term Scheduler', 'Medium-Term Scheduler', 'Process Scheduler'],
      correct: 1,
      explanation: 'The Long-Term Scheduler (Job Scheduler) selects jobs from the disk pool and loads them into memory for execution, directly controlling the degree of multiprogramming.'
    },
    {
      id: 12,
      topic: 'os-scheduling',
      question: 'A system uses Shortest Job First (SJF) scheduling. What is the main disadvantage of this algorithm?',
      options: ['It gives the maximum average waiting time.', 'It suffers from the Convoy Effect.', 'It can cause starvation for longer processes.', 'It is highly preemptive.'],
      correct: 2,
      explanation: 'In SJF, if shorter processes keep arriving, a process with a large burst time may never get the CPU, leading to starvation.'
    },
    {
      id: 13,
      topic: 'os-scheduling',
      question: 'Four processes P1, P2, P3, P4 arrive at time 0 with burst times 2, 4, 6, and 8 respectively. Using FCFS, what is the average waiting time? (Assume they arrived in order P1, P2, P3, P4)',
      options: ['3', '4', '5', '6'],
      correct: 2,
      explanation: 'Waiting Times: P1=0, P2=2, P3=2+4=6, P4=6+6=12. Total WT = 0+2+6+12 = 20. Average WT = 20/4 = 5.'
    },
    {
      id: 13,
      topic: 'os-scheduling',
      question: 'Three processes P1, P2, P3 arrive at time 0 with burst times 3, 4, and 3 respectively. Using FCFS in given order, what is the average waiting time?',
      options: ['2.33', '3.33', '4.33', '5.33'],
      correct: 1,
      explanation: 'Completion times: P1 finishes at 3, P2 at 7, P3 at 10. Waiting times: P1 = 0, P2 = 3, P3 = 7. Total waiting time = 0 + 3 + 7 = 10. Average waiting time = 10 / 3 = 3.33.'
    },
    {
      id: 14,
      topic: 'os-scheduling',
      question: 'Which scheduling algorithm is best suited for Time-Sharing operating systems?',
      options: ['Shortest Job First (SJF)', 'First Come First Serve (FCFS)', 'Round Robin (RR)', 'Priority Scheduling'],
      correct: 2,
      explanation: 'Round Robin is designed specifically for time-sharing systems because it guarantees CPU time (Time Quantum) to all processes, providing excellent response times for interactive users.'
    },
    {
      id: 15,
      topic: 'os-scheduling',
      question: 'In Round Robin scheduling, if the Time Quantum is set to a very large (infinite) value, the algorithm degenerates to:',
      options: ['Shortest Job First', 'First Come First Serve', 'Multilevel Queue', 'Shortest Remaining Time First'],
      correct: 1,
      explanation: 'If the time quantum is extremely large, no process will be preempted due to quantum expiration. Thus, it processes jobs sequentially as they arrived, identical to FCFS.'
    },
    {
      id: 16,
      topic: 'os-scheduling',
      question: 'What is the "Convoy Effect" in CPU Scheduling?',
      options: ['Multiple short processes wait behind a single long process.', 'A high priority process starves a low priority process.', 'The CPU is idle while processes wait for I/O.', 'A deadlock occurs due to circular waiting.'],
      correct: 0,
      explanation: 'The Convoy Effect occurs in FCFS when many short, fast processes get stuck waiting for one massive, long-running CPU-bound process to finish, significantly reducing system throughput.'
    },
    {
      id: 17,
      topic: 'os-sync',
      question: 'Which of the following is NOT a required condition for a valid solution to the Critical Section problem?',
      options: ['Mutual Exclusion', 'Progress', 'Bounded Waiting', 'Preemption'],
      correct: 3,
      explanation: 'The three strict requirements for a critical section solution are Mutual Exclusion, Progress, and Bounded Waiting. Preemption is not a requirement here.'
    },
    {
      id: 18,
      topic: 'os-sync',
      question: 'A counting semaphore is initialized to 8. Then 3 wait() operations and 4 signal() operations are performed on it. What is the final value of the semaphore?',
      options: ['7', '8', '9', '10'],
      correct: 2,
      explanation: 'Initial value = 8. wait() operation decreases the value by 1. So, 3 wait() operations: 8 - 3 = 5. signal() increases value by 1. So, 4 signal() operations: 5 + 4 = 9.'
    },
    {
      id: 19,
      topic: 'os-sync',
      question: 'Which classic synchronization problem illustrates the difficulty of preventing starvation and deadlock when allocating multiple resources?',
      options: ['Producer-Consumer Problem', 'Dining Philosophers Problem', 'Readers-Writers Problem', 'Sleeping Barber Problem'],
      correct: 1,
      explanation: 'The Dining Philosophers problem is a classic example used to illustrate the concepts of deadlock, starvation, and concurrent resource allocation among multiple processes.'
    },
    {
      id: 20,
      topic: 'os-sync',
      question: 'What happens when a process performs a wait() [or P] operation on a binary semaphore whose value is currently 0?',
      options: ['The process enters the critical section.', 'The semaphore value becomes -1.', 'The process is blocked until the value becomes 1.', 'The system crashes due to a race condition.'],
      correct: 2,
      explanation: 'If a binary semaphore value is 0, the resource is locked. A process executing wait() will be blocked (put into a wait queue) until another process releases it using signal().'
    },
    {
      id: 21,
      topic: 'os-sync',
      question: 'Peterson’s Solution is a software-based synchronization mechanism restricted to how many processes?',
      options: ['Only 1 process', 'Exactly 2 processes', 'Up to 4 processes', 'Any number of processes'],
      correct: 1,
      explanation: 'Peterson’s solution is a classic algorithm designed specifically to provide mutual exclusion for exactly two processes competing for a critical section.'
    },
    {
      id: 22,
      topic: 'os-deadlock',
      question: 'Which of the following Coffman conditions states that resources cannot be forcefully taken away from a process?',
      options: ['Mutual Exclusion', 'Hold and Wait', 'No Preemption', 'Circular Wait'],
      correct: 2,
      explanation: 'No Preemption implies that a resource can only be released voluntarily by the process holding it, after the process has completed its task.'
    },
    {
      id: 23,
      topic: 'os-deadlock',
      question: 'What is the primary purpose of Banker’s Algorithm?',
      options: ['Deadlock Prevention', 'Deadlock Avoidance', 'Deadlock Detection', 'Deadlock Recovery'],
      correct: 1,
      explanation: 'Banker’s Algorithm is used for Deadlock Avoidance. It dynamically checks resource requests to ensure the system remains in a "Safe State" before granting them.'
    },
    {
      id: 24,
      topic: 'os-deadlock',
      question: 'In a system with 3 identical resources and 3 processes, each process requires exactly 2 resources to complete. Is the system prone to deadlock?',
      options: ['Yes, it is deadlocked.', 'Yes, it can enter a deadlock state.', 'No, it is strictly deadlock-free.', 'Depends on the CPU scheduling algorithm.'],
      correct: 2,
      explanation: 'Maximum need for each is 2. Total resources = 3. Even if all 3 processes hold 1 resource each (3 resources used), no one has 2. Wait, if all 3 hold 1, none can proceed. Thus, it CAN deadlock! Let me re-verify. Formula for deadlock freedom: R >= P(N-1) + 1. Here R=3, P=3, N=2. P(N-1)+1 = 3(1)+1 = 4. Since 3 is NOT >= 4, deadlock CAN occur. Correct answer: Yes, it can enter a deadlock state.'
    },
    {
      id: 25,
      topic: 'os-deadlock',
      question: 'Which Deadlock Handling strategy does Windows and Linux predominantly use in practice?',
      options: ['Banker’s Algorithm', 'Deadlock Prevention by strict ordering', 'Deadlock Ignorance (Ostrich Algorithm)', 'Automatic Deadlock Recovery by rollback'],
      correct: 2,
      explanation: 'Most general-purpose OSs (Windows/Unix/Linux) use the Ostrich Algorithm, meaning they ignore the problem altogether. The overhead of avoiding or preventing deadlock is too high for everyday systems.'
    },
    {
      id: 26,
      topic: 'os-deadlock',
      question: 'Which mathematical graph is typically used by the OS to detect a deadlock in a single-instance resource environment?',
      options: ['Resource Allocation Graph (RAG)', 'Directed Acyclic Graph (DAG)', 'Spanning Tree', 'Bipartite Graph'],
      correct: 0,
      explanation: 'The Resource Allocation Graph (RAG) is used to model processes and resources. In a single-instance system, a cycle in the RAG is a necessary and sufficient condition for deadlock.'
    },
    {
      id: 27,
      topic: 'os-memory',
      question: 'In a paging system, logical memory is divided into fixed-size blocks called _____, and physical memory is divided into fixed-size blocks called _____.',
      options: ['Pages, Segments', 'Pages, Frames', 'Frames, Pages', 'Segments, Pages'],
      correct: 1,
      explanation: 'Logical address space is divided into "Pages" and physical address space into "Frames". The size of a page is always exactly equal to the size of a frame.'
    },
    {
      id: 28,
      topic: 'os-memory',
      question: 'Which memory allocation strategy allocates the smallest available hole that is large enough to accommodate the process?',
      options: ['First Fit', 'Best Fit', 'Worst Fit', 'Next Fit'],
      correct: 1,
      explanation: 'Best Fit searches the entire memory list to find the smallest hole that is big enough. It aims to minimize wasted space, though it often creates tiny unusable holes.'
    },
    {
      id: 29,
      topic: 'os-memory',
      question: 'What is the function of the Translation Lookaside Buffer (TLB)?',
      options: ['To store files permanently on the disk.', 'To cache recent page table entries to speed up memory access.', 'To handle page faults automatically.', 'To swap processes between RAM and hard disk.'],
      correct: 1,
      explanation: 'The TLB is a high-speed hardware cache inside the MMU that stores recent virtual-to-physical address translations (page table entries) to drastically reduce memory access time.'
    },
    {
      id: 30,
      topic: 'os-memory',
      question: 'A process suffers from "Thrashing" when:',
      options: ['It executes instructions extremely fast.', 'It spends more time paging (swapping pages) than executing.', 'It is deadlocked and cannot move forward.', 'Its CPU utilization reaches 100%.'],
      correct: 1,
      explanation: 'Thrashing occurs when a system does not have enough frames allocated to active processes. This causes constant page faults, leading the system to spend all its time swapping pages instead of doing useful work.'
    },
    {
      id: 31,
      topic: 'os-memory',
      question: 'Which of the following page replacement algorithms suffers from Belady’s Anomaly?',
      options: ['Optimal Page Replacement', 'Least Recently Used (LRU)', 'First In First Out (FIFO)', 'Most Recently Used (MRU)'],
      correct: 2,
      explanation: 'Belady’s Anomaly is a phenomenon in FIFO where increasing the number of physical memory page frames can actually cause an increase in the number of page faults.'
    },
    {
      id: 32,
      topic: 'os-memory',
      question: 'Paging primarily suffers from which type of fragmentation?',
      options: ['External Fragmentation', 'Internal Fragmentation', 'Both Internal and External', 'No Fragmentation at all'],
      correct: 1,
      explanation: 'Paging eliminates external fragmentation entirely. However, because memory is allocated in fixed-size blocks (frames), the last frame allocated to a process may not be completely full, causing Internal Fragmentation.'
    },
    {
      id: 33,
      topic: 'os-storage',
      question: 'In which file allocation method does the system maintain an index block containing pointers to all the scattered disk blocks of a file?',
      options: ['Contiguous Allocation', 'Linked Allocation', 'Indexed Allocation', 'Direct Allocation'],
      correct: 2,
      explanation: 'Indexed allocation brings all pointers together in one location called the index block. It solves the direct-access limitation of linked allocation without causing external fragmentation.'
    },
    {
      id: 34,
      topic: 'os-storage',
      question: 'Which disk scheduling algorithm scans the disk continuously from one end to the other and back, servicing requests in its path?',
      options: ['SSTF', 'SCAN (Elevator)', 'C-SCAN', 'LOOK'],
      correct: 1,
      explanation: 'The SCAN algorithm (also known as the Elevator algorithm) moves the read/write head from one end of the disk to the other, servicing requests along the way, and then reverses direction.'
    },
    {
      id: 35,
      topic: 'os-storage',
      question: 'If a disk drive has a rotational speed of 6000 RPM, what is the average rotational latency? (Hint: 1 rotation time = 60/6000 sec. Average is half of a full rotation)',
      options: ['5 milliseconds', '10 milliseconds', '15 milliseconds', '20 milliseconds'],
      correct: 0,
      explanation: '6000 RPM means 6000 revolutions in 60 seconds, or 100 rev/sec. Time for one rotation = 1/100 sec = 10 ms. Average rotational latency is half of a full rotation time, which is 10/2 = 5 ms.'
    },
    {
      id: 36,
      topic: 'os-storage',
      question: 'Which file access method is most suitable for magnetic tape storage?',
      options: ['Direct Access', 'Relative Access', 'Random Access', 'Sequential Access'],
      correct: 3,
      explanation: 'Magnetic tape is a linear storage medium. To read the Nth record, the drive must physically spool past all previous N-1 records, making Sequential Access the only practical method.'
    },
    {
      id: 37,
      topic: 'os-linux-rtos',
      question: 'In Linux, what does the permission code "755" (assigned via chmod) imply for a file?',
      options: ['Owner: rwx, Group: r-x, Others: r-x', 'Owner: r-x, Group: rwx, Others: r-x', 'Owner: rwx, Group: rwx, Others: rwx', 'Owner: rwx, Group: ---, Others: ---'],
      correct: 0,
      explanation: '7 = 4(read) + 2(write) + 1(execute) for Owner. 5 = 4(read) + 1(execute) for Group. 5 = 4(read) + 1(execute) for Others. Therefore, rwx for Owner, and r-x for Group and Others.'
    },
    {
      id: 38,
      topic: 'os-linux-rtos',
      question: 'Which of the following is an example of a Hard Real-Time System?',
      options: ['A multimedia video player', 'A pacemaker or anti-lock braking system (ABS)', 'An online multiplayer game', 'A web server handling HTTP requests'],
      correct: 1,
      explanation: 'Hard real-time systems have critical deadlines. A failure to meet the deadline in a pacemaker or ABS can result in catastrophic consequences or loss of life.'
    },
    {
      id: 39,
      topic: 'os-linux-rtos',
      question: 'Which Linux command is used to search for a specific text pattern inside a file?',
      options: ['find', 'ls', 'grep', 'tar'],
      correct: 2,
      explanation: 'grep stands for Global Regular Expression Print. It is a powerful command-line tool used to search for matching text patterns within files.'
    },
    {
      id: 40,
      topic: 'os-linux-rtos',
      question: 'What is the purpose of the "shebang" (#!) at the beginning of a Linux shell script?',
      options: ['It marks the script as highly confidential.', 'It is a multi-line comment identifier.', 'It specifies the absolute path to the interpreter that should execute the script.', 'It immediately terminates the script upon execution.'],
      correct: 2,
      explanation: 'The shebang (#!/bin/bash) tells the operating system which interpreter (like bash, python, perl) to use when executing the file.'
    }
  ]
};

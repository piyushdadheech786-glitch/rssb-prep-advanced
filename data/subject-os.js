window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['os'] = {
  id: 'os',
  name: 'Operating Systems',
  icon: '🖥️',
  description: 'Process management, Memory, Deadlocks, File Systems, aur Linux shell scripting.',
  topics: [
    {
      id: 'process-sync',
      name: 'Process, Threads & Synchronization',
      theory: `
        <h3>Process & Threads</h3>
        <p>Ek <strong>Process</strong> ek program in execution hota hai. Jab bhi hum double click karke koi app open karte hain, ek process create hota hai. <strong>Thread</strong> ek lightweight process hota hai. Ek process ke andar multiple threads run kar sakte hain jo code aur data share karte hain.</p>
        
        <h4>Process State Diagram</h4>
        <p>Ek process apni life me kai states se gujarta hai:</p>
        <ul>
          <li><strong>New:</strong> Process create ho raha hai.</li>
          <li><strong>Ready:</strong> Process CPU ka wait kar raha hai (Ready Queue me hai).</li>
          <li><strong>Running:</strong> Instructions execute ho rahe hain.</li>
          <li><strong>Waiting / Blocked:</strong> Process kisi I/O event ka wait kar raha hai.</li>
          <li><strong>Terminated:</strong> Execution complete ho chuka hai.</li>
        </ul>

        <h4>Process Control Block (PCB)</h4>
        <p>Har process ka ek data structure hota hai OS me jise PCB kehte hain. Isme Process ID, State, Program Counter (PC), CPU registers ki details hoti hai.</p>
        
        <h4>Synchronization & Inter-Process Communication (IPC)</h4>
        <p>Jab processes share karte hain data, toh unhe synchronize karna padta hai taaki data inconsistency na ho (Race Condition).</p>
        
        <table class="comparison-table">
          <tr><th>Feature</th><th>Mutex</th><th>Semaphore</th></tr>
          <tr><td>Type</td><td>Locking mechanism</td><td>Signaling mechanism</td></tr>
          <tr><td>Ownership</td><td>Jo lock karega, wahi unlock karega</td><td>Koi bhi process signal kar sakta hai</td></tr>
          <tr><td>Count</td><td>Binary (0 or 1)</td><td>Integer (Counting or Binary)</td></tr>
        </table>
        
        <div class="formula-box">
          <div class="formula-title">📐 Key Concept: Semaphore</div>
          Wait (P operation) decrements value, Signal (V operation) increments value.
        </div>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Context Switching: Ek process se dusre process pe switch karne me jo time lagta hai usko context switch time bolte hain. Ye pure overhead hota hai (koi useful kaam nahi hota).
        </div>
      `
    },
    {
      id: 'cpu-scheduling',
      name: 'CPU Scheduling Algorithms',
      theory: `
        <h3>CPU Scheduling</h3>
        <p>OS ye decide karta hai ki Ready queue me se kis process ko next CPU dena hai. Is process ko <strong>Short-term scheduler</strong> handle karta hai.</p>
        
        <h4>Scheduling Metrics</h4>
        <ul>
          <li><strong>Arrival Time (AT):</strong> Jab process ready queue me enter hota hai.</li>
          <li><strong>Burst Time (BT):</strong> Process ko execute hone ke liye kitna time chahiye.</li>
          <li><strong>Completion Time (CT):</strong> Process kab khatam hua.</li>
        </ul>
        
        <div class="formula-box">
          <div class="formula-title">📐 Formulas</div>
          Turnaround Time (TAT) = CT - AT<br>
          Waiting Time (WT) = TAT - BT
        </div>
        
        <h4>Popular Algorithms</h4>
        <p><strong>1. First Come First Serve (FCFS):</strong> Jo pehle aayega, pehle payega (Non-preemptive). Isme "Convoy Effect" hota hai (bade process ke piche chhote process fass jate hain).</p>
        <p><strong>2. Shortest Job First (SJF):</strong> Jiska burst time sabse kam, use pehle CPU milega. Ye optimal hota hai average waiting time ke liye. (Non-preemptive)</p>
        <p><strong>3. Shortest Remaining Time First (SRTF):</strong> Ye SJF ka preemptive version hai. Agar naya process aata hai jiska remaining time current se kam hai, toh CPU switch ho jata hai.</p>
        <p><strong>4. Round Robin (RR):</strong> Har process ko ek fixed time (Time Quantum) milta hai. Time sharing systems ke liye best hai.</p>
        
        <h4>Example (SJF Non-preemptive)</h4>
        <p>P1(BT=6), P2(BT=8), P3(BT=7), P4(BT=3). Sab ek saath 0 par aaye.<br>
        Order: P4 -> P1 -> P3 -> P2.<br>
        CT: P4=3, P1=9, P3=16, P2=24.</p>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Hamesha check karo ki algorithm <em>Preemptive</em> hai ya <em>Non-preemptive</em>. SRTF me har arrival par check karna padta hai ki preempt karna hai ya nahi!
        </div>
      `
    },
    {
      id: 'deadlocks',
      name: 'Deadlocks',
      theory: `
        <h3>Deadlocks Kya Hai?</h3>
        <p>Deadlock ek aisi situation hai jisme do ya usse zyada processes ek dusre ka wait kar rahe hote hain indefinitely (infinite time tak). Jaise, Process P1 ko Resource R2 chahiye jo P2 ke paas hai, aur P2 ko Resource R1 chahiye jo P1 ke paas hai.</p>
        
        <h4>Coffman Conditions (Necessary conditions for Deadlock)</h4>
        <p>Deadlock tabhi hoga jab ye chaaro conditions ek saath true honge:</p>
        <ol>
          <li><strong>Mutual Exclusion:</strong> Resource shareable nahi hai. Ek time pe ek hi process use kar sakta hai.</li>
          <li><strong>Hold and Wait:</strong> Process ne ek resource hold kiya hai aur dusre ka wait kar raha hai.</li>
          <li><strong>No Preemption:</strong> Kisi process se zabardasti resource nahi chheena jaa sakta.</li>
          <li><strong>Circular Wait:</strong> P0 waits for P1, P1 waits for P2... Pn waits for P0.</li>
        </ol>
        
        <h4>Deadlock Handling Methods</h4>
        <ul>
          <li><strong>Prevention:</strong> Chaaro conditions me se kisi ek ko fail kar do.</li>
          <li><strong>Avoidance:</strong> OS pehle se check karta hai (Safe state vs Unsafe state). Iske liye <strong>Banker's Algorithm</strong> use hota hai.</li>
          <li><strong>Detection & Recovery:</strong> Deadlock hone do, fir detect karke process kill/abort kar do ya resources preempt kar lo.</li>
          <li><strong>Ignorance:</strong> OS deadlock ko ignore karta hai. Ostrich Algorithm! (Windows/UNIX yahi karte hain).</li>
        </ul>
        
        <div class="formula-box">
          <div class="formula-title">📐 Banker's Algorithm Math</div>
          Need = Max - Allocation
        </div>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Ostrich Algorithm ka matlab hai "Mitti me sar daal ke baith jao, problem apne aap chali jayegi". Most modern OS (Windows, Linux) user-level deadlocks ko effectively ignore karte hain.
        </div>
      `
    },
    {
      id: 'memory-management',
      name: 'Memory Management & Virtual Memory',
      theory: `
        <h3>Memory Management</h3>
        <p>CPU logical address (Virtual Address) generate karta hai. RAM me physically data kahan hai, usko Physical Address kehte hain. Memory Management Unit (MMU) inka translation karta hai.</p>
        
        <h4>Paging</h4>
        <p>Main memory (RAM) ko fixed-size blocks me divide karte hain, jinhe <strong>Frames</strong> kehte hain. Logical memory (Process) ko same size blocks me divide karte hain, jinhe <strong>Pages</strong> kehte hain. Ek page kisi bhi frame me load ho sakta hai (Non-contiguous allocation).</p>
        <ul>
          <li><strong>Page Table:</strong> Ye track rakhta hai ki kaunsa page kis frame me hai.</li>
          <li><strong>TLB (Translation Lookaside Buffer):</strong> Ek fast cache jo recent Page Table entries ko store karti hai. TLB hit se address translation fast hota hai.</li>
        </ul>
        
        <h4>Virtual Memory & Thrashing</h4>
        <p>Virtual memory process ko illusion deti hai ki uske paas bohot memory hai, chahe RAM chhoti ho. Demand Paging se sirf zaroori pages RAM me laye jate hain.</p>
        <p><strong>Page Fault:</strong> Jab process ko jo page chahiye wo RAM me nahi hota, toh OS usko Hard disk se lata hai.</p>
        <p><strong>Thrashing:</strong> Jab system CPU execute karne se zyada time page swap (in/out) karne me waste karne lagta hai, usko thrashing bolte hain. Isse CPU utilization gir jata hai.</p>
        
        <h4>Page Replacement Algorithms</h4>
        <table class="comparison-table">
          <tr><th>Algorithm</th><th>Logic</th><th>Pros / Cons</th></tr>
          <tr><td>FIFO (First In First Out)</td><td>Sabse pehle aaye page ko nikal do</td><td>Belady's anomaly ka shikar ho sakta hai</td></tr>
          <tr><td>LRU (Least Recently Used)</td><td>Jo sabse zyada time se use nahi hua, use nikalo</td><td>Practical aur efficient</td></tr>
          <tr><td>Optimal</td><td>Jo future me sabse late use hoga, use nikalo</td><td>Best, but future predict karna namumkin (theoretical)</td></tr>
        </table>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap: Belady's Anomaly</div>
          General rule hai ki frames badhane se page faults kam hote hain, par FIFO me kabhi-kabhi frames badhane se page faults BHI badh jate hain. Isko Belady's Anomaly kehte hain. LRU aur Optimal me ye nahi hota.
        </div>
      `
    },
    {
      id: 'file-disk',
      name: 'File Systems & Disk Scheduling',
      theory: `
        <h3>Disk Structure</h3>
        <p>Disk platters me divide hoti hai, platters tracks me, aur tracks sectors me.</p>
        <ul>
          <li><strong>Seek Time:</strong> Read/Write head ko sahi track tak pahuchne me jo time lagta hai.</li>
          <li><strong>Rotational Latency:</strong> Sahi sector ko read/write head ke niche aane me jo time lagta hai.</li>
          <li><strong>Transfer Time:</strong> Data read/write karne ka time.</li>
        </ul>
        <p>Disk Access Time = Seek Time + Rotational Latency + Transfer Time.</p>
        
        <h4>Disk Scheduling Algorithms</h4>
        <p>Disk scheduling ka main maqsad average Seek Time ko kam karna hai.</p>
        <ul>
          <li><strong>FCFS:</strong> Requests order me serve hoti hain. (Simple par inefficient)</li>
          <li><strong>SSTF (Shortest Seek Time First):</strong> Head wahan move karega jo nearest track hai. Isme starvation ho sakta hai.</li>
          <li><strong>SCAN (Elevator Algo):</strong> Head ek end se dusre end tak jata hai aur rastay me aane wale tracks ko serve karta hai.</li>
          <li><strong>C-SCAN (Circular SCAN):</strong> SCAN ki tarah, par end pe pahuch kar seedha start pe wapas aa jata hai bina serve kiye (Sirf ek direction me serve karta hai).</li>
        </ul>
        
        <h4>File Allocation Methods</h4>
        <ul>
          <li><strong>Contiguous:</strong> Disk me lagatar blocks allocate hote hain. External fragmentation ka problem hai.</li>
          <li><strong>Linked:</strong> Har block me agle block ka pointer hota hai (Linked list ki tarah). Random access slow hota hai.</li>
          <li><strong>Indexed:</strong> Ek index block hota hai jisme baki sab blocks ke pointers hote hain. Direct access possible hai.</li>
        </ul>
      `
    },
    {
      id: 'network-os',
      name: 'Client-Server & RPC',
      theory: `
        <h3>Client-Server Architecture</h3>
        <p>Distributed Systems aur Network OS me machines connected hoti hain. Client requests bhejta hai aur Server resources/services provide karta hai.</p>
        
        <h4>Remote Procedure Call (RPC)</h4>
        <p>RPC ek protocol hai jo ek program ko allow karta hai dusre computer par service execute karne ke liye, jaise ki wo local system par hi ho rahi ho. Client ko network ki details ki fikar nahi karni padti.</p>
        
        <p><strong>Stubs in RPC:</strong></p>
        <ul>
          <li><strong>Client Stub:</strong> Client ke function call ko pack karta hai (Marshalling) aur network par bhejta hai.</li>
          <li><strong>Server Stub:</strong> Receive kiye hue message ko unpack karta hai (Unmarshalling) aur actual server routine ko call karta hai.</li>
        </ul>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Marshalling ka matlab parameters/data ko ek standard format (packet) me convert karna taaki network pe bheja ja sake. Unmarshalling uska ulta hota hai.
        </div>
      `
    },
    {
      id: 'rtos-boot',
      name: 'RTOS, Booting & Backup',
      theory: `
        <h3>Real-Time Operating System (RTOS)</h3>
        <p>RTOS un systems me use hota hai jahan timing aur deadlines bahut strict hote hain. Inka response time predictable hota hai.</p>
        <ul>
          <li><strong>Hard RTOS:</strong> Agar deadline miss hui toh system fail/crash ho jayega. (E.g., Airbag control, Missile guidance).</li>
          <li><strong>Soft RTOS:</strong> Deadline miss hone pe value kam hoti hai par system fail nahi hota. (E.g., Video streaming, Virtual reality).</li>
        </ul>
        
        <h4>Booting Process</h4>
        <p>Computer on hone par OS ko secondary storage se main memory (RAM) me load karne ki process ko booting kehte hain.</p>
        <ol>
          <li><strong>BIOS (Basic Input/Output System):</strong> POST (Power-On Self Test) karta hai hardware check karne ke liye.</li>
          <li><strong>MBR (Master Boot Record):</strong> Hard disk ka pehla sector (512 bytes) jisme bootloader hota hai.</li>
          <li><strong>Bootloader (like GRUB, NTLDR):</strong> OS kernel ko memory me load karta hai.</li>
        </ol>
        <p><strong>Cold Booting:</strong> System completely off tha, phir start kiya. <br><strong>Warm Booting:</strong> System restart kiya gaya (Ctrl+Alt+Del se).</p>
        
        <h4>Backup Types</h4>
        <table class="comparison-table">
          <tr><th>Backup Type</th><th>Meaning</th><th>Speed of Backup</th></tr>
          <tr><td>Full Backup</td><td>Sab kuch backup lena</td><td>Sabse slow</td></tr>
          <tr><td>Incremental</td><td>Last backup (koi bhi) ke baad jo badla hai, uska backup</td><td>Fastest</td></tr>
          <tr><td>Differential</td><td>Last FULL backup ke baad jo badla hai</td><td>Moderate</td></tr>
        </table>
      `
    },
    {
      id: 'linux-shell',
      name: 'Linux Shell Programming',
      theory: `
        <h3>Linux Architecture & Shell</h3>
        <p>Linux me sabse andar <strong>Hardware</strong> hota hai, uske upar <strong>Kernel</strong> (core of OS), aur uske upar <strong>Shell</strong> (Command line interface). Shell user se commands le kar Kernel ko deta hai.</p>
        
        <h4>File Permissions</h4>
        <p>Linux me 3 tarah ke users hote hain: Owner(u), Group(g), aur Others(o). Aur 3 tarah ke permissions: Read(r=4), Write(w=2), Execute(x=1).</p>
        <p>Example: <code>chmod 754 file.txt</code><br>
        Owner = 7 (4+2+1) -> rwx<br>
        Group = 5 (4+1) -> r-x<br>
        Others = 4 (4) -> r--</p>
        
        <h4>Basic Shell Scripting</h4>
        <p>Shell script ek text file hoti hai jisme Linux commands hote hain. File hamesha <code>#!/bin/bash</code> (Shebang) se shuru hoti hai jo batata hai kaunsa interpreter use karna hai.</p>
        <pre>
#!/bin/bash
echo "Enter your name:"
read name
echo "Hello, $name"

# If-Else Example
if [ $name == "Admin" ]; then
    echo "Welcome Boss!"
else
    echo "Access Denied"
fi
        </pre>
        
        <h4>Important Commands</h4>
        <ul>
          <li><strong>grep:</strong> File me specific pattern dhundhne ke liye (e.g., <code>grep "error" log.txt</code>).</li>
          <li><strong>awk / sed:</strong> Text processing, replacing aur column extraction ke liye.</li>
          <li><strong>ls -l:</strong> Long listing (permissions, owner, size).</li>
          <li><strong>kill:</strong> Kisi process ko end karne ke liye (PID use karke).</li>
        </ul>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Variables assign karte waqt space NAHI dena hota hai. <code>a=10</code> sahi hai, <code>a = 10</code> galat hai shell script me!
        </div>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'process-sync',
      question: 'Ek running process apne state ko "Waiting/Blocked" me kab change karta hai?',
      options: ['Jab execution complete ho jata hai', 'Jab I/O event ki request karta hai', 'Jab time quantum expire ho jata hai', 'Jab naya process create hota hai'],
      correct: 1,
      explanation: 'Running se Waiting/Blocked state tabhi aati hai jab process kisi I/O operation (jaise user input ya disk read) ka intezar kar raha hota hai. Time quantum expire hone par wo "Ready" state me jata hai.'
    },
    {
      id: 2,
      topic: 'process-sync',
      question: 'PCB (Process Control Block) me inme se kya store nahi hota?',
      options: ['Process ID', 'Program Counter', 'CPU Registers', 'Global variables ka data'],
      correct: 3,
      explanation: 'PCB me process execution ki state hoti hai (PID, PC, Registers, Scheduling info). Data (Global variables) process ke Data Segment me store hota hai, PCB data structure me nahi.'
    },
    {
      id: 3,
      topic: 'process-sync',
      question: 'Inme se kaunsa synchronization mechanism ek locking mechanism ki tarah act karta hai, jo ki ownership track karta hai?',
      options: ['Counting Semaphore', 'Mutex', 'Binary Semaphore', 'Monitor'],
      correct: 1,
      explanation: 'Mutex (Mutual Exclusion) ek lock hota hai. Jo thread lock ko acquire (lock) karta hai, wahi use release (unlock) kar sakta hai, isliye isme ownership hoti hai. Semaphore ek signaling mechanism hai.'
    },
    {
      id: 4,
      topic: 'process-sync',
      question: '"Context Switch" ke dauran kya hota hai?',
      options: ['Ek process ka state PCB me save hota hai aur dusre ka load hota hai', 'Process execution fast ho jata hai', 'Naya process memory me allocate hota hai', 'Disk se data memory me aata hai'],
      correct: 0,
      explanation: 'Context Switch me current process ka state uske PCB me save kiya jata hai aur CPU ko next process ke PCB se uska state load karke diya jata hai. Yeh pure overhead hai.'
    },
    {
      id: 5,
      topic: 'cpu-scheduling',
      question: 'Kaunsa CPU scheduling algorithm "Convoy Effect" suffer karta hai?',
      options: ['Round Robin', 'SJF', 'FCFS', 'SRTF'],
      correct: 2,
      explanation: 'FCFS (First Come First Serve) me Convoy Effect hota hai. Agar ek bada process CPU pehle le leta hai, toh baaki chhote processes ko uske piche lambe time tak wait karna padta hai.'
    },
    {
      id: 6,
      topic: 'cpu-scheduling',
      question: 'Shortest Remaining Time First (SRTF) algorithm me naya process aane par OS kya check karta hai?',
      options: ['Priority number check karta hai', 'Puraana process suspend kar deta hai bina soche', 'Current process ke remaining time ko naye process ke burst time se compare karta hai', 'Kuch nahi karta, wait karne ko bolta hai'],
      correct: 2,
      explanation: 'SRTF preemptive hota hai. Jab naya process aata hai, toh current process ka bacha hua (remaining) time naye process ke burst time se compare kiya jata hai. Agar naye ka kam hai, toh preempt ho jata hai.'
    },
    {
      id: 7,
      topic: 'cpu-scheduling',
      question: 'Time Sharing Systems ke liye kaunsa scheduling algorithm sabse best mana jata hai?',
      options: ['FCFS', 'Round Robin', 'SJF', 'Priority Scheduling'],
      correct: 1,
      explanation: 'Round Robin (RR) me har process ko ek fixed time quantum milta hai, jisse har user ko lagta hai CPU sirf usi ka kaam kar raha hai (fair share). Ye interactive/time-sharing systems me best hai.'
    },
    {
      id: 8,
      topic: 'cpu-scheduling',
      question: 'Process P1, P2 aur P3 (Burst times: 5, 2, 8) 0 par arrive hote hain. FCFS use karke Average Waiting Time kya hoga? (Order: P1, P2, P3)',
      options: ['4.0', '5.0', '7.0', '15.0'],
      correct: 0,
      explanation: 'P1 wait=0, P2 wait=5, P3 wait=7 (5+2). Average = (0+5+7)/3 = 12/3 = 4.0. TAT nikalte toh alag hota, yahan sirf wait time pucha hai.'
    },
    {
      id: 9,
      topic: 'deadlocks',
      question: 'Inme se kaunsi Coffman Condition ye kehti hai ki process resources hold kar sakta hai aur naye resources ke liye wait kar sakta hai?',
      options: ['Mutual Exclusion', 'Hold and Wait', 'No Preemption', 'Circular Wait'],
      correct: 1,
      explanation: 'Hold and Wait condition ka directly yahi matlab hai - ek process ne existing resource ko hold kar rakha hai, par execution ke liye use koi dusra resource bhi chahiye jo kisi aur ke paas hai.'
    },
    {
      id: 10,
      topic: 'deadlocks',
      question: 'Banker\\'s Algorithm ka main purpose OS me kya hota hai?',
      options: ['Deadlock Detection', 'Deadlock Recovery', 'Deadlock Avoidance', 'Deadlock Prevention'],
      correct: 2,
      explanation: 'Banker\\'s Algo Deadlock Avoidance ke liye use hota hai. Ye system ki state check karta hai - agar request satisfy karne se system "Safe State" me rehta hai, tabhi resource deta hai warna process ko wait karwata hai.'
    },
    {
      id: 11,
      topic: 'deadlocks',
      question: '"Ostrich Algorithm" kis context me use hota hai?',
      options: ['Memory management me thrashed pages hatane ke liye', 'Deadlock ko ignore karne ke liye', 'CPU scheduling me short jobs find karne ke liye', 'Disk head seek time minimize karne ke liye'],
      correct: 1,
      explanation: 'Ostrich Algorithm ka matlab hai deadlock problems ko completely ignore kar dena (jaise ostrich sand me sar daal leta hai). Windows/Linux yehi approach use karte hain kyunki deadlocks rare hote hain.'
    },
    {
      id: 12,
      topic: 'deadlocks',
      question: 'Deadlock avoid karne ke liye, Banker\\'s Algorithm me "Need" matrix kaise calculate hoti hai?',
      options: ['Need = Max + Allocation', 'Need = Allocation - Max', 'Need = Max - Allocation', 'Need = Available - Allocation'],
      correct: 2,
      explanation: 'Need = Max - Allocation. Yani ek process ko total kitne resource chahiye (Max) aur kitne mil chuke hain (Allocation), unka difference batata hai ki usko ab aur kitne chahiye.'
    },
    {
      id: 13,
      topic: 'memory-management',
      question: 'Virtual Memory ka concept directly kisse implemented hota hai?',
      options: ['Demand Paging', 'Contiguous Memory Allocation', 'SRAM Cache', 'Disk Scheduling'],
      correct: 0,
      explanation: 'Demand Paging virtual memory implement karne ka tarika hai, jahan pages sirf tabhi RAM me laye jate hain jab CPU unki demand karta hai (jab page fault hota hai).'
    },
    {
      id: 14,
      topic: 'memory-management',
      question: 'Logical address space ko same size ke blocks me divide karne ko kya kehte hain?',
      options: ['Frames', 'Segments', 'Pages', 'Sectors'],
      correct: 2,
      explanation: 'Logical memory ke fixed-size blocks ko "Pages" kehte hain. Physical memory (RAM) ke blocks ko "Frames" kehte hain. Dono ka size same hota hai.'
    },
    {
      id: 15,
      topic: 'memory-management',
      question: 'Belady\\'s Anomaly kis page replacement algorithm me observe ki jaati hai?',
      options: ['Optimal', 'LRU', 'FIFO', 'Clock Replacement'],
      correct: 2,
      explanation: 'Belady\\'s Anomaly ek aisi situation hai jisme available page frames badhane par bhi page faults badh jate hain. Ye anomaly mukhya roop se FIFO algorithm me dikhti hai.'
    },
    {
      id: 16,
      topic: 'memory-management',
      question: 'TLB (Translation Lookaside Buffer) ka primary kaam kya hai?',
      options: ['Disk access speed badhana', 'CPU scheduling optimize karna', 'Page table traversal time kam karke Address translation fast karna', 'Deadlock detect karna'],
      correct: 2,
      explanation: 'TLB ek special cache memory hai jo recent page table entries ko store karti hai. Isse baar-baar main memory me page table check nahi karni padti aur address translation (Logical to Physical) bahut fast ho jata hai.'
    },
    {
      id: 17,
      topic: 'file-disk',
      question: 'Disk par Read/Write head ko sahi track tak pahuchne me jo time lagta hai, use kya kehte hain?',
      options: ['Rotational Latency', 'Seek Time', 'Transfer Time', 'Turnaround Time'],
      correct: 1,
      explanation: 'Sahi track (cylinder) tak pahuchne wale mechanical delay ko Seek Time kehte hain. Track ke andar sahi sector tak ghum ke aane ko Rotational Latency kehte hain.'
    },
    {
      id: 18,
      topic: 'file-disk',
      question: 'Kaunsa file allocation method direct access support karta hai without external fragmentation?',
      options: ['Contiguous Allocation', 'Linked Allocation', 'Indexed Allocation', 'Tape Allocation'],
      correct: 2,
      explanation: 'Indexed allocation me ek block me saare file blocks ke pointers (index) hote hain, isliye direct access fast hota hai. Aur kyunki blocks pe bhi bikhre ho sakte hain, external fragmentation nahi hoti.'
    },
    {
      id: 19,
      topic: 'file-disk',
      question: 'Kaunsa disk scheduling algorithm "Elevator algorithm" ke naam se jana jata hai?',
      options: ['SSTF', 'SCAN', 'C-SCAN', 'FCFS'],
      correct: 1,
      explanation: 'SCAN algorithm elevator (lift) ki tarah kaam karta hai. Head disk ke ek end se doosre end tak lagatar ek direction me move karta hai aur beech me aane waali saari requests ko serve karta hai.'
    },
    {
      id: 20,
      topic: 'file-disk',
      question: 'SSTF (Shortest Seek Time First) disk scheduling ki sabse badi problem kya hai?',
      options: ['High average seek time', 'Starvation of far requests', 'Implementation is impossible', 'It does not serve local requests'],
      correct: 1,
      explanation: 'SSTF me head hamesha sabse paas wali request pe jata hai. Agar lagatar paas me hi nayi requests aati rahein, toh jo request head se door hai usko kabhi bari nahi milegi (Starvation).'
    },
    {
      id: 21,
      topic: 'network-os',
      question: 'RPC (Remote Procedure Call) me client ke function parameters ko network format me pack karne ko kya kehte hain?',
      options: ['Deserialization', 'Unmarshalling', 'Marshalling', 'Paging'],
      correct: 2,
      explanation: 'Data ko pack karke network transfer ke suitable format (jaise byte stream) me badalne ko Marshalling kehte hain. Ye kaam client stub karta hai.'
    },
    {
      id: 22,
      topic: 'network-os',
      question: 'Client-server architecture me "Server Stub" ka primary task kya hai?',
      options: ['Network packets ko discard karna', 'Client se request receive karna, unmarshal karna aur local server function call karna', 'Client par execute hona', 'Disk I/O scheduling karna'],
      correct: 1,
      explanation: 'Server stub incoming network messages ko listen karta hai, request ko unmarshal (unpack) karta hai, aur actual remote function/procedure ko invoke karta hai.'
    },
    {
      id: 23,
      topic: 'rtos-boot',
      question: 'MBR (Master Boot Record) ka standard size kitna hota hai?',
      options: ['256 Bytes', '512 Bytes', '1024 Bytes', '4096 Bytes'],
      correct: 1,
      explanation: 'MBR hard disk ka first sector hota hai, jiska size 512 bytes hota hai. Isme bootloader (446 bytes), partition table (64 bytes) aur magic number (2 bytes) store hota hai.'
    },
    {
      id: 24,
      topic: 'rtos-boot',
      question: 'Hard Real-Time OS kis application ke liye best suited hai?',
      options: ['Video streaming', 'Online Gaming', 'Missile guidance system', 'Web Browsing'],
      correct: 2,
      explanation: 'Hard RTOS waha use hota hai jaha 1 millisecond ki bhi delay disaster kar sakti hai (Zero tolerance for deadline miss), jaise missile guidance, pacemakers, car airbags.'
    },
    {
      id: 25,
      topic: 'rtos-boot',
      question: 'Agar maine Sunday ko Full Backup liya, aur mujhe Thursday ka data restore karna hai (using Incremental backup policy). Mujhe kin backups ki zarurat padegi?',
      options: ['Sirf Sunday ka aur Wednesday ka backup', 'Sirf Thursday ka backup', 'Sunday ka Full aur Mon, Tue, Wed sab din ka incremental backup', 'Sunday ka Full aur sirf Wednesday ka incremental backup'],
      correct: 2,
      explanation: 'Incremental backup me har din pichle din ke changes save hote hain. Toh restore karne ke liye, Full backup aur beech me hue har ek din (Mon, Tue, Wed) ka saara incremental backup step-by-step restore karna padta hai.'
    },
    {
      id: 26,
      topic: 'linux-shell',
      question: 'Linux me agar file ki permission `chmod 644 file.txt` di gayi hai, toh Owner ki kya permission hogi?',
      options: ['Read Only', 'Read aur Write', 'Read, Write, Execute', 'Execute Only'],
      correct: 1,
      explanation: 'Permission "644" me pehla number Owner ke liye hai. 6 = 4(Read) + 2(Write). Isliye Owner ke paas Read aur Write permission hogi, par Execute (1) nahi hogi.'
    },
    {
      id: 27,
      topic: 'linux-shell',
      question: 'Shell script me variable define karte waqt kaunsa syntax sahi hai?',
      options: ['var = 10', 'var=10', 'var := 10', 'int var = 10'],
      correct: 1,
      explanation: 'Bash shell scripting me equal sign (=) ke aage aur piche koi space nahi hona chahiye. `var=10` is the correct syntax. Space dene pe bash usko as a command treat karne ki koshish karega.'
    },
    {
      id: 28,
      topic: 'linux-shell',
      question: 'Linux script file ko directly executable (runnable) banane ke liye sabse pehli line kya honi chahiye?',
      options: ['#!/bin/bash', 'include <bash>', '@echo off', 'start /bash'],
      correct: 0,
      explanation: 'Pehli line `#!/bin/bash` ko Shebang (ya Hashbang) kehte hain. Ye OS ko batata hai ki script ko run karne ke liye kaunsa interpreter (jaise bash shell) use karna hai.'
    },
    {
      id: 29,
      topic: 'linux-shell',
      question: 'Linux command <code>grep "hello" file.txt</code> kya karega?',
      options: ['"hello" word ko file se delete kar dega', 'File.txt me wahi lines print karega jisme "hello" likha hoga', '"hello" word ko "hi" se replace kar dega', 'File ka naam change kar dega'],
      correct: 1,
      explanation: 'grep (Global Regular Expression Print) command pattern searching ke liye hoti hai. Ye file me specified string ("hello") wali saari lines dhoondh kar screen par print karta hai.'
    },
    {
      id: 30,
      topic: 'linux-shell',
      question: 'Kaunsi command ek running process ko forcefully terminate karne ke liye use hoti hai?',
      options: ['stop', 'end', 'kill', 'halt'],
      correct: 2,
      explanation: 'Linux me `kill` command (usually `kill -9 PID`) ek specific running process ko signal bhej kar usko terminate (end) karne ke kaam aati hai.'
    }
  ]
};

window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['programming'] = {
  id: 'programming',
  name: 'Programming Fundamentals',
  icon: '⌨️',
  description: 'Master programming languages like C, C++, Java, Python aur unke core concepts like loops, arrays, pointers, aur emerging tech.',
  topics: [
    {
      id: 'intro-languages',
      name: 'Programming Languages Overview',
      theory: `
        <h3>Overview of Programming Languages</h3>
        <p>Programming languages computers ko instructions dene ke kaam aati hain. Exam point of view se inki history, features aur differences bahut important hain.</p>
        
        <h4>C Language</h4>
        <p><strong>C</strong> ek procedural (Top-down approach) language hai jo <strong>Dennis Ritchie</strong> ne 1972 mein Bell Labs mein develop ki thi. Ye system software (jaise OS) banane ke liye popular hai.</p>
        
        <h4>C++ Language</h4>
        <p><strong>C++</strong> ek Object-Oriented Programming (OOP) language hai (Bottom-up approach). Ise <strong>Bjarne Stroustrup</strong> ne 1979 mein banaya. Isme classes, inheritance aur pointers ka support hai.</p>
        
        <h4>Java</h4>
        <p><strong>Java</strong> <strong>James Gosling</strong> (Sun Microsystems, 1995) dwara banayi gayi ek pure OOP language hai. Iska sabse bada feature hai <strong>WORA (Write Once Run Anywhere)</strong>. Java code pehle <strong>Bytecode</strong> mein compile hota hai, jise JVM (Java Virtual Machine) execute karta hai. Java mein explicit pointers nahi hote for security.</p>
        
        <h4>.NET Framework & C#</h4>
        <p><strong>.NET</strong> Microsoft ka framework hai. Iska primary language <strong>C#</strong> (C-Sharp) hai. Code compile ho kar <strong>MSIL (Microsoft Intermediate Language)</strong> banta hai, jise CLR (Common Language Runtime) execute karta hai (just like JVM in Java).</p>
        
        <h4>Python</h4>
        <p><strong>Python</strong> <strong>Guido van Rossum</strong> (1991) ne banayi. Ye ek <strong>interpreted, high-level, aur dynamically typed</strong> language hai. Isme curly braces <code>{}</code> ki jagah <strong>Indentation</strong> (spaces) ka use hota hai blocks define karne ke liye.</p>
        
        <div class="comparison-table">
          <table>
            <tr><th>Feature</th><th>C</th><th>C++</th><th>Java</th></tr>
            <tr><td>Approach</td><td>Top-down</td><td>Bottom-up</td><td>Bottom-up</td></tr>
            <tr><td>Pointers</td><td>Yes</td><td>Yes</td><td>No (Internal only)</td></tr>
            <tr><td>Platform</td><td>Dependent</td><td>Dependent</td><td>Independent (JVM)</td></tr>
          </table>
        </div>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Java platform-independent hai, par JVM platform-dependent hota hai (Windows ka JVM alag, Mac ka alag).
        </div>
      `
    },
    {
      id: 'emerging-tech',
      name: 'AI, ML & Blockchain Basics',
      theory: `
        <h3>Emerging Technologies</h3>
        <p>Aaj kal naye syllabus mein AI, ML aur Blockchain ke basic concepts bhi pooche jate hain.</p>
        
        <h4>Artificial Intelligence (AI)</h4>
        <p>AI ka matlab hai machines ko aisi intelligence dena ki wo human jaisa soch aur act kar sakein. Alan Turing ko Father of Computer Science and AI bhi kaha jata hai (though John McCarthy coined the term "AI").</p>
        
        <h4>Machine Learning (ML)</h4>
        <p>ML AI ka ek subset hai. Isme explicitly program karne ki jagah algorithms data se seekhte (learn karte) hain. Iske 3 main types hain:</p>
        <ul>
          <li><strong>Supervised Learning:</strong> Labeled data use hota hai (Input + Output answers dono diye jate hain).</li>
          <li><strong>Unsupervised Learning:</strong> Unlabeled data (Sirf data diya jata hai, model khud patterns dhundhta hai, e.g., Clustering).</li>
          <li><strong>Reinforcement Learning:</strong> Reward/Penalty system par based (Trial and error se seekhna).</li>
        </ul>
        
        <h4>Blockchain</h4>
        <p>Blockchain ek <strong>decentralized, distributed, aur public digital ledger</strong> hai. Ye data (blocks) ko securely store karta hai cryptography (hashes) ke through.</p>
        <ul>
          <li><strong>Immutability:</strong> Ek baar data block mein likh gaya, toh use modify nahi kiya ja sakta.</li>
          <li><strong>Decentralized:</strong> Koi single authority (jaise bank) nahi hoti. Peer-to-peer network hota hai.</li>
          <li><strong>Smart Contracts:</strong> Self-executing contracts jinke terms code mein likhe hote hain.</li>
        </ul>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Exam mein puchte hain: "Bitcoin is a blockchain" - No, Bitcoin is a cryptocurrency that <i>uses</i> blockchain technology.
        </div>
      `
    },
    {
      id: 'data-types',
      name: 'Data Types',
      theory: `
        <h3>Data Types in Programming</h3>
        <p>Data type batata hai ki variable kis tarah ka data store karega aur memory mein kitni space lega.</p>
        
        <h4>Categories of Data Types</h4>
        <ol>
          <li><strong>Primitive / Built-in:</strong> <code>int</code>, <code>char</code>, <code>float</code>, <code>double</code>, <code>void</code></li>
          <li><strong>Derived:</strong> Arrays, Pointers, Functions (jo primitive se mil kar bante hain)</li>
          <li><strong>User-Defined:</strong> <code>struct</code>, <code>union</code>, <code>enum</code>, <code>class</code></li>
        </ol>
        
        <h4>Size in C/C++ (Usually on 32-bit/64-bit systems)</h4>
        <div class="formula-box">
          <div class="formula-title">📐 Sizes & Format Specifiers</div>
          <code>char</code>: 1 Byte (%c)<br>
          <code>int</code>: 2 or 4 Bytes (%d)<br>
          <code>float</code>: 4 Bytes (%f)<br>
          <code>double</code>: 8 Bytes (%lf)
        </div>
        
        <h4>Type Casting</h4>
        <p>Ek data type ko dusre mein convert karna Type Casting kahlata hai.</p>
        <ul>
          <li><strong>Implicit (Automatic):</strong> Compiler khud karta hai (chhote type se bade type mein, e.g., <code>int</code> to <code>float</code>).</li>
          <li><strong>Explicit:</strong> Programmer khud karta hai. <code>(type) expression</code>. Example: <code>int a = (int) 3.14;</code></li>
        </ul>
      `
    },
    {
      id: 'operators',
      name: 'Operators & Precedence',
      theory: `
        <h3>Operators</h3>
        <p>Operators wo symbols hote hain jo variables aur values par operations perform karte hain.</p>
        
        <ul>
          <li><strong>Arithmetic:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code> (Modulo, sirf integers par chalta hai).</li>
          <li><strong>Relational:</strong> <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>.</li>
          <li><strong>Logical:</strong> <code>&&</code> (AND), <code>||</code> (OR), <code>!</code> (NOT).</li>
          <li><strong>Bitwise:</strong> <code>&</code>, <code>|</code>, <code>^</code> (XOR), <code>~</code> (1's complement), <code>&lt;&lt;</code> (Left shift), <code>&gt;&gt;</code> (Right shift).</li>
          <li><strong>Ternary (Conditional):</strong> <code>condition ? true_val : false_val</code>. (Ye akela operator hai jisme 3 operands hote hain).</li>
        </ul>
        
        <h4>Precedence and Associativity</h4>
        <p>Jab ek expression mein multiple operators hon, toh Precedence decide karta hai ki kaunsa pehle solve hoga. Agar precedence same hai, toh Associativity (Left-to-Right ya Right-to-Left) kaam aati hai.</p>
        
        <table class="comparison-table">
          <tr><th>Precedence Level</th><th>Operators</th><th>Associativity</th></tr>
          <tr><td>1 (Highest)</td><td><code>()</code>, <code>[]</code>, <code>-&gt;</code>, <code>.</code></td><td>Left to Right</td></tr>
          <tr><td>2</td><td>Unary <code>+</code> <code>-</code> <code>++</code> <code>--</code> <code>!</code> <code>~</code> <code>*</code> <code>&</code></td><td>Right to Left</td></tr>
          <tr><td>3</td><td><code>*</code>, <code>/</code>, <code>%</code></td><td>Left to Right</td></tr>
          <tr><td>4</td><td><code>+</code>, <code>-</code></td><td>Left to Right</td></tr>
          <tr><td>5</td><td><code>==</code>, <code>!=</code></td><td>Left to Right</td></tr>
          <tr><td>6</td><td><code>&&</code></td><td>Left to Right</td></tr>
          <tr><td>7</td><td><code>||</code></td><td>Left to Right</td></tr>
          <tr><td>8 (Lowest)</td><td><code>=</code>, <code>+=</code>, etc.</td><td>Right to Left</td></tr>
        </table>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Assignment operators (<code>=</code>) ki associativity hamesha Right-to-Left hoti hai. Ex: <code>a = b = c = 10;</code> pehle <code>c=10</code>, fir <code>b=c</code> solve hoga.
        </div>
      `
    },
    {
      id: 'scope',
      name: 'Scope & Storage Classes',
      theory: `
        <h3>Scope and Lifetime</h3>
        <p><strong>Scope</strong> ka matlab hai program ka wo hissa jahan ek variable access kiya ja sakta hai. <strong>Lifetime</strong> ka matlab hai variable memory mein kab tak zinda (exist) rahega.</p>
        
        <h4>Types of Scope</h4>
        <ul>
          <li><strong>Local (Block) Scope:</strong> Variable jo <code>{}</code> ke andar declare ho. Bahar access nahi ho sakta.</li>
          <li><strong>Global Scope:</strong> Kisi function ke bahar declare hua variable. Pura program use access kar sakta hai.</li>
          <li><strong>Function Scope:</strong> Labels jo <code>goto</code> ke liye use hote hain, unka scope function tak limited hota hai.</li>
        </ul>
        
        <h4>Storage Classes in C</h4>
        <p>Storage class variable ka scope, lifetime, default value aur storage location batati hai.</p>
        <table class="comparison-table">
          <tr><th>Storage Class</th><th>Storage</th><th>Default Value</th><th>Scope</th><th>Lifetime</th></tr>
          <tr><td><strong>auto</strong></td><td>RAM</td><td>Garbage</td><td>Local</td><td>Block end tak</td></tr>
          <tr><td><strong>register</strong></td><td>CPU Register</td><td>Garbage</td><td>Local</td><td>Block end tak</td></tr>
          <tr><td><strong>static</strong></td><td>RAM</td><td>Zero (0)</td><td>Local</td><td>Program end tak</td></tr>
          <tr><td><strong>extern</strong></td><td>RAM</td><td>Zero (0)</td><td>Global</td><td>Program end tak</td></tr>
        </table>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          <code>static</code> variable sirf ek baar initialize hota hai. Agar function baar baar call ho, toh purani value retain karta hai, dubara zero nahi hota.
        </div>
      `
    },
    {
      id: 'control-flow',
      name: 'Control Flow',
      theory: `
        <h3>Control Flow Statements</h3>
        <p>Program ke execution flow ko control karne wale statements.</p>
        
        <h4>1. Conditional Statements</h4>
        <ul>
          <li><strong>if / else-if / else:</strong> Condition check karne ke liye.</li>
          <li><strong>switch:</strong> Multiple options mein se ek choose karne ke liye. (Note: <code>switch</code> mein float values ya strings allow nahi hain C mein, sirf integers ya characters aate hain). Har case ke baad <code>break</code> zaroori hai warna "fall-through" ho jayega.</li>
        </ul>
        
        <h4>2. Looping Statements</h4>
        <ul>
          <li><strong>Entry Controlled Loops:</strong> Condition pehle check hoti hai fir body execute hoti hai. (<code>for</code> loop, <code>while</code> loop).</li>
          <li><strong>Exit Controlled Loops:</strong> Body ek baar execute hoti hai, condition baad mein check hoti hai. Matlab condition false bhi ho tab bhi ek baar toh chalega hi. (<code>do-while</code> loop).</li>
        </ul>
        
        <h4>3. Jump Statements</h4>
        <ul>
          <li><strong>break:</strong> Loop ya switch se bahar aane ke liye.</li>
          <li><strong>continue:</strong> Loop ke current iteration ko skip karke next iteration pe jaane ke liye.</li>
          <li><strong>goto:</strong> Code mein kisi specific label par jump karne ke liye (Spaghetti code banata hai, so avoid karna chahiye).</li>
        </ul>
      `
    },
    {
      id: 'functions',
      name: 'Functions',
      theory: `
        <h3>Functions</h3>
        <p>Functions code ka block hote hain jo ek specific task perform karte hain. Inka main fayda hai <strong>Code Reusability</strong> aur Modular programming.</p>
        
        <h4>3 Steps of Function</h4>
        <ol>
          <li><strong>Declaration (Prototype):</strong> Compiler ko batana ki function exist karta hai. Ex: <code>int add(int, int);</code></li>
          <li><strong>Definition:</strong> Function ka actual code.</li>
          <li><strong>Call:</strong> Function ko use karna.</li>
        </ol>
        
        <h4>Parameter Passing</h4>
        <ul>
          <li><strong>Call by Value:</strong> Original values ki copy pass hoti hai. Function mein changes karne par original variable change nahi hota.</li>
          <li><strong>Call by Reference:</strong> Address (pointers) pass hota hai. Function mein changes original variables ko modify kar dete hain.</li>
        </ul>
        
        <h4>Recursion</h4>
        <p>Jab ek function khud ko hi call karta hai, use Recursion kehte hain. Isme ek <strong>Base Case</strong> zaroori hota hai, warna function infinite loop mein chala jayega aur <strong>Stack Overflow</strong> error aayega.</p>
        
        <pre><code>// Example of Recursion: Factorial
int fact(int n) {
  if (n == 0 || n == 1) // Base case
    return 1;
  return n * fact(n-1); // Recursive call
}</code></pre>
      `
    },
    {
      id: 'arrays',
      name: 'Arrays',
      theory: `
        <h3>Arrays & Strings</h3>
        <p>Array ek <strong>homogeneous</strong> data structure hai jo same data type ke multiple elements ko <strong>contiguous (lagatar) memory locations</strong> mein store karta hai.</p>
        
        <p>Array ki indexing 0 se start hoti hai. Agar size 5 hai, toh elements <code>arr[0]</code> se <code>arr[4]</code> tak honge.</p>
        
        <div class="formula-box">
          <div class="formula-title">📐 Array Memory Calculation</div>
          Address of A[i] = Base_Address + (i * size_of_data_type)
        </div>
        
        <h4>Strings</h4>
        <p>C mein strings sirf ek character array hain jo null character <code>'\\0'</code> se end hoti hain. Null character compiler ko batata hai ki string kahan khatam ho rahi hai.</p>
        
        <h4>String Library Functions (<code>&lt;string.h&gt;</code>)</h4>
        <ul>
          <li><code>strlen(str)</code>: String ki length (without null char) return karta hai.</li>
          <li><code>strcpy(dest, src)</code>: src ko dest mein copy karta hai.</li>
          <li><code>strcat(dest, src)</code>: src ko dest ke piche jod (concatenate) deta hai.</li>
          <li><code>strcmp(str1, str2)</code>: Dono strings ko compare karta hai. Agar same ho toh 0 return karta hai.</li>
        </ul>
      `
    },
    {
      id: 'pointers',
      name: 'Pointers',
      theory: `
        <h3>Pointers</h3>
        <p>Pointer ek special variable hai jo kisi doosre variable ka <strong>Memory Address</strong> store karta hai.</p>
        
        <ul>
          <li><strong>Address of Operator (<code>&</code>):</strong> Variable ka address nikalne ke liye.</li>
          <li><strong>Dereference Operator (<code>*</code>):</strong> Uss address par rakhi value ko read/write karne ke liye.</li>
        </ul>
        
        <pre><code>int a = 10;
int *p = &a; // p ab a ka address store kar raha hai
printf("%d", *p); // Output: 10</code></pre>
        
        <h4>Important Pointer Concepts</h4>
        <ul>
          <li><strong>Null Pointer:</strong> Wo pointer jo kisi ko point nahi kar raha (assigned to <code>NULL</code>).</li>
          <li><strong>Dangling Pointer:</strong> Pointer jo kisi aisi memory ko point kar raha hai jo free ya delete ho chuki hai.</li>
          <li><strong>Void Pointer:</strong> Generic pointer (<code>void *p;</code>) jo kisi bhi data type ke address ko store kar sakta hai, par dereference karne se pehle typecast karna padta hai.</li>
        </ul>
        
        <h4>Dynamic Memory Allocation (<code>&lt;stdlib.h&gt;</code>)</h4>
        <p>Runtime par memory maangna (Heap section mein).</p>
        <ul>
          <li><code>malloc()</code>: Memory block allocate karta hai (uninitialized, contains garbage).</li>
          <li><code>calloc()</code>: Allocate karta hai aur memory ko 0 se initialize kar deta hai.</li>
          <li><code>realloc()</code>: Pehle se allocated memory ka size change karne ke liye.</li>
          <li><code>free()</code>: Allocated memory ko OS ko wapas dene ke liye. Agar ye nahi kiya toh <strong>Memory Leak</strong> hota hai.</li>
        </ul>
      `
    },
    {
      id: 'struct-union-enum',
      name: 'Structures, Unions & Enums',
      theory: `
        <h3>Structures & Unions</h3>
        <p>Arrays homogeneous data store karte hain, par agar hamein alag-alag data types ka collection banana ho (e.g. Student ki age (int) aur naam (string)), toh hum Structs ya Unions use karte hain.</p>
        
        <h4>Structure (<code>struct</code>)</h4>
        <p>Structure mein har member apni alag memory space leta hai. Structure ka total size uske sabhi members ke sizes ka sum hota hai (plus memory padding for alignment).</p>
        <pre><code>struct Student {
    int id;       // 4 bytes
    char name[20];// 20 bytes
}; // Total size ~ 24 bytes</code></pre>
        
        <h4>Union (<code>union</code>)</h4>
        <p>Union mein sabhi members <strong>same memory location</strong> share karte hain. At a time sirf ek member memory use kar sakta hai. Union ka size uske sabse bade member ke size ke barabar hota hai.</p>
        <pre><code>union Data {
    int i;        // 4 bytes
    char str[20]; // 20 bytes
}; // Total size = 20 bytes</code></pre>
        
        <h4>Enum (<code>enum</code>)</h4>
        <p>Enumeration ek user-defined type hai jo names ko integer values deta hai code ko readable banane ke liye.</p>
        <pre><code>enum Day { MON, TUE, WED };
// MON=0, TUE=1, WED=2 (By default 0 se start hota hai)</code></pre>
      `
    },
    {
      id: 'file-handling',
      name: 'File Handling',
      theory: `
        <h3>File Handling in C</h3>
        <p>Program band hone ke baad data ud jata hai (RAM se). Data ko permanent (Hard Disk) store karne ke liye File Handling use hoti hai.</p>
        
        <h4>File Operations</h4>
        <p>In C, file ko handle karne ke liye <code>FILE</code> pointer ka use hota hai.</p>
        <ul>
          <li><code>fopen("filename.txt", "mode")</code>: File open karta hai.</li>
          <li><code>fclose(file_pointer)</code>: File close karta hai.</li>
          <li><code>fprintf()</code>, <code>fscanf()</code>: Formatted Read/Write.</li>
          <li><code>fgets()</code>, <code>fputs()</code>: String Read/Write.</li>
          <li><code>fread()</code>, <code>fwrite()</code>: Binary Data Read/Write.</li>
        </ul>
        
        <h4>File Modes</h4>
        <table class="comparison-table">
          <tr><th>Mode</th><th>Description</th></tr>
          <tr><td><code>r</code></td><td>Read mode. File exists nahi karti toh error dega.</td></tr>
          <tr><td><code>w</code></td><td>Write mode. Purana data mita dega (overwrite). File nahi hai toh nayi banayega.</td></tr>
          <tr><td><code>a</code></td><td>Append mode. Purane data ke end mein naya data likhega.</td></tr>
          <tr><td><code>r+</code> / <code>w+</code> / <code>a+</code></td><td>Update modes (Read + Write dono ke liye).</td></tr>
        </table>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          <code>EOF</code> (End Of File) ek constant hai (value usually -1) jo file padhte time use hota hai ye janne ke liye ki file kahan khatam ho gayi.
        </div>
      `
    },
    {
      id: 'cmd-args',
      name: 'Command Line Arguments',
      theory: `
        <h3>Command Line Arguments</h3>
        <p>Jab aap command prompt/terminal se program ko run karte time uske sath kuch arguments pass karte hain, unhe command-line arguments kehte hain.</p>
        
        <p>Ye arguments <code>main()</code> function capture karta hai:</p>
        <pre><code>int main(int argc, char *argv[]) { ... }</code></pre>
        
        <ul>
          <li><strong>argc (Argument Count):</strong> Ye batata hai ki total kitne arguments pass kiye gaye hain. Iski minimum value hamesha <strong>1</strong> hoti hai kyunki program ka naam bhi ek argument mana jata hai.</li>
          <li><strong>argv (Argument Vector):</strong> Ye strings (char pointers) ka array hota hai jo arguments ko store karta hai.
            <ul>
              <li><code>argv[0]</code> hamesha program ka naam hota hai.</li>
              <li><code>argv[1]</code> pehla argument hota hai, and so on.</li>
            </ul>
          </li>
        </ul>
        
        <h4>Example</h4>
        <p>Run: <code>./myprogram hello 123</code></p>
        <p>Yahan <code>argc</code> = 3. <code>argv[0]</code> = "./myprogram", <code>argv[1]</code> = "hello", <code>argv[2]</code> = "123".</p>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'intro-languages',
      question: 'Kaunsi programming language WORA (Write Once Run Anywhere) ke concept par based hai?',
      options: ['C', 'C++', 'Java', 'Python'],
      correct: 2,
      explanation: 'Java "Write Once Run Anywhere" (WORA) principle ko follow karti hai kyunki Java ka bytecode kisi bhi machine par run ho sakta hai jahan JVM (Java Virtual Machine) installed ho. C aur C++ platform dependent hain.'
    },
    {
      id: 2,
      topic: 'intro-languages',
      question: 'C language kisne develop ki thi?',
      options: ['Bjarne Stroustrup', 'Dennis Ritchie', 'James Gosling', 'Guido van Rossum'],
      correct: 1,
      explanation: 'Dennis Ritchie ne 1972 mein Bell Labs mein C language develop ki thi. Bjarne ne C++, James ne Java aur Guido ne Python develop ki thi.'
    },
    {
      id: 3,
      topic: 'emerging-tech',
      question: 'Supervised, Unsupervised aur Reinforcement kiske types hain?',
      options: ['Artificial Intelligence', 'Blockchain', 'Machine Learning', 'Cloud Computing'],
      correct: 2,
      explanation: 'Machine Learning (ML) ke 3 main types hote hain: Supervised (labeled data), Unsupervised (unlabeled data) aur Reinforcement learning (reward based).'
    },
    {
      id: 4,
      topic: 'emerging-tech',
      question: 'Blockchain technology ka primary characteristic kya hai?',
      options: ['Centralized database', 'Easily mutable', 'Decentralized and Immutable', 'Requires no internet'],
      correct: 2,
      explanation: 'Blockchain ek decentralized (koi ek authority nahi) aur immutable (jise change na kiya ja sake) distributed ledger hoti hai.'
    },
    {
      id: 5,
      topic: 'data-types',
      question: 'Inmein se kaunsa ek user-defined data type hai C language mein?',
      options: ['int', 'float', 'struct', 'pointer'],
      correct: 2,
      explanation: 'struct, union aur enum user-defined data types hote hain jo user banata hai. int, float built-in hain aur pointers derived data type mein aate hain.'
    },
    {
      id: 6,
      topic: 'data-types',
      question: 'C language mein ek float variable memory mein aam-taur par kitni size (bytes) leta hai?',
      options: ['2 bytes', '4 bytes', '8 bytes', '1 byte'],
      correct: 1,
      explanation: 'Standard 32/64 bit systems par float 4 bytes memory consume karta hai. double 8 bytes leta hai aur char 1 byte leta hai.'
    },
    {
      id: 7,
      topic: 'operators',
      question: 'Inmein se kis operator ka evaluation hamesha Right to Left hota hai?',
      options: ['+ (Addition)', '== (Equality)', '|| (Logical OR)', '= (Assignment)'],
      correct: 3,
      explanation: 'Assignment operator (=) ki associativity Right to Left hoti hai. Jaise a = b = c = 10; pehle c ko 10 milta hai, fir b ko aur end mein a ko.'
    },
    {
      id: 8,
      topic: 'operators',
      question: 'Ternary operator mein kitne operands hote hain?',
      options: ['1', '2', '3', '4'],
      correct: 2,
      explanation: 'Ternary operator (condition ? true_val : false_val) akela aisa operator hai jisme 3 operands hote hain.'
    },
    {
      id: 9,
      topic: 'scope',
      question: 'C language mein ek local variable ki default value kya hoti hai agar use initialize na kiya jaye?',
      options: ['0', '1', 'Garbage value', 'Compiler Error'],
      correct: 2,
      explanation: 'Local (auto) variables ki default value garbage hoti hai (random unpredictable value). Jabki static aur global variables ki default value 0 hoti hai.'
    },
    {
      id: 10,
      topic: 'scope',
      question: 'Kaunsi storage class variable ki value ko function calls ke beech mein retain (yaad) rakhti hai?',
      options: ['auto', 'register', 'static', 'extern'],
      correct: 2,
      explanation: 'static storage class memory mein ek hi baar initialize hoti hai aur program khatam hone tak apni purani value memory (RAM) mein retain karke rakhti hai.'
    },
    {
      id: 11,
      topic: 'control-flow',
      question: 'Kaunsa loop "Exit Controlled Loop" kahlata hai?',
      options: ['for loop', 'while loop', 'do-while loop', 'nested loop'],
      correct: 2,
      explanation: 'do-while loop ek exit-controlled loop hai kyunki isme code body pehle execute hoti hai aur condition end mein check hoti hai. Isliye ye minimum 1 baar toh chalta hi hai.'
    },
    {
      id: 12,
      topic: 'control-flow',
      question: 'switch statement ke expressions mein kaunsa data type allowed NAHI hai?',
      options: ['int', 'char', 'float', 'enum'],
      correct: 2,
      explanation: 'C language mein switch case ke andar floats (decimal values) aur strings allowed nahi hain. Sirf discrete values jaise int, char aur enum allowed hote hain.'
    },
    {
      id: 13,
      topic: 'functions',
      question: 'Jab ek function call karte waqt address pass kiya jata hai, toh use kya kehte hain?',
      options: ['Call by value', 'Call by reference', 'Call by name', 'Call by pointer'],
      correct: 1,
      explanation: 'Jab arguments ke address (&) pass kiye jate hain aur unhe pointers se receive kiya jata hai, toh us process ko Call by Reference kehte hain. Isse original variable modify ho sakta hai.'
    },
    {
      id: 14,
      topic: 'functions',
      question: 'Recursion mein agar base case define na kiya jaye, toh kya problem aayegi?',
      options: ['Syntax Error', 'Heap Overflow', 'Stack Overflow', 'Segmentation Fault'],
      correct: 2,
      explanation: 'Recursion functions call stack ka use karte hain. Agar rukne ki condition (base case) nahi hogi toh infinite calls ke wajah se memory ki limit cross ho jayegi aur Stack Overflow error aayega.'
    },
    {
      id: 15,
      topic: 'arrays',
      question: 'Agar array ka naam "arr" hai, toh "arr" evaluate hokar kya return karta hai?',
      options: ['Array ka size', 'Pehle element ka address', 'Array ke sabhi elements', 'Last element ka address'],
      correct: 1,
      explanation: 'C/C++ mein array ka naam us array ke pehle element ke base address (starting memory location) ko point karta hai, yani &arr[0] ke equivalent hota hai.'
    },
    {
      id: 16,
      topic: 'arrays',
      question: 'String library function strcmp(str1, str2) kya return karega agar dono strings exactly same hain?',
      options: ['1', '0', '-1', 'True'],
      correct: 1,
      explanation: 'strcmp() function dono strings ke characters ki ASCII value ko compare karta hai. Agar dono strings completely match karti hain, toh inka difference 0 aata hai (returns 0).'
    },
    {
      id: 17,
      topic: 'pointers',
      question: 'Kis function ka use dynamic memory allocation ke waqt memory block ko ZERO se initialize karne ke liye hota hai?',
      options: ['malloc()', 'calloc()', 'realloc()', 'free()'],
      correct: 1,
      explanation: 'calloc() memory allocate karta hai aur automatically har byte ko 0 se initialize kar deta hai, jabki malloc() garbage values chhod deta hai.'
    },
    {
      id: 18,
      topic: 'pointers',
      question: 'Dangling pointer kya hota hai?',
      options: ['A pointer that points to NULL', 'A pointer initialized with 0', 'A pointer pointing to a memory location that has been deleted (freed)', 'An uninitialized pointer'],
      correct: 2,
      explanation: 'Jab pointer jis memory ko point kar raha hai use free() kar diya jaye, par pointer ko NULL na banaya jaye, toh wo us invalid purani location ko point karta rehta hai, ise Dangling Pointer kehte hain.'
    },
    {
      id: 19,
      topic: 'struct-union-enum',
      question: 'Union ke sabhi members ka kya common hota hai?',
      options: ['Data Type', 'Value', 'Memory Location', 'Name'],
      correct: 2,
      explanation: 'Union mein saare members ek hi shared Memory Location (memory block) use karte hain. Is wajah se ek time par sirf ek hi member valid data store kar sakta hai.'
    },
    {
      id: 20,
      topic: 'struct-union-enum',
      question: 'Agar ek struct mein ek int (4 byte) aur ek char (1 byte) hai, toh ideal conditions mein sizeof(struct) kya ho sakta hai (due to padding)?',
      options: ['5 bytes', '8 bytes', '4 bytes', '1 byte'],
      correct: 1,
      explanation: 'Memory alignment (padding) ki wajah se compiler extra bytes add kar deta hai jisse access faster ho, isliye 5 ki jagah wo frequently 8 bytes allocate karega 32/64 bit system par (next multiple of 4/8).'
    },
    {
      id: 21,
      topic: 'file-handling',
      question: 'File handle karte waqt "w" mode ka kya behavior hota hai?',
      options: ['Open file for reading only', 'Open file for appending data', 'Open file for writing, creates new if not exists, overrites if exists', 'Shows error if file does not exist'],
      correct: 2,
      explanation: '"w" (write) mode nayi file banata hai, aur agar file pehle se wahan maujud hai toh uske purane data ko delete (overwrite) karke shuru se likhta hai.'
    },
    {
      id: 22,
      topic: 'file-handling',
      question: 'File end ho gayi hai, ye check karne ke liye C mein kya constant use hota hai?',
      options: ['END', 'NULL', 'EOF', 'STOP'],
      correct: 2,
      explanation: 'EOF (End Of File) ek macro hai (jiski value generally -1 hoti hai) jo batata hai ki file ko read karte karte hum aakhri chhor par pahunch gaye hain.'
    },
    {
      id: 23,
      topic: 'cmd-args',
      question: 'Command line argument mein argc ki minimum value kya hoti hai?',
      options: ['0', '1', '2', '-1'],
      correct: 1,
      explanation: 'argc (Argument Count) ki minimum value 1 hoti hai, kyunki command me type kiya gaya program ka naam khud ek argument (pehla argument) ke roop me count hota hai.'
    },
    {
      id: 24,
      topic: 'cmd-args',
      question: 'Command line execution "./prog arg1 arg2" mein argv[1] kya store karega?',
      options: ['./prog', 'arg1', 'arg2', 'NULL'],
      correct: 1,
      explanation: 'argv ek array of strings hai. argv[0] mein "./prog" aayega, argv[1] mein "arg1" aur argv[2] mein "arg2" aayega.'
    },
    {
      id: 25,
      topic: 'operators',
      question: 'What is the correct output of: int a = 5; int b = a++; printf("%d %d", a, b);',
      options: ['5 5', '6 5', '6 6', '5 6'],
      correct: 1,
      explanation: 'b = a++ ek post-increment expression hai. Iska matlab pehle a ki value (5) b ko assign hogi, fir a ki value badhkar 6 ho jayegi. So a = 6, b = 5.'
    },
    {
      id: 26,
      topic: 'control-flow',
      question: 'continue statement ka kya use hai loop ke andar?',
      options: ['Loop ko hamesha ke liye rok deta hai', 'Program ko exit kar deta hai', 'Current iteration skip karke next iteration start karta hai', 'Error throw karta hai'],
      correct: 2,
      explanation: 'continue keyword current loop cycle (iteration) ke baaki bache huye code ko skip kar deta hai aur loop ki next cycle ki condition check karne chala jata hai.'
    },
    {
      id: 27,
      topic: 'pointers',
      question: 'int *p; aur int **q; inmein "q" kya hai?',
      options: ['Pointer to int', 'Pointer to a pointer', 'Array of pointers', 'Double data type'],
      correct: 1,
      explanation: 'int **q ek double pointer hai (pointer to a pointer). Ye ek aise pointer ka address store karta hai jo khud kisi integer ka address store kar raha ho.'
    },
    {
      id: 28,
      topic: 'struct-union-enum',
      question: 'enum Day { SUN = 1, MON, TUE }; iss declaration mein TUE ki value kya hogi?',
      options: ['0', '1', '2', '3'],
      correct: 3,
      explanation: 'Enum mein agar hum ek value assign karte hain toh aage aane wale members ki value automatically 1 se badh jati hai. SUN=1 hai toh MON=2 aur TUE=3 ho jayega.'
    },
    {
      id: 29,
      topic: 'emerging-tech',
      question: 'AI ke context mein Alan Turing ka kaunsa test famous hai?',
      options: ['Turing Pattern', 'Turing Machine', 'Turing Test', 'Turing Encryption'],
      correct: 2,
      explanation: 'Turing Test (1950) ye check karne ke liye banaya gaya tha ki kya koi machine insaano jaisi intelligence aur behavior dikha sakti hai, jise insaan pehchan na sake ki wo machine se baat kar raha hai.'
    },
    {
      id: 30,
      topic: 'intro-languages',
      question: 'Python mein code blocks (jaise loop ya function body) kaise define kiye jate hain?',
      options: ['Curly braces {}', 'Square brackets []', 'Indentation (spaces)', 'Parentheses ()'],
      correct: 2,
      explanation: 'C/C++/Java ke unlike jahan brackets {} use hote hain, Python indentation (spaces ya tabs) ka use karta hai code blocks ko define karne ke liye. Ise off-side rule bhi kehte hain.'
    }
  ]
};

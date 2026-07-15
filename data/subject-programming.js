window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['programming'] = {
  id: 'programming',
  name: 'Programming Fundamentals',
  icon: '⌨️',
  description: 'C, C++, Java, .NET, Python, and Emerging Technologies ke concepts aur fundamentals.',
  topics: [
    {
      id: 'intro-pl',
      name: 'Introduction to Programming Languages',
      theory: `
        <h3>1. Programming Languages ke Generations</h3>
        <p>Programming languages ka vikas time ke sath alag-alag generations mein hua hai. Har nayi generation ne programming ko aasan aur hardware se zyada independent banaya hai. Is evolution ko mainly 5 generations mein classify kiya gaya hai:</p>
        
        <h4>First Generation (1GL): Machine Language</h4>
        <p>Yeh sabse lowest level ki language hai jo sirf binary numbers (0s aur 1s) samajhti hai. CPU direct instructions isi bhasha mein execute karta hai. Isme code likhna sabse mushkil tha kyunki programmer ko machine architecture ka deep knowledge hona zaroori tha. Yeh <strong>hardware-dependent</strong> hoti hai aur isme execution sabse fast hota hai kyunki koi translation ki zarurat nahi hoti.</p>
        
        <h4>Second Generation (2GL): Assembly Language</h4>
        <p>Binary codes ko yaad rakhna mushkil tha, isliye 2GL develop hui jisme <strong>Mnemonics</strong> (e.g., ADD, SUB, MOV) ka use hone laga. Yeh bhi hardware-dependent hai. Assembly language ko machine code mein convert karne ke liye <strong>Assembler</strong> namak system software ka use hota hai.</p>
        
        <h4>Third Generation (3GL): High-Level Languages (HLL)</h4>
        <p>In languages (jaise C, C++, Java, Pascal) mein English-like words aur mathematical symbols ka use kiya gaya. Isne programming ko user-friendly aur hardware-independent (portable) bana diya. 3GL code ko machine samajh nahi sakti, isliye inhe translate karne ke liye <strong>Compiler</strong> ya <strong>Interpreter</strong> ki zarurat padti hai.</p>
        
        <h4>Fourth Generation (4GL): Very High-Level Languages</h4>
        <p>Yeh languages non-procedural hoti hain, matlab programmer ko sirf yeh batana hota hai ki "Kya karna hai" (What to do), bajaye "Kaise karna hai" (How to do it). Database query languages jaise <strong>SQL</strong> (Structured Query Language) iska best example hain. Yeh applications ko jaldi develop karne (RAD) mein madad karti hain.</p>
        
        <h4>Fifth Generation (5GL): Artificial Intelligence Languages</h4>
        <p>Yeh languages AI, Neural Networks aur Expert Systems ke development mein use hoti hain. Inme logical constraint programming aur declarative syntax hota hai. <strong>PROLOG, LISP, aur Mercury</strong> iske pramukh examples hain.</p>

        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          1GL aur 2GL ko Low-Level Languages (LLL) kaha jata hai. 3GL, 4GL, 5GL ko High-Level Languages (HLL) maana jata hai.
        </div>

        <h3>2. Language Translators: Compiler vs Interpreter vs Assembler</h3>
        <p>High-level ya assembly code ko machine code mein badalne ke liye system software ki zarurat hoti hai, jinhe translators kehte hain.</p>
        <ul>
            <li><strong>Assembler:</strong> Assembly language (mnemonics) ko Machine language (0 & 1) mein translate karta hai.</li>
            <li><strong>Compiler:</strong> High-level language code (Source code) ko ek hi baar mein (in a single sweep) poora ka poora Object code (machine code) mein translate karta hai. Yeh errors ko ek list ke roop mein end mein show karta hai. (e.g., C, C++)</li>
            <li><strong>Interpreter:</strong> High-level language ko line-by-line padhta hai aur sath-sath execute karta hai. Agar kisi line mein error milti hai, toh execution wahi ruk jata hai jab tak error theek na ho. (e.g., Python, Ruby, PHP)</li>
        </ul>

        <table class="comparison-table">
          <tr>
            <th>Feature</th>
            <th>Compiler</th>
            <th>Interpreter</th>
          </tr>
          <tr>
            <td>Translation Method</td>
            <td>Translates the entire program at once.</td>
            <td>Translates one statement at a time.</td>
          </tr>
          <tr>
            <td>Execution Time</td>
            <td>Execution is much faster.</td>
            <td>Execution is slower due to line-by-line translation.</td>
          </tr>
          <tr>
            <td>Memory Requirement</td>
            <td>Requires more memory (creates an object file).</td>
            <td>Requires less memory (no intermediate object code).</td>
          </tr>
          <tr>
            <td>Error Detection</td>
            <td>Errors are displayed after analyzing the whole program. Debugging is hard.</td>
            <td>Displays error of each line one by one. Debugging is easier.</td>
          </tr>
          <tr>
            <td>Language Examples</td>
            <td>C, C++, Rust, Go</td>
            <td>Python, JavaScript, Ruby, PHP</td>
          </tr>
        </table>

        <h3>3. Linker and Loader</h3>
        <p>Compiler code ko object file (.obj) mein toh convert kar deta hai, lekin execute karne se pehle <strong>Linker</strong> aur <strong>Loader</strong> ka kaam aata hai.</p>
        <ul>
            <li><strong>Linker:</strong> Alag-alag object files aur library files (jaise printf ka code stdio.h se) ko aapas mein link karke ek single executable file (.exe) banata hai.</li>
            <li><strong>Loader:</strong> OS ka wo part hai jo executable file ko hard disk se uthakar Main Memory (RAM) mein load karta hai, taaki CPU use execute kar sake.</li>
        </ul>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Linker library functions ko object code ke sath jodta hai (combining multiple object files), jabki Loader program ko primary memory mein rakhta hai execution ke liye. Dono ka function hamesha dhyan se padhein!
        </div>
      `
    },
    {
      id: 'c-basics',
      name: 'C Language Basics',
      theory: `
        <h3>1. History and Features of C</h3>
        <p>C ek general-purpose, procedural, middle-level programming language hai. Ise <strong>Dennis Ritchie</strong> ne 1972 mein AT&T Bell Labs mein develop kiya tha. C ko Unix Operating System likhne ke liye banaya gaya tha. Yeh B language (BCPL) ka successor hai.</p>
        <p><strong>Features:</strong> C ek Structured Programming Language hai. Yeh fast, portable, aur extensible hai. Ise "Mother of all modern languages" bhi kaha jata hai.</p>

        <h3>2. C Tokens and Keywords</h3>
        <p>C program ki sabse choti individual unit ko <strong>Token</strong> kehte hain. C mein 6 types ke tokens hote hain: Keywords, Identifiers, Constants, Strings, Special Symbols, aur Operators.</p>
        <ul>
            <li><strong>Keywords:</strong> Yeh reserved words hote hain jinka meaning compiler ko pehle se pata hota hai. C89 standard mein total <strong>32 keywords</strong> hain (e.g., int, float, if, else, struct, typedef).</li>
            <li><strong>Identifiers:</strong> Variables, functions, arrays aadi ko diye gaye user-defined naam. Identifiers letter ya underscore (_) se shuru hone chahiye. (e.g., _age, marks1).</li>
        </ul>

        <h3>3. Data Types in C</h3>
        <p>Data types batate hain ki variable mein kis tarah ka data store hoga aur memory mein kitni jagah lega. Architecture ke hisaab se size badal sakti hai (mostly 32-bit aur 64-bit mein int 4 bytes leta hai, par 16-bit compiler like Turbo C mein 2 bytes leta hai).</p>
        
        <table class="comparison-table">
          <tr>
            <th>Data Type</th>
            <th>Size (Typical 32-bit OS)</th>
            <th>Format Specifier</th>
            <th>Range (Signed)</th>
          </tr>
          <tr>
            <td>char</td>
            <td>1 byte</td>
            <td>%c</td>
            <td>-128 to 127</td>
          </tr>
          <tr>
            <td>int</td>
            <td>4 bytes (2 in 16-bit)</td>
            <td>%d or %i</td>
            <td>-2,147,483,648 to 2,147,483,647</td>
          </tr>
          <tr>
            <td>float</td>
            <td>4 bytes</td>
            <td>%f</td>
            <td>6 decimal places precision</td>
          </tr>
          <tr>
            <td>double</td>
            <td>8 bytes</td>
            <td>%lf</td>
            <td>15 decimal places precision</td>
          </tr>
        </table>

        <h3>4. Variable Scope and Storage Classes</h3>
        <p>Storage class determine karti hai variable ki Scope, Visibility, Lifetime aur Default initial value.</p>
        <ul>
            <li><strong>auto:</strong> Default storage class for local variables. <em>Scope:</em> Local, <em>Default:</em> Garbage value, <em>Storage:</em> RAM.</li>
            <li><strong>register:</strong> Request compiler to store variable in CPU register for fast access. Agar register free nahi hai, toh auto jaisa behave karega. <em>Scope:</em> Local, <em>Default:</em> Garbage. In variables ka memory address (&) nahi nikal sakte.</li>
            <li><strong>static:</strong> Variable apnee value function calls ke beech retain karta hai. Yeh memory mein ek hi baar initialize hota hai. <em>Scope:</em> Local, <em>Default:</em> 0 (Zero).</li>
            <li><strong>extern:</strong> Global variables jo kisi dusri file mein define hain, unhe declare karne ke kaam aata hai. <em>Scope:</em> Global, <em>Default:</em> 0.</li>
        </ul>

        <h3>5. Operators and Precedence</h3>
        <p>C language mein mainly Arithmetic (+, -, *, /, %), Relational (==, !=, >, <, >=, <=), Logical (&&, ||, !), Bitwise (&, |, ^, ~, <<, >>), aur Assignment (=, +=, -=) operators hote hain.</p>
        
        <div class="tip-box">
          <div class="tip-title">💡 Modulo Operator (%)</div>
          % operator sirf Integer data type ke sath kaam karta hai. Float ya double ke sath directly use karna compilation error dega. Float remainder ke liye fmod() function use hota hai.
        </div>

        <p><strong>Ternary Operator (Conditional):</strong> <code>condition ? true_part : false_part;</code> Yeh single line if-else jaisa kaam karta hai.</p>
        <p><strong>Precedence (Order of Evaluation):</strong> Jab ek expression mein multiple operators hon, toh precedence aur associativity decide karti hai ki pehle kya solve hoga.</p>
        <ol>
            <li>() Brackets</li>
            <li>Postfix: ++, -- (Left to Right)</li>
            <li>Prefix: ++, --, Unary +, Unary -, !, ~ (Right to Left)</li>
            <li>Multiplicative: *, /, % (Left to Right)</li>
            <li>Additive: +, - (Left to Right)</li>
            <li>Relational: <, <=, >, >=</li>
            <li>Equality: ==, !=</li>
            <li>Logical AND: && (Left to Right)</li>
            <li>Logical OR: || (Left to Right)</li>
            <li>Assignment: = (Right to Left)</li>
        </ol>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Logical AND (&&) aur OR (||) mein "Short-Circuiting" hoti hai. Agar && ki left side false hai, toh right side evaluate nahi hoti. Agar || ki left side true hai, toh right side evaluate nahi hoti. Ex: (0 && i++) mein i ki value badhegi nahi!
        </div>
      `
    },
    {
      id: 'c-control',
      name: 'Control Flow: Decision Making and Loops',
      theory: `
        <h3>1. Decision Making Statements</h3>
        <p>Control flow structures program ka execution path badalte hain. If, if-else, aur switch statements decision making ke liye use hote hain.</p>
        
        <h4>if-else Statement</h4>
        <p>Boolean condition ke basis par code block execute hota hai. C mein, kisi bhi non-zero value ko <strong>True</strong> (1) aur zero ko <strong>False</strong> (0) maana jata hai.</p>
        <pre>
if (condition) {
    // executes if condition is true (non-zero)
} else {
    // executes if condition is false (zero)
}
        </pre>

        <h4>switch Statement</h4>
        <p>Multiple conditions ko handle karne ka cleaner way. Switch mein condition ek variable (integer ya character) hoti hai, jiske basis par matching <code>case</code> block chalaya jata hai.</p>
        <div class="tip-box">
          <div class="tip-title">💡 Switch rules</div>
          Switch mein case values sirf constants (integer ya char) ho sakti hain. Float, string, ya variables allowed nahi hain. Duplicate case values par error aati hai. Break use nahi karne par "Fall-through" hota hai (saare aage ke cases chal jate hain bina check kiye).
        </div>

        <h3>2. Iteration Statements (Loops)</h3>
        <p>Loops ka use ek specific task ko baar-baar execute karne ke liye kiya jata hai. Inke do types hote hain: Entry-controlled aur Exit-controlled loops.</p>

        <h4>Entry-Controlled Loops</h4>
        <p>In loops mein condition pehle check hoti hai. Agar condition true hai tabhi loop ke andar ka code chalta hai.</p>
        <ul>
            <li><strong>for loop:</strong> <code>for(initialization; condition; update)</code>. Jab iterations ki number pehle se fixed ho, tab use karte hain.</li>
            <li><strong>while loop:</strong> <code>while(condition)</code>. Jab tak condition true rahe, block chalta rahega. Number of iterations unknown hone par best hai.</li>
        </ul>

        <h4>Exit-Controlled Loops</h4>
        <p>Inme code kam se kam <strong>ek baar toh zaroor chalta hai</strong>, uske baad last mein condition check hoti hai.</p>
        <ul>
            <li><strong>do-while loop:</strong> <code>do { body } while (condition);</code>. Semi-colon last mein zaroori hota hai. Yeh menu-driven programs mein kafi use hota hai.</li>
        </ul>

        <h3>3. Jump Statements</h3>
        <p>Loops ya functions ki normal flow ko todne/chhodne ke kaam aate hain.</p>
        <ul>
            <li><strong>break:</strong> Loop ya switch block ke turant bahar nikal deta hai. Sirf nearest enclosing loop ko todega (nested mein sirf andar wala tootega).</li>
            <li><strong>continue:</strong> Current iteration ko skip karke next iteration ke liye loop control ko update part par bhej deta hai. Switch mein use nahi hota.</li>
            <li><strong>goto:</strong> Program control ko usi function ke andar label par le jata hai. Iska use spaghetti code (hard to read) create karta hai, isliye iska use discourage kiya jata hai.</li>
        </ul>
      `
    },
    {
      id: 'c-functions',
      name: 'Functions and Recursion',
      theory: `
        <h3>1. Concept of Functions</h3>
        <p>Function ek self-contained block of code hota hai jo kisi specific task ko perform karta hai. Functions program ko modular banate hain, code reusability badhate hain aur debugging ko aasan karte hain. Execution hamesha <strong>main()</strong> function se shuru hota hai.</p>

        <h4>Function ka Structure</h4>
        <p>Functions ke teen main parts hote hain:</p>
        <ol>
            <li><strong>Function Declaration (Prototype):</strong> Compiler ko function ka return type, naam, aur parameter list batata hai. (e.g., <code>int add(int a, int b);</code>)</li>
            <li><strong>Function Definition:</strong> Jisme actual block of code (logic) likha hota hai.</li>
            <li><strong>Function Call:</strong> Jaha function ko invoke kiya jata hai execution ke liye. (e.g., <code>result = add(5, 10);</code>)</li>
        </ol>

        <h4>Actual vs Formal Parameters</h4>
        <ul>
            <li><strong>Actual Parameters (Arguments):</strong> Woh values jo function call karte waqt pass ki jati hain. (5 aur 10 upar ke example mein).</li>
            <li><strong>Formal Parameters:</strong> Woh variables jo function definition mein values receive karne ke liye banaye jate hain. (a aur b).</li>
        </ul>

        <h3>2. Call by Value vs Call by Reference</h3>
        <p>Arguments ko do tarike se pass kiya ja sakta hai:</p>

        <table class="comparison-table">
          <tr>
            <th>Feature</th>
            <th>Call by Value</th>
            <th>Call by Reference</th>
          </tr>
          <tr>
            <td>What is passed?</td>
            <td>Value ki copy pass hoti hai.</td>
            <td>Variables ka Memory Address (&) pass hota hai.</td>
          </tr>
          <tr>
            <td>Effect on Actual Data</td>
            <td>Called function mein kiya gaya change actual parameters ko affect <strong>Nahi</strong> karta.</td>
            <td>Changes directly original memory par hote hain, toh actual parameters <strong>modify</strong> ho jate hain.</td>
          </tr>
          <tr>
            <td>Memory usage</td>
            <td>Formal parameters ke liye alag se naye memory blocks create hote hain.</td>
            <td>Formal parameters (pointers) wahi memory address point karte hain.</td>
          </tr>
          <tr>
            <td>Example</td>
            <td><code>void swap(int a, int b)</code></td>
            <td><code>void swap(int *a, int *b)</code></td>
          </tr>
        </table>

        <h3>3. Recursion</h3>
        <p>Jab ek function khud ko (itself) call karta hai, toh use <strong>Recursion</strong> kehte hain. Recursive functions loops ka alternative hain. Maths ke problems (Factorial, Fibonacci, Tower of Hanoi, Tree Traversal) mein yeh kafi useful hote hain.</p>
        <p>Har recursive function mein do cheezein honi chahiye:</p>
        <ol>
            <li><strong>Base Case:</strong> Woh condition jahan par aakar recursive calls ruk jate hain. Iske bina function infinite loop mein chala jayega aur <strong>Stack Overflow</strong> error aayegi.</li>
            <li><strong>Recursive Case:</strong> Jisme function khud ko ek chhote version (smaller sub-problem) ke liye call karta hai.</li>
        </ol>

        <h4>Example (Solved): Factorial</h4>
        <pre>
int fact(int n) {
    if (n == 0 || n == 1)    // Base Case
        return 1;
    else
        return n * fact(n - 1); // Recursive call
}
        </pre>
        <p>Conceptually, <code>fact(3)</code> kaise chalega: <br>
        <code>fact(3)</code> calls <code>3 * fact(2)</code><br>
        <code>fact(2)</code> calls <code>2 * fact(1)</code><br>
        <code>fact(1)</code> returns 1.<br>
        Total return: 3 * 2 * 1 = 6.</p>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Har function call memory ke <strong>Stack</strong> data structure mein store hoti hai (Call Stack). Deep recursion hamesha memory zyada use karti hai aur execution slow karti hai (overhead ki wajah se) compare to Iteration (Loops).
        </div>
      `
    },
    {
      id: 'c-arrays-pointers',
      name: 'Arrays and Pointers in C',
      theory: `
        <h3>1. Arrays</h3>
        <p>Array ek derived data type hai jo <strong>similar data types</strong> ke multiple elements ko ek single variable naam ke andar <strong>contiguous (lagatar) memory locations</strong> mein store karta hai.</p>
        <ul>
            <li><strong>1D Array:</strong> Linear sequence. Declare: <code>int arr[5];</code>. Index hamesha 0 se start hota hai aur (size-1) tak jata hai. Agar array ka size 5 hai (total 20 bytes int ke liye), indices 0, 1, 2, 3, 4 honge.</li>
            <li><strong>Array Decay:</strong> Jab ek array ko kisi function mein pass kiya jata hai, toh uski puri copy nahi pass hoti, balki woh apne <strong>first element ke pointer</strong> mein badal jata hai. Yani <code>arr</code> is equivalent to <code>&arr[0]</code>.</li>
            <li><strong>2D Arrays:</strong> Arrays of arrays. Matrix form mein. Declaration: <code>int matrix[3][4];</code>. Row-major order (pehle puri row, fir dusri row) mein memory allocate hoti hai.</li>
        </ul>

        <h3>2. Pointers</h3>
        <p>Pointer ek special variable hai jo value store nahi karta, balki dusre variable ka <strong>Memory Address</strong> store karta hai.</p>
        <ul>
            <li><code>int *p;</code> (Pointer declaration)</li>
            <li><code>& (Address of operator):</code> Variable ka address nikalta hai. (e.g., <code>p = &x;</code>)</li>
            <li><code>* (Dereference operator / Value at address):</code> Address par maujood data ki value ko access karta hai. (e.g., <code>printf("%d", *p);</code>)</li>
        </ul>
        <div class="tip-box">
          <div class="tip-title">💡 Pointer Sizes</div>
          Kisi bhi type ka pointer (int*, char*, double*) memory mein hamesha same size leta hai, kyunki sabhi addresses store karte hain. 32-bit CPU par size 4 bytes, 64-bit par 8 bytes hoti hai.
        </div>

        <h3>3. Pointer Arithmetic</h3>
        <p>Pointers par hum arithmetic operations kar sakte hain (+, -, ++, --). Pointer par +1 karne ka matlab mathematics wala +1 nahi hota. Yeh apne <strong>data type ki size</strong> ke barabar aage jump karta hai.</p>
        <p>Example: Agar `int *p = 1000;` hai (int size = 4 bytes). Toh <code>p + 1</code> ki value 1004 hogi. <code>p + 2</code> ki value 1008 hogi.</p>
        
        <h3>4. Dynamic Memory Allocation (DMA)</h3>
        <p>Compile time par array ka size fix hota hai (Static memory). Agar run time par memory allocate karni ho (RAM ke <strong>Heap</strong> segment mein), toh hum DMA functions ka use karte hain, jo <code>stdlib.h</code> mein defined hote hain.</p>

        <table class="comparison-table">
          <tr>
            <th>Function</th>
            <th>Use & Syntax</th>
            <th>Initialization</th>
          </tr>
          <tr>
            <td><strong>malloc()</strong></td>
            <td>Single block of memory allocate karta hai. <code>ptr = (int*) malloc(5 * sizeof(int));</code></td>
            <td>Contains <strong>Garbage</strong> value.</td>
          </tr>
          <tr>
            <td><strong>calloc()</strong></td>
            <td>Multiple blocks allocate karta hai. <code>ptr = (int*) calloc(5, sizeof(int));</code></td>
            <td>Initializes all bits to <strong>Zero</strong>.</td>
          </tr>
          <tr>
            <td><strong>realloc()</strong></td>
            <td>Pehle se allocated block ki size resize (increase/decrease) karne ke liye. <code>ptr = realloc(ptr, new_size);</code></td>
            <td>Preserves old data, new space has garbage.</td>
          </tr>
          <tr>
            <td><strong>free()</strong></td>
            <td>Allocated memory ko free/deallocate karta hai. Memory leak rokne ke liye zaruri. <code>free(ptr);</code></td>
            <td>-</td>
          </tr>
        </table>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Memory Leak & Dangling Pointer</div>
          Agar aap <code>malloc</code> banate hain aur <code>free</code> karna bhool jate hain, toh "Memory Leak" hota hai. Agar aapne pointer free kar diya, lekin us pointer variable ko abhi bhi us address par chhod diya (use NULL nahi kiya), toh use <strong>Dangling Pointer</strong> kehte hain.
        </div>
      `
    },
    {
      id: 'c-struct-union',
      name: 'Structures, Unions, and Enums',
      theory: `
        <h3>1. Structures (struct)</h3>
        <p>Array sirf similar data types store kar sakta hai. <strong>Structure</strong> ek User-Defined data type hai jo alag-alag (heterogeneous) data types ke group ko single entity ki tarah combine karta hai.</p>
        <pre>
struct Student {
    int roll;
    char name[20];
    float marks;
};
        </pre>
        <ul>
            <li>Members ko access karne ke liye <strong>Dot (.) operator</strong> ka use hota hai. (e.g., <code>s1.roll = 10;</code>)</li>
            <li>Agar structure ka pointer banaya hai, toh members ko access karne ke liye <strong>Arrow (->) operator</strong> use karte hain. (e.g., <code>ptr->roll = 10;</code>)</li>
            <li><strong>Memory Size:</strong> Structure ki size uske sabhi members ki individual sizes ka sum hoti hai (Plus structure padding jo compiler memory alignment ke liye jodata hai). Upar ke case mein roughly: 4 + 20 + 4 = 28 bytes.</li>
        </ul>

        <h3>2. Unions (union)</h3>
        <p>Union bhi structure jaisa hota hai, syntax bhi almost same hai. Par memory allocation bilkul alag hoti hai.</p>
        <pre>
union Data {
    int i;       // 4 bytes
    float f;     // 4 bytes
    char str[20]; // 20 bytes
};
        </pre>
        <ul>
            <li><strong>Shared Memory:</strong> Union ke saare members ek hi memory location (same address) share karte hain.</li>
            <li><strong>Memory Size:</strong> Union ka total size uske <strong>sabse bade member</strong> ki size ke barabar hota hai. (Upar example mein 20 bytes).</li>
            <li><strong>Limitation:</strong> Ek waqt par aap sirf kisi ek member ki value ko correctly access aur store kar sakte hain. Agar aapne int mein store kiya, phir char array mein daal diya, toh int over-write ho jayega. (Memory optimization mein use hota hai jaha flags ek time par ek hi true rehta hai).</li>
        </ul>

        <table class="comparison-table">
          <tr>
            <th>Difference</th>
            <th>Structure</th>
            <th>Union</th>
          </tr>
          <tr>
            <td>Memory Allocation</td>
            <td>Har member ke liye alag memory allocate hoti hai.</td>
            <td>Sabhi members ek hi shared memory ko use karte hain.</td>
          </tr>
          <tr>
            <td>Size</td>
            <td>Total size = Sum of all members (with padding)</td>
            <td>Total size = Size of the largest member</td>
          </tr>
          <tr>
            <td>Access</td>
            <td>Sare members simultaneously access ho sakte hain.</td>
            <td>Ek time par sirf ek hi member modify/access ho sakta hai.</td>
          </tr>
        </table>

        <h3>3. Enumerations (enum)</h3>
        <p>Enum ek user-defined data type hai jiska use variables ko <strong>names (integer constants)</strong> assign karne ke liye hota hai taaki program zyada readable bane.</p>
        <pre>
enum Week { MON, TUE, WED, THU, FRI, SAT, SUN };
        </pre>
        <p>By default, enum array ki tarah 0 se start hota hai. Yaha MON=0, TUE=1,... SUN=6. Aap default values override bhi kar sakte hain (e.g., <code>enum { MON = 1, TUE }</code> toh TUE automatically 2 ban jayega).</p>

        <h3>4. Typedef</h3>
        <p><code>typedef</code> keyword ka use maujooda data types ko ek <strong>naya naam (alias)</strong> dene ke liye hota hai. Yeh mostly bade struct declarations ko chhota karne mein use hota hai.</p>
        <p><code>typedef unsigned long int uli;</code> (Ab program mein unsigned long int ki jagah direct uli use kar sakte hain).</p>
      `
    },
    {
      id: 'c-file-cli',
      name: 'File Handling & Command Line Arguments',
      theory: `
        <h3>1. File Handling in C</h3>
        <p>C programs normal variables/RAM mein data store karte hain jo program khatam hote hi gayab (volatile) ho jata hai. Data ko permanent store karne ke liye File Handling ka use hota hai. C mein ek pointer hota hai <code>FILE *</code> jo ek file ko point karta hai.</p>

        <h4>Important File Functions</h4>
        <ul>
            <li><code>fopen()</code>: File ko open/create karta hai. Isko 2 arguments chahiye - File path, aur Mode. Agar fail hua toh NULL return karta hai.</li>
            <li><code>fclose()</code>: File ko close karta hai, aur buffer flush karta hai. Hamesha karna chahiye.</li>
            <li><code>fputc()</code> & <code>fgetc()</code>: Character by character read/write.</li>
            <li><code>fprintf()</code> & <code>fscanf()</code>: Formatted read/write jaise printf/scanf karte hain, bas yeh console ki jagah file mein karte hain.</li>
            <li><code>fseek()</code>, <code>ftell()</code>, <code>rewind()</code>: File pointer ki position ko manage karte hain (Random Access).</li>
        </ul>

        <h4>File Opening Modes</h4>
        <table class="comparison-table">
          <tr>
            <th>Mode</th>
            <th>Meaning</th>
            <th>Action if File doesn't exist</th>
            <th>Action if File exists</th>
          </tr>
          <tr>
            <td>"r"</td>
            <td>Read-only</td>
            <td>fopen returns NULL</td>
            <td>Opens for reading from start</td>
          </tr>
          <tr>
            <td>"w"</td>
            <td>Write-only</td>
            <td>Creates a new file</td>
            <td><strong>Erases all old content</strong> (Overwrites)</td>
          </tr>
          <tr>
            <td>"a"</td>
            <td>Append</td>
            <td>Creates a new file</td>
            <td>Old content safe. Adds new content at the <strong>end</strong>.</td>
          </tr>
          <tr>
            <td>"r+"</td>
            <td>Read & Write</td>
            <td>Returns NULL</td>
            <td>Opens from start, overrides chars you type.</td>
          </tr>
          <tr>
            <td>"rb", "wb"</td>
            <td>Binary Read/Write</td>
            <td colspan="2">Same as r and w, but deals with binary data (useful for images/structs, uses <code>fread()</code>/<code>fwrite()</code>).</td>
          </tr>
        </table>

        <h3>2. Command Line Arguments</h3>
        <p>Kabhi-kabhi humein program chalate waqt hi bahar se input pass karna padta hai (jaise terminal mein `copy file1.txt file2.txt`). Ise Command Line Arguments kehte hain.</p>
        <p>In C, <code>main()</code> function arguments receive kar sakta hai:</p>
        <pre>int main(int argc, char *argv[])</pre>
        <ul>
            <li><strong>argc (Argument Count):</strong> Yeh ek integer hai jo batata hai ki kitne arguments pass kiye gaye hain. (Program ka naam khud 1st argument hota hai, isliye argc >= 1 hamesha hota hai).</li>
            <li><strong>argv (Argument Vector):</strong> Yeh array of strings (char pointers) hai. <code>argv[0]</code> mein program ka naam hota hai, <code>argv[1]</code> mein pehla pass kiya hua argument, and so on.</li>
        </ul>
        <div class="tip-box">
          <div class="tip-title">💡 Example Output</div>
          Agar program ko run karein: <code>./myprogram hello world</code><br>
          argc = 3<br>
          argv[0] = "./myprogram", argv[1] = "hello", argv[2] = "world"
        </div>
      `
    },
    {
      id: 'oops-java-cpp',
      name: 'C++ & Java (OOPs & Platform Independence)',
      theory: `
        <h3>1. Object-Oriented Programming (OOPs) Concepts</h3>
        <p>Procedural languages (jaise C) sequence of steps (functions) par focus karti hain, jabki OOPs <strong>Objects</strong> aur unke bich interactions par focus karta hai, jisse real-world modeling possible hoti hai. OOPs ke 4 pillar (main pillars) hote hain:</p>
        <ul>
            <li><strong>Encapsulation:</strong> Data (variables) aur functions (methods) ko ek single unit (Class) mein bind karna. Ise Data Hiding bhi milta hai (using private access modifiers). <em>Capsule ka example (bina cover ke chemical).</em></li>
            <li><strong>Abstraction:</strong> Sirf essential details/features show karna aur internal implementation background details hide karna. <em>Gadi drive karna (internal engine logic ki zarurat nahi).</em></li>
            <li><strong>Inheritance:</strong> Ek class (Child/Derived) ka dusri class (Parent/Base) ki properties aur methods inherit (adopt) karna. Isse <strong>Code Reusability</strong> milti hai.</li>
            <li><strong>Polymorphism:</strong> Ek hi naam multiple forms le sakta hai. <em>Compile-time:</em> Method/Function Overloading. <em>Run-time:</em> Method Overriding (virtual functions / late binding).</li>
        </ul>

        <h3>2. C++ Overview</h3>
        <p><strong>Bjarne Stroustrup</strong> dwara 1979 (Bell Labs) mein banayi gayi. Ise shuru mein "C with Classes" kaha jata tha. C++ ek <em>Compiled, Middle-level, Object-Oriented</em> language hai (par purely OOP nahi hai kyunki bina class ke bhi main() function likha ja sakta hai).</p>
        <ul>
            <li>Isme objects banane, destructors, aur namespaces ka concept laya gaya.</li>
            <li>C++ supports Multiple Inheritance (jo Java/C# classes ke through support nahi karti, interfaces use karti hai).</li>
        </ul>

        <h3>3. Java Overview & Platform Independence</h3>
        <p>Java ko 1991 mein <strong>James Gosling (Sun Microsystems)</strong> ne banaya tha. Java ka main motive tha <strong>WORA (Write Once, Run Anywhere)</strong>. Java ek strongly-typed, Class-based aur almost pure Object-Oriented language hai.</p>

        <h4>How is Java Platform Independent?</h4>
        <p>C/C++ ko jab compile kiya jata hai, toh machine-specific executable (.exe) banti hai (Windows ki .exe Mac pe nahi chalegi). Lekin Java mein yeh process 2-step hota hai:</p>
        <ol>
            <li><strong>Compiler (javac):</strong> Java source code (.java) ko machine code mein convert NAHI karta. Balki ek intermediate language mein karta hai jise <strong>Bytecode</strong> (.class) kehte hain. Bytecode kisi OS pe depend nahi karta.</li>
            <li><strong>JVM (Java Virtual Machine):</strong> Har OS (Windows, Mac, Linux) ka apna alag JVM hota hai. Yeh JVM us Bytecode ko read karke run-time (Interpretation + JIT Compilation) par waha ke specific machine code mein execute karta hai.</li>
        </ol>
        <div class="formula-box">
          <div class="formula-title">📐 Java Toolkit Hierarchy</div>
          <strong>JDK (Java Development Kit)</strong> = JRE + Development Tools (javac, jdb)<br>
          <strong>JRE (Java Runtime Environment)</strong> = JVM + Library Classes<br>
          <strong>JVM</strong> = Executing machine jo actual platform dependent hai, par Java code ko independent banati hai.
        </div>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Java "Platform Independent" hai, lekin <strong>JVM Platform Dependent</strong> hota hai! Windows ke liye alag JVM install hota hai aur Linux ke liye alag.
        </div>
      `
    },
    {
      id: 'dotnet-python',
      name: '.NET Framework and Python Basics',
      theory: `
        <h3>1. Microsoft .NET Framework Basics</h3>
        <p>.NET ek software framework hai jise <strong>Microsoft</strong> ne develop kiya. Yeh primarily Windows pe chalta tha, par ab .NET Core aane ke baad cross-platform (Linux/macOS) ho gaya hai. .NET multiple languages (C#, VB.NET, F#) support karta hai.</p>
        
        <h4>Architecture of .NET</h4>
        <ul>
            <li><strong>CLR (Common Language Runtime):</strong> Yeh .NET ka execution engine hai, same like JVM in Java. Yeh memory management (Garbage Collection), security, aur exception handling dekhta hai.</li>
            <li><strong>MSIL (Microsoft Intermediate Language):</strong> C# ya kisi bhi .NET language ka code pehle directly machine code nahi banta. Compiler (like csc) use <strong>MSIL (ya IL - Intermediate Language)</strong> mein badalta hai.</li>
            <li><strong>JIT (Just-In-Time Compiler):</strong> Run-time par, CLR ke andar JIT compiler MSIL ko native machine code mein fast execute karne ke liye convert karta hai.</li>
            <li><strong>FCL (Framework Class Library):</strong> Yeh standard libraries ka collection hai (GUI, DB, Web services ke pre-built functions).</li>
        </ul>

        <h3>2. Python Basics</h3>
        <p>Python 1991 mein <strong>Guido van Rossum</strong> ne banayi thi. Yeh ek High-Level, <strong>Interpreted</strong>, aur <strong>Dynamically Typed</strong> programming language hai.</p>
        
        <h4>Key Features of Python:</h4>
        <ul>
            <li><strong>Dynamically Typed:</strong> Aapko variable ka type batane ki zarurat nahi hai (jaise <code>x = 10</code> ya <code>x = "hello"</code>). Type run-time pe check hota hai.</li>
            <li><strong>Indentation:</strong> Python mein C/Java ki tarah curly braces <code>{}</code> nahi hote blocks define karne ke liye. Yeh Whitespaces/Indentation ka use karta hai. Isse code highly readable banta hai.</li>
            <li><strong>Interpreted:</strong> Code line-by-line execute hota hai. (Standard implementation CPython pehle hidden bytecode banata hai, fir VM pe interpret karta hai).</li>
            <li><strong>Batteries Included:</strong> Python ke sath ek huge standard library aati hai jisse regular expressions, networking, database connections aasan ho jate hain.</li>
        </ul>
        
        <div class="tip-box">
          <div class="tip-title">💡 Important Python Terms</div>
          <strong>List:</strong> Mutable array-like structure. <code>[]</code><br>
          <strong>Tuple:</strong> Immutable (unchangeable) structure. <code>()</code><br>
          <strong>Dictionary:</strong> Key-Value pairs. <code>{}</code>
        </div>
      `
    },
    {
      id: 'emerging-tech',
      name: 'Emerging Tech: AI, ML, Blockchain',
      theory: `
        <h3>1. Artificial Intelligence (AI)</h3>
        <p>Artificial Intelligence (Kritrim Buddhimatta) ka matlab hai computer systems ko insaani dimaag ki tarah sochne, samajhne aur decision lene ke layak banana. Is term ko <strong>John McCarthy</strong> ne 1956 mein coin kiya tha.</p>
        <ul>
            <li><strong>Narrow AI (Weak AI):</strong> Yeh woh AI hai jo sirf ek specific task kar sakti hai (Jaise Siri, Alexa, Chess AI). Current duniya mein sirf Narrow AI exist karta hai.</li>
            <li><strong>General AI (Strong AI):</strong> Ek hypothetical AI jiska human jaisa common sense aur understanding ho kisi bhi intellectual task ko karne ki.</li>
            <li><strong>Turing Test:</strong> Alan Turing ne 1950 mein diya. Agar ek machine human tester ko yeh belive kara de ki woh human hai, toh machine ko "Intelligent" (passed the test) mana jata hai.</li>
        </ul>

        <h3>2. Machine Learning (ML)</h3>
        <p>ML AI ka ek sub-branch hai. Isme hum computers ko explicitly rule-based code nahi likhte, balki data feed karte hain jisse model "learn" karta hai pattern pehchan na.</p>
        <p><strong>3 Types of ML:</strong></p>
        <ol>
            <li><strong>Supervised Learning:</strong> Yahan data "Labelled" hota hai. (Humein input ke sath output/answers pehle se pata hote hain sikhane ke liye). Regression aur Classification iske hisse hain.</li>
            <li><strong>Unsupervised Learning:</strong> Data "Unlabelled" hota hai. Model khud data ko cluster ya group mein divide karta hai (jaise customer segmentation).</li>
            <li><strong>Reinforcement Learning:</strong> Hit and trial method. Ek "Agent" environment mein action leta hai, aur use Reward ya Punishment milti hai (Game playing, Self-driving cars).</li>
        </ol>

        <h3>3. Blockchain Technology</h3>
        <p>Blockchain ek <strong>Decentralized, Distributed, aur Immutable Public Ledger (khata)</strong> hai, jo secure digital transaction recording mein use hota hai. Ise originally Bitcoin ke underlying framework ke roop mein <strong>Satoshi Nakamoto</strong> (pseudonym) ne 2008 mein banaya tha.</p>
        
        <h4>Core Concepts of Blockchain:</h4>
        <ul>
            <li><strong>Decentralization:</strong> Koi central authority (jaise Bank ya Server) nahi hoti. System ek P2P (Peer-to-Peer) network ke sabhi computers (Nodes) par maintained hota hai.</li>
            <li><strong>Blocks and Chain:</strong> Har block mein data (transactions), pichle block ka Hash, aur khud ka Hash hota hai. Yeh links (Hashes) inhein securely bandhte hain. Agar ek block chheda toh aage ke saare invalid ho jayenge.</li>
            <li><strong>Cryptography:</strong> Hash functions (like SHA-256) data ko secure rakhte hain. Isme ek character change karne se pura hash completely badal jata hai (Avalanche effect).</li>
            <li><strong>Consensus Algorithms:</strong> Network ke saare nodes verify karte hain ki konsa transaction valid hai. Examples: Proof of Work (PoW - mining heavily hardware intensive) and Proof of Stake (PoS).</li>
        </ul>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'intro-pl',
      question: 'Which of the following programming language generations introduced mnemonics and required an assembler for translation?',
      options: ['First Generation (1GL)', 'Second Generation (2GL)', 'Third Generation (3GL)', 'Fourth Generation (4GL)'],
      correct: 1,
      explanation: '2GL (Assembly Language) uses alphanumeric mnemonics (like ADD, SUB) rather than raw binary bits. An assembler translates this into machine code. 1GL uses binary, 3GL uses English-like statements.'
    },
    {
      id: 2,
      topic: 'intro-pl',
      question: 'What is the primary difference between a compiler and an interpreter?',
      options: [
        'A compiler translates code line-by-line, while an interpreter translates the entire code at once.',
        'An interpreter requires an assembler to run, while a compiler does not.',
        'A compiler translates the entire source code into object code in one sweep, while an interpreter translates and executes it line-by-line.',
        'An interpreter produces a permanent executable file, while a compiler runs everything in RAM.'
      ],
      correct: 2,
      explanation: 'Compiler poore source file ko ek sath compile karke .obj/.exe file banata hai. Interpreter code ko line-by-line padhta aur run karta hai, isliye yeh slower hota hai aur koi separate object file nahi banata.'
    },
    {
      id: 3,
      topic: 'intro-pl',
      question: 'Which system software is responsible for bringing the executable program from the secondary memory to the main memory for execution?',
      options: ['Linker', 'Loader', 'Compiler', 'Assembler'],
      correct: 1,
      explanation: 'Loader ka kaam hota hai compiled aur linked executable file ko Hard disk se uthakar Primary Memory (RAM) me load karna, taaki CPU use execute kar sake.'
    },
    {
      id: 4,
      topic: 'intro-pl',
      question: 'Languages like PROLOG and LISP, widely used in Artificial Intelligence applications, belong to which language generation?',
      options: ['Second Generation', 'Third Generation', 'Fourth Generation', 'Fifth Generation'],
      correct: 3,
      explanation: '5GL languages (PROLOG, LISP, Mercury) declarative approach use karti hain jo problem solving, logical constraints aur AI development ke liye design ki gayi hain.'
    },
    {
      id: 5,
      topic: 'c-basics',
      question: 'Who among the following is recognized as the creator of the C programming language?',
      options: ['Bjarne Stroustrup', 'James Gosling', 'Dennis Ritchie', 'Guido van Rossum'],
      correct: 2,
      explanation: 'Dennis Ritchie ne 1972 me AT&T Bell Labs me C language develop ki thi. Bjarne ne C++ banayi, James Gosling ne Java, aur Guido ne Python.'
    },
    {
      id: 6,
      topic: 'c-basics',
      question: 'How many standard keywords are defined in the ANSI C (C89) standard?',
      options: ['30', '32', '48', '64'],
      correct: 1,
      explanation: 'C89/C90 standard ke hisaab se 32 reserved keywords hote hain (e.g. int, float, if, else, struct, auto, etc.).'
    },
    {
      id: 7,
      topic: 'c-basics',
      question: 'What happens if a variable is declared with the "static" storage class inside a function in C?',
      options: [
        'It is destroyed as soon as the function execution ends.',
        'It retains its value between multiple calls to the same function.',
        'It becomes accessible to all other functions in the program globally.',
        'It generates a compilation error if not initialized explicitly.'
      ],
      correct: 1,
      explanation: 'Static variables ki memory sirf ek baar allocate hoti hai, aur woh functions ke multiple calls ke beech apni state (value) retain karke rakhte hain. Default initial value 0 hoti hai.'
    },
    {
      id: 8,
      topic: 'c-basics',
      question: 'Evaluate the C expression: 5 + 2 * 3 % 4. What will be the output?',
      options: ['3', '5', '7', '1'],
      correct: 2,
      explanation: '* aur % ki precedence same hoti hai aur associativity Left to Right hoti hai. Pehle 2*3 = 6 solve hoga. Fir 6 % 4 = 2 (remainder) hoga. Last me + hoga: 5 + 2 = 7.'
    },
    {
      id: 9,
      topic: 'c-basics',
      question: 'Which of the following operators is used in C to return the memory size of a data type or variable in bytes?',
      options: ['sizeof', '&', '*', 'typeof'],
      correct: 0,
      explanation: 'sizeof() operator compile-time par data type ya variable ki exact byte size return karta hai. Example: sizeof(int) usually returns 4.'
    },
    {
      id: 10,
      topic: 'c-control',
      question: 'In C, what occurs when a "break" statement is encountered inside a switch-case block?',
      options: [
        'The program gets abruptly terminated.',
        'Control jumps to the default case block.',
        'Control immediately exits the switch structure.',
        'Control moves to the next case skipping the current one.'
      ],
      correct: 2,
      explanation: 'Break statement current loop ya switch case ko terminate kar deta hai aur control turant us block ke aage wali line par chala jata hai.'
    },
    {
      id: 11,
      topic: 'c-control',
      question: 'Which of the following loops is guaranteed to execute its body at least once, regardless of the test condition being true or false initially?',
      options: ['for loop', 'while loop', 'do-while loop', 'None of the above'],
      correct: 2,
      explanation: 'do-while ek Exit-controlled loop hai. Isme condition block ke end mein check hoti hai, isliye body hamesha kam-se-kam ek baar execute zaroor hoti hai.'
    },
    {
      id: 12,
      topic: 'c-control',
      question: 'What does the "continue" statement do inside a loop?',
      options: [
        'It halts the execution of the entire program.',
        'It skips the remaining statements in the current iteration and jumps to evaluate the loop condition for the next iteration.',
        'It acts identically to the break statement.',
        'It jumps completely out of the nested loops.'
      ],
      correct: 1,
      explanation: 'Continue current iteration (round) ke bache hue code ko skip karke next iteration shuru karwa deta hai. Yeh block ke bahar nahi nikalta.'
    },
    {
      id: 13,
      topic: 'c-control',
      question: 'A switch statement evaluates an expression. What data types are strictly NOT allowed as a switch expression or case constant in C?',
      options: ['int', 'char', 'float', 'enumeration'],
      correct: 2,
      explanation: 'Switch case aur case labels mein sirf integer aur character constants valid hote hain. Float/double ya string arrays switch expressions mein allowed nahi hote.'
    },
    {
      id: 14,
      topic: 'c-functions',
      question: 'When an array is passed as an argument to a function in C, what is actually passed?',
      options: [
        'A full copy of all elements of the array',
        'The base address (pointer) of the first element of the array',
        'The size of the array in bytes',
        'A reference to the last element'
      ],
      correct: 1,
      explanation: 'Array "decays" into a pointer. Jab hum array pass karte hain, toh internally sirf base address pass hota hai (Call by reference jaisa behave karta hai, pointer pass hota hai). Poori value copy nahi hoti.'
    },
    {
      id: 15,
      topic: 'c-functions',
      question: 'Which component is strictly necessary to prevent an infinite sequence of self-calls in a recursive function?',
      options: ['Base condition', 'Static variable', 'Global variable', 'Return pointer'],
      correct: 0,
      explanation: 'Base condition recursion ka termination point hota hai. Bina base case (e.g., if(n==0)) ke function infinitely call hoga aur Stack Overflow ho jayega.'
    },
    {
      id: 16,
      topic: 'c-functions',
      question: 'Consider passing arguments to a function via "Call by Reference". Which symbol operator is heavily used in the function call to achieve this?',
      options: ['*', '&&', '&', '->'],
      correct: 2,
      explanation: 'Call by reference mein hume actual variable ka address pass karna hota hai, jiske liye Address-of operator (&) use kiya jata hai. Function declaration pointer (*) se karta hai.'
    },
    {
      id: 17,
      topic: 'c-functions',
      question: 'Functions in C must be defined within a class block. Is this statement true or false?',
      options: ['True', 'False', 'True only for main() function', 'Depends on the compiler'],
      correct: 1,
      explanation: 'False. C ek procedural language hai (OOP nahi). Isme Classes ka koi concept nahi hota. Functions freely directly file/module level par likhe jate hain.'
    },
    {
      id: 18,
      topic: 'c-arrays-pointers',
      question: 'Suppose ptr is an integer pointer storing the address 2000. If the size of an integer is 4 bytes, what will be the value of ptr + 2?',
      options: ['2002', '2004', '2008', '2016'],
      correct: 2,
      explanation: 'Pointer arithmetic depends on data type size. ptr + 2 = base_address + (2 * sizeof(int)). 2000 + (2 * 4) = 2000 + 8 = 2008.'
    },
    {
      id: 19,
      topic: 'c-arrays-pointers',
      question: 'Which dynamic memory allocation function in C allocates memory for an array of elements and initializes all bytes to zero?',
      options: ['malloc()', 'calloc()', 'realloc()', 'free()'],
      correct: 1,
      explanation: 'calloc() contiguous allocation karta hai aur memory blocks ko 0 se initialize karta hai. malloc() garbage value chhodta hai.'
    },
    {
      id: 20,
      topic: 'c-arrays-pointers',
      question: 'What does the term "Dangling Pointer" refer to in C programming?',
      options: [
        'A pointer pointing to a memory location that has been deallocated or freed.',
        'A pointer that has not been initialized.',
        'A pointer pointing to a function address.',
        'A pointer initialized to NULL.'
      ],
      correct: 0,
      explanation: 'Jab dynamic memory free() function se release kar di jati hai, lekin pointer abhi bhi usi purani address ko point kar raha hota hai, toh use Dangling Pointer kehte hain. (NULL assign karke theek hota hai).'
    },
    {
      id: 21,
      topic: 'c-arrays-pointers',
      question: 'What is the correct syntax to declare a 2D array of integers with 3 rows and 4 columns?',
      options: ['int array(3, 4);', 'int array[4][3];', 'int array[3][4];', 'int array{3}{4};'],
      correct: 2,
      explanation: '2D array ki declaration C mein [rows][columns] format mein hoti hai, isliye array[3][4] sahi hai.'
    },
    {
      id: 22,
      topic: 'c-arrays-pointers',
      question: 'What will be the output of dereferencing a NULL pointer?',
      options: ['It returns 0.', 'It returns a garbage value.', 'It causes a runtime error (segmentation fault).', 'It returns the address of NULL.'],
      correct: 2,
      explanation: 'NULL pointer kisi valid memory ko point nahi karta. Usse dereference (read/write karna with *) karne se program turant crash hota hai, jise Segmentation Fault kehte hain.'
    },
    {
      id: 23,
      topic: 'c-struct-union',
      question: 'In a C union, memory is allocated equal to the size of:',
      options: [
        'The sum of the sizes of all its members.',
        'The size of its smallest member.',
        'The size of its largest member.',
        'A fixed 16 bytes always.'
      ],
      correct: 2,
      explanation: 'Union mein saare members same memory space share karte hain. Isliye union ko bas utni memory chahiye jo sabse bade size wale member ko store kar sake.'
    },
    {
      id: 24,
      topic: 'c-struct-union',
      question: 'To access the members of a structure using a structure pointer, which operator must be utilized?',
      options: ['Dot (.) operator', 'Arrow (->) operator', 'Asterisk (*) operator', 'Ampersand (&) operator'],
      correct: 1,
      explanation: 'Normal struct variable ke members (.) dot se access hote hain, lekin struct pointer ke members arrow (->) operator se access kiye jate hain (e.g., ptr->marks).'
    },
    {
      id: 25,
      topic: 'c-struct-union',
      question: 'What is the primary purpose of the "typedef" keyword in C?',
      options: [
        'To define new data types completely from scratch.',
        'To assign an alternate, meaningful alias to an existing data type.',
        'To declare a variable globally.',
        'To dynamically typecast variables during runtime.'
      ],
      correct: 1,
      explanation: 'typedef kisi naye data type ko create nahi karta, balki pehle se maujood data types/structs ko naya naam ya shortcut (alias) dene ke liye use hota hai (e.g., typedef unsigned int uint;).'
    },
    {
      id: 26,
      topic: 'c-struct-union',
      question: 'By default, what is the integer value assigned to the first identifier in a C enumeration (enum)?',
      options: ['-1', '1', '0', 'Garbage value'],
      correct: 2,
      explanation: 'Agar koi custom value assign nahi ki jaye, toh enum ka pehla constant 0 ki value leta hai, aur uske baad aane wale elements apne aap +1 increment hote jate hain.'
    },
    {
      id: 27,
      topic: 'c-file-cli',
      question: 'When attempting to open a file in C using fopen("data.txt", "r"), what does the function return if the file does not exist?',
      options: ['An integer 0', 'A file descriptor integer', 'A NULL pointer', 'A new empty file is created'],
      correct: 2,
      explanation: 'Read ("r") mode mein agar file nahi milti hai toh fopen function ek NULL pointer return karta hai, jo fail condition check karne mein use hota hai. New file sirf "w" ya "a" me create hoti hai.'
    },
    {
      id: 28,
      topic: 'c-file-cli',
      question: 'Which standard library function is primarily used to close an opened file and flush its output buffer in C?',
      options: ['file_close()', 'fclose()', 'closef()', 'close()'],
      correct: 1,
      explanation: 'fclose() C standard library (stdio.h) ka function hai jo open ki hui stream (file) ko properly band karta hai taaki data disk par save ho jaye.'
    },
    {
      id: 29,
      topic: 'c-file-cli',
      question: 'In the main function parameter "int main(int argc, char *argv[])", what does argc represent?',
      options: [
        'The name of the executable program.',
        'The total number of arguments passed via the command line.',
        'A string vector containing arguments.',
        'An error status code.'
      ],
      correct: 1,
      explanation: 'argc stands for "Argument Count". Yeh ek integer hai jo batata hai ki command line mein total kitne arguments pass kiye gaye hain. (Including the program name itself).'
    },
    {
      id: 30,
      topic: 'c-file-cli',
      question: 'What is the behavior of the "w" (write) mode when opening an existing file using fopen?',
      options: [
        'It appends data to the end of the file.',
        'It opens the file and lets you overwrite from the middle.',
        'It triggers an error that the file already exists.',
        'It erases all existing content and treats it as an empty file.'
      ],
      correct: 3,
      explanation: 'Write ("w") mode existing file ko completely truncate (erase) kar deta hai aur content length zero kar deta hai. Overwriting shuru se hoti hai.'
    },
    {
      id: 31,
      topic: 'oops-java-cpp',
      question: 'Which core OOP concept describes the bundling of data attributes and functions into a single logical unit while restricting direct access?',
      options: ['Polymorphism', 'Encapsulation', 'Inheritance', 'Polymorphism'],
      correct: 1,
      explanation: 'Encapsulation data aur functions ko Class ke roop mein ek capsule me bandh deta hai, taaki bahar ka code directly data modify na kar sake (Data hiding via private members).'
    },
    {
      id: 32,
      topic: 'oops-java-cpp',
      question: 'What is the intermediate format called that the Java compiler produces from Java source code to ensure platform independence?',
      options: ['Machine Code', 'Assembly Code', 'Bytecode', 'Source Object Code'],
      correct: 2,
      explanation: 'Java compiler (javac) source code ko .class file mein compile karta hai jo ki Java Bytecode hai. Yeh machine agnostic hota hai aur JVM se execute hota hai.'
    },
    {
      id: 33,
      topic: 'oops-java-cpp',
      question: 'Which of the following is true regarding Java\'s platform independence?',
      options: [
        'Java programs can run directly on the OS without any software.',
        'The Java Virtual Machine (JVM) is the same for every Operating System.',
        'The bytecode is platform-independent, but the JVM is platform-dependent.',
        'Java compiler generates OS-specific machine code immediately.'
      ],
      correct: 2,
      explanation: 'Java ki WORA (Write Once Run Anywhere) philosophy mein Bytecode OS-independent hota hai, lekin har OS ke liye alag se specific JVM install karna padta hai.'
    },
    {
      id: 34,
      topic: 'oops-java-cpp',
      question: 'Function overloading and operator overloading in C++ are primary examples of which OOP concept?',
      options: ['Inheritance', 'Abstraction', 'Polymorphism', 'Data Binding'],
      correct: 2,
      explanation: 'Overloading (compile-time polymorphism) ek hi naam se alag-alag kaam (multiple forms) lene ko allow karti hai based on parameter list. "Poly" means many, "morphs" means forms.'
    },
    {
      id: 35,
      topic: 'oops-java-cpp',
      question: 'Unlike Java, C++ supports a feature where one class can inherit from more than one base class directly. What is this called?',
      options: ['Multilevel Inheritance', 'Hierarchical Inheritance', 'Hybrid Inheritance', 'Multiple Inheritance'],
      correct: 3,
      explanation: 'Multiple Inheritance mein ek child class multiple parent classes se properties inherit karti hai. Java Diamond problem avoid karne ke liye class-level par ise support nahi karta (Interfaces ka use karta hai).'
    },
    {
      id: 36,
      topic: 'dotnet-python',
      question: 'What component of the .NET Framework is responsible for memory management, garbage collection, and exception handling at runtime?',
      options: ['FCL (Framework Class Library)', 'CLR (Common Language Runtime)', 'MSIL', 'JIT Compiler'],
      correct: 1,
      explanation: 'CLR (Common Language Runtime) .NET applications ka execution engine hai jo code ko run karta hai aur background mein memory allocate/free (Garbage Collection) manage karta hai.'
    },
    {
      id: 37,
      topic: 'dotnet-python',
      question: 'How does Python define code blocks such as the body of loops or functions?',
      options: ['Using curly braces {}', 'Using BEGIN and END keywords', 'Using Indentation (whitespaces)', 'Using semicolons ;'],
      correct: 2,
      explanation: 'Python block structure define karne ke liye indentation (tabs/spaces) par rely karti hai. Yaha C/Java ki tarah curly braces {} ka use nahi hota.'
    },
    {
      id: 38,
      topic: 'dotnet-python',
      question: 'Python is known as a dynamically typed language. What does this mean?',
      options: [
        'The data type of a variable must be explicitly declared before use.',
        'Variable types are determined strictly at compile-time.',
        'Variable types are determined and assigned at run-time automatically based on the value.',
        'Variables can only hold dynamic memory allocations (pointers).'
      ],
      correct: 2,
      explanation: 'Dynamically typed ka matlab hai ki programmer ko x ka type "int" ya "string" specify nahi karna padta. Run-time par jo value aayegi (x = 5 ya x = "Hi"), Python khud uska type set kar dega.'
    },
    {
      id: 39,
      topic: 'dotnet-python',
      question: 'In the .NET ecosystem, what does JIT stand for?',
      options: ['Just-In-Time', 'Java-Intermediate-Technology', 'Jump-In-Type', 'Joint-Internal-Transfer'],
      correct: 0,
      explanation: 'Just-In-Time (JIT) compiler .NET me runtime par MSIL code ko padhta hai aur CPU architecture ke native machine code mein directly compile/execute karta hai taaki execution fast ho.'
    },
    {
      id: 40,
      topic: 'emerging-tech',
      question: 'Which type of Machine Learning relies heavily on a "labelled" dataset containing explicit inputs and expected outputs to train a model?',
      options: ['Unsupervised Learning', 'Reinforcement Learning', 'Supervised Learning', 'Clustering'],
      correct: 2,
      explanation: 'Supervised Learning mein algorithm ko pehle se classified or labeled data provide kiya jata hai, jisse model patterns seekh kar naye data ki prediction kar pata hai.'
    },
    {
      id: 41,
      topic: 'emerging-tech',
      question: 'What is the primary function of a hashing algorithm in Blockchain technology?',
      options: [
        'To mine new cryptocurrencies using AI.',
        'To encrypt user passwords so they can be decrypted easily.',
        'To map data of arbitrary size to a fixed-size unique digital fingerprint, ensuring data integrity.',
        'To speed up the internet connection between decentralized nodes.'
      ],
      correct: 2,
      explanation: 'Hash (jaise SHA-256) ek one-way mathematical function hai. Yeh kisi bhi size ke data ko fixed string me badal deta hai. Agar data me 1 bit bhi change hoga, to hash pura badal jayega. Yeh blocks ko tamper-proof (immutable) banata hai.'
    },
    {
      id: 42,
      topic: 'emerging-tech',
      question: 'Which of the following test was proposed by a famous computer scientist in 1950 to evaluate if a machine can exhibit human-like intelligence?',
      options: ['Turing Test', 'McCarthy Test', 'Neumann Test', 'Lovelace Evaluation'],
      correct: 0,
      explanation: 'Alan Turing ne "Turing Test" propose kiya tha jisme human evaluator text interactions ke basis par agar human aur machine ko distinguish na kar paaye, toh machine AI-intelligent mani jayegi.'
    },
    {
      id: 43,
      topic: 'emerging-tech',
      question: 'A blockchain operates without a central bank or server. This defining characteristic is known as:',
      options: ['Centralization', 'Decentralization', 'Monopolization', 'Cryptanalysis'],
      correct: 1,
      explanation: 'Decentralization blockchain ka sabse bada feature hai jisme data Peer-to-Peer network par distributed hota hai. Kisi single entity (jaise bank) ka control network pe nahi hota.'
    }
  ]
};

window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['oop'] = {
  id: 'oop',
  name: 'OOP (C++ & Java)',
  icon: '☕',
  description: 'Object Oriented Programming (OOP) ke core concepts, C++ aur Java ke implementations aur key differences.',
  topics: [
    {
      id: 'oop-basics',
      name: 'Objects and Classes',
      theory: `
        <h3>Classes aur Objects</h3>
        <p><strong>Object-Oriented Programming (OOP)</strong> ek programming paradigm hai jo "objects" par based hai. Objects data (attributes/properties) aur methods (functions/behavior) ko ek sath bind karte hain.</p>
        <ul>
          <li><strong>Class:</strong> Ek blueprint ya template hota hai jisse objects create kiye jate hain. Class ek logical entity hai (iski memory allocate nahi hoti jab tak object na bane).</li>
          <li><strong>Object:</strong> Class ka ek instance hota hai. Ye ek physical/runtime entity hai jiska memory mein existence hota hai.</li>
        </ul>
        
        <h4>Access Modifiers (C++ & Java)</h4>
        <p>Access modifiers decide karte hain ki class ke members (data/methods) kahan se access kiye ja sakte hain.</p>
        <ul>
          <li><strong>Public:</strong> Kahin se bhi access ho sakte hain.</li>
          <li><strong>Private:</strong> Sirf usi class ke andar access ho sakte hain. Ye Encapsulation achieve karne ke liye zaroori hai.</li>
          <li><strong>Protected:</strong> Usi class aur uski child (derived) classes mein access ho sakte hain.</li>
          <li><strong>Default (Java only):</strong> Agar kuch na likha jaye, toh package-private hota hai (same package mein accessible).</li>
        </ul>

        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          C++ mein class ke members default roop se <strong>private</strong> hote hain, jabki <code>struct</code> ke members default <strong>public</strong> hote hain. Java mein default access modifier "package" level hota hai.
        </div>
        
        <h4>Constructors aur Destructors</h4>
        <p><strong>Constructor</strong> ek special method hota hai jiska naam bilkul class ke naam jaisa hota hai aur ye object banne par automatically call hota hai memory initialize karne ke liye. Iska koi return type nahi hota.</p>
        <p><strong>Destructor (C++)</strong> object ke destroy hone par call hota hai, resources ko free karne ke liye. Iska naam <code>~ClassName()</code> hota hai.</p>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Question pooch sakta hai "Which of the following is true for Java destructors?". Sahi answer hai: <strong>Java mein destructors nahi hote</strong>. Wahan Garbage Collector (GC) khud unused objects ko memory se hatata hai.
        </div>

        <table class="comparison-table">
          <tr><th>Feature</th><th>C++</th><th>Java</th></tr>
          <tr><td>Platform Dependency</td><td>Platform Dependent (OS specific executable)</td><td>Platform Independent (Bytecode & JVM)</td></tr>
          <tr><td>Pointers</td><td>Direct pointers ko support karta hai</td><td>Explicit pointers nahi hote, internal references hote hain</td></tr>
          <tr><td>Memory Management</td><td>Manual (<code>new</code>/<code>delete</code>)</td><td>Automatic (Garbage Collection)</td></tr>
        </table>
        
        <h4>Example (Worked Out)</h4>
        <pre><code>// Java mein Class & Object Example
class Student {
    String name;
    
    // Constructor
    Student(String n) {
        name = n;
    }
    
    void display() {
        System.out.println("Name: " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        // Object creation using 'new' keyword (allocates memory on Heap)
        Student s1 = new Student("Amit"); 
        s1.display();
    }
}</code></pre>
      `
    },
    {
      id: 'oop-inheritance',
      name: 'Inheritance',
      theory: `
        <h3>Inheritance (Virasat)</h3>
        <p>Inheritance ek mechanism hai jisse ek nayi class (child) pehle se maujood class (parent) ki properties aur methods ko inherit (acquire) karti hai. Ye <strong>Code Reusability</strong> aur IS-A relationship establish karta hai.</p>
        
        <h4>Types of Inheritance</h4>
        <ul>
          <li><strong>Single Inheritance:</strong> Ek child, ek parent.</li>
          <li><strong>Multilevel Inheritance:</strong> Chain form mein: A (Grandparent) -> B (Parent) -> C (Child).</li>
          <li><strong>Hierarchical Inheritance:</strong> Ek parent ki multiple child classes.</li>
          <li><strong>Multiple Inheritance:</strong> Ek child ki multiple parent classes (C++ support karta hai, Java classes ke thru nahi karta).</li>
          <li><strong>Hybrid Inheritance:</strong> Upar diye gaye types ka mixture.</li>
        </ul>
        
        <div class="formula-box">
          <div class="formula-title">📐 Multiple Inheritance in Java</div>
          Java classes ke madhyam se multiple inheritance support nahi karta taaki ambiguity (Diamond Problem) se bacha ja sake. Lekin, Java <strong>Interfaces</strong> ke through multiple inheritance achieve karta hai.
        </div>
        
        <h4>Diamond Problem (C++)</h4>
        <p>Jab Class B aur C, Class A ko inherit karte hain, aur Class D in dono (B aur C) ko inherit karti hai, toh A ke members D mein do baar aa jate hain, isse variable/method access mein confusion (ambiguity) aati hai.</p>
        <p>C++ mein isko <strong>Virtual Base Class</strong> ka use karke solve kiya jata hai:</p>
        <pre><code>class A { };
class B : virtual public A { }; // Virtual inheritance
class C : virtual public A { };
class D : public B, public C { }; // Ab D me A ki sirf 1 copy aayegi</code></pre>

        <h4>super Keyword (Java)</h4>
        <p>Java mein <code>super</code> keyword parent class ke object ko refer karta hai. Ye parent class ke constructor <code>super()</code>, methods ya variables ko access karne ke liye use hota hai.</p>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Java mein har class (chahe hum likhe ya na likhe) default roop se <code>java.lang.Object</code> class ko inherit karti hai. C++ mein aisi koi universal root class nahi hoti. C++ mein derived object delete hone par Destructors Derived se Base ke order mein call hote hain.
        </div>
      `
    },
    {
      id: 'oop-polymorphism',
      name: 'Polymorphism',
      theory: `
        <h3>Polymorphism (Ek naam, alag-alag kaam)</h3>
        <p>Polymorphism (Poly = many, morphs = forms) ka matlab hai ek hi entity ka alag-alag situations me alag behave karna. Ye do type ka hota hai:</p>
        
        <h4>1. Compile-time Polymorphism (Static / Early Binding)</h4>
        <ul>
          <li><strong>Method Overloading (C++ & Java):</strong> Ek class mein same naam ke multiple methods ho sakte hain, agar unke parameters (type, number, ya sequence) alag hon. Sirf return type badalne se overloading nahi hoti.</li>
          <li><strong>Operator Overloading (C++):</strong> Kisi existing operator (jaise <code>+</code>, <code>-</code>) ka user-defined data types ke liye naya meaning set karna. Java operator overloading allow nahi karta.</li>
        </ul>

        <h4>2. Run-time Polymorphism (Dynamic / Late Binding)</h4>
        <ul>
          <li><strong>Method Overriding (C++ & Java):</strong> Jab child class parent class ke method ka apna (naya) implementation deti hai. Method ka naam aur parameters dono mein bilkul <strong>same</strong> hone chahiye.</li>
        </ul>
        
        <h4>Virtual Functions in C++</h4>
        <p>C++ mein run-time polymorphism tabhi achieve hoti hai jab parent class ke method ke aage <code>virtual</code> keyword lagaya jaye aur child object ko base class ke pointer se point kiya jaye.</p>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Java mein default saare non-static methods virtual hote hain (yani default overridable hote hain). C++ mein explicitly <code>virtual</code> keyword likhna padta hai late binding enable karne ke liye.
        </div>
        
        <table class="comparison-table">
          <tr><th>Feature</th><th>Overloading</th><th>Overriding</th></tr>
          <tr><td>Scope</td><td>Ek hi class mein hoti hai</td><td>Parent aur Child class mein hoti hai</td></tr>
          <tr><td>Signature</td><td>Parameters alag hone hi chahiye</td><td>Parameters bilkul same hone chahiye</td></tr>
          <tr><td>Resolution</td><td>Compile-time par (Compiler dwara)</td><td>Run-time par (JVM/Runtime dwara)</td></tr>
        </table>
        
        <h4>Example (Method Overriding in Java)</h4>
        <pre><code>class Animal {
    void sound() { System.out.println("Animal makes sound"); }
}
class Dog extends Animal {
    @Override
    void sound() { System.out.println("Dog barks"); }
}
// Usage:
// Animal a = new Dog(); // Upcasting
// a.sound(); // Output: Dog barks (Dynamic binding ki wajah se)</code></pre>
      `
    },
    {
      id: 'oop-exceptions',
      name: 'Event & Exceptions Handling',
      theory: `
        <h3>Exception Handling</h3>
        <p>Exception ek runtime issue ya error hai jo program ke normal execution flow ko rok deta hai (e.g., Divide by zero, File not found). Isko properly handle karna taaki program crash na ho, Exception Handling kehlata hai.</p>
        
        <h4>Keywords (C++ & Java)</h4>
        <ul>
          <li><strong>try:</strong> Is block mein wo risky code rakha jata hai jisse exception generate ho sakta hai.</li>
          <li><strong>catch:</strong> Agar try block me koi exception aata hai, to ye block use "pakadta" (handle) hai.</li>
          <li><strong>throw:</strong> Programmer explicitly kisi error condition me exception generate/phekne ke liye ise use karta hai.</li>
          <li><strong>throws (Java only):</strong> Method signature mein lagta hai aur caller ko batata hai ki "ye method falana exception de sakta hai, aap handle kar lena".</li>
          <li><strong>finally (Java only):</strong> Ye block <strong>humesha</strong> execute hota hai chahe exception aaye ya na aaye. Iska main use resources (files/DB) close karne ke liye hota hai.</li>
        </ul>

        <div class="formula-box">
          <div class="formula-title">📐 Exception Hierarchy (Java)</div>
          <code>Throwable</code> class sabki root boss hai. Iske do main sub-classes hain: 
          1. <code>Error</code> (Out of memory waghera - program handle nahi kar sakta).
          2. <code>Exception</code> (Program handle kar sakta hai). Iske 2 parts hain: Checked (Compile time pe force hota hai catch karna) aur Unchecked (RuntimeExceptions).
        </div>

        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          C++ mein <code>finally</code> block nahi hota. Wahan RAII (Resource Acquisition Is Initialization) pattern aur destructors ka use hota hai resource free karne ke liye (Stack unwinding). C++ mein aap int, string ya koi bhi data type throw kar sakte ho, par Java mein sirf <code>Throwable</code> ke child objects hi throw hote hain.
        </div>

        <h4>Event Handling (Java AWT/Swing)</h4>
        <p>GUI applications mein user actions (clicks, typing) ko handle karne ke liye <strong>Delegation Event Model</strong> hota hai.</p>
        <ul>
          <li><strong>Event Source:</strong> Wo UI element jahan action hua (e.g., Button).</li>
          <li><strong>Event Listener:</strong> Wo interface/class jo us action ko sunta hai aur react karta hai (e.g., ActionListener).</li>
        </ul>
        <pre><code>// Java Event Handling Code Snippet
myButton.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
        System.out.println("Button Click ho gaya!");
    }
});</code></pre>
      `
    },
    {
      id: 'oop-files',
      name: 'Files and Streams',
      theory: `
        <h3>Streams and File I/O</h3>
        <p>File me data save karne (Write) ya read karne ke liye streams ka use hota hai. <strong>Stream</strong> ek sequential flow of data hai (pipe ki tarah).</p>
        
        <h4>Files in C++ (fstream library)</h4>
        <p>C++ mein <code>&lt;fstream&gt;</code> header file use hoti hai. Mukhya classes:</p>
        <ul>
          <li><strong>ifstream:</strong> Input File Stream - File se data READ karne ke liye.</li>
          <li><strong>ofstream:</strong> Output File Stream - File mein data WRITE karne ke liye.</li>
          <li><strong>fstream:</strong> Dono read aur write operations ke liye.</li>
        </ul>
        <p>C++ mein file modes: <code>ios::in</code> (read), <code>ios::out</code> (write), <code>ios::app</code> (append - aage data jodna bina purana delete kiye).</p>
        
        <h4>Files in Java (java.io package)</h4>
        <p>Java streams 2 category mein bati hain:</p>
        <ul>
          <li><strong>Byte Streams (8-bit):</strong> Binary data (images, audio) ke liye. Parent classes: <code>InputStream</code> aur <code>OutputStream</code> (e.g., <code>FileInputStream</code>).</li>
          <li><strong>Character Streams (16-bit):</strong> Text/Unicode data ke liye taaki hindi/english aadi sahi dikhe. Parent classes: <code>Reader</code> aur <code>Writer</code> (e.g., <code>FileReader</code>).</li>
        </ul>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Exam me aksar puchte hain "Which stream is best for text files in Java?". Sahi answer <strong>Character Streams (Reader/Writer)</strong> hai kyunki ye Java ke 16-bit unicode characters ko seamlessly handle karti hain bina corrupt kiye.
        </div>

        <h4>Serialization (Java)</h4>
        <p>Java mein <strong>Serialization</strong> ek process hai jisme running memory ke object ko bytestream me badla jata hai, taaki use file me save kar sake ya network pe bhej sake. Iske liye class me <code>Serializable</code> interface (ek marker interface) implement karna zaroori hai.</p>
        <p>Agar aap chahte hain ki object ka koi khaas variable (jaise password) file mein save <strong>NA</strong> ho, to us variable ke aage <code>transient</code> keyword lagaya jata hai.</p>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'oop-basics',
      question: 'C++ mein class ke members ka default access modifier kya hota hai?',
      options: ['Public', 'Private', 'Protected', 'Default'],
      correct: 1,
      explanation: 'C++ mein class ke members by default "private" hote hain, jabki C++ structs mein default members "public" hote hain. Java mein default access package-private hota hai.'
    },
    {
      id: 2,
      topic: 'oop-basics',
      question: 'Java mein objects ko memory se hatane (destroy karne) ke sandarbh mein kaunsa kathan satya hai?',
      options: ['Destructor ka naam ~ClassName hota hai', 'Java mein destructors nahi hote hain', 'finalize() ek C++ jaisa destructor hai', 'Object class ke pass universal destructor hota hai'],
      correct: 1,
      explanation: 'Java mein explicit destructors nahi hote kyunki memory management ka kaam Garbage Collector (GC) background mein automatically karta hai.'
    },
    {
      id: 3,
      topic: 'oop-basics',
      question: 'OOP ka kaunsa concept data variables aur un par kaam karne wale methods ko ek single unit mein bind karne ka kaam karta hai?',
      options: ['Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction'],
      correct: 2,
      explanation: 'Encapsulation ka mukhya uddeshy data aur methods ko ek sath ek capusle (Class) mein bind karna aur access modifiers ke zariye unauthorized access se protect karna hai.'
    },
    {
      id: 4,
      topic: 'oop-basics',
      question: 'C++ ya Java mein ek Constructor ka return type kya hota hai?',
      options: ['void', 'int', 'Class ka naam', 'Constructor ka koi return type nahi hota'],
      correct: 3,
      explanation: 'Constructor object memory ko initialize karne ke liye specially design hota hai. Iska koi return type nahi hota (yaha tak ki void bhi nahi). Agar void likh diya toh wo normal method ban jayega.'
    },
    {
      id: 5,
      topic: 'oop-basics',
      question: '<code>new</code> keyword ka prayog karke jab hum C++ ya Java mein object banate hain, toh memory kahan allocate hoti hai?',
      options: ['Stack', 'Heap', 'Data segment', 'BSS segment'],
      correct: 1,
      explanation: 'Dynamic memory allocation (jaise new keyword se allocate ki gayi memory) hamesha Heap memory mein create hoti hai. Local variables Stack mein jate hain.'
    },
    {
      id: 6,
      topic: 'oop-basics',
      question: 'Agar kisi Java/C++ class mein programmer ne koi bhi constructor define nahi kiya hai, toh compiler kya karta hai?',
      options: ['Compile-time error dega', '1 parameterless (default) constructor automatically banayega', '2 constructors banayega', 'Object banne nahi dega'],
      correct: 1,
      explanation: 'Jab class mein ek bhi constructor nahi hota, toh compiler automatically ek empty default parameterless constructor provide karta hai. Par agar aapne ek bhi parameter wala bana diya, to compiler default nahi dega.'
    },
    {
      id: 7,
      topic: 'oop-inheritance',
      question: 'Inmein se kaunsi programming bhasha classes ke madhyam se multiple inheritance (ek child ke kai parents) ko support NAHI karti?',
      options: ['C++', 'Python', 'Java', 'C++ aur Java dono'],
      correct: 2,
      explanation: 'Java classes ke through multiple inheritance support nahi karti taaki Diamond Problem jaisi ambiguity na ho. Java iske badle "Interfaces" ka use karti hai.'
    },
    {
      id: 8,
      topic: 'oop-inheritance',
      question: 'C++ mein Diamond Problem (multiple inheritance me redundancy) ko solve karne ke liye kis keyword/concept ka upyog kiya jata hai?',
      options: ['super', 'virtual (Virtual Base Class)', 'abstract', 'interface'],
      correct: 1,
      explanation: 'C++ mein virtual inheritance (virtual base class) ka use karke ensure kiya jata hai ki base class ki sirf ek single instance hi derived class tak pahuche.'
    },
    {
      id: 9,
      topic: 'oop-inheritance',
      question: 'Java mein child class constructor ke andar se parent class ke constructor ko call karne ke liye kis keyword ka use hota hai?',
      options: ['this()', 'base()', 'super()', 'parent()'],
      correct: 2,
      explanation: 'Java mein parent class ke object aur uske constructor ko refer karne ke liye <code>super()</code> keyword ka use hota hai. Yeh child constructor ka pehla statement hona zaroori hai.'
    },
    {
      id: 10,
      topic: 'oop-inheritance',
      question: 'Jab ek base class se ek se zyada derived classes banai jati hain (A->B, A->C), toh is design ko kya kehte hain?',
      options: ['Multiple Inheritance', 'Multilevel Inheritance', 'Hierarchical Inheritance', 'Hybrid Inheritance'],
      correct: 2,
      explanation: 'Tree jaisa structure jisme ek root parent ki multiple direct children classes hoti hain, use Hierarchical Inheritance kehte hain.'
    },
    {
      id: 11,
      topic: 'oop-inheritance',
      question: 'Java mein ek class ko dusri class se "IS-A" relationship (inherit) dene ke liye kis keyword ka prayog kiya jata hai?',
      options: ['implements', 'extends', 'instanceof', 'inherits'],
      correct: 1,
      explanation: 'Class to class inheritance ke liye <code>extends</code> keyword lagta hai. Class to interface relation ke liye <code>implements</code> lagta hai.'
    },
    {
      id: 12,
      topic: 'oop-inheritance',
      question: 'C++ mein inheritance me, jab ek derived class ka object destroy hota hai, to destructors kis order mein execute hote hain?',
      options: ['Base class destructor pehle, fir Derived', 'Derived class destructor pehle, fir Base', 'Sirf Derived class destructor', 'Random order'],
      correct: 1,
      explanation: 'C++ mein destructors construction ke reverse order mein call hote hain. Pehle child (Derived) ka destructor apna memory free karta hai, uske baad parent (Base) ka destructor call hota hai.'
    },
    {
      id: 13,
      topic: 'oop-polymorphism',
      question: 'Compile-time polymorphism (Early binding) ko achieve karne ka best example kaunsa hai?',
      options: ['Method Overriding', 'Virtual Functions', 'Method Overloading', 'Abstract Classes'],
      correct: 2,
      explanation: 'Method Overloading compile-time par hi compiler dwara resolve kar li jati hai (parameter matching karke). Overriding run-time (late binding) par JVM ya C++ runtime check karti hai.'
    },
    {
      id: 14,
      topic: 'oop-polymorphism',
      question: 'Kya Java bhasha programmer ko custom Operator Overloading ki suvidha deti hai?',
      options: ['Haan, sabhi operators ke liye', 'Haan, par sirf + aur - ke liye', 'Nahi, Java mein C++ ki tarah explicitly operator overloading nahi hoti', 'Sirf primitive data types ke liye'],
      correct: 2,
      explanation: 'Java simplicity ke liye explicit custom operator overloading support NAHI karta. Halanki internally string concatenation ke liye `+` overloaded hai, par hum code me naya operator overload nahi bana sakte.'
    },
    {
      id: 15,
      topic: 'oop-polymorphism',
      question: 'C++ mein Run-time polymorphism achieve karne ke liye, base class ke method ke aage kaunsa keyword lagana zaroori hai?',
      options: ['override', 'dynamic', 'virtual', 'abstract'],
      correct: 2,
      explanation: 'C++ mein functions default non-virtual hote hain. Run-time polymorphism (late binding) laane ke liye explicitly <code>virtual</code> keyword lagana padta hai.'
    },
    {
      id: 16,
      topic: 'oop-polymorphism',
      question: 'Java mein kis keyword ka upyog karke ek method ko "override" hone se permanently roka ja sakta hai?',
      options: ['static', 'private', 'final', 'const'],
      correct: 2,
      explanation: '<code>final</code> method ko child classes override nahi kar sakti. <code>final</code> class ko inherit nahi kiya ja sakta, aur <code>final</code> variable ki value change nahi hoti (constant ban jata hai).'
    },
    {
      id: 17,
      topic: 'oop-polymorphism',
      question: 'Method Overriding ke niyam ke anusaar, kaunsa kathan poori tarah satya hai?',
      options: ['Method ka naam same hona chahiye par parameters alag chalenge', 'Method ka naam aur parameters bilkul same (exact signature) hone chahiye', 'Inheritance ki koi zaroorat nahi hoti', 'Return type hamesha alag hona chahiye'],
      correct: 1,
      explanation: 'Method Overriding (Dynamic polymorphism) ke liye inheritance ka hona, aur parent-child dono jagah method ka naam aur parameters ka bilkul ek-saman (same signature) hona zaroori hai.'
    },
    {
      id: 18,
      topic: 'oop-polymorphism',
      question: 'C++ mein agar kisi class mein "Pure Virtual Function" (e.g., <code>virtual void draw() = 0;</code>) maujood hai, toh wo class kaisa behave karegi?',
      options: ['Concrete Class (Object ban sakta hai)', 'Abstract Class (Direct Object nahi ban sakta)', 'Static Class', 'Sealed Class'],
      correct: 1,
      explanation: 'Jis class me kam se kam ek pure virtual function ho, wo Abstract class kahlati hai aur aap uska instance (object) nahi bana sakte. Sirf use inherit karke child me definition di jati hai.'
    },
    {
      id: 19,
      topic: 'oop-exceptions',
      question: 'C++ aur Java mein exceptions ko handle karne ke mechanism mein, kis block ke andar code likha jata hai jisme exception aane ki sambhawana (risk) hoti hai?',
      options: ['try', 'catch', 'throw', 'finally'],
      correct: 0,
      explanation: '<code>try</code> block ke andar wo risky code hota hai jo runtime exception throw kar sakta hai. Agar exception aata hai to use <code>catch</code> block aakar sambhalta hai.'
    },
    {
      id: 20,
      topic: 'oop-exceptions',
      question: 'Java ke Exception Handling hierarchy (tree) mein sabse top-level (super) class kaunsi hai?',
      options: ['Exception', 'Error', 'Throwable', 'RuntimeException'],
      correct: 2,
      explanation: '<code>java.lang.Throwable</code> class exception hierarchy ke top par hai. Iski do main direct subclasses hoti hain: <code>Exception</code> aur <code>Error</code>.'
    },
    {
      id: 21,
      topic: 'oop-exceptions',
      question: 'C++ mein agar ek exception throw hota hai par code mein use catch karne ke liye koi block nahi hai, toh aage kya hota hai?',
      options: ['Program chupchap aage badh jayega', 'Default catch block khud compile ho jayega', 'std::terminate() function call hota hai aur program abnormal terminate ho jata hai', 'Compiler warning dekar chalne dega'],
      correct: 2,
      explanation: 'C++ mein unhandled exceptions se seedha <code>std::terminate()</code> call hota hai jisse program wahin crash/abort ho jata hai.'
    },
    {
      id: 22,
      topic: 'oop-exceptions',
      question: 'Java mein database connection ya files ko safely close karne (resource cleanup) ke liye kis block ka upyog kiya jata hai, jo exception aane ya na aane par hamesha chalega?',
      options: ['catch', 'finalize', 'throw', 'finally'],
      correct: 3,
      explanation: '<code>finally</code> block garantee deta hai ki wo execute hoga hi hoga chahe try block success ho ya koi exception aaye. Ye resources release karne ki best jagah hai.'
    },
    {
      id: 23,
      topic: 'oop-exceptions',
      question: 'Java mein apne system ke anusar ek Custom (User-defined) Exception banane ke liye kya karna hota hai?',
      options: ['Exception ya RuntimeException class ko extend (inherit) karna padta hai', 'CustomException interface ko implement karna padta hai', 'Exception class ka object reference variable me pass karna hota hai', 'Upar me se koi nahi'],
      correct: 0,
      explanation: 'Java mein user-defined exception banane ke liye ek nayi class banakar usko <code>Exception</code> (checked ke liye) ya <code>RuntimeException</code> (unchecked ke liye) ko inherit karna zaroori hai.'
    },
    {
      id: 24,
      topic: 'oop-exceptions',
      question: 'Java (AWT/Swing) ke "Delegation Event Model" mein, wo GUI component (jaise Button) jiske uper user click karta hai aur event paida hota hai, use kya kehte hain?',
      options: ['Event Listener', 'Event Source', 'Event Object', 'Event Handler'],
      correct: 1,
      explanation: 'Jis element (Button, TextField) ki state change hone se event paida hota hai (generate hota hai) use "Event Source" kehte hain.'
    },
    {
      id: 25,
      topic: 'oop-files',
      question: 'C++ mein kisi text file se data apne program mein read (Input) karne ke liye vishesh roop se konsi stream class use ki jati hai?',
      options: ['ofstream', 'fstream', 'ifstream', 'iostream'],
      correct: 2,
      explanation: '<code>ifstream</code> (Input File Stream) class se disk par maujood file open hoti hai aur data program me padha ja sakta hai. File me data dalne ke liye <code>ofstream</code> hota hai.'
    },
    {
      id: 26,
      topic: 'oop-files',
      question: 'Java mein Text files jisme 16-bit Unicode characters (jaise Hindi fonts) ho, unhe bina kisi loss ke read aur write karne ke liye kis tarah ki streams best rehti hain?',
      options: ['Byte Streams (InputStream/OutputStream)', 'Character Streams (Reader/Writer)', 'Data Streams', 'Object Streams'],
      correct: 1,
      explanation: 'Java unicode support karta hai, isliye string/text data handle karne ke liye Character Streams (jaise <code>FileReader</code> aur <code>FileWriter</code>) banayi gayi hain. Byte streams binary data (images/audio) ke liye thik hain.'
    },
    {
      id: 27,
      topic: 'oop-files',
      question: 'Java mein Object Serialization ke waqt agar hum chahte hain ki kisi specific variable (jaise password) ka data file ya network me save/write na ho, toh kis keyword ka prayog karenge?',
      options: ['volatile', 'static', 'transient', 'final'],
      correct: 2,
      explanation: '<code>transient</code> keyword jis variable ke sath lagaya jata hai, Serialization process us variable ko ignore kar deti hai aur uski state disk par save nahi hoti (wo default value par revert ho jata hai deserialize hone par).'
    },
    {
      id: 28,
      topic: 'oop-files',
      question: 'C++ mein file ko kholte samay, ye tay karne ke liye ki naya data purane data ko mitaye bina file ke ant (end) me jud jaye, kaunsa file mode (flag) pass kiya jata hai?',
      options: ['ios::out', 'ios::in', 'ios::trunc', 'ios::app'],
      correct: 3,
      explanation: '<code>ios::app</code> (append mode) set karne se pointer directly file ke akhir me chala jata hai jisse previous contents delete nahi hote aur naya data successfuly aage jud jata hai.'
    },
    {
      id: 29,
      topic: 'oop-files',
      question: 'Java ke standard IO statement <code>System.out.println()</code> mein, <code>out</code> kis type (class) ka reference variable hota hai?',
      options: ['PrintStream', 'OutputStream', 'System', 'PrintWriter'],
      correct: 0,
      explanation: '<code>out</code> ek public static member hai System class ke andar, aur iska datatype <code>PrintStream</code> hai. <code>println()</code> method usi PrintStream class ka method hai.'
    },
    {
      id: 30,
      topic: 'oop-files',
      question: 'C++ ki standard stream hierarchy mein sabse top-level base class (parent of all streams) kaunsi hai?',
      options: ['ios_base', 'iostream', 'istream', 'ostream'],
      correct: 0,
      explanation: 'C++ stream hierarchy mein sabse root (base) class <code>ios_base</code> hoti hai. Uske baad <code>ios</code> inherit hoti hai, aur phir wahan se input/output ki <code>istream</code> aur <code>ostream</code> derive hoti hain.'
    }
  ]
};

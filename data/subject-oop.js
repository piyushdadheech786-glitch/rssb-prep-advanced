window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['oop'] = {
  id: 'oop',
  name: 'OOP (C++ & Java)',
  icon: '☕',
  description: 'Object-Oriented Programming principles using C++ and Java. Inheritance, Polymorphism, Exception Handling, and File Streams.',
  topics: [
    {
      id: 'objects-and-classes',
      name: 'Objects and Classes',
      theory: `
        <h3>Introduction to Object-Oriented Programming (OOP)</h3>
        <p>OOP ek programming paradigm hai jo "Objects" ke concept par based hai. Traditional procedure-oriented programming (C, Pascal) main focus functions par hota hai, jabki OOP main data aur functions dono ko ek single unit (object) mein combine kiya jata hai. Isse security aur modularity milti hai.</p>
        
        <h4>Class and Object</h4>
        <p><strong>Class:</strong> Class ek blueprint ya template hoti hai jisse objects banaye jate hain. Ye logical entity hoti hai, memory consume nahi karti (jab tak object na bane). Class apne andar properties (data members/attributes) aur methods (member functions/behavior) rakhti hai.</p>
        <p><strong>Object:</strong> Object ek real-world entity hai jo class ka instance hota hai. Har object ka apna state (data), behavior (methods), aur identity hoti hai. Object creation ke time memory allocate hoti hai.</p>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Class = User-defined data type.<br>
          Object = Variable of that data type.
        </div>

        <h4>Access Specifiers in C++ and Java</h4>
        <p>Access specifiers (ya modifiers) decide karte hain ki class ke members kahan tak accessible hain. Ye Data Hiding aur Encapsulation implement karne ke main tools hain.</p>
        <table class="comparison-table">
          <tr><th>Specifier</th><th>C++ Meaning</th><th>Java Meaning</th></tr>
          <tr><td><strong>Private</strong></td><td>Sirf apni class ke andar accessible. C++ class mein default yehi hota hai.</td><td>Same, only accessible within the class.</td></tr>
          <tr><td><strong>Default (No modifier)</strong></td><td>C++ mein aisa koi keyword nahi. (structs mein default public hota hai)</td><td>Package-private. Apne package ke andar kahin bhi accessible.</td></tr>
          <tr><td><strong>Protected</strong></td><td>Apni class aur child (derived) classes mein accessible.</td><td>Apne package mein + dusre packages ki derived classes mein accessible.</td></tr>
          <tr><td><strong>Public</strong></td><td>Kahin bhi accessible (class, outside, derived etc.)</td><td>Kahin bhi accessible.</td></tr>
        </table>

        <h4>Constructors and Destructors</h4>
        <p><strong>Constructor:</strong> Ye special member function hota hai jiska naam same class ke naam jaisa hota hai. Ye tab automatically call hota hai jab object create hota hai. Iska main kaam object ke data members ko initialize karna hota hai. Constructor ka koi return type nahi hota (even void bhi nahi).</p>
        <ul>
          <li><strong>Default Constructor:</strong> Koi arguments/parameters nahi leta.</li>
          <li><strong>Parameterized Constructor:</strong> Arguments leta hai, jisse object initialization ke time specific values pass ki ja saken.</li>
          <li><strong>Copy Constructor (C++):</strong> Ek object ko dusre existing object (of same class) se initialize karta hai. Example: <code>ClassName obj2 = obj1;</code></li>
        </ul>
        
        <p><strong>Destructor:</strong> C++ mein destructor ek special member function hai jo object ke destroy hone par call hota hai. Iska naam class jaisa hota hai but aage tilde (<code>~</code>) laga hota hai. Ye memory free karne (cleanup) ka kaam karta hai. Java mein Destructor nahi hota, kyunki wahan <strong>Garbage Collector (GC)</strong> background mein memory free karta hai.</p>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Java mein C++ ki tarah copy constructor aur destructor natively popular terms nahi hain. Java mein \`clone()\` method ya copy constructor pattern manually likhte hain. Memory clear ke liye Java mein \`finalize()\` method ka concept tha (jo ab deprecated hai in newer JDKs).
        </div>

        <h4>Static Members</h4>
        <p>Agar koi class member <code>static</code> declare kiya jaye, toh wo us class ke sabhi objects ke beech share hota hai. Har object ke liye uski alag copy nahi banti. Memory mein static variable sirf ek baar jagah leta hai (in Class Area / Method Area).</p>
        <p><strong>Static Methods:</strong> Inko call karne ke liye object banane ki zarurat nahi hoti (ClassName::MethodName in C++, ClassName.MethodName() in Java). Ye methods sirf static variables ko hi directly access kar sakte hain, instance variables ko nahi (kyunki inke paas <code>this</code> pointer nahi hota).</p>
        
        <h4>Example (C++)</h4>
        <pre><code class="language-cpp">
class Student {
private:
    int roll;
public:
    static int count; // static member
    Student(int r) { // Parameterized constructor
        roll = r;
        count++;
    }
    static void showCount() { // Static method
        cout &lt;&lt; "Total Students: " &lt;&lt; count &lt;&lt; endl;
    }
};
int Student::count = 0; // memory allocation for static variable
        </code></pre>
      `
    },
    {
      id: 'inheritance',
      name: 'Inheritance & Virtual Functions',
      theory: `
        <h3>Inheritance in OOP</h3>
        <p>Inheritance ek aisi process hai jisme ek nayi class (Derived/Child class) ek existing class (Base/Parent class) ki properties aur behaviors ko acquire (inherit) karti hai. Iska main objective <strong>Code Reusability</strong> aur <strong>Method Overriding</strong> (Runtime Polymorphism) achieve karna hai.</p>
        
        <p>Is relationship ko "IS-A" relationship kaha jata hai. (e.g., Car is a Vehicle).</p>
        
        <h4>Types of Inheritance</h4>
        <ol>
          <li><strong>Single Inheritance:</strong> Ek base class aur ek derived class. (A -> B)</li>
          <li><strong>Multilevel Inheritance:</strong> Inheritance ki chain hoti hai. (A -> B -> C)</li>
          <li><strong>Hierarchical Inheritance:</strong> Ek base class ki multiple derived classes hoti hain. (A -> B, A -> C)</li>
          <li><strong>Multiple Inheritance:</strong> Ek derived class ki multiple base classes hoti hain. (A, B -> C). <strong>Note:</strong> C++ isko support karta hai, par Java classes ke through Multiple Inheritance support nahi karti (Diamond Problem ko avoid karne ke liye). Java mein iske liye Interfaces ka use hota hai.</li>
          <li><strong>Hybrid Inheritance:</strong> Upar diye gaye types ka mixture. C++ mein isse "Virtual Base Class" ka concept nikal kar aata hai.</li>
        </ol>

        <div class="formula-box">
          <div class="formula-title">📐 Diamond Problem (Multiple Inheritance)</div>
          Agar A base class hai, B aur C ne A ko inherit kiya, aur D ne B aur C dono ko multiple inherit kiya. Ab D ke paas A ke do instances (copies) aa jate hain, jisse ambiguity hoti hai. C++ mein ise solve karne ke liye B aur C ko A se <code>virtual</code> keyword lagakar inherit karna padta hai (Virtual Inheritance).
        </div>

        <h4>Constructors in Inheritance</h4>
        <p>Jab derived class ka object banta hai, toh sabse pehle Base class ka constructor call hota hai, uske baad Derived class ka. Execution order: <strong>Base &rarr; Derived</strong>. Destructor iska ulta execute hota hai: <strong>Derived &rarr; Base</strong>.</p>
        <p>Java mein child class constructor by default parent class ka no-arg (default) constructor call karta hai. Agar parent ka parameterized constructor call karna ho, toh <code>super()</code> keyword ka use pehli statement ke roop mein karna padta hai.</p>

        <h4>Virtual Functions in C++</h4>
        <p>Virtual function ek base class mein declare kiya gaya function hota hai jise derived class mein override kiya jata hai. Iska main kaam <strong>Dynamic Linkage (Late Binding)</strong> achieve karna hai. Jab hum base class ke pointer mein derived class ka object rakhte hain aur override kiya hua function call karte hain, toh agar function virtual nahi hai, tab compiler base class wala function hi call karega (Early binding). Virtual function use karne se Runtime par decide hota hai ki object kis class ka hai aur wahi function call hota hai.</p>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Java mein sabhi non-static, non-final methods by default virtual hote hain. C++ mein aapko explicitly <code>virtual</code> keyword use karna padta hai.
        </div>
      `
    },
    {
      id: 'polymorphism',
      name: 'Polymorphism & Abstract Classes',
      theory: `
        <h3>Polymorphism</h3>
        <p>Polymorphism (Poly = Many, Morph = Forms) ka matlab hai ek hi cheez ka multiple forms mein exist karna. OOP mein iska matlab hai ki ek entity (method, operator, ya object) alag-alag situations mein alag-alag tarike se behave kar sakti hai.</p>
        
        <table class="comparison-table">
          <tr><th>Feature</th><th>Compile-time (Early Binding)</th><th>Run-time (Late Binding)</th></tr>
          <tr><td><strong>Also known as</strong></td><td>Static Binding</td><td>Dynamic Binding</td></tr>
          <tr><td><strong>Mechanisms</strong></td><td>Method Overloading, Operator Overloading (C++)</td><td>Method Overriding (Virtual Functions)</td></tr>
          <tr><td><strong>Resolution</strong></td><td>Compiler compile time par samajh jata hai konsa function call hoga.</td><td>JVM ya C++ Runtime Execution ke time object type dekh kar resolve karta hai.</td></tr>
          <tr><td><strong>Performance</strong></td><td>Fast (kyunki compilation me fix ho jata hai)</td><td>Slightly slower (runtime overhead of V-Table or method lookup)</td></tr>
        </table>

        <h4>1. Compile-Time: Method Overloading</h4>
        <p>Ek hi class mein multiple methods same name ke ho sakte hain, but unka <strong>signature (parameter type, number of parameters, ya sequence) alag hona chahiye</strong>. Sirf return type alag hone se overloading nahi hoti, compiler error dega.</p>

        <h4>2. Run-Time: Method Overriding</h4>
        <p>Jab Derived class Base class ke method ka apna version provide karti hai. Method ka naam, parameters aur return type bilkul same hone chahiye. C++ mein overriding achieve karne ke liye base class function <code>virtual</code> hona zaruri hai base pointer scenario mein.</p>

        <div class="tip-box">
          <div class="tip-title">💡 Java Overriding Rules</div>
          Overridden method ka access modifier restrict nahi kiya ja sakta. (e.g. Agar parent method 'protected' hai, child method ko 'protected' ya 'public' rakhna hoga, 'private' nahi kar sakte).
        </div>

        <h4>Abstract Classes and Interfaces</h4>
        <p><strong>Abstract Class:</strong> Aisi class jiska object (instance) nahi banaya ja sakta. Iska purpose sirf doosri classes ke liye blueprint provide karna hota hai. Isme abstract (incomplete) aur non-abstract (complete) methods dono ho sakte hain.</p>
        <ul>
          <li><strong>C++ mein:</strong> Agar kisi class mein kam se kam ek <strong>Pure Virtual Function</strong> ho (<code>virtual void display() = 0;</code>), toh wo class abstract ban jati hai.</li>
          <li><strong>Java mein:</strong> Class ke aage <code>abstract</code> keyword lagana padta hai. Java mein Abstract method ki koi body nahi hoti.</li>
        </ul>

        <p><strong>Interfaces (Java specific):</strong> Interface 100% abstract class ki tarah behave karta tha (Java 8 se pehle). Iske sabhi methods by default <code>public abstract</code> hote hain, aur sabhi variables <code>public static final</code> hote hain. Ek class multiple interfaces ko <code>implements</code> keyword ke through implement kar sakti hai (achieving multiple inheritance).</p>
      `
    },
    {
      id: 'event-exception',
      name: 'Event and Exception Handling',
      theory: `
        <h3>Exception Handling</h3>
        <p>Program execution ke dauran aane wali abnormal conditions ya runtime errors ko Exception kehte hain. Exception handling ka main maqsad program ke normal flow ko maintain rakhna aur graceful termination karna hai. Aisa na karne par program crash ho jata hai.</p>

        <h4>Key Keywords</h4>
        <ul>
          <li><strong>try:</strong> Is block ke andar wo code rakha jata hai jisme exception aane ke chances hote hain.</li>
          <li><strong>catch:</strong> Try block mein agar exception aati hai, toh use catch block pakadta hai (handle karta hai). Ek try ke sath multiple catch blocks ho sakte hain.</li>
          <li><strong>throw:</strong> Custom exception manually generate ya pass karne ke liye use hota hai. (e.g. <code>throw new ArithmeticException("Divide by zero");</code>)</li>
          <li><strong>throws (Java):</strong> Method signature mein use hota hai batane ke liye ki ye method exception throw kar sakta hai, caller isko handle kare. (e.g. <code>void readFile() throws IOException</code>).</li>
          <li><strong>finally (Java / C#):</strong> Ye block humesha execute hota hai, chahe exception aaye ya na aaye. Mainly resources (jaise file, database connection) ko close karne ke liye use hota hai. C++ mein finally block nahi hota (wahan RAII paradigm use hota hai destructors ke through).</li>
        </ul>

        <div class="formula-box">
          <div class="formula-title">📐 Exception Hierarchy in Java</div>
          <code>Object</code> &rarr; <code>Throwable</code><br>
          Throwable ke do bache hote hain: <strong>Error</strong> (OutOfMemory, StackOverflow - inko handle nahi karte) aur <strong>Exception</strong> (IOException, SQLException, RuntimeException - inko handle karte hain).<br>
          RuntimeException aur uske subclasses <em>Unchecked Exceptions</em> kehlate hain. Baki sabhi exceptions <em>Checked Exceptions</em> hoti hain (compile time par inko handle karna compulsory hai).
        </div>

        <h4>Custom Exceptions</h4>
        <p>C++ aur Java mein hum apni khud ki exception classes bana sakte hain. Java mein iske liye <code>Exception</code> class ko inherit karna padta hai.</p>
        <pre><code class="language-java">
// Java Custom Exception Example
class InvalidAgeException extends Exception {
    public InvalidAgeException(String str) {
        super(str);
    }
}
// Using it: if(age < 18) throw new InvalidAgeException("Not valid");
        </code></pre>

        <h4>Event Handling (Java / GUI)</h4>
        <p>Java mein AWT/Swing me events (jaise button click, mouse movement) handle karne ke liye <strong>Delegation Event Model</strong> ka use hota hai. Isme 3 components hote hain:</p>
        <ol>
          <li><strong>Event Source:</strong> Jis object se event generate hui (e.g., JButton).</li>
          <li><strong>Event Object:</strong> Event ki details (konsa button, x, y coordinates).</li>
          <li><strong>Event Listener:</strong> Wo interface jo event ko handle karta hai (e.g., ActionListener ka <code>actionPerformed</code> method).</li>
        </ol>
      `
    },
    {
      id: 'files-and-streams',
      name: 'Files and Streams (C++ & Java)',
      theory: `
        <h3>Streams and File Handling</h3>
        <p>File handling data ko permanently secondary storage (jaise Hard Disk) par store karne ki facility deti hai. Programming languages "Stream" ka concept use karti hain file operations ke liye. Stream simply means sequence of bytes/characters flowing from source to destination.</p>

        <h4>C++ File Handling</h4>
        <p>C++ mein <code>&lt;fstream&gt;</code> header file use hoti hai. Isme 3 main classes hain:</p>
        <ul>
          <li><strong>ifstream:</strong> File se data read karne (Input stream) ke liye.</li>
          <li><strong>ofstream:</strong> File me data likhne (Output stream) ke liye.</li>
          <li><strong>fstream:</strong> Dono read aur write operations ke liye.</li>
        </ul>
        <p><strong>File Opening Modes in C++:</strong></p>
        <ul>
          <li><code>ios::in</code> - Read mode</li>
          <li><code>ios::out</code> - Write mode (file truncate ho jati hai)</li>
          <li><code>ios::app</code> - Append mode (data end me likha jayega)</li>
          <li><code>ios::ate</code> - At End (file khulte hi pointer end me hoga, but we can move it anywhere)</li>
          <li><code>ios::binary</code> - Binary mode</li>
        </ul>

        <h4>Java File Handling (I/O Streams)</h4>
        <p>Java <code>java.io</code> package me streams ka vasta network aur file handling dono ke liye hota hai. Java mein streams do main categories mein bati hain:</p>
        <ol>
          <li><strong>Byte Streams:</strong> 8-bit bytes ko handle karti hain (e.g., images, binary data). Classes: <code>FileInputStream</code>, <code>FileOutputStream</code>.</li>
          <li><strong>Character Streams:</strong> 16-bit Unicode characters (text files) ko handle karti hain. Classes: <code>FileReader</code>, <code>FileWriter</code>.</li>
        </ol>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Java mein Buffered classes (jaise <code>BufferedReader</code>, <code>BufferedWriter</code>) file I/O operations ko fast banane ke liye use ki jati hain by caching data in memory before writing/reading.
        </div>

        <h4>Serialization Basics (Java)</h4>
        <p>Serialization ek process hai jisme Java Object ki state (uski memory properties) ko ek byte stream me convert kiya jata hai, taaki use file me save kiya ja sake ya network par bheja ja sake. Deserialization iska ulta process hai.</p>
        <ul>
          <li>Iske liye class ko <code>java.io.Serializable</code> (ek Marker interface, isme koi methods nahi hote) implement karna padta hai.</li>
          <li><strong>transient keyword:</strong> Agar aap chahte hain ki object ka koi specific variable serialize na ho (jaise password, temporary pins), toh uske aage <code>transient</code> laga do. Deserialization par iski value default (jaise 0 ya null) ho jayegi.</li>
          <li>Classes used: <code>ObjectOutputStream</code> for serialization, <code>ObjectInputStream</code> for deserialization.</li>
        </ul>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'objects-and-classes',
      question: 'Which of the following is true about a class in Object-Oriented Programming?',
      options: [
        'A class is a physical entity that occupies memory space when defined.',
        'A class is a logical construct that acts as a blueprint for creating objects.',
        'A class can only contain data members and not member functions.',
        'A class must always contain at least one object inside its definition.'
      ],
      correct: 1,
      explanation: 'Class ek logical blueprint ya template hoti hai. Jab tak uska object instantiate nahi hota, wo koi physical memory (for data members) occupy nahi karti. Isliye option B correct hai.'
    },
    {
      id: 2,
      topic: 'objects-and-classes',
      question: 'In C++, what is the default access specifier for the members of a class and a struct, respectively?',
      options: [
        'public for class, private for struct',
        'private for class, public for struct',
        'protected for class, public for struct',
        'private for class, private for struct'
      ],
      correct: 1,
      explanation: 'C++ mein agar koi access specifier nahi diya jaye, to Class ke members default roop se \'private\' hote hain, jabki Struct ke members default roop se \'public\' hote hain.'
    },
    {
      id: 3,
      topic: 'objects-and-classes',
      question: 'What is the purpose of the copy constructor in C++?',
      options: [
        'To copy the source code of one class to another.',
        'To initialize an object using another object of the same class.',
        'To create a deep copy of an object by default.',
        'To invoke the base class constructor explicitly.'
      ],
      correct: 1,
      explanation: 'Copy constructor ka use existing object (same class) se naye object ko initialize karne ke liye kiya jata hai (e.g., ClassName obj2 = obj1;). Default copy constructor shallow copy karta hai, deep copy nahi.'
    },
    {
      id: 4,
      topic: 'objects-and-classes',
      question: 'Which of the following statements about static member functions in C++ is INCORRECT?',
      options: [
        'They can be called without creating an object of the class.',
        'They can only access static data members of the class directly.',
        'They have a implicitly passed "this" pointer.',
        'They cannot be declared as virtual.'
      ],
      correct: 2,
      explanation: 'Static member functions ke paas \'this\' pointer nahi hota kyunki wo kisi specific object se jure nahi hote, balki puri class ko belong karte hain. Isliye option C incorrect hai.'
    },
    {
      id: 5,
      topic: 'objects-and-classes',
      question: 'How does Java handle the destruction of objects compared to C++?',
      options: [
        'Java uses a tilde (~) symbol to define a destructor just like C++.',
        'Java requires the developer to explicitly call the delete() operator.',
        'Java has an automatic Garbage Collector that reclaims memory of unreachable objects.',
        'Java objects are never destroyed and persist until system shutdown.'
      ],
      correct: 2,
      explanation: 'Java mein C++ ki tarah manual memory management (destructors/delete) nahi hota. JVM ka Garbage Collector automatically un objects ki memory free karta hai jinka koi active reference nahi bachta.'
    },
    {
      id: 6,
      topic: 'objects-and-classes',
      question: 'In Java, what is the visibility scope of a member declared with the "protected" access modifier?',
      options: [
        'Accessible only within the same class.',
        'Accessible from anywhere in the same package and from subclasses in other packages.',
        'Accessible only from subclasses within the same package.',
        'Accessible from anywhere in the application.'
      ],
      correct: 1,
      explanation: 'Java mein protected members apne same package mein kahin bhi (classes, non-classes) accessible hote hain, aur dusre packages ki sirf derived (child) classes mein accessible hote hain.'
    },
    {
      id: 7,
      topic: 'objects-and-classes',
      question: 'If a class contains parameterized constructors but no default constructor, what happens when you try to create an object using "ClassName obj;"?',
      options: [
        'The compiler automatically generates a default constructor and the object is created.',
        'A compile-time error occurs because the compiler does not synthesize a default constructor if any other constructor is explicitly defined.',
        'A runtime exception is thrown during execution.',
        'The object is created but its members are initialized to garbage values.'
      ],
      correct: 1,
      explanation: 'Agar programmer ne class mein koi bhi parameterized constructor define kar diya hai, toh compiler apna implicit default constructor nahi banata. Isliye bina parameters pass kiye object banane par compile error aayega.'
    },
    {
      id: 8,
      topic: 'inheritance',
      question: 'Which type of inheritance occurs when a single derived class inherits from multiple base classes?',
      options: [
        'Hierarchical Inheritance',
        'Multilevel Inheritance',
        'Multiple Inheritance',
        'Hybrid Inheritance'
      ],
      correct: 2,
      explanation: 'Jab ek child class ke ek se zyada parent classes hote hain (A, B -> C), toh usse Multiple Inheritance kehte hain. C++ isse directly support karta hai, Java interfaces ke through karta hai.'
    },
    {
      id: 9,
      topic: 'inheritance',
      question: 'What is the "Diamond Problem" in C++?',
      options: [
        'A problem occurring when memory leaks happen in a four-level inheritance tree.',
        'An ambiguity arising in multiple inheritance when two base classes inherit from the same common ancestor, leading to duplicate instances of the ancestor in the final derived class.',
        'An error caused by circular inheritance.',
        'A syntax error when overriding virtual functions multiple times.'
      ],
      correct: 1,
      explanation: 'Diamond problem tab aati hai jab class D do aisi classes B aur C ko inherit kare jinhone same class A ko inherit kiya ho. D mein A ke do instances (data) copy ho jate hain, creating ambiguity. Ise Virtual Inheritance se solve karte hain.'
    },
    {
      id: 10,
      topic: 'inheritance',
      question: 'In C++, to resolve the Diamond Problem, which keyword is used during inheritance?',
      options: [
        'abstract',
        'super',
        'virtual',
        'override'
      ],
      correct: 2,
      explanation: 'Diamond problem solve karne ke liye intermediate classes ko base class se "virtual" keyword ke through inherit karna hota hai (e.g., class B : virtual public A). Isse A ka sirf ek instance final class mein aayega.'
    },
    {
      id: 11,
      topic: 'inheritance',
      question: 'What is the order of constructor execution when an object of a derived class is instantiated in C++?',
      options: [
        'Derived class first, then Base class.',
        'Base class first, then Derived class.',
        'Only the Derived class constructor is executed.',
        'It depends on the order of memory allocation.'
      ],
      correct: 1,
      explanation: 'Inheritance mein constructor execution order top-to-bottom (Base to Derived) hota hai. Destructor ka execution order reverse (Derived to Base) hota hai.'
    },
    {
      id: 12,
      topic: 'inheritance',
      question: 'How can a subclass in Java explicitly invoke the constructor of its immediate superclass?',
      options: [
        'Using the this() keyword.',
        'Using the base() keyword.',
        'Using the super() keyword as the first statement in the subclass constructor.',
        'Using the parent() keyword.'
      ],
      correct: 2,
      explanation: 'Java mein parent class ke constructor ko call karne ke liye super() method ka use kiya jata hai. Yeh child constructor ki sabse pehli line (first statement) honi chahiye.'
    },
    {
      id: 13,
      topic: 'inheritance',
      question: 'Which of the following scenarios describes "Method Overriding"?',
      options: [
        'Defining multiple methods with the same name but different parameters in the same class.',
        'Providing a specific implementation in a subclass for a method that is already defined in its superclass, with the exact same signature.',
        'Using the same operator for different data types.',
        'Hiding the base class member variables by declaring variables with the same name in the derived class.'
      ],
      correct: 1,
      explanation: 'Method Overriding (Runtime Polymorphism) ka matlab hai parent class ke method ko child class mein dobara define karna with exact same name, return type aur parameters (signature).'
    },
    {
      id: 14,
      topic: 'inheritance',
      question: 'In C++, if a base class pointer points to a derived class object, and a non-virtual function is called using this pointer, which class\'s function will be executed?',
      options: [
        'Derived class function',
        'Base class function',
        'A compile-time error occurs',
        'A runtime error occurs'
      ],
      correct: 1,
      explanation: 'Agar function virtual nahi hai, to compiler Early Binding (compile-time binding) karega. Pointer ka type Base class ka hai, isliye Base class ka hi function call hoga, object ka actual type ignore ho jayega.'
    },
    {
      id: 15,
      topic: 'polymorphism',
      question: 'Which of the following forms of polymorphism is resolved during Compile Time?',
      options: [
        'Method Overriding',
        'Virtual Functions',
        'Function Overloading',
        'Interfaces'
      ],
      correct: 2,
      explanation: 'Function Overloading aur Operator Overloading Compile-time polymorphism (Early binding) ke examples hain. Compiler signature dekh kar decide karta hai ki konsa function call hoga.'
    },
    {
      id: 16,
      topic: 'polymorphism',
      question: 'Can we overload a method in Java purely by changing its return type?',
      options: [
        'Yes, changing the return type is sufficient for method overloading.',
        'No, the method signature (number, type, or order of parameters) must change.',
        'Yes, but only if the access modifier is also changed.',
        'Yes, but it is only allowed for static methods.'
      ],
      correct: 1,
      explanation: 'Method overloading ke liye parameters ka type, count ya sequence alag hona zaroori hai. Sirf return type change karne se compiler ambiguity error deta hai kyunki calling ke time return type clear nahi hota.'
    },
    {
      id: 17,
      topic: 'polymorphism',
      question: 'What is a "Pure Virtual Function" in C++?',
      options: [
        'A virtual function that does not take any arguments.',
        'A function declared with the "virtual" keyword and initialized with "= 0", forcing derived classes to provide an implementation.',
        'A virtual function that is free from any side effects.',
        'A function that cannot be overridden in derived classes.'
      ],
      correct: 1,
      explanation: 'Pure virtual function wo function hota hai jiske declaration ke aage "= 0" laga hota hai (e.g., virtual void show() = 0;). Jis class mein ye hota hai wo Abstract Class ban jati hai aur derived classes ko ise override karna compulsory hota hai.'
    },
    {
      id: 18,
      topic: 'polymorphism',
      question: 'What happens if a Java class contains at least one abstract method?',
      options: [
        'The class automatically becomes a final class.',
        'The class must be declared with the "abstract" keyword, and it cannot be instantiated.',
        'The code will fail to compile unless the abstract method is made private.',
        'The abstract method will execute an empty block by default.'
      ],
      correct: 1,
      explanation: 'Java ka rule hai ki agar kisi class me ek bhi abstract method hai, to us puri class ko "abstract" declare karna padta hai. Aur abstract classes ka object (instance) nahi banaya ja sakta.'
    },
    {
      id: 19,
      topic: 'polymorphism',
      question: 'Which of the following is true regarding Interfaces in Java (prior to Java 8)?',
      options: [
        'They can contain implemented methods (with bodies).',
        'They can contain instance variables that can be modified.',
        'All methods are implicitly public and abstract.',
        'A class can only implement one interface at a time.'
      ],
      correct: 2,
      explanation: 'Java 8 se pehle, Interfaces mein sirf public aur abstract methods hi ho sakte the (body nahi hoti thi). Aur usme define kiye gaye variables by default public, static, aur final (constants) hote hain.'
    },
    {
      id: 20,
      topic: 'polymorphism',
      question: 'In Java, what happens if an overridden method in the subclass has a more restrictive access modifier than the method in the superclass? (e.g., superclass method is protected, subclass method is private)',
      options: [
        'It compiles perfectly and executes.',
        'A compile-time error occurs.',
        'A runtime exception is thrown.',
        'The subclass method is completely ignored and the superclass method is executed.'
      ],
      correct: 1,
      explanation: 'Java overriding rule kehta hai ki child class mein overridden method ka access modifier parent class ke muqable kam restrictive ya same ho sakta hai, zyada restrictive nahi. Protected ko private karna compile-time error dega.'
    },
    {
      id: 21,
      topic: 'polymorphism',
      question: 'What is "Downcasting" in OOP?',
      options: [
        'Casting a derived class reference/pointer to a base class reference/pointer.',
        'Casting a base class reference/pointer to a derived class reference/pointer.',
        'Converting an object to a primitive data type.',
        'Reducing the accessibility of a method from public to private.'
      ],
      correct: 1,
      explanation: 'Jab ek Parent reference variable ko explicitly Child reference mein convert kiya jata hai, toh use Downcasting kehte hain. Upcasting (Child to Parent) implicit hoti hai.'
    },
    {
      id: 22,
      topic: 'event-exception',
      question: 'What is the correct sequence of execution for try, catch, and finally blocks in Java when an exception occurs and is successfully caught?',
      options: [
        'try -> finally -> catch',
        'try -> catch -> finally',
        'catch -> try -> finally',
        'try -> catch (finally is skipped if caught)'
      ],
      correct: 1,
      explanation: 'Pehle try block run hota hai. Jaise hi exception aati hai, control catch block mein jata hai. Catch block finish hone ke baad ultimately finally block run hota hai.'
    },
    {
      id: 23,
      topic: 'event-exception',
      question: 'Which block is ALWAYS executed in Java Exception Handling, regardless of whether an exception is thrown or caught? (assuming the JVM does not crash or exit)',
      options: [
        'try block',
        'catch block',
        'finally block',
        'throws block'
      ],
      correct: 2,
      explanation: 'Finally block guaranteed execute hota hai. Yeh resources (database connections, file streams) ko clean/close karne ke liye banaya gaya hai, taki chahe program fail ho ya pass, resource release ho sake.'
    },
    {
      id: 24,
      topic: 'event-exception',
      question: 'In Java, which keyword is used in a method signature to declare that the method might throw a certain exception?',
      options: [
        'throw',
        'throws',
        'catch',
        'finally'
      ],
      correct: 1,
      explanation: '"throws" keyword method signature (e.g., void test() throws IOException) me use hota hai compiler ko batane ke liye. Jabki "throw" keyword explicitly exception object throw karne (throw new Exception()) ke liye use hota hai.'
    },
    {
      id: 25,
      topic: 'event-exception',
      question: 'What is the root class of the Java Exception hierarchy?',
      options: [
        'Exception',
        'Error',
        'Throwable',
        'RuntimeException'
      ],
      correct: 2,
      explanation: 'Java mein sari exceptions aur errors ki super class java.lang.Throwable hai. Iske do main sub-classes hain: Error aur Exception.'
    },
    {
      id: 26,
      topic: 'event-exception',
      question: 'Which of the following is an example of an "Unchecked Exception" in Java?',
      options: [
        'IOException',
        'SQLException',
        'ClassNotFoundException',
        'NullPointerException'
      ],
      correct: 3,
      explanation: 'RuntimeException aur uski sub-classes ko Unchecked Exceptions kaha jata hai (jaise NullPointerException, ArithmeticException). Inko compiler check nahi karta compile-time par, jabki Checked exceptions ko try-catch ya throws ke throw handle karna compulsory hota hai.'
    },
    {
      id: 27,
      topic: 'event-exception',
      question: 'In C++, what happens if an exception is thrown but not caught anywhere in the program?',
      options: [
        'The program ignores the exception and continues execution.',
        'The program terminates abruptly, typically by calling the std::terminate() function.',
        'The compiler automatically generates a default catch block.',
        'It causes a memory leak but execution continues.'
      ],
      correct: 1,
      explanation: 'Agar C++ mein throw ki gayi exception ko koi catch block handle nahi karta, toh execution flow unroll hota hai aur finally std::terminate() call ho jata hai jisse program abort ho jata hai.'
    },
    {
      id: 28,
      topic: 'event-exception',
      question: 'In Java Delegation Event Model, what represents the object that generates the event?',
      options: [
        'Event Listener',
        'Event Object',
        'Event Source',
        'Event Handler'
      ],
      correct: 2,
      explanation: 'Event Source wo GUI component (jaise JButton, JTextField) hota hai jahan user interaction ke karan event create/generate hota hai.'
    },
    {
      id: 29,
      topic: 'files-and-streams',
      question: 'Which C++ file opening mode is used to open a file for output and append data to the end of the file?',
      options: [
        'ios::out',
        'ios::in',
        'ios::app',
        'ios::ate'
      ],
      correct: 2,
      explanation: 'ios::app (append mode) file ko output ke liye open karta hai aur automatically file pointer ko end mein set kar deta hai taki existing data over-write na ho aur naya data last me add ho.'
    },
    {
      id: 30,
      topic: 'files-and-streams',
      question: 'In C++ <fstream> library, which class is specifically used only to READ data from files?',
      options: [
        'ofstream',
        'ifstream',
        'fstream',
        'iostream'
      ],
      correct: 1,
      explanation: 'ifstream (Input File Stream) specifically file se data input (read) lene ke liye hoti hai. ofstream data write karne ke liye, aur fstream dono (read/write) ke liye hoti hai.'
    },
    {
      id: 31,
      topic: 'files-and-streams',
      question: 'Which Java stream classes are designed to handle character streams (16-bit Unicode)?',
      options: [
        'FileInputStream and FileOutputStream',
        'FileReader and FileWriter',
        'DataInputStream and DataOutputStream',
        'BufferedInputStream and BufferedOutputStream'
      ],
      correct: 1,
      explanation: 'Java mein jo classes "Reader" aur "Writer" se end hoti hain wo Character Streams (16-bit Unicode) handle karti hain text data ke liye. Jo "Stream" se end hoti hain wo Byte streams (8-bit) handle karti hain.'
    },
    {
      id: 32,
      topic: 'files-and-streams',
      question: 'What is the purpose of "Serialization" in Java?',
      options: [
        'To compress a file into a zip format to save disk space.',
        'To encrypt the source code of the Java application.',
        'To convert an object\'s state into a stream of bytes so it can be saved to a file or transmitted over a network.',
        'To convert byte streams into character streams.'
      ],
      correct: 2,
      explanation: 'Serialization ek Java object ko byte stream mein convert karne ka process hai taki uski memory state preserve karke file mein store ki ja sake ya network sockets ke through bheji ja sake.'
    },
    {
      id: 33,
      topic: 'files-and-streams',
      question: 'If you want a particular variable in a Java class NOT to be serialized, which keyword should you use?',
      options: [
        'static',
        'volatile',
        'transient',
        'final'
      ],
      correct: 2,
      explanation: '"transient" keyword ka object serialization mein use hota hai. Agar koi field transient marked hai, toh JVM us field ki state ko stream mein save nahi karega. (Security/passwords ke liye useful hai).'
    },
    {
      id: 34,
      topic: 'files-and-streams',
      question: 'Which interface must a class implement in Java to allow its objects to be serialized?',
      options: [
        'java.io.Serializable',
        'java.io.Externalizable',
        'java.io.Cloneable',
        'Both A and B can be used.'
      ],
      correct: 3,
      explanation: 'Objects ko serialize karne ke liye class ko Serializable (marker interface) ya Externalizable (custom serialization ke liye) interface implement karna zaruri hota hai. Warna NotSerializableException aati hai.'
    },
    {
      id: 35,
      topic: 'files-and-streams',
      question: 'What does the eof() function do in C++ file handling?',
      options: [
        'It erases the opened file from disk.',
        'It checks if the End Of File has been reached during a read operation.',
        'It encrypts the output file.',
        'It flushes the file buffer.'
      ],
      correct: 1,
      explanation: 'eof() function (End Of File) ek boolean value (true) return karta hai jab file stream file ke aakhri byte (end) tak pahuch jati hai, jisse loop terminate kiya ja sake.'
    },
    {
      id: 36,
      topic: 'objects-and-classes',
      question: 'What will be the output if you call a virtual function inside a constructor in C++?',
      options: [
        'The virtual function of the most derived class is always called.',
        'A compile-time error occurs.',
        'The virtual function of the class whose constructor is currently executing is called, not the derived class\'s override.',
        'The program crashes with a segmentation fault.'
      ],
      correct: 2,
      explanation: 'C++ mein constructor ke andar se virtual function call karne par dynamic binding kaam nahi karti. Jis class ka constructor chal raha hai, usi class ka version call hota hai, kyunki derived class ka object abhi tak fully construct nahi hua hota.'
    },
    {
      id: 37,
      topic: 'polymorphism',
      question: 'Can you instantiate an Abstract Class in Java or C++?',
      options: [
        'Yes, abstract classes can be instantiated freely.',
        'No, abstract classes cannot be instantiated, only inherited.',
        'Only in C++, Java prevents it.',
        'Only if all the abstract methods are empty.'
      ],
      correct: 1,
      explanation: 'Abstract class ko directly instantiate (object create) nahi kiya ja sakta, chahe wo Java me ho ya C++ me. Iska use bas derived classes ke liye as a base (blueprint) hota hai.'
    },
    {
      id: 38,
      topic: 'event-exception',
      question: 'What is the key difference between throw and throws in Java?',
      options: [
        'throw is used to catch exceptions; throws is used to throw them.',
        'throw is used within a method body to explicitly throw an exception object; throws is used in the method signature to declare exceptions that might be thrown.',
        'throw is used for Checked exceptions only; throws is for Unchecked.',
        'There is no difference, they are synonyms.'
      ],
      correct: 1,
      explanation: 'throw method body ke andar actual exception object fenkne ke liye use hota hai. throws method declaration me use hota hai caller ko alert karne ke liye.'
    }
  ]
};

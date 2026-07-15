window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['dbms'] = {
  id: 'dbms',
  name: 'DBMS',
  icon: '🗄️',
  description: 'E-R Models, Relational Algebra, Normalization, Transactions, Concurrency, SQL',
  topics: [
    {
      id: 'intro',
      name: 'Introduction to DBMS',
      theory: `
        <h3>What is DBMS?</h3>
        <p>Database Management System (DBMS) ek software hai jo users aur database ke beech interface ka kaam karta hai. Ye data ko securely store, retrieve, aur manage karne mein help karta hai.</p>
        
        <h4>File System vs DBMS:</h4>
        <table class="comparison-table">
          <tr><th>Feature</th><th>File System</th><th>DBMS</th></tr>
          <tr><td>Data Redundancy</td><td>High (duplicate data)</td><td>Controlled (No duplication)</td></tr>
          <tr><td>Data Inconsistency</td><td>High risk</td><td>Low risk</td></tr>
          <tr><td>Data Access</td><td>Difficult (needs custom code)</td><td>Easy (using SQL)</td></tr>
          <tr><td>Concurrency</td><td>Poor</td><td>Excellent (ACID properties)</td></tr>
          <tr><td>Security</td><td>Low</td><td>High (authentication, authorization)</td></tr>
        </table>

        <h4>DBMS Architecture:</h4>
        <ul>
          <li><strong>1-Tier Architecture:</strong> User directly database se interact karta hai (e.g., MS Access, SQLite). Koi network connection nahi chahiye.</li>
          <li><strong>2-Tier Architecture:</strong> Client-Server model. Client application directly database server se connect karti hai via APIs like ODBC/JDBC.</li>
          <li><strong>3-Tier Architecture:</strong> Presentation layer (Client), Application layer (Server), aur Database layer. Client sidha DB se baat nahi karta, beech mein application server hota hai (Best for web apps).</li>
        </ul>

        <h4>Data Independence:</h4>
        <p>Upper levels ki schema change kiye bina lower level ki schema change karne ki ability.</p>
        <ul>
          <li><strong>Logical Data Independence:</strong> Conceptual schema mein change (jaise naya column add karna) se external view pe asar nahi padna chahiye. Achieved at logical level.</li>
          <li><strong>Physical Data Independence:</strong> Internal schema mein change (jaise indexing technique badalna ya storage location change karna) se conceptual/logical schema pe asar nahi padna chahiye. Achieved at internal level.</li>
        </ul>

        <div class="tip-box">
          <div class="tip-title">💡 Exam Tip</div>
          Physical data independence logical data independence se zyada easy hoti hai achieve karna kyunki users ko physical storage ki knowledge nahi hoti.
        </div>
      `
    },
    {
      id: 'er-model',
      name: 'E-R Models',
      theory: `
        <h3>Entity-Relationship Model</h3>
        <p>E-R model database ka conceptual design banane ke liye use hota hai. Ye real-world entities aur unke beech relationships ko diagrammatic form mein represent karta hai.</p>

        <h4>Components of ER Diagram:</h4>
        <table class="comparison-table">
          <tr><th>Component</th><th>Representation</th><th>Description</th></tr>
          <tr><td><strong>Entity</strong></td><td>Rectangle</td><td>Real-world object (e.g., Student, Course)</td></tr>
          <tr><td><strong>Weak Entity</strong></td><td>Double Rectangle</td><td>Entity jiske paas primary key nahi hai (e.g., Dependent)</td></tr>
          <tr><td><strong>Relationship</strong></td><td>Diamond</td><td>Entities ke beech link (e.g., Teaches, Enrolls)</td></tr>
          <tr><td><strong>Attribute</strong></td><td>Ellipse/Oval</td><td>Entity ki property (e.g., Name, Age)</td></tr>
          <tr><td><strong>Key Attribute</strong></td><td>Ellipse with underlined text</td><td>Unique identifier (e.g., Roll No)</td></tr>
          <tr><td><strong>Multivalued Attribute</strong></td><td>Double Ellipse</td><td>Ek se zyada values (e.g., Phone Numbers)</td></tr>
          <tr><td><strong>Derived Attribute</strong></td><td>Dashed Ellipse</td><td>Doosre attribute se calculate hota hai (e.g., Age from DOB)</td></tr>
          <tr><td><strong>Composite Attribute</strong></td><td>Tree structure from Ellipse</td><td>Sub-parts hote hain (e.g., Address = Street + City + Zip)</td></tr>
        </table>

        <h4>Mapping Cardinalities / Relationship Types:</h4>
        <ul>
          <li><strong>One-to-One (1:1):</strong> Ek entity instance sirf ek hi dusri entity instance se related hai. (e.g., Citizen - Aadhar Card).</li>
          <li><strong>One-to-Many (1:N):</strong> Ek entity instance bahut saari doosri entity instances se related hai. (e.g., Department - Employees).</li>
          <li><strong>Many-to-One (M:1):</strong> Bahut saari entities ek hi entity se related hain. (e.g., Students - Course).</li>
          <li><strong>Many-to-Many (M:N):</strong> Bahut saari entities bahut saari dusri entities se related hain. (e.g., Students - Teachers).</li>
        </ul>

        <h4>Participation Constraints:</h4>
        <ul>
          <li><strong>Total Participation (Double Line):</strong> Entity set ka har entity relationship mein participate karna zaruri hai. (e.g., Every employee MUST belong to a department).</li>
          <li><strong>Partial Participation (Single Line):</strong> Entity relationship mein participate kar bhi sakti hai, nahi bhi. (e.g., Not all employees manage a department).</li>
        </ul>

        <div class="warning-box">
          <div class="tip-title">⚠️ Important</div>
          Weak entity hamesha strong entity pe depend karti hai via an <strong>identifying relationship</strong> (Double Diamond) aur hamesha Total Participation (Double Line) show karti hai. Iski partial key ko dashed line se underline karte hain.
        </div>
      `
    },
    {
      id: 'relational-algebra',
      name: 'Relational Algebra & Calculus',
      theory: `
        <h3>Relational Algebra</h3>
        <p>Relational algebra ek <strong>procedural query language</strong> hai. Iska matlab ye batata hai ki <em>kya data chahiye</em> aur <em>use KAISE nikalna hai</em>.</p>

        <h4>Basic Operations:</h4>
        <table class="comparison-table">
          <tr><th>Operation</th><th>Symbol</th><th>Description</th></tr>
          <tr><td>Select</td><td>σ (Sigma)</td><td>Rows (tuples) filter karta hai based on condition. Unary op.</td></tr>
          <tr><td>Project</td><td>π (Pi)</td><td>Columns (attributes) select karta hai, duplicates remove karta hai. Unary op.</td></tr>
          <tr><td>Union</td><td>∪</td><td>Do tables ka data combine karta hai (both must be union-compatible).</td></tr>
          <tr><td>Set Difference</td><td>-</td><td>Jo table 1 mein hai par table 2 mein nahi.</td></tr>
          <tr><td>Cartesian Product</td><td>×</td><td>Cross product — har row ko dusri table ki har row se combine karta hai.</td></tr>
          <tr><td>Rename</td><td>ρ (Rho)</td><td>Table ya attributes ka naam change karta hai.</td></tr>
        </table>

        <h4>Join Operations (Derived):</h4>
        <ul>
          <li><strong>Theta Join (⋈θ):</strong> Cartesian product + Selection condition.</li>
          <li><strong>Equi Join:</strong> Theta join jisme condition sirf '=' (equality) ki hoti hai.</li>
          <li><strong>Natural Join (⋈):</strong> Equi join jisme common columns mein se duplicate column remove kar diya jata hai. Automatically common attribute dhundta hai.</li>
          <li><strong>Outer Joins:</strong> (Left Outer ⟕, Right Outer ⟖, Full Outer ⟗) — Unmatched rows ko null ke saath include karte hain.</li>
        </ul>

        <h3>Relational Calculus</h3>
        <p>Relational calculus ek <strong>non-procedural (declarative) query language</strong> hai. Ye sirf batata hai <em>kya chahiye</em>, ye nahi batata ki <em>kaise nikalna hai</em>. Isme do types hote hain:</p>
        <ol>
          <li><strong>Tuple Relational Calculus (TRC):</strong> Variables tuples (rows) ko represent karte hain. Format: { T | Condition(T) }</li>
          <li><strong>Domain Relational Calculus (DRC):</strong> Variables attributes (columns) ko represent karte hain. Format: { <x1, x2..> | Condition }</li>
        </ol>
      `
    },
    {
      id: 'keys',
      name: 'Keys & Relational Databases',
      theory: `
        <h3>Database Keys</h3>
        <p>Keys ka use table mein rows ko uniquely identify karne aur tables ke beech relationships establish karne ke liye hota hai.</p>

        <table class="comparison-table">
          <tr><th>Key Type</th><th>Definition</th><th>Example/Notes</th></tr>
          <tr><td><strong>Super Key</strong></td><td>Set of one or more attributes jo row ko uniquely identify kare.</td><td>{RollNo}, {RollNo, Name}, {RollNo, Email} — All are super keys.</td></tr>
          <tr><td><strong>Candidate Key</strong></td><td>Minimal Super Key (jisme se koi bhi attribute nikalne par wo super key na rahe).</td><td>{RollNo}, {Email}</td></tr>
          <tr><td><strong>Primary Key</strong></td><td>Ek candidate key jisko database designer choose karta hai.</td><td>{RollNo}. Cannot be NULL.</td></tr>
          <tr><td><strong>Alternate Key</strong></td><td>Wo candidate keys jo primary key select nahi hui.</td><td>{Email}</td></tr>
          <tr><td><strong>Foreign Key</strong></td><td>Ek table ki key jo doosri table ki primary key ko refer karti hai.</td><td>Maintains Referential Integrity.</td></tr>
          <tr><td><strong>Composite Key</strong></td><td>Aisi key jo ek se zyada attributes se milkar bani ho.</td><td>{CourseId, StudentId}</td></tr>
        </table>

        <h4>Codd's 12 Rules:</h4>
        <p>Dr. E.F. Codd ne 12 rules diye the (numbered 0 to 12, total 13) jo define karte hain ki ek database ko truly "Relational" hone ke liye kya kya satisfy karna padega. Kuch important rules:</p>
        <ul>
          <li><strong>Rule 1 (Information Rule):</strong> Sara data tables (rows & columns) mein hona chahiye.</li>
          <li><strong>Rule 2 (Guaranteed Access):</strong> Har value (Table Name + Column Name + Primary Key) se accessible honi chahiye.</li>
          <li><strong>Rule 3 (Systematic Treatment of NULL):</strong> NULL must be supported representing missing/unknown data.</li>
          <li><strong>Rule 10 (Integrity Independence):</strong> Integrity constraints alag se define hone chahiye, application code mein nahi.</li>
        </ul>
      `
    },
    {
      id: 'normalization',
      name: 'Normalization & Dependencies',
      theory: `
        <h3>Functional Dependency (FD)</h3>
        <p>Agar X ki value se Y ki value uniquely determine ho sakti hai, toh hum likhte hain X → Y (X determines Y). X ko determinant kehte hain.</p>
        <p><strong>Example:</strong> RollNo → Name, Age</p>
        
        <h3>Normalization</h3>
        <p>Normalization ek process hai jisse database mein se data redundancy (duplication) aur anomalies (Insertion, Updation, Deletion anomalies) ko remove kiya jata hai, tables ko smaller, logical tables mein decompose karke.</p>

        <h4>Normal Forms:</h4>
        <table class="comparison-table">
          <tr><th>Normal Form</th><th>Condition to Satisfy</th></tr>
          <tr><td><strong>1NF (First Normal Form)</strong></td><td>No multi-valued attributes. Har cell mein atomic (single) value honi chahiye.</td></tr>
          <tr><td><strong>2NF (Second Normal Form)</strong></td><td>Must be in 1NF + <strong>No Partial Dependency</strong>. Har non-prime attribute poori candidate key pe fully dependent hona chahiye (sirf uske part par nahi).</td></tr>
          <tr><td><strong>3NF (Third Normal Form)</strong></td><td>Must be in 2NF + <strong>No Transitive Dependency</strong>. Non-prime attribute kisi doosre non-prime attribute pe depend nahi karna chahiye. Rule for X→Y: either X is super key OR Y is prime attribute.</td></tr>
          <tr><td><strong>BCNF (Boyce-Codd NF)</strong></td><td>Stricter than 3NF. For every FD X→Y, X MUST be a super key. (Y prime ho ya na ho farq nahi padta).</td></tr>
          <tr><td><strong>4NF</strong></td><td>Must be in BCNF + No Multi-valued dependencies.</td></tr>
          <tr><td><strong>5NF</strong></td><td>Must be in 4NF + No Join dependencies. (Table cannot be further decomposed without loss of information).</td></tr>
        </table>

        <div class="tip-box">
          <div class="tip-title">💡 Important Formula</div>
          <strong>Prime attribute:</strong> Wo attribute jo kisi candidate key ka part ho. Non-prime: Jo kisi bhi candidate key ka part na ho.
        </div>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          BCNF lossless decomposition hamesha possible hai, par <strong>Dependency Preserving</strong> BCNF decomposition hamesha possible NAHI hota. 3NF dono guarantee karta hai (Lossless + Dependency preserving).
        </div>
      `
    },
    {
      id: 'transaction',
      name: 'Transactions & Concurrency',
      theory: `
        <h3>Transaction & ACID Properties</h3>
        <p>Transaction ek logical unit of work hai jo ya toh poora complete hona chahiye ya bilkul nahi.</p>
        
        <h4>ACID Properties:</h4>
        <ul>
          <li><strong>Atomicity:</strong> "All or Nothing". Ya toh transaction ki saari instructions execute hongi, ya ek bhi nahi. Managed by Transaction Management Component.</li>
          <li><strong>Consistency:</strong> Transaction se pehle aur baad mein database ek consistent (valid) state mein hona chahiye.</li>
          <li><strong>Isolation:</strong> Multiple transactions concurrently run kar rahi hain, to wo ek doosre ko interfere na karein. (Aisa lage jaise sequentially run ho rahi hain). Managed by Concurrency Control.</li>
          <li><strong>Durability:</strong> Ek baar transaction commit ho gayi, toh uska data hamesha ke liye save hona chahiye (even during power failure). Managed by Recovery Management Component.</li>
        </ul>

        <h4>Transaction States:</h4>
        <p>Active → Partially Committed → Committed (successful)</p>
        <p>Active → Failed → Aborted (unsuccessful)</p>
        
        <h3>Concurrency Control Problems:</h3>
        <ul>
          <li><strong>Dirty Read:</strong> Ek transaction uncommitted data padh leti hai dusri transaction ka.</li>
          <li><strong>Lost Update:</strong> Ek transaction ka write overwrite ho jata hai bina read kiye.</li>
          <li><strong>Unrepeatable Read:</strong> Ek hi transaction do baar same data padhti hai, par beech mein kisi aur ne data change kar diya, toh alag values milti hain.</li>
          <li><strong>Phantom Read:</strong> Ek transaction set of rows padhti hai, dusri transaction naya record insert kar deti hai jo us condition ko match karta hai.</li>
        </ul>

        <h3>Schedules & Serializability:</h3>
        <p><strong>Conflict Serializability:</strong> Agar kisi schedule ko swap non-conflicting instructions karke ek serial schedule mein badla ja sake, toh wo conflict serializable hai. Check by drawing Precedence Graph (if no cycle → conflict serializable).</p>
        
        <h3>Concurrency Control Protocols:</h3>
        <p><strong>2PL (Two Phase Locking):</strong> Har transaction ke 2 phases hote hain: Growing phase (sirf locks acquire karega, release nahi) aur Shrinking phase (sirf locks release karega, naye acquire nahi). 2PL ensures conflict serializability but <strong>can cause Deadlock</strong>.</p>
        <p><strong>Timestamp Ordering:</strong> Har transaction ko start time pe timestamp milta hai. Older transactions ko priority milti hai. <strong>No Deadlock</strong>, but starvation possible.</p>
      `
    },
    {
      id: 'indexing',
      name: 'Indexing & Hashing',
      theory: `
        <h3>Indexing</h3>
        <p>Indexing database mein searching fast karne ki technique hai, jaise book ka index page hota hai.</p>
        
        <h4>Types of Indexing:</h4>
        <ul>
          <li><strong>Primary Index:</strong> Data file pehle se SORTED hai Primary Key par, aur index bhi Primary Key pe bana hai. (Sparse hota hai)</li>
          <li><strong>Clustering Index:</strong> Data file SORTED hai kisi Non-Key attribute par, aur usipe index bana hai. (Sparse hota hai)</li>
          <li><strong>Secondary Index:</strong> Data file UNSORTED hai, index kisi bhi attribute (key/non-key) pe bana hai. (Dense hota hai)</li>
        </ul>
        <p><em>Dense Index:</em> Data file ke har ek record ke liye index file mein entry hoti hai.<br>
        <em>Sparse Index:</em> Sirf kuch records (blocks) ke liye index mein entry hoti hai.</p>

        <h4>B-Tree vs B+ Tree:</h4>
        <table class="comparison-table">
          <tr><th>Feature</th><th>B-Tree</th><th>B+ Tree</th></tr>
          <tr><td>Data Storage</td><td>Internal nodes aur leaf nodes dono mein data pointers/records hote hain.</td><td>Sirf Leaf nodes mein data hota hai. Internal nodes mein sirf keys (routing info).</td></tr>
          <tr><td>Search Speed</td><td>Average (key milte hi ruk jate hain).</td><td>Very Fast (kyunki internal nodes mein zyada keys aa sakti hain, height kam hoti hai).</td></tr>
          <tr><td>Sequential Access</td><td>Tough. Inorder traversal chahiye.</td><td>Easy. Saare leaf nodes linked list se connected hote hain.</td></tr>
          <tr><td>Redundancy</td><td>No duplicate keys.</td><td>Internal nodes ki keys leaf nodes mein repeat hoti hain.</td></tr>
        </table>
      `
    },
    {
      id: 'sql',
      name: 'SQL Basics',
      theory: `
        <h3>Structured Query Language (SQL)</h3>
        <p>SQL commands ko 5 categories mein divide kiya jata hai:</p>

        <table class="comparison-table">
          <tr><th>Category</th><th>Full Form</th><th>Commands</th><th>Purpose</th></tr>
          <tr><td><strong>DDL</strong></td><td>Data Definition Language</td><td>CREATE, ALTER, DROP, TRUNCATE, RENAME</td><td>Table structure/schema banana ya change karna.</td></tr>
          <tr><td><strong>DML</strong></td><td>Data Manipulation Language</td><td>SELECT, INSERT, UPDATE, DELETE</td><td>Table ke andar ka data manage karna.</td></tr>
          <tr><td><strong>DCL</strong></td><td>Data Control Language</td><td>GRANT, REVOKE</td><td>Permissions / Access control.</td></tr>
          <tr><td><strong>TCL</strong></td><td>Transaction Control Language</td><td>COMMIT, ROLLBACK, SAVEPOINT</td><td>Transactions ko manage karna.</td></tr>
        </table>

        <div class="warning-box">
          <div class="tip-title">⚠️ TRUNCATE vs DELETE</div>
          DELETE ek DML command hai (condition based delete kar sakti hai, rollback possible hai, slow hai kyunki transaction log maintain hota hai).<br>
          TRUNCATE ek DDL command hai (poori table ka data ek sath empty kar deti hai, rollback possible NAHI hai, fast hai).
        </div>
      `
    }
  ],
  questions: [
    {
      id: 1, topic: 'intro',
      question: 'Which of the following levels of architecture provides physical data independence?',
      options: ['External Level', 'Conceptual Level', 'Internal Level', 'Logical Level'],
      correct: 1,
      explanation: 'Physical data independence is the ability to change internal schema (physical storage) without altering conceptual/logical schema. Therefore, it is achieved between the internal and conceptual level, making the conceptual level immune to physical changes.'
    },
    {
      id: 2, topic: 'intro',
      question: 'In a 3-tier DBMS architecture, what sits between the client and the database server?',
      options: ['Database Manager', 'Application Server', 'Network Gateway', 'ODBC Driver'],
      correct: 1,
      explanation: 'A 3-tier architecture consists of a Client (Presentation tier), an Application Server (Business Logic tier), and a Database Server (Data tier). The application server acts as a middleman.'
    },
    {
      id: 3, topic: 'er-model',
      question: 'In an E-R diagram, a weak entity set is represented by a:',
      options: ['Rectangle', 'Double Rectangle', 'Diamond', 'Double Ellipse'],
      correct: 1,
      explanation: 'In E-R diagrams, a strong entity is a single rectangle, whereas a weak entity (an entity that cannot be uniquely identified by its attributes alone) is represented by a double rectangle.'
    },
    {
      id: 4, topic: 'er-model',
      question: 'An attribute that can be broken down into smaller sub-parts is known as a:',
      options: ['Multivalued attribute', 'Derived attribute', 'Composite attribute', 'Complex attribute'],
      correct: 2,
      explanation: 'A composite attribute is one that can be subdivided into smaller components (e.g., Address can be split into Street, City, State, Zip). Multivalued means having multiple values (like phone numbers).'
    },
    {
      id: 5, topic: 'relational-algebra',
      question: 'Which operation in relational algebra selects specific columns from a relation?',
      options: ['Selection (σ)', 'Projection (π)', 'Cross Product (×)', 'Join (⋈)'],
      correct: 1,
      explanation: 'Projection (π) is used to select specific columns (attributes) and automatically removes duplicate rows in the result. Selection (σ) is used to filter rows based on a condition.'
    },
    {
      id: 6, topic: 'relational-algebra',
      question: 'A Natural Join is equivalent to a Cartesian product followed by:',
      options: ['Projection', 'Selection', 'Selection and Projection', 'Rename'],
      correct: 2,
      explanation: 'Natural join first performs a cartesian product, then performs a Selection (σ) to match values of common attributes (like an equi-join), and finally performs a Projection (π) to remove the duplicate column.'
    },
    {
      id: 7, topic: 'keys',
      question: 'A candidate key that the database designer chooses to identify entities uniquely is called a:',
      options: ['Super Key', 'Foreign Key', 'Alternate Key', 'Primary Key'],
      correct: 3,
      explanation: 'Out of all Candidate Keys, the one specifically chosen by the database designer to uniquely identify records is the Primary Key. The remaining candidate keys become Alternate Keys.'
    },
    {
      id: 8, topic: 'keys',
      question: 'Which of the following constraints ensures that a value in one table must match a value in another table?',
      options: ['Entity Integrity', 'Domain Integrity', 'Referential Integrity', 'Key Constraint'],
      correct: 2,
      explanation: 'Referential Integrity is enforced using Foreign Keys. It ensures that a foreign key value must either be NULL or match an existing primary key value in the referenced table.'
    },
    {
      id: 9, topic: 'normalization',
      question: 'A relation is in 2NF if it is in 1NF and has no:',
      options: ['Transitive dependencies', 'Multi-valued dependencies', 'Partial functional dependencies', 'Join dependencies'],
      correct: 2,
      explanation: 'Second Normal Form (2NF) eliminates partial dependencies. A partial dependency occurs when a non-prime attribute depends on only a part of a composite candidate key.'
    },
    {
      id: 10, topic: 'normalization',
      question: 'Which normal form is concerned with eliminating transitive dependencies?',
      options: ['1NF', '2NF', '3NF', 'BCNF'],
      correct: 2,
      explanation: 'Third Normal Form (3NF) requires the relation to be in 2NF and have no transitive dependencies (where a non-prime attribute depends on another non-prime attribute).'
    },
    {
      id: 11, topic: 'normalization',
      question: 'In BCNF, for every non-trivial functional dependency X → Y, X must be a:',
      options: ['Prime attribute', 'Candidate key', 'Super key', 'Foreign key'],
      correct: 2,
      explanation: 'Boyce-Codd Normal Form (BCNF) strictly requires that for any functional dependency X → Y, the left side (X) must be a super key. It is a stronger version of 3NF.'
    },
    {
      id: 12, topic: 'transaction',
      question: 'Which ACID property guarantees that a transaction is treated as a single, indivisible logical unit of work?',
      options: ['Atomicity', 'Consistency', 'Isolation', 'Durability'],
      correct: 0,
      explanation: 'Atomicity (the "All or Nothing" rule) ensures that either all operations within a transaction are executed successfully, or none of them are. If one part fails, the entire transaction is rolled back.'
    },
    {
      id: 13, topic: 'transaction',
      question: 'The Dirty Read problem occurs when:',
      options: ['A transaction reads a deleted record', 'A transaction reads uncommitted data written by another transaction', 'A transaction reads the same data twice and gets different values', 'A transaction writes data without reading it first'],
      correct: 1,
      explanation: 'A dirty read happens when Transaction A reads data that Transaction B has updated but not yet committed. If B rolls back, A is left with invalid (dirty) data.'
    },
    {
      id: 14, topic: 'transaction',
      question: 'Which concurrency control protocol guarantees serializability but can suffer from deadlocks?',
      options: ['Timestamp Ordering', 'Two-Phase Locking (2PL)', 'Optimistic Concurrency Control', 'Multiple Granularity Locking'],
      correct: 1,
      explanation: 'Two-Phase Locking (2PL) ensures conflict serializability by requiring transactions to acquire all locks before releasing any. However, it does not prevent deadlocks.'
    },
    {
      id: 15, topic: 'indexing',
      question: 'If the data file is sorted on a non-key attribute and an index is built on it, the index is called:',
      options: ['Primary Index', 'Secondary Index', 'Clustering Index', 'Dense Index'],
      correct: 2,
      explanation: 'A Clustering Index is created when the data file is physically sorted on a non-key attribute (called the clustering field). Primary index is on a sorted key, and secondary is on an unsorted attribute.'
    },
    {
      id: 16, topic: 'indexing',
      question: 'A major advantage of B+ trees over B-trees is that:',
      options: ['B+ trees have data only at leaf nodes, allowing more keys in internal nodes', 'B+ trees do not require balancing', 'B+ trees have a greater height than B-trees', 'B+ trees do not allow duplicate keys'],
      correct: 0,
      explanation: 'In B+ trees, internal nodes only store keys for routing, not data pointers. This allows more keys per node, increasing the fanout and reducing the height of the tree, which speeds up search.'
    },
    {
      id: 17, topic: 'sql',
      question: 'Which of the following SQL commands is categorized under DDL?',
      options: ['UPDATE', 'INSERT', 'TRUNCATE', 'COMMIT'],
      correct: 2,
      explanation: 'TRUNCATE is a Data Definition Language (DDL) command that empties a table by deallocating its data pages. UPDATE and INSERT are DML, and COMMIT is TCL.'
    },
    {
      id: 18, topic: 'sql',
      question: 'What is the main difference between DELETE and TRUNCATE in SQL?',
      options: ['DELETE is faster than TRUNCATE', 'DELETE cannot use WHERE clause, TRUNCATE can', 'DELETE logs individual row deletions, TRUNCATE deallocates data pages', 'DELETE is DDL, TRUNCATE is DML'],
      correct: 2,
      explanation: 'DELETE is a DML command that removes rows one by one and records each deletion in the transaction log (so it can be rolled back). TRUNCATE is DDL, removes all data by deallocating pages, is much faster, and generally cannot be rolled back.'
    },
    {
      id: 19, topic: 'er-model',
      question: 'Which symbol denotes a derived attribute in an E-R diagram?',
      options: ['Double ellipse', 'Dashed ellipse', 'Rectangle with rounded corners', 'Diamond'],
      correct: 1,
      explanation: 'A dashed (or dotted) ellipse represents a derived attribute. Its value is not stored physically but is calculated from other attributes (e.g., age calculated from Date of Birth).'
    },
    {
      id: 20, topic: 'normalization',
      question: 'Which normal form deals with the elimination of multi-valued dependencies?',
      options: ['2NF', '3NF', 'BCNF', '4NF'],
      correct: 3,
      explanation: 'Fourth Normal Form (4NF) specifically deals with eliminating non-trivial multi-valued dependencies. A relation is in 4NF if it is in BCNF and has no multi-valued dependencies.'
    },
    {
      id: 21, topic: 'transaction',
      question: 'The highest isolation level in SQL that prevents dirty reads, non-repeatable reads, and phantom reads is:',
      options: ['Read Uncommitted', 'Read Committed', 'Repeatable Read', 'Serializable'],
      correct: 3,
      explanation: 'Serializable is the highest isolation level. It completely isolates transactions from each other, preventing dirty reads, non-repeatable reads, and phantom reads, usually by acquiring range locks.'
    },
    {
      id: 22, topic: 'relational-algebra',
      question: 'Let R1 and R2 be two relations. The Cartesian product of R1 and R2 will yield a relation with a degree equal to:',
      options: ['Degree(R1) × Degree(R2)', 'Degree(R1) + Degree(R2)', 'MAX(Degree(R1), Degree(R2))', 'MIN(Degree(R1), Degree(R2))'],
      correct: 1,
      explanation: 'Degree (number of columns) of Cartesian Product = sum of degrees of both relations (Columns of R1 + Columns of R2). The cardinality (number of rows) = product of their cardinalities.'
    },
    {
      id: 23, topic: 'intro',
      question: 'Data abstraction in a DBMS has three levels. Which level describes how data is actually stored physically?',
      options: ['Conceptual Level', 'Logical Level', 'View Level', 'Internal Level'],
      correct: 3,
      explanation: 'The Internal Level (or Physical Level) describes the physical storage structure of the database. The Conceptual level describes what data is stored, and View level describes user-specific views.'
    },
    {
      id: 24, topic: 'keys',
      question: 'If a primary key consists of more than one attribute, it is known as a:',
      options: ['Foreign Key', 'Composite Key', 'Candidate Key', 'Surrogate Key'],
      correct: 1,
      explanation: 'A Composite Key is a primary key (or candidate key) that consists of two or more attributes that together uniquely identify an entity occurrence.'
    },
    {
      id: 25, topic: 'sql',
      question: 'Which SQL clause is used to filter the results of an aggregate function like SUM() or COUNT()?',
      options: ['WHERE', 'ORDER BY', 'GROUP BY', 'HAVING'],
      correct: 3,
      explanation: 'The HAVING clause is used to filter groups based on aggregate functions. The WHERE clause filters individual rows before aggregation occurs.'
    },
    {
      id: 26, topic: 'transaction',
      question: 'A transaction is in the ______ state when it has executed its final statement but has not yet updated the database on disk.',
      options: ['Active', 'Partially Committed', 'Committed', 'Failed'],
      correct: 1,
      explanation: 'A transaction is partially committed after executing its final statement. It becomes fully committed only after its changes are permanently recorded in the non-volatile storage (disk).'
    },
    {
      id: 27, topic: 'transaction',
      question: 'Which of the following problems occurs when a transaction reads a set of rows satisfying a condition, and another transaction inserts a new row matching that condition?',
      options: ['Dirty Read', 'Lost Update', 'Non-repeatable Read', 'Phantom Read'],
      correct: 3,
      explanation: 'This is the definition of a Phantom Read. A new row "magically" appears in subsequent reads within the same transaction because of an INSERT by a concurrent transaction.'
    },
    {
      id: 28, topic: 'normalization',
      question: 'Dependency preservation is a desirable property of decomposition. Which normal form decomposition DOES NOT guarantee dependency preservation?',
      options: ['1NF', '2NF', '3NF', 'BCNF'],
      correct: 3,
      explanation: 'Decomposition into BCNF guarantees a lossless join but does NOT always guarantee dependency preservation. Decomposition into 3NF can always achieve both.'
    },
    {
      id: 29, topic: 'indexing',
      question: 'Hash-based indexing is most efficient for which type of queries?',
      options: ['Range queries', 'Exact match (Equality) queries', 'Pattern matching queries', 'Sorting operations'],
      correct: 1,
      explanation: 'Hashing is extremely fast (O(1)) for exact match queries (e.g., ID = 100). It is very poor for range queries (e.g., ID > 100), for which B+ trees are much better suited.'
    },
    {
      id: 30, topic: 'er-model',
      question: 'In an E-R model, if an entity set does not have sufficient attributes to form a primary key, it is called a:',
      options: ['Strong entity set', 'Weak entity set', 'Simple entity set', 'Primary entity set'],
      correct: 1,
      explanation: 'A weak entity set lacks a primary key of its own and depends on a strong (identifying) entity set for its existence. It uses a partial key combined with the primary key of the strong entity.'
    },
    {
      id: 31, topic: 'relational-algebra',
      question: 'Which relational algebra operation requires the two input relations to be union-compatible?',
      options: ['Cartesian Product', 'Set Difference', 'Natural Join', 'Selection'],
      correct: 1,
      explanation: 'Union, Set Difference, and Intersection require relations to be union-compatible (same number of attributes, and corresponding attributes must have the same domain).'
    },
    {
      id: 32, topic: 'intro',
      question: 'The overall logical structure of a database is called the:',
      options: ['Database Instance', 'Database Schema', 'Database State', 'Database View'],
      correct: 1,
      explanation: 'The Database Schema is the overall design/structure of the database, defined during the design phase. A Database Instance is the data stored in the database at a particular moment.'
    },
    {
      id: 33, topic: 'sql',
      question: 'The SQL command REVOKE is a type of:',
      options: ['DDL command', 'DML command', 'DCL command', 'TCL command'],
      correct: 2,
      explanation: 'REVOKE is a Data Control Language (DCL) command. DCL commands (GRANT and REVOKE) are used to manage access privileges and security in a database.'
    },
    {
      id: 34, topic: 'transaction',
      question: 'In a precedence graph for conflict serializability, a cycle indicates that the schedule is:',
      options: ['Conflict serializable', 'Not conflict serializable', 'Recoverable', 'View serializable'],
      correct: 1,
      explanation: 'A schedule is conflict serializable if and only if its precedence graph contains NO cycles. If there is a cycle, it means transactions have conflicting cyclic dependencies.'
    },
    {
      id: 35, topic: 'indexing',
      question: 'Which of the following is true regarding a Dense Index?',
      options: ['An index record appears for every search key value in the file', 'An index record appears for only some search key values', 'It is always a primary index', 'It requires less space than a sparse index'],
      correct: 0,
      explanation: 'In a dense index, there is an index entry for every single search key value present in the data file. A sparse index only has entries for some keys (usually one per data block).'
    },
    {
      id: 36, topic: 'normalization',
      question: 'A relation R(A, B, C, D) has functional dependencies A → B and B → C. The dependency A → C is an example of a:',
      options: ['Trivial dependency', 'Partial dependency', 'Transitive dependency', 'Multivalued dependency'],
      correct: 2,
      explanation: 'Since A determines B, and B determines C, A determines C transitively. This is a transitive dependency, which violates Third Normal Form (3NF).'
    }
  ]
};

window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['dbms'] = {
  id: 'dbms',
  name: 'Database Management System',
  icon: '🗄️',
  description: 'DBMS concepts cover karna, from ER models and SQL to Normalization and Transactions, bilkul asaan bhasha mein.',
  topics: [
    {
      id: 'er-model',
      name: 'E-R Models',
      theory: `
        <h3>Entity-Relationship (E-R) Model</h3>
        <p>E-R model ek high-level conceptual data model hai jo real-world problems ko entities aur unke relationships ke through describe karta hai. Design phase mein iska sabse zyada use hota hai.</p>
        
        <h4>Key Concepts:</h4>
        <ul>
          <li><b>Entity:</b> Real world object jiska independent existence ho. (e.g., Student, Employee). Diagram mein <b>Rectangle</b> se dikhate hain.</li>
          <li><b>Weak Entity:</b> Aisi entity jo apni primary key khud na bana sake aur identifying entity pe depend kare. Ise <b>Double Rectangle</b> se show karte hain.</li>
          <li><b>Attribute:</b> Entity ki properties. (e.g., Name, Age). Diagram mein <b>Ellipse (Oval)</b> se dikhate hain.</li>
          <li><b>Relationship:</b> Entities ke beech ka connection. Diagram mein <b>Diamond</b> se show karte hain.</li>
        </ul>

        <h4>Types of Attributes</h4>
        <ul>
          <li><b>Simple:</b> Divide nahi ho sakte (e.g., RollNo).</li>
          <li><b>Composite:</b> Divide ho sakte hain (e.g., Name = First + Middle + Last).</li>
          <li><b>Derived:</b> Dusre attribute se calculate hote hain. (e.g., Age from Date of Birth). <b>Dashed Ellipse</b> se dikhate hain.</li>
          <li><b>Multivalued:</b> Ek se zyada values ho sakti hain (e.g., Phone Numbers). <b>Double Ellipse</b> se dikhate hain.</li>
        </ul>
        
        <div class="formula-box">
          <div class="formula-title">📐 Keys in DBMS</div>
          <b>Super Key:</b> Set of attributes jo uniquely identify kare.<br>
          <b>Candidate Key:</b> Minimal Super Key. Ek table me ek se zyada ho sakti hain.<br>
          <b>Primary Key:</b> Ek aisi Candidate Key jo DB designer select karta hai. Can't be NULL.<br>
          <b>Foreign Key:</b> Ek table ka attribute jo dusri table ki Primary Key ko refer karta hai.
        </div>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          All Candidate Keys are Super Keys, but all Super Keys are not Candidate Keys. Prime attributes wo hote hain jo kisi na kisi candidate key ka hissa hote hain.
        </div>
        
        <h4>Mapping Cardinalities</h4>
        <p>Relationship kitne entities ke beech ho sakti hai: One-to-One (1:1), One-to-Many (1:N), Many-to-One (N:1), Many-to-Many (M:N).</p>
      `
    },
    {
      id: 'relational-algebra',
      name: 'Relational Algebra & Calculus',
      theory: `
        <h3>Relational Algebra</h3>
        <p>Relational Algebra ek procedural query language hai. Matlab yeh batata hai ki <b>"kya data chahiye"</b> aur <b>"kaise milega"</b>.</p>
        
        <h4>Basic Operations:</h4>
        <ul>
          <li><b>Select (σ):</b> Table se specific <b>rows</b> filter karne ke liye. (e.g., $\\sigma_{salary > 50000}(Employee)$)</li>
          <li><b>Project (π):</b> Table se specific <b>columns</b> select karne ke liye. (e.g., $\\pi_{name, salary}(Employee)$)</li>
          <li><b>Union (∪), Intersection (∩), Set Difference (-):</b> Set operations ke liye dono tables ka <b>union-compatible</b> hona zaroori hai (same number of columns aur same data types).</li>
          <li><b>Cartesian Product (X):</b> Dono tables ki har row ko aapas me combine karta hai.</li>
          <li><b>Rename (ρ):</b> Table ya attributes ka naam change karne ke liye.</li>
        </ul>
        
        <h4>Joins</h4>
        <p>Joins basically Cartesian Product aur Select operation ka combination hote hain.</p>
        <ul>
          <li><b>Natural Join (⋈):</b> Common attribute pe join hota hai aur duplicate common attribute hata diya jata hai.</li>
          <li><b>Outer Join:</b> Unmatched rows ko bhi include karte hain (Left, Right, Full Outer Join). Unmatched jagah pe NULL aata hai.</li>
        </ul>
        
        <h3>Relational Calculus</h3>
        <p>Yeh ek non-procedural (declarative) query language hai. Yeh sirf batata hai <b>"kya data chahiye"</b>, ye nahi batata ki "kaise nikalna hai". SQL Relational Calculus par based hai.</p>
        <ul>
          <li>Tuple Relational Calculus (TRC): Rows pe kaam karta hai.</li>
          <li>Domain Relational Calculus (DRC): Columns pe kaam karta hai.</li>
        </ul>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Select (σ) operation <b>horizontal partitioning</b> karta hai (rows filter karta hai), aur Project (π) operation <b>vertical partitioning</b> karta hai (columns filter karta hai). Don't confuse them!
        </div>
      `
    },
    {
      id: 'constraints-triggers',
      name: 'Integrity Constraints & Triggers',
      theory: `
        <h3>Integrity Constraints</h3>
        <p>Database me data hamesha correct, consistent, aur reliable ho, iske liye hum kuch rules lagate hain. Inhein Integrity Constraints kehte hain.</p>
        
        <ol>
          <li><b>Domain Constraints:</b> Har attribute ek specific domain (datatype, format, range) se belong karna chahiye.</li>
          <li><b>Entity Integrity:</b> Primary Key kabhi NULL nahi ho sakti. Agar NULL hogi, toh hum us row ko uniquely identify kaise karenge?</li>
          <li><b>Referential Integrity:</b> Foreign Key constraint. Foreign key ki value ya toh NULL honi chahiye, ya fir refer ki ja rahi parent table ki Primary Key me exist karni chahiye.</li>
          <li><b>Key Constraint:</b> Candidate keys/Primary key ko duplicate values hold nahi karni chahiye.</li>
        </ol>

        <h3>Triggers</h3>
        <p>Trigger ek stored procedure hota hai jo automatically execute hota hai jab database me koi specific event hota hai (INSERT, UPDATE, DELETE).</p>
        
        <p>Triggers follow the <b>ECA Rule (Event - Condition - Action)</b>:</p>
        <ul>
          <li><b>Event:</b> Kya hua? (e.g., Update query aayi)</li>
          <li><b>Condition:</b> Kya condition meet hui? (e.g., Salary increased by > 50%)</li>
          <li><b>Action:</b> Fir kya karna hai? (e.g., Audit table me log daal do)</li>
        </ul>
        
        <h4>Example</h4>
        <pre><code>CREATE TRIGGER SalaryCheck
BEFORE UPDATE ON Employee
FOR EACH ROW
BEGIN
  IF NEW.Salary < 0 THEN
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Salary negative nahi ho sakti';
  END IF;
END;</code></pre>

        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Triggers user ko implicitly enforce kiye jaate hain. Hum explicitly trigger ko <code>CALL</code> karke run nahi kar sakte, wo event occur hone par automatically chalte hain.
        </div>
      `
    },
    {
      id: 'normalization',
      name: 'Normalization',
      theory: `
        <h3>Normalization kya hai?</h3>
        <p>Normalization ek process hai database design ko improve karne ka taaki data redundancy (duplicacy) kam ho aur anomalies (Insertion, Updation, Deletion problems) khatam ho jayein. Ye tables ko chote, related tables me decompose karta hai.</p>
        
        <h4>Functional Dependency (FD)</h4>
        <p>Agar hum attribute X se attribute Y ki value uniquely nikal sakte hain, toh hum kehte hain $X \\rightarrow Y$ (X functionally determines Y). X yahan determinant hai.</p>
        
        <h4>Normal Forms</h4>
        <table class="comparison-table">
          <tr>
            <th>Normal Form</th>
            <th>Rule / Condition</th>
          </tr>
          <tr>
            <td><b>1NF (First Normal Form)</b></td>
            <td>Har column me <b>atomic</b> (indivisible) values honi chahiye. Multivalued attributes allowed nahi hain.</td>
          </tr>
          <tr>
            <td><b>2NF (Second Normal Form)</b></td>
            <td>1NF me ho + <b>No Partial Dependency</b>. (Non-prime attribute ka partial candidate key pe depend karna mana hai). Example: Agar (A,B) candidate key hai, toh A->C nahi hona chahiye.</td>
          </tr>
          <tr>
            <td><b>3NF (Third Normal Form)</b></td>
            <td>2NF me ho + <b>No Transitive Dependency</b>. (Non-prime attribute kisi dusre non-prime attribute pe depend na kare). Ya toh LHS superkey ho, ya RHS prime attribute ho.</td>
          </tr>
          <tr>
            <td><b>BCNF (Boyce-Codd Normal Form)</b></td>
            <td>Stricter than 3NF. Har FD $X \\rightarrow Y$ ke liye, <b>X ka Superkey hona mandatory hai</b>. BCNF humesha lossless hota hai par dependency preserving hona zaroori nahi hai.</td>
          </tr>
        </table>
        
        <div class="formula-box">
          <div class="formula-title">📐 Dependency Preservation vs Lossless Join</div>
          <b>Lossless Join Decomposition:</b> Jab hum table ko tode aur unhe wapas Natural Join se jodein, to original table waapis milni chahiye bina kisi extra (spurious) tuples ke.<br>
          <b>Dependency Preserving:</b> Saari original FDs ya to direct decomposed tables me honi chahiye, ya unke union ke closure se mil jani chahiye.
        </div>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Sari BCNF relations 3NF hoti hain, par saari 3NF, BCNF nahi hoti. BCNF decomposition lossless hota hai, par dependency preserving ki guarantee nahi hoti! (3NF dono ki guarantee deta hai).
        </div>
      `
    },
    {
      id: 'indexing',
      name: 'Indexing & File Structures',
      theory: `
        <h3>Indexing</h3>
        <p>Index ek aisi data structure technique hai jo database se records ko efficiently retrieve (search) karne me madad karti hai, bilkul waise jaise kisi book me piche Index page hota hai.</p>
        
        <h4>Types of Indexing</h4>
        <ul>
          <li><b>Primary Index:</b> Jab data file sequential order me primary key par sorted ho. (Sparse index hoti hai).</li>
          <li><b>Clustering Index:</b> Jab data file non-key attribute par sequentially sorted ho.</li>
          <li><b>Secondary Index:</b> Jab index non-key attribute ya kisi aise attribute par banaya jaye jis par data file sorted na ho. (Dense index hoti hai).</li>
        </ul>
        
        <table class="comparison-table">
          <tr>
            <th>Dense Index</th>
            <th>Sparse Index</th>
          </tr>
          <tr>
            <td>Har ek search-key value ke liye index entry hoti hai.</td>
            <td>Kuch hi search-key values ke liye index entry hoti hai.</td>
          </tr>
          <tr>
            <td>Space zyada leti hai.</td>
            <td>Space kam leti hai.</td>
          </tr>
          <tr>
            <td>Searching fast hoti hai.</td>
            <td>Searching slightly slow, extra disk I/O lag sakta hai.</td>
          </tr>
        </table>

        <h4>B-Trees & B+ Trees</h4>
        <p>Ye balanced tree structures hain jo disk-based search ke liye use hote hain.</p>
        <ul>
          <li><b>B-Tree:</b> Data pointers internal nodes aur leaf nodes dono me hote hain. Range queries thodi slow hoti hain.</li>
          <li><b>B+ Tree:</b> Saare data pointers sirf leaf nodes par hote hain aur leaves aapas me linked list se connected hote hain. Isliye B+ tree file systems aur RDBMS me indexing ke liye sabse best hai aur <b>range queries</b> me bohot fast hai.</li>
        </ul>
        
        <h4>Hashing</h4>
        <p>Hashing ek math function use karta hai jo key ko seedha disk block (bucket) address me convert kar deta hai, jisse O(1) time complexity me record milta hai. <b>Static Hashing</b> aur <b>Dynamic/Extendible Hashing</b> iske 2 types hain.</p>
      `
    },
    {
      id: 'transaction-concurrency',
      name: 'Transaction Processing & Concurrency Control',
      theory: `
        <h3>Transaction Processing</h3>
        <p>Transaction ek logical unit of work hai jo kai SQL statements ka group hota hai. Ya toh poora chale (Commit), ya kuch na chale (Rollback).</p>
        
        <div class="formula-box">
          <div class="formula-title">📐 ACID Properties</div>
          <b>A - Atomicity:</b> "All or Nothing". Ya to transaction poora complete hoga, ya bilkul nahi hoga. Transaction Manager ise ensure karta hai.<br>
          <b>C - Consistency:</b> Transaction execution ke baad database ek valid state me rehna chahiye. Application Programmer iska dhyan rakhta hai.<br>
          <b>I - Isolation:</b> Multiple transactions ek dusre ko interfere nahi karni chahiye. Concurrency Control Manager ise handle karta hai.<br>
          <b>D - Durability:</b> Ek baar commit hone ke baad data permanently save ho jana chahiye, chahe system crash hi kyun na ho. Recovery Manager dekhta hai.
        </div>
        
        <h4>Schedules & Serializability</h4>
        <p>Multiple transactions ka order of execution <b>Schedule</b> kahlata hai. Agar concurrency ki wajah se problem na ho to use Serializable Schedule kehte hain.</p>
        <ul>
          <li><b>Conflict Serializability:</b> Check karta hai kya non-serial schedule ko instructions swap karke serial banaya ja sakta hai? (Using Precedence Graph / Conflict Graph - agar cycle hai to not conflict serializable).</li>
          <li><b>View Serializability:</b> Thoda lenient hai. Conflict serializable schedules humesha view serializable hote hain, par vice versa zaroori nahi (specially with blind writes).</li>
        </ul>
        
        <h3>Concurrency Control Protocols</h3>
        <p>Iska kaam Isolation property ko maintain karna hai. Problems jaise Lost Update, Dirty Read, Unrepeatable Read aati hain agar theek se handle na karein to.</p>
        
        <h4>Lock-Based Protocols</h4>
        <ul>
          <li><b>Shared Lock (S):</b> Sirf Read (R) karne ki permission.</li>
          <li><b>Exclusive Lock (X):</b> Read (R) aur Write (W) dono ki permission.</li>
          <li><b>2PL (Two-Phase Locking):</b> Isme do phases hote hain: Growing phase (locks acquire) aur Shrinking phase (locks release). Basic 2PL serializability guarantee karta hai, par deadlocks aa sakte hain.</li>
        </ul>
        
        <div class="tip-box">
          <div class="tip-title">💡 Strict 2PL</div>
          Strict 2PL ensures ki transaction commit/abort hone tak apne saare Exclusive (X) locks hold rakhe. Ye <b>Cascadeless</b> schedules produce karta hai jisme cascading rollbacks nahi hote.
        </div>
      `
    },
    {
      id: 'rdbms',
      name: 'RDBMS Concepts & SQL',
      theory: `
        <h3>Relational Database Management System</h3>
        <p>RDBMS data ko tables (relations) ke format me store karta hai jisme rows (tuples) aur columns (attributes) hote hain. E.g., MySQL, Oracle, PostgreSQL.</p>
        
        <h4>SQL (Structured Query Language) Sub-languages:</h4>
        <table class="comparison-table">
          <tr>
            <th>Language</th>
            <th>Full Form</th>
            <th>Commands</th>
            <th>Purpose</th>
          </tr>
          <tr>
            <td><b>DDL</b></td>
            <td>Data Definition Language</td>
            <td>CREATE, ALTER, DROP, TRUNCATE</td>
            <td>Database schema define aur modify karna. (Auto-committed)</td>
          </tr>
          <tr>
            <td><b>DML</b></td>
            <td>Data Manipulation Language</td>
            <td>SELECT, INSERT, UPDATE, DELETE</td>
            <td>Data ke saath khelna. (Not auto-committed)</td>
          </tr>
          <tr>
            <td><b>DCL</b></td>
            <td>Data Control Language</td>
            <td>GRANT, REVOKE</td>
            <td>Permissions and rights manage karna.</td>
          </tr>
          <tr>
            <td><b>TCL</b></td>
            <td>Transaction Control Language</td>
            <td>COMMIT, ROLLBACK, SAVEPOINT</td>
            <td>Transactions ko manage karna.</td>
          </tr>
        </table>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap: DELETE vs TRUNCATE vs DROP</div>
          <ul>
            <li><b>DELETE:</b> DML command. Rows delete karta hai, WHERE clause lag sakta hai, Rollback ho sakta hai. Slower hai.</li>
            <li><b>TRUNCATE:</b> DDL command. Table empty kar deta hai (saari rows), WHERE nahi lagta. Rollback nahi ho sakta. Fast hai.</li>
            <li><b>DROP:</b> DDL command. Table structure aur data dono uda deta hai database se.</li>
          </ul>
        </div>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'er-model',
      question: 'E-R diagram me "Weak Entity" ko kis symbol se darshaya jata hai?',
      options: ['Rectangle', 'Double Rectangle', 'Ellipse', 'Double Ellipse'],
      correct: 1,
      explanation: 'Weak entity ko Double Rectangle se darshaya jata hai. Rectangle strong entity ke liye hota hai, Ellipse attribute ke liye, aur Double Ellipse multivalued attribute ke liye hota hai.'
    },
    {
      id: 2,
      topic: 'er-model',
      question: 'Ek student ke paas ek se zyada phone numbers ho sakte hain. E-R model me is attribute ko kya kaha jayega?',
      options: ['Composite attribute', 'Derived attribute', 'Multivalued attribute', 'Key attribute'],
      correct: 2,
      explanation: 'Jab ek attribute ki ek entity instance ke liye ek se zyada values hoti hain (jaise phone numbers), use Multivalued attribute kehte hain. Composite matlab jo sub-parts me toot sake (jaise Name into First, Last).'
    },
    {
      id: 3,
      topic: 'er-model',
      question: 'Inmein se konsa statement "Candidate Key" ke liye sahi hai?',
      options: [
        'Har candidate key primary key hoti hai.',
        'Har super key candidate key hoti hai.',
        'Candidate key minimal super key hoti hai.',
        'Candidate key null value allow karti hai.'
      ],
      correct: 2,
      explanation: 'Candidate key hamesha minimal super key hoti hai (jisme koi unnecessary attribute na ho). Ek relation me kai candidate keys ho sakti hain, par primary key sirf ek hoti hai.'
    },
    {
      id: 4,
      topic: 'er-model',
      question: 'Agar attribute B ki value attribute A se calculate ki ja sakti hai, to E-R diagram me B ko kis tarah dikhate hain?',
      options: ['Solid Ellipse', 'Double Ellipse', 'Dashed Ellipse', 'Diamond'],
      correct: 2,
      explanation: 'B ek Derived attribute hai (jaise Age derived from DOB). Derived attributes ko Dashed Ellipse se dikhaya jata hai.'
    },
    {
      id: 5,
      topic: 'relational-algebra',
      question: 'Relational Algebra me "Select" operation ka symbol kya hota hai?',
      options: ['π (Pi)', 'σ (Sigma)', 'ρ (Rho)', '⋈ (Bow-tie)'],
      correct: 1,
      explanation: 'Select operation ke liye σ (Sigma) use hota hai jo specific rows nikalta hai. π (Pi) Project ke liye hota hai, ρ (Rho) Rename ke liye, aur ⋈ Natural Join ke liye.'
    },
    {
      id: 6,
      topic: 'relational-algebra',
      question: 'Table R aur Table S ka Natural Join (R ⋈ S) perform karne ke liye kya zaruri hai?',
      options: [
        'Dono tables me same number of rows honi chahiye.',
        'Dono tables ka union-compatible hona zaruri hai.',
        'Dono tables me kam se kam ek common attribute hona chahiye.',
        'Dono tables ki primary key same honi chahiye.'
      ],
      correct: 2,
      explanation: 'Natural join common attribute(s) ke basis pe tables ko combine karta hai. Agar common attribute nahi hai, to wo Cartesian Product ban jata hai.'
    },
    {
      id: 7,
      topic: 'relational-algebra',
      question: 'Kaunsa relational algebra operation "Vertical Partitioning" perform karta hai?',
      options: ['Select', 'Project', 'Join', 'Division'],
      correct: 1,
      explanation: 'Project (π) operation columns filter karta hai, jo vertical partitioning kehlati hai. Select (σ) horizontal partitioning karta hai.'
    },
    {
      id: 8,
      topic: 'relational-algebra',
      question: 'Relational Calculus kis tarah ki language hai?',
      options: ['Procedural language', 'Non-procedural language', 'Object-oriented language', 'Assembly language'],
      correct: 1,
      explanation: 'Relational Calculus ek declarative (non-procedural) language hai. Ye sirf batata hai "WHAT to retrieve" without specifying "HOW to retrieve".'
    },
    {
      id: 9,
      topic: 'relational-algebra',
      question: 'Set Difference (A - B) apply karne ke liye relations A aur B ko kya hona zaruri hai?',
      options: ['Disjoint', 'Union-compatible', 'Equi-join compatible', 'Same names for all tuples'],
      correct: 1,
      explanation: 'Set operations (Union, Intersection, Set Difference) ke liye tables ka Union-compatible hona zaruri hai (same degree/number of columns aur corresponding domains/datatypes same).'
    },
    {
      id: 10,
      topic: 'constraints-triggers',
      question: 'Primary key me null value nahi aa sakti. Yeh kaunsa constraint hai?',
      options: ['Domain Integrity', 'Referential Integrity', 'Entity Integrity', 'User-defined Integrity'],
      correct: 2,
      explanation: 'Entity Integrity constraint kehta hai ki primary key ke attributes kabhi NULL nahi ho sakte kyonki null unique identification me fail ho jata hai.'
    },
    {
      id: 11,
      topic: 'constraints-triggers',
      question: 'Foreign key constraint ko database me kis naam se jana jata hai?',
      options: ['Entity Integrity', 'Domain Integrity', 'Referential Integrity', 'Semantic Integrity'],
      correct: 2,
      explanation: 'Referential Integrity constraint ensure karta hai ki table me jo foreign key hai wo dusri table ke primary key valid values ko refer kare ya fir null ho.'
    },
    {
      id: 12,
      topic: 'constraints-triggers',
      question: 'Database trigger me ECA rule me "C" ka matlab kya hai?',
      options: ['Control', 'Condition', 'Command', 'Commit'],
      correct: 1,
      explanation: 'ECA stands for Event - Condition - Action. Trigger tab fire hota hai jab event ho aur condition true (meet) ho, tabhi action perform hota hai.'
    },
    {
      id: 13,
      topic: 'constraints-triggers',
      question: 'Inmein se kaunsa operation event nahi hai jiske liye Trigger banaya ja sake?',
      options: ['INSERT', 'SELECT', 'UPDATE', 'DELETE'],
      correct: 1,
      explanation: 'Triggers DML modifications pe invoke hote hain (INSERT, UPDATE, DELETE). SELECT operation state modify nahi karta, isliye uspe trigger nahi lagta.'
    },
    {
      id: 14,
      topic: 'normalization',
      question: 'Agar kisi relation me multivalued attributes hain, to wo kaunsi normal form me NAHI hai?',
      options: ['1NF', '2NF', '3NF', 'BCNF'],
      correct: 0,
      explanation: 'First Normal Form (1NF) ka primary rule hai ki saare attributes atomic (indivisible) hone chahiye, multivalued attributes allowed nahi hain.'
    },
    {
      id: 15,
      topic: 'normalization',
      question: '"Partial Dependency" remove karna kis normal form ka requirement hai?',
      options: ['1NF', '2NF', '3NF', 'BCNF'],
      correct: 1,
      explanation: 'Second Normal Form (2NF) ensure karta hai ki koi bhi non-prime attribute candidate key ke part (partial key) par depend na kare (No partial dependency).'
    },
    {
      id: 16,
      topic: 'normalization',
      question: 'Ek relation me functional dependency A -> B aur B -> C hai, jisse A -> C banti hai. Ise kya kehte hain?',
      options: ['Partial Dependency', 'Transitive Dependency', 'Multivalued Dependency', 'Join Dependency'],
      correct: 1,
      explanation: 'Ise Transitive Dependency kehte hain. 3NF isko hatane pe focus karti hai (non-key attribute non-key pe depend nahi karna chahiye).'
    },
    {
      id: 17,
      topic: 'normalization',
      question: 'Kaunsi Normal Form ye guarantee deti hai ki har determinant ek Super Key hoga?',
      options: ['2NF', '3NF', 'BCNF', '4NF'],
      correct: 2,
      explanation: 'Boyce-Codd Normal Form (BCNF) strict hoti hai. Isme har non-trivial FD X -> Y ke liye, X ka super key hona anivarya (mandatory) hai.'
    },
    {
      id: 18,
      topic: 'normalization',
      question: 'Boyce-Codd Normal Form (BCNF) decomposition ke baare me kya humesha sach hai?',
      options: ['It is Dependency Preserving always', 'It is Lossless Join always', 'Both Lossless and Dependency Preserving always', 'None of the above'],
      correct: 1,
      explanation: 'BCNF me decompose karna humesha Lossless hota hai (extra rows nahi banti), par ye zaroori nahi ki saari original dependencies (FDs) preserve ho jayein.'
    },
    {
      id: 19,
      topic: 'indexing',
      question: 'Agar database table sequential file par based hai aur sorting ek non-key attribute par hui hai, to banne wale index ko kya kahenge?',
      options: ['Primary Index', 'Clustering Index', 'Secondary Index', 'Dense Index'],
      correct: 1,
      explanation: 'Agar file sorted hai par kisi non-key (not uniquely identifying) attribute par, to use Clustering index kehte hain. Primary key par sorted hone par use Primary index kehte hain.'
    },
    {
      id: 20,
      topic: 'indexing',
      question: 'B+ Tree me data pointers kahan store hote hain?',
      options: ['Internal nodes only', 'Root node only', 'Leaf nodes only', 'Both internal and leaf nodes'],
      correct: 2,
      explanation: 'B+ Tree me saare data pointers (actual data records ke address) sirf Leaf nodes par hote hain. Internal nodes sirf search-keys store karte hain routing ke liye. B-tree me dono jagah hote hain.'
    },
    {
      id: 21,
      topic: 'indexing',
      question: 'Aisi index jisme har ek search key value ke liye ek index record hota hai, use kya kehte hain?',
      options: ['Sparse Index', 'Dense Index', 'Clustered Index', 'Hash Index'],
      correct: 1,
      explanation: 'Dense index me har unique search key value ke liye index me ek entry hoti hai. Sparse index me sirf kuch chuni hui values (jaise har block ki pehli value) ke liye entry hoti hai.'
    },
    {
      id: 22,
      topic: 'indexing',
      question: 'RDBMS me range queries (e.g., Salary between 10k and 50k) ke liye sabse fast data structure konsa hai?',
      options: ['B-Tree', 'B+ Tree', 'Hashing', 'Linked List'],
      correct: 1,
      explanation: 'B+ Tree ke leaf nodes aapas me ek linked list ki tarah connected hote hain, jo sequentially next records read karna bohot fast bana dete hain. Hashing exact match me fast hai, range me fail ho jati hai.'
    },
    {
      id: 23,
      topic: 'transaction-concurrency',
      question: 'ACID properties me "Atomicity" ki guarantee kaunsa component leta hai?',
      options: ['Concurrency Control Manager', 'Transaction Manager', 'Recovery Manager', 'Buffer Manager'],
      correct: 1,
      explanation: 'Atomicity ("All or Nothing") ko Transaction Manager dekhta hai. Recovery Manager Durability ko sambhalta hai aur Concurrency Control Isolation ko.'
    },
    {
      id: 24,
      topic: 'transaction-concurrency',
      question: 'Precedence graph kis tarah ki serializability check karne ke kaam aata hai?',
      options: ['View Serializability', 'Conflict Serializability', 'Strict Serializability', 'Two-phase Serializability'],
      correct: 1,
      explanation: 'Conflict serializability test karne ke liye Precedence graph (ya Conflict graph) banate hain. Agar graph me cycle hai, to schedule conflict serializable NAHI hai.'
    },
    {
      id: 25,
      topic: 'transaction-concurrency',
      question: 'Strict 2-Phase Locking (Strict 2PL) algorithm kaunsi problem rokti hai?',
      options: ['Deadlocks', 'Cascading Rollbacks', 'Starvation', 'Phantom Read'],
      correct: 1,
      explanation: 'Strict 2PL me transaction commit/abort hone tak apne write (Exclusive) locks release nahi karta. Isse dirty read nahi hota aur Cascading rollbacks (ek abort hone pe kai abort hona) se bachaav hota hai.'
    },
    {
      id: 26,
      topic: 'transaction-concurrency',
      question: 'Transaction read operation karta hai us value ko jise dusre uncommitted transaction ne update kiya tha. Ise kya kehte hain?',
      options: ['Dirty Read', 'Unrepeatable Read', 'Lost Update', 'Phantom Read'],
      correct: 0,
      explanation: 'Dirty Read tab hota hai jab T1 ek data padhta hai jise T2 ne update to kiya hai par abhi commit nahi kiya. Agar T2 rollback karta hai, to T1 ke paas galat (dirty) data reh jayega.'
    },
    {
      id: 27,
      topic: 'transaction-concurrency',
      question: 'Deadlock aane par database recovery manager ka sabse aam (common) action kya hota hai?',
      options: ['Wait for user input', 'Abort one or more transactions', 'Restart the whole server', 'Ignore the deadlock'],
      correct: 1,
      explanation: 'Database manager deadlock detect karne ke baad ek "Victim" (kisi ek transaction) ko chunta hai aur use abort/rollback kar deta hai taaki baaki apna kaam kar sakein.'
    },
    {
      id: 28,
      topic: 'rdbms',
      question: 'SQL me `TRUNCATE TABLE` kis prakar ki command hai?',
      options: ['DML (Data Manipulation Language)', 'DDL (Data Definition Language)', 'DCL (Data Control Language)', 'TCL (Transaction Control Language)'],
      correct: 1,
      explanation: 'TRUNCATE ek DDL command hai kyonki ye internal table structure ko reset karta hai, iska rollback nahi ho sakta (in most DBs). DELETE DML hoti hai.'
    },
    {
      id: 29,
      topic: 'rdbms',
      question: 'Inmein se kis SQL command ko DML (Data Manipulation Language) kaha jata hai?',
      options: ['CREATE', 'DROP', 'UPDATE', 'GRANT'],
      correct: 2,
      explanation: 'UPDATE ek DML command hai jo data me modification karti hai. CREATE aur DROP DDL hain, aur GRANT DCL hai.'
    },
    {
      id: 30,
      topic: 'rdbms',
      question: 'Database me kisi transaction ke successfully complete hone ke baad changes ko permanently save karne wali SQL command kaunsi hai?',
      options: ['SAVEPOINT', 'COMMIT', 'ROLLBACK', 'MERGE'],
      correct: 1,
      explanation: 'COMMIT command batati hai ki transaction successful rahi aur ab in changes ko database me permanently save kiya jaye (Durability property).'
    },
    {
      id: 31,
      topic: 'rdbms',
      question: 'SQL me ek naya column table me jodna ho to kaunsi command use ki jati hai?',
      options: ['ADD COLUMN', 'UPDATE TABLE', 'ALTER TABLE', 'MODIFY TABLE'],
      correct: 2,
      explanation: 'ALTER TABLE command DDL ka part hai, jiska use existing table me columns add, drop ya modify karne ke liye kiya jata hai (e.g., ALTER TABLE table_name ADD col_name datatype).'
    }
  ]
};

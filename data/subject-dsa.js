window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['dsa'] = {
  id: 'dsa',
  name: 'Data Structures & Algorithms',
  icon: '🌳',
  description: 'Complete DSA including Arrays, Linked Lists, Trees, Graphs aur Sorting-Searching.',
  topics: [
    {
      id: 'adt',
      name: 'Abstract Data Types (ADT)',
      theory: `
        <h3>Abstract Data Type (ADT) Kya Hai?</h3>
        <p>ADT ek logical description hai jisme hum define karte hain ki data kaisa hoga aur uspar kaun se operations perform kiye ja sakte hain, lekin <b>kaise</b> implement hoga ye nahi batate. Isko "What to do" vs "How to do" se samjho. Hum sirf "What" define karte hain.</p>
        
        <h4>Data Type vs ADT</h4>
        <ul>
          <li><b>Data Type:</b> Jaise <code>int</code> ya <code>float</code>. Programming language inka size aur implementation handle karti hai.</li>
          <li><b>ADT:</b> Jaise List, Stack, ya Queue. User sirf behavior janta hai (jaise Push/Pop in Stack).</li>
        </ul>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          ADT is independent of implementation. Ek Queue ADT ko aap Array se bhi implement kar sakte ho aur Linked List se bhi.
        </div>
        
        <h4>Example</h4>
        <p><b>Stack ADT:</b> Operations define kiye gaye hain: <code>push()</code>, <code>pop()</code>, <code>isFull()</code>, <code>isEmpty()</code>. Par code mein array use hoga ya pointers, ye user se hidden hota hai (Data Abstraction).</p>
      `
    },
    {
      id: 'arrays',
      name: 'Arrays',
      theory: `
        <h3>Arrays Kya Hote Hain?</h3>
        <p>Array ek linear data structure hai jo elements ko <b>contiguous (lagatar) memory locations</b> me store karta hai. Sabhi elements same data type ke hone chahiye.</p>
        
        <h4>1D aur 2D Arrays</h4>
        <p><b>1D Array:</b> Simple list of elements. Access using index (e.g., <code>A[i]</code>).</p>
        <p><b>2D Array:</b> Matrix form me data store karta hai. Memory me ye linear form me hi store hota hai - Row-Major Order ya Column-Major Order ke through.</p>
        
        <div class="formula-box">
          <div class="formula-title">📐 Formula / Key Point</div>
          <b>Address Calculation in 1D Array:</b><br>
          Loc(A[i]) = Base_Address + w * (i - Lower_Bound)<br>
          <i>(w = size of each element)</i><br><br>
          <b>Row-Major Order for 2D Array A[M][N]:</b><br>
          Loc(A[i][j]) = Base_Address + w * [N * (i - LR) + (j - LC)]
        </div>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Agar array ka Lower Bound nahi diya hai question me, toh default <code>0</code> maanna, par agar explicit limits diye hain jaise <code>A[1..10]</code>, toh Lower Bound <code>1</code> hoga!
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p>Find address of A[3] if Base Address = 1000, size = 4 bytes, aur array 0-indexed hai.<br>
        Loc(A[3]) = 1000 + 4 * (3 - 0) = 1000 + 12 = 1012.</p>
      `
    },
    {
      id: 'll-vs-array',
      name: 'Linked List v/s Array',
      theory: `
        <h3>Array aur Linked List me Antar</h3>
        <p>Array ek static data structure hai jabki Linked List ek dynamic data structure hai jo runtime pe grow ya shrink ho sakta hai.</p>
        
        <table class="comparison-table">
          <tr>
            <th>Feature</th>
            <th>Array</th>
            <th>Linked List</th>
          </tr>
          <tr>
            <td>Memory Allocation</td>
            <td>Contiguous memory, usually static (compile time).</td>
            <td>Non-contiguous memory, dynamic (run time) via pointers.</td>
          </tr>
          <tr>
            <td>Access Time</td>
            <td>O(1) - Random Access possible.</td>
            <td>O(n) - Sequential access only (traverse karna padta hai).</td>
          </tr>
          <tr>
            <td>Insertion/Deletion</td>
            <td>O(n) - elements ko shift karna padta hai.</td>
            <td>O(1) (agar pointer pata ho) - Sirf pointer links badalne hote hain.</td>
          </tr>
          <tr>
            <td>Memory Wastage</td>
            <td>Wastage agar size se kam use ho, ya memory kam pad sakti hai.</td>
            <td>Extra memory lagti hai pointers (links) store karne ke liye.</td>
          </tr>
        </table>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Agar aapko bar-bar "Search" karna hai toh Array best hai. Agar bar-bar "Insert/Delete" karna hai middle me, toh Linked List best hai.
        </div>
        
        <h4>Types of Linked Lists</h4>
        <ul>
          <li><b>Singly Linked List:</b> Sirf aage badh sakte hain (Next pointer).</li>
          <li><b>Doubly Linked List:</b> Aage aur peeche dono ja sakte hain (Prev and Next pointers).</li>
          <li><b>Circular Linked List:</b> Last node ka next pointer wapas first node pe point karta hai.</li>
        </ul>
      `
    },
    {
      id: 'stack',
      name: 'Stack & Stack Operations',
      theory: `
        <h3>Stack Kya Hai?</h3>
        <p>Stack ek linear data structure hai jo <b>LIFO (Last In First Out)</b> principle pe kaam karta hai. Jo element sabse last me daala gaya, wo sabse pehle niklega (Jaise shadi me rakhi plates ka dher).</p>
        
        <h4>Stack Operations</h4>
        <ul>
          <li><b>Push:</b> Element add karna. (Top badhta hai)</li>
          <li><b>Pop:</b> Element nikalna. (Top ghat-ta hai)</li>
          <li><b>Peek / Top:</b> Sabse upar wale element ko dekhna bina nikale.</li>
        </ul>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          <b>Overflow:</b> Jab Stack full ho aur hum Push karne ka try karein.<br>
          <b>Underflow:</b> Jab Stack empty ho aur hum Pop karne ka try karein.
        </div>
        
        <h4>Applications of Stack</h4>
        <p>Exam me direct questions aate hain ki inme se kaunsa stack ka use case hai:</p>
        <ul>
          <li>Function calls aur Recursion manage karna (Call Stack).</li>
          <li>Expression evaluation (Postfix, Prefix).</li>
          <li>Infix to Postfix conversion.</li>
          <li>Parentheses matching / Balanced bracket check.</li>
          <li>Browser ka Back/Forward button history.</li>
        </ul>
        
        <h4>Example: Infix to Postfix</h4>
        <p>Expression: <code>A + B * C</code><br>
        Postfix banega: <code>A B C * +</code> (Kyunki * ki precedence + se zyada hai, wo pehle evaluate hoga).</p>
      `
    },
    {
      id: 'queue',
      name: 'Queues',
      theory: `
        <h3>Queue Kya Hai?</h3>
        <p>Queue ek linear data structure hai jo <b>FIFO (First In First Out)</b> principle follow karta hai. Jo pehle aayega, wo pehle jayega (Jaise ticket counter ki line).</p>
        
        <h4>Queue Operations</h4>
        <ul>
          <li><b>Enqueue:</b> Element add karna (Rear side se).</li>
          <li><b>Dequeue:</b> Element nikalna (Front side se).</li>
        </ul>
        <p>Jab Rear array ke last index pe pahunch jata hai, toh normal queue me hum naye elements insert nahi kar sakte, bhale hi aage jagah khali ho. Ise overcome karne ke liye Circular Queue aayi.</p>
        
        <div class="formula-box">
          <div class="formula-title">📐 Formula / Key Point</div>
          <b>Circular Queue:</b><br>
          Next Rear = <code>(Rear + 1) % MAX_SIZE</code><br>
          Queue Full condition: <code>(Rear + 1) % MAX_SIZE == Front</code>
        </div>
        
        <h4>Types of Queues</h4>
        <ul>
          <li><b>Circular Queue:</b> End ko front se connect kar dete hain to save memory.</li>
          <li><b>Priority Queue:</b> Har element ke sath priority hoti hai. Dequeue highest priority element ko pehle nikalta hai (Min-Heap ya Max-Heap se implement hoti hai).</li>
          <li><b>Deque (Double Ended Queue):</b> Insertion aur deletion dono ends (Front aur Rear) se ho sakte hain.</li>
        </ul>
      `
    },
    {
      id: 'binary-trees',
      name: 'Binary Trees',
      theory: `
        <h3>Binary Tree Kya Hai?</h3>
        <p>Binary Tree ek hierarchical data structure hai jisme har node ke <b>maximum 2 children</b> (Left child aur Right child) ho sakte hain.</p>
        
        <h4>Important Types of Binary Trees</h4>
        <ul>
          <li><b>Strict / Proper / Full Binary Tree:</b> Har node ke ya toh 0 ya 2 children hote hain. (1 child allowed nahi hai).</li>
          <li><b>Complete Binary Tree:</b> Sabhi levels puri tarah bhare hote hain, except possibly last level. Last level me nodes strictly left se right fill hone chahiye (Array representation ke liye best).</li>
          <li><b>Perfect Binary Tree:</b> Sabhi internal nodes ke 2 children hote hain aur sabhi leaf nodes same level pe hote hain.</li>
        </ul>
        
        <div class="formula-box">
          <div class="formula-title">📐 Formula / Key Point</div>
          - Maximum nodes at level <i>L</i> = <b>2<sup>L</sup></b> (Root level 0 hai)<br>
          - Max nodes in tree of height <i>h</i> = <b>2<sup>h+1</sup> - 1</b>
        </div>
        
        <h4>Tree Traversals</h4>
        <p>Traversal ka matlab hai har node ko exactly ek baar visit karna.</p>
        <ul>
          <li><b>Inorder (Left, Root, Right):</b> Root beech me aata hai.</li>
          <li><b>Preorder (Root, Left, Right):</b> Root sabse pehle.</li>
          <li><b>Postorder (Left, Right, Root):</b> Root sabse last me.</li>
        </ul>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Expression tree me: Inorder = Infix expression, Preorder = Prefix expression, Postorder = Postfix expression.
        </div>
      `
    },
    {
      id: 'bst',
      name: 'Binary Search Trees (BST)',
      theory: `
        <h3>Binary Search Tree (BST) Kya Hai?</h3>
        <p>BST ek special Binary Tree hai jiski ek property hoti hai: Har node ke liye, uske <b>Left subtree</b> ki sabhi values choti hoti hain, aur <b>Right subtree</b> ki sabhi values badi hoti hain.</p>
        
        <pre>
          50
         /  \\
       30    70
      / \\   /  \\
     20 40 60   80
        </pre>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Kisi bhi BST ka <b>Inorder Traversal</b> humesha elements ko <b>Sorted (Ascending) Order</b> me deta hai. Ye bahut common exam question hai!
        </div>
        
        <h4>Time Complexity</h4>
        <table class="comparison-table">
          <tr><th>Operation</th><th>Average Case</th><th>Worst Case</th></tr>
          <tr><td>Search</td><td>O(log n)</td><td>O(n)</td></tr>
          <tr><td>Insert</td><td>O(log n)</td><td>O(n)</td></tr>
          <tr><td>Delete</td><td>O(log n)</td><td>O(n)</td></tr>
        </table>
        <p><b>Worst Case kab aata hai?</b> Jab tree ek taraf jhuk jaye (Skewed Tree), jaise elements 10, 20, 30, 40 lagatar insert kiye gaye hon. Is problem ko solve karne ke liye <b>AVL Trees</b> ya <b>Red-Black Trees</b> (Balanced BST) use hote hain.</p>
      `
    },
    {
      id: 'graphs',
      name: 'Graphs',
      theory: `
        <h3>Graph Kya Hai?</h3>
        <p>Graph non-linear data structure hai jo Vertices (V) aur unhe connect karne wali Edges (E) ka collection hota hai. G = (V, E).</p>
        
        <h4>Types of Graphs</h4>
        <ul>
          <li><b>Directed Graph (Digraph):</b> Edges ki direction hoti hai (A -> B).</li>
          <li><b>Undirected Graph:</b> Edges bidirecitonal hoti hain (A - B).</li>
          <li><b>Weighted Graph:</b> Edges pe koi weight ya cost assign hota hai.</li>
        </ul>
        
        <h4>Graph Representation</h4>
        <ul>
          <li><b>Adjacency Matrix:</b> 2D array <code>A[V][V]</code> jahan A[i][j] = 1 agar edge hai warna 0. Dense graphs ke liye achha hai.</li>
          <li><b>Adjacency List:</b> Array of Linked Lists. Sparse graphs ke liye memory bachata hai.</li>
        </ul>
        
        <h4>Graph Traversals</h4>
        <table class="comparison-table">
          <tr>
            <th>Traversal</th>
            <th>Data Structure Used</th>
            <th>Application</th>
          </tr>
          <tr>
            <td>Breadth First Search (BFS)</td>
            <td>Queue</td>
            <td>Shortest path in unweighted graph, Level-order traversal.</td>
          </tr>
          <tr>
            <td>Depth First Search (DFS)</td>
            <td>Stack (ya Recursion)</td>
            <td>Cycle detection, Topological sorting, Maze solving.</td>
          </tr>
        </table>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Tree bhi ek Graph hai! Bas Tree connected graph hai jisme <b>koi cycles (loops) nahi hote</b>. Ek tree me N vertices aur N-1 edges hoti hain.
        </div>
      `
    },
    {
      id: 'sorting-searching',
      name: 'Sorting & Searching',
      theory: `
        <h3>Searching</h3>
        <p><b>1. Linear Search:</b> Array ke har element ko ek-ek karke check karte hain. Array unsorted hone pe bhi kaam karta hai. Time Complexity: <b>O(n)</b>.</p>
        <p><b>2. Binary Search:</b> Sirf <b>Sorted</b> arrays pe kaam karta hai. Array ko middle se divide karte jate hain. Time Complexity: <b>O(log n)</b>. Divide and Conquer approach.</p>
        
        <h3>Sorting Algorithms</h3>
        <p>Array ya list ko ascending ya descending order me jamana.</p>
        
        <table class="comparison-table">
          <tr>
            <th>Algorithm</th>
            <th>Best Time</th>
            <th>Worst Time</th>
            <th>Concept</th>
          </tr>
          <tr>
            <td>Bubble Sort</td>
            <td>O(n)</td>
            <td>O(n<sup>2</sup>)</td>
            <td>Adjacent elements ko compare and swap karo.</td>
          </tr>
          <tr>
            <td>Selection Sort</td>
            <td>O(n<sup>2</sup>)</td>
            <td>O(n<sup>2</sup>)</td>
            <td>Minimum element dhoondh kar shuru me rakho.</td>
          </tr>
          <tr>
            <td>Insertion Sort</td>
            <td>O(n)</td>
            <td>O(n<sup>2</sup>)</td>
            <td>Cards khelne jaisa - sahi jagah pe insert karo.</td>
          </tr>
          <tr>
            <td>Merge Sort</td>
            <td>O(n log n)</td>
            <td>O(n log n)</td>
            <td>Divide & Conquer. Extra O(n) space lagta hai. Stable sort.</td>
          </tr>
          <tr>
            <td>Quick Sort</td>
            <td>O(n log n)</td>
            <td>O(n<sup>2</sup>)</td>
            <td>Pivot element choose karke partition karte hain.</td>
          </tr>
        </table>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          - <b>Stable Sort:</b> Agar duplicate elements apni relative order maintain rakhte hain (e.g. Merge Sort, Insertion Sort).<br>
          - <b>In-place Sort:</b> Jo extra array/memory use nahi karte (e.g. Quick Sort, Bubble Sort). Merge sort In-place nahi hai.
        </div>
      `
    },
    {
      id: 'symbol-table',
      name: 'Symbol Table',
      theory: `
        <h3>Symbol Table Kya Hai?</h3>
        <p>Symbol Table ek important data structure hai jo <b>Compilers</b> dwara use kiya jata hai. Ye source code me maujud sabhi identifiers (variables, functions, classes) ke bare me information store karta hai, jaise unka data type, scope, aur memory location.</p>
        
        <h4>Operations supported:</h4>
        <ul>
          <li><b>Insert:</b> Naya identifier add karna.</li>
          <li><b>Lookup / Search:</b> Identifier ki details find karna.</li>
          <li><b>Delete:</b> Jab variable out-of-scope jaye to remove karna.</li>
        </ul>
        
        <h4>Implementations of Symbol Table</h4>
        <p>Symbol Table ko quickly search karna hota hai, isliye efficient data structures ka use zaroori hai:</p>
        <ul>
          <li><b>Unordered List (Array/Linked List):</b> Insert O(1) hai but Search slow (O(n)) hota hai. Sirf chote programs me theek hai.</li>
          <li><b>Binary Search Tree (BST):</b> Average case me search, insert dono <b>O(log n)</b> hote hain. Balanced BST aur achha performance deta hai.</li>
          <li><b>Hash Table:</b> Sabse popular choice hai! Average case me Search aur Insert dono <b>O(1)</b> time me ho jate hain. Symbol lookup bahut fast ho jata hai.</li>
        </ul>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Question aata hai "Which data structure is most suitable for implementing Symbol Table?". Answer <b>Hash Table</b> hoga kyunki iski average time complexity O(1) hai.
        </div>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'adt',
      question: 'Abstract Data Type (ADT) inme se kis baat par focus karta hai?',
      options: ['Data structure ko memory me kaise implement karna hai', 'Data structure par kya operations perform kiye ja sakte hain', 'Algorithm ki time complexity par', 'Pointers ke management par'],
      correct: 1,
      explanation: 'ADT sirf ye describe karta hai ki data ka logical view kaisa hai aur kaunse operations ("What to do") perform honge. Memory me implementation details ("How to do") hidden hoti hai (Data Abstraction).'
    },
    {
      id: 2,
      topic: 'adt',
      question: 'Inme se kaunsa ek Abstract Data Type (ADT) nahi hai?',
      options: ['Stack', 'Queue', 'Integer', 'List'],
      correct: 2,
      explanation: 'Integer ek primitive Data Type hai jo directly programming language aur hardware dwara support kiya jata hai. Stack, Queue, List abstract concepts (ADT) hain jinhe Arrays ya Linked Lists use karke implement karna padta hai.'
    },
    {
      id: 3,
      topic: 'adt',
      question: 'ADT ka fayda (advantage) inme se kya hai?',
      options: ['Code execution speed directly badhata hai', 'Data Encapsulation aur Information Hiding provide karta hai', 'Hard disk space bachata hai', 'None of the above'],
      correct: 1,
      explanation: 'ADT ka main fayda Data Abstraction aur Information Hiding hai. User ko internal implementation ki fikar nahi hoti, wo sirf interface (operations) ko use karta hai.'
    },
    {
      id: 4,
      topic: 'arrays',
      question: 'Ek 2D array A[5][5] memory me Row-Major order me store hai. Base address 100 hai aur element size 2 bytes hai. A[2][3] ka address kya hoga? (Array 0-indexed hai)',
      options: ['126', '124', '130', '132'],
      correct: 0,
      explanation: 'Row-Major formula: Loc(A[i][j]) = Base + w * (N * i + j). Yahan Base = 100, w = 2, N = 5 (columns), i = 2, j = 3. Loc = 100 + 2 * (5 * 2 + 3) = 100 + 2 * (13) = 100 + 26 = 126.'
    },
    {
      id: 5,
      topic: 'arrays',
      question: 'Arrays me kis wajah se "Random Access" possible hota hai?',
      options: ['Pointers ki wajah se', 'Contiguous memory allocation ki wajah se', 'Dynamic memory ki wajah se', 'Indices hash map me store hone ki wajah se'],
      correct: 1,
      explanation: 'Array contiguous (lagatar) memory me store hota hai. Base address me offset multiply karke hum direct kisi bhi index O(1) time me pahunch sakte hain.'
    },
    {
      id: 6,
      topic: 'arrays',
      question: 'Agar Array ka naam <code>arr</code> hai, toh <code>arr</code> kisko point karta hai?',
      options: ['Pura array memory size', 'First element ki value', 'Array ke first element ke base address ko', 'Array ke aakhri element ko'],
      correct: 2,
      explanation: 'C/C++ jaisi languages me array ka naam apne pehle element ke base address ki tarah act karta hai. i.e. arr == &arr[0].'
    },
    {
      id: 7,
      topic: 'll-vs-array',
      question: 'Linked List me kisi naye element ko middle me insert karne ki average time complexity (assuming position pointer is given) kya hai, in comparison to Array?',
      options: ['Array me O(n), Linked List me O(1)', 'Array me O(1), Linked List me O(n)', 'Dono me O(1)', 'Dono me O(n)'],
      correct: 0,
      explanation: 'Array me middle me insert karne ke liye aage ke elements ko shift karna padta hai, so O(n). Linked List me sirf next pointers change karne hote hain, isliye O(1) time lagta hai agar hum us node tak pahunch chuke hain.'
    },
    {
      id: 8,
      topic: 'll-vs-array',
      question: 'Inme se kis operation ke liye Array, Linked list se behtar (fast) perform karta hai?',
      options: ['Dynamic memory resize', 'Insertion at beginning', 'Accessing ith element', 'Deleting first element'],
      correct: 2,
      explanation: 'Array random access support karta hai, isliye ith element ko O(1) time me access kar sakte hain. Linked list me traverse karna padega so O(n) time lagta hai.'
    },
    {
      id: 9,
      topic: 'll-vs-array',
      question: 'Singly Linked list ka aakhri node kisko point karta hai?',
      options: ['Head node ko', 'NULL', 'Random memory address', 'Previous node ko'],
      correct: 1,
      explanation: 'Singly linked list me aakhri node ka pointer field NULL hota hai, jo list ka end indicate karta hai. Circular linked list me wo wapas pehle node ko point karta hai.'
    },
    {
      id: 10,
      topic: 'stack',
      question: 'Infix expression "A+B*C" ka Postfix expression kya hoga?',
      options: ['A B C + *', 'A B C * +', '+ A * B C', '* + A B C'],
      correct: 1,
      explanation: 'Multiplication (*) ki precedence Addition (+) se zyada hai. Toh B*C banega BC*. Uske baad A + (BC*) banega A B C * +.'
    },
    {
      id: 11,
      topic: 'stack',
      question: 'Jab ek recursive function khud ko call karta hai, toh memory me konsa data structure local variables manage karne ke liye automatically use hota hai?',
      options: ['Queue', 'Linked List', 'Stack', 'Tree'],
      correct: 2,
      explanation: 'Function calls aur recursion ko handle karne ke liye System/Call Stack ka use hota hai. Har function call ka ek stack frame banaya jata hai jo LIFO order me execute/return hota hai.'
    },
    {
      id: 12,
      topic: 'stack',
      question: 'Stack Underflow ka kya matlab hai?',
      options: ['Jab hum full stack me push karte hain', 'Jab stack memory space occupy nahi occupy karta', 'Jab hum empty stack se pop karne ki koshish karte hain', 'Jab bottom element nikalte hain'],
      correct: 2,
      explanation: 'Underflow ek error state hai jab hum kisi aisi data structure se item remove/delete karne ka try karte hain jo pehle se hi khali (empty) hai.'
    },
    {
      id: 13,
      topic: 'queue',
      question: 'Circular Queue me queue FULL hone ki condition kya hai? (Mano array size N hai)',
      options: ['Front == Rear', 'Front == (Rear + 1) % N', 'Rear == N - 1', 'Front == 0'],
      correct: 1,
      explanation: 'Circular queue me hum agla index (Rear+1)%N se nikalte hain. Agar agla index wahi hai jahan Front betha hai, iska matlab saari jagah bhar chuki hai aur hum Rear ko aage nahi badha sakte.'
    },
    {
      id: 14,
      topic: 'queue',
      question: 'Priority Queue implement karne ke liye sabse best data structure kaunsa hai?',
      options: ['Array', 'Linked List', 'Stack', 'Heap (Min/Max)'],
      correct: 3,
      explanation: 'Heap data structure priority queues implement karne ke liye best hai kyunki element insert karne me aur highest priority element nikalne (extract-min/max) me O(log n) time lagta hai.'
    },
    {
      id: 15,
      topic: 'queue',
      question: 'Deque (Double Ended Queue) ki main khaasiyat kya hoti hai?',
      options: ['Sirf ek end se operations hote hain', 'Middle se delete kar sakte hain', 'Insertion aur Deletion dono ends (Front aur Rear) se possible hain', 'Priority ke hisab se sorted rehta hai'],
      correct: 2,
      explanation: 'Deque (Double Ended Queue) me FIFO rule strictly follow nahi hota. Aap aage aur peeche, dono taraf se elements add ya remove kar sakte hain.'
    },
    {
      id: 16,
      topic: 'binary-trees',
      question: 'Ek Complete Binary Tree jisme 15 nodes hain, uski depth/height kya hogi? (Root ki level 0 maaniye)',
      options: ['3', '4', '7', '15'],
      correct: 0,
      explanation: 'Complete binary tree jisme sab level bhare hon (Perfect BT), usme nodes = 2^(h+1) - 1 hote hain. 15 = 2^4 - 1. So h = 3. Levels 0, 1, 2, 3 hongi.'
    },
    {
      id: 17,
      topic: 'binary-trees',
      question: 'Tree traversal ka kaunsa method root node ko sabse last me visit karta hai?',
      options: ['Preorder', 'Inorder', 'Postorder', 'Level order'],
      correct: 2,
      explanation: 'Postorder traversal me pehle Left child visit hota hai, fir Right child, aur aakhir me Root node visit hoti hai (Left, Right, Root).'
    },
    {
      id: 18,
      topic: 'binary-trees',
      question: 'Strict (Proper) Binary tree ke andar ek internal node ke kitne children ho sakte hain?',
      options: ['1 or 2', 'Exactly 1', 'Exactly 2', '0 or 1'],
      correct: 2,
      explanation: 'Strict (ya Proper) binary tree me kisi bhi node ka 1 child nahi ho sakta. Ya toh node leaf hogi (0 child) ya phir uske exactly 2 children honge.'
    },
    {
      id: 19,
      topic: 'bst',
      question: 'Binary Search Tree (BST) ka Inorder traversal humesha kis order me result deta hai?',
      options: ['Descending order', 'Ascending (Sorted) order', 'Random order', 'Level order'],
      correct: 1,
      explanation: 'Inorder me Left -> Root -> Right hota hai. BST ki property hai Left < Root < Right. Isliye Inorder traversal humesha sorted (Ascending order) sequence deta hai.'
    },
    {
      id: 20,
      topic: 'bst',
      question: 'Ek fully Skewed BST (jaise 10->20->30->40) me naya element search karne ki worst-case time complexity kya hoti hai?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
      correct: 2,
      explanation: 'Jab tree ek taraf skewed ho (saare right ya saare left child), to wo Linked List ki tarah act karta hai, aur root se leaf tak search karne me O(n) time lagta hai.'
    },
    {
      id: 21,
      topic: 'bst',
      question: 'AVL Tree aur BST me basic difference kya hai?',
      options: ['AVL me n nodes allowed nahi hain', 'AVL tree self-balancing BST hota hai', 'AVL sirf character data store karta hai', 'AVL me 3 children hote hain'],
      correct: 1,
      explanation: 'AVL tree ek special BST hai jo har insertion/deletion ke baad apne height ko balance (balance factor) karta hai, taaki worst-case complexity O(log n) rahe.'
    },
    {
      id: 22,
      topic: 'graphs',
      question: 'Breadth First Search (BFS) graph traversal ke liye kaunsa data structure use kiya jata hai?',
      options: ['Stack', 'Queue', 'Array', 'Heap'],
      correct: 1,
      explanation: 'BFS me level-by-level traversal hota hai. Jo nodes pehle discover hoti hain unhe pehle explore karna hota hai (FIFO), isliye Queue ka use hota hai.'
    },
    {
      id: 23,
      topic: 'graphs',
      question: 'Dense graphs jisme zyada edges hoti hain, unhe represent karne ke liye memory ke hisaab se kaunsa tareeka behtar hai?',
      options: ['Adjacency List', 'Adjacency Matrix', 'Edge List', 'None of these'],
      correct: 1,
      explanation: 'Dense graphs (edges O(V^2)) me Adjacency Matrix O(1) time me edge check karne ki suvidha deta hai aur memory zyada waste nahi hoti. Sparse graphs ke liye Adjacency List behtar hai.'
    },
    {
      id: 24,
      topic: 'graphs',
      question: 'Ek Tree aur ek Graph me main difference kya hota hai?',
      options: ['Tree me cycles (loops) nahi hote, graph me ho sakte hain', 'Graph hamesha disconnected hota hai', 'Tree sirf binary hota hai', 'Graph me edges nahi hoti'],
      correct: 0,
      explanation: 'Tree ek minimally connected graph hai jisme exactly N vertices aur N-1 edges hoti hain, aur isme koi cycle ya closed loop nahi hota.'
    },
    {
      id: 25,
      topic: 'sorting-searching',
      question: 'Binary Search Algorithm kis technique / principle pe based hai?',
      options: ['Dynamic Programming', 'Greedy Method', 'Divide and Conquer', 'Backtracking'],
      correct: 2,
      explanation: 'Binary search array ko middle se divide karta hai, aur condition ke hisaab se ek half ko discard karke search area aadha kar deta hai. Ye Divide and Conquer technique hai.'
    },
    {
      id: 26,
      topic: 'sorting-searching',
      question: 'Quick Sort ki worst-case time complexity kya hoti hai?',
      options: ['O(n)', 'O(n log n)', 'O(n^2)', 'O(1)'],
      correct: 2,
      explanation: 'Jab array pehle se hi sorted ho (ya reverse sorted ho) aur pehla/aakhri element pivot choose kiya jaye, to array 1 aur n-1 parts me divide hota hai. Is extreme unbalanced partition me time complexity O(n^2) ho jati hai.'
    },
    {
      id: 27,
      topic: 'sorting-searching',
      question: 'Inme se kaunsa sorting algorithm In-place nahi hai? (yani extra memory use karta hai)',
      options: ['Bubble Sort', 'Insertion Sort', 'Quick Sort', 'Merge Sort'],
      correct: 3,
      explanation: 'Merge Sort 2 sorted arrays ko merge karne ke liye ek extra temporary array O(n) space me banata hai. Isliye ye in-place sorting algorithm nahi hai.'
    },
    {
      id: 28,
      topic: 'symbol-table',
      question: 'Compiler Symbol Table ka use kisliye karta hai?',
      options: ['Machine code generate karne ke liye', 'Identifiers (variables, functions) aur unke types store karne ke liye', 'Keywords ka syntax check karne ke liye', 'Memory ko RAM me allocate karne ke liye'],
      correct: 1,
      explanation: 'Symbol Table ek data structure hai jisme compiler har variable, scope aur type information save karta hai taaki pure compilation phases me variable existence aur type check kar sake.'
    },
    {
      id: 29,
      topic: 'symbol-table',
      question: 'Symbol table implementation ke liye average case me sabse fast search/insert kis data structure me milta hai?',
      options: ['Linked List', 'Binary Search Tree', 'Hash Table', 'Linear Array'],
      correct: 2,
      explanation: 'Hash Table me searching aur insertion ki average time complexity O(1) hoti hai, isliye symbol table me variable lookup fast karne ke liye Hash Table widely use hota hai.'
    },
    {
      id: 30,
      topic: 'sorting-searching',
      question: 'Bubble Sort algorithm ka best case time complexity kya hai agar list pehle se hi sorted ho? (Optimized version me)',
      options: ['O(n^2)', 'O(n log n)', 'O(n)', 'O(1)'],
      correct: 2,
      explanation: 'Optimized bubble sort me hum ek flag use karte hain. Agar ek bhi swap na ho pehle pass me, iska matlab array already sorted hai. To sirf ek pass lagta hai: O(n).'
    }
  ]
};

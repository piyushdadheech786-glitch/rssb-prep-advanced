window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['algorithms'] = {
  id: 'algorithms',
  name: 'Algorithms',
  icon: '⚙️',
  description: 'Algorithms ki complexity, design techniques aur tree traversals ka detailed analysis.',
  topics: [
    {
      id: 'complexity',
      name: 'Complexity of Algorithms',
      theory: `
        <h3>Asymptotic Analysis kya hai?</h3>
        <p>Algorithm ki efficiency ko measure karne ke liye hum Time and Space complexity use karte hain. Asymptotic notations humein batati hain ki jab input size (n) infinity ko approach karega toh algorithm kaise perform karega.</p>
        
        <h4>Asymptotic Notations</h4>
        <ul>
          <li><strong>Big Oh (O):</strong> Upper bound represent karta hai. Yani algorithm isse zyada time nahi lega (Worst-case).</li>
          <li><strong>Omega (Ω):</strong> Lower bound represent karta hai. Yani algorithm kam se kam itna time toh lega hi (Best-case).</li>
          <li><strong>Theta (Θ):</strong> Tight bound (average case). Jab upper aur lower bound same ho.</li>
        </ul>
        
        <div class="formula-box">
          <div class="formula-title">📐 Growth Rates</div>
          O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(n³) &lt; O(2ⁿ) &lt; O(n!)
        </div>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Exam mein agar pucha jaye "tightest upper bound", toh humesha smallest possible Big O notation ko choose karein.
        </div>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Logarithmic time O(log n) base pe depend nahi karta (asymptotic context mein) kyunki log_a(n) = log_b(n) / log_b(a), jo ki constant factor se differ karta hai. 
        </div>
        
        <h4>Example (Master Theorem)</h4>
        <p>Recurrence relation T(n) = aT(n/b) + f(n) ko solve karne ke liye Master Theorem use hoti hai. Agar T(n) = 2T(n/2) + O(n), toh complexity O(n log n) aati hai, jaise Merge Sort mein.</p>
      `
    },
    {
      id: 'tree-traversals',
      name: 'Tree Traversals',
      theory: `
        <h3>Tree Traversal basics</h3>
        <p>Tree ke har node ko exactly ek baar visit karne ko traversal kehte hain. Depth First Search (DFS) traversals mein Inorder, Preorder, aur Postorder aate hain.</p>
        
        <h4>Types of DFS Traversals</h4>
        <p>Rules humesha "Root" node ki position par based hote hain:</p>
        <ul>
          <li><strong>Preorder (NLR):</strong> Node -> Left -> Right. Top-down approach. Prefix expression banane ke kaam aata hai.</li>
          <li><strong>Inorder (LNR):</strong> Left -> Node -> Right. Infix expression banata hai.</li>
          <li><strong>Postorder (LRN):</strong> Left -> Right -> Node. Bottom-up approach. Postfix expression aur tree deletion mein kaam aata hai.</li>
        </ul>
        
        <div class="formula-box">
          <div class="formula-title">📐 Formula / Key Point</div>
          Binary Search Tree (BST) ka Inorder traversal humesha ek <strong>Sorted (ascending) sequence</strong> deta hai.
        </div>
        
        <pre>
// Inorder traversal in C/C++/Java
void inorder(Node node) {
    if (node == null) return;
    inorder(node.left);
    print(node.data);
    inorder(node.right);
}
        </pre>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Agar sirf Preorder aur Postorder diya ho, toh unique Binary Tree construct <strong>nahi</strong> kiya ja sakta (jab tak wo Full Binary Tree na ho). Unique tree ke liye Inorder ka hona zaroori hai.
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p>Maan lijiye Tree hai jisme Root(A), Left(B), Right(C). B ka Left(D), Right(E).<br>
        <strong>Inorder (LNR):</strong> D, B, E, A, C<br>
        <strong>Preorder (NLR):</strong> A, B, D, E, C<br>
        <strong>Postorder (LRN):</strong> D, E, B, C, A</p>
      `
    },
    {
      id: 'greedy-methods',
      name: 'Greedy Methods',
      theory: `
        <h3>Greedy Approach Kya Hai?</h3>
        <p>Greedy algorithm har step par wo choice karta hai jo us waqt sabse optimal dikhti hai (Local Optimum), is umeed mein ki isse aage chalkar Global Optimum solution mil jayega.</p>
        
        <h4>Famous Greedy Algorithms</h4>
        <ul>
          <li><strong>Fractional Knapsack:</strong> Items ko tod (break kar) sakte hain. Value/Weight ratio ke according sort karte hain.</li>
          <li><strong>Huffman Coding:</strong> Data compression algorithm jo characters ki frequency ke base par variable length codes assign karta hai.</li>
          <li><strong>Dijkstra's Algorithm:</strong> Single-source shortest path nikalne ke liye (graphs without negative edges).</li>
          <li><strong>Prim's & Kruskal's:</strong> Minimum Spanning Tree (MST) banane ke liye.</li>
        </ul>
        
        <table class="comparison-table">
          <tr><th>Feature</th><th>Prim's Algorithm</th><th>Kruskal's Algorithm</th></tr>
          <tr><td>Logic</td><td>Starts with a node and grows the MST</td><td>Sorts all edges and adds them if no cycle forms</td></tr>
          <tr><td>Graph Type</td><td>Best for Dense Graphs</td><td>Best for Sparse Graphs</td></tr>
          <tr><td>Data Structure</td><td>Priority Queue / Min-Heap</td><td>Disjoint Set (Union-Find)</td></tr>
        </table>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Greedy method 0/1 Knapsack problem ko solve <strong>nahi</strong> kar sakta (uske liye Dynamic Programming chahiye). Par Fractional Knapsack greedy se ho jata hai.
        </div>
        
        <h4>Example (Fractional Knapsack)</h4>
        <p>Items: I1 (Weight=10, Value=60), I2 (Weight=20, Value=100). Capacity = 25.<br>
        Ratios (Value/Weight): I1 = 6, I2 = 5.<br>
        Greedy strategy: I1 ko pura lo (weight 10, value 60). Baaki bacha weight 15. I2 ka 15/20 part lo (value = 75).<br>
        Total Value = 60 + 75 = 135.</p>
      `
    },
    {
      id: 'branch-and-bound',
      name: 'Branch and Bound Methods',
      theory: `
        <h3>Branch and Bound (B&B)</h3>
        <p>B&B ek design strategy hai jo <strong>Optimization problems</strong> solve karne ke kaam aati hai. Yeh state space tree ko explore karta hai par har node par ek bound (limit) calculate karta hai taaki useless paths ko prune (cut) kiya ja sake.</p>
        
        <h4>Types of Search in B&B</h4>
        <ul>
          <li><strong>FIFO B&B (Queue based):</strong> Breadth-First Search (BFS) ki tarah kaam karta hai.</li>
          <li><strong>LIFO B&B (Stack based):</strong> Depth-First Search (DFS) ki tarah kaam karta hai.</li>
          <li><strong>Least Cost (LC) B&B (Priority Queue):</strong> Har node par cost calculate hoti hai, jiska cost sabse kam/optimal ho use pehle explore karte hain. Yeh sabse efficient method hai.</li>
        </ul>
        
        <table class="comparison-table">
          <tr><th>Feature</th><th>Backtracking</th><th>Branch and Bound</th></tr>
          <tr><td>Problem Type</td><td>Decision or Finding all solutions (e.g. N-Queen)</td><td>Optimization problems (min or max)</td></tr>
          <tr><td>Traversal</td><td>Usually DFS</td><td>BFS, DFS, or Least Cost (Priority-based)</td></tr>
          <tr><td>Pruning Rule</td><td>Constraints (Bounding function)</td><td>Constraints + Cost Bounds</td></tr>
        </table>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Travelling Salesperson Problem (TSP) aur 0/1 Knapsack dono ko Branch and Bound se solve kiya ja sakta hai.
        </div>
        
        <h4>Example Concept (TSP with LC B&B)</h4>
        <p>TSP mein minimum cost cycle banani hoti hai. Root node puri matrix ko represent karta hai. Matrix ka cost reduce karke bound nikalte hain. Fir har possible next city pe jane ka (cost + reduction) nikalte hain. Jis path pe cost (bound) sabse kam hota hai, us branch ko aage badhate hain (LC B&B).</p>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'complexity',
      question: 'Which of the following notations is used to represent the worst-case time complexity?',
      options: ['Big Oh (O)', 'Omega (Ω)', 'Theta (Θ)', 'Small o'],
      correct: 0,
      explanation: 'Big Oh (O) notation asymptotically bounds the function from above, which is used to represent the worst-case scenario. Omega (Ω) is for best case, and Theta (Θ) is for average (tight) case.'
    },
    {
      id: 2,
      topic: 'complexity',
      question: 'Master Theorem ka formula T(n) = aT(n/b) + f(n) mein "a" kya represent karta hai?',
      options: [
        'Number of recursive calls (sub-problems)',
        'Size of each sub-problem',
        'Cost of dividing and merging',
        'Time taken by the base case'
      ],
      correct: 0,
      explanation: '"a" represent karta hai ki ek recursion level par kitni sub-problems create ho rahi hain. "n/b" har sub-problem ka size hai, aur f(n) merge ya divide cost hai.'
    },
    {
      id: 3,
      topic: 'complexity',
      question: 'Agar kisi algorithm ki complexity O(n log n) hai, aur input size double kar diya jaye, toh running time approximately kaisa change hoga?',
      options: [
        'It will double',
        'It will slightly more than double',
        'It will square',
        'It will become 4 times'
      ],
      correct: 1,
      explanation: 'Pehle time T = c * n log n tha. Naya n\' = 2n hoga. Toh naya time = c * 2n log(2n) = 2c * n(log n + 1). Yeh purane time ke double se thoda zyada hoga (due to +1 term).'
    },
    {
      id: 4,
      topic: 'complexity',
      question: 'What is the correct order of time complexities (from fastest to slowest)?',
      options: [
        'O(1) < O(n) < O(log n) < O(n²)',
        'O(1) < O(log n) < O(n) < O(n log n)',
        'O(1) < O(n log n) < O(n) < O(n²)',
        'O(n) < O(log n) < O(1) < O(n!)'
      ],
      correct: 1,
      explanation: 'Growth rate ka increasing order hai: Constant O(1) sabse fast, fir Logarithmic O(log n), Linear O(n), aur fir O(n log n).'
    },
    {
      id: 5,
      topic: 'complexity',
      question: 'Best-case time complexity of finding an element in a Binary Search Tree (BST) is:',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
      correct: 0,
      explanation: 'Best-case mein element directly root par hi mil jayega, jisme constant time O(1) lagega. O(log n) average case hota hai balanced BST ke liye.'
    },
    {
      id: 6,
      topic: 'tree-traversals',
      question: 'Ek Binary Search Tree (BST) ka kaunsa traversal keys ko ascending order (sorted) mein print karta hai?',
      options: ['Preorder', 'Postorder', 'Inorder', 'Level-order'],
      correct: 2,
      explanation: 'Inorder traversal pehle Left (chhoti values), fir Node, aur fir Right (badi values) visit karta hai, isliye humesha sorted output milta hai.'
    },
    {
      id: 7,
      topic: 'tree-traversals',
      question: 'Postorder traversal of a tree gives which type of expression (for expression trees)?',
      options: ['Infix expression', 'Postfix expression', 'Prefix expression', 'None of these'],
      correct: 1,
      explanation: 'Postorder (Left-Right-Node) bottom-up traversal hai jo expression tree ka postfix (Reverse Polish) expression generate karta hai.'
    },
    {
      id: 8,
      topic: 'tree-traversals',
      question: 'Agar Inorder aur Preorder sequences diye hue hain, kya hum unique Binary Tree bana sakte hain?',
      options: [
        'Yes, always',
        'No, never',
        'Yes, but only for Binary Search Trees',
        'Yes, but only if all elements are positive'
      ],
      correct: 0,
      explanation: 'Preorder root identify karne mein help karta hai aur Inorder left/right subtrees ko separate karta hai. In dono se hamesha ek unique binary tree construct ho sakta hai.'
    },
    {
      id: 9,
      topic: 'tree-traversals',
      question: 'Ek full binary tree ke liye, agar Inorder traversal nahi diya hai, toh kya Preorder aur Postorder milkar unique tree bana sakte hain?',
      options: [
        'Yes',
        'No',
        'Only if height is less than 3',
        'None of the above'
      ],
      correct: 0,
      explanation: 'Generally Inorder zaroori hota hai, lekin "Full/Strict Binary Tree" (jisme har node ke 0 ya 2 children hon) ke case mein Preorder aur Postorder kaafi hain unique tree banane ke liye.'
    },
    {
      id: 10,
      topic: 'tree-traversals',
      question: 'Depth First Search (DFS) on a binary tree is typically implemented using which data structure internally?',
      options: ['Queue', 'Stack (Implicit recursion stack)', 'Priority Queue', 'Linked List'],
      correct: 1,
      explanation: 'DFS traversals (Inorder, Preorder, Postorder) recursive hote hain, jo internally system call stack ka use karte hain. Agar iterative implement karna ho toh explicit Stack use hota hai.'
    },
    {
      id: 11,
      topic: 'tree-traversals',
      question: 'Level order traversal of a tree corresponds to which graph search algorithm?',
      options: ['Depth First Search', 'Breadth First Search', 'Dijkstra Algorithm', 'Binary Search'],
      correct: 1,
      explanation: 'Level order traversal root se shuru ho kar level-by-level (left to right) explore karta hai, jo Breadth First Search (BFS) ki philosophy hai. Iske liye Queue ka use hota hai.'
    },
    {
      id: 12,
      topic: 'greedy-methods',
      question: 'Fractional Knapsack problem ko sabse efficiently solve karne ke liye items ko kis order mein sort karna chahiye?',
      options: [
        'Ascending order of Weight',
        'Descending order of Value',
        'Descending order of (Value / Weight) ratio',
        'Ascending order of (Value / Weight) ratio'
      ],
      correct: 2,
      explanation: 'Greedy approach mein sabse zyada fayda (value) per unit weight (V/W ratio) lene mein hota hai, isliye items ko V/W ke descending order mein sort karke add karte hain.'
    },
    {
      id: 13,
      topic: 'greedy-methods',
      question: 'Huffman coding kiske principle par kaam karti hai?',
      options: ['Dynamic Programming', 'Divide and Conquer', 'Greedy Approach', 'Backtracking'],
      correct: 2,
      explanation: 'Huffman coding ek greedy approach use karta hai, jisme sabse kam frequency wale characters ko hamesha pehle merge (combine) karke tree build kiya jata hai.'
    },
    {
      id: 14,
      topic: 'greedy-methods',
      question: 'Kruskal\'s aur Prim\'s Algorithms ka primary goal kya hai?',
      options: [
        'Finding the shortest path in a graph',
        'Finding the Minimum Spanning Tree (MST)',
        'Topological sorting',
        'Maximum flow in a network'
      ],
      correct: 1,
      explanation: 'Kruskal aur Prim dono greedy algorithms hain jo connected weighted graph mein Minimum Spanning Tree (MST) nikalne ke liye use hote hain.'
    },
    {
      id: 15,
      topic: 'greedy-methods',
      question: 'In Dijkstra\'s algorithm, hum kaunsa greedy choice make karte hain?',
      options: [
        'Always pick the node with highest distance',
        'Always pick the unvisited node with the smallest known distance',
        'Always pick a random node',
        'Pick the node with most edges'
      ],
      correct: 1,
      explanation: 'Dijkstra algorithm ek Greedy algorithm hai jo har step par us unvisited vertex ko chunta hai jiska distance source node se sabse kam (minimum) ho.'
    },
    {
      id: 16,
      topic: 'greedy-methods',
      question: 'Kya 0/1 Knapsack problem ko Greedy algorithm se optimally solve kiya ja sakta hai?',
      options: [
        'Yes, always',
        'No, it requires Dynamic Programming',
        'Yes, but only for even weights',
        'No, it cannot be solved at all'
      ],
      correct: 1,
      explanation: '0/1 Knapsack (jisme item ko tod nahi sakte) mein Greedy method optimal solution ki guarantee nahi deta. Isko solve karne ke liye Dynamic Programming (DP) ya Branch & Bound lagta hai.'
    },
    {
      id: 17,
      topic: 'greedy-methods',
      question: 'Kruskal\'s algorithm mein cycles detect karne ke liye konsa data structure sabse suitable hai?',
      options: ['Stack', 'Queue', 'Disjoint Set (Union-Find)', 'Hash Table'],
      correct: 2,
      explanation: 'Kruskal\'s algorithm edges ko sort karke add karta hai, isme disjoint set (Union-Find) data structure use hota hai taaki quickly check ho sake ki nayi edge cycle toh nahi bana rahi.'
    },
    {
      id: 18,
      topic: 'branch-and-bound',
      question: 'Branch and Bound technique typically kis tarah ki problems solve karne ke kaam aati hai?',
      options: ['Optimization problems', 'Decision problems', 'Sorting problems', 'Search problems'],
      correct: 0,
      explanation: 'Branch and Bound Optimization problems (min/max find karna, e.g., TSP, Knapsack) ke liye design ki gayi hai, yeh best/optimal solution dhoondti hai by pruning.'
    },
    {
      id: 19,
      topic: 'branch-and-bound',
      question: 'Least Cost (LC) Branch and Bound search kis data structure ka use karta hai?',
      options: ['Stack', 'Simple Queue', 'Priority Queue', 'Array'],
      correct: 2,
      explanation: 'LC B&B mein us node ko pehle explore karte hain jiska cost sabse kam hota hai. Is operations ko efficiently handle karne ke liye Priority Queue (Min-Heap) use hoti hai.'
    },
    {
      id: 20,
      topic: 'branch-and-bound',
      question: 'Backtracking aur Branch and Bound mein ek major difference kya hai?',
      options: [
        'Backtracking optimization problems solve nahi karti, B&B karti hai.',
        'Backtracking uses DFS, B&B uses bounds and can use BFS/LC search.',
        'B&B avoids generating unnecessary branches by using a bounding function.',
        'All of the above.'
      ],
      correct: 3,
      explanation: 'Yeh saare points differences hain. Backtracking constraints check karti hai aur DFS follow karti hai, jabki B&B bound function lagati hai aur different search strategies (LC, FIFO) use kar sakti hai.'
    },
    {
      id: 21,
      topic: 'branch-and-bound',
      question: 'Branch and Bound mein "bounding function" ka kya role hota hai?',
      options: [
        'To find the maximum elements',
        'To calculate optimal bound values and prune (discard) sub-optimal subtrees',
        'To divide the problem into equal halves',
        'To traverse the tree in O(1) time'
      ],
      correct: 1,
      explanation: 'Bounding function humein node par estimation deti hai ki is path par aage jane se best possible solution kya mil sakta hai. Agar wo worst hai toh us path ko pruned (cut) kar diya jata hai.'
    },
    {
      id: 22,
      topic: 'branch-and-bound',
      question: 'Travelling Salesperson Problem (TSP) ko Branch & Bound se solve karte time hum initial bound kaise nikalte hain?',
      options: [
        'By summing all matrix elements',
        'By performing matrix reduction (subtracting minimum from rows and columns)',
        'By random allocation',
        'By Dijkstra\'s algorithm'
      ],
      correct: 1,
      explanation: 'TSP mein B&B solve karne ke liye initial step Cost Matrix ko reduce karna hota hai (row reduction and column reduction). Jo values minus ki jati hain unka sum initial bound hota hai.'
    },
    {
      id: 23,
      topic: 'branch-and-bound',
      question: 'FIFO Branch and Bound kis basic search logic ko follow karta hai?',
      options: ['Breadth First Search (BFS)', 'Depth First Search (DFS)', 'Best First Search', 'Binary Search'],
      correct: 0,
      explanation: 'FIFO (First In First Out) Branch and Bound mein Queue data structure use hota hai, isliye yeh completely Breadth First Search (BFS) mechanism ki tarah kaam karta hai.'
    },
    {
      id: 24,
      topic: 'complexity',
      question: 'Recursive algorithms ki time complexity nikalne ke liye konsi method commonly use hoti hai?',
      options: ['Master Theorem', 'Substitution Method', 'Recursion Tree Method', 'All of the above'],
      correct: 3,
      explanation: 'Recurrence relations (recursive algorithms ka mathematical form) ko solve karne ke liye Master method, Substitution aur Recursion tree method teeno ka upyog hota hai.'
    },
    {
      id: 25,
      topic: 'greedy-methods',
      question: 'Job Sequencing with Deadlines problem greedy approach se solve ki jati hai. Isme jobs ko kis order mein sort karte hain?',
      options: [
        'Ascending order of deadlines',
        'Descending order of profit',
        'Ascending order of profit',
        'Descending order of deadlines'
      ],
      correct: 1,
      explanation: 'Job sequencing mein maximum profit kamane ke liye hum jobs ko unke Profit ke descending order mein sort karte hain, aur koshish karte hain unhe deadline ke jitna paas ho sake assign karein.'
    },
    {
      id: 26,
      topic: 'complexity',
      question: 'Agar f(n) = O(g(n)) hai, toh iska strict meaning kya hai (for large n)?',
      options: [
        'f(n) is exactly equal to g(n)',
        'f(n) grows strictly faster than g(n)',
        'f(n) grows at most as fast as g(n) up to a constant factor',
        'f(n) grows at least as fast as g(n)'
      ],
      correct: 2,
      explanation: 'Big Oh (O) notation ek upper bound hai, iska matlab hai ki kuch time n0 ke baad, f(n) ki growth hamesha g(n) (multiplied by some constant c) se kam ya barabar hogi.'
    },
    {
      id: 27,
      topic: 'tree-traversals',
      question: 'In a Binary Tree, the node visited first in Postorder traversal is:',
      options: ['Root node', 'Left-most leaf node', 'Right-most leaf node', 'Depends on tree structure'],
      correct: 1,
      explanation: 'Postorder follows Left-Right-Root. Isliye recursively traversal left most end tak jayega, aur sabse pehle Left-most leaf node print hogi.'
    },
    {
      id: 28,
      topic: 'branch-and-bound',
      question: 'LIFO Branch and Bound search kis search technique ke similar hota hai?',
      options: ['Breadth First Search', 'Depth First Search', 'Heuristic Search', 'Uniform Cost Search'],
      correct: 1,
      explanation: 'LIFO (Last In First Out) Stack ka use karta hai. DFS bhi stack ka use karke deep explore karta hai, isliye LIFO B&B DFS search ki tarah behave karta hai.'
    }
  ]
};

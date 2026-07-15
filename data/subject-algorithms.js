window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['algorithms'] = {
  id: 'algorithms',
  name: 'Algorithms',
  icon: '⚙️',
  description: 'Tree Traversals, Branch & Bound, Greedy, Dynamic Programming, Complexity Analysis',
  topics: [
    {
      id: 'tree-traversals',
      name: 'Tree Traversals',
      theory: `
        <h3>Tree Traversal kya hai?</h3>
        <p>Tree traversal ka matlab hai tree ke har node ko exactly ek baar visit karna, kisi specific order mein. Do main categories hain — Depth First aur Breadth First.</p>

        <h4>Depth First Traversals:</h4>
        <pre>
        Example Tree:
              A
             / \\
            B   C
           / \\   \\
          D   E   F
        </pre>

        <table class="comparison-table">
          <tr><th>Traversal</th><th>Order</th><th>Result</th><th>Use Case</th></tr>
          <tr><td><strong>Inorder (LNR)</strong></td><td>Left → Root → Right</td><td>D B E A C F</td><td>BST ka sorted order milta hai</td></tr>
          <tr><td><strong>Preorder (NLR)</strong></td><td>Root → Left → Right</td><td>A B D E C F</td><td>Tree ka copy banana, prefix expression</td></tr>
          <tr><td><strong>Postorder (LRN)</strong></td><td>Left → Right → Root</td><td>D E B F C A</td><td>Tree delete karna, postfix expression</td></tr>
        </table>

        <h4>Breadth First Traversal (Level Order):</h4>
        <p>Level by level visit karte hain — pehle root, fir level 1 ke sab nodes, fir level 2... Queue use hota hai.</p>
        <p>Result for above tree: A B C D E F</p>

        <h4>Recursive Implementation (Inorder):</h4>
        <pre>void inorder(Node* root) {
    if (root == NULL) return;
    inorder(root->left);     // Left subtree
    printf("%d ", root->data); // Root (visit)
    inorder(root->right);    // Right subtree
}</pre>

        <h4>Reconstructing Tree from Traversals:</h4>
        <ul>
          <li><strong>Inorder + Preorder → Unique Tree:</strong> Preorder se root identify karo, Inorder se left/right subtree identify karo. Recursively solve karo.</li>
          <li><strong>Inorder + Postorder → Unique Tree:</strong> Postorder ka last element root hai. Baaki same process.</li>
          <li><strong>Preorder + Postorder → Unique Tree NAHI ban sakta</strong> (multiple possible trees).</li>
        </ul>

        <h4>Morris Traversal (Threaded Binary Tree):</h4>
        <p>Bina stack aur recursion ke inorder traversal — O(1) space mein. Temporary links (threads) create karta hai predecessor se current node tak, traverse ke baad remove kar deta hai.</p>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Sirf Preorder + Postorder se unique binary tree NAHI bana sakte! Inorder hamesha required hai. BUT agar tree strictly binary hai (every node has 0 or 2 children), toh Preorder + Postorder se unique tree ban sakta hai.
        </div>
      `
    },
    {
      id: 'greedy',
      name: 'Greedy Method',
      theory: `
        <h3>Greedy Method kya hai?</h3>
        <p>Greedy algorithm har step pe <strong>locally optimal choice</strong> karta hai — usse umeed hoti hai ki ye choices milke globally optimal solution denge. "Abhi jo sabse achha lage, wo choose karo."</p>

        <h4>Greedy Strategy ke Properties:</h4>
        <ul>
          <li><strong>Greedy Choice Property:</strong> Locally optimal choice globally optimal solution ki taraf le jaye.</li>
          <li><strong>Optimal Substructure:</strong> Problem ka optimal solution uske sub-problems ke optimal solutions se bana ho.</li>
        </ul>

        <h4>Classic Greedy Algorithms:</h4>

        <p><strong>1. Activity Selection Problem:</strong></p>
        <p>Maximum activities select karo jo overlap na karein. Strategy: End time ke basis pe sort karo, fir pehle end hone wali activity select karo.</p>

        <p><strong>2. Fractional Knapsack:</strong></p>
        <p>Items mein se maximum value knapsack mein bharo. Fraction le sakte hain. Strategy: Value/Weight ratio ke basis pe sort karo (descending), highest ratio wale pehle.</p>

        <p><strong>3. Huffman Coding:</strong></p>
        <p>Data compression technique. Frequently occurring characters ko choti code aur rare characters ko lambi code do. Min-heap use karke bottom-up tree banate hain.</p>
        <ul>
          <li>Prefix-free code — koi code kisi aur code ka prefix nahi hota.</li>
          <li>Variable-length encoding — unlike ASCII (fixed 8-bit).</li>
        </ul>

        <p><strong>4. Dijkstra's Algorithm:</strong></p>
        <p>Single-source shortest path (non-negative weights). Greedy approach — har step mein closest unvisited vertex choose karo.</p>
        <p>Time: O(V²) with array, O((V+E) log V) with min-heap.</p>

        <p><strong>5. Prim's & Kruskal's (Minimum Spanning Tree):</strong></p>
        <ul>
          <li><strong>Prim's:</strong> Start from any vertex, har step mein minimum weight edge add karo jo tree ko extend kare. Best for dense graphs.</li>
          <li><strong>Kruskal's:</strong> Sabhi edges ko weight se sort karo, choti se badi edge add karo agar cycle na bane (Union-Find use karo). Best for sparse graphs.</li>
        </ul>

        <table class="comparison-table">
          <tr><th>Algorithm</th><th>Problem</th><th>Time Complexity</th></tr>
          <tr><td>Activity Selection</td><td>Maximum non-overlapping activities</td><td>O(n log n)</td></tr>
          <tr><td>Fractional Knapsack</td><td>Maximum value with weight limit</td><td>O(n log n)</td></tr>
          <tr><td>Huffman Coding</td><td>Optimal prefix-free encoding</td><td>O(n log n)</td></tr>
          <tr><td>Dijkstra's</td><td>Single-source shortest path</td><td>O(V² or (V+E)log V)</td></tr>
          <tr><td>Prim's MST</td><td>Minimum Spanning Tree</td><td>O(V² or E log V)</td></tr>
          <tr><td>Kruskal's MST</td><td>Minimum Spanning Tree</td><td>O(E log E)</td></tr>
        </table>

        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Greedy <strong>Fractional</strong> Knapsack solve kar sakta hai (optimal solution), but <strong>0/1 Knapsack NAHI</strong> (greedy optimal nahi dega — Dynamic Programming chahiye).
        </div>
      `
    },
    {
      id: 'branch-bound',
      name: 'Branch and Bound',
      theory: `
        <h3>Branch and Bound kya hai?</h3>
        <p>Branch and Bound ek <strong>optimization technique</strong> hai jo state-space tree explore karke best solution dhundhti hai. Ye Backtracking se advanced hai — Backtracking sirf feasible solutions dhundhta hai, B&B <strong>optimal solution</strong> dhundhta hai.</p>

        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>Branching:</strong> Problem ko sub-problems (children nodes) mein divide karna.</li>
          <li><strong>Bounding:</strong> Har node ka <strong>bound</strong> calculate karna — ye estimate hai ki is node se aage jaake best possible solution kya ho sakta hai.</li>
          <li><strong>Pruning:</strong> Agar kisi node ka bound current best solution se worse hai, toh us branch ko explore karne ki zarurat nahi (prune/cut).</li>
        </ul>

        <h4>Branch and Bound vs Backtracking:</h4>
        <table class="comparison-table">
          <tr><th>Feature</th><th>Backtracking</th><th>Branch and Bound</th></tr>
          <tr><td>Goal</td><td>Any feasible solution / All solutions</td><td>Optimal solution</td></tr>
          <tr><td>Traversal</td><td>DFS (Depth First Search)</td><td>BFS, DFS, or Least Cost (LC)</td></tr>
          <tr><td>Pruning</td><td>Feasibility check se prune</td><td>Bound (upper/lower) se prune</td></tr>
          <tr><td>Used for</td><td>N-Queens, Sudoku, Graph Coloring</td><td>0/1 Knapsack, TSP, Assignment Problem</td></tr>
        </table>

        <h4>Problems Solved by Branch and Bound:</h4>
        <ul>
          <li><strong>0/1 Knapsack:</strong> Items select karo (fraction nahi, ya poora lo ya nahi lo) maximum value ke liye.</li>
          <li><strong>Travelling Salesman Problem (TSP):</strong> Minimum cost tour jo sabhi cities visit kare aur starting city pe wapas aaye.</li>
          <li><strong>Assignment Problem:</strong> n workers ko n jobs assign karo minimum total cost mein.</li>
          <li><strong>Job Sequencing with Deadlines:</strong> Maximum profit wale jobs deadlines ke andar schedule karo.</li>
        </ul>

        <h4>Traversal Strategies:</h4>
        <ul>
          <li><strong>FIFO (BFS):</strong> Queue use karta hai. Level by level explore. Memory zyada lagti hai.</li>
          <li><strong>LIFO (DFS):</strong> Stack use karta hai. Deep exploration pehle.</li>
          <li><strong>LC (Least Cost):</strong> Priority queue — sabse promising (least cost bound) node pehle explore. Most efficient but complex.</li>
        </ul>

        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          0/1 Knapsack ko Greedy se optimal solve NAHI kar sakte (fractional knapsack greedy se hota hai). 0/1 Knapsack ke liye Dynamic Programming ya Branch and Bound use hota hai.
        </div>
      `
    },
    {
      id: 'complexity',
      name: 'Complexity of Algorithms',
      theory: `
        <h3>Algorithm Complexity Analysis</h3>
        <p>Algorithm ki efficiency measure karna — kitna time lagega (Time Complexity) aur kitni memory lagegi (Space Complexity), input size ke terms mein.</p>

        <h4>Asymptotic Notations:</h4>
        <table class="comparison-table">
          <tr><th>Notation</th><th>Meaning</th><th>Description</th></tr>
          <tr><td><strong>O (Big-O)</strong></td><td>Upper Bound</td><td>Worst case scenario. "Maximum itna time lagega." Most commonly used.</td></tr>
          <tr><td><strong>Ω (Omega)</strong></td><td>Lower Bound</td><td>Best case scenario. "Kam se kam itna time toh lagega hi."</td></tr>
          <tr><td><strong>Θ (Theta)</strong></td><td>Tight Bound</td><td>Average/Exact bound. "Bilkul itna hi time lagega." Best + Worst same order.</td></tr>
          <tr><td><strong>o (Little-o)</strong></td><td>Strict Upper Bound</td><td>Strictly less than (not equal to the bound).</td></tr>
          <tr><td><strong>ω (Little-omega)</strong></td><td>Strict Lower Bound</td><td>Strictly more than (not equal to the bound).</td></tr>
        </table>

        <h4>Common Time Complexities (fastest → slowest):</h4>
        <pre>O(1) < O(log n) < O(√n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ) < O(n!) < O(nⁿ)</pre>

        <table class="comparison-table">
          <tr><th>Complexity</th><th>Name</th><th>Example</th></tr>
          <tr><td>O(1)</td><td>Constant</td><td>Array access by index, hash table lookup</td></tr>
          <tr><td>O(log n)</td><td>Logarithmic</td><td>Binary Search, BST search (balanced)</td></tr>
          <tr><td>O(n)</td><td>Linear</td><td>Linear Search, single loop</td></tr>
          <tr><td>O(n log n)</td><td>Linearithmic</td><td>Merge Sort, Quick Sort (avg), Heap Sort</td></tr>
          <tr><td>O(n²)</td><td>Quadratic</td><td>Bubble Sort, Selection Sort, nested loops</td></tr>
          <tr><td>O(2ⁿ)</td><td>Exponential</td><td>Recursive Fibonacci (naive), Power set</td></tr>
          <tr><td>O(n!)</td><td>Factorial</td><td>Travelling Salesman (brute force), Permutations</td></tr>
        </table>

        <h4>How to Analyze Complexity:</h4>
        <ul>
          <li>Single loop (i=0 to n): O(n)</li>
          <li>Nested loops (i=0 to n, j=0 to n): O(n²)</li>
          <li>Loop halving (i=n; i>0; i/=2): O(log n)</li>
          <li>Sequential statements: Add complexities O(n) + O(n²) = O(n²)</li>
          <li>If-else: Max of the two branches</li>
        </ul>

        <h4>Recurrence Relations & Master Theorem:</h4>
        <p>Divide and conquer algorithms ke recurrence: T(n) = aT(n/b) + f(n)</p>

        <div class="formula-box">
          <div class="formula-title">📐 Master Theorem</div>
          T(n) = aT(n/b) + Θ(n^k log^p n), where a ≥ 1, b > 1<br><br>
          <strong>Case 1:</strong> If a > b^k → T(n) = Θ(n^(log_b a))<br>
          <strong>Case 2:</strong> If a = b^k<br>
          &nbsp;&nbsp;• If p > -1 → T(n) = Θ(n^k log^(p+1) n)<br>
          &nbsp;&nbsp;• If p = -1 → T(n) = Θ(n^k log log n)<br>
          &nbsp;&nbsp;• If p < -1 → T(n) = Θ(n^k)<br>
          <strong>Case 3:</strong> If a < b^k → T(n) = Θ(n^k log^p n) (same as f(n))
        </div>

        <h4>Master Theorem Examples:</h4>
        <ul>
          <li><strong>Binary Search:</strong> T(n) = T(n/2) + O(1) → a=1, b=2, k=0 → Case 2 → T(n) = O(log n)</li>
          <li><strong>Merge Sort:</strong> T(n) = 2T(n/2) + O(n) → a=2, b=2, k=1 → a = b^k → Case 2 → T(n) = O(n log n)</li>
          <li><strong>Strassen's Matrix:</strong> T(n) = 7T(n/2) + O(n²) → a=7, b=2, k=2 → 7 > 4 → Case 1 → T(n) = O(n^2.81)</li>
        </ul>

        <h4>Space Complexity:</h4>
        <ul>
          <li><strong>In-place algorithm:</strong> O(1) extra space (e.g., Bubble Sort, Selection Sort, Heap Sort).</li>
          <li><strong>Merge Sort:</strong> O(n) extra space (temporary array).</li>
          <li><strong>Recursive algorithms:</strong> O(depth of recursion) stack space.</li>
        </ul>

        <h4>P, NP, NP-Complete, NP-Hard:</h4>
        <table class="comparison-table">
          <tr><th>Class</th><th>Description</th></tr>
          <tr><td><strong>P</strong></td><td>Problems solvable in Polynomial time (O(n^k)). E.g., Sorting, Searching.</td></tr>
          <tr><td><strong>NP</strong></td><td>Problems whose solution can be VERIFIED in Polynomial time. (Solution dhundhna mushkil ho sakta hai, par verify karna easy hai.)</td></tr>
          <tr><td><strong>NP-Complete</strong></td><td>NP mein hai + Sabse mushkil NP problems (koi bhi NP problem isme reduce ho sakti hai). E.g., SAT, Vertex Cover, Hamiltonian Cycle.</td></tr>
          <tr><td><strong>NP-Hard</strong></td><td>Kam se kam utna mushkil jitna NP-Complete, but NP mein hona zaruri nahi (verify bhi polynomial mein nahi ho sakta). E.g., Halting Problem.</td></tr>
        </table>

        <div class="warning-box">
          <div class="tip-title">⚠️ P = NP? (Million Dollar Question)</div>
          Kya P = NP hai? Ye computer science ka sabse bada unsolved problem hai. Agar P = NP sabit ho jaye, toh har NP problem efficiently solve ho sakegi. Abhi tak koi proof nahi hai, aur most researchers believe P ≠ NP.
        </div>
      `
    },
    {
      id: 'dp',
      name: 'Dynamic Programming',
      theory: `
        <h3>Dynamic Programming (DP) kya hai?</h3>
        <p>DP ek technique hai jisme complex problem ko choti sub-problems mein todke solve karte hain, aur sub-problems ke results <strong>store (memoize)</strong> karke rakhte hain taaki dobara same sub-problem solve na karna pade.</p>

        <h4>DP ke 2 Properties (dono zaruri hain):</h4>
        <ul>
          <li><strong>Optimal Substructure:</strong> Problem ka optimal solution uske sub-problems ke optimal solutions se bana ho.</li>
          <li><strong>Overlapping Sub-problems:</strong> Same sub-problems baar baar solve hote hain (unlike Divide & Conquer jahan sub-problems independent hote hain).</li>
        </ul>

        <h4>DP vs Greedy vs Divide and Conquer:</h4>
        <table class="comparison-table">
          <tr><th>Feature</th><th>Greedy</th><th>DP</th><th>Divide & Conquer</th></tr>
          <tr><td>Approach</td><td>Local optimal choice</td><td>All choices consider, store results</td><td>Split, solve, combine</td></tr>
          <tr><td>Sub-problems</td><td>No sub-problem storage</td><td>Overlapping, stored</td><td>Independent, not stored</td></tr>
          <tr><td>Guarantee Optimal?</td><td>Not always</td><td>Always (if applicable)</td><td>N/A</td></tr>
          <tr><td>Example</td><td>Fractional Knapsack</td><td>0/1 Knapsack</td><td>Merge Sort</td></tr>
        </table>

        <h4>Two Approaches of DP:</h4>
        <ul>
          <li><strong>Top-Down (Memoization):</strong> Recursion + Cache. Pehle bade problem se start, chote problems solve karte jao aur results cache karo.</li>
          <li><strong>Bottom-Up (Tabulation):</strong> Iteration. Chote problems pehle solve karo, results table mein bharo, bade problems unse build karo. Generally more efficient.</li>
        </ul>

        <h4>Classic DP Problems:</h4>
        <ul>
          <li><strong>Fibonacci:</strong> Naive recursion O(2^n), DP mein O(n).</li>
          <li><strong>0/1 Knapsack:</strong> Max value items select karo with weight limit. O(n × W).</li>
          <li><strong>Longest Common Subsequence (LCS):</strong> Do strings ki longest common subsequence. O(m × n).</li>
          <li><strong>Matrix Chain Multiplication:</strong> Optimal parenthesization for minimum multiplications.</li>
          <li><strong>Floyd-Warshall:</strong> All-pairs shortest path. O(V³).</li>
          <li><strong>Bellman-Ford:</strong> Single-source shortest path (handles negative weights). O(V × E).</li>
        </ul>

        <div class="tip-box">
          <div class="tip-title">💡 Exam Tip</div>
          Agar question mein "find the minimum/maximum" ya "count the number of ways" aaye, aur overlapping sub-problems dikhein, toh DP use karo. Agar greedy choice property satisfy ho toh greedy enough hai.
        </div>
      `
    },
    {
      id: 'divide-conquer',
      name: 'Divide and Conquer',
      theory: `
        <h3>Divide and Conquer Strategy</h3>
        <p>Problem ko <strong>chote sub-problems mein divide</strong> karo, har sub-problem <strong>recursively solve</strong> karo, fir results ko <strong>combine</strong> karo.</p>

        <h4>Steps:</h4>
        <ol>
          <li><strong>Divide:</strong> Problem ko smaller sub-problems mein divide karo.</li>
          <li><strong>Conquer:</strong> Sub-problems ko recursively solve karo. Agar size chhota ho toh directly solve karo (base case).</li>
          <li><strong>Combine:</strong> Sub-problems ke solutions ko combine karke original problem ka solution banao.</li>
        </ol>

        <h4>Classic D&C Algorithms:</h4>
        <table class="comparison-table">
          <tr><th>Algorithm</th><th>Recurrence</th><th>Complexity</th></tr>
          <tr><td>Binary Search</td><td>T(n) = T(n/2) + O(1)</td><td>O(log n)</td></tr>
          <tr><td>Merge Sort</td><td>T(n) = 2T(n/2) + O(n)</td><td>O(n log n)</td></tr>
          <tr><td>Quick Sort</td><td>T(n) = T(k) + T(n-k-1) + O(n)</td><td>Avg: O(n log n)</td></tr>
          <tr><td>Strassen's Matrix Multiplication</td><td>T(n) = 7T(n/2) + O(n²)</td><td>O(n^2.81)</td></tr>
          <tr><td>Karatsuba Multiplication</td><td>T(n) = 3T(n/2) + O(n)</td><td>O(n^1.585)</td></tr>
          <tr><td>Closest Pair of Points</td><td>T(n) = 2T(n/2) + O(n)</td><td>O(n log n)</td></tr>
        </table>

        <div class="tip-box">
          <div class="tip-title">💡 Strassen vs Normal Matrix Multiplication</div>
          Normal matrix multiplication O(n³) hai (8 multiplications). Strassen ne ise O(n^2.81) kar diya sirf <strong>7 multiplications</strong> karke. Ye sub-problems ke number (a) kam karne se hua — 8 ki jagah 7.
        </div>
      `
    }
  ],
  questions: [
    {
      id: 1, topic: 'tree-traversals',
      question: 'The inorder traversal of a BST always gives:',
      options: ['A random sequence', 'A sorted sequence in ascending order', 'A sorted sequence in descending order', 'The level-order sequence'],
      correct: 1,
      explanation: 'BST ki property hai ki left subtree mein choti values hain aur right mein badi. Inorder (Left-Root-Right) se hamesha ascending sorted order milta hai.'
    },
    {
      id: 2, topic: 'tree-traversals',
      question: 'Which data structure is used for Level Order Traversal of a tree?',
      options: ['Stack', 'Queue', 'Array', 'Priority Queue'],
      correct: 1,
      explanation: 'Level Order Traversal mein BFS use hota hai, aur BFS ke liye Queue required hai. Root enqueue karo, dequeue karo visit karo, children enqueue karo — repeat.'
    },
    {
      id: 3, topic: 'tree-traversals',
      question: 'A binary tree can be uniquely reconstructed from:',
      options: ['Only Preorder traversal', 'Preorder and Postorder traversals', 'Inorder and Preorder traversals', 'Only Postorder traversal'],
      correct: 2,
      explanation: 'Unique binary tree reconstruct karne ke liye Inorder zaruri hai — iske saath Preorder ya Postorder mein se koi ek. Sirf Preorder + Postorder se unique tree NAHI banta.'
    },
    {
      id: 4, topic: 'tree-traversals',
      question: 'Given Preorder: A B D E C F G and Inorder: D B E A F C G, what is the root of the right subtree?',
      options: ['B', 'C', 'F', 'G'],
      correct: 1,
      explanation: 'Preorder ka pehla element (A) root hai. Inorder mein A ke right mein F, C, G hain (right subtree). Preorder mein in elements mein se pehle C aata hai, toh C right subtree ka root hai.'
    },
    {
      id: 5, topic: 'greedy',
      question: 'Which of the following problems CANNOT be optimally solved using a greedy algorithm?',
      options: ['Activity Selection Problem', 'Fractional Knapsack Problem', '0/1 Knapsack Problem', 'Huffman Coding'],
      correct: 2,
      explanation: '0/1 Knapsack mein items ka fraction nahi le sakte — ya poora lo ya nahi lo. Greedy yahan optimal solution nahi dega. Dynamic Programming ya Branch and Bound chahiye.'
    },
    {
      id: 6, topic: 'greedy',
      question: 'In Huffman coding, the character with the highest frequency gets:',
      options: ['The longest code', 'The shortest code', 'A fixed-length code', 'No code'],
      correct: 1,
      explanation: 'Huffman coding mein highest frequency characters ko shortest code milta hai aur lowest frequency ko longest code. Isse overall encoded message ka size minimize hota hai.'
    },
    {
      id: 7, topic: 'greedy',
      question: 'Dijkstra\'s algorithm does NOT work correctly for graphs with:',
      options: ['Undirected edges', 'Weighted edges', 'Negative weight edges', 'Cycles'],
      correct: 2,
      explanation: 'Dijkstra\'s algorithm negative weight edges ke saath sahi kaam nahi karta. Negative weights ke liye Bellman-Ford algorithm use karna chahiye.'
    },
    {
      id: 8, topic: 'greedy',
      question: 'Kruskal\'s algorithm for MST uses which data structure to detect cycles?',
      options: ['Stack', 'Queue', 'Union-Find (Disjoint Set)', 'Hash Table'],
      correct: 2,
      explanation: 'Kruskal\'s algorithm Union-Find (Disjoint Set Union) data structure use karta hai cycle detection ke liye — agar do vertices same set mein hain toh edge add karne se cycle ban jayegi.'
    },
    {
      id: 9, topic: 'greedy',
      question: 'In the Fractional Knapsack problem, items are selected based on their:',
      options: ['Weight in ascending order', 'Value in descending order', 'Value-to-weight ratio in descending order', 'Random selection'],
      correct: 2,
      explanation: 'Fractional Knapsack mein items ko value/weight ratio ke basis pe descending order mein sort karte hain. Highest ratio wale items pehle select hote hain — fractions bhi allowed hain.'
    },
    {
      id: 10, topic: 'branch-bound',
      question: 'Branch and Bound is primarily used to solve:',
      options: ['Sorting problems', 'Searching problems', 'Optimization problems', 'Graph traversal problems'],
      correct: 2,
      explanation: 'Branch and Bound optimization problems ke liye use hota hai jahan BEST (optimal) solution dhundhna hai — jaise 0/1 Knapsack, TSP, Assignment Problem.'
    },
    {
      id: 11, topic: 'branch-bound',
      question: 'In Branch and Bound, a node is pruned when:',
      options: ['It has too many children', 'Its bound is worse than the current best solution', 'It is a leaf node', 'The tree is too deep'],
      correct: 1,
      explanation: 'Pruning tab hoti hai jab kisi node ka bound (best possible solution estimate) current best found solution se worse ho. Tab us poore branch ko explore karne ki zarurat nahi — ye time bachata hai.'
    },
    {
      id: 12, topic: 'branch-bound',
      question: 'The Least Cost (LC) Branch and Bound strategy uses which data structure?',
      options: ['Stack', 'Queue', 'Priority Queue (Min-Heap)', 'Linked List'],
      correct: 2,
      explanation: 'LC Branch and Bound mein sabse promising (least cost) node pehle explore hota hai — iske liye Priority Queue (Min-Heap) use hota hai. Ye sabse efficient strategy hai.'
    },
    {
      id: 13, topic: 'complexity',
      question: 'What is the time complexity of the following code?\nfor(i=1; i<=n; i=i*2) { // O(1) operation }',
      options: ['O(n)', 'O(n²)', 'O(log n)', 'O(n log n)'],
      correct: 2,
      explanation: 'Loop variable i har baar double hota hai (1, 2, 4, 8, ... n). Ye log₂(n) baar chalega, isliye complexity O(log n) hai.'
    },
    {
      id: 14, topic: 'complexity',
      question: 'Which of the following growth rates is the FASTEST (worst performance)?',
      options: ['O(n²)', 'O(2ⁿ)', 'O(n log n)', 'O(n³)'],
      correct: 1,
      explanation: 'Growth rate order: O(n log n) < O(n²) < O(n³) < O(2ⁿ). Exponential O(2ⁿ) sabse fast grow karta hai aur sabse worst performance deta hai for large n.'
    },
    {
      id: 15, topic: 'complexity',
      question: 'The Big-O notation O(g(n)) represents:',
      options: ['The exact running time', 'The lower bound of the running time', 'The upper bound (worst case) of the running time', 'The average running time'],
      correct: 2,
      explanation: 'Big-O upper bound (worst case) batata hai — "Is se zyada time kabhi nahi lagega." Omega (Ω) lower bound hai, Theta (Θ) tight bound hai.'
    },
    {
      id: 16, topic: 'complexity',
      question: 'Using Master Theorem, the time complexity of T(n) = 2T(n/2) + O(n) is:',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
      correct: 1,
      explanation: 'a=2, b=2, f(n)=O(n), so k=1. a = b^k (2 = 2^1). Case 2 of Master theorem → T(n) = O(n^k log n) = O(n log n). Ye Merge Sort ka recurrence hai.'
    },
    {
      id: 17, topic: 'complexity',
      question: 'An algorithm that runs in O(1) time is said to have:',
      options: ['Linear time complexity', 'Logarithmic time complexity', 'Constant time complexity', 'Quadratic time complexity'],
      correct: 2,
      explanation: 'O(1) matlab constant time — execution time input size pe depend nahi karta. Jaise array element access by index, hash table lookup (average case).'
    },
    {
      id: 18, topic: 'complexity',
      question: 'A problem is in class NP if its solution can be:',
      options: ['Found in polynomial time', 'Found in exponential time', 'Verified in polynomial time', 'Neither found nor verified efficiently'],
      correct: 2,
      explanation: 'NP (Nondeterministic Polynomial) class ki problems wo hain jinke solution ko VERIFY polynomial time mein kiya ja sakta hai. Solution DHUNDHNA polynomial mein ho ya na ho, ye NP ke liye zaruri nahi.'
    },
    {
      id: 19, topic: 'dp',
      question: 'Dynamic Programming is applicable when the problem has:',
      options: ['Greedy choice property only', 'Optimal substructure and overlapping subproblems', 'Independent subproblems', 'No recursive structure'],
      correct: 1,
      explanation: 'DP ke liye dono properties zaruri hain: (1) Optimal Substructure — optimal solution sub-problems ke optimal solutions se bane, (2) Overlapping Sub-problems — same sub-problems repeatedly solve hoti hain.'
    },
    {
      id: 20, topic: 'dp',
      question: 'The time complexity of solving the 0/1 Knapsack problem using Dynamic Programming is:',
      options: ['O(n log n)', 'O(n × W) where W is the capacity', 'O(2ⁿ)', 'O(n²)'],
      correct: 1,
      explanation: '0/1 Knapsack DP solution mein ek 2D table banate hain of size n × W, jahan n = number of items aur W = knapsack capacity. Time complexity = O(n × W), ye pseudo-polynomial hai.'
    },
    {
      id: 21, topic: 'dp',
      question: 'The "Top-Down" approach to Dynamic Programming is also known as:',
      options: ['Tabulation', 'Memoization', 'Iteration', 'Greedy'],
      correct: 1,
      explanation: 'Top-Down DP = Memoization: Recursive approach with results cache. Bade problem se start karo, chote sub-problems solve karo aur results store karo. Bottom-Up = Tabulation: Iterative approach.'
    },
    {
      id: 22, topic: 'dp',
      question: 'The Floyd-Warshall algorithm computes:',
      options: ['Single-source shortest path', 'All-pairs shortest paths', 'Minimum spanning tree', 'Topological order'],
      correct: 1,
      explanation: 'Floyd-Warshall algorithm ek DP-based algorithm hai jo ALL pairs of vertices ke beech shortest path find karta hai. Time complexity O(V³) hai.'
    },
    {
      id: 23, topic: 'divide-conquer',
      question: 'Strassen\'s matrix multiplication algorithm reduces the number of multiplications from 8 to:',
      options: ['6', '7', '5', '4'],
      correct: 1,
      explanation: 'Normal matrix multiplication mein 8 multiplications chahiye. Strassen ne clever algebraic manipulation se ise 7 multiplications mein kar diya, complexity O(n³) se O(n^2.81) ho gayi.'
    },
    {
      id: 24, topic: 'divide-conquer',
      question: 'Which of the following is NOT a Divide and Conquer algorithm?',
      options: ['Merge Sort', 'Quick Sort', 'Dijkstra\'s Shortest Path', 'Binary Search'],
      correct: 2,
      explanation: 'Dijkstra\'s Algorithm ek Greedy algorithm hai, Divide and Conquer nahi. Merge Sort, Quick Sort, aur Binary Search sab Divide and Conquer algorithms hain.'
    },
    {
      id: 25, topic: 'complexity',
      question: 'Which complexity class contains problems that are the "hardest" problems in NP?',
      options: ['P', 'NP', 'NP-Complete', 'NP-Hard'],
      correct: 2,
      explanation: 'NP-Complete problems NP ke andar sabse mushkil hain — koi bhi NP problem polynomial time mein NP-Complete problem mein reduce ho sakti hai. Agar ek NP-Complete problem polynomial mein solve ho jaye, toh P = NP prove ho jayega.'
    },
    {
      id: 26, topic: 'greedy',
      question: 'Which MST algorithm starts from any vertex and grows the tree one edge at a time by selecting the minimum weight edge?',
      options: ['Kruskal\'s Algorithm', 'Prim\'s Algorithm', 'Dijkstra\'s Algorithm', 'Floyd-Warshall Algorithm'],
      correct: 1,
      explanation: 'Prim\'s Algorithm ek vertex se start karta hai aur har step mein minimum weight edge add karta hai jo tree ko extend kare. Kruskal\'s globally minimum edge choose karta hai (cycle check ke saath).'
    },
    {
      id: 27, topic: 'complexity',
      question: 'What is the time complexity of the following nested loop?\nfor(i=0; i<n; i++)\n  for(j=0; j<n; j++)\n    // O(1) operation',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(2ⁿ)'],
      correct: 2,
      explanation: 'Outer loop n baar chalta hai, inner loop bhi n baar chalta hai — total operations = n × n = n². Isliye complexity O(n²) hai.'
    },
    {
      id: 28, topic: 'dp',
      question: 'The Longest Common Subsequence (LCS) of "ABCBDAB" and "BDCAB" has length:',
      options: ['3', '4', '5', '6'],
      correct: 1,
      explanation: 'LCS of "ABCBDAB" aur "BDCAB" hai "BCAB" ya "BDAB" — dono ki length 4 hai. DP table banakar solve karte hain.'
    },
    {
      id: 29, topic: 'branch-bound',
      question: 'Branch and Bound differs from Backtracking primarily because Branch and Bound:',
      options: ['Uses recursion while Backtracking does not', 'Explores all nodes without pruning', 'Uses bounding functions to find the optimal solution', 'Only works on tree structures'],
      correct: 2,
      explanation: 'B&B bounding functions use karta hai (upper/lower bounds) taaki suboptimal branches prune ho sakein aur optimal solution efficiently mile. Backtracking sirf feasibility check karta hai.'
    },
    {
      id: 30, topic: 'tree-traversals',
      question: 'Postorder traversal is useful for:',
      options: ['Copying a tree', 'Evaluating a mathematical expression tree', 'Printing sorted elements of BST', 'Finding the height without recursion'],
      correct: 1,
      explanation: 'Postorder traversal expression tree ke evaluation ke liye perfect hai — pehle operands (children) evaluate karo, fir operator (root) apply karo. Tree delete karne ke liye bhi useful hai.'
    },
    {
      id: 31, topic: 'complexity',
      question: 'The recurrence relation T(n) = T(n/2) + O(1) represents the time complexity of:',
      options: ['Merge Sort', 'Binary Search', 'Quick Sort', 'Linear Search'],
      correct: 1,
      explanation: 'Binary Search mein har step mein problem size half hota hai (n/2) aur O(1) comparison hota hai. Master theorem se: a=1, b=2, k=0, Case 2 → O(log n).'
    },
    {
      id: 32, topic: 'greedy',
      question: 'In the Activity Selection Problem, activities are selected based on:',
      options: ['Earliest start time', 'Earliest finish time', 'Longest duration', 'Maximum profit'],
      correct: 1,
      explanation: 'Activity Selection mein activities ko finish time ke basis pe sort karte hain. Jo pehle khatam hoti hai, use pehle select karo — isse maximum non-overlapping activities milti hain.'
    }
  ]
};

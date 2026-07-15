window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['mental-ability'] = {
  id: 'mental-ability',
  name: 'Mental Ability',
  icon: '🧠',
  description: 'Logical Reasoning, Data Interpretation, Decision Making, Analytical Reasoning',
  topics: [
    {
      id: 'logical-reasoning',
      name: 'Logical Reasoning',
      theory: `
        <h3>Logical Reasoning</h3>
        <p>Logical reasoning tests the ability to analyze information, identify patterns, and draw valid conclusions based on given premises.</p>

        <h4>Key Concepts:</h4>
        
        <p><strong>1. Syllogism:</strong></p>
        <p>Drawing conclusions from two or more given statements (premises). Usually solved using Venn Diagrams.</p>
        <ul>
          <li><strong>All A are B:</strong> Circle A is completely inside Circle B.</li>
          <li><strong>Some A are B:</strong> Circle A and Circle B intersect.</li>
          <li><strong>No A is B:</strong> Circle A and Circle B do not touch.</li>
          <li><strong>Some A are not B:</strong> A part of A is outside B.</li>
        </ul>
        <p><em>Rule of thumb:</em> A conclusion is ONLY true if it holds in ALL possible Venn diagram interpretations.</p>

        <p><strong>2. Coding & Decoding:</strong></p>
        <p>Identifying the hidden rule or pattern in how a word is translated into another word/numbers.</p>
        <ul>
          <li><strong>Letter Shifting:</strong> e.g., +1 shift (A→B, B→C).</li>
          <li><strong>Opposite Letters:</strong> A(1) ↔ Z(26), B(2) ↔ Y(25). Sum of positions is always 27.</li>
          <li><strong>Number Coding:</strong> Words assigned numeric values based on letter positions (sum, product, etc.).</li>
        </ul>
        
        <p><strong>3. Blood Relations:</strong></p>
        <p>Determining family relationships. Always draw a family tree.</p>
        <ul>
          <li><strong>Square/Box:</strong> Male</li>
          <li><strong>Circle:</strong> Female</li>
          <li><strong>Single Line (-):</strong> Sibling</li>
          <li><strong>Double Line (=):</strong> Married Couple</li>
          <li><strong>Vertical Line (|):</strong> Generation gap (Parent to Child)</li>
        </ul>

        <p><strong>4. Direction Sense:</strong></p>
        <p>Draw a basic compass (N, S, E, W) and trace the path.</p>
        <ul>
          <li>Right turn from North = East. Left turn from North = West.</li>
          <li>Use Pythagoras theorem (a² + b² = c²) for finding shortest distance.</li>
        </ul>
      `
    },
    {
      id: 'data-interpretation',
      name: 'Data Interpretation (DI)',
      theory: `
        <h3>Data Interpretation</h3>
        <p>DI tests the ability to extract information from graphical or tabular representations and perform calculations.</p>

        <h4>Types of DI:</h4>
        <ol>
          <li><strong>Tables:</strong> Large amount of data in rows/columns. Requires scanning and calculation.</li>
          <li><strong>Pie Charts:</strong> Total = 360° or 100%. Value = (Given Angle / 360) × Total.</li>
          <li><strong>Bar Graphs:</strong> Compares discrete quantities. Easy to visually compare, harder to get exact values.</li>
          <li><strong>Line Graphs:</strong> Shows trends over time. Look for slopes (steep slope = high growth rate).</li>
        </ol>

        <h4>Crucial Math Skills for DI:</h4>
        <ul>
          <li><strong>Percentage Calculation:</strong> x is what % of y? → (x/y) × 100</li>
          <li><strong>Percentage Change:</strong> ((Final - Initial) / Initial) × 100</li>
          <li><strong>Average:</strong> Sum of observations / Number of observations</li>
          <li><strong>Ratio:</strong> Comparing two quantities (A:B).</li>
          <li><strong>Approximation:</strong> Don't calculate exactly if options are far apart. Use rounded values.</li>
        </ul>

        <div class="formula-box">
          <div class="formula-title">📐 Quick Fraction to Percentage Conversions</div>
          1/2 = 50%<br>
          1/3 = 33.33%<br>
          1/4 = 25%<br>
          1/5 = 20%<br>
          1/6 = 16.66%<br>
          1/8 = 12.5%<br>
          1/9 = 11.11%
        </div>
      `
    },
    {
      id: 'analytical-reasoning',
      name: 'Analytical & Spatial Reasoning',
      theory: `
        <h3>Analytical Reasoning</h3>
        <p>Analytical reasoning involves breaking down complex scenarios to find solutions. These are often structured as "puzzles".</p>

        <h4>Seating Arrangement:</h4>
        <ul>
          <li><strong>Linear Arrangement:</strong> People in a straight line. Note "Left/Right" vs "Immediate Left/Immediate Right".</li>
          <li><strong>Circular Arrangement:</strong> People around a circle. If facing center: Left = Clockwise, Right = Anti-clockwise. If facing outwards: Left = Anti-clockwise, Right = Clockwise.</li>
        </ul>
        <p><em>Strategy:</em> Don't start drawing immediately. Read all clues. Start with the most definite clue that places maximum people.</p>

        <h4>Statement & Assumptions/Arguments:</h4>
        <ul>
          <li><strong>Assumption:</strong> A hidden premise that the author believes is true but hasn't stated explicitly. Must be logical and directly connected to the statement.</li>
          <li><strong>Argument:</strong> Determine if an argument is "Strong" (logical, factual, relevant) or "Weak" (emotional, irrelevant, ambiguous).</li>
        </ul>

        <h4>Spatial/Visual Reasoning:</h4>
        <ul>
          <li><strong>Mirror Images:</strong> Left becomes Right, Right becomes Left. Top/Bottom remain same.</li>
          <li><strong>Water Images:</strong> Top becomes Bottom, Bottom becomes Top. Left/Right remain same.</li>
          <li><strong>Paper Folding/Cutting:</strong> Visualize unfolding symmetrically.</li>
          <li><strong>Cubes & Dice:</strong> Opposite faces rule — the face skipping one adjacent face in a straight line in an unfolded dice is its opposite.</li>
        </ul>
      `
    },
    {
      id: 'data-sufficiency',
      name: 'Data Sufficiency & Decision Making',
      theory: `
        <h3>Data Sufficiency</h3>
        <p>You don't need to find the final answer. You only need to determine IF the given statements provide ENOUGH data to find the answer.</p>

        <h4>Standard Options Format:</h4>
        <ol>
          <li>Statement I ALONE is sufficient.</li>
          <li>Statement II ALONE is sufficient.</li>
          <li>EITHER I or II alone is sufficient.</li>
          <li>NEITHER I nor II is sufficient (need more data).</li>
          <li>BOTH I and II TOGETHER are necessary to answer.</li>
        </ol>

        <h4>Strategy:</h4>
        <p>1. Read the question carefully.<br>
        2. Evaluate Statement I ALONE. Forget Statement II exists.<br>
        3. Evaluate Statement II ALONE. Forget Statement I exists.<br>
        4. If neither is sufficient alone, COMBINE them and evaluate.</p>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Common Mistake</div>
          Students often mentally combine both statements right from the beginning. Never do this! Evaluate them independently first.
        </div>

        <h3>Decision Making</h3>
        <p>You are given a set of conditions/criteria for selecting a candidate or approving a loan, followed by applicant profiles. You must decide the outcome based STRICTLY on the given rules.</p>
        <ul>
          <li>Create a checklist of the main criteria (A, B, C, D).</li>
          <li>Note the "exceptions" or "alternative paths" (e.g., "If A is not met, but applicant has Y, refer to Director").</li>
          <li>Do not assume any information not provided in the profile.</li>
        </ul>
      `
    }
  ],
  questions: [
    {
      id: 1, topic: 'logical-reasoning',
      question: 'In a certain code language, "COMPUTER" is written as "RFUVQNPC". How will "MEDICINE" be written in that code language?',
      options: ['EOJDJEFM', 'EOJDEJFM', 'MFEJDJOE', 'MFEDJJOE'],
      correct: 0,
      explanation: 'First, reverse the word: COMPUTER -> RETUPMOC. Then shift each letter by +1: R(+1)=S... wait, the logic is: First and last letters are swapped. Middle letters shifted +1. C...R -> R...C. O(+1)=P, M(+1)=N, P(+1)=Q, U(+1)=V, T(+1)=U, E(+1)=F. Reversed order: RFUVQNPC. MEDICINE: swap M and E -> E...M. E(+1)=F, D(+1)=E, I(+1)=J, C(+1)=D, I(+1)=J, N(+1)=O. Reverse the middle: OJDJEF. So, E OJDJEF M.'
    },
    {
      id: 2, topic: 'logical-reasoning',
      question: 'Statements:\n1. All cats are dogs.\n2. Some dogs are birds.\nConclusions:\nI. Some cats are birds.\nII. Some birds are dogs.',
      options: ['Only conclusion I follows', 'Only conclusion II follows', 'Both I and II follow', 'Neither I nor II follows'],
      correct: 1,
      explanation: 'Draw Venn Diagram: "Cats" circle is inside "Dogs". "Dogs" circle intersects "Birds". Conclusion I ("Some cats are birds") is possible but not definite (circles might not touch). Conclusion II ("Some birds are dogs") is definitely true because "Some dogs are birds".'
    },
    {
      id: 3, topic: 'logical-reasoning',
      question: 'A man is facing West. He turns 45 degrees in the clockwise direction and then another 180 degrees in the same direction, and then 270 degrees in the anti-clockwise direction. Which direction is he facing now?',
      options: ['South', 'North-West', 'West', 'South-West'],
      correct: 3,
      explanation: 'Initial = West. Clockwise turns = +45 + 180 = +225. Anti-clockwise turn = -270. Net turn = 225 - 270 = -45 degrees (i.e., 45 degrees anti-clockwise). 45 degrees anti-clockwise from West is South-West.'
    },
    {
      id: 4, topic: 'logical-reasoning',
      question: 'Pointing to a photograph of a boy, Suresh said, "He is the son of the only son of my mother." How is Suresh related to that boy?',
      options: ['Brother', 'Uncle', 'Cousin', 'Father'],
      correct: 3,
      explanation: '"My mother" (Suresh\'s mother). "Only son of my mother" = Suresh himself (assuming Suresh is male). "Son of the only son" = Son of Suresh. Therefore, Suresh is the father of the boy.'
    },
    {
      id: 5, topic: 'data-interpretation',
      question: 'If the total sales of a company in a year is Rs. 72,00,000, and a pie chart represents different departments. What will be the angle of the sector representing the IT department if its sales are Rs. 12,00,000?',
      options: ['30 degrees', '45 degrees', '60 degrees', '90 degrees'],
      correct: 2,
      explanation: 'Angle = (Value / Total) × 360 = (12,00,000 / 72,00,000) × 360 = (1/6) × 360 = 60 degrees.'
    },
    {
      id: 6, topic: 'data-interpretation',
      question: 'A company\'s profit was Rs. 40 lakh in 2023 and Rs. 50 lakh in 2024. What is the percentage increase in profit?',
      options: ['10%', '20%', '25%', '30%'],
      correct: 2,
      explanation: 'Percentage Increase = ((Final - Initial) / Initial) × 100 = ((50 - 40) / 40) × 100 = (10 / 40) × 100 = 1/4 × 100 = 25%.'
    },
    {
      id: 7, topic: 'analytical-reasoning',
      question: 'Six friends A, B, C, D, E, and F are sitting in a circle facing the center. C is sitting between A and F. B is sitting two places to the right of E. D is sitting between E and A. Who is sitting immediate right of F?',
      options: ['A', 'C', 'B', 'E'],
      correct: 2,
      explanation: 'D is between E and A -> E-D-A or A-D-E. C is between A and F -> A-C-F or F-C-A. B is 2nd to the right of E. Putting them together in a circle: Arrange clockwise: E, D, A, C, F, B. E is facing center, right is anti-clockwise? No, right is anticlockwise. Let\'s place them: E, B is 2nd right. Between them is 1 person. E, D, A, C, F, B. Let\'s check: B is 2nd right of E (yes). D is between E and A (yes: E, D, A). C is between A and F (yes: A, C, F). Remaining place for B is between F and E. Immediate right of F (anti-clockwise) is B.'
    },
    {
      id: 8, topic: 'analytical-reasoning',
      question: 'Statement: "Use our detergent for the brightest white clothes." - An advertisement.\nAssumption I: People prefer white clothes to be bright.\nAssumption II: People pay attention to advertisements.',
      options: ['Only Assumption I is implicit', 'Only Assumption II is implicit', 'Both I and II are implicit', 'Neither I nor II is implicit'],
      correct: 2,
      explanation: 'The ad promises "brightest white clothes", which assumes people want that (Assumption I). Ads are made assuming people will read/watch and be influenced by them (Assumption II). Both are implicit.'
    },
    {
      id: 9, topic: 'analytical-reasoning',
      question: 'In a dice, numbers 1 to 6 are written on faces. If 1 is opposite to 6, 2 is opposite to 5, and 3 is opposite to 4, which of the following pairs can never be adjacent?',
      options: ['1 and 2', '2 and 4', '3 and 4', '5 and 6'],
      correct: 2,
      explanation: 'If 3 is OPPOSITE to 4, they can NEVER be adjacent faces. Opposites cannot share an edge.'
    },
    {
      id: 10, topic: 'data-sufficiency',
      question: 'What is the value of x?\nStatement I: x^2 = 36\nStatement II: x > 0',
      options: ['Statement I alone is sufficient', 'Statement II alone is sufficient', 'Both statements together are necessary', 'Both statements together are not sufficient'],
      correct: 2,
      explanation: 'From I: x^2 = 36 -> x = 6 or x = -6. Not unique, so I alone is not sufficient. From II: x > 0. Gives no specific value. Combining I and II: x must be 6. Both are necessary.'
    },
    {
      id: 11, topic: 'data-sufficiency',
      question: 'In a row of boys, what is the position of Rohan from the right end?\nStatement I: Rohan is 14th from the left end.\nStatement II: There are exactly 40 boys in the row.',
      options: ['I alone is sufficient', 'II alone is sufficient', 'Both I and II together are necessary', 'Either I or II alone is sufficient'],
      correct: 2,
      explanation: 'To find position from right, we need (Total number of boys) AND (Position from left). Position from Right = Total - Position from Left + 1. Neither statement alone gives both pieces of data. Together: 40 - 14 + 1 = 27th.'
    },
    {
      id: 12, topic: 'data-sufficiency',
      question: 'Is P > Q?\nStatement I: P/Q > 1\nStatement II: P and Q are positive integers.',
      options: ['I alone is sufficient', 'Both together are necessary', 'II alone is sufficient', 'Neither is sufficient'],
      correct: 1,
      explanation: 'From I: P/Q > 1. If Q is positive, P > Q. If Q is negative, P < Q. So I alone is not sufficient. From II alone, we just know they are positive. Together: Since Q is positive, we can multiply both sides of P/Q > 1 by Q without changing the sign, giving P > Q. Both necessary.'
    },
    {
      id: 13, topic: 'logical-reasoning',
      question: 'Find the next number in the series: 2, 6, 12, 20, 30, ?',
      options: ['40', '42', '44', '46'],
      correct: 1,
      explanation: 'The differences between consecutive numbers are: 6-2=4, 12-6=6, 20-12=8, 30-20=10. The next difference should be 12. So, 30 + 12 = 42. Alternatively, it is 1×2, 2×3, 3×4, 4×5, 5×6, 6×7=42.'
    },
    {
      id: 14, topic: 'logical-reasoning',
      question: 'In a class, Shyam is 15th from the top and 21st from the bottom. How many students are there in the class?',
      options: ['34', '35', '36', '37'],
      correct: 1,
      explanation: 'Total students = (Position from top + Position from bottom) - 1 = (15 + 21) - 1 = 36 - 1 = 35. (We subtract 1 because Shyam is counted twice).'
    },
    {
      id: 15, topic: 'analytical-reasoning',
      question: 'Which of the following is a Leap Year?',
      options: ['1900', '2000', '2100', '2200'],
      correct: 1,
      explanation: 'For century years (ending in 00), the rule for leap year is that it must be divisible by 400. Only 2000 is divisible by 400. The others are not leap years.'
    },
    {
      id: 16, topic: 'logical-reasoning',
      question: 'Choose the odd one out:',
      options: ['Tomato', 'Potato', 'Carrot', 'Onion'],
      correct: 0,
      explanation: 'Tomato is a fruit (and grows above ground). Potato, Carrot, and Onion are all root vegetables/tubers that grow underground.'
    }
  ]
};

window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['web-dev'] = {
  id: 'web-dev',
  name: 'Web Development',
  icon: '🕸️',
  description: 'HTML, CSS, JavaScript, DOM, XML aur PHP ke basics seekhein.',
  topics: [
    {
      id: 'html-basics',
      name: 'HTML & Web Page Authoring',
      theory: `
        <h3>HTML (HyperText Markup Language)</h3>
        <p>HTML web pages ka structure banane ke liye use hota hai. Yeh browser ko batata hai ki content ko kaise display karna hai. <b>Web page authoring</b> ka matlab hai inhi HTML documents ko design aur create karna using editors (jaise VS Code, Notepad++).</p>
        
        <h4>Basic Structure</h4>
        <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Main Heading&lt;/h1&gt;
    &lt;p&gt;Paragraph text.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        
        <h4>Important Tags</h4>
        <ul>
          <li><b>&lt;a href="..."&gt;</b>: Anchor tag (Hyperlinks banane ke liye).</li>
          <li><b>&lt;img src="..." alt="..."&gt;</b>: Image display karne ke liye.</li>
          <li><b>&lt;table&gt;, &lt;tr&gt;, &lt;td&gt;, &lt;th&gt;</b>: Tables create karne ke liye.</li>
          <li><b>&lt;form&gt;, &lt;input&gt;</b>: User se input lene ke liye (Form authoring).</li>
        </ul>

        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          HTML case-insensitive hai, par modern HTML5 standards ke anusaar best practice mein hamesha lowercase tags use karne chahiye.
        </div>
      `
    },
    {
      id: 'css-basics',
      name: 'CSS (Cascading Style Sheets)',
      theory: `
        <h3>CSS Kya Hai?</h3>
        <p>CSS ka kaam HTML elements ko style karna hai (color, font, layout, etc.). Isse web page visually appealing lagta hai. Isme 'Cascading' ka matlab hai ki multiple style rules ek element par kaise apply aur override hote hain.</p>
        
        <h4>CSS Insert Karne Ke Tareeqe</h4>
        <ol>
          <li><b>Inline:</b> Element ke andar <code>style="..."</code> attribute use karke (Highest priority).</li>
          <li><b>Internal:</b> <code>&lt;head&gt;</code> mein <code>&lt;style&gt;</code> tag ke andar.</li>
          <li><b>External:</b> Alag .css file banakar <code>&lt;link&gt;</code> tag se connect karna (Best approach).</li>
        </ol>

        <h4>Selectors</h4>
        <p>CSS selectors ka use elements ko select karne ke liye hota hai:</p>
        <ul>
          <li><b>Element Selector:</b> <code>p { color: red; }</code> (Saare paragraphs red honge)</li>
          <li><b>ID Selector:</b> <code>#myId { font-size: 20px; }</code> (ID page me unique honi chahiye)</li>
          <li><b>Class Selector:</b> <code>.myClass { background: yellow; }</code> (Multiple elements par lag sakti hai)</li>
        </ul>
        
        <div class="formula-box">
          <div class="formula-title">📐 Box Model</div>
          Total Element Width/Height = Content + Padding + Border + Margin
        </div>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Exam mein aksar CSS selector specificity pe sawal aata hai. Priority yaad rakhein: Inline Style &gt; ID &gt; Class &gt; Element.
        </div>
      `
    },
    {
      id: 'js-dom',
      name: 'JavaScript & DOM',
      theory: `
        <h3>JavaScript Basics</h3>
        <p>JavaScript web pages mein behavior ya logic add karne ke kaam aati hai. Yeh client-side scripting language hai jo browser ke andar chalti hai.</p>
        
        <pre><code>
let marks = 85;
const passingMarks = 33;
function checkResult(score) {
  if (score >= passingMarks) {
    return "Pass";
  } else {
    return "Fail";
  }
}
console.log(checkResult(marks)); // Output: Pass
        </code></pre>

        <h3>DOM (Document Object Model)</h3>
        <p>Jab browser ek web page load karta hai, toh wo HTML elements ka ek tree object banata hai jise DOM kehte hain. JS is DOM tree ko manipulate (read, update, delete) karke page ko dynamically change kar sakti hai.</p>
        
        <h4>DOM Manipulation Methods</h4>
        <ul>
          <li><code>document.getElementById('demo')</code>: ID attribute se single element dhundhna.</li>
          <li><code>document.getElementsByClassName('box')</code>: Class name se elements ki HTMLCollection lena.</li>
          <li><code>document.querySelector('.box')</code>: CSS selector ka use karke match hone wala pehla element nikalna.</li>
        </ul>
        
        <h4>Example (Worked Out)</h4>
        <p>Kaise kisi HTML element ka text badlein:</p>
        <pre><code>
// HTML file mein: &lt;p id="status"&gt;Loading...&lt;/p&gt;

// JavaScript mein:
document.getElementById("status").innerHTML = "Data Loaded Successfully!";
        </code></pre>
      `
    },
    {
      id: 'dhtml',
      name: 'Dynamic HTML (DHTML)',
      theory: `
        <h3>Dynamic HTML Kya Hai?</h3>
        <p>DHTML koi alag language nahi hai, balki HTML, CSS, JavaScript, aur DOM ka combination hai. Iska aim static web pages ko <b>interactive</b> aur <b>dynamic</b> banana hota hai, bina server se page ko dobara load kiye.</p>
        
        <table class="comparison-table">
          <tr><th>Feature</th><th>HTML</th><th>DHTML</th></tr>
          <tr><td>Page Content</td><td>Static (Fixed rehta hai)</td><td>Dynamic (User actions pe badalta hai)</td></tr>
          <tr><td>Server Trip</td><td>Naya page dekhne ke liye server pe request jayegi</td><td>Client-side (browser) me hi change ho jata hai</td></tr>
        </table>
        
        <h4>DHTML in Action</h4>
        <p>DHTML ka use kahan hota hai?</p>
        <ul>
          <li>Drop-down menus banana jo hover karne par open hote hain.</li>
          <li>Form submit karne se pehle frontend validation (e.g., password lamba hona chahiye).</li>
          <li>Images ka slider banana ya animations add karna.</li>
        </ul>
      `
    },
    {
      id: 'xml',
      name: 'XML (eXtensible Markup Language)',
      theory: `
        <h3>XML Kya Hai?</h3>
        <p>XML data ko describe, store aur transport karne ke liye design kiya gaya hai. "eXtensible" ka matlab hai ki isme HTML ki tarah predefined tags (like &lt;h1&gt;, &lt;body&gt;) nahi hote. Aapko apne khud ke descriptive tags banane hote hain.</p>
        
        <h4>XML Syntax Rules</h4>
        <ul>
          <li>XML mein har opening tag ka ek closing tag hona zaruri hai.</li>
          <li>XML strictly case-sensitive hai (<code>&lt;Name&gt;</code> aur <code>&lt;name&gt;</code> alag hain).</li>
          <li>Elements correctly nested hone chahiye (ander wala tag pehle close hoga).</li>
          <li>Pure document mein exactly ek <b>Root element</b> hona lazmi hai jiske andar baaki sab ho.</li>
        </ul>
        
        <h4>Example</h4>
        <pre><code>
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;library&gt;   &lt;!-- Root element --&gt;
  &lt;book&gt;
    &lt;title&gt;Computer Science&lt;/title&gt;
    &lt;author&gt;S.K. Singh&lt;/author&gt;
    &lt;price&gt;500&lt;/price&gt;
  &lt;/book&gt;
&lt;/library&gt;
        </code></pre>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          HTML ka focus ispe hai ki data <b>kaise display ho</b> (presentation), jabki XML ka focus ispe hai ki data <b>kya hai</b> (structure).
        </div>
      `
    },
    {
      id: 'php-basics',
      name: 'Basics of PHP',
      theory: `
        <h3>PHP (Hypertext Preprocessor)</h3>
        <p>PHP ek open-source, server-side scripting language hai jo dynamically generated web pages banane aur databases (jaise MySQL) se connect karne ke kaam aati hai.</p>
        
        <h4>Basic PHP Syntax</h4>
        <p>PHP code HTML ke beech mein embed kiya ja sakta hai. Ye hamesha <code>&lt;?php</code> aur <code>?&gt;</code> tags ke beech likha jata hai.</p>
        
        <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
  &lt;h1&gt;My First PHP Page&lt;/h1&gt;
  &lt;?php
    $userName = "Amit";
    echo "Welcome " . $userName;
  ?&gt;
&lt;/body&gt;
&lt;/html&gt;
        </code></pre>
        
        <h4>Variables aur Rules</h4>
        <ul>
          <li>PHP mein variables hamesha <code>$</code> (dollar) sign se start hote hain.</li>
          <li>Variable names mein spaces nahi ho sakte (use underscore).</li>
          <li>PHP dynamically typed language hai, variable type batana zaruri nahi hai.</li>
          <li>Variable names case-sensitive hote hain (<code>$age</code> aur <code>$AGE</code> alag hain).</li>
        </ul>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Yaad rakhein: PHP ke keywords (jaise <code>echo</code>, <code>if</code>, <code>else</code>, <code>while</code>) aur built-in functions case-insensitive hote hain, lekin user-defined Variables case-sensitive hote hain.
        </div>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'html-basics',
      question: 'HTML ka full form kya hai?',
      options: ['Hyper Text Markup Language', 'High Text Markup Language', 'Hyper Tabular Markup Language', 'None of these'],
      correct: 0,
      explanation: 'HTML stands for HyperText Markup Language. Yeh web pages ka structure banane ke liye standard markup language hai.'
    },
    {
      id: 2,
      topic: 'html-basics',
      question: 'Web standards kaun develop aur maintain karta hai?',
      options: ['Google', 'Microsoft', 'World Wide Web Consortium (W3C)', 'Apple'],
      correct: 2,
      explanation: 'W3C (World Wide Web Consortium) web ke standards aur guidelines develop aur maintain karta hai.'
    },
    {
      id: 3,
      topic: 'html-basics',
      question: 'Inmein se kaunsa tag HTML document ka sabse bada (largest) heading define karta hai?',
      options: ['&lt;heading&gt;', '&lt;h6&gt;', '&lt;head&gt;', '&lt;h1&gt;'],
      correct: 3,
      explanation: '&lt;h1&gt; sabse bada (most important) heading hota hai, aur &lt;h6&gt; sabse chhota.'
    },
    {
      id: 4,
      topic: 'html-basics',
      question: 'HTML mein hyperlink (link) banane ka sahi syntax kaunsa hai?',
      options: [
        '&lt;a url="http://www.google.com"&gt;Google&lt;/a&gt;', 
        '&lt;a href="http://www.google.com"&gt;Google&lt;/a&gt;', 
        '&lt;link href="http://www.google.com"&gt;Google&lt;/link&gt;', 
        '&lt;a name="http://www.google.com"&gt;Google&lt;/a&gt;'
      ],
      correct: 1,
      explanation: 'Anchor tag &lt;a&gt; mein \'href\' (Hypertext Reference) attribute ka use hota hai link ka destination URL specify karne ke liye.'
    },
    {
      id: 5,
      topic: 'html-basics',
      question: 'HTML mein bulleted (unordered) list create karne ke liye kaunsa tag use hota hai?',
      options: ['&lt;ul&gt;', '&lt;ol&gt;', '&lt;li&gt;', '&lt;list&gt;'],
      correct: 0,
      explanation: '&lt;ul&gt; (Unordered List) bullet points wali list banata hai, jabki &lt;ol&gt; (Ordered List) numbering (1, 2, 3...) wali list banata hai.'
    },
    {
      id: 6,
      topic: 'css-basics',
      question: 'CSS ka full form kya hai?',
      options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'Colorful Style Sheets'],
      correct: 1,
      explanation: 'CSS ka matlab Cascading Style Sheets hota hai, jo HTML elements ke presentation aur design ko control karti hai.'
    },
    {
      id: 7,
      topic: 'css-basics',
      question: 'CSS selectors mein kis symbol ka use ID selector ke liye kiya jata hai?',
      options: ['.', '#', '*', '@'],
      correct: 1,
      explanation: 'ID selector \'#\' symbol se denote hota hai (jaise #myId), jabki class selector dot \'.\' se (jaise .myClass) darshaya jata hai.'
    },
    {
      id: 8,
      topic: 'css-basics',
      question: 'External stylesheet (.css file) ko HTML page me link karne ke liye HTML ke kis tag ka use hota hai?',
      options: ['&lt;style&gt;', '&lt;script&gt;', '&lt;link&gt;', '&lt;css&gt;'],
      correct: 2,
      explanation: '&lt;link rel="stylesheet" href="style.css"&gt; tag ko HTML ke &lt;head&gt; section mein use kiya jata hai external CSS file ko include karne ke liye.'
    },
    {
      id: 9,
      topic: 'css-basics',
      question: 'Web page pe text ka background color change karne ke liye kaunsi CSS property use hoti hai?',
      options: ['color', 'bg-color', 'background-color', 'text-background'],
      correct: 2,
      explanation: 'background-color property kisi bhi element ka pichhla rang (background) set karti hai. \'color\' property sirf text (font) ka color change karti hai.'
    },
    {
      id: 10,
      topic: 'css-basics',
      question: 'CSS mein kis position property ki wajah se element window pe fixed rehta hai, chahe page scroll bhi ho jaye?',
      options: ['absolute', 'relative', 'static', 'fixed'],
      correct: 3,
      explanation: 'position: fixed; kisi element ko browser viewport ki relative ek fixed jagah par chipka deti hai, user scroll kare toh bhi element wahi rehta hai.'
    },
    {
      id: 11,
      topic: 'js-dom',
      question: 'JavaScript code ko HTML document mein insert karne ke liye kaunsa tag istemaal hota hai?',
      options: ['&lt;javascript&gt;', '&lt;script&gt;', '&lt;js&gt;', '&lt;code&gt;'],
      correct: 1,
      explanation: '&lt;script&gt; tag ke beech mein JavaScript code likha jata hai, ya src attribute use karke external JS file link ki jati hai.'
    },
    {
      id: 12,
      topic: 'js-dom',
      question: 'DOM (Document Object Model) structure mein "Document" kisko refer karta hai?',
      options: ['Computer ke kisi file ko', 'HTML Web page ko', 'CSS stylesheet ko', 'Web server ko'],
      correct: 1,
      explanation: 'DOM mein "Document" us current HTML web page ko refer karta hai jise browser parse karke objects ka tree banata hai.'
    },
    {
      id: 13,
      topic: 'js-dom',
      question: 'JavaScript mein kisi HTML element ki ID se uska DOM node fetch karne ka sahi method kaunsa hai?',
      options: ['document.getElementById("idName")', 'document.getElement("idName")', 'document.getId("idName")', 'document.querySelector("#idName") aur document.getElementById("idName") dono'],
      correct: 3,
      explanation: 'querySelector() CSS selector (jaise #id) accept karta hai, aur getElementById() direct ID ka naam. Dono valid hain.'
    },
    {
      id: 14,
      topic: 'js-dom',
      question: 'Inmein se kaunsa JavaScript mein variable declare karne ka keyword nahi hai?',
      options: ['let', 'var', 'const', 'dim'],
      correct: 3,
      explanation: 'dim VBScript (visual basic) mein use hota hai. JavaScript mein var, let, aur const ka use hota hai variables banane ke liye.'
    },
    {
      id: 15,
      topic: 'js-dom',
      question: 'Agar DOM me kisi HTML element ka text ya HTML content badalna ho, toh kis property ka use hota hai?',
      options: ['innerHTML', 'innerText', 'textContent', 'All of the above'],
      correct: 3,
      explanation: 'Ye teeno properties ka use element ka content modify ya read karne ke liye kiya jata hai (with slight differences in how they treat whitespace and HTML tags).'
    },
    {
      id: 16,
      topic: 'dhtml',
      question: 'DHTML kiska combination hai?',
      options: ['HTML, CSS, XML', 'HTML, CSS, JavaScript, DOM', 'HTML, PHP, MySQL', 'XML, JSON, AJAX'],
      correct: 1,
      explanation: 'DHTML (Dynamic HTML) web pages ko interactive banane ka ek approach hai jismein HTML markup, CSS styling, aur JS+DOM manipulation ka sath me use hota hai.'
    },
    {
      id: 17,
      topic: 'dhtml',
      question: 'DHTML ka main advantage kya hai?',
      options: ['Database se fast connection', 'Page ko server par bina bheje dynamically change karna', 'Free website hosting', 'Offline mode me kaam karna'],
      correct: 1,
      explanation: 'DHTML ka main fayda yahi hai ki client (browser) ke end par hi page elements hide, show, ya animate kiye ja sakte hain bina server pe naye page ki request bheje.'
    },
    {
      id: 18,
      topic: 'xml',
      question: 'XML ka primary function kya hota hai?',
      options: ['Data ka layout set karna aur usko sundar dikhana', 'Data ko structured way me store aur transport karna', 'Database create karna', 'Browser mein scripts run karna'],
      correct: 1,
      explanation: 'XML (eXtensible Markup Language) strictly data ko describe karne, store karne aur ek system se dusre system tak transport karne ke liye use hoti hai.'
    },
    {
      id: 19,
      topic: 'xml',
      question: 'XML tags ke bare me kaunsi statement sahi hai?',
      options: ['Tags predefined (pehle se tay) hote hain HTML ki tarah', 'User khud apne data ke hisaab se naye tags banata hai', 'XML mein tags ka use nahi hota, brackets [] use hote hain', 'Sirf 10 allowed tags hote hain'],
      correct: 1,
      explanation: 'XML "eXtensible" hai. Isme aap apne khud ke descriptive tags bana sakte hain, isme HTML jaisa pehle se fix dictionary of tags nahi hai.'
    },
    {
      id: 20,
      topic: 'xml',
      question: 'Inmein se kaunsa XML ka valid syntax rule nahi hai?',
      options: ['Har element ka proper closing tag hona zaruri hai', 'XML tag names case-sensitive nahi hote', 'Elements properly nested hone chahiye', 'Ek document me sirf ek root element hona chahiye'],
      correct: 1,
      explanation: 'XML STRICTLY case-sensitive hoti hai. Agar opening tag &lt;Book&gt; hai, toh closing tag bhi &lt;/Book&gt; hona chahiye, &lt;/book&gt; likhne par XML parse error aayega.'
    },
    {
      id: 21,
      topic: 'php-basics',
      question: 'PHP scripts exactly kahan execute hoti hain?',
      options: ['Client ke web browser par', 'Web Server par', 'Database engine mein', 'Client ke Operating System kernel mein'],
      correct: 1,
      explanation: 'PHP ek Server-Side language hai. Iska poora execution server par hota hai aur processing ke baad plain HTML generate karke client browser ko bheji jati hai.'
    },
    {
      id: 22,
      topic: 'php-basics',
      question: 'PHP mein kisi bhi variable ka naam kis character/symbol se shuru hona anivarya (mandatory) hai?',
      options: ['& (Ampersand)', '@ (At rate)', '# (Hash)', '$ (Dollar)'],
      correct: 3,
      explanation: 'PHP syntax ke rules ke anusaar, har variable ka naam hamesha dollar sign ($) se hi shuru hona chahiye (jaise $student_name).'
    },
    {
      id: 23,
      topic: 'php-basics',
      question: 'PHP code ke end result ko browser pe output/print karne ke liye commonly kaunsa keyword use hota hai?',
      options: ['document.write', 'print_out', 'echo', 'console.log'],
      correct: 2,
      explanation: 'PHP mein variable ki value ya string ko output karne ke liye `echo` (ya phir `print`) ka sabse zyada use kiya jata hai.'
    },
    {
      id: 24,
      topic: 'php-basics',
      question: 'HTML file ke andar PHP code likhne ke liye kaunse tags ka use kiya jata hai?',
      options: ['&lt;script language="php"&gt; ... &lt;/script&gt;', '&lt;?php ... ?&gt;', '&lt;php&gt; ... &lt;/php&gt;', '&lt;code php&gt; ... &lt;/code&gt;'],
      correct: 1,
      explanation: 'Standard PHP parser ko batane ke liye ki yaha se PHP code shuru hai, &lt;?php aur ?&gt; enclose tags ka use hota hai.'
    },
    {
      id: 25,
      topic: 'php-basics',
      question: 'PHP code mein single-line comment kaise add kiye jate hain?',
      options: ['// comment', '# comment', 'Dono // aur #', '&lt;!-- comment --&gt;'],
      correct: 2,
      explanation: 'PHP mein C++ ki tarah (//) aur shell-script ki tarah (#) dono tarah ke syntaxes se single-line comments banaye ja sakte hain.'
    },
    {
      id: 26,
      topic: 'html-basics',
      question: 'HTML form mein kisi text input field ko "read-only" (jisme text na badal sakein) banane ke liye kaunsa attribute use hota hai?',
      options: ['disabled', 'readonly', 'locked', 'non-editable'],
      correct: 1,
      explanation: '\'readonly\' attribute user ko input text modify karne se rokta hai, lekin form submit karne pe data bheja jata hai. \'disabled\' mein data submit nahi hota.'
    },
    {
      id: 27,
      topic: 'css-basics',
      question: 'CSS flexbox (display: flex) mein main-axis (horizontal row) ke along child elements ko center karne ke liye kis property ka use hota hai?',
      options: ['align-items: center', 'text-align: center', 'justify-content: center', 'vertical-align: middle'],
      correct: 2,
      explanation: 'Flexbox container mein main-axis par spacing aur alignment control karne ke liye `justify-content` ka use hota hai. `align-items` cross-axis ke liye hai.'
    }
  ]
};

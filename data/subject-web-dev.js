window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['web-dev'] = {
  id: 'web-dev',
  name: 'Web Development',
  icon: '🕸️',
  description: 'Complete Web Development syllabus covering HTML, CSS, JavaScript, DOM, XML, aur PHP. Exam-oriented detailed theory aur practice questions.',
  topics: [
    {
      id: 'html-dhtml',
      name: 'HTML & DHTML',
      theory: `
        <h3>Introduction to HTML & HTML5</h3>
        <p>HTML (HyperText Markup Language) web pages ka foundational building block hai. Tim Berners-Lee ne 1989 mein HTML banaya tha. Iska main kaam web browser ko ye batana hai ki content ko display kaise karna hai. HTML5 (released in 2014) modern web applications ke liye multimedia, graphics, aur advanced forms support laata hai.</p>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          HTML case-insensitive language hai, par best practice ke liye hamesha lowercase letters (tags aur attributes) use karne chahiye. HTML5 ki doctype declaration sabse simple hoti hai: <code>&lt;!DOCTYPE html&gt;</code>. Ye browser ko strict/standards mode me render karne ka signal deti hai.
        </div>

        <h4>Semantic HTML</h4>
        <p>Semantic HTML ka matlab hai aise tags use karna jo apne content ka sahi meaning (semantics) bata sakein. Isse SEO (Search Engine Optimization) aur Accessibility (screen readers) mein bohot madad milti hai.</p>
        <table class="comparison-table">
          <tr><th>Non-Semantic Tags</th><th>Semantic Tags</th></tr>
          <tr><td><code>&lt;div&gt;</code>, <code>&lt;span&gt;</code></td><td><code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;main&gt;</code></td></tr>
          <tr><td>Inka koi apna meaning nahi hota, ye sirf container ke roop me kaam aate hain.</td><td>Yeh clearly batate hain ki unke andar kaisa content hai, jaise <code>&lt;nav&gt;</code> navigation links ke liye.</td></tr>
        </table>

        <h4>HTML Forms & Inputs</h4>
        <p>Forms user se data collect karne ke liye use hote hain. HTML5 ne nayi input types (email, url, date, range, color) introduce ki hain jo client-side validation ko easy banati hain bina JavaScript ke.</p>
        <p><b>Important Form Attributes:</b></p>
        <ul>
          <li><b>action:</b> Form submit hone ke baad data kis URL/script par jayega.</li>
          <li><b>method:</b> Data bhejne ka HTTP tarika (GET ya POST).</li>
          <li><b>enctype:</b> Jab form mein file upload (<code>type="file"</code>) ho, tab iski value <code>multipart/form-data</code> honi chahiye.</li>
        </ul>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap: GET vs POST</div>
          Exam mein ye frequently pucha jata hai. GET requests URL parameters ke through data bhejti hain (visible in address bar) aur iski length limit hoti hai (approx 2KB). POST data HTTP body mein bhejta hai, iski virtually koi length limit nahi hoti aur yeh secure hota hai (sensitive data like passwords ke liye).
        </div>

        <h4>HTML Tables</h4>
        <p>Tables tabular data ko rows aur columns mein arrange karne ke liye hote hain. Basic structure mein <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> (table row), <code>&lt;th&gt;</code> (table heading - by default bold aur centered), aur <code>&lt;td&gt;</code> (table data) shamil hote hain.</p>
        <p>HTML5 mein <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, aur <code>&lt;tfoot&gt;</code> ka use logical grouping ke liye hota hai. <code>rowspan</code> aur <code>colspan</code> attributes cells ko horizontally ya vertically merge karne ke kaam aate hain.</p>

        <h4>Canvas aur Multimedia</h4>
        <p>HTML5 ne <code>&lt;canvas&gt;</code> element diya hai jo JavaScript ke jariye 2D aur 3D graphics, animations, aur games draw karne ke kaam aata hai. Canvas sirf ek blank container hai, actual drawing logic JS se ki jati hai.</p>
        <p><b>Canvas vs SVG:</b> Canvas pixel-based (raster graphics) hota hai aur screen zoom karne par blur/pixelate ho sakta hai. SVG (Scalable Vector Graphics) math-based XML file hoti hai aur infinity tak zoom karne par bhi crisp rehta hai.</p>
        <p>Multimedia tags like <code>&lt;audio&gt;</code> aur <code>&lt;video&gt;</code> directly media play karne me help karte hain. <code>controls</code> attribute lagane se user ko play/pause buttons dikhte hain.</p>

        <h4>DHTML (Dynamic HTML)</h4>
        <p>DHTML koi alag stand-alone language nahi hai. Yeh ek combination hai HTML, CSS, JavaScript aur DOM ka. Iska main purpose static HTML pages ko interactive aur dynamic banana hai. Page load hone ke baad, JS DOM manipulate karke aur CSS classes add/remove karke animations aur content updates karta hai (e.g., drop-down menus, sliders).</p>
      `
    },
    {
      id: 'web-authoring',
      name: 'Web Page Authoring & Protocols',
      theory: `
        <h3>Web Page Authoring & Hosting</h3>
        <p>Web page authoring ka matlab hai documents (web pages) create aur assemble karna jise Internet ya intranet par dekha ja sake. Is process mein text editors (VS Code, Sublime) ya WYSIWYG (What You See Is What You Get) tools (jaise Adobe Dreamweaver) ka use hota hai.</p>

        <h4>Web Servers</h4>
        <p>Web server ek software (ya us hardware jisme wo install hai) hota hai jo client (browser) se HTTP requests accept karta hai aur HTTP responses (HTML files, images, JSON) return karta hai.</p>
        <table class="comparison-table">
          <tr><th>Web Server</th><th>Characteristics</th></tr>
          <tr><td><b>Apache HTTP Server</b></td><td>Sabse purana aur widely used open-source server. LAMP (Linux, Apache, MySQL, PHP) stack ka hissa. Configuration files <code>.htaccess</code> ke through manage hoti hain.</td></tr>
          <tr><td><b>Nginx (Engine-X)</b></td><td>High concurrency aur load balancing ke liye famous. Ye Event-driven, asynchronous architecture use karta hai, jisse bahot saari concurrent requests easily handle hoti hain.</td></tr>
          <tr><td><b>Microsoft IIS</b></td><td>Internet Information Services, Windows Server ke sath aata hai. .NET applications aur enterprise environments ke liye best hai.</td></tr>
        </table>

        <h4>HTTP Protocol & Methods</h4>
        <p>HTTP (HyperText Transfer Protocol) ek application-layer, stateless protocol hai jo client aur server ke beech data transfer karta hai. Stateless hone ka matlab hai server pichli requests ki koi state (memory) save nahi rakhta.</p>

        <div class="formula-box">
          <div class="formula-title">📐 RESTful HTTP Methods</div>
          <ul>
            <li><b>GET:</b> Data retrieve karna (Idempotent - multiple calls change nothing).</li>
            <li><b>POST:</b> Naya data create karna. Data request body me jata hai.</li>
            <li><b>PUT:</b> Existing resource ko completely update/replace karna (Idempotent).</li>
            <li><b>PATCH:</b> Resource ko partially update karna.</li>
            <li><b>DELETE:</b> Resource ko server se delete karna.</li>
          </ul>
        </div>

        <div class="tip-box">
          <div class="tip-title">💡 HTTP Status Codes Categories</div>
          <p><b>1xx (Informational):</b> Request received, continuing process.</p>
          <p><b>2xx (Success):</b> 200 OK, 201 Created, 204 No Content.</p>
          <p><b>3xx (Redirection):</b> 301 Moved Permanently, 302 Found (Temporary).</p>
          <p><b>4xx (Client Error):</b> 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found.</p>
          <p><b>5xx (Server Error):</b> 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable.</p>
        </div>

        <h4>Hosting & DNS</h4>
        <p><b>Web Hosting:</b> Wo service jo aapki website ki files aur databases ko physical servers par store karti hai. Types: Shared (cheap, shared resources), VPS (Virtual Private Server - isolated environment), Dedicated (full physical machine), Cloud (AWS, Azure - highly scalable).</p>
        <p><b>DNS (Domain Name System):</b> Internet ki phonebook. Jab user <code>www.google.com</code> type karta hai, DNS server us human-readable domain ko IP address (jaise 142.250.190.46) mein convert (resolve) karta hai. DNS default UDP/TCP port 53 par run karta hai.</p>
      `
    },
    {
      id: 'css-styling',
      name: 'CSS, Flexbox & Grid',
      theory: `
        <h3>CSS (Cascading Style Sheets)</h3>
        <p>CSS web pages ke layout, colors, fonts aur overall design (presentation layer) ko control karti hai. "Cascading" ka matlab hai ki rules ek specific hierarchy se apply hote hain: Specificity aur Source Order ke aadhar par.</p>

        <h4>CSS Selectors aur Specificity</h4>
        <p>Selectors se hum HTML elements ko target karte hain. Main types of selectors:</p>
        <ul>
          <li><b>Universal Selector (<code>*</code>):</b> Sabhi elements par apply hota hai.</li>
          <li><b>Element/Tag Selector:</b> <code>p { color: red; }</code></li>
          <li><b>Class Selector (<code>.</code>):</b> <code>.my-class { font-size: 16px; }</code></li>
          <li><b>ID Selector (<code>#</code>):</b> <code>#my-id { background: blue; }</code></li>
          <li><b>Combinators:</b> Descendant (Space), Child (<code>&gt;</code>), Adjacent Sibling (<code>+</code>), General Sibling (<code>~</code>).</li>
          <li><b>Pseudo-classes:</b> <code>:hover</code> (mouse over), <code>:focus</code> (input select), <code>:nth-child(n)</code> (specific child target).</li>
          <li><b>Pseudo-elements:</b> <code>::before</code> aur <code>::after</code> (content inject karne ke liye).</li>
        </ul>

        <div class="formula-box">
          <div class="formula-title">📐 Specificity Calculation Rule</div>
          <p>Agar ek hi element par multiple conflicting rules hon, to kiska rule apply hoga? Uska calculation (A, B, C, D) aise hota hai:</p>
          <ol>
            <li><b>Inline Style:</b> (1, 0, 0, 0) - Highest normal priority.</li>
            <li><b>IDs:</b> (0, 1, 0, 0)</li>
            <li><b>Classes, Pseudo-classes, Attributes:</b> (0, 0, 1, 0)</li>
            <li><b>Elements, Pseudo-elements:</b> (0, 0, 0, 1)</li>
          </ol>
          <p><i>Note: <code>!important</code> keyword kisi bhi specificity rule ko tod kar sabse highest priority le leta hai.</i></p>
        </div>

        <h4>The CSS Box Model</h4>
        <p>Har HTML element ek rectangular box hota hai. Box model ke 4 layers hote hain (andar se bahar):<br>
        <b>Content Area &rarr; Padding &rarr; Border &rarr; Margin</b></p>
        <p>By default, width sirf content area ki hoti hai. Agar aap <code>width: 200px; padding: 20px; border: 2px;</code> dete hain, toh total size 244px ban jata hai. Isey fix karne ke liye <code>box-sizing: border-box;</code> use karte hain, jisse padding aur border defined width ke andar shrink (adjust) ho jate hain.</p>

        <h4>Flexbox (Flexible Box Layout)</h4>
        <p>Flexbox ek <b>1-Dimensional layout model</b> hai (ek samay mein ya toh row (X-axis) ya column (Y-axis) ko manage karta hai). Parent element ko <code>display: flex;</code> dene par child elements automatically flex items ban jate hain.</p>
        <table class="comparison-table">
          <tr><th>Container Properties (Parent)</th><th>Item Properties (Children)</th></tr>
          <tr><td><code>flex-direction</code> (row, column)</td><td><code>flex-grow</code> (space lena)</td></tr>
          <tr><td><code>justify-content</code> (main axis alignment)</td><td><code>flex-shrink</code> (shrink hona)</td></tr>
          <tr><td><code>align-items</code> (cross axis alignment)</td><td><code>align-self</code> (individual alignment)</td></tr>
          <tr><td><code>flex-wrap</code> (wrap ya nowrap)</td><td><code>order</code> (sequence change)</td></tr>
        </table>

        <h4>CSS Grid</h4>
        <p>Grid ek <b>2-Dimensional layout model</b> hai (rows aur columns dono ek sath design karta hai). <code>display: grid;</code> se grid initialize hota hai. Common properties hain <code>grid-template-columns: repeat(3, 1fr);</code>, <code>grid-gap</code> (spacing ke liye), aur <code>grid-area</code>.</p>

        <h4>Animations aur Responsive Design</h4>
        <p><b>Animations:</b> <code>@keyframes</code> rule ke through animation ke frames (0% to 100%) define kiye jate hain. <code>transition</code> smooth property change (jaise hover par color badalna) ke liye hota hai.</p>
        <p><b>Responsive Design:</b> Media Queries (<code>@media (max-width: 768px) { ... }</code>) ka use karke alag-alag screen sizes (mobile, tablet, desktop) ke hisaab se CSS rules adjust kiye jate hain. Viewport meta tag (<code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>) lagana lazmi hota hai taaki device width scale ho.</p>
      `
    },
    {
      id: 'js-dom',
      name: 'JavaScript Basics & DOM',
      theory: `
        <h3>JavaScript Basics, ES6 & DOM</h3>
        <p>JavaScript ek high-level, dynamically typed, interpreted, aur multi-paradigm programming language hai. Brendan Eich ne ise 1995 mein banaya tha. JS single-threaded language hai jo Event Loop mechanism par kaam karti hai.</p>

        <h4>Variables & Hoisting</h4>
        <p>ES6 (ECMAScript 2015) aane se pehle sirf <code>var</code> keyword hota tha, jo function-scoped hota tha. ES6 ne <code>let</code> aur <code>const</code> introduce kiye jo block-scoped hain.</p>
        <ul>
          <li><b>Hoisting:</b> Variable aur function declarations ko compilation phase me top par "lift" kar diya jata hai. Par yaad rahe, <code>var</code> hoisting me <code>undefined</code> initialize hota hai, jabki <code>let</code>/<code>const</code> "Temporal Dead Zone" (TDZ) me chale jate hain aur error dete hain agar declaration se pehle access kiya jaye.</li>
          <li><b>const:</b> Value reassignment allow nahi karta (constant reference).</li>
        </ul>

        <h4>ES6 Important Features</h4>
        <ul>
          <li><b>Arrow Functions:</b> <code>const add = (a, b) =&gt; a + b;</code>. Ye normal functions se chote hote hain aur sabse important, inka apna <code>this</code> context nahi hota; ye apne surrounding (lexical) scope ka <code>this</code> use karte hain.</li>
          <li><b>Template Literals:</b> Backticks (<code>\` \`</code>) ka use karke multi-line strings aur interpolation (<code>\${variable}</code>) easy ho jata hai.</li>
          <li><b>Destructuring:</b> <code>const { name, age } = userObj;</code> se objects ya arrays se seedhe variables nikal sakte hain.</li>
          <li><b>Spread/Rest Operator (<code>...</code>):</b> Arrays ya objects ko spread out (unfold) ya multiple arguments ko single array (rest) mein ikattha karne ke kaam aata hai.</li>
        </ul>

        <h4>Closures aur Lexical Scope</h4>
        <p>Closure tab banta hai jab ek function dusre function ke andar define hota hai aur bahar wale function ke scope (variables) ka access rakhta hai, chahe bahar wala function execute ho chuka ho. Yeh private variables aur data hiding (Encapsulation) bananey ke liye bohot powerful hai.</p>

        <h4>Prototypes aur Prototypal Inheritance</h4>
        <p>JavaScript mein classes sirf syntactic sugar hain; backend me JS fully prototypes par chalti hai. Har object ka ek internal prototype object (<code>__proto__</code>) hota hai. Jab aap kisi object par property dhundhte hain, JS object par check karti hai, agar nahi milti to uske prototype chain me check karti hai, tab tak jab tak usko property na mil jaye ya chain khatam ho jaye (null).</p>

        <h4>Asynchronous JS (Promises & Async/Await)</h4>
        <p>JS me APIs ya delays (timers) ko handle karne ke liye pehle callbacks ka use hota tha jisse "Callback Hell" banta tha. Isey fix karne ke liye <b>Promises</b> aaye. Ek Promise ke 3 states hote hain: <b>Pending, Fulfilled (Resolved), Rejected</b>. Success ` + '`' + `.then()` + '`' + ` me jata hai aur error ` + '`' + `.catch()` + '`' + ` me.</p>
        <p><b>Async/Await:</b> (ES8) Ye Promises ko handle karne ka clean, synchronous-looking tarika hai. <code>await</code> keyword promise ke resolve/reject hone ka wait karta hai.</p>

        <h4>Document Object Model (DOM) & Events</h4>
        <p>DOM HTML page ka ek tree structure representation hai jo browser generate karta hai. JavaScript is tree ke nodes ko object maan kar access aur modify karti hai.</p>
        <ul>
          <li><b>Selection:</b> <code>getElementById()</code>, <code>querySelector()</code>, <code>querySelectorAll()</code>.</li>
          <li><b>Manipulation:</b> <code>textContent</code> (text update), <code>innerHTML</code> (HTML update), <code>classList.add()</code> (CSS class toggle).</li>
          <li><b>Events:</b> <code>addEventListener('click', function)</code>.</li>
        </ul>

        <div class="warning-box">
          <div class="tip-title">⚠️ Event Bubbling vs Capturing</div>
          <p>DOM Event Propagation ke 3 phases hain: 1) Capturing (Root se target tak niche aana), 2) Target (event trigger hona), 3) Bubbling (Target se wapas root ki taraf upar jana). Default DOM behavior <b>Bubbling</b> hota hai. Bubble rokne ke liye <code>event.stopPropagation()</code> call karte hain.</p>
        </div>
      `
    },
    {
      id: 'xml-tech',
      name: 'XML & JSON Technologies',
      theory: `
        <h3>XML (eXtensible Markup Language)</h3>
        <p>XML ek markup language hai jise data ko store aur transport karne ke liye design kiya gaya hai. HTML data ko <i>display/format</i> karne par focus karta hai, jabki XML data ko <i>describe</i> karne par focus karta hai. XML extensible hai, matlab aap apne khud ke custom tags (e.g., <code>&lt;book&gt;</code>, <code>&lt;author&gt;</code>) bana sakte hain.</p>

        <table class="comparison-table">
          <tr><th>Feature</th><th>HTML</th><th>XML</th></tr>
          <tr><td><b>Tags</b></td><td>Predefined tags (h1, p, div)</td><td>Custom user-defined tags</td></tr>
          <tr><td><b>Case Sensitivity</b></td><td>Case-insensitive</td><td>Strictly case-sensitive</td></tr>
          <tr><td><b>Closing Tags</b></td><td>Optional in some cases (e.g. <code>&lt;br&gt;</code>)</td><td>Mandatory for ALL tags</td></tr>
          <tr><td><b>Goal</b></td><td>Presentation & Layout</td><td>Data Interchange & Structuring</td></tr>
        </table>

        <h4>Well-Formed vs Valid XML</h4>
        <p><b>Well-formed XML:</b> Wo document jo XML ke syntax rules strictly follow karta hai (proper root element hona, closing tags hona, case matching, quotes for attributes).</p>
        <p><b>Valid XML:</b> Wo document jo Well-formed hone ke sath-sath ek specific Document Type Definition (DTD) ya XML Schema (XSD) rulesets ko purely satisfy kare (matlab structure me order aur data types correct hon).</p>

        <h4>DTD (Document Type Definition)</h4>
        <p>DTD ye define karta hai ki ek XML document me konse elements aayenge aur unka order kya hoga. Halanki, DTD thoda purana hai aur ye directly XML syntax use nahi karta. Ise internal (document ke andar) ya external (alag .dtd file) define kiya ja sakta hai.</p>

        <h4>XSD (XML Schema Definition)</h4>
        <p>XSD DTD ka modern, powerful alternative hai. XSD ka sabse bada advantage ye hai ki yeh khud XML format me likha jata hai, aur ye strict <b>Data Types</b> (integer, boolean, date, string) support karta hai. DTD data ko hamesha as string treat karta hai. Modern systems me XSD preferred hai validation ke liye.</p>

        <h4>XSLT (eXtensible Stylesheet Language Transformations)</h4>
        <p>XSLT ka use kisi ek XML document structure ko dusre format (jaise HTML, ya ek different XML structure) me transform karne ke liye kiya jata hai. Jaise HTML ko design karne ke liye CSS hoti hai, waise hi XML data ko browser par visually readable format (HTML) me convert karne ke liye XSLT rules (templates) likhe jate hain.</p>

        <div class="tip-box">
          <div class="tip-title">💡 JSON Comparison</div>
          <p>JSON (JavaScript Object Notation) aajkal REST APIs mein XML se zyada dominant aur popular ho chuka hai.</p>
          <ul>
            <li><b>Simplicity:</b> JSON objects aur arrays use karta hai, end tags ki jarurat nahi (low overhead/lightweight).</li>
            <li><b>Native JS Support:</b> JSON directly JS object structure jaisa hota hai. <code>JSON.parse()</code> aur <code>JSON.stringify()</code> se natively easily parse/generate hota hai.</li>
            <li><b>Data Types:</b> JSON strings, numbers, booleans, aur arrays inherently support karta hai (XSD ke bina).</li>
            <li><i>XML sirf tab use hota hai jab bahot complex hierarchical data, document validation (XSD), aur attribute metadata zaroori ho (e.g., SOAP APIs, RSS feeds).</i></li>
          </ul>
        </div>
      `
    },
    {
      id: 'php-basics',
      name: 'PHP Basics & Form Handling',
      theory: `
        <h3>PHP (Hypertext Preprocessor) Basics</h3>
        <p>PHP ek server-side scripting language hai jo Rasmus Lerdorf ne 1994 mein specifically web development ke liye design ki thi. PHP scripts server (jaise Apache/Nginx) par execute hote hain, aur result plain HTML format mein client (browser) ko bheja jata hai. Browser ko PHP source code kabhi nahi dikhta.</p>

        <h4>Variables aur Data Types</h4>
        <p>PHP mein har variable ka naam <code>$</code> (dollar) sign se start hona lazmi hai (e.g., <code>$username = "Admin";</code>). PHP ek loosely/dynamically typed language hai, matlab variable banate waqt data type define karne ki zaroorat nahi hoti. Isme Strings judne (concatenation) ke liye dot (<code>.</code>) operator use hota hai, JS ya Java ki tarah <code>+</code> nahi.</p>
        <pre>&lt;?php
  $firstName = "John";
  $age = 25;
  echo "My name is " . $firstName . " and I am " . $age;
?&gt;</pre>

        <h4>Arrays in PHP</h4>
        <p>PHP arrays bohot flexible hain aur internally hash maps ki tarah kaam karte hain. Inke 3 types hain:</p>
        <ol>
          <li><b>Indexed Arrays:</b> Default numeric indices (0, 1, 2) wali list. <code>$colors = array("Red", "Green", "Blue");</code> (ya ` + '`' + `["Red", "Green"]` + '`' + ` syntax).</li>
          <li><b>Associative Arrays:</b> Jinme numbers ki jagah custom named keys hoti hain. Yaha ` + '`' + `=>` + '`' + ` operator use hota hai. <code>$ages = array("Peter"=>35, "Ben"=>37);</code></li>
          <li><b>Multidimensional Arrays:</b> Arrays ke andar array, complex grid/matrix data rakhne ke liye.</li>
        </ol>

        <h4>Superglobals aur Form Handling</h4>
        <p>PHP mein kuch built-in predefined arrays hote hain jo script me kahin se bhi (global scope) accessible hote hain:</p>
        <ul>
          <li><code>$_SERVER</code>: Server ki information, HTTP headers, paths, aur script locations hold karta hai.</li>
          <li><code>$_GET</code>: URL parameters ya GET method wale form ka data collect karta hai. Ye associative array hota hai.</li>
          <li><code>$_POST</code>: HTTP body se POST form data collect karta hai. Ye passwords ke liye use hota hai.</li>
          <li><code>$_REQUEST</code>: GET, POST, aur COOKIES teeno ke data ko combine karke contain karta hai.</li>
        </ul>

        <h4>Session aur Cookies</h4>
        <p>Kyunki HTTP protocol stateless hai, isliye user ki pehchan (login info, cart items) pages ke beech barkarar rakhne ke liye state management techniques use hoti hain.</p>
        <table class="comparison-table">
          <tr><th>Cookies</th><th>Sessions</th></tr>
          <tr><td>Data client ki hard drive (browser) mein store hota hai.</td><td>Data server ke RAM ya temporary files mein store hota hai.</td></tr>
          <tr><td>Max size approx 4KB per cookie.</td><td>Server capacity tak limit (virtually no small limit).</td></tr>
          <tr><td>Insecure (client easily modify/read kar sakta hai).</td><td>Secure. Browser me sirf ek Session ID (cookie ke through) jati hai.</td></tr>
          <tr><td>Set using: <code>setcookie("user", "Alex", time() + 3600);</code></td><td>Set using: <code>session_start(); $_SESSION["user"] = "Alex";</code></td></tr>
        </table>

        <div class="warning-box">
          <div class="tip-title">⚠️ Important Rule for Session/Cookies</div>
          <code>session_start()</code> aur <code>setcookie()</code> dono functions HTML tags, blank spaces, ya kisi bhi tarah ke output/echo hone se pehle file ke top par call hone chahiye. Aisa isliye kyunki ye HTTP headers bhejne ka kaam karte hain. Agar thoda sa bhi text output ho gaya, toh server throw karega error: "Headers already sent".
        </div>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'html-dhtml',
      question: "Which of the following is true about HTML5 semantic elements?",
      options: [
        "They provide metadata for styling purposes only.",
        "They clearly describe their meaning to both the browser and the developer.",
        "They are deprecated in modern web development.",
        "They cannot contain nested HTML tags."
      ],
      correct: 1,
      explanation: "Semantic tags like <article>, <footer>, <header> inherently describe the type of content they enclose, aiding screen readers and SEO engines, whereas non-semantic tags like <div> give no information about their content."
    },
    {
      id: 2,
      topic: 'html-dhtml',
      question: "Which HTML5 attribute specifies that a form field must be filled out before submitting the form?",
      options: [
        "validate",
        "mandatory",
        "required",
        "important"
      ],
      correct: 2,
      explanation: "The 'required' attribute client-side validation lagata hai, jisse browser form submit karne se pehle ensure karta hai ki input field empty to nahi hai."
    },
    {
      id: 3,
      topic: 'html-dhtml',
      question: "In HTML table design, which tag is used to create a table header cell, and what is its default visual behavior?",
      options: [
        "<thead>, standard font and left-aligned",
        "<th>, bold and centered",
        "<tc>, bold and left-aligned",
        "<header>, standard font and centered"
      ],
      correct: 1,
      explanation: "<th> tag table header cell define karta hai, aur browsers by default isme likhe gaye text ko bold aur center-aligned render karte hain."
    },
    {
      id: 4,
      topic: 'html-dhtml',
      question: "When uploading a file using an HTML form (input type='file'), the 'enctype' attribute must be set to:",
      options: [
        "application/x-www-form-urlencoded",
        "text/plain",
        "multipart/form-data",
        "file/upload"
      ],
      correct: 2,
      explanation: "File binary data hoti hai. Jab form se files upload ki jati hain, tab form element me enctype='multipart/form-data' lagana compulsory hota hai taaki binary chunk correctly server par bheja ja sake."
    },
    {
      id: 5,
      topic: 'html-dhtml',
      question: "What is the fundamental role of the <canvas> element in HTML5?",
      options: [
        "To embed external video players.",
        "To provide a container for drawing graphics via JavaScript.",
        "To define a scalable vector graphic (SVG) inline.",
        "To capture camera snapshots automatically."
      ],
      correct: 1,
      explanation: "<canvas> element apne aap me kuch draw nahi karta, ye sirf ek blank graphical surface (container) deta hai. Drawings strictly JavaScript API ke zariye ki jati hain."
    },
    {
      id: 6,
      topic: 'html-dhtml',
      question: "Which combination of technologies fundamentally constitutes DHTML (Dynamic HTML)?",
      options: [
        "HTML, XML, CSS, and PHP",
        "HTML, CSS, JavaScript, and DOM",
        "HTML5, SVG, WebGL, and C++",
        "XHTML, JSON, AJAX, and Python"
      ],
      correct: 1,
      explanation: "DHTML ek independent language nahi hai. Ye HTML (structure), CSS (styling), JS (logic), aur DOM (interface) ko ek sath jodkar static page ko interactively behave karane ka approach hai."
    },
    {
      id: 7,
      topic: 'html-dhtml',
      question: "What is the main purpose of the HTML <label> element?",
      options: [
        "To create a highlighted text effect.",
        "To bind a text description to a form input, improving accessibility and click area.",
        "To group multiple elements into a visual block.",
        "To define a tooltip that appears on hover."
      ],
      correct: 1,
      explanation: "<label> tag form inputs (jaise checkbox, radio) se bind hota hai ('for' attribute se). Isse accessibility badhti hai aur label par click karne se form input focus ya check ho jata hai."
    },
    {
      id: 8,
      topic: 'web-authoring',
      question: "Which HTTP status code category represents server-side errors?",
      options: [
        "2xx",
        "3xx",
        "4xx",
        "5xx"
      ],
      correct: 3,
      explanation: "5xx series (jaise 500 Internal Server Error, 502 Bad Gateway) batati hai ki client ne theek request bheji, par server pe kuch crash ya failure hua. 4xx client-side errors hain (jaise 404)."
    },
    {
      id: 9,
      topic: 'web-authoring',
      question: "An HTTP GET request differs from an HTTP POST request in that:",
      options: [
        "GET is used to create records, while POST retrieves records.",
        "GET appends form data to the URL, while POST includes data in the HTTP request body.",
        "GET is more secure for sending passwords than POST.",
        "GET has no length restriction, whereas POST is limited to 2048 characters."
      ],
      correct: 1,
      explanation: "GET parameters address bar me visible hote hain (URL append) aur length limit hoti hai. POST body me hidden form me jata hai, jisse wo sensitive data carry karne me secure aur large payloads bhej sakta hai."
    },
    {
      id: 10,
      topic: 'web-authoring',
      question: "What does a DNS server primarily do?",
      options: [
        "Translates human-readable domain names into machine-readable IP addresses.",
        "Hosts the website files and databases.",
        "Encrypts the web traffic between client and server.",
        "Compresses web pages for faster loading."
      ],
      correct: 0,
      explanation: "Domain Name System (DNS) phonebook ka kaam karta hai. Ye text domains (e.g. google.com) ko unke associated server ke numerical IP addresses me resolve karta hai."
    },
    {
      id: 11,
      topic: 'web-authoring',
      question: "Which HTTP method is strictly idempotent and is generally used to completely replace a resource?",
      options: [
        "POST",
        "PUT",
        "PATCH",
        "UPDATE"
      ],
      correct: 1,
      explanation: "PUT request idempotent hoti hai, jiska matlab ise chahe kitni bar bhi fire karein, server state me aage koi changes nahi aayenge (resource overwrite hoga). Ye record ko entirely replace karti hai."
    },
    {
      id: 12,
      topic: 'web-authoring',
      question: "Nginx is well-known in web hosting environments primarily because of its:",
      options: [
        "Native support for ASP.NET applications.",
        "Built-in relational database engine.",
        "Event-driven architecture that efficiently handles high concurrency.",
        "Being the oldest web server still in use."
      ],
      correct: 2,
      explanation: "Apache process-driven hota hai (ek request = ek naya thread). Nginx event-driven aur asynchronous architecture use karta hai, jisse ye heavy traffic aur hazaron concurrent requests low memory ke sath handle kar leta hai."
    },
    {
      id: 13,
      topic: 'web-authoring',
      question: "Which of the following statements about Web Hosting types is technically correct?",
      options: [
        "Shared hosting gives you dedicated hardware resources.",
        "A VPS (Virtual Private Server) provides isolated server environments on shared hardware.",
        "Dedicated hosting means the site is hosted on a local desktop machine.",
        "Domain registration and web hosting are strictly the exact same service."
      ],
      correct: 1,
      explanation: "VPS hosting ek single powerful physical server ko multiple isolated virtual servers me divide karta hai, jisse user ko private server jaisa root control aur dedicated RAM/CPU portion mil jata hai."
    },
    {
      id: 14,
      topic: 'css-styling',
      question: "Based on CSS Specificity rules, which of the following selectors will take highest precedence if applied to the same element?",
      options: [
        "div p.intro (0,0,1,2)",
        "#main-content p (0,1,0,1)",
        "p.intro[type=\"text\"] (0,0,2,1)",
        "style=\"color:red;\" inline attribute (1,0,0,0)"
      ],
      correct: 3,
      explanation: "Inline styles (HTML element par lagaye gaye 'style' attribute) ki specificity sabse highest (1,0,0,0) hoti hai, aur ye kisi bhi ID, Class, ya Tag rules ko override kar deta hai (unless !important keyword is used)."
    },
    {
      id: 15,
      topic: 'css-styling',
      question: "What is the computed total width of a box with `width: 200px; padding: 20px; border: 5px solid black;` when `box-sizing: border-box;` is applied?",
      options: [
        "250px",
        "200px",
        "150px",
        "240px"
      ],
      correct: 1,
      explanation: "Normal content-box model me width add hoti hai (200+40+10 = 250px). Lekin 'border-box' apply karne par, declared 200px width final hoti hai, aur border/padding ussi 200px ke andar content area ko shrink karke adjust ho jate hain."
    },
    {
      id: 16,
      topic: 'css-styling',
      question: "In CSS Flexbox layout, what does the property `justify-content` align?",
      options: [
        "Items along the cross axis",
        "Items along the main axis",
        "The container itself within the viewport",
        "Grid tracks in CSS Grid"
      ],
      correct: 1,
      explanation: "Flexbox mein `justify-content` flex items ki spacing aur alignment ko Main Axis (default horizontal left-to-right) par control karta hai. Cross axis ke liye `align-items` use hota hai."
    },
    {
      id: 17,
      topic: 'css-styling',
      question: "Which CSS pseudo-class is triggered exclusively when a user clicks and holds down the mouse button on an element?",
      options: [
        ":hover",
        ":focus",
        ":active",
        ":visited"
      ],
      correct: 2,
      explanation: ":active tab apply hota hai jab mouse click press ho chuka ho par release na hua ho. Ye generally buttons ko 'pressed' ya 'clicked' animation effect dene ke kaam aata hai."
    },
    {
      id: 18,
      topic: 'css-styling',
      question: "How does CSS Grid layout differ fundamentally from CSS Flexbox layout?",
      options: [
        "Flexbox is for responsive design, Grid is for fixed layouts only.",
        "Grid operates purely in one dimension, Flexbox operates in two dimensions.",
        "Grid is a 2-dimensional layout system, while Flexbox is a 1-dimensional layout system.",
        "Grid uses margin collapse, Flexbox uses padding collapse."
      ],
      correct: 2,
      explanation: "Flexbox ek waqt par sirf rows me kaam karta hai ya columns me (1D). CSS Grid complex layouts ke liye banaya gaya hai, jisme wo rows aur columns dono dimensions ko ek sath structure karta hai (2D)."
    },
    {
      id: 19,
      topic: 'css-styling',
      question: "The CSS Flexbox property `flex-grow` determines:",
      options: [
        "How much an item will shrink relative to other items when there is not enough space.",
        "How much the container should grow to fit all items.",
        "The proportion of available free space the item should take up relative to the rest of the flex items.",
        "The font size scaling for text inside the flex item."
      ],
      correct: 2,
      explanation: "flex-grow ek item ki ability define karta hai ki remaining container space ka kitna hissa us particular item ko expand hokar occupy karna chahiye."
    },
    {
      id: 20,
      topic: 'css-styling',
      question: "What is the correct CSS media query syntax to apply styles only for screens smaller than or equal to 768px in width?",
      options: [
        "@media (max-width: 768px)",
        "@media screen and (min-width: 768px)",
        "@media (width < 768px)",
        "@media only screen (max: 768)"
      ],
      correct: 0,
      explanation: "max-width: 768px ka simple logic hai 'maximum allowed width is 768px'. Yani 0px se lekar 768px tak hi andar diye gaye CSS rules lagu honge. Ye mobile devices target karne ka standard tarika hai."
    },
    {
      id: 21,
      topic: 'js-dom',
      question: "What will be the output of `console.log(typeof null);` in JavaScript?",
      options: [
        "'null'",
        "'undefined'",
        "'object'",
        "'number'"
      ],
      correct: 2,
      explanation: "Ye JS engine ka ek historically famous bug hai jise legacy compatibility ke liye theek nahi kiya gaya. null primitive data type hai, par 'typeof null' galti se 'object' return karta hai."
    },
    {
      id: 22,
      topic: 'js-dom',
      question: "Which of the following keywords in ES6 creates a block-scoped variable that CANNOT be reassigned?",
      options: [
        "var",
        "let",
        "const",
        "static"
      ],
      correct: 2,
      explanation: "const se declared variables block scope k andar rehte hain aur ek baar assign hone ke baad unka reference dobara reassign/change nahi kiya ja sakta."
    },
    {
      id: 23,
      topic: 'js-dom',
      question: "Consider the closure concept. Which statement best describes a closure in JavaScript?",
      options: [
        "A function that executes immediately upon definition.",
        "A combination of a function and the lexical environment within which that function was declared.",
        "An object that prevents changes to its properties.",
        "A way to hide DOM elements visually using styling."
      ],
      correct: 1,
      explanation: "Closure ek memory reference hoti hai. Jab ek inner function bahar pass kiya jata hai, wo apne outer (parent) function ke variables ki yaadein (lexical environment) apne sath bind kar ke le jata hai, chahe parent destroy ho gaya ho."
    },
    {
      id: 24,
      topic: 'js-dom',
      question: "In the DOM event propagation model, what is the default order of execution when an event fires on a nested element?",
      options: [
        "Capturing Phase -> Target Phase -> Bubbling Phase",
        "Bubbling Phase -> Target Phase -> Capturing Phase",
        "Target Phase -> Capturing Phase -> Bubbling Phase",
        "Only the Target Phase executes."
      ],
      correct: 0,
      explanation: "Standard W3C event flow pehle window se target tak niche aata hai (Capturing Phase), phir actual element pe fire hota hai (Target Phase), aur phir child se parent hote hue wapas root pe jata hai (Bubbling Phase). Most listeners by default bubbling phase me set hote hain."
    },
    {
      id: 25,
      topic: 'js-dom',
      question: "When working with Promises in modern JavaScript, which method block is executed exclusively when the Promise is rejected?",
      options: [
        ".then()",
        ".catch()",
        ".finally()",
        ".resolve()"
      ],
      correct: 1,
      explanation: "Promise jab reject/fail hoti hai (kuch network error ya internal throw), toh program execution sidha uski chain me lage `.catch()` block me transfer ho jata hai errors handle karne ke liye."
    },
    {
      id: 26,
      topic: 'js-dom',
      question: "What does the JavaScript `Array.prototype.map()` function do?",
      options: [
        "Modifies the original array elements in place.",
        "Creates a new array populated with the results of calling a provided function on every element in the calling array.",
        "Filters out elements based on a true/false condition.",
        "Returns a single accumulated numerical value from all elements."
      ],
      correct: 1,
      explanation: "Map function functional programming ka basic concept hai. Ye original array mutate/change nahi karta, balki har element par logic lagakar utni hi length ka ek fresh naya array return karta hai."
    },
    {
      id: 27,
      topic: 'js-dom',
      question: "Which method would you use to add a new CSS class to an element's existing list of classes using modern JavaScript?",
      options: [
        "element.className = 'new-class'",
        "element.classList.add('new-class')",
        "element.style.class = 'new-class'",
        "element.appendClass('new-class')"
      ],
      correct: 1,
      explanation: "classList.add() ek modern API hai jo purani classes ko destroy/overwrite kiye bina nayi class append karti hai. .className equal to karne par baki saari existing classes clear ho jati hain."
    },
    {
      id: 28,
      topic: 'xml-tech',
      question: "Which of the following must be strictly true for an XML document to be considered 'valid'?",
      options: [
        "It must contain custom styling using CSS stylesheets.",
        "It must only use lowercase tag names like HTML5.",
        "It must be well-formed and conform strictly to a DTD or XML Schema (XSD).",
        "It must not have any attributes inside opening tags."
      ],
      correct: 2,
      explanation: "Well-formed sirf tag close hone ke rules manta hai. Par 'valid' XML banne ke liye usko specific rules verify karwane padte hain DTD ya XSD se, taki pata chale kon se tags konse data format ko hold kar sakte hain."
    },
    {
      id: 29,
      topic: 'xml-tech',
      question: "What is the primary advantage of XSD (XML Schema Definition) over DTD in XML validation?",
      options: [
        "XSD does not require an internet connection to parse.",
        "XSD supports strict data types (integer, date) and is written in XML syntax itself.",
        "XSD is older and universally supported by older legacy systems.",
        "XSD only allows string values for elements."
      ],
      correct: 1,
      explanation: "DTD basic structure define karta hai apni custom syntax me, data string form me hota hai. XSD khud ek XML file hai jo variables ke Data Types (int, boolean, date) enforce kar sakti hai."
    },
    {
      id: 30,
      topic: 'xml-tech',
      question: "XSLT is used in XML processing primarily to:",
      options: [
        "Transmit XML files securely over HTTP protocol.",
        "Transform XML documents into other formats like HTML or text.",
        "Encrypt XML tags to hide sensitive data.",
        "Validate whether an XML document is well-formed."
      ],
      correct: 1,
      explanation: "XSLT (Extensible Stylesheet Language Transformations) ka primary role ek XML data tree (source) ko template logic apply kar ke ek naye readable format (jaise HTML webpage) me convert karna hai."
    },
    {
      id: 31,
      topic: 'xml-tech',
      question: "Which of the following correctly describes JSON compared to XML?",
      options: [
        "JSON supports mandatory closing tags, XML does not.",
        "JSON uses object/array paradigms making it easier and natively faster to parse in JavaScript.",
        "XML is lighter in weight because it doesn't use heavy brackets.",
        "JSON allows complex multi-line comments inside the data file, XML does not."
      ],
      correct: 1,
      explanation: "JSON syntax directly JS object literals jaisa hai. Browser ka JS engine isko bina heavy DOM parsing tree banaye natively parse (JSON.parse) kar leta hai, jo usko XML se kafi fast aur lightweight banata hai. JSON format me comments allow nahi hote hain."
    },
    {
      id: 32,
      topic: 'xml-tech',
      question: "In a well-formed XML document, which rule is mandatory regarding empty elements (elements with no content)?",
      options: [
        "They must be left open like <br>.",
        "They must be closed properly (e.g., <br></br> or <br/>).",
        "They cannot be used in XML at all.",
        "They must only contain numerical data attributes."
      ],
      correct: 1,
      explanation: "HTML relaxed hota hai (e.g. <img ...> ko end nahi karna padta). Par XML ka strict syntax enforcement rule hai ki chahe tag empty ho, usko hamesha explicitly close karna padega."
    },
    {
      id: 33,
      topic: 'xml-tech',
      question: "In standard JSON syntax, which of the following data types is NOT natively supported?",
      options: [
        "String",
        "Boolean",
        "Null",
        "Function"
      ],
      correct: 3,
      explanation: "JSON strictly ek Data format hai. Ye string, number, object, array, boolean, aur null values save kar sakta hai. Code executables jaise Functions, Dates, ya undefined natively support nahi karta."
    },
    {
      id: 34,
      topic: 'php-basics',
      question: "In PHP, which superglobal array is strictly used to access form data submitted with the HTTP POST method?",
      options: [
        "$_GET",
        "$_SERVER",
        "$_POST",
        "$_FILES"
      ],
      correct: 2,
      explanation: "Jab frontend me <form method='POST'> submit hota hai, PHP environment automatically data extract kar ke associative array $_POST me dal deta hai."
    },
    {
      id: 35,
      topic: 'php-basics',
      question: "What is the fundamental difference between PHP Sessions and Cookies regarding storage location?",
      options: [
        "Cookies are stored on the server, sessions are stored in the client's browser.",
        "Both are stored entirely on the server's hard drive.",
        "Sessions store data on the server, while Cookies store data in the client's web browser.",
        "Both are stored entirely in the client's web browser storage."
      ],
      correct: 2,
      explanation: "Cookies hamesha client/user ke machine (browser) me files me create hoti hain. Session data hamesha server (e.g., Apache/Nginx temp folder) pe store hota hai secure tarike se, client ko sirf session_id ki cookie reference di jati hai."
    },
    {
      id: 36,
      topic: 'php-basics',
      question: "Which PHP function must be executed strictly before sending any HTML output or blank space to the browser in order to use sessions?",
      options: [
        "init_session()",
        "session_start()",
        "start_session()",
        "$_SESSION_init()"
      ],
      correct: 1,
      explanation: "session_start() function browser ko HTTP Header bhej kar ek PHPSESSID cookie banata hai. Agar PHP engine ne headers execute hone se pehle thoda sa bhi body text (even a blank space) output kar diya, to 'headers already sent' ka fatal error ayega."
    },
    {
      id: 37,
      topic: 'php-basics',
      question: "How are variables correctly defined and initialized in PHP?",
      options: [
        "By using the 'var' keyword.",
        "By prefixing the variable name with a '$' symbol.",
        "By declaring the data type first (e.g., int x).",
        "By using the 'let' keyword."
      ],
      correct: 1,
      explanation: "PHP me kisi bhi variable ka identifier declare ya call karne ke liye mandatory roop se '$' prefix lagana padta hai (e.g. $username). Ye loosely typed hai to explicit data types nahi likhne padte."
    },
    {
      id: 38,
      topic: 'php-basics',
      question: "Which of the following creates an Associative Array in PHP?",
      options: [
        "$arr = array(1, 2, 3);",
        "$arr = [\"name\" => \"John\", \"age\" => 25];",
        "$arr = new Array(\"name\", \"John\");",
        "$arr = [1 => \"John\", 2 => 25];"
      ],
      correct: 1,
      explanation: "Associative arrays me index integers ki jagah strings hote hain jinhe custom Named Keys (Dictionary style) banaya jata hai. Arrow operator '=>' map assignment karta hai."
    },
    {
      id: 39,
      topic: 'php-basics',
      question: "The `$_SERVER` superglobal variable in PHP is primarily used to:",
      options: [
        "Modify the server hardware configuration logic.",
        "Read HTTP headers, scripts locations, request paths and environment variables.",
        "Create new relational databases dynamically.",
        "Start a new Apache server instance in the background."
      ],
      correct: 1,
      explanation: "$_SERVER ek inbuilt magic array hai jo user-agent detail, referer url, script path, server port, request method aadi metadata collect kar ke hold karta hai web server se aane pe."
    },
    {
      id: 40,
      topic: 'php-basics',
      question: "Which of the following operators is used for string concatenation in PHP?",
      options: [
        "+",
        ".",
        "&",
        "||"
      ],
      correct: 1,
      explanation: "JavaScript aur Java aadi bhasaon mein plus (+) operator use hota hai concat ke liye. Par PHP me strict mathematics k liye plus use hota hai aur string ko join karne ke liye dot (.) operator use kiya jata hai."
    }
  ]
};

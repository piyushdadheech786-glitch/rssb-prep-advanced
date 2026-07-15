window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['computer-fundamentals'] = {
  id: 'computer-fundamentals',
  name: 'Computer Fundamentals',
  icon: '💻',
  description: 'Number systems, arithmetic operations, programming languages aur I/O devices ki poori jankari',
  topics: [
    {
      id: 'number-system',
      name: 'Number System',
      theory: `
        <h3>Number System (Sankhya Pranali)</h3>
        <p>Computer data ko represent aur process karne ke liye number systems ka use karta hai. Computer electronics par based hai, isliye primarily Binary number system (0 aur 1) samajhta hai. Lekin calculation aur human readable formats ke liye hum baaki systems bhi padhte hain.</p>
        
        <h4>Types of Number Systems</h4>
        <ul>
          <li><strong>Decimal (Base 10):</strong> 0 to 9. Jo hum apni daily life mein use karte hain.</li>
          <li><strong>Binary (Base 2):</strong> 0 and 1. Machine language ka base hai.</li>
          <li><strong>Octal (Base 8):</strong> 0 to 7.</li>
          <li><strong>Hexadecimal (Base 16):</strong> 0 to 9 and A to F (A=10, B=11, C=12, D=13, E=14, F=15). Memory addresses ko short mein likhne ke kaam aata hai.</li>
        </ul>
        
        <div class="formula-box">
          <div class="formula-title">📐 Key Conversion Point</div>
          Kisi bhi base se Decimal mein aane ke liye, uske base ki powers (weights) se multiply karke add karte hain. Decimal se kisi dusre base mein jaane ke liye uske base se integer ko divide aur fraction ko multiply karte hain.
        </div>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Octal number ke ek digit ko 3 binary bits se dikhaya ja sakta hai (2³ = 8). Hexadecimal ke ek digit ko 4 binary bits se dikhaya ja sakta hai (2⁴ = 16).
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p><strong>Convert Binary (1011.01)₂ to Decimal:</strong></p>
        <pre>
Integer part: 1011
1 × 2³ + 0 × 2² + 1 × 2¹ + 1 × 2⁰
= 8 + 0 + 2 + 1 = 11

Fractional part: .01
0 × 2⁻¹ + 1 × 2⁻²
= 0 + 0.25 = 0.25

Total: (11.25)₁₀
        </pre>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Jab fractional part (.01) ko convert karte hain, to division mein left to right negative power (-1, -2) chalti hai. Exam mein bacche direct 1 aur 2 power laga dete hain. Dhyaan rakhein!
        </div>
      `
    },
    {
      id: 'arithmetic-operations',
      name: 'Arithmetic Operations',
      theory: `
        <h3>Binary Arithmetic Operations</h3>
        <p>Computers saare calculations ALU (Arithmetic Logic Unit) mein karte hain using basic binary operations. Addition aur subtraction sabse common hain. Subtraction usually 2's complement method se implement hota hai kyunki isse hardware circuit (Adder) simple rehta hai aur ek hi circuit addition/subtraction dono kar sakta hai.</p>
        
        <h4>Binary Addition Rules</h4>
        <ul>
          <li>0 + 0 = 0</li>
          <li>0 + 1 = 1</li>
          <li>1 + 0 = 1</li>
          <li>1 + 1 = 0 (carry 1)</li>
        </ul>
        
        <div class="formula-box">
          <div class="formula-title">📐 1's & 2's Complement</div>
          <strong>1's Complement:</strong> Har 0 ko 1 aur 1 ko 0 bana do (Invert the bits).<br>
          <strong>2's Complement:</strong> 1's complement mein 1 add kar do. Yeh method negative numbers ko store karne ke liye standard approach hai.
        </div>
        
        <table class="comparison-table">
          <tr><th>Feature</th><th>1's Complement</th><th>2's Complement</th></tr>
          <tr><td>Zero Representation</td><td>Two zeros (+0 and -0)</td><td>Single zero (Unique)</td></tr>
          <tr><td>Hardware Implementation</td><td>End-around carry require karta hai (complex)</td><td>Carry discard hoti hai (simple adder)</td></tr>
          <tr><td>Range (n bits)</td><td>-(2ⁿ⁻¹ - 1) to (2ⁿ⁻¹ - 1)</td><td>-(2ⁿ⁻¹) to (2ⁿ⁻¹ - 1)</td></tr>
        </table>
        
        <h4>Example (Worked Out)</h4>
        <p><strong>Subtraction using 2's Complement (10 - 6 in 8-bit Binary):</strong></p>
        <pre>
10 in Binary = 00001010
6 in Binary  = 00000110

Humein karna hai: 10 - 6 => 10 + (-6)
Step 1: Find 2's complement of 6
1's complement of 6 = 11111001
2's complement of 6 = 11111001 + 1 = 11111010 (-6)

Step 2: Add 10 and (-6)
  00001010 (10)
+ 11111010 (-6)
-----------
 100000100 => End carry aayi hai, isko discard karte hain.
Answer: 00000100 (Jo ki +4 hai)
        </pre>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          2's complement addition ke baad aane wali end-carry ko humesha DISCARD karte hain. Agar carry nahi aati, iska matlab result negative hai aur woh khud 2's complement form mein likha hua hai.
        </div>
      `
    },
    {
      id: 'computer-languages',
      name: 'Categories of Computer Language',
      theory: `
        <h3>Categories of Computer Language</h3>
        <p>Computer khud sirf machine language (0s aur 1s) samajhta hai. Par humans ke liye isme code likhna mushkil hai, isliye alag-alag generations aur categories ki programming languages banayi gayi.</p>
        
        <h4>1. Low-Level Languages (LLL)</h4>
        <p>Ye hardware ke bahut kareeb hoti hain. Inme memory aur CPU registers ka direct control hota hai. Ye generally machine-dependent hoti hain.</p>
        <ul>
          <li><strong>Machine Language (1GL):</strong> Sirf 0 aur 1. Processor bina kisi translator ke direct execute karta hai. Likhne mein bahut kathin.</li>
          <li><strong>Assembly Language (2GL):</strong> Isme English letters jaise mnemonics (ADD, SUB, MOV) ka use hota hai. Ise machine code mein badalne ke liye <strong>Assembler</strong> ki zarurat padti hai.</li>
        </ul>
        
        <h4>2. High-Level Languages (HLL)</h4>
        <p>Ye human-readable aur English-like hoti hain. Inko samajhne ke liye Translator (Compiler ya Interpreter) ki zarurat hoti hai. Ye machine-independent hoti hain.</p>
        <ul>
          <li><strong>3rd Generation (3GL):</strong> Procedural aur Object-Oriented languages jaise C, C++, Java, Pascal. Ye "how to do" par focus karti hain.</li>
          <li><strong>4th Generation (4GL):</strong> Query languages jaise SQL. Yeh "what to do" (kya chahiye) par focus karti hain, algorithm programmer ko nahi likhna padta.</li>
          <li><strong>5th Generation (5GL):</strong> AI based logic programming languages jaise PROLOG, LISP. Ye rules aur facts par based decision making karti hain.</li>
        </ul>
        
        <table class="comparison-table">
          <tr><th>Feature</th><th>Compiler</th><th>Interpreter</th></tr>
          <tr><td>Translation Method</td><td>Poore program ko ek saath translate karta hai.</td><td>Line-by-line (statement by statement) translate karta hai.</td></tr>
          <tr><td>Execution Time</td><td>Fast hota hai (ek baar compile hone ke baad baar-baar direct run kar sakte hain).</td><td>Slow hota hai kyunki runtime par har baar translate karna padta hai.</td></tr>
          <tr><td>Error Reporting</td><td>Saare syntax errors ko ek list mein end mein dikhata hai.</td><td>Pehla error aate hi ruk jata hai, jisse Debugging aasan ho jati hai.</td></tr>
        </table>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Python aur Ruby interpreted hoti hain, jabki C aur C++ compiled hain. Java dono ka combination use karti hai (Pehle Compiler se Bytecode banta hai, fir JVM me Interpreter use hota hai).
        </div>
      `
    },
    {
      id: 'io-devices',
      name: 'Functional Details of I/O Devices',
      theory: `
        <h3>Functional Details of I/O Devices</h3>
        <p>Input/Output devices (jinhe Peripherals bhi kehte hain) computer ko bahari duniya se jodne ka kaam karte hain. Input devices user se human-readable data le kar usko binary me CPU ko dete hain, aur Output devices process hue binary data ko wapas human-readable form me dikhate hain.</p>
        
        <h4>Key Input Devices aur unki Functioning</h4>
        <ul>
          <li><strong>Keyboard:</strong> Ek matrix circuit use karta hai. Jab aap key press karte hain, ek switch close hota hai aur keyboard controller (microcontroller) scan karke us key ka unique scancode/ASCII code CPU ko bhejta hai.</li>
          <li><strong>Mouse:</strong> Aajkal optical mouse use hote hain jo ek LED aur sensor (tiny camera) use karke surface ki hazaron pictures per second lete hain. Image comparison se direction aur speed track hoti hai.</li>
          <li><strong>Scanners & Special Readers:</strong>
            <ul>
              <li><strong>OMR (Optical Mark Reader):</strong> Pencil ya pen ke mark se light ki reflection ko detect karke objective exams (MCQs) check karta hai. Dark mark light ko kam reflect karta hai.</li>
              <li><strong>MICR (Magnetic Ink Character Recognition):</strong> Banks mein cheque processing ke liye. Isme iron-oxide based magnetic ink se printed characters ko magnetic reader read karta hai (for security).</li>
              <li><strong>OCR (Optical Character Recognition):</strong> Kisi image me likhe hue text ke pattern ko recognize karke usko editable text (ASCII) banata hai.</li>
            </ul>
          </li>
        </ul>
        
        <h4>Key Output Devices aur unki Functioning</h4>
        <ul>
          <li><strong>Monitor / Display:</strong>
            <ul>
              <li><strong>CRT (Cathode Ray Tube):</strong> Purane TV jaise dabe. Inme ek electron gun hoti hai jo vacuum tube ke andar phospher coated screen par electrons fire karti hai, jisse dot glow hota hai. Ye bahut power lete hain aur radiation dete hain.</li>
              <li><strong>LCD (Liquid Crystal Display) & LED:</strong> LCD me do polarized glass ke beech liquid crystals hote hain jo light ko block ya pass karte hain. Jab background light ke liye CCFL tube ki jagah Light Emitting Diodes (LED) use hote hain, toh usko LED monitor kehte hain. LED kam power leti hai aur color contrast better hota hai.</li>
            </ul>
          </li>
          <li><strong>Printers:</strong>
            <ul>
              <li><strong>Impact Printers (Dot Matrix):</strong> Isme chhote pins ek ink ribbon par hit karte hain, jisse paper par dot chapta hai. Ye carbon copy bana sakte hain par awaaz bahut karte hain (like a typewriter).</li>
              <li><strong>Non-Impact Printers (Laser & Inkjet):</strong> Laser printer me ek photo-sensitive drum hota hai. Laser beam drum par image draw karti hai, drum pe static charge aane se Toner (dry powder) chipak jata hai, aur phir heat roller se paper par fuse/pighla diya jata hai. Ye bahut fast aur quiet hote hain. Inkjet printers liquid ink ka spray karte hain.</li>
            </ul>
          </li>
        </ul>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          MICR (Magnetic Ink) aur OCR (Optical) mein confuse na hon. Bank cheque hamesha MICR hota hai kyunki magnetic ink normal scanner se copy nahi ho sakti. OMR specifically marks/bubbles ke liye hai.
        </div>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'number-system',
      question: 'Decimal number 43 ka Binary equivalent kya hoga?',
      options: ['101011', '110101', '101101', '100101'],
      correct: 0,
      explanation: 'Sahi answer 101011 hai. 43 ko 2 se lagatar divide karne par remainders reverse order mein likhte hain (32 + 8 + 2 + 1 = 43).'
    },
    {
      id: 2,
      topic: 'number-system',
      question: 'Binary number 101101011100 ka Hexadecimal equivalent kya hoga?',
      options: ['B5C', 'C5B', 'A4C', 'B6C'],
      correct: 0,
      explanation: 'Sahi answer B5C hai. Binary ko 4-4 ke groups me divide karein (Right se Left): 1011(B), 0101(5), 1100(C). So B5C banega.'
    },
    {
      id: 3,
      topic: 'number-system',
      question: 'Decimal fraction 0.625 ko Binary mein kaise likhenge?',
      options: ['.110', '.011', '.101', '.111'],
      correct: 2,
      explanation: 'Sahi answer .101 hai. Fraction part ko 2 se multiply karte hain: 0.625 x 2 = 1.25 (1), 0.25 x 2 = 0.5 (0), 0.5 x 2 = 1.0 (1). Upar se neeche padhne par: .101 aata hai.'
    },
    {
      id: 4,
      topic: 'number-system',
      question: 'Octal number system ka base kya hota hai aur isme sabse bada digit kaunsa hota hai?',
      options: ['Base 8, Max digit 8', 'Base 8, Max digit 7', 'Base 10, Max digit 7', 'Base 16, Max digit 8'],
      correct: 1,
      explanation: 'Sahi answer Base 8, Max digit 7 hai. Kisi bhi base-N system mein digits 0 se lekar N-1 tak hote hain. Isliye Octal mein 0 se 7 tak digits hote hain.'
    },
    {
      id: 5,
      topic: 'number-system',
      question: 'Octal number 75 ka Decimal equivalent kya hoga?',
      options: ['57', '65', '61', '63'],
      correct: 2,
      explanation: 'Sahi answer 61 hai. Convert karne ke liye powers of 8 ka use hota hai: 7 × 8¹ + 5 × 8⁰ = 56 + 5 = 61.'
    },
    {
      id: 6,
      topic: 'number-system',
      question: 'Ek Hexadecimal digit ko represent karne ke liye kitne Binary bits ki aavashyakta hoti hai?',
      options: ['2 bits', '3 bits', '4 bits', '8 bits'],
      correct: 2,
      explanation: 'Sahi answer 4 bits hai. Hexadecimal ka base 16 hota hai, jo ki 2⁴ hai. Isliye iske har digit ko exactly 4 bits me represent kiya ja sakta hai (jaise F = 1111).'
    },
    {
      id: 7,
      topic: 'number-system',
      question: 'Signed magnitude representation mein Most Significant Bit (MSB) kya darshata hai?',
      options: ['Magnitude of the number', 'Sign of the number', 'Parity bit', 'Carry bit'],
      correct: 1,
      explanation: 'Sahi answer Sign of the number hai. MSB agar 0 hai to number positive (+) hai, aur agar 1 hai to number negative (-) hota hai.'
    },
    {
      id: 8,
      topic: 'arithmetic-operations',
      question: 'Binary number 00110100 ka 2\'s complement kya hoga?',
      options: ['11001011', '11001100', '11001010', '11010100'],
      correct: 1,
      explanation: 'Sahi answer 11001100 hai. Pehle 1\'s complement nikalein (11001011), uske baad rightmost bit me +1 karein. 11001011 + 1 = 11001100.'
    },
    {
      id: 9,
      topic: 'arithmetic-operations',
      question: 'Binary addition: 1011 + 1101 ka result kya hoga?',
      options: ['10110', '11000', '10000', '11010'],
      correct: 1,
      explanation: 'Sahi answer 11000 hai. 1011 (11) aur 1101 (13). 11+13 = 24. 24 ka binary 11000 hota hai.'
    },
    {
      id: 10,
      topic: 'arithmetic-operations',
      question: 'Binary arithmetic mein \'Overflow\' condition kab hoti hai?',
      options: ['Jab same sign wale numbers add hon aur result opposite sign ka aaye', 'Jab opposite sign wale numbers add hon', 'Jab result zero aa jaye', 'Jab carry aati hai tab humesha overflow hota hai'],
      correct: 0,
      explanation: 'Sahi answer Option A hai. Overflow sirf tab hota hai jab aap do positive ko add karein aur answer negative aaye, ya do negative ko add karein aur answer positive aaye. Carry aana aur Overflow hona alag baatein hain.'
    },
    {
      id: 11,
      topic: 'arithmetic-operations',
      question: '10000 mein se 00001 ko subtract karne par binary mein kya bachega?',
      options: ['01111', '11111', '01110', '00000'],
      correct: 0,
      explanation: 'Sahi answer 01111 hai. Jaise decimal me 10000 - 1 = 9999 hota hai, wese binary me 10000 (16) - 1 = 15 (01111) hota hai.'
    },
    {
      id: 12,
      topic: 'arithmetic-operations',
      question: 'Computers mein negative numbers ko store karne ke liye sabse zyada 2\'s complement ka use kyun hota hai?',
      options: ['Kyunki isme Zero (0) ka single unique representation hota hai', 'Kyunki yeh kam memory space leta hai', 'Kyunki isme addition aur subtraction alag-alag circuit se hote hain', 'Kyunki yeh human readable hai'],
      correct: 0,
      explanation: 'Sahi answer Option A hai. 1\'s complement mein +0 aur -0 alag-alag hote hain, jabki 2\'s complement mein Zero ka ek hi binary code hota hai (00000000), jisse arithmetic logic asaan ho jata hai.'
    },
    {
      id: 13,
      topic: 'arithmetic-operations',
      question: 'Kisi binary number ko Left shift (ek position baayin or khiskana) karne ka mathermatical matlab kya hota hai?',
      options: ['Dividing by 2', 'Multiplying by 2', 'Adding 2', 'Subtracting 2'],
      correct: 1,
      explanation: 'Sahi answer Multiplying by 2 hai. Left shift hamesha number ko 2 se multiply karta hai (e.g. 0101 (5) left shift hoke 1010 (10) banta hai). Right shift hamesha 2 se divide karta hai.'
    },
    {
      id: 14,
      topic: 'arithmetic-operations',
      question: 'Agar 2\'s complement addition ke end mein Most Significant Bit (MSB) par carry 1 generate hoti hai, toh hum kya karte hain?',
      options: ['Carry ko discard/ignore kar dete hain', 'Carry ko wapas LSB mein add karte hain (end-around carry)', 'Number overflow bata dete hain', 'Result negative maan lete hain'],
      correct: 0,
      explanation: 'Sahi answer Carry discard hai. 2\'s complement method me jo aakhri end carry aati hai use simply chhod (discard) diya jata hai. Wapas add karna 1\'s complement method me hota hai.'
    },
    {
      id: 15,
      topic: 'computer-languages',
      question: 'Wo kaunsa translator hai jo High-level language ke code ko Line-by-Line padhta hai aur execute karta hai?',
      options: ['Compiler', 'Assembler', 'Interpreter', 'Linker'],
      correct: 2,
      explanation: 'Sahi answer Interpreter hai. Interpreter ek time me ek statement translate karta hai aur turant execute karta hai. Compiler poore code ko ek saath padh kar object code banata hai.'
    },
    {
      id: 16,
      topic: 'computer-languages',
      question: 'Assembly language kis chiz ka upyog karti hai?',
      options: ['Binary codes (0s and 1s)', 'Mnemonics (English words like ADD, SUB)', 'SQL queries', 'Tags and Elements'],
      correct: 1,
      explanation: 'Sahi answer Mnemonics hai. Assembly language machine codes ko yaad rakhne mein aasaan banane ke liye chhote alphabetic codes ka use karti hai jinhe mnemonics kaha jata hai.'
    },
    {
      id: 17,
      topic: 'computer-languages',
      question: 'Language generation jo iss baat par focus karti hai ki "kya result chahiye (what to do)", na ki is par ki "use kaise laana hai (how to do)", wo kounsi hai?',
      options: ['1st Generation', '2nd Generation', '3rd Generation', '4th Generation'],
      correct: 3,
      explanation: 'Sahi answer 4th Generation (4GL) hai. SQL (Structured Query Language) ek 4GL hai jisme aap sirf ye likhte hain ki kya data chahiye, algorithm database engine khud tay karta hai.'
    },
    {
      id: 18,
      topic: 'computer-languages',
      question: 'Kounsi programming language machine independent nahi hoti hai?',
      options: ['C++', 'Machine Language', 'Java', 'Python'],
      correct: 1,
      explanation: 'Sahi answer Machine Language hai. Machine language (aur Assembly language) processor ke hardware architecture (registers) par direct based hoti hain, isliye ye Machine-Dependent hoti hain. Baki sab high-level languages machine independent hoti hain.'
    },
    {
      id: 19,
      topic: 'computer-languages',
      question: 'Assembler ka mukhy karya kya hai?',
      options: ['High-level language ko Machine language me badalna', 'Machine language ko High-level me badalna', 'Assembly language ko Machine language me badalna', 'Program execution ko fast karna'],
      correct: 2,
      explanation: 'Sahi answer Assembly language ko Machine language me badalna hai. CPU sirf binary samajhta hai, isliye Assembly code ko binary (machine) code me translate karne ke liye system software (Assembler) ka use hota hai.'
    },
    {
      id: 20,
      topic: 'computer-languages',
      question: 'PROLOG (Programming in Logic) aur LISP kis generation ki languages maani jati hain?',
      options: ['2nd Generation', '3rd Generation', '4th Generation', '5th Generation'],
      correct: 3,
      explanation: 'Sahi answer 5th Generation (5GL) hai. Ye languages Artificial Intelligence (AI), expert systems, aur logic programming ke liye use hoti hain. Inme rules aur facts define kiye jate hain.'
    },
    {
      id: 21,
      topic: 'computer-languages',
      question: 'Inme se kiska execution time (program run hone ka samay) aam taur par sabse kam hota hai, agar ek baar code translate ho chuka ho?',
      options: ['Interpreted languages (e.g. Python)', 'Compiled languages (e.g. C++)', 'Bash scripts', 'HTML'],
      correct: 1,
      explanation: 'Sahi answer Compiled languages hai. Compiler poore code ko pehle hi Machine code (.exe/.bin) mein badal deta hai jisse execution directly hardware par hota hai, isliye ye interpreters se bahut fast hoti hain.'
    },
    {
      id: 22,
      topic: 'computer-languages',
      question: 'Code me likhi errors ya bugs nikalne ke liye konsa translator zyada helpful hota hai?',
      options: ['Compiler', 'Assembler', 'Interpreter', 'Linker'],
      correct: 2,
      explanation: 'Sahi answer Interpreter hai. Kyunki yeh line-by-line execute karta hai aur jahan pehli error aati hai wahi ruk jata hai, isse programmer turant us line ko theek kar sakta hai.'
    },
    {
      id: 23,
      topic: 'io-devices',
      question: 'Banks me daily lakhon cheques ko fast process karne ke liye inme se kiska use hota hai?',
      options: ['OCR (Optical Character Recognition)', 'OMR (Optical Mark Reader)', 'MICR (Magnetic Ink Character Recognition)', 'Barcode Scanner'],
      correct: 2,
      explanation: 'Sahi answer MICR hai. Cheque ke neeche account details ek special ink (jisne iron oxide hota hai) se likhi jati hain, jo normal scanners se fake copy nahi ho sakti. MICR inhi magnetic characters ko read karta hai.'
    },
    {
      id: 24,
      topic: 'io-devices',
      question: 'Dot Matrix Printer kis category me aata hai aur uski technology kya hoti hai?',
      options: ['Impact Printer - Pins ink ribbon ko strike karti hain', 'Non-Impact Printer - Ink ka spray karta hai', 'Impact Printer - Laser use karta hai', 'Non-Impact Printer - Heat use karta hai'],
      correct: 0,
      explanation: 'Sahi answer Option A hai. Dot matrix ek impact printer hai jisme ek print head me metal pins hoti hain. Ye pins ink-soaked ribbon par physical zor se hit karti hain jisse paper par dot chap jata hai.'
    },
    {
      id: 25,
      topic: 'io-devices',
      question: 'Purane aur bade size wale Monitors me konsi display technology use hoti thi?',
      options: ['LCD', 'LED', 'OLED', 'CRT (Cathode Ray Tube)'],
      correct: 3,
      explanation: 'Sahi answer CRT hai. CRT monitors ek badi glass tube hoti thi jisme peeche se electron gun electron beam fire karke aage screen par coating ko chamkati thi. Ye heavy aur zyada power lene wale hote the.'
    },
    {
      id: 26,
      topic: 'io-devices',
      question: 'Laser Printer ke bare mein inme se kya SAHI hai?',
      options: ['Ye ek Impact printer hai', 'Ye ribbon par strike karke print karta hai', 'Ye photosensitive drum aur toner (dry ink) ka use karta hai', 'Ye liquid ink ka paper par spray karta hai'],
      correct: 2,
      explanation: 'Sahi answer Option C hai. Laser printer ek non-impact printer hai jo static electricity, laser beam se drum par image banane aur dry powder (toner) ko paper par bake (heat) karne ka kaam karta hai. Ink spray ka kaam Inkjet printers karte hain.'
    },
    {
      id: 27,
      topic: 'io-devices',
      question: 'Competitive exams ki OMR sheet ko evaluate karte samay scanner exactly kya detect karta hai?',
      options: ['Paper ki thickness', 'Magnetic field', 'Light ki reflection ko (dark mark light kam reflect karta hai)', 'Ink ka temperature'],
      correct: 2,
      explanation: 'Sahi answer Light ki reflection hai. OMR scanner paper par ek light source dalta hai. Jahan user ne dark mark kiya hota hai, wahan se light kam wapas aati hai, aur scanner is tarah correct option identify kar leta hai.'
    },
    {
      id: 28,
      topic: 'io-devices',
      question: 'Image format me likhe hue ya print kiye text ko scan karke ek editable Word document me convert karne ke liye konsi technology kaam aati hai?',
      options: ['MICR', 'OMR', 'OCR', 'Barcode'],
      correct: 2,
      explanation: 'Sahi answer OCR (Optical Character Recognition) hai. Ye pixels ki shape aur pattern ko analyze karke letters/words pehchanta hai aur ASCII codes me convert kar deta hai, jise baad me edit kiya ja sakta hai.'
    },
    {
      id: 29,
      topic: 'io-devices',
      question: 'LCD aur LED Monitors me primary technical antar kya hota hai?',
      options: ['LCD color nahi dikhata, LED dikhata hai', 'Dono ka backlight alag hota hai (CCFL vs LED tubes)', 'LCD impact technology hai, LED non-impact', 'Dono ekdum same hote hain'],
      correct: 1,
      explanation: 'Sahi answer Option B hai. Ek standard LCD monitor backlight ke liye Fluorescent tubes (CCFL) ka use karta hai, jabki LED monitor us background lighting ke liye Light Emitting Diodes ka use karta hai, jisse woh slim aur power efficient ban jata hai.'
    },
    {
      id: 30,
      topic: 'io-devices',
      question: 'Keyboard kis theory par kaam karta hai?',
      options: ['Matrix circuit aur switch controller', 'Magnetic induction', 'Optical reflection', 'Cathode rays'],
      correct: 0,
      explanation: 'Sahi answer Matrix circuit hai. Keyboard ke andar wires ka ek grid (matrix) hota hai. Key dabane par circuit close hota hai aur microcontroller row/column pehchan kar PC ko signal bhejta hai.'
    }
  ]
};

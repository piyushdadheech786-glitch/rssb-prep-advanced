window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['security'] = {
  id: 'security',
  name: 'Network Security',
  icon: '🔒',
  description: 'Detailed study of Cryptography, Symmetric/Asymmetric encryption, Firewalls, Email Security, Threats, and Ethical Hacking.',
  topics: [
    {
      id: 'crypto-basics',
      name: 'Basics of Cryptography',
      theory: `
        <h3>Introduction to Cryptography</h3>
        <p>Cryptography ek aisi technique hai jisse hum information ko secure banate hain. Iske do main pillars hain: <b>Confidentiality</b> (koi padh na sake) aur <b>Integrity</b> (koi badal na sake). Plaintext ko Ciphertext mein convert karna <b>Encryption</b> kehlata hai, aur reverse process ko <b>Decryption</b> kehlata hai.</p>
        
        <h4>Mathematical Foundations</h4>
        <p>Modern cryptography completely abstract algebra aur number theory par based hai. Chaliye dekhte hain:</p>
        <ul>
          <li><b>Group:</b> Ek mathematical set jo 4 properties follow kare: Closure, Associativity, Identity, aur Inverse. Agar commutative ho toh <b>Abelian Group</b>.</li>
          <li><b>Ring:</b> Do operations (+ aur *) support karta hai. Addition ke liye Abelian group, multiplication ke liye associative, aur distributive property.</li>
          <li><b>Field:</b> A ring jahan har non-zero element ka multiplicative inverse exist karta hai (yaani division allow hota hai). Cryptography mein <b>Galois Fields (GF)</b> ya Finite Fields ka use hota hai, especially <code>GF(2^n)</code> kyunki computers binary me kaam karte hain.</li>
        </ul>

        <h4>Number Theory & Theorems</h4>
        <p>Prime numbers cryptography ka dil hain. A prime number is divisible only by 1 and itself.</p>
        
        <p><b>Euler's Totient Function &phi;(n):</b> Yeh function batata hai ki integer 'n' se chhote kitne numbers hain jo 'n' ke co-prime hain (yaani unka GCD 1 hai).</p>
        <div class="formula-box">
          <div class="formula-title">📐 Euler's Totient Formula</div>
          Prime 'p' ke liye: &phi;(p) = p - 1<br>
          Do primes 'p' aur 'q' ke liye: &phi;(p*q) = (p - 1)(q - 1)
        </div>

        <p><b>Fermat's Little Theorem:</b> Agar 'p' prime hai aur 'a' ek integer hai jahan a aur p co-prime hain:<br>
        <code>a^(p-1) &equiv; 1 (mod p)</code></p>
        
        <p><b>Euler's Theorem:</b> Ye Fermat ka generalization hai. Agar 'a' aur 'n' co-prime hain:<br>
        <code>a^&phi;(n) &equiv; 1 (mod n)</code></p>

        <h4>Primality Testing</h4>
        <p>RSA jaise algorithms me huge prime numbers (like 1024-bit) chahiye. Inko dhoondhne ke liye random numbers generate karke primality test karte hain.</p>
        <table class="comparison-table">
          <tr><th>Test</th><th>Type</th><th>Accuracy</th></tr>
          <tr><td>Fermat Test</td><td>Probabilistic</td><td>Weak (Fails on Carmichael numbers)</td></tr>
          <tr><td>Miller-Rabin</td><td>Probabilistic</td><td>Very Strong (Industry standard)</td></tr>
        </table>
        <p>Miller-Rabin test check karta hai ki number prime hone ki kitni probability hai. Ye repeated iterations run karke certainty badhata hai.</p>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Exam me puchte hain ki Miller-Rabin test deterministic hai ya probabilistic. Yaad rakhein ki practically ye ek <b>Probabilistic</b> test hai!
        </div>
      `
    },
    {
      id: 'symmetric-encryption',
      name: 'Symmetric Encryption',
      theory: `
        <h3>Symmetric Key Cryptography</h3>
        <p>Isme sender aur receiver dono same key (ek hi chabhi) use karte hain encryption aur decryption dono ke liye. Iska sabse bada challenge hai <b>Key Distribution</b> (key securely doosre person tak kaise pahuchaye).</p>

        <h4>Block Cipher vs Stream Cipher</h4>
        <table class="comparison-table">
          <tr><th>Feature</th><th>Block Cipher</th><th>Stream Cipher</th></tr>
          <tr><td>Processing</td><td>Blocks of bits (e.g., 64-bit) at a time</td><td>Bit by bit or byte by byte</td></tr>
          <tr><td>Speed</td><td>Slower</td><td>Faster</td></tr>
          <tr><td>Examples</td><td>DES, AES, IDEA</td><td>RC4</td></tr>
        </table>

        <h4>DES (Data Encryption Standard)</h4>
        <p>DES ek symmetric-key block cipher hai jise 1970s me IBM ne banaya tha. Isme <b>Feistel Network</b> structure use hota hai.</p>
        <ul>
          <li><b>Block Size:</b> 64 bits.</li>
          <li><b>Key Size:</b> Originally 64 bits thi, but har 8th bit parity ke liye use hoti hai, toh <b>Effective Key Size 56 bits</b> hai.</li>
          <li><b>Rounds:</b> 16 rounds of processing.</li>
        </ul>
        <p>DES ab secure nahi maana jata kyunki 56-bit key easily brute-force ho sakti hai. Isliye 3DES (Triple DES) aur fir AES ko introduce kiya gaya.</p>

        <h4>AES (Advanced Encryption Standard)</h4>
        <p>NIST ne 2001 me AES ko naya standard banaya. Iska original naam <b>Rijndael</b> algorithm hai. Ye Feistel network par based <b>nahi</b> hai, balki Substitution-Permutation Network (SPN) par based hai.</p>
        <ul>
          <li><b>Block Size:</b> Fixed 128 bits.</li>
          <li><b>Key Sizes & Rounds:</b>
            <ul>
              <li>128-bit key &rarr; 10 rounds</li>
              <li>192-bit key &rarr; 12 rounds</li>
              <li>256-bit key &rarr; 14 rounds</li>
            </ul>
          </li>
        </ul>
        <p>Har round mein 4 steps hote hain (except last round jisme MixColumns nahi hota):</p>
        <ol>
          <li><b>SubBytes:</b> Non-linear substitution step (S-Box use hota hai).</li>
          <li><b>ShiftRows:</b> Rows ko cyclically shift kiya jata hai.</li>
          <li><b>MixColumns:</b> Columns ko mix karne ke liye matrix multiplication in GF(2^8).</li>
          <li><b>AddRoundKey:</b> Round key ke sath XOR operation.</li>
        </ol>

        <h4>IDEA (International Data Encryption Algorithm)</h4>
        <p>IDEA ko DES ke replacement ke roop me design kiya gaya tha aur ye PGP (Pretty Good Privacy) me widely use hua.</p>
        <ul>
          <li><b>Block Size:</b> 64 bits.</li>
          <li><b>Key Size:</b> 128 bits.</li>
          <li><b>Rounds:</b> 8 full rounds + 1 half round.</li>
        </ul>
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          IDEA mainly 3 operations use karta hai: XOR, Addition modulo 2^16, aur Multiplication modulo (2^16 + 1). Isme S-boxes nahi hote!
        </div>
      `
    },
    {
      id: 'asymmetric-encryption',
      name: 'Asymmetric Encryption',
      theory: `
        <h3>Asymmetric (Public Key) Cryptography</h3>
        <p>Symmetric encryption ki key distribution problem ko solve karne ke liye Asymmetric cryptography aayi. Isme har user ke paas <b>do keys ka pair</b> hota hai:</p>
        <ul>
          <li><b>Public Key:</b> Sabke sath share ki jaati hai. (Encryption ke liye use hoti hai agar confidentiality chahiye).</li>
          <li><b>Private Key:</b> Secret rakhi jaati hai. (Decryption ke liye use hoti hai).</li>
        </ul>

        <h4>RSA Algorithm</h4>
        <p>RSA (Rivest-Shamir-Adleman) sabse famous public key algorithm hai. Ye <b>Factoring large prime numbers</b> ke mathematical difficulty par based hai.</p>
        <div class="formula-box">
          <div class="formula-title">⚙️ RSA Key Generation Steps</div>
          <ol>
            <li>Select two large prime numbers, <b>p</b> and <b>q</b>.</li>
            <li>Calculate <b>n = p &times; q</b>.</li>
            <li>Calculate Euler's Totient, <b>&phi;(n) = (p - 1)(q - 1)</b>.</li>
            <li>Choose an integer <b>e</b> such that 1 &lt; e &lt; &phi;(n) aur <i>e</i> aur <i>&phi;(n)</i> co-prime hain.</li>
            <li>Calculate <b>d</b> such that <b>(e &times; d) mod &phi;(n) = 1</b> (d is the multiplicative inverse of e).</li>
          </ol>
          <b>Public Key:</b> {e, n}<br>
          <b>Private Key:</b> {d, n}
        </div>
        <p><b>Encryption:</b> Ciphertext <code>C = M^e mod n</code><br>
        <b>Decryption:</b> Plaintext <code>M = C^d mod n</code></p>
        
        <h4>Example (Solved): RSA</h4>
        <p>Let p=3, q=11. <br>
        1. n = 33 <br>
        2. &phi;(n) = 2 &times; 10 = 20 <br>
        3. Choose e=3 (co-prime to 20). <br>
        4. Find d: (3 &times; d) mod 20 = 1. So, d=7. <br>
        Public Key=(3, 33), Private Key=(7, 33). <br>
        If Message M=5. Encryption C = 5^3 mod 33 = 125 mod 33 = 26.</p>

        <h4>Diffie-Hellman Key Exchange</h4>
        <p>Diffie-Hellman data ko encrypt/decrypt nahi karta. Ye sirf securely <b>Symmetric Key share</b> karne ke kaam aata hai over an insecure channel. Ye <b>Discrete Logarithm Problem</b> ki difficulty par based hai.</p>
        <p><b>Working:</b> Alice aur Bob public numbers agree karte hain: prime modulus <i>p</i> aur generator <i>g</i>. <br>
        Alice private number <i>a</i> leti hai, compute karti hai <code>A = g^a mod p</code>.<br>
        Bob private number <i>b</i> leta hai, compute karta hai <code>B = g^b mod p</code>.<br>
        Dono A aur B exchange karte hain. <br>
        Alice secret key nikaalti hai <code>K = B^a mod p</code>.<br>
        Bob secret key nikaalta hai <code>K = A^b mod p</code>. Dono ke paas same K aa jata hai!</p>
        
        <h4>Example (Solved): Diffie-Hellman</h4>
        <p>Let prime p=23 and generator g=5.<br>
        Alice chooses a=6. Computes A = 5^6 mod 23 = 8.<br>
        Bob chooses b=15. Computes B = 5^15 mod 23 = 19.<br>
        Alice's secret key: K = 19^6 mod 23 = 2.<br>
        Bob's secret key: K = 8^15 mod 23 = 2.<br>
        Dono ka secret key same aa gaya (2)!</p>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Diffie-Hellman me sabse badi weakness hai <b>Man-in-the-Middle (MITM) Attack</b>, kyunki isme party authentication inbuilt nahi hota.
        </div>
      `
    },
    {
      id: 'key-mgmt-auth',
      name: 'Key Management & Authentication',
      theory: `
        <h3>Public Key Infrastructure (PKI) & Certificates</h3>
        <p>Jab aap kisi ki Public Key download karte ho, toh ye kaise pata chalega ki wo real person ki hi hai aur kisi hacker ki nahi? Iske liye <b>PKI</b> aur <b>Digital Certificates</b> ka use hota hai.</p>
        <ul>
          <li><b>CA (Certificate Authority):</b> Ek trusted third party (jaise VeriSign, Let's Encrypt) jo identity verify karke digital certificate issue karti hai.</li>
          <li><b>Digital Certificate:</b> Ek electronic document jo user ki identity ko uski Public Key ke sath bind karta hai. Isme X.509 standard use hota hai.</li>
          <li><b>X.509:</b> Digital certificates ka standard format. Isme Version, Serial Number, Signature Algorithm, Issuer Name, Validity period, aur Subject's Public Key hoti hai.</li>
        </ul>

        <h4>Digital Signatures</h4>
        <p>Real life me hum documents par sign karte hain authentication (pehchaan) aur non-repudiation (mukar na sakna) ke liye. Digital world me ye kaam <b>Digital Signatures</b> karte hain.</p>
        <p><b>Process:</b></p>
        <ol>
          <li>Sender message ka hash (digest) calculate karta hai.</li>
          <li>Sender us hash ko apni <b>Private Key</b> se encrypt karta hai (Ye hi Digital Signature hai).</li>
          <li>Receiver sender ki <b>Public Key</b> se signature ko decrypt karta hai aur apna calculate kiya hua hash compare karta hai.</li>
        </ol>
        <p>Isse 3 cheezein ensure hoti hain: Authentication, Data Integrity, aur Non-repudiation.</p>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Confidentiality ke liye: Receiver ki Public Key se encrypt karo.<br>
          Authentication/Signature ke liye: Sender ki Private Key se encrypt karo.
        </div>

        <h4>Message Authentication Code (MAC)</h4>
        <p>MAC ek small fixed-size block of data hai jo message ke sath bheja jata hai integrity check karne ke liye. Digital signature asymmetric key use karta hai, jabki <b>MAC symmetric key use karta hai</b>.</p>
        <ul>
          <li>Sender message aur ek shared Secret Key ko algorithm me daalta hai, jo ek MAC value generate karta hai.</li>
          <li>Ye MAC message ke sath append karke bheja jata hai.</li>
          <li>Receiver bhi same Key se MAC generate karta hai aur match karta hai.</li>
        </ul>
        <p><b>HMAC (Hash-based MAC):</b> Ye cryptographic hash functions (jaise MD5, SHA) aur secret key ka combination use karta hai. Bahut fast aur secure hota hai.</p>
      `
    },
    {
      id: 'hashing-algorithms',
      name: 'Hashing Algorithms',
      theory: `
        <h3>Cryptographic Hash Functions</h3>
        <p>Hash function ek aisi mathematical algorithm hai jo kisi bhi arbitrary size data ko input leti hai aur fixed-size output (Hash value, digest, ya fingerprint) deti hai.</p>
        
        <h4>Properties of an Ideal Hash Function:</h4>
        <ol>
          <li><b>Pre-image Resistance (One-way):</b> Hash value se original message reverse nikaalna impossible hona chahiye.</li>
          <li><b>Second Pre-image Resistance:</b> Agar ek message M1 ka hash H1 hai, toh koi doosra message M2 find karna (jiska hash bhi H1 ho) computationally impossible hona chahiye.</li>
          <li><b>Collision Resistance:</b> Koi bhi do alag messages ka same hash nahi aana chahiye (H(M1) = H(M2) nahi hona chahiye).</li>
          <li><b>Avalanche Effect:</b> Agar input message me ek single bit bhi change ho, toh output hash completely change ho jana chahiye.</li>
        </ol>

        <h4>MD5 (Message Digest Algorithm 5)</h4>
        <p>Ronald Rivest ne 1991 me MD5 design kiya tha. Ye bahut popular tha par ab secure nahi maana jata kyunki isme collisions easily find ho sakte hain.</p>
        <ul>
          <li><b>Output Hash Size:</b> 128 bits (16 bytes).</li>
          <li><b>Processing Block Size:</b> 512 bits.</li>
          <li><b>Rounds:</b> 4 rounds of 16 operations each (total 64 operations).</li>
        </ul>
        
        <h4>SHA (Secure Hash Algorithm) Family</h4>
        <p>SHA algorithms ko NSA (National Security Agency, USA) ne design kiya hai aur NIST ne publish kiya hai.</p>
        <table class="comparison-table">
          <tr><th>Algorithm</th><th>Hash Size</th><th>Block Size</th><th>Status</th></tr>
          <tr><td>SHA-1</td><td>160 bits</td><td>512 bits</td><td>Broken (Not recommended)</td></tr>
          <tr><td>SHA-224 (SHA-2)</td><td>224 bits</td><td>512 bits</td><td>Secure</td></tr>
          <tr><td>SHA-256 (SHA-2)</td><td>256 bits</td><td>512 bits</td><td>Highly Secure (Used in Bitcoin)</td></tr>
          <tr><td>SHA-512 (SHA-2)</td><td>512 bits</td><td>1024 bits</td><td>Highly Secure</td></tr>
        </table>
        <p><b>SHA-3:</b> Ye latest standard hai, jo Keccak algorithm par based hai. Ye sponge construction use karta hai jo SHA-1 aur SHA-2 se completely alag hai.</p>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Exam me MD5 aur SHA-1 ke bit sizes directly pooche jate hain. MD5 = 128 bits, SHA-1 = 160 bits. Yaad rakhna!
        </div>
      `
    },
    {
      id: 'email-security',
      name: 'Email Security',
      theory: `
        <h3>Email Security Standards</h3>
        <p>Standard email (SMTP) plain text me travel karta hai, jise koi bhi intercept aur read kar sakta hai. Email ko secure karne ke liye do main protocols use hote hain: PGP aur S/MIME.</p>

        <h4>PGP (Pretty Good Privacy)</h4>
        <p>Phil Zimmermann ne PGP banaya tha. Ye email security ke liye defacto standard hai. PGP ek hybrid cryptosystem hai (symmetric + asymmetric dono use karta hai).</p>
        <p><b>PGP ki Working:</b></p>
        <ol>
          <li><b>Compression:</b> Sabse pehle message ko ZIP algorithm se compress kiya jata hai (storage bachane aur crypto-analysis se bachne ke liye).</li>
          <li><b>Session Key Generation:</b> Ek one-time random symmetric session key banayi jati hai.</li>
          <li><b>Encryption:</b> Message ko session key (IDEA, CAST-128 ya 3DES) se encrypt kiya jata hai. Ye fast hota hai.</li>
          <li><b>Key Encryption:</b> Fir us session key ko receiver ki Public Key (RSA ya ElGamal) se encrypt kar diya jata hai.</li>
          <li><b>Radix-64 Conversion:</b> Kyunki email systems sirf ASCII characters support karte hain, encrypted binary data ko Radix-64 (Base64) format me convert kiya jata hai.</li>
        </ol>
        
        <p><b>Web of Trust:</b> PGP me CA (Certificate Authority) hierarchy use nahi hoti. Iski jagah "Web of Trust" model use hota hai jahan users ek doosre ki keys ko sign karke trust establish karte hain.</p>

        <h4>S/MIME (Secure / Multipurpose Internet Mail Extensions)</h4>
        <p>S/MIME MIME standard ka secure version hai. Ye email me digital signatures aur encryption add karta hai.</p>
        <ul>
          <li><b>Certificates:</b> S/MIME strict X.509 certificates use karta hai. Isme PKI (Public Key Infrastructure) required hoti hai, jabki PGP me Web of Trust hota hai.</li>
          <li><b>Algorithms:</b> Ye typically AES aur RSA ka combination use karta hai.</li>
          <li><b>Corporate Use:</b> S/MIME mostly enterprise aur corporate environments me use hota hai jahan centralized certificate management possible hota hai.</li>
        </ul>
        <table class="comparison-table">
          <tr><th>Feature</th><th>PGP</th><th>S/MIME</th></tr>
          <tr><td>Trust Model</td><td>Web of Trust (Decentralized)</td><td>X.509 CA (Centralized)</td></tr>
          <tr><td>Data Format</td><td>Proprietary but open standard</td><td>Industry standard MIME</td></tr>
          <tr><td>Primary Users</td><td>Individuals, Open Source</td><td>Corporates, Enterprises</td></tr>
        </table>
      `
    },
    {
      id: 'threats-firewalls',
      name: 'Threats, LAN/WAN Security & Firewalls',
      theory: `
        <h3>Cyber Threats & Malware</h3>
        <p>Network ko nuksaan pahunchane wale software aur techniques ko Malware aur Threats kehte hain.</p>
        <ul>
          <li><b>Virus:</b> Ek malicious code jo kisi host file (jaise .exe) ke sath attach hota hai. Jab file run hoti hai, tab virus failta hai. Ye user action require karta hai.</li>
          <li><b>Worm:</b> Ye stand-alone program hota hai. Ise host file ya user action ki zaroorat nahi hoti. Ye network vulnerability ka faayda uthake apne aap replicate aur spread hota hai.</li>
          <li><b>Trojan Horse:</b> Ye apne aap ko useful software hone ka dikhawa karta hai (like a free game), par backend me malicious activity karta hai (jaise backdoor open karna). Ye replicate nahi karta.</li>
          <li><b>DoS (Denial of Service):</b> Attacker server par itni fake requests bhejta hai ki server crash ho jata hai aur legitimate users ko service nahi milti.</li>
          <li><b>DDoS (Distributed DoS):</b> Jab DoS attack ek single machine ke bajaye hazaron infected machines (Botnet) se ek sath kiya jaye, toh use DDoS kehte hain.</li>
        </ul>

        <h4>Firewalls</h4>
        <p>Firewall ek hardware ya software security system hai jo incoming aur outgoing network traffic ko monitor aur control karta hai based on predetermined security rules.</p>
        <p><b>Types of Firewalls:</b></p>
        <ol>
          <li><b>Packet Filtering Firewall (Stateless):</b> Ye Network Layer (Layer 3) par kaam karta hai. Har packet ko independently check karta hai (Source/Dest IP, Port numbers). Ye TCP connection ki state yaad nahi rakhta.</li>
          <li><b>Stateful Inspection Firewall:</b> Ye Transport Layer (Layer 4) par kaam karta hai. Ye packets ke alawa active connections (state table) ka bhi record rakhta hai ki packet kis connection ka hissa hai.</li>
          <li><b>Application Proxy Firewall (Gateway):</b> Ye Application Layer (Layer 7) par kaam karta hai. Ye packet ke andar ka payload bhi check kar sakta hai (jaise HTTP me malicious payload). Ye sabse secure but slow hota hai.</li>
        </ol>
        
        <div class="tip-box">
          <div class="tip-title">💡 DMZ (Demilitarized Zone)</div>
          Ye ek physical ya logical sub-network hai jo organization ke external-facing services (jaise Web Server, DNS server) ko internal network se alag rakhta hai, taaki agar web server hack ho, toh internal network safe rahe.
        </div>
      `
    },
    {
      id: 'ethical-hacking',
      name: 'Ethical Hacking Basics',
      theory: `
        <h3>Introduction to Ethical Hacking</h3>
        <p>Ethical Hacking ka matlab hai kisi system me vulnerabilities (kamzoriyan) dhoondhna using the same tools and techniques as a malicious hacker, par <b>permission ke sath</b> taaki system ko secure kiya ja sake. Ethical hacker ko White Hat hacker bhi kehte hain.</p>

        <h4>Phases of Ethical Hacking</h4>
        <ol>
          <li>Reconnaissance (Footprinting)</li>
          <li>Scanning & Enumeration</li>
          <li>Gaining Access (Exploitation)</li>
          <li>Maintaining Access</li>
          <li>Clearing Tracks</li>
        </ol>

        <h4>1. Footprinting (Reconnaissance)</h4>
        <p>Ye information gathering ka first step hai. Target ke baare me jitni ho sake utni details collect karna (IP range, domain names, employee details).</p>
        <ul>
          <li><b>Passive Footprinting:</b> Attacker target ke servers ko directly touch nahi karta. OSINT (Open Source Intelligence), WHOIS lookup, search engines ka use karta hai.</li>
          <li><b>Active Footprinting:</b> Attacker target ke network ke direct contact me aata hai, jaise pinging, social engineering. Isme log detect hone ka risk hota hai.</li>
        </ul>

        <h4>2. Scanning</h4>
        <p>Footprinting se mili information ko use karke live systems, open ports, aur OS versions dhoondhna.</p>
        <ul>
          <li><b>Ping Sweep:</b> Network me live hosts identify karne ke liye multiple IPs par ICMP echo requests bhejna.</li>
          <li><b>Port Scanning:</b> Nmap jaise tools use karke open ports dhoondhna. Open ports ka matlab hai ki wahan koi service chal rahi hai jispe attack kiya ja sakta hai.</li>
          <li><b>Stealth Scan (Half-open Scan):</b> Nmap me SYN scan. Isme attacker TCP 3-way handshake complete nahi karta, taaki log firewall me entry na aaye.</li>
        </ul>

        <h4>3. Enumeration</h4>
        <p>Ye scanning ke baad aata hai. Isme attacker target system se directly connect karke detailed information nikalta hai. Jaise:</p>
        <ul>
          <li>Usernames aur User groups.</li>
          <li>Network shares aur routing tables.</li>
          <li>SNMP data aur NetBIOS names.</li>
        </ul>
        <p>Enumeration sabse intrusive phase hai (before actual hacking) aur isme target ke alarm bajne ke pure chances hote hain.</p>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'crypto-basics',
      question: 'Which of the following algebraic structures consists of a set with two operations (addition and multiplication) where it forms an Abelian group under addition and is closed under associative multiplication?',
      options: ['Group', 'Ring', 'Field', 'Lattice'],
      correct: 1,
      explanation: 'Ek Ring mein do operations hote hain, aur ye addition ke under Abelian group banati hai. Field mein har non-zero element ka multiplicative inverse bhi hona chahiye, jo Ring me zaruri nahi hai.'
    },
    {
      id: 2,
      topic: 'crypto-basics',
      question: 'In the context of cryptography, what does Galois Field GF(p^n) represent?',
      options: ['An infinite field of prime numbers', 'A finite field with exactly p^n elements', 'A ring with p^n elements', 'A group with p addition operations'],
      correct: 1,
      explanation: 'Galois Field ek finite field hoti hai jisme exactly p^n elements hote hain, jahan p ek prime number hai aur n ek positive integer.'
    },
    {
      id: 3,
      topic: 'crypto-basics',
      question: 'According to Euler’s Totient function, what is the value of Φ(35)?',
      options: ['34', '24', '35', '12'],
      correct: 1,
      explanation: '35 can be factored into two prime numbers: 5 and 7. Euler’s totient for p*q = (p-1)*(q-1). So, Φ(35) = (5-1)*(7-1) = 4 * 6 = 24.'
    },
    {
      id: 4,
      topic: 'crypto-basics',
      question: 'Which theorem states that for a prime number p and an integer a not divisible by p, a^(p-1) ≡ 1 (mod p)?',
      options: ['Euler’s Theorem', 'Chinese Remainder Theorem', 'Fermat’s Little Theorem', 'Lagrange’s Theorem'],
      correct: 2,
      explanation: 'Ye Fermat’s Little Theorem ki exact statement hai, jo RSA aur primality testing me base concept hai.'
    },
    {
      id: 5,
      topic: 'crypto-basics',
      question: 'Which of the following is a probabilistic primality test widely used in practice to generate large primes for cryptography?',
      options: ['Sieve of Eratosthenes', 'Miller-Rabin Test', 'Euclidean Algorithm', 'Extended Euclidean Algorithm'],
      correct: 1,
      explanation: 'Miller-Rabin test ek probabilistic test hai jo large numbers ki primality check karne ke liye practically use hota hai (industry standard).'
    },
    {
      id: 6,
      topic: 'symmetric-encryption',
      question: 'In the Data Encryption Standard (DES), what is the effective size of the cryptographic key?',
      options: ['64 bits', '128 bits', '56 bits', '256 bits'],
      correct: 2,
      explanation: 'DES ki original key 64 bits ki hoti hai, lekin har 8th bit (total 8 bits) parity check ke liye drop ki jati hai, isliye effective key size 56 bits hota hai.'
    },
    {
      id: 7,
      topic: 'symmetric-encryption',
      question: 'Which mathematical structure does the Advanced Encryption Standard (AES) use for its MixColumns operation?',
      options: ['Galois Field GF(2^8)', 'Euler Totient Ring', 'Prime Field GF(p)', 'Boolean Algebra'],
      correct: 0,
      explanation: 'AES apni saari mathematical calculations finite field arithmetic, specifically Galois Field GF(2^8) mein karta hai.'
    },
    {
      id: 8,
      topic: 'symmetric-encryption',
      question: 'Which of the following operations is NOT performed in a standard round of the AES algorithm?',
      options: ['SubBytes', 'ShiftRows', 'Feistel Permutation', 'MixColumns'],
      correct: 2,
      explanation: 'AES Substitution-Permutation Network (SPN) use karta hai, na ki Feistel structure. Feistel Permutation DES me use hota hai.'
    },
    {
      id: 9,
      topic: 'symmetric-encryption',
      question: 'How many rounds of processing does the IDEA (International Data Encryption Algorithm) use?',
      options: ['16 rounds', '10 rounds', '8 full rounds and 1 half round', '14 rounds'],
      correct: 2,
      explanation: 'IDEA encryption algorithm 8 full rounds aur 1 additional half round (output transformation) ka structure use karta hai.'
    },
    {
      id: 10,
      topic: 'symmetric-encryption',
      question: 'Which characteristic differentiates a block cipher from a stream cipher?',
      options: ['A stream cipher encrypts data block by block.', 'A block cipher relies strictly on prime numbers.', 'A stream cipher encrypts bits or bytes individually.', 'A block cipher uses asymmetric keys.'],
      correct: 2,
      explanation: 'Stream cipher bit-by-bit ya byte-by-byte encrypt karta hai, jabki block cipher ek fixed block of bits (e.g., 64-bit or 128-bit) ko ek sath encrypt karta hai.'
    },
    {
      id: 11,
      topic: 'asymmetric-encryption',
      question: 'In the RSA algorithm, if the prime numbers chosen are p=5 and q=11, what is the value of n and Φ(n)?',
      options: ['n=55, Φ(n)=40', 'n=16, Φ(n)=55', 'n=55, Φ(n)=54', 'n=40, Φ(n)=55'],
      correct: 0,
      explanation: 'n = p*q = 5*11 = 55. Φ(n) = (p-1)*(q-1) = 4 * 10 = 40.'
    },
    {
      id: 12,
      topic: 'asymmetric-encryption',
      question: 'What is the primary mathematical difficulty that ensures the security of the RSA algorithm?',
      options: ['Discrete Logarithm Problem', 'Integer Factorization Problem', 'Elliptic Curve Problem', 'Knapsack Problem'],
      correct: 1,
      explanation: 'RSA ki security is baat par nirbhar karti hai ki do large prime numbers ke product (n) ko wapas uske prime factors (p aur q) me factorize karna computationally infeasible hai.'
    },
    {
      id: 13,
      topic: 'asymmetric-encryption',
      question: 'Which of the following problems is the Diffie-Hellman key exchange mechanism based upon?',
      options: ['Integer Factorization Problem', 'Travelling Salesman Problem', 'Discrete Logarithm Problem', 'Hamiltonian Cycle Problem'],
      correct: 2,
      explanation: 'Diffie-Hellman algorithm Discrete Logarithm Problem (DLP) par based hai, jisme g^a mod p se a ki value nikalna bahut mushkil hota hai.'
    },
    {
      id: 14,
      topic: 'asymmetric-encryption',
      question: 'What is a major vulnerability of the standard Diffie-Hellman key exchange protocol?',
      options: ['It requires large storage space', 'It is susceptible to Man-in-the-Middle (MITM) attacks', 'It can only be used for short messages', 'It uses weak symmetric encryption'],
      correct: 1,
      explanation: 'Standard Diffie-Hellman mein authentication nahi hoti, jiske wajah se attacker beech me Man-in-the-Middle attack kar sakta hai.'
    },
    {
      id: 15,
      topic: 'asymmetric-encryption',
      question: 'In asymmetric key cryptography, if Alice wants to send a confidential message to Bob, which key should she use to encrypt the message?',
      options: ['Alice’s Public Key', 'Alice’s Private Key', 'Bob’s Public Key', 'Bob’s Private Key'],
      correct: 2,
      explanation: 'Confidentiality ke liye message hamesha receiver ki Public Key se encrypt kiya jata hai, taaki sirf receiver (Bob) hi apni Private Key se use decrypt kar sake.'
    },
    {
      id: 16,
      topic: 'key-mgmt-auth',
      question: 'Which standard format is widely used for creating digital certificates in a Public Key Infrastructure (PKI)?',
      options: ['X.500', 'X.25', 'X.509', 'IEEE 802.11'],
      correct: 2,
      explanation: 'X.509 is the internationally recognized standard for digital certificates in PKI systems.'
    },
    {
      id: 17,
      topic: 'key-mgmt-auth',
      question: 'What is the primary purpose of a Digital Signature?',
      options: ['To encrypt the entire message for confidentiality', 'To compress the message for faster transmission', 'To provide authentication, data integrity, and non-repudiation', 'To generate a symmetric session key'],
      correct: 2,
      explanation: 'Digital signature message encrypt nahi karta. Ye sirf yeh prove karta hai ki message kisne bheja (authentication), change nahi hua (integrity), aur sender baad me deny nahi kar sakta (non-repudiation).'
    },
    {
      id: 18,
      topic: 'key-mgmt-auth',
      question: 'How is a Digital Signature created by the sender?',
      options: ['By encrypting the message hash with the sender’s Private Key', 'By encrypting the message hash with the receiver’s Public Key', 'By encrypting the message with a symmetric key', 'By performing an XOR operation on the message and the receiver’s Private Key'],
      correct: 0,
      explanation: 'Sender apni Private Key ka use karke message ke hash (digest) ko encrypt karta hai. Ye encrypted hash hi digital signature hota hai.'
    },
    {
      id: 19,
      topic: 'key-mgmt-auth',
      question: 'What is the key difference between a Message Authentication Code (MAC) and a Digital Signature?',
      options: ['MAC provides non-repudiation while Digital Signatures do not.', 'MAC uses a symmetric shared key, whereas Digital Signatures use asymmetric key pairs.', 'MAC requires a Certificate Authority (CA).', 'Digital Signatures are faster to compute than MACs.'],
      correct: 1,
      explanation: 'MAC ek symmetric key (shared secret) par rely karta hai dono parties ke beech. Digital signature asymmetric key (public/private pair) use karta hai.'
    },
    {
      id: 20,
      topic: 'key-mgmt-auth',
      question: 'What does HMAC stand for in the context of message authentication?',
      options: ['Hash-based Message Authentication Code', 'Host-based Message Authentication Code', 'Hybrid Message Authentication Code', 'Hierarchical Message Authentication Control'],
      correct: 0,
      explanation: 'HMAC (Hash-based Message Authentication Code) ek specific type ka MAC hai jo cryptographic hash function aur secret cryptographic key dono use karta hai.'
    },
    {
      id: 21,
      topic: 'hashing-algorithms',
      question: 'Which property of a cryptographic hash function ensures that it is computationally infeasible to find any two distinct messages that produce the same hash value?',
      options: ['Pre-image resistance', 'Collision resistance', 'Avalanche effect', 'Second pre-image resistance'],
      correct: 1,
      explanation: 'Jab do alag messages ka hash same na aaye, us property ko Collision Resistance kehte hain.'
    },
    {
      id: 22,
      topic: 'hashing-algorithms',
      question: 'What is the output length of the message digest generated by the MD5 algorithm?',
      options: ['128 bits', '160 bits', '256 bits', '512 bits'],
      correct: 0,
      explanation: 'MD5 ek 128-bit hash value produce karta hai. Ye direct fact-based question hai jo frequently exams me aata hai.'
    },
    {
      id: 23,
      topic: 'hashing-algorithms',
      question: 'Which hash algorithm was adopted by the US National Institute of Standards and Technology (NIST) to produce a 160-bit message digest?',
      options: ['MD5', 'SHA-1', 'SHA-256', 'RIPEMD-128'],
      correct: 1,
      explanation: 'SHA-1 160-bit ka digest output karta hai. Halanki ab ise insecure maana jata hai.'
    },
    {
      id: 24,
      topic: 'hashing-algorithms',
      question: 'If a single bit in the input message is changed, the output hash should change significantly. What is this property called?',
      options: ['Pigeonhole principle', 'Avalanche effect', 'Confusion property', 'Diffusion property'],
      correct: 1,
      explanation: 'Avalanche effect ka matlab hai ki input me ek chhota sa change (jaise ek bit) output me bahut bada change (nearly half bits flipped) laata hai.'
    },
    {
      id: 25,
      topic: 'hashing-algorithms',
      question: 'Which of the following hash algorithms uses the Keccak sponge function construction instead of the traditional Merkle-Damgård construction?',
      options: ['SHA-1', 'MD5', 'SHA-2', 'SHA-3'],
      correct: 3,
      explanation: 'SHA-3 Keccak algorithm par based hai jo ek sponge construction use karta hai, jisse ye purane hash algorithms se completely different aur secure banta hai.'
    },
    {
      id: 26,
      topic: 'email-security',
      question: 'In PGP (Pretty Good Privacy), how is the symmetric session key transmitted to the receiver?',
      options: ['It is sent in plain text.', 'It is encrypted using the sender’s private key.', 'It is encrypted using the receiver’s public key.', 'It is hashed using SHA-1.'],
      correct: 2,
      explanation: 'PGP me sender ek one-time symmetric session key banata hai, usse message encrypt karta hai, aur fir us session key ko receiver ki public key se encrypt karke bhejta hai.'
    },
    {
      id: 27,
      topic: 'email-security',
      question: 'Which trust model is utilized by PGP for verifying public keys?',
      options: ['Hierarchical CA Trust Model', 'Web of Trust', 'Centralized Key Distribution Center', 'Peer-to-Peer Blockchain'],
      correct: 1,
      explanation: 'PGP me koi centralized Certificate Authority nahi hoti. Users ek doosre ki public keys ko sign karte hain, is decentralized model ko Web of Trust kehte hain.'
    },
    {
      id: 28,
      topic: 'email-security',
      question: 'Why does PGP convert the encrypted binary data into Radix-64 (Base64) format?',
      options: ['To increase the encryption strength.', 'To compress the file size further.', 'To ensure compatibility with email systems that only support ASCII characters.', 'To create a digital signature.'],
      correct: 2,
      explanation: 'Purane email systems (jaise basic SMTP) binary data support nahi karte the, sirf 7-bit ASCII support karte the. Isliye binary encrypted text ko Radix-64 ASCII characters me convert kiya jata hai.'
    },
    {
      id: 29,
      topic: 'email-security',
      question: 'Which of the following is a key difference between S/MIME and PGP?',
      options: ['S/MIME does not support encryption, only digital signatures.', 'PGP uses X.509 certificates exclusively, while S/MIME uses Web of Trust.', 'S/MIME relies on X.509 certificates and a CA hierarchy, whereas PGP uses the Web of Trust.', 'PGP is an industry standard for corporate email, while S/MIME is for personal use.'],
      correct: 2,
      explanation: 'S/MIME strict CA hierarchy aur X.509 certificates par rely karta hai (corporate focus), jabki PGP decentralized Web of Trust par kaam karta hai.'
    },
    {
      id: 30,
      topic: 'email-security',
      question: 'What is the first operational step applied to an email message when processed by PGP?',
      options: ['Encryption', 'Radix-64 conversion', 'Compression', 'Hashing'],
      correct: 2,
      explanation: 'PGP sabse pehle message ko compress (ZIP) karta hai. Isse size kam hota hai aur redundant patterns hat jate hain, jisse cryptoanalysis mushkil hota hai.'
    },
    {
      id: 31,
      topic: 'threats-firewalls',
      question: 'Which type of malicious software is self-replicating, standalone, and does not require a host program or user interaction to spread across a network?',
      options: ['Virus', 'Trojan Horse', 'Worm', 'Rootkit'],
      correct: 2,
      explanation: 'Worms stand-alone programs hote hain jo network vulnerabilities ka use karke apne aap replicate aur spread hote hain bina kisi human interaction ke.'
    },
    {
      id: 32,
      topic: 'threats-firewalls',
      question: 'What type of network attack involves overwhelming a target system with a flood of illegitimate traffic from multiple compromised devices?',
      options: ['Man-in-the-Middle Attack', 'SQL Injection', 'Distributed Denial of Service (DDoS)', 'Phishing'],
      correct: 2,
      explanation: 'Jab multiple devices (Botnet) ek sath target server par requests bhej kar use crash kar dete hain, use DDoS attack kehte hain.'
    },
    {
      id: 33,
      topic: 'threats-firewalls',
      question: 'At which layer of the OSI model does a simple stateless packet filtering firewall operate?',
      options: ['Application Layer', 'Transport Layer', 'Network Layer', 'Data Link Layer'],
      correct: 2,
      explanation: 'Stateless packet filtering firewall Network Layer (Layer 3) par kaam karta hai, aur IP addresses/port numbers check karta hai bina connection state dekhe.'
    },
    {
      id: 34,
      topic: 'threats-firewalls',
      question: 'What is the main advantage of a Stateful Inspection Firewall over a Packet Filtering Firewall?',
      options: ['It is much faster than packet filtering.', 'It can remember and monitor the state of active TCP connections.', 'It completely inspects the payload inside HTTP packets.', 'It does not require any rule configuration.'],
      correct: 1,
      explanation: 'Stateful firewall active connections ka record (state table) maintain karta hai aur packet ko context ke mutabiq allow/block karta hai, jo stateless me nahi hota.'
    },
    {
      id: 35,
      topic: 'threats-firewalls',
      question: 'In network security, what is the purpose of a DMZ (Demilitarized Zone)?',
      options: ['To store highly confidential internal databases securely.', 'To host public-facing servers and separate them from the internal secure network.', 'To completely block all incoming traffic from the internet.', 'To encrypt all outgoing traffic.'],
      correct: 1,
      explanation: 'DMZ ek isolated sub-network hai jisme organization ke public servers (Web, DNS, Email) rakhe jate hain, taaki unke hack hone par internal network safe rahe.'
    },
    {
      id: 36,
      topic: 'ethical-hacking',
      question: 'Which phase of ethical hacking involves gathering information about the target without directly engaging with its network?',
      options: ['Active Footprinting', 'Passive Footprinting', 'Scanning', 'Enumeration'],
      correct: 1,
      explanation: 'Passive footprinting me attacker publicly available resources (WHOIS, social media, OSINT) se info nikalta hai bina target server se direct connect kiye.'
    },
    {
      id: 37,
      topic: 'ethical-hacking',
      question: 'Which popular tool is primarily used for network discovery, port scanning, and vulnerability scanning during the scanning phase?',
      options: ['Wireshark', 'Metasploit', 'Nmap', 'John the Ripper'],
      correct: 2,
      explanation: 'Nmap (Network Mapper) industry ka sabse popular tool hai port scanning aur live hosts discover karne ke liye.'
    },
    {
      id: 38,
      topic: 'ethical-hacking',
      question: 'What is a stealth scan (or half-open scan) in the context of port scanning?',
      options: ['A scan that never sends any packets to the target.', 'A scan that sends SYN packets but does not complete the TCP 3-way handshake.', 'A scan that uses UDP instead of TCP.', 'A scan that masks the attacker’s IP using a proxy.'],
      correct: 1,
      explanation: 'Stealth scan (SYN scan) me attacker SYN bhejta hai, target SYN/ACK bhejta hai, par attacker wapas ACK nahi bhejta. Connection half-open reh jata hai taaki logs me record na ho.'
    },
    {
      id: 39,
      topic: 'ethical-hacking',
      question: 'Which of the following processes involves extracting user names, machine names, network resources, and shared folders from a system?',
      options: ['Footprinting', 'Enumeration', 'Sniffing', 'Exploitation'],
      correct: 1,
      explanation: 'Enumeration phase me attacker direct connection establish karke internal details (jaise NetBIOS, SNMP info, usernames) extract karta hai.'
    },
    {
      id: 40,
      topic: 'ethical-hacking',
      question: 'What is the primary difference between a White Hat hacker and a Black Hat hacker?',
      options: ['White Hats use different tools than Black Hats.', 'White Hats only hack government servers.', 'White Hats have explicit permission to find vulnerabilities, while Black Hats act maliciously without permission.', 'White Hats only perform passive footprinting.'],
      correct: 2,
      explanation: 'Ethical hackers (White Hats) same tools use karte hain par system owner ki permission se, taaki vulnerabilities ko patch kiya ja sake.'
    }
  ]
};

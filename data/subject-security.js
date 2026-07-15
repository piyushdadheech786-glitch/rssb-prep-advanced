window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['security'] = {
  id: 'security',
  name: 'Network Security',
  icon: '🔒',
  description: 'Cryptography, network defense aur ethical hacking ke concepts ka detailed study.',
  topics: [
    {
      id: 'math-foundations',
      name: 'Mathematical Foundations of Cryptography',
      theory: `
        <h3>Groups, Rings, and Fields</h3>
        <p>Cryptography ke mathematical concepts abstract algebra par based hain. Ye structures define karte hain ki numbers par operations kaise kaam karenge.</p>
        <ul>
          <li><strong>Group:</strong> Ek set of elements jisme ek binary operation (jaise addition ya multiplication) hota hai. Isme closure, associativity, identity aur inverse properties satisfy honi chahiye.</li>
          <li><strong>Ring:</strong> Aisa set jisme do operations hote hain (addition aur multiplication). Addition ke liye commutative group aur multiplication ke liye associative property satisfy karni padti hai.</li>
          <li><strong>Field:</strong> Ek commutative ring jisme har non-zero element ka multiplicative inverse exist karta hai. Cryptography me mostly <strong>Finite Fields (Galois Fields - GF(p))</strong> use hote hain.</li>
        </ul>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          AES algorithm internally Galois Field GF(2^8) ka extensive use karta hai for mathematical operations aur mix columns step me.
        </div>

        <h3>Fermat's and Euler's Theorems</h3>
        <p>Public key algorithms (jaise RSA) prime numbers aur modular arithmetic par based hote hain.</p>
        
        <h4>Fermat's Little Theorem</h4>
        <p>Agar $p$ ek prime number hai aur $a$ koi integer hai jo $p$ se divisible nahi hai, toh:</p>
        <div class="formula-box">
          <div class="formula-title">📐 Fermat's Theorem</div>
          $a^{p-1} \\equiv 1 \\pmod{p}$
        </div>
        
        <h4>Euler's Totient Function & Theorem</h4>
        <p>Euler's Totient Function $\\phi(n)$ batata hai ki $n$ se chote kitne positive integers $n$ ke sath coprime hain (i.e., jinka GCD 1 hai). Agar $p$ prime hai, toh $\\phi(p) = p - 1$.</p>
        <div class="formula-box">
          <div class="formula-title">📐 Euler's Theorem</div>
          Agar a aur n coprime hain (GCD(a,n)=1), toh: $a^{\\phi(n)} \\equiv 1 \\pmod{n}$
        </div>

        <h3>Primality Testing</h3>
        <p>RSA jaise algorithms me bade prime numbers (2048-bit) generate karne ke liye jaldi check karna padta hai ki number prime hai ya nahi. Iske liye <strong>Primality Tests</strong> use hote hain, jaise <em>Miller-Rabin Primality Test</em>. Ye ek probabilistic test hai jo jaldi bata deta hai ki bada number prime hone ke chances kitne hain.</p>
      `
    },
    {
      id: 'symmetric-crypto',
      name: 'Symmetric Encryption (DES, AES, IDEA)',
      theory: `
        <h3>Symmetric Key Encryption</h3>
        <p>Isme sender aur receiver <strong>same secret key</strong> use karte hain - encrypt aur decrypt dono karne ke liye. Iska sabse bada limitation 'Key Distribution' hota hai (key securely kaise share karein). Iske types hain: Block Ciphers aur Stream Ciphers.</p>

        <h3>Data Encryption Standard (DES)</h3>
        <p>DES ek purana symmetric block cipher hai. Ye ek 64-bit block of plain text leta hai aur 64-bit cipher text produce karta hai.</p>
        <ul>
          <li><strong>Key Size:</strong> 56 bits (originally 64 bits hoti hai par 8 bits parity check ke liye discard hote hain).</li>
          <li><strong>Structure:</strong> Feistel network structure par based hai.</li>
          <li><strong>Rounds:</strong> 16 rounds ki processing hoti hai.</li>
        </ul>
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Exam me puchte hain DES ki effective key size kya hai. Answer humesha <strong>56 bits</strong> dena hai, 64 bits nahi!
        </div>

        <h3>Advanced Encryption Standard (AES)</h3>
        <p>DES ko replace karne ke liye AES (Rijndael algorithm) banaya gaya kyunki DES ki 56-bit key easily break ho sakti thi brute-force attack se.</p>
        <ul>
          <li><strong>Block Size:</strong> 128 bits fixed.</li>
          <li><strong>Key Sizes:</strong> 128, 192, ya 256 bits ho sakti hai.</li>
          <li><strong>Rounds:</strong> 10 (128-bit key), 12 (192-bit key), 14 (256-bit key).</li>
          <li><strong>Structure:</strong> Substitution-Permutation Network (SPN), ye Feistel cipher nahi hai.</li>
        </ul>

        <h3>IDEA (International Data Encryption Algorithm)</h3>
        <p>PGP (Pretty Good Privacy) emails secure karne me widely use hua ek symmetric algorithm hai.</p>
        <ul>
          <li><strong>Block Size:</strong> 64 bits.</li>
          <li><strong>Key Size:</strong> 128 bits.</li>
          <li><strong>Rounds:</strong> 8.5 rounds (8 full rounds aur 1 half round).</li>
        </ul>

        <table class="comparison-table">
          <tr><th>Feature</th><th>DES</th><th>AES</th><th>IDEA</th></tr>
          <tr><td>Block Size</td><td>64 bits</td><td>128 bits</td><td>64 bits</td></tr>
          <tr><td>Key Size</td><td>56 bits</td><td>128/192/256 bits</td><td>128 bits</td></tr>
          <tr><td>Rounds</td><td>16</td><td>10/12/14</td><td>8.5</td></tr>
          <tr><td>Structure</td><td>Feistel</td><td>SPN</td><td>Non-Feistel</td></tr>
        </table>
      `
    },
    {
      id: 'asymmetric-crypto',
      name: 'Asymmetric Encryption & Key Management',
      theory: `
        <h3>Asymmetric (Public Key) Cryptography</h3>
        <p>Isme <strong>do alag keys</strong> (key pair) use hoti hain: ek <strong>Public Key</strong> (jo sabke paas hoti hai) aur ek <strong>Private Key</strong> (jo user apne paas secret rakhta hai). Agar aap Public Key se encrypt karte hain, toh sirf uski corresponding Private Key se hi decrypt ho sakta hai.</p>

        <h3>RSA Algorithm</h3>
        <p>Rivest-Shamir-Adleman (RSA) sabse famous public key algorithm hai. Iski mathematical security <strong>integer factorization problem</strong> (do bade prime numbers ke product se un prime numbers ko wapas dhundhne ki difficulty) par based hai.</p>
        
        <h4>Example (RSA Working Steps)</h4>
        <p>Step-by-step RSA key generation aur encryption process:</p>
        <pre><code>1. Do prime numbers lo: p = 3, q = 11
2. Modulus n = p * q = 33
3. Calculate Euler totient φ(n) = (p-1)(q-1) = 2 * 10 = 20
4. Choose public key exponent 'e' (coprime to 20): let e = 3
5. Calculate private key 'd' (e*d ≡ 1 mod φ(n)): d = 7 (kyunki 3*7 = 21, 21 mod 20 = 1)
   -> Public Key: (e, n) = (3, 33)
   -> Private Key: (d, n) = (7, 33)
6. Encrypt Message (M=4): C = M^e mod n = 4^3 mod 33 = 64 mod 33 = 31
7. Decrypt Cipher (C=31): M = C^d mod n = 31^7 mod 33 = 4</code></pre>

        <h3>Key Management</h3>
        <p>Keys ko securely generate, distribute aur store karna ek complex task hai.</p>
        <ul>
          <li><strong>Diffie-Hellman Key Exchange:</strong> Do parties securely ek symmetric key aapas me exchange kar sakti hain insecure public channel par. Iski security <em>Discrete Logarithm Problem</em> par based hai. Note: Ye data encrypt nahi karta, sirf secret key exchange karne ke kaam aata hai.</li>
          <li><strong>Public Key Infrastructure (PKI):</strong> Ek security framework jo digital certificates manage karta hai using a Certificate Authority (CA). Ye ensure karta hai ki public key sach me ussi insaan ki hai jiska wo claim kar raha hai.</li>
        </ul>
      `
    },
    {
      id: 'hashing-auth',
      name: 'Hashing & Authentication',
      theory: `
        <h3>Cryptographic Hash Functions</h3>
        <p>Hash function ek variable size input (message) leta hai aur ek fixed size output (jise hash value, message digest ya fingerprint kehte hain) produce karta hai. Iska kaam data <strong>integrity</strong> ensure karna hai (ki data raste me kisi hacker ne modify nahi kiya).</p>
        <p>Ek strong hash function ki properties:</p>
        <ul>
          <li><strong>One-way property:</strong> Hash value se wapas original message generate karna impossible hona chahiye.</li>
          <li><strong>Collision resistance:</strong> Do alag-alag messages ka same hash value nahi aana chahiye.</li>
        </ul>
        
        <h4>Common Hash Algorithms</h4>
        <ul>
          <li><strong>MD5 (Message Digest 5):</strong> 128-bit hash produce karta hai. Ye ab insecure mana jata hai kyunki isme collisions easily find kiye ja sakte hain.</li>
          <li><strong>SHA (Secure Hash Algorithm):</strong> SHA-1 (160-bit, broken), SHA-256 (256-bit fixed output, widely used in SSL/TLS, Blockchain), SHA-512 (512-bit).</li>
        </ul>

        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Hashing is for Data <em>Integrity</em>. Encryption is for Data <em>Confidentiality</em>.
        </div>

        <h3>Authentication & Digital Signatures</h3>
        <p>Authentication confirm karta hai ki sender wahi hai jo wo claim kar raha hai (no spoofing).</p>
        <ul>
          <li><strong>Digital Signature:</strong> Sender apne message ke hash ko apni <em>Private Key</em> se encrypt karta hai. Receiver, sender ki <em>Public Key</em> se usko decrypt karke hash verify karta hai. Ye <strong>Non-repudiation</strong> (sender mukar nahi sakta) ensure karta hai.</li>
          <li><strong>MAC (Message Authentication Code):</strong> Ek small block of data jo message ke sath bheja jata hai. Ye ek shared symmetric secret key aur hash function (jaise HMAC) ka use karke banta hai.</li>
        </ul>
      `
    },
    {
      id: 'email-network-sec',
      name: 'Email, LAN & WAN Security',
      theory: `
        <h3>Email Security</h3>
        <p>Standard email text plaintext me travel karta hai, isliye ise secure karne ke liye specific protocols use hote hain:</p>
        <ul>
          <li><strong>PGP (Pretty Good Privacy):</strong> Emails aur files encrypt/decrypt aur sign karne ke liye use hota hai. Ye 'Web of Trust' decentralized model use karta hai.</li>
          <li><strong>S/MIME (Secure/Multipurpose Internet Mail Extensions):</strong> Digital certificates (PKI) based standard for email security. Mostly corporate environments me built-in client support ke sath use hota hai.</li>
        </ul>

        <h3>LAN / WAN Security</h3>
        <p>Network communications ko alag-alag layers par secure kiya jata hai:</p>
        <ul>
          <li><strong>IPSec (Internet Protocol Security):</strong> Network Layer (OSI Layer 3) par security deta hai. VPNs (Virtual Private Networks) banane me mostly use hota hai. Do modes me kaam karta hai:
            <ul>
              <li><strong>Transport mode:</strong> Sirf payload (data) encrypt hota hai, header nahi.</li>
              <li><strong>Tunnel mode:</strong> Pura IP packet (header + payload) encrypt hota hai aur ek naya header lagta hai.</li>
            </ul>
          </li>
          <li><strong>SSL/TLS (Secure Sockets Layer / Transport Layer Security):</strong> Transport Layer ke upar kaam karta hai. Web browsing (HTTPS) ko end-to-end secure karta hai.</li>
          <li><strong>Firewall:</strong> Ek network security device (hardware/software) jo incoming aur outgoing traffic ko pre-defined rules ke hisaab se monitor aur filter karti hai. Packet filtering, Stateful inspection, aur Proxy firewalls iske common types hain.</li>
        </ul>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          IPSec Network Layer par kaam karta hai, jabki SSL/TLS Transport layer ke oopar (application layer data ke liye) kaam karta hai. Inka OSI model layer mapping exam me humesha pucha jata hai!
        </div>
      `
    },
    {
      id: 'malware-ethical-hacking',
      name: 'Malware & Ethical Hacking',
      theory: `
        <h3>Malicious Software (Malware)</h3>
        <p>Malware wo malicious software hai jo computer system ko nuksan pahunchane, data churane ya unauthorized access paane ke liye banaya gaya hai.</p>
        <ul>
          <li><strong>Virus:</strong> Ek malicious program jo doosre legitimate executable programs ke sath attach ho jata hai aur execute hone par apni copies banata hai (replication). Isko failne ke liye human interaction chahiye.</li>
          <li><strong>Worm:</strong> Ye standalone malware hote hain. Inhe failne ke liye kisi host file ya user click ki zarurat nahi hoti, ye network ki vulnerabilities ka use karke auto-spread hote hain.</li>
          <li><strong>Trojan Horse:</strong> Ye dekhne me legitimate aur useful software lagte hain (jaise koi free game ya tool), par inke andar malicious code chupa hota hai jo background me backdoor open kar sakta hai. Ye replicate nahi karte.</li>
        </ul>

        <h3>Ethical Hacking</h3>
        <p>Ethical Hacking me ek security expert system owner ki permission se network ya system ki vulnerabilities (kamzoriyan) dhundhta hai aur secure karta hai. Isko <strong>Penetration Testing</strong> ya Pen Testing bhi kehte hain.</p>
        
        <h4>Phases of Ethical Hacking</h4>
        <ol>
          <li><strong>Reconnaissance (Footprinting):</strong> Target system ke baare me zyada se zyada information gather karna (Passive ya Active gathering).</li>
          <li><strong>Scanning:</strong> Network IP addresses, open ports, OS details, aur running services ka pata lagana (Tools: Nmap, Nessus).</li>
          <li><strong>Gaining Access (Exploitation):</strong> Vulnerabilities ka fayda uthakar target system me enter karna aur control lena.</li>
          <li><strong>Maintaining Access:</strong> Backdoors, rootkits ya trojans install karna taaki future me bhi easily access mil sake bina exploit dobara run kiye.</li>
          <li><strong>Clearing Tracks:</strong> System logs aur evidences ko delete karna taaki attacker ki presence pakdi na jaye.</li>
        </ol>

        <div class="tip-box">
          <div class="tip-title">💡 Hacker Types</div>
          <strong>White Hat:</strong> Ethical hacker, authorized. <br>
          <strong>Black Hat:</strong> Malicious hacker, unauthorized. <br>
          <strong>Grey Hat:</strong> Jo bina permission hack karta hai par nuksan pahunchane ki niyat nahi hoti, sysadmin ko weak point bata deta hai (often for bounty).
        </div>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'math-foundations',
      question: 'Ek finite field $GF(p^n)$ me $p$ ko kya kaha jata hai?',
      options: ['Prime polynomial', 'Prime number', 'Degree of field', 'Generative element'],
      correct: 1,
      explanation: 'Finite fields (Galois fields) $GF(p^n)$ ke form me hote hain jahan $p$ ek prime number hota hai aur $n$ ek positive integer. $p$ is field ka base ya characteristic prime number hota hai.'
    },
    {
      id: 2,
      topic: 'math-foundations',
      question: 'Agar $p$ ek prime number hai aur $a$ koi integer hai jo $p$ ka multiple nahi hai, toh $a^{p-1} \\equiv 1 \\pmod{p}$ kis theorem ka statement hai?',
      options: ['Euler\\'s Theorem', 'Chinese Remainder Theorem', 'Fermat\\'s Little Theorem', 'Lagrange\\'s Theorem'],
      correct: 2,
      explanation: 'Ye Fermat\\'s Little Theorem ka standard statement hai. Ye RSA algorithm ki correctness aur primality testing algorithms ka fundamental part hai.'
    },
    {
      id: 3,
      topic: 'math-foundations',
      question: 'Miller-Rabin algorithm kis purpose ke liye primarily use hota hai?',
      options: ['Integer Factorization', 'Primality Testing', 'Finding GCD', 'Symmetric Encryption'],
      correct: 1,
      explanation: 'Miller-Rabin ek fast probabilistic algorithm hai jo ye test karta hai ki koi diya gaya bada number prime hai ya composite. Ye key generation (jaise RSA) me bahut use hota hai.'
    },
    {
      id: 4,
      topic: 'math-foundations',
      question: 'Euler\\'s Totient Function $\\phi(11)$ ki value kya hogi?',
      options: ['11', '10', '1', '12'],
      correct: 1,
      explanation: 'Euler Totient function batata hai kitne numbers coprime hain. Kyunki 11 ek prime number hai, usse chote sabhi numbers coprime honge. Prime number $p$ ke liye $\\phi(p) = p - 1$ hota hai. Isliye $\\phi(11) = 11 - 1 = 10$.'
    },
    {
      id: 5,
      topic: 'math-foundations',
      question: 'Cryptography me "Ring" mathematical structure ke liye kaunsa statement true hai?',
      options: ['Ye sirf ek operation support karta hai', 'Multiplication ke liye har element ka inverse hona compulsory hai', 'Isme do operations hote hain (+ and *), jisme addition ek commutative group banata hai', 'Ye completely non-commutative structure hai'],
      correct: 2,
      explanation: 'Ring ek aisi algebraic structure hai jisme 2 operations hote hain. Addition ke respect me ye ek commutative (abelian) group form karta hai aur multiplication associative hota hai. Inverse of multiplication compulsory nahi hota (wo Field me hota hai).'
    },
    {
      id: 6,
      topic: 'symmetric-crypto',
      question: 'Data Encryption Standard (DES) me cryptographic effective key size kitni bits ki hoti hai?',
      options: ['64 bits', '56 bits', '128 bits', '256 bits'],
      correct: 1,
      explanation: 'DES originally 64-bit block of key leta hai, but usme se 8 bits (har 8th bit) parity checking ke liye discard ho jati hain. Toh effective secret key size sirf 56 bits hi reh jati hai.'
    },
    {
      id: 7,
      topic: 'symmetric-crypto',
      question: 'AES (Advanced Encryption Standard) algorithm me text ka block size humesha kitna hota hai?',
      options: ['64 bits fixed', '128 bits fixed', 'Variable up to 256 bits', '256 bits fixed'],
      correct: 1,
      explanation: 'AES me block size humesha strictly fixed 128 bits hota hai. Ye yaad rakhna zaruri hai. Key size 128, 192, ya 256 bits ho sakti hai, par block 128 bit ka hi rahega.'
    },
    {
      id: 8,
      topic: 'symmetric-crypto',
      question: 'Inme se kaunsa algorithm substitution-permutation network (SPN) structure par based hai, na ki Feistel network par?',
      options: ['DES', 'Blowfish', 'IDEA', 'AES'],
      correct: 3,
      explanation: 'AES Substitution-Permutation Network (SPN) structure par based hai. DES aur Blowfish purane Feistel network structure par based hain.'
    },
    {
      id: 9,
      topic: 'symmetric-crypto',
      question: 'IDEA encryption algorithm me total kitne encryption rounds hote hain?',
      options: ['10', '16', '8.5', '12'],
      correct: 2,
      explanation: 'IDEA (International Data Encryption Algorithm) me exactly 8 full rounds aur ek final half round (output transformation) hota hai, jisko commonly 8.5 rounds kaha jata hai.'
    },
    {
      id: 10,
      topic: 'symmetric-crypto',
      question: 'Ek block cipher mode jisme agla plaintext block encrypt hone se pehle pichle ciphertext block ke sath XOR kiya jata hai, use kya kehte hain?',
      options: ['ECB (Electronic Codebook)', 'CBC (Cipher Block Chaining)', 'CFB (Cipher Feedback)', 'OFB (Output Feedback)'],
      correct: 1,
      explanation: 'CBC (Cipher Block Chaining) mode me plaintext seedha encrypt nahi hota. Har plaintext block pehle pichle aae hue ciphertext block ke sath XOR hota hai, jisse same plaintext block alag-alag aane pe alag ciphertext deta hai.'
    },
    {
      id: 11,
      topic: 'asymmetric-crypto',
      question: 'RSA algorithm ki mathematical security kis problem ki difficulty par based hai?',
      options: ['Discrete Logarithm Problem', 'Elliptic Curve Problem', 'Integer Factorization Problem', 'Subset Sum Problem'],
      correct: 2,
      explanation: 'RSA ki security is fact par dependent hai ki do bade prime numbers ko multiply karna aasan hai, par us badhe hue product (n = p*q) ko wapas uske original factors (p aur q) me todna (factorization) supercomputers ke liye bhi computationally almost impossible hai.'
    },
    {
      id: 12,
      topic: 'asymmetric-crypto',
      question: 'Diffie-Hellman algorithm ka cryptography me primary use kya hai?',
      options: ['Heavy files encrypt/decrypt karna', 'Digital signatures create karna', 'Hash function generate karna', 'Securely symmetric key exchange karna'],
      correct: 3,
      explanation: 'Diffie-Hellman algorithm ka original kaam sirf ek shared secret key aapas me securely establish karna (Key Exchange) hota hai over an insecure network. Isse data directly encrypt nahi kiya jata.'
    },
    {
      id: 13,
      topic: 'asymmetric-crypto',
      question: 'Public Key Infrastructure (PKI) me digital certificates authenticate, issue aur manage karne wali trusted third-party ko kya kehte hain?',
      options: ['Registration Authority (RA)', 'Certificate Authority (CA)', 'Key Distribution Center (KDC)', 'Domain Admin'],
      correct: 1,
      explanation: 'Certificate Authority (CA) ek trusted organization (jaise Verisign, Let\\'s Encrypt) hoti hai jo PKI infrastructure me digital certificates issue, manage, aur revoke karti hai.'
    },
    {
      id: 14,
      topic: 'asymmetric-crypto',
      question: 'Alice ko Bob ko ek strictly confidential message bhejna hai public key cryptography ka use karke. Alice is message ko kis key se encrypt karegi?',
      options: ['Alice\\'s Public Key', 'Alice\\'s Private Key', 'Bob\\'s Public Key', 'Bob\\'s Private Key'],
      correct: 2,
      explanation: 'Confidentiality ensure karne ke liye, message ko hamesha receiver (Bob) ki Public Key se encrypt kiya jata hai. Taaki Internet par koi usko read na kar sake aur sirf Bob apni Private Key use karke usse decrypt kar sake.'
    },
    {
      id: 15,
      topic: 'asymmetric-crypto',
      question: 'RSA algorithm me agar do prime numbers $p=3$ aur $q=11$ hain, aur public exponent $e=3$ hai, toh private decryption key $d$ ki value kya hogi?',
      options: ['11', '7', '13', '33'],
      correct: 1,
      explanation: '$n=p*q=33$. Euler\\'s Totient $\\phi(n)=(3-1)*(11-1) = 2*10 = 20$. Ab hume $d$ nikalna hai jiske liye $(e * d) \\equiv 1 \\pmod{\\phi(n)}$. Yaani $3 * d \\equiv 1 \\pmod{20}$. Agar options me se $d=7$ rakhte hain, toh $3 * 7 = 21$. Aur $21 \\bmod 20 = 1$ hota hai. Isliye $d=7$ correct hai.'
    },
    {
      id: 16,
      topic: 'hashing-auth',
      question: 'SHA-256 algorithm ka final output (message digest) hamesha kitne bits ka hota hai?',
      options: ['128 bits', '160 bits', '256 bits', '512 bits'],
      correct: 2,
      explanation: 'Name se hi clear hai, SHA-256 (Secure Hash Algorithm 256) ka output (hash value) fixed 256 bits (yaani 32 bytes) ka hota hai, chahe input file ka size kuch bhi ho.'
    },
    {
      id: 17,
      topic: 'hashing-auth',
      question: 'Digital signature kaunsi security services ensure karta hai?',
      options: ['Confidentiality only', 'Authentication aur Non-repudiation', 'Availability aur Confidentiality', 'Sirf Integrity'],
      correct: 1,
      explanation: 'Digital Signature sender ki identity verify karta hai (Authentication), integrity check karta hai (hashing ke through), aur ensure karta hai ki sender baad me message bhejne se mukar na sake (Non-repudiation).'
    },
    {
      id: 18,
      topic: 'hashing-auth',
      question: 'Message Authentication Code (MAC) generate karne ke liye kin do inputs ki zarurat hoti hai?',
      options: ['Message aur Hash Algorithm', 'Message aur Symmetric Secret Key', 'Public Key aur Private Key', 'Digital Certificate aur Message'],
      correct: 1,
      explanation: 'MAC ek tag hota hai jo data integrity aur authentication deta hai. Ise generate karne ke liye original message ke sath dono parties ko pata ek shared Symmetric Secret Key ki jarurat hoti hai.'
    },
    {
      id: 19,
      topic: 'hashing-auth',
      question: 'Hash function me "Collision" ka kya matlab hai?',
      options: ['Do network packets ka aapas me takrana', 'Do bilkul alag inputs ka same hash value produce ho jana', 'Hash algorithm ka reverse-engineer ho jana', 'Database tables me duplicate primary key aana'],
      correct: 1,
      explanation: 'Jab do completely different messages ko hash function me pass karne par wo exactly same hash digest produce karte hain, toh use Hash Collision kaha jata hai. Acha hash collision-resistant hona chahiye.'
    },
    {
      id: 20,
      topic: 'hashing-auth',
      question: 'Kaunsa authentication protocol "Tickets" (TGT) aur "KDC" concept ka use karta hai user authentication ke liye?',
      options: ['IPSec', 'RADIUS', 'Kerberos', 'SSL/TLS'],
      correct: 2,
      explanation: 'Kerberos ek widely used network authentication protocol hai. Ye passwords network par bhejne ki bajay Key Distribution Center (KDC) aur Ticket Granting Ticket (TGT) model ka use karta hai identity verify karne ke liye.'
    },
    {
      id: 21,
      topic: 'email-network-sec',
      question: 'PGP (Pretty Good Privacy) system public keys ke trust ko verify karne ke liye kaunsa model use karta hai?',
      options: ['Hierarchical CA Model', 'Centralized PKI Model', 'Web of Trust Model', 'Single Authority Model'],
      correct: 2,
      explanation: 'PGP traditional centralized Certificate Authority (CA) par depend nahi karta. Uski jagah wo ek decentralized "Web of Trust" model use karta hai, jisme users khud ek doosre ki public keys ko sign aur verify karte hain.'
    },
    {
      id: 22,
      topic: 'email-network-sec',
      question: 'IPSec protocol suite OSI model ki kis layer par security operate karta hai?',
      options: ['Application Layer', 'Transport Layer', 'Network Layer', 'Data Link Layer'],
      correct: 2,
      explanation: 'IPSec (Internet Protocol Security) Internet Layer ya OSI Network Layer (Layer 3) par work karta hai aur seedha IP packets ko IP level pe authenticate aur encrypt karta hai.'
    },
    {
      id: 23,
      topic: 'email-network-sec',
      question: 'IPSec ke kis mode me poora original IP packet encrypt ho jata hai aur uske upar ek naya IP header lagaya jata hai?',
      options: ['Transport Mode', 'Tunnel Mode', 'Encapsulation Mode', 'Stealth Mode'],
      correct: 1,
      explanation: 'Tunnel mode me poora ka poora IP packet (original header + data payload) encrypt ho jata hai aur route karne ke liye ek naya IP header attach kiya jata hai. Ye mode Site-to-Site VPNs me use hota hai.'
    },
    {
      id: 24,
      topic: 'email-network-sec',
      question: 'Network me ek internal trusted network aur external untrusted network (jaise Internet) ke beech filtering barrier ka kaam kaun karta hai?',
      options: ['Router', 'Switch', 'Firewall', 'Bridge'],
      correct: 2,
      explanation: 'Firewall ek dedicated security system (hardware ya software) hai jo strict pre-defined rules ke basis par saare incoming aur outgoing network traffic ko allow ya block karta hai.'
    },
    {
      id: 25,
      topic: 'email-network-sec',
      question: 'SSL/TLS communication me secure session start karne se pehle client aur server ke beech sabse pehla process kya hota hai?',
      options: ['Data Payload encryption', 'SSL Handshake Protocol', 'Session Teardown', 'Certificate Revocation'],
      correct: 1,
      explanation: 'SSL/TLS session establish karne ke liye sabse pehle "Handshake Protocol" run hota hai. Isme client-server ek doosre ko authenticate karte hain, cipher suite negotiate karte hain, aur aage data transfer ke liye session key exchange karte hain.'
    },
    {
      id: 26,
      topic: 'malware-ethical-hacking',
      question: 'Aisa malware jo user ko dhokha dekar legitimate software ya game ke roop me disguise hota hai aur background me malicious activity karta hai, use kya kehte hain?',
      options: ['Worm', 'Virus', 'Trojan Horse', 'Ransomware'],
      correct: 2,
      explanation: 'Trojan horse mythological Greek story ki tarah deceptive malware hai jo dekhne me ek useful program lagta hai par execute karne pe computer ko compromise kar deta hai. Ye virus ki tarah auto-replicate nahi hota.'
    },
    {
      id: 27,
      topic: 'malware-ethical-hacking',
      question: 'Computer Worm aur Virus me sabse major difference kya hai?',
      options: ['Virus destructive hota hai, Worm harmless hota hai', 'Worm ko replicate aur spread hone ke liye kisi host file ya human trigger ki zarurat nahi hoti', 'Virus sirf network ke through hi spread ho sakta hai', 'Worm hardware ko physically damage karta hai'],
      correct: 1,
      explanation: 'Virus ko execute hone aur failne ke liye kisi host executable program aur user action (jaise click) ki zarurat hoti hai. Jabki Worm ek standalone program hai jo network ki kamzoriyan dhoondhkar khud-b-khud spread (propagate) hota rehta hai.'
    },
    {
      id: 28,
      topic: 'malware-ethical-hacking',
      question: 'Ethical Hacking (Penetration Testing) ki 5-phase methodology me sabse pehli stage konsi hoti hai?',
      options: ['Gaining Access', 'Scanning', 'Reconnaissance (Footprinting)', 'Maintaining Access'],
      correct: 2,
      explanation: 'Pehli stage Reconnaissance ya Footprinting hoti hai. Isme attacker target organization ke baare me bina direct attack kiye open sources aur tools se zyada se zyada background information (IPs, domain, employees) gather karta hai.'
    },
    {
      id: 29,
      topic: 'malware-ethical-hacking',
      question: 'Nmap, Nessus aur ping sweep jaise tools ethical hacking ke kis specific phase me sabse zyada kaam aate hain?',
      options: ['Clearing Tracks', 'Gaining Access', 'Reconnaissance', 'Scanning'],
      correct: 3,
      explanation: 'Ye active network tools "Scanning" phase me use hote hain jisme network pe active (live) devices, unke open ports, running services aur known vulnerabilities ko identify kiya jata hai attack plan karne ke liye.'
    },
    {
      id: 30,
      topic: 'malware-ethical-hacking',
      question: 'Wo hacker jo kisi organization ke network me bina permission break-in karta hai, par malicious intent se nahi, balki sysadmin ko vulnerability ke baare me inform karne ke liye (aksar bug bounty ke liye), use kya kehte hain?',
      options: ['White Hat Hacker', 'Black Hat Hacker', 'Grey Hat Hacker', 'Script Kiddie'],
      correct: 2,
      explanation: 'Grey Hat Hacker ethically grey area me operate karta hai. Wo exploit dhoondhne ke liye rules todta hai (like Black Hat) par baad me system ko nuksan pahunchane ki bajay owner ko alert kar deta hai (like White Hat) taaki wo patch kar sakein.'
    }
  ]
};

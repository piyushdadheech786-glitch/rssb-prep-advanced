window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['networks'] = {
  id: 'networks',
  name: 'Computer Networks',
  icon: '🌐',
  description: 'Data communication concepts, OSI/TCP models, and network protocols ko samajhna.',
  topics: [
    {
      id: 'evolution-terminologies',
      name: 'Evolution & Network Terminologies',
      theory: `
        <h3>Evolution of Networking</h3>
        <p>Networking ki shuruaat 1969 mein <b>ARPANET</b> (Advanced Research Projects Agency Network) se hui thi, jo US Department of Defense ne banaya tha. Ye pehla network tha jisne packet switching ka use kiya tha. Dheere dheere NSFNET aaya aur finally aaj ka <b>Internet</b> bana.</p>
        
        <h4>Basic Terminologies</h4>
        <ul>
          <li><b>Node:</b> Network mein connected har device (computer, printer) ko node kehte hain.</li>
          <li><b>Bandwidth:</b> Maximum amount of data jo ek path par travel kar sakta hai. (Measured in bps).</li>
          <li><b>Latency:</b> Data ko source se destination tak pahunchne mein lagne wala time (delay).</li>
        </ul>

        <h4>Network Topologies</h4>
        <p>Topology ka matlab hai network mein computers ka physical ya logical arrangement.</p>
        <ul>
          <li><b>Bus Topology:</b> Ek single main cable (backbone) se sab connected hote hain.</li>
          <li><b>Star Topology:</b> Ek central device (Hub/Switch) hota hai. Sabse zyada use hone wali topology.</li>
          <li><b>Ring Topology:</b> Har node exactly 2 aur nodes se connected hota hai, ek ring banata hai.</li>
          <li><b>Mesh Topology:</b> Har node network ke har dusre node se directly connected hota hai (Point-to-point).</li>
        </ul>
        
        <div class="formula-box">
          <div class="formula-title">📐 Formula / Key Point</div>
          Mesh Topology mein total cables (links) ka formula: <code>n(n-1)/2</code> (Jahan n = number of nodes hai)
        </div>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Star topology sabse reliable aur easy to troubleshoot hai, kyunki ek cable kharab hone se sirf wahi computer affect hota hai, poora network nahi.
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p><b>Question:</b> Agar ek fully connected mesh topology mein 6 computers hain, toh kitne links chahiye?</p>
        <p><b>Solution:</b> Formula is n(n-1)/2. <br/> Here n = 6. <br/> Links = 6 * (6 - 1) / 2 = (6 * 5) / 2 = 30 / 2 = 15 cables.</p>
      `
    },
    {
      id: 'transmission-media',
      name: 'Transmission Media',
      theory: `
        <h3>Transmission Media</h3>
        <p>Data ko ek jagah se dusri jagah bhejne ke medium ko transmission media kehte hain. Ye do types ka hota hai:</p>
        
        <h4>1. Guided Media (Wired)</h4>
        <p>Isme data ek physical wire ke through travel karta hai.</p>
        <ul>
          <li><b>Twisted Pair Cable:</b> Do copper wires ek dusre par twist kiye hote hain (taaki crosstalk kam ho). Ex: UTP (CAT5, CAT6), STP. LANs mein sabse common hai.</li>
          <li><b>Coaxial Cable:</b> Isme ek inner copper conductor aur ek outer braided shield hoti hai. TV cables aur purane LANs mein use hota tha.</li>
          <li><b>Fiber Optic Cable:</b> Glass ya plastic threads use hote hain. Data light signals ke form mein travel karta hai. Ye <i>Total Internal Reflection (TIR)</i> ke principle par kaam karta hai. Sabse fast aur secure hai.</li>
        </ul>

        <h4>2. Unguided Media (Wireless)</h4>
        <p>Isme data electromagnetic waves ke form mein hawa (air) ke through bheja jata hai.</p>
        <ul>
          <li><b>Radio Waves:</b> Omnidirectional hoti hain (har disha mein travel karti hain). FM radio, TV mein use hoti hain.</li>
          <li><b>Microwaves:</b> Unidirectional hoti hain (Line-of-Sight). Mobile networks aur satellite communication mein use hoti hain.</li>
          <li><b>Infrared:</b> Short distance ke liye (Line-of-Sight). TV remote, wireless mouse mein use hota hai. Walls ko cross nahi kar sakti.</li>
        </ul>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Question aata hai ki kaunsa media walls ko penetrate nahi kar sakta? Answer is <b>Infrared</b>.
        </div>
        
        <table class="comparison-table">
          <tr><th>Feature</th><th>Twisted Pair</th><th>Coaxial Cable</th><th>Fiber Optic</th></tr>
          <tr><td>Cost</td><td>Low</td><td>Medium</td><td>High</td></tr>
          <tr><td>Bandwidth</td><td>Low</td><td>Medium</td><td>Very High</td></tr>
          <tr><td>Signal Form</td><td>Electrical</td><td>Electrical</td><td>Light (Optical)</td></tr>
        </table>
      `
    },
    {
      id: 'network-devices',
      name: 'Network Devices',
      theory: `
        <h3>Hardware Network Devices</h3>
        <p>Networking devices ka kaam network mein computers ko connect karna aur data ko forward karna hai.</p>
        
        <ul>
          <li><b>Repeater (Layer 1):</b> Weak signals ko regenerate (amplify) karta hai taaki wo lambi distance travel kar sakein.</li>
          <li><b>Hub (Layer 1):</b> Multiple devices ko connect karta hai. Ye ek 'dumb device' hai kyunki ye incoming data ko har port par broadcast kar deta hai (no filtering).</li>
          <li><b>Switch (Layer 2):</b> Hub ka smart version. Ye MAC address table (CAM table) maintain karta hai aur data sirf usi device ko bhejta hai jiske liye wo intended hai (Unicast).</li>
          <li><b>Bridge (Layer 2):</b> Do same type ke LANs ko connect karta hai aur MAC address read karke traffic ko filter karta hai.</li>
          <li><b>Router (Layer 3):</b> Do alag-alag networks (jaise LAN aur WAN) ko connect karta hai. Ye IP address read karta hai aur best path (routing) decide karta hai data packets bhejane ke liye.</li>
          <li><b>Gateway (All Layers):</b> Do bilkul different protocols wale networks ko connect karne ke liye protocol converter ka kaam karta hai.</li>
        </ul>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          <b>Hub</b> ek single collision domain aur single broadcast domain banata hai. <br>
          <b>Switch</b> har port par alag collision domain banata hai, par broadcast domain ek hi hota hai (unless VLAN use karein). <br>
          <b>Router</b> har port par alag broadcast domain aur alag collision domain banata hai.
        </div>
      `
    },
    {
      id: 'osi-tcpip',
      name: 'OSI Model vs TCP/IP',
      theory: `
        <h3>OSI Reference Model</h3>
        <p>Open Systems Interconnection (OSI) ek 7-layer theoretical model hai (ISO dwara banaya gaya) jo samajhne mein madad karta hai ki network data kaise travel karta hai.</p>
        
        <ol>
          <li><b>Physical Layer (L1):</b> Bits ko electrical/optical signals mein convert karna. (Cables, Hub, Repeater). Data unit: <b>Bits</b>.</li>
          <li><b>Data Link Layer (L2):</b> Node-to-node delivery, MAC addressing, Error detection (CRC). Data unit: <b>Frames</b>.</li>
          <li><b>Network Layer (L3):</b> Routing aur Logical (IP) addressing. Source to destination delivery. Data unit: <b>Packets</b>.</li>
          <li><b>Transport Layer (L4):</b> End-to-end delivery, Process-to-process communication, Error recovery, Flow control (TCP/UDP). Data unit: <b>Segments / Datagrams</b>.</li>
          <li><b>Session Layer (L5):</b> Connections establish, maintain aur terminate karna (Authentication, Dialog control).</li>
          <li><b>Presentation Layer (L6):</b> Data formatting, Encryption, Decryption, Compression (JPEG, ASCII).</li>
          <li><b>Application Layer (L7):</b> User interface aur network applications (HTTP, FTP, SMTP).</li>
        </ol>

        <h4>TCP/IP Model</h4>
        <p>Ye practical model hai jo actual Internet mein use hota hai. Isme commonly 4 layers mani jaati hain (kabhi-kabhi 5 depending on author, but standard is 4 for DOD model).</p>
        
        <table class="comparison-table">
          <tr><th>OSI Model (7 Layers)</th><th>TCP/IP Model (4 Layers)</th></tr>
          <tr><td>Application, Presentation, Session</td><td>Application Layer</td></tr>
          <tr><td>Transport Layer</td><td>Transport Layer</td></tr>
          <tr><td>Network Layer</td><td>Internet Layer</td></tr>
          <tr><td>Data Link, Physical Layer</td><td>Network Access (Link) Layer</td></tr>
        </table>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          OSI Layers ko bottom se top yaad rakhein (Layer 1 to Layer 7). Shortcut trick: <b>P</b>lease <b>D</b>o <b>N</b>ot <b>T</b>hrow <b>S</b>ausage <b>P</b>izza <b>A</b>way.
        </div>
      `
    },
    {
      id: 'multiplexing',
      name: 'Multiplexing Techniques',
      theory: `
        <h3>Multiplexing Kya Hai?</h3>
        <p>Multiplexing (MUX) ek technique hai jisme multiple analog ya digital signals ko combine karke ek single medium (link) ke through bheja jata hai. Isse bandwidth ka better utilization hota hai. Receiving end pe Demultiplexer (DEMUX) use hota hai inko wapas alag karne ke liye.</p>
        
        <h4>Types of Multiplexing</h4>
        <ul>
          <li><b>Frequency Division Multiplexing (FDM):</b> Analog signal technique hai. Total bandwidth ko chote-chote frequency bands mein divide kar dete hain. (Example: Radio stations, Cable TV).</li>
          <li><b>Wavelength Division Multiplexing (WDM):</b> Ye FDM ka hi optical version hai jo Fiber Optic cables mein use hota hai. Alag-alag data streams ko alag-alag color (wavelength) ki light mein bhejte hain.</li>
          <li><b>Time Division Multiplexing (TDM):</b> Digital signal technique hai. Poori bandwidth har user ko milti hai lekin ek fixed time slot ke liye. Ye aage 2 type ka hota hai:
            <ul>
              <li><b>Synchronous TDM:</b> Har sender ko ek fixed time slot milta hai, chahe uske paas data ho ya na ho (bandwidth waste ho sakti hai).</li>
              <li><b>Asynchronous (Statistical) TDM:</b> Time slots dynamically assign hote hain sirf un devices ko jinke paas bhejne ke liye data hota hai (better efficiency).</li>
            </ul>
          </li>
        </ul>
        
        <pre>
[S1] ---\\
[S2] ----> [ MUX ] ===== High Capacity Link ===== [ DEMUX ] ---> [R1, R2, R3]
[S3] ---/
        </pre>
      `
    },
    {
      id: 'mac-protocols',
      name: 'MAC Protocols (ALOHA, CSMA)',
      theory: `
        <h3>Medium Access Control (MAC) Protocols</h3>
        <p>Jab multiple devices ek common medium (jaise ek single cable ya hawa) par data bhejna chahte hain, toh collisions se bachne ke liye MAC protocols (Data Link layer ka sublayer) ka use hota hai.</p>
        
        <h4>Random Access Protocols</h4>
        <p>Koi bhi device kisi bhi waqt transmit kar sakta hai, isliye collision ka chance hota hai.</p>
        
        <ul>
          <li><b>Pure ALOHA:</b> Jab bhi device ke paas data ho, turant bhej do. Agar collision hua, toh random time wait karke wapas bhejo. 
          <br><i>Max Efficiency: 18.4%</i></li>
          
          <li><b>Slotted ALOHA:</b> Time ko slots mein divide kiya gaya. Data sirf slot ke starting (beginning) mein bheja ja sakta hai. 
          <br><i>Max Efficiency: 36.8% (Pure ALOHA se double)</i></li>
          
          <li><b>CSMA (Carrier Sense Multiple Access):</b> "Listen before talk". Data bhejne se pehle medium ko check (sense) karo. Agar khali hai tabhi bhejo.</li>
          
          <li><b>CSMA/CD (Collision Detection):</b> Wired LANs (Ethernet) mein use hota hai. Bhejte waqt bhi sense karta hai, agar collision detect hua, toh bhejna rok kar ek 'jam signal' bhejta hai.</li>
          
          <li><b>CSMA/CA (Collision Avoidance):</b> Wireless LANs (Wi-Fi) mein use hota hai, kyunki wireless mein collision detect karna mushkil hai. Isme collision avoid karne ke liye RTS/CTS (Request To Send / Clear To Send) mechanism use hota hai.</li>
        </ul>
        
        <div class="formula-box">
          <div class="formula-title">📐 Key Point</div>
          Slotted ALOHA ki efficiency (36.8%) Pure ALOHA (18.4%) se exactly double hoti hai. Ye direct question exam mein aata hai.
        </div>
      `
    },
    {
      id: 'ieee-802',
      name: 'IEEE 802.x LAN Standards',
      theory: `
        <h3>IEEE 802 Standards</h3>
        <p>IEEE ne LAN aur MAN technologies ke liye kuch standards define kiye hain, jinhe 802 committee standards kehte hain.</p>
        
        <table class="comparison-table">
          <tr><th>Standard</th><th>Technology Name</th><th>Use / Features</th></tr>
          <tr><td><b>IEEE 802.1</b></td><td>Higher Layer LAN Protocols</td><td>Bridging, Spanning Tree Protocol (STP)</td></tr>
          <tr><td><b>IEEE 802.3</b></td><td>Ethernet</td><td>Wired LANs, CSMA/CD use karta hai.</td></tr>
          <tr><td><b>IEEE 802.4</b></td><td>Token Bus</td><td>Bus topology with Token passing (Obsolete)</td></tr>
          <tr><td><b>IEEE 802.5</b></td><td>Token Ring</td><td>Ring topology with Token passing (IBM LANs)</td></tr>
          <tr><td><b>IEEE 802.11</b></td><td>Wireless LAN (Wi-Fi)</td><td>Wireless, CSMA/CA use karta hai.</td></tr>
          <tr><td><b>IEEE 802.15</b></td><td>Wireless PAN (Bluetooth)</td><td>Short range personal networks (WPAN)</td></tr>
          <tr><td><b>IEEE 802.16</b></td><td>Broadband Wireless (WiMAX)</td><td>Long distance wireless networks</td></tr>
        </table>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Sabse zyada pooche jane wale standards hain <b>802.3 (Ethernet)</b> aur <b>802.11 (Wi-Fi)</b>.
        </div>
      `
    },
    {
      id: 'ip-protocol',
      name: 'IP Protocol, Addressing & Subnetting',
      theory: `
        <h3>Internet Protocol (IP)</h3>
        <p>Network layer par packet ki routing aur logical addressing ka kaam IP (Internet Protocol) karta hai. Ye connectionless aur unreliable (best-effort delivery) protocol hai.</p>
        
        <h4>IPv4 vs IPv6</h4>
        <ul>
          <li><b>IPv4:</b> 32-bit address hota hai, 4 octets mein divided (ex: 192.168.1.1). Total addresses = 2^32.</li>
          <li><b>IPv6:</b> 128-bit address hota hai, 8 groups of hexadecimal digits mein divided (taaki IP address shortage solve ho sake).</li>
        </ul>
        
        <h4>IPv4 Classes</h4>
        <p>IP addresses ko Class A, B, C, D aur E mein divide kiya gaya hai based on unki starting bit/range.</p>
        <table class="comparison-table">
          <tr><th>Class</th><th>First Octet Range</th><th>Default Subnet Mask</th><th>Use</th></tr>
          <tr><td><b>A</b></td><td>1 to 126</td><td>255.0.0.0</td><td>Very large networks</td></tr>
          <tr><td><b>B</b></td><td>128 to 191</td><td>255.255.0.0</td><td>Medium networks</td></tr>
          <tr><td><b>C</b></td><td>192 to 223</td><td>255.255.255.0</td><td>Small LANs</td></tr>
          <tr><td><b>D</b></td><td>224 to 239</td><td>N/A</td><td>Multicasting</td></tr>
          <tr><td><b>E</b></td><td>240 to 255</td><td>N/A</td><td>Research/Experimental</td></tr>
        </table>
        <i>Note: 127.x.x.x loopback (testing) ke liye reserve hota hai (e.g. 127.0.0.1).</i>
        
        <h4>Subnetting Calculation</h4>
        <p>Ek bade network ko chhote networks (subnets) mein todna subnetting kehlata hai.</p>
        <div class="formula-box">
          <div class="formula-title">📐 Formula</div>
          Number of usable hosts per subnet = <b>2<sup>n</sup> - 2</b> <br>
          (Jahan n = host bits. -2 isliye karte hain kyunki pehla address Network ID aur last address Broadcast ID hota hai).
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p><b>Question:</b> Agar subnet mask 255.255.255.224 hai (Class C mein /27), toh per subnet kitne hosts honge?</p>
        <p><b>Solution:</b> /27 ka matlab 27 bits network ki hain. Host bits (n) = 32 - 27 = 5 bits. <br/>
        Usable hosts = 2<sup>5</sup> - 2 = 32 - 2 = 30 hosts.</p>
      `
    },
    {
      id: 'transport-layer',
      name: 'TCP & UDP (Transport Layer)',
      theory: `
        <h3>Transport Layer Protocols</h3>
        <p>Transport layer do main protocols use karti hai: TCP aur UDP. Inka primary kaam port numbers (0 se 65535) ke through correct application tak data pahunchana (Process-to-Process delivery) hai.</p>
        
        <h4>1. TCP (Transmission Control Protocol)</h4>
        <ul>
          <li><b>Connection-Oriented:</b> Data bhejne se pehle connection establish hota hai (3-way handshake: SYN, SYN-ACK, ACK).</li>
          <li><b>Reliable:</b> Data delivery ki guarantee hoti hai. Error control, flow control (sliding window), aur acknowledgements use karta hai.</li>
          <li><b>Slow:</b> Overhead zyada hone ki wajah se thoda slow hota hai.</li>
          <li><b>Use case:</b> Web browsing (HTTP/HTTPS), Email (SMTP), File Transfer (FTP).</li>
        </ul>

        <h4>2. UDP (User Datagram Protocol)</h4>
        <ul>
          <li><b>Connectionless:</b> Bina connection banaye sidhe data packets (datagrams) bhej deta hai.</li>
          <li><b>Unreliable:</b> Koi acknowledgement nahi, koi guarantee nahi ki data pahuchega, packet loss ho sakta hai.</li>
          <li><b>Fast:</b> Overhead kam hai isliye bahut fast hai.</li>
          <li><b>Use case:</b> Video streaming, Online Gaming, Voice calls (VoIP), DNS queries.</li>
        </ul>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Agar question mein poochein "Which transport protocol is best for live video streaming?", to answer <b>UDP</b> hoga kyunki wahan speed zyada important hai reliability (thoda frame loss chalega) se.
        </div>
      `
    },
    {
      id: 'application-layer',
      name: 'Application Layer Protocols & DNS',
      theory: `
        <h3>Application Layer Protocols</h3>
        <p>Application layer user-facing applications ko network access deti hai. Yaha bahut saare protocols aur unke specific port numbers use hote hain jo exam ke liye bahut important hain.</p>
        
        <h4>Important Protocols & Port Numbers</h4>
        <table class="comparison-table">
          <tr><th>Protocol</th><th>Port</th><th>Full Form & Use</th></tr>
          <tr><td><b>FTP</b></td><td>20, 21</td><td>File Transfer Protocol (Files upload/download)</td></tr>
          <tr><td><b>SSH</b></td><td>22</td><td>Secure Shell (Secure remote login)</td></tr>
          <tr><td><b>Telnet</b></td><td>23</td><td>Telecommunication Network (Unsecure remote login)</td></tr>
          <tr><td><b>SMTP</b></td><td>25</td><td>Simple Mail Transfer Protocol (Email bhejne ke liye)</td></tr>
          <tr><td><b>DNS</b></td><td>53</td><td>Domain Name System</td></tr>
          <tr><td><b>HTTP</b></td><td>80</td><td>Hyper Text Transfer Protocol (Web browsing)</td></tr>
          <tr><td><b>POP3</b></td><td>110</td><td>Post Office Protocol v3 (Email receive karne ke liye)</td></tr>
          <tr><td><b>HTTPS</b></td><td>443</td><td>HTTP Secure (Encrypted web browsing)</td></tr>
        </table>
        
        <h4>DNS (Domain Name System)</h4>
        <p>DNS ko "Internet ka Phonebook" kaha jata hai. Ye human-readable domain names (jaise google.com) ko machine-readable IP addresses (jaise 142.250.190.46) mein convert (resolve) karta hai.</p>
        <p><b>Note:</b> DNS query by default Transport layer pe <b>UDP</b> port 53 ka use karti hai for speed, par agar response bada ho to TCP ka use karti hai.</p>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          SMTP sirf mail "Bhejne" (Push) ke liye hota hai. Mail "Receive" (Pull) karne ke liye POP3 ya IMAP ka use hota hai.
        </div>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'evolution-terminologies',
      question: 'Duniya ka sabse pehla packet switching network kaunsa tha?',
      options: ['ARPANET', 'NSFNET', 'INTERNET', 'USNET'],
      correct: 0,
      explanation: 'ARPANET (Advanced Research Projects Agency Network) 1969 mein banaya gaya tha aur ye pehla network tha jisne packet switching concept ka use kiya tha. Baaki baad mein aaye.'
    },
    {
      id: 2,
      topic: 'evolution-terminologies',
      question: 'Ek fully connected Mesh Topology jismein 8 nodes hain, usme kitne physical links ki zarurat hogi?',
      options: ['8', '28', '56', '64'],
      correct: 1,
      explanation: 'Mesh topology mein links ka formula n(n-1)/2 hota hai. Yahan n = 8 hai. To 8*(8-1)/2 = (8*7)/2 = 56/2 = 28 links chahiye honge.'
    },
    {
      id: 3,
      topic: 'evolution-terminologies',
      question: 'Kaunsi topology mein ek central controller ya hub hota hai jisse sabhi devices connected hote hain?',
      options: ['Bus Topology', 'Ring Topology', 'Star Topology', 'Mesh Topology'],
      correct: 2,
      explanation: 'Star Topology mein ek central device (hub ya switch) hota hai jo sabhi nodes ko connect karta hai. Bus mein ek backbone cable hoti hai, Ring mein circular chain, aur Mesh mein sab ek dusre se direct connected hote hain.'
    },
    {
      id: 4,
      topic: 'transmission-media',
      question: 'Fiber Optic Cable data transmit karne ke liye kis principle ka use karti hai?',
      options: ['Electromagnetic Interference', 'Total Internal Reflection', 'Dispersion', 'Refraction'],
      correct: 1,
      explanation: 'Fiber Optic cable light signals ka use karti hai jo Total Internal Reflection (TIR) ke principle par core ke andar travel karte hain, bina loss ke.'
    },
    {
      id: 5,
      topic: 'transmission-media',
      question: 'Inmein se kaunsa wireless transmission media solid objects (walls) ko cross nahi kar sakta?',
      options: ['Radio Waves', 'Microwaves', 'Infrared', 'Wi-Fi'],
      correct: 2,
      explanation: 'Infrared (IR) ek short-range communication wave hai (jaise TV remote) jo solid objects ya walls ko cross nahi kar sakti. Radio aur microwaves easily cross kar sakti hain.'
    },
    {
      id: 6,
      topic: 'network-devices',
      question: 'Kaunsa network device OSI model ki Network Layer (Layer 3) par kaam karta hai?',
      options: ['Hub', 'Switch', 'Router', 'Repeater'],
      correct: 2,
      explanation: 'Router Layer 3 (Network Layer) device hai jo IP addresses ke basis par packets ko route karta hai. Hub aur Repeater Layer 1 par, aur Switch Layer 2 par kaam karta hai.'
    },
    {
      id: 7,
      topic: 'network-devices',
      question: 'Ek 24-port Switch mein kitne collision domains aur broadcast domains hote hain (agar VLAN nahi banaya gaya ho)?',
      options: ['1 Collision Domain, 1 Broadcast Domain', '24 Collision Domains, 1 Broadcast Domain', '24 Collision Domains, 24 Broadcast Domains', '1 Collision Domain, 24 Broadcast Domains'],
      correct: 1,
      explanation: 'Switch ka har port ek alag collision domain banata hai (so 24 collision domains). Lekin default roop se ek switch single broadcast domain mein aata hai.'
    },
    {
      id: 8,
      topic: 'osi-tcpip',
      question: 'OSI model ki 7 layers ko sahi kram (bottom to top) mein lagayein:',
      options: [
        'Physical, Data Link, Network, Transport, Session, Presentation, Application',
        'Physical, Network, Data Link, Transport, Session, Presentation, Application',
        'Application, Presentation, Session, Transport, Network, Data Link, Physical',
        'Physical, Data Link, Network, Session, Transport, Presentation, Application'
      ],
      correct: 0,
      explanation: 'Sahi order (Layer 1 se Layer 7) hai: Physical -> Data Link -> Network -> Transport -> Session -> Presentation -> Application. Shortcut: Please Do Not Throw Sausage Pizza Away.'
    },
    {
      id: 9,
      topic: 'osi-tcpip',
      question: 'Data encryption, decryption aur compression OSI model ki kis layer ka function hai?',
      options: ['Application Layer', 'Presentation Layer', 'Session Layer', 'Transport Layer'],
      correct: 1,
      explanation: 'Presentation Layer (Layer 6) data ko present karne ka kaam karti hai, jisme formatting, encryption, decryption aur compression shamil hote hain.'
    },
    {
      id: 10,
      topic: 'osi-tcpip',
      question: 'Network layer par data ki unit ko kya kaha jata hai?',
      options: ['Frame', 'Packet', 'Segment', 'Bit'],
      correct: 1,
      explanation: 'Physical layer pe Bits, Data Link layer pe Frames, Network layer pe Packets, aur Transport layer pe Segments kaha jata hai.'
    },
    {
      id: 11,
      topic: 'multiplexing',
      question: 'Kaunsi multiplexing technique specifically Fiber Optic Cables ke liye use hoti hai?',
      options: ['TDM', 'FDM', 'WDM', 'CDMA'],
      correct: 2,
      explanation: 'Wavelength Division Multiplexing (WDM) fiber optics mein use hoti hai, jisme alag-alag data streams ko alag wavelength (color) ki light banakar ek hi cable mein bheja jata hai.'
    },
    {
      id: 12,
      topic: 'mac-protocols',
      question: 'Pure ALOHA ki maximum efficiency (throughput) kitni hoti hai?',
      options: ['18.4%', '36.8%', '50%', '100%'],
      correct: 0,
      explanation: 'Pure ALOHA ki max efficiency (1/2e) lagbhag 18.4% hoti hai. Jabki Slotted ALOHA ki max efficiency uski double (1/e) ya 36.8% hoti hai.'
    },
    {
      id: 13,
      topic: 'mac-protocols',
      question: 'Wi-Fi (Wireless LAN) mein collision ko handle karne ke liye kaunsa MAC protocol use kiya jata hai?',
      options: ['CSMA/CD', 'CSMA/CA', 'Slotted ALOHA', 'Token Passing'],
      correct: 1,
      explanation: 'Wireless network mein collision detect karna mushkil hai isliye Collision Avoidance (CA) use hota hai. CSMA/CD wired Ethernet mein use hota hai.'
    },
    {
      id: 14,
      topic: 'ieee-802',
      question: 'IEEE 802.3 standard kis networking technology se related hai?',
      options: ['Wi-Fi', 'Token Ring', 'Ethernet', 'Bluetooth'],
      correct: 2,
      explanation: 'IEEE 802.3 Ethernet (wired LAN) ka standard hai. 802.11 Wi-Fi ka, aur 802.15 Bluetooth (WPAN) ka standard hai.'
    },
    {
      id: 15,
      topic: 'ieee-802',
      question: 'Bluetooth ya Wireless Personal Area Network (WPAN) ke liye kaunsa IEEE standard define kiya gaya hai?',
      options: ['IEEE 802.11', 'IEEE 802.15', 'IEEE 802.16', 'IEEE 802.3'],
      correct: 1,
      explanation: 'IEEE 802.15 WPAN (Bluetooth) ke liye use hota hai. 802.16 WiMAX ke liye aur 802.11 Wi-Fi ke liye hota hai.'
    },
    {
      id: 16,
      topic: 'ip-protocol',
      question: 'IPv6 address ki length (size) kitne bits ki hoti hai?',
      options: ['32 bits', '64 bits', '128 bits', '256 bits'],
      correct: 2,
      explanation: 'IPv4 ki length 32 bits hoti hai, jabki naye IPv6 ki length 128 bits hoti hai jo hexadecimal format mein likhi jati hai.'
    },
    {
      id: 17,
      topic: 'ip-protocol',
      question: 'Ek Class C IP address ka default subnet mask kya hota hai?',
      options: ['255.0.0.0', '255.255.0.0', '255.255.255.0', '255.255.255.255'],
      correct: 2,
      explanation: 'Class C mein pehle 3 octets Network IDs hote hain, isliye iska default mask 255.255.255.0 hota hai. Class A ka 255.0.0.0 aur Class B ka 255.255.0.0 hota hai.'
    },
    {
      id: 18,
      topic: 'ip-protocol',
      question: 'IP address 127.0.0.1 kis purpose ke liye reserve rakha gaya hai?',
      options: ['Multicasting', 'Broadcasting', 'Loopback Testing', 'Default Gateway'],
      correct: 2,
      explanation: '127.x.x.x network Localhost ya Loopback testing (NIC card testing) ke liye reserve hota hai. Iska data computer se bahar nahi jata.'
    },
    {
      id: 19,
      topic: 'ip-protocol',
      question: 'Agar aapke subnet mein host bit ki sankhya (n) 4 hai, to aapko kitne usable host addresses milenge?',
      options: ['16', '14', '12', '8'],
      correct: 1,
      explanation: 'Usable hosts ka formula 2^n - 2 hota hai. Yahan n = 4. To 2^4 = 16. Usme se 2 minus karenge (Network ID aur Broadcast ID ke liye). Result = 14 hosts.'
    },
    {
      id: 20,
      topic: 'transport-layer',
      question: 'Video streaming ya online gaming jaisi applications jahan speed important hoti hai wahan kaunsa protocol prefer kiya jata hai?',
      options: ['TCP', 'UDP', 'HTTP', 'FTP'],
      correct: 1,
      explanation: 'UDP ek connectionless aur fast protocol hai jisme overhead kam hota hai. Live streaming mein thoda packet loss chal sakta hai, but delay (TCP ka handshake delay) nahi chal sakta, isliye UDP use hota hai.'
    },
    {
      id: 21,
      topic: 'transport-layer',
      question: 'TCP protocol mein connection establish karne ke liye kaunsa mechanism use hota hai?',
      options: ['2-way handshake', '3-way handshake', 'Sliding Window', 'Token Passing'],
      correct: 1,
      explanation: 'TCP ek reliable connection banane ke liye 3-way handshake (SYN, SYN-ACK, ACK) use karta hai communication shuru karne se pehle.'
    },
    {
      id: 22,
      topic: 'application-layer',
      question: 'DNS (Domain Name System) server commonly kaunsa port number use karta hai?',
      options: ['Port 80', 'Port 21', 'Port 53', 'Port 25'],
      correct: 2,
      explanation: 'DNS by default Port 53 ka use karta hai. Port 80 HTTP ke liye, Port 21 FTP ke liye aur Port 25 SMTP ke liye hota hai.'
    },
    {
      id: 23,
      topic: 'application-layer',
      question: 'Website URLs (domain names) ko unke IP address mein convert karne ka kaam kaunsa system karta hai?',
      options: ['DHCP', 'DNS', 'ARP', 'NAT'],
      correct: 1,
      explanation: 'DNS (Domain Name System) ek phonebook ki tarah kaam karta hai jo readable domain (jaise google.com) ko IP address (jaise 142.250.x.x) mein map karta hai. DHCP IP assign karta hai, aur ARP IP se MAC nikalta hai.'
    },
    {
      id: 24,
      topic: 'network-devices',
      question: 'Alag-alag protocols aur architecture wale do completely different networks ko connect karne ke liye kis device ka use hota hai?',
      options: ['Bridge', 'Switch', 'Router', 'Gateway'],
      correct: 3,
      explanation: 'Gateway ek protocol converter ke roop mein kaam karta hai aur OSI model ki sari layers par operate kar sakta hai. Ye dissimilar networks ko connect karta hai.'
    },
    {
      id: 25,
      topic: 'application-layer',
      question: 'Email bhejne (Push karne) ke liye inmein se kis protocol ka use hota hai?',
      options: ['POP3', 'IMAP', 'SMTP', 'FTP'],
      correct: 2,
      explanation: 'SMTP (Simple Mail Transfer Protocol) ka use email send (push) karne ke liye hota hai. Email server se receive (pull) karne ke liye POP3 ya IMAP ka use hota hai.'
    },
    {
      id: 26,
      topic: 'mac-protocols',
      question: 'MAC Address (Media Access Control address) kitne bits ka hota hai?',
      options: ['32 bits', '48 bits', '64 bits', '128 bits'],
      correct: 1,
      explanation: 'MAC address 48 bits (ya 6 bytes) ka physical address hota hai jo NIC (Network Interface Card) par hardcoded hota hai. Ye hexadecimal format mein likha jata hai.'
    },
    {
      id: 27,
      topic: 'ip-protocol',
      question: 'Class D IP address ka primary use kya hai?',
      options: ['Small LANs', 'Multicasting', 'Loopback testing', 'Experimental use'],
      correct: 1,
      explanation: 'Class D addresses (224.0.0.0 se 239.255.255.255 tak) ko Multicasting ke liye reserve rakha gaya hai (ek host se multiple specific hosts ko data bhejna).'
    }
  ]
};

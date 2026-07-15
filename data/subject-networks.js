window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['networks'] = {
  id: 'networks',
  name: 'Computer Networks',
  icon: '🌐',
  description: 'Complete Computer Networks syllabus covering OSI, TCP/IP, Routing, Subnetting, MAC protocols, and application layers for RSSB Computer Instructor Exam.',
  topics: [
    {
      id: 'evolution-terminologies',
      name: 'Evolution & Network Terminologies',
      theory: `
        <h3>1. Evolution of Computer Networks</h3>
        <p>Computer Networks ka itihas kaafi purana hai. Network ka basic matlab hai do ya do se zyada computers ko aapas mein connect karna taaki data aur resources share kiye ja sakein.</p>
        
        <h4>ARPANET (Advanced Research Projects Agency Network)</h4>
        <p>Internet ki shuruaat <strong>1969</strong> mein ARPANET se hui thi. Ise US Department of Defense ne banaya tha. ARPANET pehli baar packet switching ka use karta tha. Pehla message "LO" bheja gaya tha (user "LOGIN" type karna chahta tha, par system crash ho gaya).</p>

        <h4>NSFNET (National Science Foundation Network)</h4>
        <p>1986 mein NSFNET aaya jisne ARPANET se zyada speed aur capacity di. Ise academic aur research institutions ke liye banaya gaya tha. Jab NSFNET aur ARPANET ko combine kiya gaya tab <strong>Internet</strong> (Interconnected Network) ka janam hua.</p>

        <h3>2. Basic Network Terminologies</h3>
        <p>Exam ke liye network parameters ko samajhna bahut zaroori hai.</p>

        <h4>A. Bandwidth</h4>
        <p>Bandwidth ka matlab hai network link ki "maximum capacity". Yeh measure karta hai ki ek second mein maximum kitna data transfer ho sakta hai. Iski unit <strong>Bits Per Second (bps)</strong> hoti hai.</p>
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Digital bandwidth ko bps (bits/sec) mein napte hain, jabki analog bandwidth ko Hertz (Hz) mein napte hain.
        </div>

        <h4>B. Throughput</h4>
        <p>Bandwidth theoretical capacity hoti hai, jabki <strong>Throughput</strong> actual data transfer rate hai. Throughput hamesha Bandwidth se kam ya barabar hota hai, kyunki network mein collisions, overhead, aur interference hote hain.</p>
        <div class="formula-box">
          <div class="formula-title">📐 Throughput vs Bandwidth</div>
          Throughput ≤ Bandwidth
        </div>

        <h4>C. Latency (Delay)</h4>
        <p>Source se destination tak packet pahunchne mein jo total time lagta hai, use Latency kehte hain. Iske 4 main components hote hain:</p>
        <ol>
          <li><strong>Transmission Delay:</strong> Packet ko link par push karne mein laga time.</li>
          <li><strong>Propagation Delay:</strong> Signal ko link ke through travel karne mein laga time.</li>
          <li><strong>Queuing Delay:</strong> Router ke buffer mein wait karne ka time.</li>
          <li><strong>Processing Delay:</strong> Router dwara packet header check karne aur route decide karne ka time.</li>
        </ol>

        <div class="formula-box">
          <div class="formula-title">📐 Delay Formulas</div>
          <strong>Transmission Delay (Tt)</strong> = Data Size (L) / Bandwidth (B)<br>
          <strong>Propagation Delay (Tp)</strong> = Distance (d) / Velocity of signal (v)<br>
          <strong>Total Latency</strong> = Tt + Tp + Tq + Tproc
        </div>

        <h4>D. Jitter</h4>
        <p>Jitter ka matlab hai "Variation in delay". Agar packets alag-alag delay ke sath destination par pahunch rahe hain, toh use jitter kehte hain. Voice aur Video calls ke liye Jitter minimum hona chahiye, warna aawaz kat-kat ke aayegi.</p>

        <h4>Example (Solved): Delay Calculation</h4>
        <p><strong>Question:</strong> Ek packet ka size 1000 Bytes hai. Bandwidth 1 Mbps hai. Distance 2000 km hai, aur speed of light in link 2 x 10^8 m/s hai. Total delay nikaliye (ignore queue/processing).</p>
        <p><strong>Step 1:</strong> Transmission Delay (Tt)<br>
        L = 1000 Bytes = 8000 bits.<br>
        B = 1 Mbps = 10^6 bps.<br>
        Tt = 8000 / 10^6 = 0.008 sec = 8 ms.</p>
        
        <p><strong>Step 2:</strong> Propagation Delay (Tp)<br>
        d = 2000 km = 2 x 10^6 m.<br>
        v = 2 x 10^8 m/s.<br>
        Tp = (2 x 10^6) / (2 x 10^8) = 0.01 sec = 10 ms.</p>

        <p><strong>Answer:</strong> Total Delay = 8 ms + 10 ms = 18 ms.</p>
      `
    },
    {
      id: 'transmission-devices',
      name: 'Transmission Media & Network Devices',
      theory: `
        <h3>1. Transmission Media</h3>
        <p>Data ko ek jagah se dusri jagah bhejne ke liye physical path ko transmission media kehte hain. Yeh 2 type ke hote hain:</p>

        <h4>A. Guided (Wired) Media</h4>
        <p>Yahan signal ek physical wire ke andar guide hokar chalta hai.</p>
        <ul>
          <li><strong>Twisted Pair Cable:</strong> Dono wires ko ek dusre ke sath twist kiya jata hai taaki <em>Crosstalk (electromagnetic interference)</em> kam ho. Iske do types hain: UTP (Unshielded) aur STP (Shielded - extra foil layer).</li>
          <li><strong>Coaxial Cable:</strong> Isme ek central copper conductor hota hai, jiske upar insulator, phir metal shield, aur plastic cover hota hai. TV cables aur early Ethernet mein use hota tha.</li>
          <li><strong>Fiber Optic Cable:</strong> Ye light pulses ke through data bhejta hai. Yeh <strong>Total Internal Reflection (TIR)</strong> ke principle par kaam karta hai. Ye sabse fast aur secure media hai. Types: Single-mode (long distance) aur Multi-mode (short distance).</li>
        </ul>

        <h4>B. Unguided (Wireless) Media</h4>
        <p>Isme data air ya vacuum ke through electromagnetic waves ke form mein travel karta hai.</p>
        <ul>
          <li><strong>Radio Waves:</strong> Omnidirectional (har disha mein failti hain), deewar cross kar sakti hain. Example: FM Radio, AM.</li>
          <li><strong>Microwaves:</strong> Unidirectional (line-of-sight required), deewar asani se cross nahi kar sakti. Example: Satellite communication, Cellular phones.</li>
          <li><strong>Infrared:</strong> Short range, line of sight strict hai, aur solid objects cross nahi kar sakti. Example: TV Remote.</li>
        </ul>

        <h3>2. Network Devices</h3>
        <p>Network devices devices ko interconnect karne ka kaam aate hain. Har device ek specific OSI layer par kaam karta hai.</p>

        <table class="comparison-table">
          <tr>
            <th>Device</th>
            <th>OSI Layer</th>
            <th>Description & Features</th>
          </tr>
          <tr>
            <td>Repeater</td>
            <td>Layer 1 (Physical)</td>
            <td>Weak signal ko regenerate/amplify karta hai taaki distance badhayi ja sake. Filter nahi karta.</td>
          </tr>
          <tr>
            <td>Hub</td>
            <td>Layer 1 (Physical)</td>
            <td>Multiport repeater. Ye broadcast device hai. Isme collision chances bahut high hote hain.</td>
          </tr>
          <tr>
            <td>Bridge</td>
            <td>Layer 2 (Data Link)</td>
            <td>MAC address padhta hai aur traffic filter karta hai. Collision domain ko divide karta hai.</td>
          </tr>
          <tr>
            <td>Switch</td>
            <td>Layer 2 (Data Link)</td>
            <td>Multiport bridge. Ye MAC table (CAM table) maintain karta hai. Unicast transmission karta hai.</td>
          </tr>
          <tr>
            <td>Router</td>
            <td>Layer 3 (Network)</td>
            <td>IP address ke basis par packet route karta hai. Broadcast domain ko divide karta hai.</td>
          </tr>
          <tr>
            <td>Gateway</td>
            <td>All Layers (Application)</td>
            <td>Do completely different architecture wale networks ko jodne ka kaam karta hai. Protocol converter bhi kehte hain.</td>
          </tr>
        </table>

        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap: Collision vs Broadcast Domain</div>
          <p><strong>Hub:</strong> 1 Collision Domain, 1 Broadcast Domain.<br>
          <strong>Switch (N ports):</strong> N Collision Domains, 1 Broadcast Domain.<br>
          <strong>Router (N ports):</strong> N Collision Domains, N Broadcast Domains.</p>
        </div>
      `
    },
    {
      id: 'osi-tcp-ip',
      name: 'OSI Model & TCP/IP Model',
      theory: `
        <h3>1. The OSI Model (Open Systems Interconnection)</h3>
        <p>ISO ne 1984 mein OSI model banaya. Yeh ek 7-layer theoretical reference model hai. Ise yaad rakhne ka tareeka: <strong>A</strong>ll <strong>P</strong>eople <strong>S</strong>eem <strong>T</strong>o <strong>N</strong>eed <strong>D</strong>ata <strong>P</strong>rocessing (Top to Bottom: Application, Presentation, Session, Transport, Network, Data Link, Physical).</p>

        <h4>Layer 1: Physical Layer</h4>
        <ul>
          <li><strong>Unit of Data:</strong> Bits</li>
          <li><strong>Role:</strong> Raw bits ko physical medium (cable/air) par transmit karna.</li>
          <li><strong>Functions:</strong> Line coding, Modulation, Synchronization of bits, Topology define karna.</li>
        </ul>

        <h4>Layer 2: Data Link Layer (DLL)</h4>
        <ul>
          <li><strong>Unit of Data:</strong> Frames</li>
          <li><strong>Role:</strong> Node-to-node delivery ensure karna.</li>
          <li><strong>Functions:</strong> Framing, Physical addressing (MAC address), Error control (CRC/Checksum), Flow control, Access control (CSMA/CD).</li>
          <li><strong>Sublayers:</strong> MAC (Media Access Control) & LLC (Logical Link Control).</li>
        </ul>

        <h4>Layer 3: Network Layer</h4>
        <ul>
          <li><strong>Unit of Data:</strong> Packets / Datagrams</li>
          <li><strong>Role:</strong> Host-to-host delivery aur best path selection.</li>
          <li><strong>Functions:</strong> Logical addressing (IP address), Routing, Fragmentation.</li>
        </ul>

        <h4>Layer 4: Transport Layer</h4>
        <ul>
          <li><strong>Unit of Data:</strong> Segments (TCP) / User Datagrams (UDP)</li>
          <li><strong>Role:</strong> Process-to-process delivery (Port numbers). "Heart of OSI".</li>
          <li><strong>Functions:</strong> Segmentation, Connection multiplexing, Reliable delivery (TCP), Flow & Congestion control.</li>
        </ul>

        <h4>Layer 5: Session Layer</h4>
        <ul>
          <li><strong>Role:</strong> Connections ko establish, maintain, aur terminate karna.</li>
          <li><strong>Functions:</strong> Dialog control (Half/Full duplex), Synchronization (Checkpoints add karna taaki crash hone par resume ho sake).</li>
        </ul>

        <h4>Layer 6: Presentation Layer</h4>
        <ul>
          <li><strong>Role:</strong> Data ka syntax aur semantics handle karna. "Syntax Layer".</li>
          <li><strong>Functions:</strong> Translation (ASCII to EBCDIC), Encryption/Decryption, Compression.</li>
        </ul>

        <h4>Layer 7: Application Layer</h4>
        <ul>
          <li><strong>Role:</strong> User ke liye network services provide karna.</li>
          <li><strong>Functions:</strong> File transfer (FTP), Email (SMTP), Web browsing (HTTP).</li>
        </ul>

        <h3>2. TCP/IP Model</h3>
        <p>TCP/IP practical model hai jo Internet mein actually use hota hai. Pehle isme 4 layers thi, par modern version (Forouzan) mein 5 layers hain.</p>
        
        <table class="comparison-table">
          <tr>
            <th>OSI Layer</th>
            <th>TCP/IP Layer (Original 4-Layer)</th>
            <th>Protocols Used</th>
          </tr>
          <tr>
            <td>Application, Presentation, Session</td>
            <td>Application Layer</td>
            <td>HTTP, FTP, SMTP, DNS, DHCP</td>
          </tr>
          <tr>
            <td>Transport</td>
            <td>Transport Layer</td>
            <td>TCP, UDP</td>
          </tr>
          <tr>
            <td>Network</td>
            <td>Internet Layer</td>
            <td>IP, ICMP, ARP, OSPF</td>
          </tr>
          <tr>
            <td>Data Link, Physical</td>
            <td>Network Access (Link) Layer</td>
            <td>Ethernet, Wi-Fi, PPP</td>
          </tr>
        </table>

        <div class="tip-box">
          <div class="tip-title">💡 Encapsulation & Decapsulation</div>
          Sender side par data upar se neeche aata hai aur har layer apna <strong>Header</strong> add karti hai (Encapsulation). Receiver side par data neeche se upar jata hai aur headers remove hote hain (Decapsulation).
        </div>
      `
    },
    {
      id: 'multiplexing-mac',
      name: 'Multiplexing & MAC Protocols',
      theory: `
        <h3>1. Multiplexing Techniques</h3>
        <p>Jab medium ki bandwidth ek single signal ki zarurat se zyada hoti hai, toh medium ko multiple signals ke beech share kiya jata hai. Ise Multiplexing kehte hain. Device ko <strong>MUX</strong> (Multiplexer) kehte hain.</p>

        <ul>
          <li><strong>FDM (Frequency Division Multiplexing):</strong> Analog technique. Total bandwidth ko chote-chote frequency bands mein divide kiya jata hai. Guards bands diye jate hain taaki interference na ho. Ex: Radio, TV broadcasting.</li>
          <li><strong>WDM (Wavelength Division Multiplexing):</strong> Ye FDM ka hi form hai par <strong>Fiber Optic cables</strong> ke liye. Alag-alag wavelengths (colors) ki light ko ek sath bheja jata hai.</li>
          <li><strong>TDM (Time Division Multiplexing):</strong> Digital technique. Pura bandwidth ek signal ko milta hai, par fixed "Time Slots" ke liye.
            <ul>
              <li><em>Synchronous TDM:</em> Har sender ko fixed time slot milta hai, chahe uske paas data ho ya nahi. (Wastage of bandwidth).</li>
              <li><em>Statistical (Asynchronous) TDM:</em> Time slots sirf unko milte hain jinke paas data hai. Dynamic allocation hoti hai.</li>
            </ul>
          </li>
          <li><strong>CDM (Code Division Multiplexing):</strong> Sabhi users ek hi time aur ek hi frequency use karte hain, par unhe unique "Orthogonal Codes" diye jate hain. Ex: 3G CDMA networks.</li>
        </ul>

        <h3>2. Multiple Access (MAC) Protocols</h3>
        <p>Jab multiple nodes ek common channel share karte hain, toh collision hota hai. Is collision ko handle karne ke protocols Data Link Layer ke MAC sublayer mein aate hain.</p>

        <h4>A. ALOHA Protocol</h4>
        <p>1970s mein University of Hawaii ne banaya tha.</p>
        <ul>
          <li><strong>Pure ALOHA:</strong> Koi bhi station kabhi bhi data bhej sakta hai. Agar collision hua, toh random time wait karke dobara bhejenge. <em>Max Efficiency = 18.4%</em>. Vulnerable time = 2 * Tt.</li>
          <li><strong>Slotted ALOHA:</strong> Time ko slots mein divide kar diya. Station sirf slot ki shuruaat mein hi data bhej sakta hai. Collision kam ho gaya. <em>Max Efficiency = 36.8%</em>. Vulnerable time = Tt.</li>
        </ul>

        <h4>B. CSMA (Carrier Sense Multiple Access)</h4>
        <p>"Sense before transmit". Station pehle medium check karta hai ki koi aur toh nahi bhej raha.</p>
        <ul>
          <li><strong>1-persistent:</strong> Medium busy hai toh continuously sense karta rahega. Jaise hi idle hoga, turant 100% probability ke sath bhej dega. (Highest chance of collision).</li>
          <li><strong>Non-persistent:</strong> Medium busy hai toh random time ke liye so jayega, phir check karega. (Efficiency acchi, par delay zyada).</li>
          <li><strong>p-persistent:</strong> (Slotted channels mein). Idle hone par 'p' probability ke sath bhejega, '1-p' probability se next slot ka wait karega.</li>
        </ul>

        <h4>C. CSMA/CD (Collision Detection)</h4>
        <p>Ethernet (LAN) mein use hota hai. Agar bhejte waqt collision detect hua, toh transmission rok diya jata hai aur <strong>Jam Signal</strong> bheja jata hai. Station random backoff algorithm use karke wait karta hai.</p>
        <div class="formula-box">
          <div class="formula-title">📐 CSMA/CD Constraint</div>
          Collision detect karne ke liye Sender ko utni der tak frame bhejna padega jitni der mein signal jakar wapas aaye (Round Trip Time).<br>
          <strong>Transmission Time (Tt) ≥ 2 * Propagation Time (Tp)</strong><br>
          Minimum Frame Size (L) = 2 * Tp * Bandwidth
        </div>

        <h4>D. CSMA/CA (Collision Avoidance)</h4>
        <p>Wireless networks (Wi-Fi 802.11) mein CSMA/CD kaam nahi karta (Hidden Terminal Problem ki wajah se). Isliye hum Collision Avoidance use karte hain (RTS/CTS mechanism). Station pehle Request To Send (RTS) bhejta hai, aur Access Point Clear To Send (CTS) bhejta hai, uske baad data bheja jata hai.</p>
      `
    },
    {
      id: 'lan-technologies',
      name: 'LAN Technologies (Ethernet, WiFi)',
      theory: `
        <h3>1. Ethernet (IEEE 802.3)</h3>
        <p>Ethernet sabse popular LAN technology hai. Yeh Bus aur Star topology use karti hai aur CSMA/CD MAC protocol par based hai.</p>

        <h4>Ethernet Frame Format</h4>
        <ul>
          <li><strong>Preamble (7 Bytes):</strong> Synchronization ke liye use hota hai (10101010 pattern).</li>
          <li><strong>SFD - Start Frame Delimiter (1 Byte):</strong> Frame ki shuruaat batata hai (10101011).</li>
          <li><strong>Destination MAC (6 Bytes):</strong> Receiver ka hardware address.</li>
          <li><strong>Source MAC (6 Bytes):</strong> Sender ka hardware address.</li>
          <li><strong>Type/Length (2 Bytes):</strong> Batata hai ki upper layer protocol konsa hai (e.g., IPv4 ya IPv6).</li>
          <li><strong>Data Payload (46 to 1500 Bytes):</strong> Actual data. Agar 46 bytes se kam hai, toh 'padding' add ki jati hai taaki minimum 46 bytes ban jaye (jo minimum frame size 64 bytes ke constraint ko pura kare).</li>
          <li><strong>FCS - Frame Check Sequence (4 Bytes):</strong> CRC-32 (Cyclic Redundancy Check) error detection ke liye.</li>
        </ul>
        <div class="warning-box">
          <div class="tip-title">⚠️ Size Limits</div>
          Minimum Ethernet Frame Size = 64 Bytes (without Preamble/SFD).<br>
          Maximum Ethernet Frame Size = 1518 Bytes (without Preamble/SFD).
        </div>

        <h3>2. Token Ring (IEEE 802.5)</h3>
        <p>Is topology mein stations ring mein connected hote hain. Ek special frame jise <strong>Token</strong> kehte hain, ring mein ghoomta rehta hai.</p>
        <p>Jis station ko data bhejna hota hai, wo Token capture karta hai, apna data attach karta hai aur aage bhejta hai. Collision ka koi chance nahi hota (Collision-free protocol). Ise IBM ne develop kiya tha.</p>

        <h3>3. Wireless LAN / Wi-Fi (IEEE 802.11)</h3>
        <p>Wi-Fi radio waves ka use karta hai. Iska MAC protocol CSMA/CA hai.</p>
        <h4>Wi-Fi Architecture</h4>
        <ul>
          <li><strong>Station (STA):</strong> Koi bhi wireless device (laptop, phone).</li>
          <li><strong>BSS (Basic Service Set):</strong> Ek Access Point (AP) aur usse connected sabhi STAs ka group. (Jaise aapke ghar ka router).</li>
          <li><strong>ESS (Extended Service Set):</strong> Jab multiple BSS ko ek wired network (Distribution System) se joda jata hai taaki bada area cover ho (Jaise college campus Wi-Fi).</li>
        </ul>
      `
    },
    {
      id: 'ip-routing',
      name: 'IP Protocol, Subnetting & Routing',
      theory: `
        <h3>1. IPv4 Addressing</h3>
        <p>IPv4 addresses 32-bit long hote hain. Inhe 4 octets mein likha jata hai (Dot-decimal notation). Example: 192.168.1.1</p>
        
        <h4>Classful Addressing</h4>
        <table class="comparison-table">
          <tr><th>Class</th><th>Leading Bits</th><th>Range (1st Octet)</th><th>Default Subnet Mask</th><th>Use</th></tr>
          <tr><td>Class A</td><td>0...</td><td>0 - 127 (1-126 usable)</td><td>255.0.0.0 (/8)</td><td>Very Large Networks</td></tr>
          <tr><td>Class B</td><td>10...</td><td>128 - 191</td><td>255.255.0.0 (/16)</td><td>Medium Networks</td></tr>
          <tr><td>Class C</td><td>110...</td><td>192 - 223</td><td>255.255.255.0 (/24)</td><td>Small Networks (LAN)</td></tr>
          <tr><td>Class D</td><td>1110...</td><td>224 - 239</td><td>N/A</td><td>Multicasting</td></tr>
          <tr><td>Class E</td><td>1111...</td><td>240 - 255</td><td>N/A</td><td>Research / Military</td></tr>
        </table>
        
        <div class="tip-box">
          <div class="tip-title">💡 Special IPs</div>
          <strong>127.x.x.x:</strong> Loopback address (localhost), testing ke liye.<br>
          <strong>0.0.0.0:</strong> Default route.<br>
          <strong>255.255.255.255:</strong> Limited Broadcast address.
        </div>

        <h3>2. Subnetting & CIDR</h3>
        <p>Subnetting ka matlab hai ek bade network ko chote-chote sub-networks mein todna. Iske liye hum Host bits ko "borrow" karke Network bits banate hain.</p>
        
        <h4>Classless Inter-Domain Routing (CIDR)</h4>
        <p>Ise "Slash Notation" bhi kehte hain, jaise 192.168.1.0/26. Yahan /26 ka matlab hai ki 26 bits Network+Subnet ke liye hain, aur remaining 32-26 = 6 bits Host ke liye hain.</p>
        
        <h4>Example: Subnet Calculation</h4>
        <p><strong>Q: 192.168.1.0/26 network mein kitne subnets aur valid hosts per subnet honge?</strong></p>
        <p><strong>Step 1:</strong> Ye Class C address hai. Default bits = 24. Yahan /26 hai. Borrowed bits = 26 - 24 = 2 bits.<br>
        Number of Subnets = 2^2 = 4 subnets.</p>
        <p><strong>Step 2:</strong> Remaining Host bits (h) = 32 - 26 = 6 bits.<br>
        Total Hosts per subnet = 2^6 = 64.<br>
        <strong>Valid Hosts per subnet = 2^h - 2</strong> = 64 - 2 = 62 hosts. (Pehla IP Network ID aur aakhiri IP Broadcast ID hota hai).</p>

        <h3>3. IPv6</h3>
        <p>IPv4 addresses khatam ho gaye the, isliye IPv6 aaya. Yeh <strong>128-bit</strong> ka address hai, jise Hexadecimal format mein likha jata hai, separated by colons (:).</p>
        <p>Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334</p>
        <p>Isme IPSec in-built hota hai, aur header fixed size (40 Bytes) ka hota hai (Fragmentation routers nahi karte, sirf source karta hai).</p>

        <h3>4. Routing Protocols (Network Layer)</h3>
        <p>Routers best path find karne ke liye algorithms use karte hain.</p>
        <ul>
          <li><strong>Distance Vector Routing (DVR):</strong> Yeh <strong>Bellman-Ford Algorithm</strong> par based hai. Har router apna pura routing table sirf apne "neighbors" ko bhejta hai. RIP (Routing Information Protocol) iska example hai. Isme <em>Count-to-Infinity problem</em> aati hai (routing loop).</li>
          <li><strong>Link State Routing (LSR):</strong> Yeh <strong>Dijkstra’s Algorithm</strong> par based hai. Har router apne neighbors ki link-state info pure network mein "flood" karta hai. Har router ke paas network ka pura map hota hai, phir wo shortest path nikalta hai. OSPF (Open Shortest Path First) iska example hai. Isme loops ki problem nahi hoti.</li>
        </ul>
      `
    },
    {
      id: 'tcp-udp',
      name: 'Transport Layer: TCP & UDP',
      theory: `
        <h3>1. TCP (Transmission Control Protocol)</h3>
        <p>TCP ek connection-oriented, reliable, aur byte-stream protocol hai.</p>
        
        <h4>TCP Features:</h4>
        <ul>
          <li><strong>Reliability:</strong> Har packet ka acknowledgment (ACK) aata hai. Agar ACK nahi aaya, toh packet retransmit hota hai.</li>
          <li><strong>3-Way Handshake:</strong> Connection establish karne ka tarika.
            <ol>
              <li>Client -> Server: SYN (Synchronize) bhejta hai.</li>
              <li>Server -> Client: SYN + ACK bhejta hai.</li>
              <li>Client -> Server: ACK bhejta hai. Connection established!</li>
            </ol>
          </li>
          <li><strong>TCP Header:</strong> Standard size 20 Bytes, Max size 60 Bytes. Source Port (16-bit) aur Destination Port (16-bit) hote hain.</li>
        </ul>

        <h4>Flow Control vs Congestion Control</h4>
        <p><strong>Flow Control:</strong> Receiver sender ko bolta hai ki "Dheere bhejo, meri capacity full ho rahi hai". TCP <em>Sliding Window Protocol</em> use karta hai (Window Size header field me jata hai).</p>
        <p><strong>Congestion Control:</strong> Network (routers) bolta hai ki "Traffic zyada hai, dheere bhejo". TCP 3 phases use karta hai:
          <ol>
            <li><em>Slow Start:</em> Window size exponentially badhta hai (1, 2, 4, 8...).</li>
            <li><em>Congestion Avoidance (AIMD):</em> Threshold aane ke baad linearly badhta hai (Add 1).</li>
            <li><em>Congestion Detection:</em> Packet drop hone par window size aadha ya reset (1) ho jata hai.</li>
          </ol>
        </p>

        <h3>2. UDP (User Datagram Protocol)</h3>
        <p>UDP connectionless aur unreliable protocol hai. Isme na handshake hota hai, na ACK aati hai. Data bhej diya, pahuncha ya nahi, UDP ko farak nahi padta.</p>
        
        <h4>UDP Features:</h4>
        <ul>
          <li><strong>Speed:</strong> Kyunki overhead nahi hai, ye TCP se fast hai.</li>
          <li><strong>UDP Header:</strong> Sirf 8 Bytes ka hota hai. (Source port, Dest port, Length, Checksum).</li>
          <li><strong>Use cases:</strong> Video streaming, VoIP, Online Gaming, DNS queries (Jahan speed accuracy se zyada important hai).</li>
        </ul>

        <table class="comparison-table">
          <tr><th>Feature</th><th>TCP</th><th>UDP</th></tr>
          <tr><td>Connection Type</td><td>Connection-Oriented</td><td>Connectionless</td></tr>
          <tr><td>Reliability</td><td>High (Guaranteed Delivery)</td><td>Low (Best Effort)</td></tr>
          <tr><td>Header Size</td><td>20-60 Bytes</td><td>8 Bytes</td></tr>
          <tr><td>Overhead & Speed</td><td>High Overhead, Slower</td><td>Low Overhead, Faster</td></tr>
          <tr><td>Usage</td><td>HTTP, FTP, SMTP, SSH</td><td>DNS, DHCP, VoIP, TFTP</td></tr>
        </table>
      `
    },
    {
      id: 'app-dns',
      name: 'Application Layer & DNS',
      theory: `
        <h3>1. DNS (Domain Name System)</h3>
        <p>Humans ke liye IP addresses (142.250.192.46) yaad rakhna mushkil hai. Isliye hum Domain Names (google.com) use karte hain. DNS ka kaam hai <strong>Domain name ko IP address mein translate karna</strong>. Isliye ise "Phonebook of the Internet" bhi kehte hain.</p>
        
        <h4>DNS Architecture (Hierarchy)</h4>
        <p>DNS ek inverted tree structure follow karta hai.</p>
        <ul>
          <li><strong>Root Server:</strong> Tree ka top level. Poore world mein 13 logical root servers hain (A to M). Ye top-level domains ke addresses jante hain.</li>
          <li><strong>Top-Level Domain (TLD) Server:</strong> Ye extensions ko handle karte hain. Jaise .com, .org, .edu, .in. Har extension ka apna TLD server hota hai.</li>
          <li><strong>Authoritative Name Server:</strong> Ye actual server hai jiske paas us domain (e.g., example.com) ka final IP address ka record (A Record) hota hai.</li>
        </ul>

        <h4>DNS Resolution Process</h4>
        <p>Jab aap browser mein website type karte hain, toh IP kaise milta hai?</p>
        <ol>
          <li>Browser pehle apne local cache aur OS (hosts file) mein check karta hai.</li>
          <li>Agar nahi mila, toh query <strong>ISP ke Local DNS Resolver</strong> ko jati hai.</li>
          <li><strong>Recursive Query:</strong> Aapka computer resolver se kehta hai "Mujhe final IP laake do, chahe tumhe kitni bhi mehnat karni pade."</li>
          <li><strong>Iterative Query:</strong> Resolver root server ke paas jata hai. Root server usko TLD ka address de deta hai. Phir resolver TLD ke paas jata hai, jo Authoritative ka address de deta hai. Resolver khud baar-baar query bhej raha hai (iterative).</li>
          <li>Aakhir mein resolver ko IP milta hai aur wo browser ko return kar deta hai (aur cache me save kar leta hai).</li>
        </ol>

        <div class="tip-box">
          <div class="tip-title">💡 Important Application Protocols & Ports</div>
          <ul>
            <li><strong>HTTP / HTTPS:</strong> Port 80 / 443 (Web browsing)</li>
            <li><strong>FTP:</strong> Port 20 (Data), Port 21 (Control)</li>
            <li><strong>SMTP:</strong> Port 25 (Mail send)</li>
            <li><strong>POP3 / IMAP:</strong> Port 110 / 143 (Mail receive)</li>
            <li><strong>DNS:</strong> Port 53 (Uses both UDP and TCP)</li>
            <li><strong>DHCP:</strong> Port 67 (Server), 68 (Client) - Auto IP assign karna.</li>
            <li><strong>Telnet / SSH:</strong> Port 23 / 22 (Remote login)</li>
          </ul>
        </div>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 'evolution-terminologies',
      question: 'Which of the following was the first operational computer network that implemented packet switching?',
      options: ['NSFNET', 'ARPANET', 'ETHERNET', 'TELNET'],
      correct: 1,
      explanation: 'ARPANET was developed by the US DoD in 1969 and was the first to implement packet switching. NSFNET aaya baad mein, aur Ethernet LAN technology hai.'
    },
    {
      id: 2,
      topic: 'evolution-terminologies',
      question: 'The maximum theoretical amount of data that can be transmitted over a network in a given amount of time is called:',
      options: ['Throughput', 'Latency', 'Bandwidth', 'Jitter'],
      correct: 2,
      explanation: 'Theoretical maximum capacity ko Bandwidth kehte hain. Actual data rate ko Throughput kehte hain.'
    },
    {
      id: 3,
      topic: 'evolution-terminologies',
      question: 'If a packet size is 1000 bits and the link bandwidth is 10 kbps, what is the Transmission Delay?',
      options: ['10 seconds', '1 second', '0.1 seconds', '0.01 seconds'],
      correct: 2,
      explanation: 'Transmission Delay = Length / Bandwidth = 1000 bits / (10 * 10^3 bps) = 1000 / 10000 = 0.1 seconds.'
    },
    {
      id: 4,
      topic: 'evolution-terminologies',
      question: 'The variation in packet arrival time is referred to as:',
      options: ['Attenuation', 'Jitter', 'Throughput', 'Propagation Delay'],
      correct: 1,
      explanation: 'Delay ki variation ko Jitter kehte hain, jo streaming aur VoIP ke liye problem create karta hai.'
    },
    {
      id: 5,
      topic: 'transmission-devices',
      question: 'Which principle is responsible for the transmission of optical signals through a Fiber Optic Cable?',
      options: ['Total Internal Reflection', 'Electromagnetic Interference', 'Refraction Indexing', 'Crosstalk Cancellation'],
      correct: 0,
      explanation: 'Fiber optics kaam karti hai Total Internal Reflection (TIR) pe, jisse light wire ke andar hi bounce karti rehti hai.'
    },
    {
      id: 6,
      topic: 'transmission-devices',
      question: 'Unshielded Twisted Pair (UTP) cables are twisted together primarily to:',
      options: ['Increase the tensile strength of the cable', 'Reduce electromagnetic interference (crosstalk)', 'Reduce the size of the cable', 'Increase the speed of light in the cable'],
      correct: 1,
      explanation: 'Twisting se crosstalk (adjacent wires ka interference) aur external electromagnetic interference kam hota hai.'
    },
    {
      id: 7,
      topic: 'transmission-devices',
      question: 'At which OSI layer does a conventional network Hub operate?',
      options: ['Physical Layer', 'Data Link Layer', 'Network Layer', 'Transport Layer'],
      correct: 0,
      explanation: 'Hub ek Physical layer (Layer 1) device hai. Ye signals ko amplify aur broadcast karta hai (multiport repeater), isme koi intelligence nahi hoti.'
    },
    {
      id: 8,
      topic: 'transmission-devices',
      question: 'A network Switch breaks up _________ domains but does NOT break up _________ domains.',
      options: ['Broadcast, Collision', 'Collision, Broadcast', 'Routing, Collision', 'MAC, Broadcast'],
      correct: 1,
      explanation: 'Switch har port ke liye ek alag Collision domain banata hai, par by default sabhi ports ek hi Broadcast domain mein hote hain.'
    },
    {
      id: 9,
      topic: 'osi-tcp-ip',
      question: 'In the OSI reference model, which layer is responsible for translating data into a standard format, encryption, and compression?',
      options: ['Application Layer', 'Session Layer', 'Presentation Layer', 'Transport Layer'],
      correct: 2,
      explanation: 'Presentation layer (Layer 6) syntax aur semantics handle karti hai, including Translation, Encryption, and Compression.'
    },
    {
      id: 10,
      topic: 'osi-tcp-ip',
      question: 'Which layer of the OSI model ensures reliable, end-to-end (process-to-process) data delivery?',
      options: ['Network Layer', 'Data Link Layer', 'Session Layer', 'Transport Layer'],
      correct: 3,
      explanation: 'Transport layer (Layer 4) process-to-process delivery (via port numbers) aur reliability (TCP) ensure karti hai.'
    },
    {
      id: 11,
      topic: 'osi-tcp-ip',
      question: 'What is the Protocol Data Unit (PDU) at the Network Layer of the OSI model?',
      options: ['Frame', 'Segment', 'Packet', 'Bit'],
      correct: 2,
      explanation: 'Physical = Bits, Data Link = Frames, Network = Packets/Datagrams, Transport = Segments.'
    },
    {
      id: 12,
      topic: 'osi-tcp-ip',
      question: 'How many layers does the original TCP/IP reference model have?',
      options: ['4', '5', '6', '7'],
      correct: 0,
      explanation: 'Original TCP/IP model mein 4 layers thi: Application, Transport, Internet, aur Network Access. (Modern hybrid mein 5 hoti hain, par original pucha hai toh 4 aayega).'
    },
    {
      id: 13,
      topic: 'multiplexing-mac',
      question: 'Which multiplexing technique assigns entirely different frequency bands to each signal?',
      options: ['TDM', 'FDM', 'WDM', 'CDM'],
      correct: 1,
      explanation: 'FDM (Frequency Division Multiplexing) bandwidth ko alag-alag frequency bands mein divide karta hai. Radio/TV iska example hai.'
    },
    {
      id: 14,
      topic: 'multiplexing-mac',
      question: 'What is the maximum theoretical efficiency of Pure ALOHA?',
      options: ['18.4%', '36.8%', '50%', '100%'],
      correct: 0,
      explanation: 'Pure ALOHA ki max efficiency 1/2e hoti hai, jo approximately 18.4% hoti hai. Slotted ALOHA ki 36.8% (1/e) hoti hai.'
    },
    {
      id: 15,
      topic: 'multiplexing-mac',
      question: 'In CSMA/CD, the minimum frame size equation is:',
      options: ['Length = Propagation Time / Bandwidth', 'Length = Transmission Time * Bandwidth', 'Length = 2 * Propagation Time * Bandwidth', 'Length = Propagation Time * Bandwidth / 2'],
      correct: 2,
      explanation: 'CSMA/CD mein collision detect karne ke liye Sender ko kam se kam RTT (2*Tp) time tak data bhejna zaruri hai. So, Transmission Time (Length/Bandwidth) = 2*Tp, which means Length = 2 * Tp * Bandwidth.'
    },
    {
      id: 16,
      topic: 'multiplexing-mac',
      question: 'Which multiple access protocol uses Request to Send (RTS) and Clear to Send (CTS) frames to address the hidden terminal problem?',
      options: ['CSMA/CD', 'CSMA/CA', 'Slotted ALOHA', 'Token Passing'],
      correct: 1,
      explanation: 'Wireless networks (Wi-Fi) mein collision detection kaam nahi karta, isliye CSMA/CA (Avoidance) use hota hai, jisme RTS/CTS frames bheje jate hain.'
    },
    {
      id: 17,
      topic: 'lan-technologies',
      question: 'What is the minimum payload size of an Ethernet IEEE 802.3 frame?',
      options: ['64 Bytes', '46 Bytes', '1500 Bytes', '1518 Bytes'],
      correct: 1,
      explanation: 'Ethernet ka minimum *total* frame size 64 bytes hota hai. Header/Trailer (18 bytes) hata ke, minimum payload (data) size 46 bytes hona zaroori hai. Agar kam hai, toh padding add hoti hai.'
    },
    {
      id: 18,
      topic: 'lan-technologies',
      question: 'What is the size of the MAC (Media Access Control) address?',
      options: ['32 bits', '48 bits', '64 bits', '128 bits'],
      correct: 1,
      explanation: 'MAC address 48 bits (6 Bytes) ka physical address hota hai, jise Hexadecimal me likha jata hai.'
    },
    {
      id: 19,
      topic: 'lan-technologies',
      question: 'Which IEEE standard defines the Token Ring LAN technology?',
      options: ['IEEE 802.3', 'IEEE 802.11', 'IEEE 802.5', 'IEEE 802.15'],
      correct: 2,
      explanation: 'IEEE 802.3 is Ethernet, 802.11 is Wi-Fi, 802.5 is Token Ring, and 802.15 is Bluetooth/PAN.'
    },
    {
      id: 20,
      topic: 'ip-routing',
      question: 'Which of the following is a valid Class B IP address?',
      options: ['10.1.1.1', '172.16.5.1', '192.168.1.1', '224.0.0.5'],
      correct: 1,
      explanation: 'Class A (0-127), Class B (128-191), Class C (192-223), Class D (224-239). 172 falls in Class B.'
    },
    {
      id: 21,
      topic: 'ip-routing',
      question: 'What is the default subnet mask for a Class C IP address?',
      options: ['255.0.0.0', '255.255.0.0', '255.255.255.0', '255.255.255.255'],
      correct: 2,
      explanation: 'Class C network mein pehle 24 bits network ke aur 8 bits host ke hote hain, isliye default mask 255.255.255.0 hota hai.'
    },
    {
      id: 22,
      topic: 'ip-routing',
      question: 'How many valid host IP addresses are available in a /28 subnet?',
      options: ['16', '14', '32', '30'],
      correct: 1,
      explanation: 'In /28, remaining host bits = 32 - 28 = 4. Total hosts = 2^4 = 16. Valid hosts = 16 - 2 = 14 (1 network ID, 1 broadcast ID minus kar diya).'
    },
    {
      id: 23,
      topic: 'ip-routing',
      question: 'Which routing protocol algorithm is susceptible to the "count-to-infinity" problem?',
      options: ['Link State Routing', 'Distance Vector Routing', 'Path Vector Routing', 'Dijkstra Algorithm'],
      correct: 1,
      explanation: 'Distance Vector Routing (Bellman-Ford based) mein count-to-infinity problem hoti hai (routing loop), jabki Link State mein ye problem nahi hoti.'
    },
    {
      id: 24,
      topic: 'ip-routing',
      question: 'The size of an IPv6 address is:',
      options: ['32 bits', '64 bits', '128 bits', '256 bits'],
      correct: 2,
      explanation: 'IPv6 address 128 bits ka hota hai aur ise hexadecimal format mein colon (:) se separate karke likhte hain.'
    },
    {
      id: 25,
      topic: 'ip-routing',
      question: 'Which special IP address is reserved for loopback testing of the local network stack?',
      options: ['0.0.0.0', '127.0.0.1', '255.255.255.255', '169.254.0.1'],
      correct: 1,
      explanation: '127.0.0.0 to 127.255.255.255 range loopback ke liye reserve hai. 127.0.0.1 normally localhost ko refer karta hai.'
    },
    {
      id: 26,
      topic: 'tcp-udp',
      question: 'In the TCP 3-way handshake, what is the correct sequence of packets exchanged between a client and a server?',
      options: ['SYN, ACK, SYN-ACK', 'SYN, SYN-ACK, ACK', 'SYN, FIN, ACK', 'ACK, SYN-ACK, SYN'],
      correct: 1,
      explanation: 'TCP connection establish karne ke liye pehle client SYN bhejta hai, server SYN-ACK wapas bhejta hai, aur finally client ACK bhejta hai.'
    },
    {
      id: 27,
      topic: 'tcp-udp',
      question: 'Which of the following fields is present in the TCP header but NOT in the UDP header?',
      options: ['Source Port', 'Destination Port', 'Checksum', 'Sequence Number'],
      correct: 3,
      explanation: 'UDP header me sirf 4 fields hote hain: Source Port, Dest Port, Length, Checksum. TCP connection-oriented hai, isme Sequence number, Acknowledgment number, Window size aadi fields hote hain.'
    },
    {
      id: 28,
      topic: 'tcp-udp',
      question: 'What is the primary mechanism used by TCP for Flow Control?',
      options: ['Slow Start', 'Additive Increase Multiplicative Decrease', 'Sliding Window', 'Stop and Wait'],
      correct: 2,
      explanation: 'TCP Flow Control ke liye Sliding Window protocol use karta hai, jisme receiver bata deta hai ki uski "Window Size" (buffer capacity) kitni bachi hai.'
    },
    {
      id: 29,
      topic: 'tcp-udp',
      question: 'During TCP Congestion Control, the "Slow Start" phase increases the congestion window size:',
      options: ['Linearly', 'Exponentially', 'By 1 for every packet sent', 'It keeps it constant'],
      correct: 1,
      explanation: 'Slow start phase mein window size exponentially badhti hai (1, 2, 4, 8...). Naam slow hai par growth fast hoti hai threshold tak pahunchne ke liye.'
    },
    {
      id: 30,
      topic: 'tcp-udp',
      question: 'Which application protocol is most likely to use UDP over TCP?',
      options: ['HTTP', 'SMTP', 'FTP', 'DNS'],
      correct: 3,
      explanation: 'DNS queries ke liye UDP ka use hota hai kyunki wo choti hoti hain aur fast response chahiye hota hai. Baki sabhi (HTTP, SMTP, FTP) reliability ke liye TCP use karte hain.'
    },
    {
      id: 31,
      topic: 'app-dns',
      question: 'What is the standard well-known port number used by DNS?',
      options: ['21', '25', '53', '80'],
      correct: 2,
      explanation: 'DNS port 53 use karta hai. Port 21 FTP, 25 SMTP, aur 80 HTTP ke liye hai.'
    },
    {
      id: 32,
      topic: 'app-dns',
      question: 'Which level in the DNS hierarchy is represented by ".com", ".org", and ".net"?',
      options: ['Root servers', 'Top-Level Domain (TLD) servers', 'Authoritative Name servers', 'Local DNS resolvers'],
      correct: 1,
      explanation: '.com, .org wagera Top-Level Domains (TLD) kehlate hain aur inko TLD servers handle karte hain.'
    },
    {
      id: 33,
      topic: 'app-dns',
      question: 'In which DNS query resolution method does the resolver communicate directly with multiple servers (Root, TLD, Authoritative) one after the other?',
      options: ['Recursive Query', 'Iterative Query', 'Inverse Query', 'Reverse Query'],
      correct: 1,
      explanation: 'Iterative query mein resolver khud alag-alag servers (Root -> TLD -> Authoritative) ke paas jata hai IP nikalne ke liye. Recursive mein wo ye bojh kisi aur (jaise ISP DNS) pe daal deta hai.'
    },
    {
      id: 34,
      topic: 'lan-technologies',
      question: 'Which of the following 802 standards relates to Wireless LANs (WiFi)?',
      options: ['802.3', '802.5', '802.11', '802.15'],
      correct: 2,
      explanation: 'IEEE 802.11 Wi-Fi ka standard hai.'
    },
    {
      id: 35,
      topic: 'ip-routing',
      question: 'In a Subnet Mask of 255.255.255.224, how many bits are used for the Network and Subnet combined?',
      options: ['24', '26', '27', '28'],
      correct: 2,
      explanation: '224 in binary is 11100000 (3 bits). 255.255.255 is 24 bits. Total 1s = 24 + 3 = 27. Ise /27 subnet mask kehte hain.'
    },
    {
      id: 36,
      topic: 'transmission-devices',
      question: 'Which device operates at all layers of the OSI model and acts as a protocol converter between dissimilar networks?',
      options: ['Router', 'Switch', 'Gateway', 'Bridge'],
      correct: 2,
      explanation: 'Gateway ek aisa device ya software node hai jo completely different architectures (e.g. OSI to TCP/IP) wale networks ko connect karta hai, isliye ye all layers pe work karta hai.'
    },
    {
      id: 37,
      topic: 'evolution-terminologies',
      question: 'If a router receives a packet and takes 2 milliseconds to decide the output port by looking at the routing table, this delay is known as:',
      options: ['Transmission Delay', 'Propagation Delay', 'Queuing Delay', 'Processing Delay'],
      correct: 3,
      explanation: 'Router ke CPU dvara packet ka header padhne aur routing table check karne mein lagne wale time ko Processing Delay kehte hain.'
    },
    {
      id: 38,
      topic: 'app-dns',
      question: 'Dynamic Host Configuration Protocol (DHCP) uses which port numbers for server and client communications?',
      options: ['20 and 21', '67 and 68', '110 and 143', '161 and 162'],
      correct: 1,
      explanation: 'DHCP UDP ports 67 (Server) aur 68 (Client) use karta hai automatic IP configuration ke liye.'
    }
  ]
};

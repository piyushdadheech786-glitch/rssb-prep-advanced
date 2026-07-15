window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['computer-fundamentals'] = {
  id: 'computer-fundamentals',
  name: 'Computer Fundamentals',
  icon: '💻',
  description: 'Generations, Hardware/Software, Number Systems, Number Conversions, Memory Basics',
  topics: [
    {
      id: 'generations',
      name: 'Generations of Computers',
      theory: `
        <h3>Computer Generations</h3>
        <p>Computers have evolved through five major generations based on the core hardware technology used.</p>

        <table class="comparison-table">
          <tr><th>Generation</th><th>Time Period</th><th>Core Component</th><th>Key Characteristics</th></tr>
          <tr><td><strong>1st Generation</strong></td><td>1940s-1950s</td><td>Vacuum Tubes</td><td>Bulky, generated huge heat, consumed lot of electricity, machine language only, magnetic drums for memory. (Examples: ENIAC, EDVAC, UNIVAC).</td></tr>
          <tr><td><strong>2nd Generation</strong></td><td>1950s-1960s</td><td>Transistors</td><td>Smaller, faster, cheaper than 1st Gen. Assembly language introduced, magnetic cores for memory. Batch processing OS. (Examples: IBM 1401, CDC 1604).</td></tr>
          <tr><td><strong>3rd Generation</strong></td><td>1960s-1970s</td><td>ICs (Integrated Circuits)</td><td>Jack Kilby invented IC. Monitors and keyboards used instead of punch cards. Multiprogramming and Time-sharing OS. High-level languages like FORTRAN, COBOL became popular. (Example: IBM 360).</td></tr>
          <tr><td><strong>4th Generation</strong></td><td>1970s-Present</td><td>Microprocessors (VLSI)</td><td>Millions of transistors on a single chip. PCs, Apple, GUI, Internet, Mouse. Real-time, distributed OS. C, C++, DBs used. (Example: Pentium, Core i-series).</td></tr>
          <tr><td><strong>5th Generation</strong></td><td>Present & Beyond</td><td>AI (ULSI)</td><td>Artificial Intelligence, Quantum Computing, Nanotechnology, parallel processing, voice recognition, natural language processing. (Example: IBM Watson, Robotics).</td></tr>
        </table>
      `
    },
    {
      id: 'hardware-software',
      name: 'Hardware, Software & Memory',
      theory: `
        <h3>Hardware and Software</h3>
        <ul>
          <li><strong>Hardware:</strong> Physical, tangible parts of the computer (CPU, RAM, HDD, Keyboard, Monitor, Motherboard).</li>
          <li><strong>Software:</strong> Set of instructions (programs) that tells hardware what to do. Intangible.</li>
        </ul>

        <h4>Types of Software:</h4>
        <ol>
          <li><strong>System Software:</strong> Manages computer hardware and provides a platform for application software. (e.g., Operating Systems like Windows/Linux, Device Drivers, Utility Programs like Antivirus/Disk Defragmenter, Compilers/Interpreters).</li>
          <li><strong>Application Software:</strong> Designed for end-users to perform specific tasks. (e.g., MS Word, Web Browsers, Games, WhatsApp).</li>
        </ol>

        <h3>Memory Basics</h3>
        <p>Memory stores data and instructions. The smallest unit is a <strong>bit (0 or 1)</strong>.</p>
        
        <h4>Memory Units:</h4>
        <ul>
          <li>4 bits = 1 Nibble</li>
          <li>8 bits = 1 Byte</li>
          <li>1024 Bytes = 1 KB (Kilobyte)</li>
          <li>1024 KB = 1 MB (Megabyte)</li>
          <li>1024 MB = 1 GB (Gigabyte)</li>
          <li>1024 GB = 1 TB (Terabyte)</li>
          <li>1024 TB = 1 PB (Petabyte)</li>
        </ul>

        <h4>Primary Memory vs Secondary Memory:</h4>
        <table class="comparison-table">
          <tr><th>Primary Memory (Main Memory)</th><th>Secondary Memory (Auxiliary)</th></tr>
          <tr><td>Directly accessible by CPU</td><td>Not directly accessible by CPU (data must be loaded to RAM first)</td></tr>
          <tr><td>Volatile (RAM) or Non-volatile (ROM)</td><td>Always Non-volatile</td></tr>
          <tr><td>Fast but expensive and small capacity</td><td>Slower but cheap and huge capacity</td></tr>
          <tr><td>Examples: RAM, ROM, Cache</td><td>Examples: HDD, SSD, CD/DVD, Pen Drive</td></tr>
        </table>

        <h4>Types of RAM & ROM:</h4>
        <ul>
          <li><strong>SRAM (Static RAM):</strong> Made of flip-flops. Doesn't need refreshing. Very fast, used for Cache memory. Expensive.</li>
          <li><strong>DRAM (Dynamic RAM):</strong> Made of capacitors and transistors. Needs continuous refreshing (leaks charge). Slower but cheaper. Used for Main Memory (System RAM).</li>
          <li><strong>PROM:</strong> Programmable ROM. Can be programmed only ONCE by the user.</li>
          <li><strong>EPROM:</strong> Erasable PROM. Can be erased using <strong>UV light</strong>.</li>
          <li><strong>EEPROM:</strong> Electrically Erasable PROM. Can be erased using electrical signals. Flash memory (Pen drives, SSDs) is a type of EEPROM.</li>
        </ul>

        <div class="warning-box">
          <div class="tip-title">⚠️ Firmware</div>
          Software embedded into ROM (like BIOS in a computer) is called Firmware. It acts as both hardware and software.
        </div>
      `
    },
    {
      id: 'number-systems',
      name: 'Number Systems & Conversions',
      theory: `
        <h3>Number Systems</h3>
        <p>Computers process all data as numbers. There are four main number systems:</p>

        <table class="comparison-table">
          <tr><th>System</th><th>Base/Radix</th><th>Symbols Used</th><th>Example</th></tr>
          <tr><td><strong>Binary</strong></td><td>2</td><td>0, 1</td><td>(1011)₂</td></tr>
          <tr><td><strong>Octal</strong></td><td>8</td><td>0 to 7</td><td>(57)₈</td></tr>
          <tr><td><strong>Decimal</strong></td><td>10</td><td>0 to 9</td><td>(256)₁₀</td></tr>
          <tr><td><strong>Hexadecimal</strong></td><td>16</td><td>0 to 9, A to F (A=10, F=15)</td><td>(1F4)₁₆</td></tr>
        </table>

        <h4>Important Conversions:</h4>

        <p><strong>1. Decimal to Any Base:</strong></p>
        <p>Divide the decimal number by the target base repeatedly. The remainders, read from bottom to top, give the answer.</p>

        <p><strong>2. Any Base to Decimal:</strong></p>
        <p>Multiply each digit by the base raised to the power of its position (starting from 0 at the rightmost integer digit). Add them up.</p>
        <p>Example: (101.11)₂ to Decimal = 1×2² + 0×2¹ + 1×2⁰ . 1×2⁻¹ + 1×2⁻² = 4 + 0 + 1 . 0.5 + 0.25 = (5.75)₁₀</p>

        <p><strong>3. Binary to Octal / Octal to Binary:</strong></p>
        <p>Direct relationship: 2³ = 8. Group binary bits into sets of <strong>3</strong> (starting from decimal point). Convert each 3-bit group to its octal equivalent (000 to 111 = 0 to 7).</p>

        <p><strong>4. Binary to Hexadecimal / Hex to Binary:</strong></p>
        <p>Direct relationship: 2⁴ = 16. Group binary bits into sets of <strong>4</strong>. Convert each 4-bit group to its hex equivalent (0000 to 1111 = 0 to F).</p>
      `
    },
    {
      id: 'computer-codes',
      name: 'Computer Codes & I/O Devices',
      theory: `
        <h3>Input and Output Devices</h3>
        <ul>
          <li><strong>Input Devices:</strong> Keyboard, Mouse, Scanner, Microphone, Web Camera, OMR (Optical Mark Recognition - used for MCQ tests), OCR (Optical Character Recognition - converts scanned text image into editable text), MICR (Magnetic Ink Character Recognition - used in banks for cheques), Barcode Reader.</li>
          <li><strong>Output Devices:</strong> Monitor (CRT, LCD, LED), Printer (Impact: Dot Matrix; Non-Impact: Laser, Inkjet), Plotter (for high-quality engineering drawings/maps), Speaker.</li>
        </ul>

        <h3>Computer Codes</h3>
        <p>Data must be encoded into binary formats for computer processing.</p>

        <ul>
          <li><strong>BCD (Binary Coded Decimal):</strong> Uses 4 bits to represent EACH decimal digit independently. Example: (25)₁₀ in BCD is 0010 0101. Note: This is different from pure binary conversion of 25 which is 11001.</li>
          <li><strong>ASCII (American Standard Code for Information Interchange):</strong> Standard ASCII uses 7 bits (represents 128 characters). Extended ASCII uses 8 bits (256 characters). Used for English text.</li>
          <li><strong>EBCDIC (Extended Binary Coded Decimal Interchange Code):</strong> An 8-bit character encoding used mainly on IBM mainframe operating systems.</li>
          <li><strong>Unicode:</strong> Modern standard. Uses 16-bit or 32-bit (UTF-8/UTF-16/UTF-32). Can represent characters of almost all world languages, emojis, symbols. Replaces ASCII for global software.</li>
        </ul>

        <div class="tip-box">
          <div class="tip-title">💡 Important Fact</div>
          A "Nibble" (4 bits) is exactly enough to store one BCD (Binary Coded Decimal) or one Hexadecimal digit.
        </div>
      `
    }
  ],
  questions: [
    {
      id: 1, topic: 'generations',
      question: 'Which electronic component was primarily used in First Generation computers?',
      options: ['Transistors', 'Vacuum Tubes', 'Integrated Circuits', 'Microprocessors'],
      correct: 1,
      explanation: 'First Generation computers (1940s-1950s) like ENIAC and UNIVAC used Vacuum Tubes for circuitry. They were huge, produced a lot of heat, and were prone to frequent failures.'
    },
    {
      id: 2, topic: 'generations',
      question: 'Integrated Circuits (ICs) were introduced in which generation of computers?',
      options: ['First Generation', 'Second Generation', 'Third Generation', 'Fourth Generation'],
      correct: 2,
      explanation: 'ICs were introduced in the Third Generation (1960s-1970s). An IC combines multiple transistors onto a single silicon chip, drastically reducing size and increasing speed/reliability.'
    },
    {
      id: 3, topic: 'hardware-software',
      question: 'Which of the following is an example of System Software?',
      options: ['Microsoft Word', 'Google Chrome', 'Linux Operating System', 'Adobe Photoshop'],
      correct: 2,
      explanation: 'System software manages hardware resources and provides a platform for application software to run. Operating Systems (Windows, Linux, macOS), compilers, and device drivers are examples. MS Word and Chrome are Application Software.'
    },
    {
      id: 4, topic: 'hardware-software',
      question: 'Which type of memory needs to be continuously refreshed to retain data?',
      options: ['SRAM (Static RAM)', 'DRAM (Dynamic RAM)', 'ROM', 'EEPROM'],
      correct: 1,
      explanation: 'DRAM stores data in capacitors which slowly leak electrical charge. To retain data, it must be periodically refreshed. SRAM uses flip-flops and does not need refreshing.'
    },
    {
      id: 5, topic: 'hardware-software',
      question: 'Which type of ROM can be erased by exposing it to Ultraviolet (UV) light?',
      options: ['PROM', 'EPROM', 'EEPROM', 'Flash Memory'],
      correct: 1,
      explanation: 'EPROM (Erasable Programmable ROM) is erased by shining intense UV light through a quartz window on top of the chip. EEPROM and Flash are erased electrically.'
    },
    {
      id: 6, topic: 'hardware-software',
      question: 'A Nibble is equivalent to how many bits?',
      options: ['2 bits', '4 bits', '8 bits', '16 bits'],
      correct: 1,
      explanation: 'A nibble is exactly half a byte, which equals 4 bits. It can represent 16 different values (0 to 15), which is perfectly suited for representing one Hexadecimal digit.'
    },
    {
      id: 7, topic: 'number-systems',
      question: 'The base or radix of the hexadecimal number system is:',
      options: ['8', '10', '16', '32'],
      correct: 2,
      explanation: 'Hexa means 6, Decimal means 10. Together they signify Base 16. It uses digits 0-9 and letters A-F to represent 10-15.'
    },
    {
      id: 8, topic: 'number-systems',
      question: 'To convert a binary number to octal, we group the binary digits into sets of:',
      options: ['2 bits', '3 bits', '4 bits', '8 bits'],
      correct: 1,
      explanation: 'Since 2^3 = 8, every 3 bits of a binary number correspond exactly to 1 octal digit. We group the binary number into sets of 3 starting from the right (or from the decimal point for fractions).'
    },
    {
      id: 9, topic: 'number-systems',
      question: 'What is the decimal equivalent of the binary number (1011)₂?',
      options: ['9', '10', '11', '13'],
      correct: 2,
      explanation: '(1011)₂ = (1 × 2³) + (0 × 2²) + (1 × 2¹) + (1 × 2⁰) = 8 + 0 + 2 + 1 = 11.'
    },
    {
      id: 10, topic: 'number-systems',
      question: 'What is the binary representation of the hexadecimal digit "A"?',
      options: ['1001', '1010', '1011', '1100'],
      correct: 1,
      explanation: 'In hexadecimal, A represents the decimal value 10. The binary equivalent of 10 is 1010 (8+2).'
    },
    {
      id: 11, topic: 'computer-codes',
      question: 'Which encoding standard was developed to represent text in most of the world\'s writing systems, solving the limitations of ASCII?',
      options: ['BCD', 'EBCDIC', 'Unicode', 'Gray Code'],
      correct: 2,
      explanation: 'Unicode was designed to handle all languages and symbols worldwide, using 16-bit or 32-bit encoding formats (like UTF-8, UTF-16). Standard ASCII uses 7 bits and can only represent 128 characters.'
    },
    {
      id: 12, topic: 'computer-codes',
      question: 'MICR technology is most commonly used in:',
      options: ['Evaluating OMR sheets', 'Banking industry for clearing cheques', 'Reading barcodes in supermarkets', 'Printing high quality maps'],
      correct: 1,
      explanation: 'MICR (Magnetic Ink Character Recognition) is used by banks to process cheques quickly. The account number and other details at the bottom of a cheque are printed with magnetic ink.'
    }
  ]
};

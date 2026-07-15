window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['communication'] = {
  id: 'communication',
  name: 'Data Communication',
  icon: '📡',
  description: 'Signals, Transmission Modes, Modulation, Multiplexing, Error Detection',
  topics: [
    {
      id: 'signals',
      name: 'Signals & Transmission',
      theory: `
        <h3>Data & Signals</h3>
        <p>Data transmission requires converting data into signals. Signals can be Analog or Digital.</p>

        <h4>Analog vs Digital Signals:</h4>
        <table class="comparison-table">
          <tr><th>Feature</th><th>Analog Signal</th><th>Digital Signal</th></tr>
          <tr><td>Nature</td><td>Continuous wave</td><td>Discrete values (0 and 1)</td></tr>
          <tr><td>Representation</td><td>Sine wave</td><td>Square wave</td></tr>
          <tr><td>Bandwidth</td><td>Low</td><td>High</td></tr>
          <tr><td>Noise Immunity</td><td>Poor (easily affected)</td><td>Excellent (less affected)</td></tr>
          <tr><td>Examples</td><td>Human voice, Thermometer</td><td>Computer data, CDs</td></tr>
        </table>

        <h4>Transmission Impairments:</h4>
        <ul>
          <li><strong>Attenuation:</strong> Loss of signal strength over distance. Fixed using amplifiers (for analog) or repeaters (for digital).</li>
          <li><strong>Distortion:</strong> Change in the shape/form of the signal. Common in composite signals where different frequencies travel at different speeds.</li>
          <li><strong>Noise:</strong> Unwanted signals mixing with the original signal (Thermal noise, Cross-talk, Impulse noise).</li>
        </ul>

        <h4>Data Rate Limits:</h4>
        <p><strong>1. Nyquist Bit Rate (Noiseless Channel):</strong><br>
        Maximum Bit Rate = 2 × Bandwidth × log₂(L)<br>
        <em>Where L = number of signal levels used to represent data.</em></p>

        <p><strong>2. Shannon Capacity (Noisy Channel):</strong><br>
        Capacity = Bandwidth × log₂(1 + SNR)<br>
        <em>Where SNR = Signal-to-Noise Ratio (not in dB, but actual ratio).</em></p>
      `
    },
    {
      id: 'transmission-modes',
      name: 'Transmission Modes & Media',
      theory: `
        <h3>Transmission Modes</h3>
        
        <h4>Based on Direction:</h4>
        <ul>
          <li><strong>Simplex:</strong> Unidirectional. One transmits, other receives. (e.g., Keyboard to Monitor, TV broadcasting).</li>
          <li><strong>Half-Duplex:</strong> Both can transmit/receive, but NOT at the same time. Walkie-talkie mode. (e.g., Police radio).</li>
          <li><strong>Full-Duplex:</strong> Both can transmit/receive SIMULTANEOUSLY. (e.g., Telephone network, Mobile phones).</li>
        </ul>

        <h4>Based on Synchronization:</h4>
        <table class="comparison-table">
          <tr><th>Asynchronous Transmission</th><th>Synchronous Transmission</th></tr>
          <tr><td>Data sent one character (byte) at a time.</td><td>Data sent as a continuous stream of blocks/frames.</td></tr>
          <tr><td>Uses Start (0) and Stop (1) bits for synchronization.</td><td>No start/stop bits. Uses clock signals for sync.</td></tr>
          <tr><td>Gaps between characters are unequal.</td><td>No gaps between data blocks.</td></tr>
          <tr><td>Slower, used for low-speed communication.</td><td>Faster, used for high-speed bulk transfer.</td></tr>
        </table>

        <h3>Transmission Media</h3>
        <h4>Guided (Wired) Media:</h4>
        <ul>
          <li><strong>Twisted Pair:</strong> Copper wires twisted to reduce cross-talk. UTP (Unshielded) and STP (Shielded). RJ-45 connector used.</li>
          <li><strong>Coaxial Cable:</strong> Inner copper core, plastic insulation, braided metal shield, outer cover. High bandwidth. BNC connector. (e.g., Cable TV).</li>
          <li><strong>Fiber Optic Cable:</strong> Uses light pulses through glass/plastic core. Principle: Total Internal Reflection (TIR). Highest bandwidth, immune to EMI. SC/ST connectors.</li>
        </ul>

        <h4>Unguided (Wireless) Media:</h4>
        <ul>
          <li><strong>Radio Waves:</strong> Omnidirectional, can penetrate walls. AM/FM radio, older Wi-Fi.</li>
          <li><strong>Microwaves:</strong> Unidirectional (line-of-sight required). Cannot penetrate walls easily. Used in satellite comm, cellular networks.</li>
          <li><strong>Infrared (IR):</strong> Very short range, line-of-sight, cannot penetrate walls. (e.g., TV Remote).</li>
        </ul>
      `
    },
    {
      id: 'modulation',
      name: 'Modulation Techniques',
      theory: `
        <h3>Modulation</h3>
        <p>Modulation is the process of varying one or more properties (amplitude, frequency, phase) of a periodic waveform (carrier signal) with a modulating signal that contains information to be transmitted.</p>
        <p><strong>Need for Modulation:</strong> Reduces antenna size, avoids mixing of signals, increases range.</p>

        <h4>Digital-to-Analog Conversion (Modem):</h4>
        <ul>
          <li><strong>ASK (Amplitude Shift Keying):</strong> Amplitude of carrier changes based on 1 or 0. Susceptible to noise.</li>
          <li><strong>FSK (Frequency Shift Keying):</strong> Frequency of carrier changes (e.g., high freq for 1, low freq for 0).</li>
          <li><strong>PSK (Phase Shift Keying):</strong> Phase of carrier changes (e.g., 0° for 0, 180° for 1). More robust than ASK/FSK. Used in Wi-Fi (BPSK, QPSK).</li>
          <li><strong>QAM (Quadrature Amplitude Modulation):</strong> Combines ASK and PSK. Changes both amplitude and phase. Highest data rate.</li>
        </ul>

        <h4>Analog-to-Digital Conversion:</h4>
        <p><strong>PCM (Pulse Code Modulation):</strong></p>
        <ol>
          <li><strong>Sampling:</strong> Measure analog signal at discrete time intervals. (Nyquist theorem: Sampling rate must be ≥ 2 × max frequency).</li>
          <li><strong>Quantizing:</strong> Assign discrete values to sampled points. (Causes quantization error).</li>
          <li><strong>Encoding:</strong> Convert quantized values into binary bits.</li>
        </ol>
      `
    },
    {
      id: 'multiplexing',
      name: 'Multiplexing & Error Detection',
      theory: `
        <h3>Multiplexing</h3>
        <p>Process of combining multiple signals into one signal over a shared medium. Maximizes bandwidth utilization.</p>
        <ul>
          <li><strong>FDM (Frequency Division Multiplexing):</strong> Analog technique. Bandwidth is divided into non-overlapping frequency bands. Guard bands prevent interference. (e.g., FM Radio, Cable TV).</li>
          <li><strong>TDM (Time Division Multiplexing):</strong> Digital technique. Time is divided into slots, and each user gets a slot in round-robin fashion. Synchronous TDM (fixed slots) vs Statistical TDM (slots on demand).</li>
          <li><strong>WDM (Wavelength Division Multiplexing):</strong> Used in Fiber Optics. Different signals transmitted using different colors (wavelengths) of light. Prism used as multiplexer/demultiplexer.</li>
        </ul>

        <h3>Error Detection Techniques</h3>
        <ul>
          <li><strong>Parity Check:</strong> Adds one extra bit. Even parity (make total 1s even), Odd parity (make total 1s odd). Can only detect single-bit errors. Cannot correct.</li>
          <li><strong>Checksum:</strong> Data divided into blocks, added using 1's complement arithmetic, sum is complemented and sent. Receiver does same. If result is 0, no error.</li>
          <li><strong>CRC (Cyclic Redundancy Check):</strong> Most powerful. Based on polynomial division. Data is divided by a generator polynomial (using XOR). Remainder is appended to data. Receiver divides again, if remainder 0, no error. Detects all single and most burst errors.</li>
        </ul>
      `
    }
  ],
  questions: [
    {
      id: 1, topic: 'signals',
      question: 'Which impairment refers to the loss of signal strength over distance?',
      options: ['Noise', 'Distortion', 'Attenuation', 'Cross-talk'],
      correct: 2,
      explanation: 'Attenuation is the decrease in signal strength as it travels through a medium. Amplifiers and repeaters are used to compensate for attenuation.'
    },
    {
      id: 2, topic: 'transmission-modes',
      question: 'A walkie-talkie operates in which transmission mode?',
      options: ['Simplex', 'Half-Duplex', 'Full-Duplex', 'Multiplex'],
      correct: 1,
      explanation: 'In Half-Duplex mode, both parties can transmit and receive, but NOT at the same time. You have to press a button to talk on a walkie-talkie, and while talking, you cannot listen.'
    },
    {
      id: 3, topic: 'transmission-modes',
      question: 'Which of the following is an unguided media?',
      options: ['Coaxial cable', 'Fiber optic cable', 'Microwave', 'Twisted pair'],
      correct: 2,
      explanation: 'Unguided (wireless) media transmit electromagnetic waves without using a physical conductor. Microwaves, radio waves, and infrared are examples.'
    },
    {
      id: 4, topic: 'transmission-modes',
      question: 'The principle of operation for optical fiber communication is:',
      options: ['Refraction', 'Scattering', 'Total Internal Reflection', 'Diffraction'],
      correct: 2,
      explanation: 'Fiber optic cables work on the principle of Total Internal Reflection (TIR). Light pulses bounce off the core-cladding boundary and travel down the cable without escaping.'
    },
    {
      id: 5, topic: 'modulation',
      question: 'In which modulation technique does the phase of the carrier signal change according to the digital data?',
      options: ['ASK', 'FSK', 'PSK', 'QAM'],
      correct: 2,
      explanation: 'Phase Shift Keying (PSK) changes the phase of the carrier wave (e.g., 0 degrees and 180 degrees) to represent digital 0 and 1.'
    },
    {
      id: 6, topic: 'multiplexing',
      question: 'Which multiplexing technique is primarily used in fiber optic communications?',
      options: ['FDM', 'TDM', 'WDM', 'CDM'],
      correct: 2,
      explanation: 'Wavelength Division Multiplexing (WDM) is an analog multiplexing technique used in fiber optics. It combines multiple light beams of different wavelengths (colors) into a single fiber.'
    },
    {
      id: 7, topic: 'signals',
      question: 'According to Nyquist\'s theorem, if the maximum frequency of a signal is 4 kHz, the minimum sampling rate should be:',
      options: ['2 kHz', '4 kHz', '8 kHz', '16 kHz'],
      correct: 2,
      explanation: 'Nyquist theorem states that the sampling rate must be at least twice the highest frequency of the signal. 2 × 4 kHz = 8 kHz. This is used in PCM for voice (telephone).'
    },
    {
      id: 8, topic: 'transmission-modes',
      question: 'Start and stop bits are used in:',
      options: ['Synchronous transmission', 'Asynchronous transmission', 'Parallel transmission', 'Baseband transmission'],
      correct: 1,
      explanation: 'Asynchronous transmission sends data one byte at a time with uneven gaps. To alert the receiver, a start bit (0) is added before the byte, and a stop bit (1) is added after.'
    },
    {
      id: 9, topic: 'multiplexing',
      question: 'Which error detection method uses polynomial division?',
      options: ['Simple Parity Check', 'Two-dimensional Parity', 'Checksum', 'Cyclic Redundancy Check (CRC)'],
      correct: 3,
      explanation: 'CRC is based on binary division using polynomials (modulo-2 arithmetic using XOR). It is highly effective at detecting burst errors.'
    },
    {
      id: 10, topic: 'signals',
      question: 'Shannon capacity determines the maximum data rate of a channel with:',
      options: ['No noise', 'Infinite bandwidth', 'Thermal noise', 'Zero attenuation'],
      correct: 2,
      explanation: 'Shannon\'s theorem gives the theoretical maximum capacity for a NOISY channel (thermal noise). C = B × log2(1 + SNR).'
    },
    {
      id: 11, topic: 'modulation',
      question: 'QAM (Quadrature Amplitude Modulation) is a combination of:',
      options: ['ASK and FSK', 'ASK and PSK', 'FSK and PSK', 'PCM and DM'],
      correct: 1,
      explanation: 'QAM alters both the amplitude (ASK) and the phase (PSK) of the carrier wave simultaneously to transmit multiple bits per symbol, resulting in high data rates.'
    },
    {
      id: 12, topic: 'transmission-modes',
      question: 'In twisted pair cables, wires are twisted together to:',
      options: ['Increase their physical strength', 'Reduce the amount of copper used', 'Reduce electromagnetic interference and cross-talk', 'Make the cable more flexible'],
      correct: 2,
      explanation: 'Twisting the wires ensures that both wires are equally affected by external electromagnetic interference (EMI). At the receiver, the noise cancels out because it uses differential signaling.'
    }
  ]
};

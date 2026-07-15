window.SUBJECTS = window.SUBJECTS || {};
window.SUBJECTS['communication'] = {
  id: 'communication',
  name: 'Communication Basics',
  icon: '📡',
  description: 'Data communication ke basic concepts, modulation techniques, aur network technologies ka in-depth study.',
  topics: [
    {
      id: 't1-capacity',
      name: 'Channel Capacity & Data Rates',
      theory: `
        <h3>Channel Capacity Kya Hai?</h3>
        <p>Ek communication channel (jaise copper wire, fiber optic, ya wireless link) ke through hum maximum kitna data per second error-free bhej sakte hain, us maximum limit ko <strong>Channel Capacity</strong> kehte hain. Isko measure karne ke liye do main theorems hain: Nyquist theorem (noiseless channel ke liye) aur Shannon theorem (noisy channel ke liye).</p>
        
        <h4>Nyquist Bit Rate (For Noiseless Channel)</h4>
        <p>Agar channel mein koi noise nahi hai, toh maximum data rate sirf channel ki bandwidth aur signal levels par depend karta hai.</p>
        
        <div class="formula-box">
          <div class="formula-title">📐 Nyquist Formula</div>
          Bit Rate (C) = 2 * B * log₂(L) bps<br>
          Jahan: B = Bandwidth, L = Number of signal levels
        </div>
        
        <h4>Shannon Capacity (For Noisy Channel)</h4>
        <p>Real world mein har channel mein kuch na kuch noise (disturbance) hota hai. Shannon ne bataya ki noise ke sath maximum capacity kitni ho sakti hai.</p>
        
        <div class="formula-box">
          <div class="formula-title">📐 Shannon Formula</div>
          Capacity (C) = B * log₂(1 + SNR) bps<br>
          Jahan: B = Bandwidth, SNR = Signal-to-Noise Ratio (power ratio, not in dB directly)
        </div>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Exam mein agar "Noiseless" likha ho toh Nyquist lagana hai, aur "Noisy" ya "SNR" diya ho toh Shannon lagana hai.
        </div>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Kai baar SNR value dB (decibels) mein di hoti hai. Formula mein rakhne se pehle usko actual ratio mein convert karna padta hai: SNR_dB = 10 * log10(SNR).
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p><strong>Question:</strong> Ek channel ki bandwidth 3000 Hz hai aur uska SNR (Signal to Noise Ratio) 31 hai. Uski channel capacity nikalen.</p>
        <p><strong>Solution:</strong><br>
        Shannon formula use karenge kyunki SNR diya hai.<br>
        C = B * log₂(1 + SNR)<br>
        C = 3000 * log₂(1 + 31)<br>
        C = 3000 * log₂(32)<br>
        We know log₂(32) = 5 (kyunki 2^5 = 32)<br>
        C = 3000 * 5 = <strong>15,000 bps (15 kbps)</strong></p>
      `
    },
    {
      id: 't2-impairments',
      name: 'Communication Impairments',
      theory: `
        <h3>Transmission Impairments (Signal ki Kharabi)</h3>
        <p>Jab koi signal medium ke through travel karta hai, toh woh weaken (kamzor) ho jata hai ya uski shape badal jati hai. Is process ko impairment kehte hain. Iske 3 main causes hote hain: Attenuation, Distortion, aur Noise.</p>
        
        <h4>1. Attenuation (Signal Loss)</h4>
        <p>Distance ke sath signal ki energy ka kam hona Attenuation kehlata hai. Medium ka resistance signal ki energy ko heat mein convert kar deta hai. Isko overcome karne ke liye hum <strong>Amplifiers</strong> ya <strong>Repeaters</strong> ka use karte hain.</p>
        
        <div class="formula-box">
          <div class="formula-title">📐 Attenuation Formula (in Decibels)</div>
          Attenuation (dB) = 10 * log10 (P_out / P_in)<br>
          Agar P_out < P_in hai, toh answer negative aayega, jo loss show karta hai.
        </div>
        
        <h4>2. Distortion</h4>
        <p>Yeh mainly composite signals (jisme bohot saari frequencies mix hoti hain) mein hota hai. Alag-alag frequencies ki speed medium mein alag hoti hai, isliye wo receiver par alag-alag time pe pohochti hain. Is wajah se signal ka actual shape change ho jata hai (Phase distortion).</p>
        
        <h4>3. Noise</h4>
        <p>External ya internal unwanted electrical signals jo hamare original signal mein mix ho jate hain.</p>
        <ul>
          <li><strong>Thermal Noise:</strong> Electrons ke random motion ki wajah se (temperature dependent).</li>
          <li><strong>Crosstalk:</strong> Ek wire ka signal dusre wire ke signal ko disturb karta hai (jaise phone par kisi aur ki awaaz aana).</li>
          <li><strong>Impulse Noise:</strong> Short duration ka high energy spike (e.g., lightning ya motors start hone se). Yeh data communication ke liye sabse dangerous hota hai.</li>
        </ul>
        
        <table class="comparison-table">
          <tr>
            <th>Impairment Type</th>
            <th>Main Cause</th>
            <th>Solution</th>
          </tr>
          <tr>
            <td>Attenuation</td>
            <td>Distance / Resistance</td>
            <td>Amplifiers / Repeaters</td>
          </tr>
          <tr>
            <td>Distortion</td>
            <td>Different propagation speeds</td>
            <td>Equalizers</td>
          </tr>
          <tr>
            <td>Noise</td>
            <td>Heat, EMI, Crosstalk</td>
            <td>Shielding, Error Correction</td>
          </tr>
        </table>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Attenuation sirf signal ki strength (amplitude) kam karta hai, uski frequency ya shape change nahi karta. Shape Distortion mein change hoti hai.
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p><strong>Question:</strong> Ek signal ka input power 100 mW hai aur ek lambe cable se travel karne ke baad output power 1 mW reh jata hai. Attenuation in dB kitna hoga?</p>
        <p><strong>Solution:</strong><br>
        dB = 10 * log10 (P_out / P_in)<br>
        dB = 10 * log10 (1 / 100)<br>
        dB = 10 * log10 (10^-2)<br>
        dB = 10 * (-2) = <strong>-20 dB</strong><br>
        Negative sign indicate karta hai ki yeh 20 dB ka "loss" hai.</p>
      `
    },
    {
      id: 't3-em-wave',
      name: 'EM Wave Propagation',
      theory: `
        <h3>Electromagnetic (EM) Wave Propagation</h3>
        <p>Wireless communication mein data hawa (vacuum/atmosphere) ke through bheja jata hai EM waves ka use karke. Yeh waves 3 tarike se travel kar sakti hain based on unki frequency.</p>
        
        <h4>1. Ground Wave Propagation (Below 2 MHz)</h4>
        <p>Isme radio waves earth ki surface ke saath "hug" karke (chipak ke) travel karti hain. Earth ki curvature in waves ko bend karti hai, isliye yeh lambi distance tak ja sakti hain. AM radio broadcasting isi ka example hai.</p>
        
        <h4>2. Sky Wave Propagation (2 MHz to 30 MHz)</h4>
        <p>High frequency waves ko atmosphere ki ek layer <strong>Ionosphere</strong> wapas earth ki taraf reflect (refract) kar deti hai. Is reflection ki wajah se signal hazaro kilometers tak pohoch sakta hai. Amateur radio, international broadcasts isme aate hain.</p>
        
        <h4>3. Line-of-Sight (LOS) Propagation (Above 30 MHz)</h4>
        <p>Very High Frequencies (VHF) aur uske upar ki waves Ionosphere se reflect nahi hoti, balki seedhi nikal jati hain. Isliye antenna ko ek dusre ke direct visual contact (Line of Sight) mein hona zaroori hai. FM radio, TV, Mobile signals, Microwave aur Satellite communication sab LOS hain.</p>
        
        <table class="comparison-table">
          <tr>
            <th>Propagation Type</th>
            <th>Frequency Range</th>
            <th>Characteristics</th>
            <th>Example</th>
          </tr>
          <tr>
            <td>Ground Wave</td>
            <td>< 2 MHz (VLF, LF, MF)</td>
            <td>Follows earth curvature</td>
            <td>AM Radio</td>
          </tr>
          <tr>
            <td>Sky Wave</td>
            <td>2 - 30 MHz (HF)</td>
            <td>Reflected by Ionosphere</td>
            <td>Shortwave Radio</td>
          </tr>
          <tr>
            <td>Line-of-Sight</td>
            <td>> 30 MHz (VHF, UHF, SHF)</td>
            <td>Straight line, needs tall antennas</td>
            <td>FM, TV, Mobile, Satellite</td>
          </tr>
        </table>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          Jaise-jaise frequency badhti hai, waves seedhi line mein travel karna start kar deti hain aur obstacles (building, hills) unko block kar sakte hain.
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p><strong>Concept application:</strong> Agar aapko ek hill station par communication tower lagana hai FM radio (100 MHz) ke liye, toh aap kaunsi propagation use karenge?<br>
        <strong>Answer:</strong> 100 MHz > 30 MHz hota hai, toh yeh <strong>Line of Sight</strong> hoga. Isliye tower ko height par lagana padega taki receiver tak direct seedha rasta mil sake bina pahaado ke block hue.</p>
      `
    },
    {
      id: 't4-pcm-dm',
      name: 'PCM & Delta Modulation',
      theory: `
        <h3>Digital Transmission: Analog to Digital Conversion</h3>
        <p>Real-world data (jaise human voice) analog hoti hai (continuous signal). Computer networks mein isko bhejne ke liye pehle Digital (0s and 1s) mein convert karna padta hai. Iske do main methods hain: PCM aur Delta Modulation.</p>
        
        <h4>Pulse Code Modulation (PCM)</h4>
        <p>PCM sabse standard technique hai. Isme 3 steps hote hain:</p>
        <ol>
          <li><strong>Sampling:</strong> Continuous signal ko discrete time intervals par measure karna. <em>Nyquist theorem</em> kehta hai ki sampling rate (fs) signal ki maximum frequency (fm) ka kam-se-kam double hona chahiye: <strong>fs ≥ 2 * fm</strong>.</li>
          <li><strong>Quantization:</strong> Sampled values ko ek fixed scale ki nearest discrete value par round off karna. (Jaise 3.2 ko 3 maan lena). Is difference ko "Quantization Error" kehte hain.</li>
          <li><strong>Encoding:</strong> Un quantized values ko binary codes (0s and 1s) mein convert karna.</li>
        </ol>
        
        <div class="formula-box">
          <div class="formula-title">📐 PCM Bit Rate Formula</div>
          Bit Rate = Sampling Rate (fs) × Number of bits per sample (n)
        </div>
        
        <h4>Delta Modulation (DM)</h4>
        <p>PCM mein har sample ke liye kai bits bheji jati hain (e.g., 8 bits). Delta Modulation ek simplified method hai jisme <strong>sirf 1 bit per sample</strong> bheji jati hai. Yeh bas ye batata hai ki pichli value se current value badhi hai (+Δ = 1) ya ghati hai (-Δ = 0).</p>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap: DM Errors</div>
          <strong>Slope Overload:</strong> Jab analog signal bohot tezi se badh raha ho, aur DM ka step size (Δ) us speed ko match nahi kar paaye. (Step size chhota hone ki problem).<br>
          <strong>Granular Noise:</strong> Jab signal almost flat ho, par DM zabardasti up-down zigzag (+Δ, -Δ) karta rahe. (Step size bada hone ki problem).
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p><strong>Question:</strong> Ek voice signal ki highest frequency 4000 Hz hai. Agar hum isko PCM se digitize karein jisme 8-bits per sample hain, toh data rate kitna hoga?</p>
        <p><strong>Solution:</strong><br>
        Step 1: Calculate Sampling Rate (fs)<br>
        Nyquist rate fs = 2 * fm = 2 * 4000 = 8000 samples/second.<br>
        Step 2: Calculate Data Rate<br>
        Data Rate = fs * n = 8000 samples/s * 8 bits/sample = <strong>64,000 bps (ya 64 kbps)</strong>.<br>
        (Note: Yahi standard telephone lines ka bit rate hota hai).</p>
      `
    },
    {
      id: 't5-wdm',
      name: 'Wavelength Division Multiplexing (WDM)',
      theory: `
        <h3>Multiplexing Kya Hai?</h3>
        <p>Jab ek hi link/medium ke through multiple signals bhejne hote hain, toh hum multiplexing use karte hain. Jaise single highway par bohot saari cars chalti hain.</p>
        
        <h4>Wavelength Division Multiplexing (WDM)</h4>
        <p>WDM specially <strong>Optical Fiber</strong> cables ke liye design kiya gaya hai. Light ki alag-alag frequencies (colors/wavelengths) ko combine karke ek hi fiber ke through bheja jata hai.</p>
        <p>Conceptually, WDM aur FDM (Frequency Division Multiplexing) ek hi cheez hain, bas FDM radio/electrical signals ke liye hota hai aur WDM optical (light) signals ke liye.</p>
        
        <h4>Kaam Kaise Karta Hai?</h4>
        <p>Sender side par ek <strong>Multiplexer (Mux)</strong> hota hai jo alag-alag lasers se aane wali roshni (different wavelengths λ1, λ2, λ3...) ko ek optical fiber mein combine karta hai (Prism concept). Receiver side par ek <strong>Demultiplexer (Demux)</strong> wapas un lights ko unke original colors/wavelengths mein separate kar deta hai.</p>
        
        <pre>
[Tx 1]--λ1--|         |--Fiber--|         |--λ1--[Rx 1]
[Tx 2]--λ2--| MUX(△) |=========>| (▽)DEMUX |--λ2--[Rx 2]
[Tx 3]--λ3--|         |         |         |--λ3--[Rx 3]
        </pre>
        
        <h4>Dense WDM (DWDM) vs Coarse WDM (CWDM)</h4>
        <ul>
          <li><strong>DWDM:</strong> Jab wavelengths ek dusre ke bohot paas-paas (densely packed) hote hain. Isme 80 se 160 channels tak multiplex ho sakte hain, massive data rate deta hai.</li>
          <li><strong>CWDM:</strong> Wavelengths ke beech gap jyada hota hai, sasta hota hai, par kam channels support karta hai.</li>
        </ul>
        
        <div class="tip-box">
          <div class="tip-title">💡 Yaad Rakho</div>
          WDM sirf aur sirf Optical Fiber communication mein use hota hai. Prism iska sabse simple real-world example/hardware component hota hai jo light ko mix aur split karta hai.
        </div>
        
        <h4>Example (Worked Out)</h4>
        <p><strong>Concept Check:</strong> Ek optical fiber mein 10 Gbps ke 40 alag-alag wavelength channels chal rahe hain (DWDM system). Total capacity link ki kitni hogi?</p>
        <p><strong>Solution:</strong><br>
        Total Capacity = Ek channel ka data rate * Total channels<br>
        Total Capacity = 10 Gbps * 40 = <strong>400 Gbps</strong>.<br>
        Yehi WDM ka faida hai, bina nayi fiber bichaye purani fiber ki capacity multiply ho jati hai.</p>
      `
    },
    {
      id: 't6-gsm-cdma',
      name: 'GSM & CDMA Technologies',
      theory: `
        <h3>Cellular Networks (2G / 3G)</h3>
        <p>Mobile phones wireless communication use karte hain aur pura coverage area chhote-chhote "Cells" mein divided hota hai. In cells ke signals ko manage karne ke liye do popular technologies develop hui: GSM aur CDMA.</p>
        
        <h4>GSM (Global System for Mobile Communications)</h4>
        <p>GSM ek 2G standard hai jo duniya mein sabse zyada popular hua. Yeh <strong>FDMA (Frequency Division Multiple Access)</strong> aur <strong>TDMA (Time Division Multiple Access)</strong> dono ka combination use karta hai.</p>
        <ul>
          <li>Pehle total available frequency ko alag-alag bands (carrier frequencies) mein divide kiya jata hai (FDMA).</li>
          <li>Phir har frequency band ko time slots mein banta jata hai, aur har user ko ek specific time slot milta hai baat karne ke liye (TDMA).</li>
          <li>GSM mein <strong>SIM (Subscriber Identity Module)</strong> card ka concept introduce hua jisne user ki identity ko handset se alag kar diya.</li>
        </ul>
        
        <h4>CDMA (Code Division Multiple Access)</h4>
        <p>CDMA ek bilkul alag approach use karta hai. Isme na toh frequency ko tukdo mein banta jata hai, na hi time slots banaye jate hain. Sabhi users ek hi time par pura frequency band use karte hain.</p>
        <ul>
          <li><strong>Spread Spectrum:</strong> User ke signal ko spread kar diya jata hai.</li>
          <li>Har user ko ek unique mathematical <strong>CODE</strong> assign hota hai.</li>
          <li>Receiver sirf usi specific code wali bits ko decript karta hai, baki sab noise lagti hain. It's like ek room mein log alag-alag languages mein baat kar rahe hon, aapko sirf apni samajh aati hai.</li>
          <li><strong>Soft Handoff:</strong> CDMA ki ek badi khasiyat. Jab aap ek tower se dusre par shift hote hain, toh "Make before break" hota hai. Naye tower se judne ke baad hi purana cut hota hai (call drop kam hoti hai).</li>
        </ul>
        
        <table class="comparison-table">
          <tr>
            <th>Feature</th>
            <th>GSM</th>
            <th>CDMA</th>
          </tr>
          <tr>
            <td>Access Method</td>
            <td>FDMA + TDMA</td>
            <td>Spread Spectrum (Codes)</td>
          </tr>
          <tr>
            <td>Bandwidth/User</td>
            <td>Narrowband (Specific time/freq)</td>
            <td>Entire Bandwidth used by all</td>
          </tr>
          <tr>
            <td>Handoff</td>
            <td>Hard Handoff (Break before make)</td>
            <td>Soft Handoff (Make before break)</td>
          </tr>
          <tr>
            <td>Security</td>
            <td>Moderate</td>
            <td>High (due to complex encoding)</td>
          </tr>
        </table>
        
        <div class="warning-box">
          <div class="tip-title">⚠️ Exam Trap</div>
          Agar question pooche ki "kaunsi technology mein sabhi users ek hi frequency aur ek hi time par transmit karte hain?", toh answer humesha CDMA hoga. GSM mein time alag (TDMA) ya frequency alag (FDMA) hoti hai.
        </div>
      `
    }
  ],
  questions: [
    {
      id: 1,
      topic: 't1-capacity',
      question: 'Noiseless channel ki maximum channel capacity (bit rate) nikalne ke liye kis theorem ka use kiya jata hai?',
      options: [
        'Nyquist Theorem',
        'Shannon Theorem',
        'Fourier Theorem',
        'Maxwell Theorem'
      ],
      correct: 0,
      explanation: 'Sahi answer Nyquist Theorem hai kyunki Nyquist ne noiseless channel ke liye bit rate formula (C = 2B log2(L)) diya tha. Shannon noisy channel ke liye hota hai.'
    },
    {
      id: 2,
      topic: 't1-capacity',
      question: 'Agar ek communication channel ki bandwidth 1000 Hz hai aur Signal-to-Noise Ratio (SNR) 15 hai, toh Shannon capacity kitni hogi?',
      options: [
        '15000 bps',
        '4000 bps',
        '1000 bps',
        '2000 bps'
      ],
      correct: 1,
      explanation: 'Sahi answer 4000 bps hai. Shannon formula: C = B * log2(1 + SNR). Yaha C = 1000 * log2(1 + 15) = 1000 * log2(16). log2(16) = 4. Toh C = 1000 * 4 = 4000 bps. Baki options galat calculations hain.'
    },
    {
      id: 3,
      topic: 't1-capacity',
      question: 'Shannon capacity formula mein, term \'C = B * log2(1 + SNR)\', agar channel mein bilkul bhi noise na ho (SNR tends to infinity), tab capacity kya hogi?',
      options: [
        'Zero',
        'Infinite',
        'Equal to Bandwidth',
        'Negative'
      ],
      correct: 1,
      explanation: 'Sahi answer Infinite hai. Mathematically, agar SNR infinity hai (noise is zero), toh log(infinity) infinity hi hota hai, jisse theoretical capacity infinite ban jayegi. Reality mein noiseless system exist nahi karta isliye Nyquist limit lagti hai.'
    },
    {
      id: 4,
      topic: 't1-capacity',
      question: 'Ek digital channel jisme 4 signal levels hain, uski bandwidth 2000 Hz hai. Nyquist maximum bit rate kya hoga?',
      options: [
        '4000 bps',
        '8000 bps',
        '16000 bps',
        '32000 bps'
      ],
      correct: 1,
      explanation: 'Sahi answer 8000 bps hai. Formula: Bit Rate = 2 * B * log2(L). Yaha B = 2000, L = 4. Bit Rate = 2 * 2000 * log2(4) = 4000 * 2 = 8000 bps.'
    },
    {
      id: 5,
      topic: 't2-impairments',
      question: 'Medium ke through travel karte time signal ki energy/strength ka kam ho jana kya kehlata hai?',
      options: [
        'Distortion',
        'Attenuation',
        'Noise',
        'Amplification'
      ],
      correct: 1,
      explanation: 'Sahi answer Attenuation hai. Signal ki distance ke sath energy loss ko attenuation kehte hain. Distortion mein shape badalta hai, Noise mein unwanted signal mix hota hai.'
    },
    {
      id: 6,
      topic: 't2-impairments',
      question: 'Attenuation ko kam karne aur signal ki strength badhane ke liye kis device ka use kiya jata hai?',
      options: [
        'Equalizer',
        'Multiplexer',
        'Amplifier',
        'Modulator'
      ],
      correct: 2,
      explanation: 'Sahi answer Amplifier (ya Repeater) hai. Amplifier weak signal ko boost/amplify karta hai. Equalizer distortion thik karta hai, Mux signals combine karta hai.'
    },
    {
      id: 7,
      topic: 't2-impairments',
      question: 'Data communication ke doran kis type ka noise sabse unpredictable aur destructive hota hai?',
      options: [
        'Thermal Noise',
        'Crosstalk',
        'Impulse Noise',
        'White Noise'
      ],
      correct: 2,
      explanation: 'Sahi answer Impulse Noise hai. Yeh short duration aur high energy spike hota hai (jaise lightning), jo sudden aakar data bits ko corrupt kar deta hai, isliye iska bachav sabse mushkil hota hai.'
    },
    {
      id: 8,
      topic: 't2-impairments',
      question: 'Agar ek signal ka power transmission line par 50% loss ho jata hai, toh uski attenuation dB (decibels) mein kareeb kitni hogi?',
      options: [
        '-3 dB',
        '-10 dB',
        '-50 dB',
        '0 dB'
      ],
      correct: 0,
      explanation: 'Sahi answer -3 dB hai. Jab power aadhi (half) reh jati hai (P_out / P_in = 1/2), tab 10 * log10(0.5) roughly -3 dB hota hai. Yeh ek standard fact hai ki har 3dB attenuation par power half ho jati hai.'
    },
    {
      id: 9,
      topic: 't3-em-wave',
      question: 'Kis frequency range par EM waves Ionosphere se reflect hokar wapas aati hain (Sky wave propagation)?',
      options: [
        'Below 2 MHz',
        'Between 2 MHz and 30 MHz',
        'Above 30 MHz',
        'Above 1 GHz'
      ],
      correct: 1,
      explanation: 'Sahi answer Between 2 MHz and 30 MHz (High Frequency - HF band) hai. 2 MHz se kam Ground wave hoti hain aur 30 MHz se upar LOS (Line of Sight) hoti hain jo atmosphere paar kar jati hain.'
    },
    {
      id: 10,
      topic: 't3-em-wave',
      question: 'Microwave communication aur Mobile towers kis propagation method ka use karte hain?',
      options: [
        'Ground Wave Propagation',
        'Sky Wave Propagation',
        'Line-of-Sight Propagation',
        'Water Wave Propagation'
      ],
      correct: 2,
      explanation: 'Sahi answer Line-of-Sight Propagation hai. Ye High frequencies (>30MHz) use karte hain jo straight line mein travel karti hain, inko direct antenna visibility chahiye hoti hai.'
    },
    {
      id: 11,
      topic: 't3-em-wave',
      question: 'AM radio broadcasting low frequencies ka use karti hai jisse signals earth ki surface curvature ke saath ghum sakte hain. Yeh kiska example hai?',
      options: [
        'Sky wave',
        'Line of Sight wave',
        'Ground wave',
        'Infrared propagation'
      ],
      correct: 2,
      explanation: 'Sahi answer Ground wave hai. Low frequencies (<2MHz) earth ki surface ke chipak kar (hug karke) travel karti hain jise ground wave kehte hain.'
    },
    {
      id: 12,
      topic: 't3-em-wave',
      question: 'Optical communication jisme signals light ki form mein travel karte hain, usme kis medium ki zarurat hoti hai?',
      options: [
        'Coaxial cable',
        'Twisted Pair',
        'Fiber Optic Cable',
        'Vacuum Tube'
      ],
      correct: 2,
      explanation: 'Sahi answer Fiber Optic Cable hai. Coaxial aur Twisted pair electrical signal ke liye hote hain. Fiber optics light (photons) ka use karta hai.'
    },
    {
      id: 13,
      topic: 't4-pcm-dm',
      question: 'Nyquist sampling theorem ke anusar, kisi analog signal ko digitize karte samay sampling frequency kitni honi chahiye?',
      options: [
        'Equal to maximum signal frequency',
        'Half of the maximum signal frequency',
        'At least twice the maximum signal frequency',
        'Four times the maximum signal frequency'
      ],
      correct: 2,
      explanation: 'Sahi answer "At least twice the maximum signal frequency" (fs ≥ 2*fm) hai. Agar isse kam rate par sample kiya gaya, toh aliasing error ho jata hai aur original signal reconstruct nahi ho pata.'
    },
    {
      id: 14,
      topic: 't4-pcm-dm',
      question: 'PCM (Pulse Code Modulation) mein continuous range of values ko nearest valid digital values mein round off karne ki process ko kya kehte hain?',
      options: [
        'Sampling',
        'Quantization',
        'Encoding',
        'Multiplexing'
      ],
      correct: 1,
      explanation: 'Sahi answer Quantization hai. Sampling time-based discretization hai, jabki quantization amplitude-based rounding off hai. Encoding to un rounded values ko binary me likhna hai.'
    },
    {
      id: 15,
      topic: 't4-pcm-dm',
      question: 'Delta Modulation (DM) mein ek sample ko represent karne ke liye kitni bits transmit ki jati hain?',
      options: [
        '1 bit',
        '4 bits',
        '8 bits',
        '16 bits'
      ],
      correct: 0,
      explanation: 'Sahi answer 1 bit hai. DM ki yehi khasiyat hai ki wo sirf pichli value se change (+ or -) record karta hai, isliye sirf 1 bit ki zarurat padti hai (0 ya 1).'
    },
    {
      id: 16,
      topic: 't4-pcm-dm',
      question: 'Jab input analog signal ki slope (badhne ki raftar) Delta Modulation ke step size se zyada ho, tab kis prakar ka error hota hai?',
      options: [
        'Granular noise',
        'Slope overload distortion',
        'Phase distortion',
        'Aliasing'
      ],
      correct: 1,
      explanation: 'Sahi answer Slope overload distortion hai. DM ka signal original fast-changing signal ko catch up nahi kar pata. Granular noise tab aati hai jab signal slow ho aur step size bada ho.'
    },
    {
      id: 17,
      topic: 't4-pcm-dm',
      question: 'Standard telephone voice signal (band-limited to 4 kHz) ko 8-bit PCM se encode karne par standard bit rate kya nikal kar aata hai?',
      options: [
        '32 kbps',
        '64 kbps',
        '128 kbps',
        '256 kbps'
      ],
      correct: 1,
      explanation: 'Sahi answer 64 kbps hai. fm = 4000 Hz, isliye fs = 8000 Hz. Har sample 8 bit ka hai, toh 8000 * 8 = 64,000 bits per second = 64 kbps.'
    },
    {
      id: 18,
      topic: 't5-wdm',
      question: 'WDM (Wavelength Division Multiplexing) kis physical medium ke liye specifically design kiya gaya hai?',
      options: [
        'Copper cables',
        'Optical fibers',
        'Wireless radio',
        'Microwave links'
      ],
      correct: 1,
      explanation: 'Sahi answer Optical fibers hai. WDM mein alag-alag colors (wavelengths) ki light ko multiplex kiya jata hai, jo sirf optical fiber mein hi flow karti hain.'
    },
    {
      id: 19,
      topic: 't5-wdm',
      question: 'WDM conceptual roop se kis traditional multiplexing technique ka optical version hai?',
      options: [
        'TDM (Time Division Multiplexing)',
        'FDM (Frequency Division Multiplexing)',
        'CDM (Code Division Multiplexing)',
        'SDM (Space Division Multiplexing)'
      ],
      correct: 1,
      explanation: 'Sahi answer FDM hai. WDM mein light ki frequencies ko alag-alag divide kiya jata hai (λ = c/f), jo FDM ka hi light based equivalent hai.'
    },
    {
      id: 20,
      topic: 't5-wdm',
      question: 'Ek optical fiber channel mein multiple wavelengths ko combine karne aur wapas split karne ke liye sabse basic optical component kya use hota hai?',
      options: [
        'Prism',
        'Amplifier',
        'Modem',
        'Router'
      ],
      correct: 0,
      explanation: 'Sahi answer Prism hai. Physics mein prism ka kaam light ke colors ko mix aur split karna hota hai, yehi principal MUX aur DEMUX me WDM system me lagta hai.'
    },
    {
      id: 21,
      topic: 't5-wdm',
      question: 'DWDM aur CWDM kis technology ke types hain aur inme basic difference kiska hai?',
      options: [
        'Wireless, Frequency spacing',
        'WDM, Wavelength spacing',
        'TDM, Time slot spacing',
        'PCM, Bit depth spacing'
      ],
      correct: 1,
      explanation: 'Sahi answer WDM, Wavelength spacing hai. Dense WDM me wavelengths pass-pass hote hain aur Coarse WDM me door-door.'
    },
    {
      id: 22,
      topic: 't6-gsm-cdma',
      question: 'GSM mobile system communication ke liye kin access methods ka combination use karta hai?',
      options: [
        'FDMA aur TDMA',
        'TDMA aur CDMA',
        'FDMA aur CDMA',
        'Sirf CDMA'
      ],
      correct: 0,
      explanation: 'Sahi answer FDMA aur TDMA hai. GSM frequency ko bands me banta hai (FDMA) aur phir unme time slots deta hai (TDMA).'
    },
    {
      id: 23,
      topic: 't6-gsm-cdma',
      question: 'Kis mobile technology mein sabhi users ek hi samay par aur ek hi common frequency band par data transmit karte hain?',
      options: [
        'GSM',
        'CDMA',
        'FDMA',
        'TDMA'
      ],
      correct: 1,
      explanation: 'Sahi answer CDMA hai. Isme spread spectrum ka use hota hai aur har user ko ek special code diya jata hai, isliye frequencies aur time divide karne ki zarurat nahi hoti.'
    },
    {
      id: 24,
      topic: 't6-gsm-cdma',
      question: 'GSM technology mein SIM ka full form kya hota hai?',
      options: [
        'System Identity Module',
        'Subscriber Identity Module',
        'Secure Information Module',
        'Standard Interface Module'
      ],
      correct: 1,
      explanation: 'Sahi answer Subscriber Identity Module hai. SIM card subscriber ka data rakhta hai jisse identity mobile device se alag ho jati hai (GSM ki sabse badi invention).'
    },
    {
      id: 25,
      topic: 't6-gsm-cdma',
      question: 'Soft Handoff (Make before break) ki suvidha naturally kis network technology mein pai jati hai?',
      options: [
        'AMPS (1G)',
        'GSM',
        'CDMA',
        'Wired LAN'
      ],
      correct: 2,
      explanation: 'Sahi answer CDMA hai. CDMA mein nayi cell site se connect hone ke baad hi purani cell site ka signal disconnect hota hai (Make before break), isliye call drop bahut kam hoti hai. GSM me Hard handoff hota hai.'
    },
    {
      id: 26,
      topic: 't2-impairments',
      question: 'Agar ek communication link mein 2 amplifer lage hain jinka gain +15 dB each hai, aur cable ka loss -20 dB hai, toh overall system gain/loss kya hoga?',
      options: [
        '-5 dB (Loss)',
        '+10 dB (Gain)',
        '+50 dB (Gain)',
        '+5 dB (Gain)'
      ],
      correct: 1,
      explanation: 'Sahi answer +10 dB (Gain) hai. Decibels me calculations add/subtract hoti hain. Total = +15 (amp1) - 20 (cable) + 15 (amp2) = +10 dB.'
    },
    {
      id: 27,
      topic: 't1-capacity',
      question: 'Digital transmission mein agar ek baud mein 2 bits (jaise QPSK mein) encode ho rahi hon, aur baud rate 1000 hai, toh bit rate kya hoga?',
      options: [
        '500 bps',
        '1000 bps',
        '2000 bps',
        '4000 bps'
      ],
      correct: 2,
      explanation: 'Sahi answer 2000 bps hai. Bit rate = Baud rate * bits per baud (signal element). Toh 1000 bauds * 2 bits/baud = 2000 bps. Baud rate frequency of signal change ko darshata hai.'
    }
  ]
};

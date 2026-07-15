const fs = require('fs');

const paper1Templates = [
    { text: "What is the capital of Rajasthan?", options: ["Udaipur", "Jodhpur", "Jaipur", "Kota"], correctIndex: 2 },
    { text: "Which river is known as the lifeline of Rajasthan?", options: ["Luni", "Chambal", "Mahi", "Banas"], correctIndex: 1 },
    { text: "Who built the Hawa Mahal in Jaipur?", options: ["Sawai Jai Singh", "Sawai Pratap Singh", "Raja Man Singh", "Maharana Pratap"], correctIndex: 1 },
    { text: "Which festival is celebrated in Rajasthan with camel races?", options: ["Teej", "Pushkar Fair", "Desert Festival", "Gangaur"], correctIndex: 2 },
    { text: "In which year was the state of Rajasthan formed?", options: ["1947", "1949", "1950", "1956"], correctIndex: 3 },
    { text: "What is the official state tree of Rajasthan?", options: ["Banyan", "Peepal", "Khejri", "Neem"], correctIndex: 2 },
    { text: "Which is the highest peak in the Aravalli Range?", options: ["Mount Abu", "Guru Shikhar", "Achalgarh", "Kumbhalgarh"], correctIndex: 1 },
    { text: "The famous Dilwara Temples are located in:", options: ["Udaipur", "Jodhpur", "Mount Abu", "Jaisalmer"], correctIndex: 2 },
    { text: "Which is the largest desert in Rajasthan?", options: ["Sahara", "Thar", "Gobi", "Kalahari"], correctIndex: 1 },
    { text: "If 'A' is encoded as 1 and 'B' as 2, what is the code for 'CAB'?", options: ["312", "123", "231", "321"], correctIndex: 0 }
];

const paper2Templates = [
    { text: "Which sorting algorithm has the best average-case time complexity?", options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"], correctIndex: 2 },
    { text: "In OOP, what allows an object to take many forms?", options: ["Encapsulation", "Polymorphism", "Inheritance", "Abstraction"], correctIndex: 1 },
    { text: "What does SQL stand for?", options: ["Structured Query Language", "Strong Question Language", "Structured Question Language", "System Query Language"], correctIndex: 0 },
    { text: "Which OSI layer is responsible for logical addressing?", options: ["Data Link Layer", "Network Layer", "Transport Layer", "Session Layer"], correctIndex: 1 },
    { text: "In an OS, which scheduling algorithm is non-preemptive?", options: ["Round Robin", "Shortest Remaining Time First", "First Come First Serve", "Multilevel Queue"], correctIndex: 2 },
    { text: "What is the main function of a DNS server?", options: ["Host websites", "Translate domain names to IP addresses", "Provide internet connection", "Secure network traffic"], correctIndex: 1 },
    { text: "Which of the following is NOT a fundamental data type in C++?", options: ["int", "float", "string", "char"], correctIndex: 2 },
    { text: "What is the time complexity of searching in a balanced BST?", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], correctIndex: 2 },
    { text: "Which logic gate outputs 1 only when all inputs are 1?", options: ["OR", "NAND", "XOR", "AND"], correctIndex: 3 },
    { text: "Which testing is performed by end-users in a real environment?", options: ["Alpha Testing", "Beta Testing", "Unit Testing", "Integration Testing"], correctIndex: 1 }
];

function generateExam(examNum) {
    const paper1 = [];
    const paper2 = [];

    // Generate 100 questions for Paper 1
    for (let i = 1; i <= 100; i++) {
        const template = paper1Templates[i % paper1Templates.length];
        paper1.push({
            id: `e${examNum}_p1_q${i}`,
            text: `[Q${i}] ${template.text}`,
            options: template.options,
            correctIndex: template.correctIndex,
            explanation: `This is the detailed explanation for question ${i} in Paper I of Mock Exam ${examNum}.`
        });
    }

    // Generate 100 questions for Paper 2
    for (let i = 1; i <= 100; i++) {
        const template = paper2Templates[i % paper2Templates.length];
        paper2.push({
            id: `e${examNum}_p2_q${i}`,
            text: `[Q${i}] ${template.text}`,
            options: template.options,
            correctIndex: template.correctIndex,
            explanation: `This is the detailed explanation for question ${i} in Paper II of Mock Exam ${examNum}.`
        });
    }

    const fileContent = `window.EXAMS = window.EXAMS || {};
window.EXAMS['exam${examNum}'] = {
    paper1: ${JSON.stringify(paper1, null, 2)},
    paper2: ${JSON.stringify(paper2, null, 2)}
};`;

    fs.writeFileSync(`data/exam-${examNum}.js`, fileContent);
    console.log(`Generated data/exam-${examNum}.js`);
}

for (let i = 1; i <= 4; i++) {
    generateExam(i);
}

let eniacDevelopers = [
    'John Mauchly (project lead)',
    'J. Presper Eckert (project lead, electrical engineer)',
    'Jean Jennings (programmer)',
    'Betty Snyder (programmer)',
    'Frances Bilas (programmer)',
    'Kay McNulty (programmer)',
    'Marlyn Wescoff (programmer)',
    'Ruth Lichterman (progammer)',
];

let eniacData = {
    computer: 'ENIAC',
    yearOperational: 1945,
    programmers: ['Jean Jennings', 'Betty Snyder', 'Frances Biles'],
    leadership: ['John Mauchly', 'J. Presper Eckert']
};

// We can access the data in an object using dot notation or bracket notation

console.log(eniacData);
console.log(eniacData.yearOperational);
console.log(eniacData['yearOperational']);

eniacData.programmers.push('Kay McNulty');

console.log(eniacData);



// We can add data to an object using dot notation or bracket notation as well

let colossusData = {};

colossusData.computer = 'COLOSSUS';
colossusData['yearOperational'] = 1943;

console.log(colossusData);

colossusData.computer = 'COLOSSUS 2';

console.log(colossusData);



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
    leadership: ['John Mauchly', 'J. Presper Eckert'],
    engineers: ['J. Presper Eckert'],
    programmers: ['Jean Jennings', 'Betty Snyder', 'Frances Bilas', 'Kay McNulty', 'Marlyn Wescoff', 'Ruth Lictherman']
};

// We access data stored in 'developers' object using dot or bracket notation:

let computerName = eniacData.computer;
let programmers = eniacData['programmers'];

console.log(computerName);
console.log(programmers);

// We add data to an object that we first initialize as empty using dot or
// bracket notation:

let colossusData = {};

colossusData.computer = 'COLOSSUS';
colossusData['yearOperational'] = 1943;
colossusData.mathematicians = ['Alan Turing', 'Max Newman'];
colossusData['operators'] = ['Dorothy Du Boisson', 'Jean Beech'];

console.log(colossusData);


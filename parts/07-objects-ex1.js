
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
    programmers: ['Jean Jennings', 'Betty Snyder']
};

console.log(eniacData.computer)
console.log(eniacData['computer'])

let computer = 'yearOperational';

console.log(eniacData[computer]);

let programmers = eniacData.programmers;

console.log(programmers);
console.log(programmers[0]);

let index;

console.log(eniacData.programmers[index])

let colossusData = {};

colossusData.computer = 'COLOSSUS';
colossusData['yearOperational'] = 1943;
colossusData.mathematicians = ['Alan Turing', 'Max Newman']

console.log(colossusData);



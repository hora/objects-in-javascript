
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
    programmers: ['Jean Jennings', 'Betty S', 'Frances B', 'Kay M', 'Marlyn W', 'Ruth L'],
    leadership: ['John M', 'J. Presper E'],
    engineers: ['J. Presper Eckert']
};

// log the whole object, all the ENIAC data
//console.log(eniacData);

// these are just the programmers
//console.log(eniacData.programmers);
//console.log(eniacData['programmers']);

let colossusData = {};

colossusData.computer = 'COLOSSUS';
colossusData.mathematicians = ['Alan Turing', 'Max Newman'];

//console.log(colossusData);

//colossusData.computer += ' 2';
// JS will evalute the right side of the = operator first, which is
// why the following code will work:
colossusData.computer = [colossusData.computer, 'COLOSSUS 2']

colossusData['operators'] = ['Dorothy Du Boisson', 'Jean Beech'];




let yearOperational = 1943;

console.log(colossusData);








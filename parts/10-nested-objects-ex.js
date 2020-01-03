
let earlyComputers = {
    eniac: {
        computerName: 'ENIAC',
        yearOperational: 1945,
        leadership: ['John Mauchly', 'J. Presper Eckert'],
        engineers: ['J. Presper Eckert'],
        programmers: ['Jean Jennings', 'Betty Snyder', 'Frances Bilas', 'Kay McNulty', 'Marlyn Wescoff', 'Ruth Lictherman']
    },
    colossus: {
        computerName: 'COLOSSUS',
        yearOperational: 1943,
        mathematicians: ['Alan Turing', 'Max Newman'],
        operators: ['Dorothy Du Boisson', 'Jean Beech']
    }
};

// We access objects nested inside other objects in the same way:

let eniac = earlyComputers.eniac;

console.log(eniac); // will log the whole object referred to by the key 'eniac'
console.log(eniac.yearOperational); // 1945

let yearOperational = earlyComputers.eniac.yearOperational;

console.log(yearOperational); // 1945



let earlyComputers = {

    eniac: {
        computerName: 'ENIAC',
        yearOperational: 1945,
        leadership: ['John Mauchly', 'J. Presper Eckert'],
        engineers: ['J. Presper Eckert'],
        programmers: ['Jean Jennings', 'Betty Snyder', 'Frances Bilas', 'Kay McNulty', 'Marlyn Wescoff', 'Ruth Lictherman']
    },

    colossus: {
        computer: 'COLOSSUS',
        yearOperational: 1943,
        mathematicians: ['Alan Turing', 'Max Newman'],
        operators: ['Dorothy Du Boisson', 'Jean Beech']
    }

};

console.log(earlyComputers.colossus.yearOperational);
console.log(earlyComputers.eniac.programmers[1]);

let selections = process.argv.slice(2);

console.log(selections);

console.log(earlyComputers[selections[0]][selections[1]])


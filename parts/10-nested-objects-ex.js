
let earlyComputers = {

    eniac : {
        computerName: 'ENIAC',
        yearOperational: 1945,
        leadership: ['John Mauchly', 'J. Presper Eckert'],
        engineers: ['J. Presper Eckert'],
        programmers: ['Jean Jennings', 'Betty Snyder', 'Frances Bilas', 'Kay McNulty', 'Marlyn Wescoff', 'Ruth Lictherman']
    },

    colossus : {
        computer: 'COLOSSUS',
        yearOperational: 1943,
        mathematicians: ['Alan Turing', 'Max Newman'],
        operators: ['Dorothy Du Boisson', 'Jean Beech']
    }

};

console.log(earlyComputers.colossus.computer);

console.log(earlyComputers.colossus.operators[1]);
console.log(earlyComputers['colossus'].operators[1]);
console.log(earlyComputers['colossus']['operators'][1]);

console.log(earlyComputers.colossus.operators.length);

earlyComputers.colossus.operators.push('Somebody Else');


console.log(earlyComputers.colossus.operators);

earlyComputers.colossus.yearOperational = 1946;

console.log(earlyComputers.colossus);

// we can do this, but don't:
const key = 1;

const arr = ['abc', 'def'];
arr.key = 'something';

console.log(arr.key);

console.log(arr);





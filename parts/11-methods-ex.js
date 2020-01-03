
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

// Functions can also be properties of objects (as the value of key-value
// pairs). These specific kinds of functions are called methods:

earlyComputers.describe = function() {
    console.log('This is a collection of data about early computers and who worked on them.');
};

earlyComputers.describe();

// When we need to reference the object itself within a function, we need to use
// the keyword 'this':

earlyComputers.getEniac = function() {
    return this.eniac;
}

let eniac = earlyComputers.getEniac();

console.log(eniac);

earlyComputers.getWorkers = function(computer, role) {
    return this[computer][role];
};

let colossusOperators = earlyComputers.getWorkers('colossus', 'operators');
console.log(colossusOperators);


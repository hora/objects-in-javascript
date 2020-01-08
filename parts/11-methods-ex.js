let doSomeStuff = function() {
    /// ....
    /// ...
    return [1, 2, 3];
}

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
    },
    describe: function() {
        console.log('This is some data about some early computers.')
    },
    printOccupationForComputer: function(occupation, computer) {
        console.log(this[computer][occupation]);
    },
    someThing: doSomeStuff()
};


earlyComputers.describe();

let printProgrammers = function() {
    console.log(this.eniac.programmers);
}

earlyComputers.printProgrammers = printProgrammers;
earlyComputers.printProgrammers();

let operators = 'operators'
earlyComputers.printOccupationForComputer(operators, 'colossus');


console.log(earlyComputers);



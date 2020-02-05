earlyComputers = {
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
        operators: ['Dorothy Du Boisson', 'Jean Beech'],
        getOperators: function() {
            console.log(this.operators);
        }
    },
    getEniac: function() {
        console.log(this.eniac);
    },
    getWorkers: function(computer, job) {
        console.log(this[computer][job]);
    }
};

//earlyComputers.getEniac();

earlyComputers.colossus.getOperators();
earlyComputers.getWorkers('eniac', 'programmers');


//earlyComputers.describe = function() {
    //return 'This is a collection of data about early computers and who worked on them';
//};

//earlyComputers.describe();

//let otherComputerData = {
    //describeSomething: earlyComputers.describe()
//};

//console.log(otherComputerData.describeSomething);





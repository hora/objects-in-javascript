
let eniacData = {
    computerName: 'ENIAC',
    yearOperational: 1945,
    leadership: ['John Mauchly', 'J. Presper Eckert'],
    engineers: ['J. Presper Eckert'],
    programmers: ['Jean Jennings', 'Betty Snyder', 'Frances Bilas', 'Kay McNulty', 'Marlyn Wescoff', 'Ruth Lictherman']
};

let earlyComputers = {
    eniac: eniacData,
    colossus: {
        computer: 'COLOSSUS',
        yearOperational: 1943,
        mathematicians: ['Alan Turing', 'Max Newman'],
        operators: ['Dorothy Du Boisson', 'Jean Beech']
    }
}

console.log(earlyComputers.eniac.computerName)

earlyComputers.eniac.computerName = 'ENIAC 2';

console.log(earlyComputers.eniac.computerName)
console.log(eniacData.computerName)

earlyComputers.colossus.operators.push('Somebody else')
console.log(earlyComputers.colossus)



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

let eniac = earlyComputers.eniac;


for (let key in earlyComputers) {
    console.log(key);
    console.log(earlyComputers[key]);

    for (let key2 in earlyComputers[key]) {
        console.log(key2);
        console.log(earlyComputers[key][key2]);
    }
}

console.log(earlyComputers.length);

console.log(Object.keys(earlyComputers).length);


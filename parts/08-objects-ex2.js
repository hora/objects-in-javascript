
let eniacData = {
    computer: 'ENIAC',
    yearOperational: 1945,
    leadership: ['John Mauchly', 'J. Presper Eckert'],
    engineers: ['J. Presper Eckert'],
    programmers: ['Jean Jennings', 'Betty Snyder', 'Frances Bilas', 'Kay McNulty', 'Marlyn Wescoff', 'Ruth Lictherman']
};


// What will the following print to the console?

console.log(eniacData.computer);

console.log(eniacData['computer']);
// the following will evaluate to eniacData['ENIAC'], which will give us
// undefined (because there's no ENIAC key)
console.log(eniacData[eniacData.computer]);

// this will throw a reference error because computer is not defined:
//console.log(eniacData[computer]);

let key = 'computer';

console.log(eniacData[key]);

console.log(eniacData.key);

console.log(eniacData.somethingThatDoesNotExistYet);

console.log(eniacData);


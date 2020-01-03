
let eniacData = {
    computer: 'ENIAC',
    yearOperational: 1945,
    leadership: ['John Mauchly', 'J. Presper Eckert'],
    engineers: ['J. Presper Eckert'],
    programmers: ['Jean Jennings', 'Betty Snyder', 'Frances Bilas', 'Kay McNulty', 'Marlyn Wescoff', 'Ruth Lictherman']
};


// What will the following print to the console?

console.log(eniacData.computer); // ENIAC

console.log(eniacData['computer']); // ENIAC

// The following throws an error because _computer_ is undefined:
// console.log(eniacData[computer]);
//
// This is because is looks for a variable named _computer_ instead of looking
// up the key 'computer' in the object

let key = 'computer';

console.log(eniacData[key]); // ENIAC

console.log(eniacData.key); // undefined

// Dot notation expects the literal name of a key
// Bracket notation exepcts the literal name of a key as a string, OR,
// a variable containing the name of a key as a string


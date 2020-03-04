
let eniacData = {
    computer: 'ENIAC',
    yearOperational: 1945,
    leadership: ['John Mauchly', 'J. Presper Eckert'],
    engineers: ['J. Presper Eckert'],
    programmers: ['Jean Jennings', 'Betty Snyder', 'Frances Bilas', 'Kay McNulty', 'Marlyn Wescoff', 'Ruth Lictherman']
};

console.log(eniacData.computer);
console.log(eniacData['computer']);

// The following throws a reference error because it looks for
// a variable called computer that is not defined:
//console.log(eniacData[computer]);

let key = 'computer'; 

console.log(eniacData[key]);

// You use dot notation when you reference the key name directly
// If you want to access something with a key that comes from a variable, or
// user input, or some other part of your code that you can't know directly
// you ALWAYS have to use bracket notation

console.log(eniacData.nothing);
console.log(eniacData.key);


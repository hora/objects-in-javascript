# Objects in JavaScript

![A black and white photo of Jean Jennings, Marlyn Wescoff, and Ruth Lichterman
programming the ENIAC computer.](https://github.com/hora/lhl-w1d3/blob/master/lesson-planning/eniac.jpg)

## Representing real-world data in JavaScript

```js
// Names of the programmers in the photo, represented as strings
"Jean Jennings"
"Marlyn Wescoff"
"Ruth Lichterman"

// Name of the computer in the photo, represented as a string
"ENIAC"

// The year the computer in the photo became operational, as a number and as a
// string
1945
"1945"
```

## Primitive data types in JS

Primitive data types, or primitives, are the building blocks of all data in a JS
program. There are 7 of them:

- string
- number
- boolean
- null
- undefined
- bigint
- symbol

## Data structures

Data structures are the ways we organize the data we're working with in a
computer program, so as to make it simpler to implement particular algorithms
more efficiently.

Note that in the term 'data structure,' we refer not only to the data itself,
but also the relationship among the data, and the operation that can be applied
to that data.

```js
// The names of the programmers in the photo, grouped together in an array to
// represent their relationship: a list of programmers who worked on the ENIAC
[
    "Jean Jennings",
    "Marlyn Wescoff",
    "Ruth Lichterman"
]
```

### Arrays are not suitable for all problems

```js
// Given an array of people who worked on the ENIAC
let eniacDevelopers = [
    'John Mauchly (project lead)',
    'J. Presper Eckert (project lead, electrical engineer)',
    'Betty Snyder (programmer)',
    'Frances Bilas (programmer)',
    'Kay McNulty (programmer)'
];

// We're missing the people in the photo, let's add them

eniacDevelopers.push('Jean Jennings (programmer)');
eniacDevelopers.push('Marlyn Wescoff (programmer)');
eniacDevelopers.push('Ruth Lichterman (progammer)');

console.log(eniacDevelopers);

// What if we wanted to know how many people worked on the ENIAC?

console.log(eniacDevelopers.length);

// What if we wanted to print to the console only the programmers?

// Algorithm idea:
//  - declare a result array
//  - loop through all the strings in eniacDevelopers
//      - check if the string contains the sub-string '(programmer)'
//          - if it does, push it to the result array
//  - print out the contents of the result array
//

// This is a difficult problem to solve with an array of strings.
// Also, what if we wanted to keep track not only of their names and roles, but
// other information, such as the multiple names the programmers had throughout
// their lives?
```

## Enter: Objects

JavaScript objects are "a data structure containing data and instructions for
working with the data." (From [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Glossary/object)).

JS objects:

- are a collection of properties that can be added or removed (from that
  collection)
- the values of a property can by of any type, including primitive data types,
  functions, and other objects
- properties are identified by strings (and symbols), called 'keys'

This data structure is similar to what in computer science is called a _hash
table_,  or what in other languages are called _dictionaries_, _maps_, or
_associative arrays_.

### Basic operations

```js

let eniacDevelopers = [
    'John Mauchly (project lead)',
    'J. Presper Eckert (project lead, electrical engineer)',
    'Jean Jennings (programmer)',
    'Betty Snyder (programmer)',
    'Frances Bilas (programmer)',
    'Kay McNulty (programmer)',
    'Marlyn Wescoff (programmer)',
    'Ruth Lichterman (progammer)',
];

let eniacData = {
    computer: 'ENIAC',
    yearOperational: 1945,
    leadership: ['John Mauchly', 'J. Presper Eckert'],
    engineers: ['J. Presper Eckert'],
    programmers: ['Jean Jennings', 'Betty Snyder', 'Frances Bilas', 'Kay McNulty', 'Marlyn Wescoff', 'Ruth Lictherman']
};

// We access data stored in 'developers' object using dot or bracket notation:

let computerName = eniacData.computer;
let programmers = eniacData['programmers'];

console.log(computerName);
console.log(programmers);

// We add data to an object that we first initialize as empty using dot or
// bracket notation:

let colossusData = {};

colossusData.computer = 'COLOSSUS';
colossusData['yearOperational'] = 1943;
colossusData.mathematicians = ['Alan Turing', 'Max Newman'];
colossusData['operators'] = ['Dorothy Du Boisson', 'Jean Beech'];

console.log(colossusData);
```

### Dot vs bracket notation when accessing object properties

```js
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

```

## Objects can be nested within other objects

```js
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

// We access objects nested inside other objects in the same way:

let eniac = earlyComputers.eniac;

console.log(eniac); // will log the whole object referred to by the key 'eniac'
console.log(eniac.yearOperational); // 1945

let yearOperational = earlyComputers.eniac.yearOperational;

console.log(yearOperational); // 1945

```

## Functions can also be object properties (known as methods)


Functions that are properties of an objects are called _methods_.

Note that to access the object itself from within a method, you need to use the
`this` keyword.

```js
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

```

## References and further reading

- [Defiintion of primitive data types, from
  MDN](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

- [Definition of JS objects from
  MDN](https://developer.mozilla.org/en-US/docs/Glossary/object)

- [Recoding gender: Women's changing participation in
  computing](https://drive.google.com/file/d/1XA7-ezuzRLpFI6IV6UuGSAT4k0wUVgkh/view)
  by Janet Abbate, chapter 1 (on the history of the ENIAC and COLOSSUS).



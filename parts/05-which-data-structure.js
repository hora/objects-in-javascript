
// Given an array of people who worked on the ENIAC
let eniacDevelopers = [
    'John Mauchly (project lead)',
    'J. Presper Eckert (project lead, electrical engineer)',
    'Betty Snyder (programmer)',
    'Frances Bilas (programmer)',
    'Kay McNulty (programmer)'
];

// adding more people to the list of folks who worked on the ENIAC
eniacDevelopers.push('Jean Jennings (programmer)');
eniacDevelopers.push('Marlyn Wescoff (programmer)');
eniacDevelopers.push('Ruth Lictherman (programmer)');

// to determine how many people in total were working on the ENIAC
eniacDevelopers.length;

// What if we wanted to print to the console ONLY the programmers?
//
// function: check the characters between ( and ), check if the string is equal
// to programmer
//  - we can use .split here
//  - filter, use regular expressions to look for 'programmer'
//
// 


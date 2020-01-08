
// Given an array of people who worked on the ENIAC
let eniacDevelopers = [
    'John Mauchly (project lead)',
    'J. Presper Eckert (project lead, electrical engineer)',
    'Betty Snyder (programmer)',
    'Frances Bilas (programmer)',
    'Kay McNulty (programmer)'
];

eniacDevelopers.push("Jean Jennings (programmer)");
eniacDevelopers.push("Marlyn Wescoff (programmer)");


console.log(eniacDevelopers);

// What if we wanted to know how many people worked on the ENIAC?

console.log('The number of people who worked on the ENIAC: ', eniacDevelopers.length);

// What if we wanted to print to the console only the programmers?

// idea: maybe we could build an algorithm based on knowing where in the array
// we can find our programmers
// idea: maybe we can go through each string in the array and write some code
// for figuring out whether they are programmers





























// This is a difficult problem to solve with an array of strings.
// Also, what if we wanted to keep track not only of their names and roles, but
// other information, such as the multiple names the programmers had throughout
// their lives?


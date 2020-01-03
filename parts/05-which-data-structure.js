
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


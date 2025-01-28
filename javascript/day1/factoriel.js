'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
/*
 * Create the function factorial here
 */
//Recursive
function factorial(n) {
    if (n == 0){ 
        return 1;
     } else {
        return n * factorial( n - 1 );
     }
}
//Iterative
// function factorial(n) {
//     let rval = 1;
//     for (let i = 2; i <= n; i++) {
//         rval = rval * i;
//     }
//     return rval;
// }
 

function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}
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

function regexVar() {
    const re = RegExp(/^(a|e|i|o|u).*\1$/);
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    return re;
}


function main(input) {
    const re = regexVar();
    const s = input.shift();
    
    console.log(re.test(s));
}

main(['bcd']);
main(['abcd']);
main(['abcda']);
main(['abcdo']);
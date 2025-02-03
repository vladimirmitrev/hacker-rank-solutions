function regexVar() {
    const re = RegExp(/([0-9]+)/g);
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    return re;
}

function main(input) {
    const re = regexVar();
    const s = input.shift();
    
    const r = s.match(re);
    
    for (const e of r) {
        console.log(e);
    }
}

main(['102, 1948948 and 1.3 and 4.5']);

function vowelsAndConsonants(s) {
    const vowels = [];
    const nonVowels = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'o' || s[i] == 'u' || s[i] == 'i') {
            vowels.push(s[i]);
        } else {
            nonVowels.push(s[i]);
        }
    }

    vowels.forEach(e => {
        console.log(e);
    });
    nonVowels.forEach(e => {
        console.log(e);
        
    });
}


function main() {
    const s = 'javascriptloops';
    
    vowelsAndConsonants(s);
}

main();
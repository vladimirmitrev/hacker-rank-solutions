function regexVar() {
    const re = RegExp(/^(Mr|Mrs|Mr|Dr|Er)\.[A-Za-z]+$/);
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    return re;
}


function main(input) {
    const re = regexVar();
    const s = input.shift();
    
    console.log(re.test(s));
}

main(['Dr#Joseph']);
main(['Mrs.Y']);
main(['Er .Abc']);

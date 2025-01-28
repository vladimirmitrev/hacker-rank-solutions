function getLetter(s) {
    let letter;

    switch (true) {
        case 'aeiou'.includes(s[0]): letter = 'A'; break;
        case 'bcdfg'.includes(s[0]): letter = 'B'; break;
        case 'hjklm'.includes(s[0]): letter = 'C'; break;
        default: letter = 'D';
    }

    // const sOne = "aeiou"; 
    // const sTwo = "bcdfg"; 
    // const sThree = "hjklm";

    // switch(true){
    //     case (sOne.search(s[0]) != -1):
    //     letter = "A";
    //     break;
    
    //     case (sTwo.search(s[0]) != -1):
    //     letter = "B";
    //     break;
    
    //     case (sThree.search(s[0]) != -1):
    //     letter = "C";
    //     break;
    
    //     default:
    //     letter = "D";
    // }

    // const i = 0;
    //   switch (true) {
    //     case new Set(["a", "e", "i", "o", "u"]).has(s.charAt(i)):
    //       letter = "A";
    //       break;
    //     case new Set(["b", "c", "d", "f", "g"]).has(s.charAt(i)):
    //       letter = "B";
    //       break;
    //     case new Set(["h", "j", "k", "l", "m"]).has(s.charAt(i)):
    //       letter = "C";
    //       break;
    //     default:
    //       letter = "D";
    //   }

    
    // Write your code here
    // switch (s.charAt(0)) {
    //     case 'a':
    //     case 'e':
    //     case 'i':
    //     case 'o':
    //     case 'u':
    //         letter = 'A'
    //         break;
    //     case 'b':
    //     case 'c':
    //     case 'd':
    //     case 'f':
    //     case 'g':
    //         letter = 'B'
    //         break;
    //     case 'h':
    //     case '':
    //     case 'k':
    //     case 'l':
    //     case 'm':
    //         letter = 'C'
    //         break;
    //     default:
    //         letter = 'D'
    //         break;
    // }
    // const getLetter = s => "DABC"[ ["aeiou", "bcdfg", "hjklm"].findIndex( str => str.includes(s[0]) ) + 1 ];
    
    return letter;
}


function main() {
    // const s = readLine();
    const s = "jadfgt";
    
    console.log(getLetter(s));
}

main();
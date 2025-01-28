function reverseString(s) {
    try {
        let splitted = s.split('').reverse().join('');
        console.log(splitted);
    } catch (error) {
        console.log(error.message);
        console.log(Number(s));
    }
}


function main() {
    // const s = eval(readLine());
    const s = '1234';
    // const s = Number(1234);
    
    reverseString(s);
}
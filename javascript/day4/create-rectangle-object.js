
function Rectangle(a, b) {
    // const rec = {
    // length: a,
    // width: b,
    // area: a * b,
    // perimeter: 2 * a + 2 * b
    // };
    
    // return rec;
    this.length = a;
    this.width = b;
    this.perimeter = 2 * a + 2 * b;
    this.area = a * b;
}


function main() {
    const a = 4;
    const b = 5;
    
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}

main();
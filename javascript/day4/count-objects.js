function getCount(objects) {
    let count = 0;
    
    for (let i = 0; i < objects.length; i++) {
        if (objects[i].x == objects[i].y) {
            count++;
        }
    }
    
    return count;
}


function main(input) {
    const n = Number(input.shift());
    let objects = [];
    
    for (let i = 0; i < n; i++) {
        const [a, b] = input.shift().split(" ");
        
        objects.push({x: +(a), y: +(b)});
    }
    
    console.log(getCount(objects));
}
main([
    '5', 
    '1 1',
    '2 3', 
    '3 3', 
    '3 4',
    '4 5'
    ]);

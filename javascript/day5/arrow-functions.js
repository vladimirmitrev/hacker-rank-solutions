function modifyArray(nums) {
//     let arr = [];

//    nums.forEach((element) => {
//         element = element % 2 == 0 ? element * 2 : element * 3;
//         arr.push(element);
//    });

//    return arr;

   return Array.from(nums, (element) => 
    element % 2 === 0 ? element * 2 : element * 3
  );
}


function main(input) {
    const n = input.shift();
    const a = input[0].split(' ').map(Number);
    
    console.log(modifyArray(a).toString().split(',').join(' '));
}

main([
    '5', 
    '1 2 3 4 5'
    ]);
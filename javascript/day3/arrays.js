function getSecondLargest(nums) {
  // Remove duplicates while preserving order
  const uniqueNums = [...new Set(nums)]; 

  // Sort the array in descending order
  uniqueNums.sort((a, b) => b - a); 

  // Return the second largest element
  return uniqueNums[1]; 
    
//Simple return
//   return Array.from(new Set(nums)).sort((a, b) => b - a) [1];

//! Solution 2 using for loop

// let largest = nums[0],
//     secondLargest = nums[0];

// for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > largest) {
//         secondLargest = largest;
//         largest = nums[i];
//     } else if (nums[i] > secondLargest && nums[i] < largest) {
//         secondLargest = nums[i];
//     }
// }
// return secondLargest;
}


function main() {
    const n = 5
    const input = "2 3 6 6 5";
    const nums = input.split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}

main();
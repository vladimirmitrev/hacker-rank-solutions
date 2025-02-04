let button5 = document.getElementById('btn5');

let nums = [1,2,3,6,9,8,7,4];
const ids = [1,2,3,6,9,8,7,4];

button5.onclick=function() {
    nums.unshift(nums.pop());
    for (i = 0; i <= 7; i++) {
        document.getElementById("btn" + ids[i]).innerHTML = nums[i];
    }
}

// button5.onclick = function () {
//   var viarableNum = btn1.innerHTML;
//   btn1.innerHTML = btn4.innerHTML;
//   btn4.innerHTML = btn7.innerHTML;
//   btn7.innerHTML = btn8.innerHTML;
//   btn8.innerHTML = btn9.innerHTML;
//   btn9.innerHTML = btn6.innerHTML;
//   btn6.innerHTML = btn3.innerHTML;
//   btn3.innerHTML = btn2.innerHTML;
//   btn2.innerHTML = viarableNum;
// };

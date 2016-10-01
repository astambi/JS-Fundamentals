// function multiplyNumbers(nums) {
//     let num1 = Number(nums[0]);
//     let num2 = Number(nums[1]);
//     return num1 * num2;
// }

// function multiplyNumbers([num1, num2]) {
//     return num1 * num2;
// }

// function multiplyNumbers([num1, num2]) {
//     return Number(num1) * Number(num2);
// }

function multiplyNumbers(nums) {
    let [num1, num2] = nums.map(Number);
    return num1 * num2;
}

console.log(multiplyNumbers(['3','2']));
console.log(multiplyNumbers(['23632.36', '-12.3249']));
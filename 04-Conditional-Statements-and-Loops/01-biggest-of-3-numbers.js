function biggestNumber(input) {
    let [num1, num2, num3] = input.map(Number);
    console.log(Math.max(num1, num2, num3));
}

// function biggestNumber([num1, num2, num3]) {
//     console.log(Math.max(num1, num2, num3));
// }

biggestNumber([5, -2, 7]);
biggestNumber([130, 5, 99]);
biggestNumber([43, 43.2, 43.1]);
biggestNumber([5, 5, 5]);
biggestNumber([-10, -20, -30]);

// alternative solutions for Judge:
// ([num1, num2, num3]) => console.log(Math.max(num1, num2, num3))
// ([num1, num2, num3]) => Math.max(num1, num2, num3)
// (nums) => Math.max(nums[0], nums[1], nums[2])
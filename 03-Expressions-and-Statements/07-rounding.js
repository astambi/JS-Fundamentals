function rounding(input) {
    let [number, precision] = input.map(Number);
    if (precision > 15) precision = 15;
    let multiplier = Math.pow(10, precision);
    let roundedNum = Math.round(number * multiplier) / multiplier;
    console.log(roundedNum);
}

rounding([3.1415926535897932384626433832795, 2]);
rounding([10.5, 3]);
function compoundInterest(input) {
    let [p, i, m, t] = input.map(Number);
    let n = 12 / m;
    let interest = p * Math.pow(1 + i / n / 100, n * t);
    console.log(interest.toFixed(2));
    // console.log(Math.round(interest * 100) / 100);
}

compoundInterest([1500, 4.3, 3, 6]);
compoundInterest([100000, 5, 12, 25]);
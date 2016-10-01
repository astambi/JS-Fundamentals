function primeNumberChecker(number) {
    number = Number(number);
    let isPrime = true;
    for (let d = 2; d <= Math.sqrt(number); d++) {
        if (number % d == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime && (number > 1);
}

console.log(primeNumberChecker(['7']));
console.log(primeNumberChecker(['8']));
console.log(primeNumberChecker(['81']));
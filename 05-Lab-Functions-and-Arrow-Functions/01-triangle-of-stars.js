function triangleOfStars(n) {
    function printStars(countStars) {
        console.log('*'.repeat(countStars));
    }
    n = Number(n);
    for (let i = 1; i <= n; i++)    printStars(i);
    for (let i = n -1; i > 0; i--)  printStars(i);
}

triangleOfStars([1]);
triangleOfStars([2]);
triangleOfStars([5]);
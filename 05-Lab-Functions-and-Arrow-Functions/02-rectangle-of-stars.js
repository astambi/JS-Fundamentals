// function rectangleOfStars(n = 5) {
//     n = Number(n);
//     for (let i = 1; i <= n; i++)
//         console.log('* '.repeat(n));
// }
//
// function rectangleOfStars(n = 5) {
//     n = Number(n);
//     for (let i = 1; i <= n; i++)
//         console.log('*' + ' *'.repeat(n - 1));
// }

function rectangleOfStars(n = 5) {
    function printStars(countStars = n) {
        console.log('*' + ' *'.repeat(countStars - 1));
    }
    n = Number(n);
    for (let i = 1; i <= n; i++) printStars();
}

rectangleOfStars();
rectangleOfStars(1);
rectangleOfStars(2);
rectangleOfStars(5);
rectangleOfStars(3, 5, 8);
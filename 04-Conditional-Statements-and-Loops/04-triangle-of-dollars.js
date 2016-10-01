// function triangleOfDollars([n]) {
//     n = Number(n);
//     let line = '';
//     for (let i = 1; i <= n; i++) {
//         line += '$';
//         console.log(line);
//     }
// }

// function triangleOfDollars([n]) {
//     n = Number(n);
//     let line = '';
//     for (let i = 1; i <= n; i++)
//         console.log(line += '$');
// }

// function triangleOfDollars([n]) {
//     n = Number(n);
//     for (let i = 1; i <= n; i++)
//         console.log(new Array(i+1).join('$'));
// }

function triangleOfDollars([n]) {
    n = Number(n);
    for (let i = 1; i <= n; i++)
        console.log('$'.repeat(i));
}

triangleOfDollars([3]);
triangleOfDollars([2]);
triangleOfDollars([4]);
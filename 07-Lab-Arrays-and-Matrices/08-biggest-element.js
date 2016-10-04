// function biggestElement(arr) {
//     let matrix = arr.map(row => row.split(' ').map(Number));
//     let biggestNumber = Number.NEGATIVE_INFINITY;
//     for (let row = 0; row < matrix.length; row++)
//         for (let col = 0; col < matrix[row].length; col++)
//             if(matrix[row][col] > biggestNumber)
//                 biggestNumber = matrix[row][col];
//     return biggestNumber;
// }

function biggestElement(arr) {
    let matrix = arr.map(row => row.split(' ').map(Number));
    let biggestNumber = Number.NEGATIVE_INFINITY;
    matrix.forEach(r => r.forEach
                        (x => biggestNumber = Math.max(biggestNumber, x)));
    return biggestNumber;
}

console.log(biggestElement(['20 50 10', '8 33 145']));
console.log(biggestElement(['3 5 7 12', '-1 4 33 2', '8 3 0 4']));
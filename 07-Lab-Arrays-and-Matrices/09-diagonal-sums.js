function diagonalSums(arr) {
    let matrix = arr.map(row => row.split(' ').map(Number));
    let diagonalSums = [0, 0];
    for (let row = 0; row < matrix.length; row++) {
        diagonalSums[0] += matrix[row][row];
        diagonalSums[1] += matrix[row][matrix.length - 1 - row];
    }
    console.log(diagonalSums.join(' '));
}

diagonalSums(['20 40',
            '10 60']);
diagonalSums(['3 5 17',
            '-1 7 14',
            '1 -8 89']);
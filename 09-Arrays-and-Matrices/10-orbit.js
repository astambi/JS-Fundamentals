function orbit(arr) {
    printMatrix(getMatrix(arr));

    function getMatrix(arr) {
        let data = arr.map(row => row.split(' ').filter(x => x != '').map(Number));
        let matrix = [], [rows, cols] = data[0], [starRow, starCol] = data[1];
        for (let row = 0; row < rows; row++) {
            matrix[row] = [];
            for (let col = 0; col < cols; col++)
                matrix[row][col] = 1 + Math.max(Math.abs(starRow - row),
                        Math.abs(starCol - col));
        }
        return matrix;
    }

    function printMatrix(matrix) {
        matrix.forEach(row => console.log(row.join(' ')));
    }
}

orbit([
    '4 4',
    '0 0'
]);

orbit([
    '5 5',
    '2 2'
]);

orbit([
    '3 3',
    '2 2'
]);
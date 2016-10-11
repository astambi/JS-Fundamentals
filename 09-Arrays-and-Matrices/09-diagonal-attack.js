function diagonalAttack(arr) {
    let matrix = arr.map(row => row.split(' ')
                                .filter(x => x != '')
                                .map(Number));
    if (matrix.length != matrix[0].length) 	// rows != cols
        return printMatrix(matrix); 		// not a square matrix => diagonals undefined

    let diagonalSums = [0,0];
    for (let row = 0; row < matrix.length; row++) {
        diagonalSums[0] += matrix[row][row];
        diagonalSums[1] += matrix[row][matrix.length - 1 - row];
    }
    if (diagonalSums[0] == diagonalSums[1])
        matrix = updateMatrix(matrix, diagonalSums[0]);
    printMatrix(matrix);

    function updateMatrix(matrix, value) {
        for (let row = 0; row < matrix.length; row++)
            for (let col = 0; col < matrix[row].length; col++)
                if (row != col && row != matrix.length - 1 - col)
                    matrix[row][col] = value;
        return matrix;
    }

    function printMatrix(matrix) {
        // console.log(matrix.map(row => row.join(' ')).join('\n'));
        matrix.forEach(row => console.log(row.join(' ')));
    }
}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);

diagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0']);
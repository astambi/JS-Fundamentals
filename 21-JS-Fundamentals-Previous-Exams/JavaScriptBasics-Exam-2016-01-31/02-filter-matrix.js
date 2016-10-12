function filterMatrix(input) {
    let seqLength = Number(input.pop());
    let matrix = [];
    input.forEach(row => matrix.push(row.split(' ')));
    let lastElement = undefined;
    let equalElements = []; // {row, col} of equal elements
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if ((row == 0 && col == 0) || matrix[row][col] == lastElement)
                equalElements.push({row: row, col: col});
            else {
                equalElements = [];
                equalElements.push({row: row, col: col});
            }
            if (equalElements.length == seqLength) {
                while (equalElements.length > 0) {
                    let lastEqual = equalElements.pop();
                    matrix[lastEqual.row][lastEqual.col] = undefined;
                }
            }
            lastElement = matrix[row][col];
        }
    }
    printFilteredMatrix(matrix);

    function printFilteredMatrix(matrix) {
        for (let row of matrix) {
            row = row.filter(x => x != undefined);
            if (row.length == 0)    console.log('(empty)');
            else                    console.log(row.join(' '));
        }
    }
}

filterMatrix([
    '3 3 3 2 5 9 9 9 9 1 2',
    '1 1 1 1 1 2 5 8 1 1 7',
    '7 7 1 2 3 5 7 4 4 1 2',
    '2'
]);

filterMatrix([
    '1 2 3 3',
    '3 5 7 8',
    '3 2 2 1',
    '3'
]);

filterMatrix([
    '2 1 1 1',
    '1 1 1',
    '3 7 3 3 1',
    '2'
]);

filterMatrix([
    '1 2 3 3 2 1',
    '5 2 2 1 1 0',
    '3 3 1 3 3',
    '2'
]);
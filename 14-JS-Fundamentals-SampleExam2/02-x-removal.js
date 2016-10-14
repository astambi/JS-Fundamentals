function xRemoval(input) {
    let [matrix, modifiedMatrix] = getMatrix(input);

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let symbol = matrix[row][col];

            for (let r = 0; r < matrix.length; r++) {
                for (let c = 0; c < matrix[r].length; c++) {
                    if (isXShape(r, c, matrix) &&
                        hasEqualSymbols(r, c, matrix, symbol)) {
                        modifiedMatrix[r][c] = undefined;
                        modifiedMatrix[r - 1][c - 1] = undefined;
                        modifiedMatrix[r - 1][c + 1] = undefined;
                        modifiedMatrix[r + 1][c - 1] = undefined;
                        modifiedMatrix[r + 1][c + 1] = undefined;
                    }
                }
            }
        }
    }
    printMatrix(modifiedMatrix);

    function hasEqualSymbols(row, col, matrix, symbol) {
        return  matrix[row][col] == symbol &&
                matrix[row - 1][col - 1] == symbol &&
                matrix[row - 1][col + 1] == symbol &&
                matrix[row + 1][col - 1] == symbol &&
                matrix[row + 1][col + 1] == symbol;
    }

    function isXShape(row, col, matrix) {
        return  isInsideMatrix(row, col, matrix) &&
                isInsideMatrix(row - 1, col - 1, matrix) &&
                isInsideMatrix(row - 1, col + 1, matrix) &&
                isInsideMatrix(row + 1, col - 1, matrix) &&
                isInsideMatrix(row + 1, col + 1, matrix);
    }

    function isInsideMatrix(row, col, matrix) {
        return  row >= 0 && row < matrix.length &&
                col >= 0 && col < matrix[row].length;
    }

    function getMatrix(input) {
        let matrix = [];            // to lowerCase for comparison
        let modifiedMatrix = [];    // original values, to be modified
        for (let row of input) {
            matrix.push((row.toLowerCase()).split(''));
            modifiedMatrix.push(row.split(''));
        }
        return [matrix, modifiedMatrix];
    }

    function printMatrix(matrix) {
        for (let row of matrix) {
            row = row.filter(x => x != undefined);
            console.log(row.join(''));
        }
    }
}

xRemoval([
    'abnbjs',
    'xoBab',
    'Abmbh',
    'aabab',
    'ababvvvv'
]);

xRemoval([
    '8888888',
    '08*8*80',
    '808*888',
    '0**8*8?'
]);

xRemoval([
    '^u^',
    'j^l^a',
    '^w^WoWl',
    'adw1w6',
    '(WdWoWgPoop)'
]);

xRemoval([
    'puoUdai',
    'miU',
    'ausupirina',
    '8n8i8',
    'm8o8a',
    '8l8o860',
    'M8i8',
    '8e8!8?!'
]);
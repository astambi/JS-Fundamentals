function rosettaStone(input) {
    let templateMatrixSize = Number(input.shift());
    let templateMatrix = getTemplateMatrix(templateMatrixSize);
    // console.log(templateMatrix);

    let encodedMatrix = getEncodedMatrix(input);
    // console.log(encodedMatrix);

    let decodedMessage = '';
    for (let row = 0; row < encodedMatrix.length; row++) {
        for (let col = 0; col < encodedMatrix[row].length; col++) {
            let templateRow = row % templateMatrix.length;
            let templateCol = col % templateMatrix[templateRow].length;

            let cellSum = encodedMatrix[row][col] + templateMatrix[templateRow][templateCol];
            cellSum %= 27;
            if (cellSum == 0)
                decodedMessage += ' ';
            else
                decodedMessage += String.fromCharCode(64 + cellSum);
        }
    }
    console.log(decodedMessage);

    function getEncodedMatrix(input) {
        let matrix = [];
        for (let row of input) {
            row = row.split(' ').map(Number);
            matrix.push(row);
        }
        return matrix;
    }

    function getTemplateMatrix(size) {
        let matrix = [];
        for (let i = 0; i < size; i++) {
            let row = (input.shift()).split(' ').map(Number);
            matrix.push(row);
        }
        return matrix;
    }
}

rosettaStone(
[   '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22' ]
);

rosettaStone(
[ '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22' ]
);
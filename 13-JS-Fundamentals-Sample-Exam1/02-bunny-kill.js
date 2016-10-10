function bunnyKill(input) {
    let bombBunnies = input.pop().split(' ');
    let matrix = getMatrix(input);
    let [snowballDamage, snowballKills] = [0, 0];
    // kill bomb bunnies
    for (let bunny of bombBunnies) {
        let [bunnyRow, bunnyCol] = bunny.split(',').map(Number);
        let bunnyDamage = matrix[bunnyRow][bunnyCol];
        if (bunnyDamage > 0) {
            snowballKills++;
            snowballDamage += bunnyDamage;
            matrix = explodeBombBunny(matrix, bunnyRow, bunnyCol, bunnyDamage);
        }
    }
    // kill remaining bunnies
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let bunnyDamage = matrix[row][col];
            if (bunnyDamage > 0 ) {
                snowballKills++;
                snowballDamage += bunnyDamage;
            }
        }
    }
    // print Snowball's stats
    console.log(snowballDamage);
    console.log(snowballKills);

    function getMatrix(input) {
        let matrix = [];
        for (let row of input)
            matrix.push(row.split(' ').map(Number));
        return matrix;
    }

    function explodeBombBunny(matrix, bombRow, bombCol, bombDamage) {
        for (let row = bombRow - 1; row <= bombRow + 1; row++) {
            for (let col = bombCol - 1; col <= bombCol + 1; col++) {
                if (isInsideMatrix(row, col, matrix))
                    matrix[row][col] -= bombDamage;
            }
        }
        return matrix;
    }

    function isInsideMatrix(row, col, matrix) {
        return 	row >= 0 && row < matrix.length &&
                col >= 0 && col < matrix[row].length;
    }
}


bunnyKill([
    '10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0'
]);

bunnyKill([
    '5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1'
]);
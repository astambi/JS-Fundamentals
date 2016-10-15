function magicGrid(input) {
    let encryptedMessage = input.shift();
    let magicNumber = Number(input.shift());
    let matrix = getMatrix(input);
    let key = false;
    // calc decryption key
    for (let r1 = 0; r1 < matrix.length; r1++) {
        for (let c1 = 0; c1 < matrix.length; c1++) {
            for (let r2 = 0; r2 < matrix.length; r2++) {
                for (let c2 = 0; c2 < matrix.length; c2++) {
                    if (r1 == r2 && c1 == c2) continue;
                    if (matrix[r1][c1] + matrix[r2][c2] == magicNumber) {
                        key = r1 + r2 + c1 + c2; break;
                    }
                }
                if (key) break;
            }
            if (key) break;
        }
        if (key) break;
    }
    // decrypt message
    let decryptedMessage = '';
    for (let i in encryptedMessage) {
        let charCode = encryptedMessage.charCodeAt(i);
        if (i % 2 == 0)	charCode += key;
        else			charCode -= key;
        decryptedMessage += String.fromCharCode(charCode);
    }
    console.log(decryptedMessage);

    function getMatrix(input) {
        let matrix = [];
        for (let row of input)
            matrix.push(row.split(' ').map(Number));
        // input.forEach(row => matrix.push(row.split(' ').map(Number)));
        return matrix;
    }
}

magicGrid([
    'QqdvSpg',
    '400',
    '100 200 120',
    '120 300 310',
    '150 290 370'
]);
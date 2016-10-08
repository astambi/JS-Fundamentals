function matchMultiplication([input]) {
    let regex = /(-?\d+)[ ]*\*[ ]*(-?[\d]+\.?\d*)/;
    let match;
    while (match = regex.exec(input))
        input = input.replace(regex, Number(match[1]) * Number(match[2]));
    console.log(input);
}

matchMultiplication(['My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).']);
function arithmephile(input) {
    let maxProduct = Number.NEGATIVE_INFINITY;
    input = input.map(Number);

    for (let i = 0; i < input.length; i++) {
        let digit = input[i];
        if (digit >= 0 && digit <= 9 && i + digit < input.length) {
            let product = 1;
            for (let j = i + 1; j <= i + digit; j++)
                product *= input[j];

            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }
    console.log(maxProduct);
}

arithmephile([
    '10',
    '20',
    '2',
    '30',
    '44',
    '123',
    '3',
    '56',
    '20',
    '24'
]);

arithmephile([
    '100',
    '200',
    '2',
    '3',
    '2',
    '3',
    '2',
    '1',
    '1'
]);
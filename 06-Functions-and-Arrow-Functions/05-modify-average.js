function modifyAverage([input]) {
    let number = '' + input;
    let sumDigits = 0;
    for (let i = 0; i < number.length; i++)
        sumDigits += Number(number[i]);
    while ((sumDigits / number.length) <= 5) {
        number += 9;
        sumDigits += 9;
    }
    console.log(number);
}

modifyAverage([101]);
modifyAverage([5835]);
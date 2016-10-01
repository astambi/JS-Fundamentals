// function sumNumbers(input) {
//     let a = Number(input[0]);
//     let b = Number(input[1]);
//     let c = Number(input[2]);
//     let sum = a + b + c;
//     console.log(sum);
// }

// function sumNumbers(input) {
//     let sum = 0;
//     for (let i = 0; i < 3; i++)
//         sum += Number(input[i]);
//     console.log(sum);
// }

function sumNumbers(input) {
    let sum = 0;
    for (let num of input)  // foreach
        sum += Number(num);
    console.log(sum);
}

sumNumbers(['2', '3', '4']);
sumNumbers(['1.5', '1.5', '-1']);
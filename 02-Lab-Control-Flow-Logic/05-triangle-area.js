// function triangleArea([a, b, c]) {
//     [a, b, c] = [a, b, c].map(Number);
//     let p = (a + b + c) / 2;
//     console.log(Math.sqrt(p * (p-a) * (p-b) * (p-c)));
// }

function triangleArea(input) {
    let [a, b, c] = input.map(Number);
    let p = (a + b + c) / 2;
    console.log(Math.sqrt(p * (p-a) * (p-b) * (p-c)));
}

triangleArea(['2','3.5','4']);
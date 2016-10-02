// function cookingByNumbers(input) {
//     let result = Number(input[0]);
//     for (let i = 1; i < input.length; i++) { // actions
//         result = calcResult(input[i]);
//         console.log(result);
//     }
//     function calcResult(action) {
//         switch (action) {
//             case 'chop':    return result / 2;
//             case 'dice':    return Math.sqrt(result);
//             case 'spice':   return result + 1;
//             case 'bake':    return result * 3;
//             case 'fillet':  return result * 0.80;
//         }
//     }
// }

function cookingByNumbers(input) {
    let result = Number(input[0]);
    for (let i = 1; i < input.length; i++)  // actions
        console.log(calcResult(input[i]));

    function calcResult(action) {
        switch (action) {
            case 'chop':    return result /= 2;
            case 'dice':    return result = Math.sqrt(result);
            case 'spice':   return result += 1;
            case 'bake':    return result *= 3;
            case 'fillet':  return result *= 0.80;
        }
    }
}

cookingByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);
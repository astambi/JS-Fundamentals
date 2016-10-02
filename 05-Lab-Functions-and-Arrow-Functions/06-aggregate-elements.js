// function aggregateElements(input) {
//     let elements = input.map(Number);
//     let sum = 0, sumInverse = 0, concat = '';
//     for (let element of elements) {
//         sum += element;
//         sumInverse += 1/element;
//         concat += element;
//     }
//     console.log(sum);
//     console.log(sumInverse);
//     console.log(concat);
// }

function aggregateElements(input) {
    function aggregate(arr, initialValue, func) {
        let result = initialValue;
        for (let element of arr)
            result = func(result, element);
        console.log(result);
    }
    let elements = input.map(Number);
    aggregate(elements, 0, (a, b) => a + b);    // sum
    aggregate(elements, 0, (a, b) => a + 1/b);  // sum of inverse elements
    aggregate(elements, '', (a, b) => a + b);   // concatenation
}

aggregateElements(['1', '2', '3']);
aggregateElements(['2', '4', '8', '16']);
aggregateElements([10, 20, 30]);
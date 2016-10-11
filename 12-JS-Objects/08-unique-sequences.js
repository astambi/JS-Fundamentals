function uniqueSequences(arr) {
    let uniqueSeqs = new Map(); // length - sequence
    for (let line of arr) {
        let seq = JSON.parse(line).map(Number);
        // let seq = line.split(/\s*[,[\]]\s*/g).map(Number);
        // seq = seq.slice(1, seq.length - 1); // removing first & last non-arr elements
        seq.sort((a, b) => b - a);  // DESC
        let length = seq.length;
        if (!uniqueSeqs.has(length))
            uniqueSeqs.set(length, new Set());
        uniqueSeqs.get(length).add(`[${seq.join(', ')}]`);
    }
    let lengthKeys = [...uniqueSeqs.keys()].sort((a, b) => a - b);  // ASC
    for (let len of lengthKeys)
        for(let seq of uniqueSeqs.get(len))
            console.log(seq);
}

// function uniqueSequences(arr) {
//     let uniqueSeqs = new Set();
//     for (let line of arr) {
//         let seq = JSON.parse(line).map(Number)
//                 .sort((a, b) => b - a)  // DESC
//                 .join(', ');
//         uniqueSeqs.add(seq);
//     }
//     [...uniqueSeqs].sort(function (a, b) {
//             let lenA = a.split(', ').length;
//             let lenB = b.split(', ').length;
//             if (lenA != lenB) return lenA - lenB;
//         })
//         .forEach(seq => console.log(`[${seq}]`));
// }

uniqueSequences([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'
]);

uniqueSequences([
    '[7.14, 7.180, 7.339, 80.099]',
    '[7.339, 80.0990, 7.140000, 7.18]',
    '[7.339, 7.180, 7.14, 80.099]'
]);
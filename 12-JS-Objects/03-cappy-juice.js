// function cappyJuice(arr) {
//     let juiceQuantities = [];
//     let juiceBottles = [];
//     for (let line of arr) {
//         let [juice, quantity] = line.split(/\s*=>\s*/g);
//         if (!juiceQuantities[juice])
//             juiceQuantities[juice] = 0;
//         juiceQuantities[juice] += Number(quantity);
//         if (juiceQuantities[juice] >= 1000) {
//             if (!juiceBottles[juice])
//                 juiceBottles[juice] = 0;
//             let newBottles = Math.floor(juiceQuantities[juice] / 1000);
//             juiceBottles[juice] += newBottles;
//             juiceQuantities[juice] -= newBottles * 1000;
//         }
//     }
//     for (let key in juiceBottles) // print in order of obtaining the bottles
//         console.log(`${key} => ${juiceBottles[key]}`);
// }

function cappyJuice (input) {
    let juiceQuantities = new Map();
    let juiceBottles = new Map();
    for (let line of input) {
        let [juice, quantity] = line.split(/\s*=>\s*/g);
        quantity = Number(quantity);
        if (juiceQuantities.has(juice))
            quantity += juiceQuantities.get(juice);
        juiceQuantities.set(juice, quantity);
        if (quantity >= 1000)
            juiceBottles.set(juice, Math.floor(quantity / 1000));
    }
    for (let [juice, bottles] of juiceBottles)
        console.log(`${juice} => ${bottles}`);
}

cappyJuice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);

cappyJuice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);
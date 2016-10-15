function storeCatalogue(arr) {
    let catalogue = new Map();
    for (let line of arr) {
        let [product, price] = line.split(/\s*:\s*/);
        let catalogueLetter = product.toUpperCase()[0];
        if (!catalogue.has(catalogueLetter))
            catalogue.set(catalogueLetter, new Map);
        catalogue.get(catalogueLetter).set(product, Number(price));
    }
    let keys = Array.from(catalogue.keys()).sort(); // cat. letters in alphabetical order
    for (let key of keys) {
        console.log(key);
        let products = [...catalogue.get(key).keys()].sort();
        for (let product of products)   // products in alphabetical order
            console.log(`  ${product}: ${catalogue.get(key).get(product)}`);
    }
}

// function storeCatalogue(input) {
//     let catalogue = new Map(); // letter - product - price
//     for (let line of input) {
//         let [product, price] = line.split(/\s*:\s*/g);
//         price = Number(price);
//         let catalogueLetter = product[0];
//         if (!catalogue.has(catalogueLetter))
//             catalogue.set(catalogueLetter, new Map);
//         catalogue.get(catalogueLetter).set(product, price);
//     }
//     catalogue = [...catalogue].sort(sortKeysAlphabetically);
//     for (let [catalogueLetter, productPrice] of catalogue) {
//         console.log(catalogueLetter);
//         productPrice = [...productPrice].sort(sortKeysAlphabetically);
//         for (let [product, price] of productPrice)
//             console.log(`  ${product}: ${price}`);
//     }
//
//     function sortKeysAlphabetically(a, b) {
//         return a[0].toLowerCase().localeCompare(b[0].toLowerCase()); // key
//     }
// }

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

storeCatalogue([
    "Banana : 2",
    "Rubic's Cube : 5",
    "Raspberry P : 4999",
    "Rolex : 100000",
    "Rollon : 10",
    "Rali Car : 2000000",
    "Pesho : 0.000001",
    "Barrel : 10"
]);
function lowestPricesInCities(arr) {
    let productPrices = new Map;  // product - town - price
    for (let line of arr) {
        let [town, product, price] = line.split(/\s+\|\s+/);
        if (!productPrices.has(product))
            productPrices.set(product, new Map);
        productPrices.get(product).set(town, Number(price));
    }
    // print products in order of appearance & lowest price & town
    for (let [product, townPrices] of productPrices) {
        let minPrice = Number.MAX_VALUE;
        let minPriceTown = '';
        for (let [town, price] of townPrices)
            if (price < minPrice) {
                minPrice = price;
                minPriceTown = town;
            }
        console.log(`${product} -> ${minPrice} (${minPriceTown})`);
    }
}

lowestPricesInCities([
   'Sample Town | Sample Product | 1000',
   'Sample Town | Orange | 2',
   'Sample Town | Peach | 1',
   'Sofia | Orange | 3',
   'Sofia | Peach | 2',
   'New York | Sample Product | 1000.1',
   'New York | Burger | 10'
]);
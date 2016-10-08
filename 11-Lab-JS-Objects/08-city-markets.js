// function cityMarkets(sales) {
//     let townSales = new Map(); // town - product - product sales
//     for (let sale of sales) {
//         let [town, product, salesData] = sale.split(/\s+->\s+/);
//         let [sales, unitPrice] = salesData.split(/\s+:\s+/).map(Number);
//
//         if (!townSales.has(town))
//             townSales.set(town, new Map);
//         let productRevenue = sales * unitPrice;
//         let prevRevenue = townSales.get(town).get(product);
//         if (prevRevenue)    productRevenue += prevRevenue;
//         townSales.get(town).set(product, productRevenue);
//     }
//     // print sales by town in order of appearance
//     for (let [town, townProducts] of townSales) {
//         console.log(`Town - ${town}`);
//         for (let [product, productRevenue] of townProducts)
//             console.log(`$$$${product} : ${productRevenue}`);
//     }
// }

function cityMarkets(sales) {
    let townSales = new Map(); // town - product - product sales
    for (let sale of sales) {
        let [town, product, salesData] = sale.split(/\s+->\s+/);
        let [sales, unitPrice] = salesData.split(/\s+:\s+/).map(Number);

        if (!townSales.has(town))
            townSales.set(town, new Map);
        let productRevenue = sales * unitPrice;
        if (townSales.get(town).has(product))
            productRevenue += townSales.get(town).get(product);
        townSales.get(town).set(product, productRevenue);
    }
    // print sales by town in order of appearance
    for (let [town, townProducts] of townSales) {
        console.log(`Town - ${town}`);
        for (let [product, productRevenue] of townProducts)
            console.log(`$$$${product} : ${productRevenue}`);
    }
}

cityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);
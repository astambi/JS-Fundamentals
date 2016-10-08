function autoEngineeringCompany(arr) {
    let carRegister = new Map; // car brand - car model - produced cars
    for (let line of arr) {
        let [brand, model, producedCars] = line.split(/\s*\|\s*/g);
        producedCars = Number(producedCars);
        if (!carRegister.get(brand))
            carRegister.set(brand, new Map);
        if (carRegister.get(brand).get(model))
            producedCars += carRegister.get(brand).get(model);
        carRegister.get(brand).set(model, producedCars);
    }
    // print in order of appearance
    for (let [brand, brandData] of carRegister) {
        console.log(brand);
        for (let [model, producedCars] of brandData)
            console.log(`###${model} -> ${producedCars}`);
    }
}

autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);
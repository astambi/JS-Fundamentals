function populationInTowns(arr) {
    let populationByTown = new Map();
    arr.forEach(line => {
        let [town, population] = line.split(/\s+<->\s+/);
        population = Number(population);
        if (!populationByTown.has(town))
            populationByTown.set(town, population);
        else
            populationByTown.set(town, populationByTown.get(town) + population);
    });
    for (let [town, population] of populationByTown) // order of first appearance
        console.log(`${town} : ${population}`);
}

populationInTowns([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);

populationInTowns([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);
function sumByTown(arr) {
    let townIncomes = {};
    for (let i = 0; i < arr.length; i += 2) {
        let [town, income] = [arr[i], Number(arr[i+1])];
        if (!townIncomes[town])
            townIncomes[town] = 0;
        townIncomes[town] += income;
    }
    console.log(JSON.stringify(townIncomes));
}

sumByTown( ['Sofia', '20',
            'Varna', '3',
            'Sofia', '5',
            'Varna', '4']);

sumByTown( ['Sofia', '20',
            'Varna', '3',
            'sofia', '5',
            'varna', '4']);

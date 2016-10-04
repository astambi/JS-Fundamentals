// function aggregateTable(input) {
//     let towns = [], aggregateIncome = 0;
//     for (let line of input) {
//         let data = line.split('|');
//         let town = data[1].trim();
//         let income = Number(data[2].trim());
//         towns.push(town);
//         aggregateIncome += income;
//     }
//     console.log(towns.join(', '));
//     console.log(aggregateIncome);
// }

function aggregateTable(input) {
    let towns = [], aggregateIncome = 0;
    for (let line of input) {
        let data = line.split('|');                 // town, income
        towns.push(data[1].trim());					// town
        aggregateIncome += Number(data[2].trim()); 	// income
    }
    console.log(towns.join(', '));
    console.log(aggregateIncome);
}

aggregateTable(['| Sofia           | 300',
                '| Veliko Tarnovo  | 500',
                '| Yambol          | 275']);
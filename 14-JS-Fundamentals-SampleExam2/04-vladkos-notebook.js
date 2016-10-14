function vladkosNotebook(input) {
    let players = {};
    for (let line of input) {
        let data = line.split('|');
        let playerColor = data[0];
        if (!players[playerColor])
            players[playerColor] = {age: undefined, name: undefined,
                                    opponents: [], wins: 0, losses: 0};
        switch (data[1]) {
            case 'name':
                players[playerColor].name = data[2]; break;
            case 'age':
                players[playerColor].age = data[2]; break; // as string
            case 'win':
                players[playerColor].wins++;
                players[playerColor].opponents.push(data[2]); break;
            case 'loss':
                players[playerColor].losses++;
                players[playerColor].opponents.push(data[2]); break;
        }
    }
    let validPlayers = {};
    let sortedColors = Object.keys(players).sort((a, b) => a.localeCompare(b));
    for (let color of sortedColors) {
        let player = players[color];
        if (player.name && player.age) {
            let rank = (players[color].wins + 1 ) / (players[color].losses + 1);
            validPlayers[color] = {
                age: player.age,
                name: player.name,
                opponents: player.opponents.sort(),
                rank: rank.toFixed(2)
            };
        }
    }
    // console.log(validPlayers);
    console.log(JSON.stringify(validPlayers));
}

vladkosNotebook([
    'purple|age|99',
    'red|age|44',
    'blue|win|pesho',
    'blue|win|mariya',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Yana',
    'purple|loss|Yana',
    'purple|loss|Manov',
    'purple|loss|Manov',
    'red|name|gosho',
    'blue|win|Vladko',
    'purple|loss|Yana',
    'purple|name|VladoKaramfilov',
    'blue|age|21',
    'blue|loss|Pesho'
]);
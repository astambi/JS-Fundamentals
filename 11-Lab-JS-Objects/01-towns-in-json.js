function townsInJSON(towns) {
    let pattern = /\s*\|\s*/;
    let keys = towns[0].split(pattern).filter(x => x!='');
    let townsArr = [];
    for (let town of towns.slice(1)) {
        let [empty, townName, latitude, longitude] = town.split(pattern);
        let townObj = { [keys[0]]: townName,
                        [keys[1]]: Number(latitude),
                        [keys[2]]: Number(longitude) };
        townsArr.push(townObj);
    }
    console.log(JSON.stringify(townsArr));
}

townsInJSON(
    ['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);

townsInJSON(
    ['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);
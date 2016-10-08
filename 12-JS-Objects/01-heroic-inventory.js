function heroicInventory(arr) {
    let heroes = [];
    for (let line of arr) {
        let [name, level, items] = line.split(/\s*[/]\s*/);
        level = Number(level);
        if (items)  items = items.split(/\s*[,]\s*/);
        else        items = []; // if undefined => empty arr []
        let hero = {name: name, level: level, items: items};
        heroes.push(hero);
    }
    console.log(JSON.stringify(heroes));
}

heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

heroicInventory([
    'Jake / 1000 / Gauss, HolidayGrenade'
]);

heroicInventory([
    'Anna / 100'
]);
function boxesAndBottles(input) {
    let [bottles, boxCapacity] = input.map(Number);
    console.log(Math.ceil(bottles / boxCapacity));
}

boxesAndBottles(['20', '5']);
boxesAndBottles(['15', '7']);
boxesAndBottles(['5', '10']);
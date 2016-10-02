function treasureLocator(input) {
    input = input.map(Number);
    for (let i = 0; i < input.length; i += 2) {
        let point = {x: input[i], y: input[i+1]};
        checkTreasureLocations(point);
    }

    function checkTreasureLocations(point) {
        let samoa = {name: 'Samoa', xMin: 5, xMax: 7, yMin: 3, yMax: 6};
        let tuvalu = {name: 'Tuvalu', xMin: 1, xMax: 3, yMin: 1, yMax: 3};
        let tonga = {name: 'Tonga', xMin: 0, xMax: 2, yMin: 6, yMax: 8};
        let cook = {name: 'Cook', xMin: 4, xMax: 9, yMin: 7, yMax: 8};
        let tokelau = {name: 'Tokelau', xMin: 8, xMax: 9, yMin: 0, yMax: 1};
        let locations = [samoa, tuvalu, tonga, cook, tokelau];
        let foundTreasure = false;
        for (let location of locations) {
            if (checkLocation(point, location)) {
                foundTreasure = true;
                console.log(location.name);
                break;
            }
        }
        if (!foundTreasure) console.log("On the bottom of the ocean");
    }

    function checkLocation(point, location) {
        return point.x >= location.xMin && point.x <= location.xMax
            && point.y >= location.yMin && point.y <= location.yMax;
    }
}

treasureLocator([6, 4]);
treasureLocator([4, 2, 1.5, 6.5, 1, 3]);
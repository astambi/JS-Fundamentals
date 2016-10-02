function insideVolume(input) {
    input = input.map(Number);    // point coordinates
    for (let i = 0; i < input.length; i += 3) {
        let [x, y, z] = [input[i], input[i+1], input[i+2]];
        console.log(isInside(x, y, z) ? "inside" : "outside");
    }

    function isInside(x, y, z) {
        let [xMin, xMax, yMin, yMax, zMin, zMax] = [10, 50, 20, 80, 15, 50]; // box coordinates
        return x >= xMin && x <= xMax
            && y >= yMin && y <= yMax
            && z >= zMin && z <= zMax;
    }
}

insideVolume([8, 20, 22]);
insideVolume([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);
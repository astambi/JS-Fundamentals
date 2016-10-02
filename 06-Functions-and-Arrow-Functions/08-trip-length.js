function tripLength(input) {
    input = input.map(Number);
    let points = [];
    for (let i = 0; i < input.length; i += 2)
        points[i/2 + 1] = {x: input[i], y: input[i+1]}; // points[1,2,3]
    let minDist = Number.MAX_VALUE;
    let minRoute = '';
    for (let a = 1; a <= 3; a++) {
        for (let b = 1; b <= 3; b++) {
            if(a != b) {
                for (let c = 1; c <= 3; c++) {
                    if(c != a && c != b) {
                        let dist = getDistance(points[a], points[b])
                                 + getDistance(points[b], points[c]);
                        if(dist < minDist) {
                            minDist = dist;
                            minRoute = `${a}->${b}->${c}: ${minDist}`;
                        }
                    }
                }
            }
        }
    }
    return minRoute;

    function getDistance(pointA, pointB) {
        return Math.sqrt(Math.pow(pointA.x - pointB.x, 2)
                       + Math.pow(pointA.y - pointB.y, 2));
    }
}

console.log(tripLength([0, 0, 2, 0, 4, 0]));
console.log(tripLength([5, 1, 1, 1, 5, 4]));
console.log(tripLength([-1, -2, 3.5, 0, 0, 2]));
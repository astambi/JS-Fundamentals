// function distanceBetweenPoints(coordinates) {
//     let [x1, y1, x2, y2] = coordinates.map(Number);
//     let point1 = {x:x1, y:y1};
//     let point2 = {x:x2, y:y2};
//     let deltaXsqr = Math.pow(point1.x - point2.x, 2);
//     let deltaYsqr = Math.pow(point1.y - point2.y, 2);
//     return Math.sqrt(deltaXsqr + deltaYsqr);
// }

function distanceBetweenPoints(coordinates) {
    let [x1, y1, x2, y2] = coordinates.map(Number);
    let deltaXsqr = Math.pow(x1 - x2, 2);
    let deltaYsqr = Math.pow(y1 - y2, 2);
    return Math.sqrt(deltaXsqr + deltaYsqr);
}

console.log(distanceBetweenPoints(['2', '4', '5', '0']));
console.log(distanceBetweenPoints(['2.34', '15.66', '-13.55', '-2.9985']));
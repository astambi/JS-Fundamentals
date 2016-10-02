// function validityChecker(input) {
//     let [x1, y1, x2, y2] = input.map(Number);
//     checkDistanceValidity(x1, y1, 0, 0);
//     checkDistanceValidity(x2, y2, 0, 0);
//     checkDistanceValidity(x1, y1, x2, y2);
//
//     function checkDistanceValidity(xA, yA, xB, yB) {
//         let distance = Math.sqrt(Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2));
//         let isValid = distance == Math.round(distance); // integer
//         let prnMsg = '{' + `${xA}, ${yA}` + '} to '
//                    + '{' + `${xB}, ${yB}` + '} is '
//                    + (isValid ? "valid" : "invalid");
//         console.log(prnMsg);
//     }
// }

function validityChecker(input) {
    let [x1, y1, x2, y2] = input.map(Number);
    let point1 = {x:x1, y:y1}, point2 = {x:x2, y:y2}, point0 = {x:0, y:0};
    checkDistanceValidity(point1, point0);
    checkDistanceValidity(point2, point0);
    checkDistanceValidity(point1, point2);

    function checkDistanceValidity(pointA, pointB) {
        let distance = Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2));
        let isValid = distance == Math.round(distance); // integer
        let prnMsg =  '{' + `${pointA.x}, ${pointA.y}` + '} to '
                    + '{' + `${pointB.x}, ${pointB.y}` + '} is '
                    + (isValid ? "valid" : "invalid");
        console.log(prnMsg);
    }
}

validityChecker(['3','0','0','4']);
validityChecker(['2','1','1','1']);
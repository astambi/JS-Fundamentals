// function figureArea([w1, h1, w2, h2]) {
//     [w1, h1, w2, h2] = [w1, h1, w2, h2].map(Number);
//     return h1 * w1 + h2 * w2 - Math.min(h1, h2) * Math.min(w1, w2);
// }

// function figureArea([w1, h1, w2, h2]) {
//     [w1, h1, w2, h2] = [w1, h1, w2, h2].map(Number);
//     let [area1, area2, area3] = [ h1 * w1, h2 * w2, Math.min(h1, h2) * Math.min(w1, w2)];
//     return area1 + area2 - area3;
// }

function figureArea(input) {
    let [w1, h1, w2, h2] = input.map(Number);
    return h1 * w1 + h2 * w2 - Math.min(h1, h2) * Math.min(w1, w2);
}

console.log(figureArea(['2', '4', '5', '3']));
console.log(figureArea(['13', '2', '5', '8']));
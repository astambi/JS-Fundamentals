function repeatIt(count, func) {
    for (let i = 1; i <= count; i++)
        func(i);
}
let starsFunc = function(i) {
    console.log("**".repeat(i))
};
repeatIt(3, starsFunc);
repeatIt(3, function(x) { console.log(2 * x); } );  // 2 4 6

(function (count) {
    for (let i = 1; i <= count; i++)
        console.log('+'.repeat(i));
})(4);

let f = (function () {
    let x = 0;
    return function() { console.log(++x); }
})();
f(); f(); f(); f();         // 1 2 3 4

let increment = x => x + 1;
console.log(increment(5));  // 6

let sum = (a, b) => a + b;
console.log(sum(5, 6));     // 11
function figureOf4Squares([n]) {
    n = Number.parseInt(n);
    if (n < 2 || n > 200) return;
    let rows = (n % 2 == 0) ? (n-1) : n;
    for (let i = 1; i <= rows; i++) {
        if (i == 1 || i == rows || i == (rows+1)/2)
            console.log(drawLine(n, '+', '-'));
        else
            console.log(drawLine(n, '|', ' '));
    }

    function drawLine(n, borderSymbol, insideSymbol) {
        return (borderSymbol + insideSymbol.repeat(n-2)).repeat(2) + borderSymbol;
    }
}

figureOf4Squares([2]);
figureOf4Squares([3]);
figureOf4Squares([4]);
figureOf4Squares([5]);
figureOf4Squares([6]);
figureOf4Squares([7]);
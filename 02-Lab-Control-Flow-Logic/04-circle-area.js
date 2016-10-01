function circleArea(r) {
    r = Number(r);
    let area = Math.PI * r * r;
    console.log(area);
    console.log(area.toFixed(2));
    // console.log(Math.round(area * 100) / 100);
}

circleArea(['5']);
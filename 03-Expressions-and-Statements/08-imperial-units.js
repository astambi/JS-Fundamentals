function impretialUnits(inch) {
    inch = Number(inch);
    let ft = Math.floor(inch / 12);
    inch -= 12 * ft;
    console.log(ft + "'-" + inch + '"');
}

impretialUnits([36]);
impretialUnits([55]);
impretialUnits([11]);
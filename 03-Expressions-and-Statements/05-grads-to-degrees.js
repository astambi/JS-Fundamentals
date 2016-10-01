function gradsToDegrees([gon]) {
    let deg = Number(gon) / 400 * 360;
    deg %= 360;
    if (deg < 0)    deg += 360;
    console.log(deg);
}

gradsToDegrees([100]);
gradsToDegrees([400]);
gradsToDegrees([850]);
gradsToDegrees([-50]);
function distanceOverTime(input) {
    let [v1, v2, t] = input.map(Number);    // [km/h, km/h, s]
    let distance = Math.abs(v1 - v2) * 1000 / (60 * 60) * t;
    console.log(distance);  // in meters
}

distanceOverTime(['0','60','3600']);
distanceOverTime(['11','10','120']);
distanceOverTime(['5','-5','40']);
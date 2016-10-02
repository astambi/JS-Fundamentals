function roadRadar([speed, zone]) {
    let speeding = calcSpeeding(Number(speed), zone);
    if (speeding) console.log(speeding);

    function calcSpeeding(speed, zone) {
        let speedDiff = speed - getSpeedLimit(zone);
        if (speedDiff <= 0)         return false;
        if (speedDiff > 40)         return 'reckless driving';
        else if (speedDiff > 20)    return 'excessive speeding';
        else                        return 'speeding';
    }
    function getSpeedLimit(zone) {
        switch(zone) {
            case 'motorway':    return 130;
            case 'interstate':  return 90;
            case 'city':        return 50;
            case 'residential': return 20;
        }
    }
}

roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);
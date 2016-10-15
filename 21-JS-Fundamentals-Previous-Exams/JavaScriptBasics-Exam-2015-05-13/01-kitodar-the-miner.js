function kitodarTheMiner(input) {
    let quantities = {silver: 0, gold: 0, diamonds: 0};
    for (let line of input) {
        let validPattern = /^mine *.* *- *(gold|silver|diamonds) *: *(\d+)$/;
        if (validMatch)
    }
    console.log(`*Silver: ${quantities.silver}`);
    console.log(`*Gold: ${quantities.gold}`);
    console.log(`*Diamonds: ${quantities.diamonds}`);
}

kitodarTheMiner([
    'mine bobovDol - gold: 10',
    'mine medenRudnik - silver: 22',
    'mine chernoMore - shrimps : 24',
    'gold: 50'
]);

kitodarTheMiner([
    'mine bobovdol - gold: 10',
    'mine - diamonds: 5',
    'mine colas - wood: 10',
    'mine myMine - silver:  14',
    'mine silver:14 - silver: 14'
]);

function medenkaWars(input) {
    // NB! Attacks by a player are ALWAYS considered CONSECUTIVE
    // even when interrupted by the other player's attacks
    let attacksVitkor = []; // consecutive white medenkas
    let attacksNaskor = []; // consecutive dark medenkas
    let [damageVitkor, damageNaskor] = [0,0];
    for (let line of input) {
        let [medenkas, color, text] = line.split(' ');
        let damage = Number(medenkas) * 60;
        let attacksLength = 0;
        switch (color) {
            case 'white':   // Vitkor's attack
                // attacksNaskor = []; // do not reset the competitor's damage log !
                attacksLength = attacksVitkor.length;
                if (attacksLength == 0)
                    attacksVitkor = [damage];
                else {
                    let lastAttack = attacksVitkor[attacksLength - 1];
                    if (lastAttack == damage) {
                        damage *= 2.75; // "special" damage
                        attacksVitkor = []; // resetting "normal" damage
                    } else
                        attacksVitkor = [damage];   // resetting "normal" damage
                }
                damageVitkor += damage;
                break;
            case 'dark':    // Naskor's attack
                // attacksVitkor = [];  // do not reset the competitor's damage log !
                attacksLength = attacksNaskor.length;
                if (attacksLength == 0)
                    attacksNaskor = [damage];   // "normal" damage
                else {
                    let lastAttack = attacksNaskor[attacksLength - 1];
                    if (lastAttack == damage) {
                        if (attacksLength >= 4) {
                            damage *= 4.5;
                            attacksNaskor = [damage];   // resetting "normal" damage, as damage changes
                        } else
                            attacksNaskor.push(damage); // "normal" consecutive damage
                    } else
                        attacksNaskor = [damage];   // resetting "normal" damage
                }
                damageNaskor += damage;
                break;
        }
    }
    if (damageNaskor > damageVitkor)
        console.log('Winner - Naskor\nDamage - ' + damageNaskor);
    else
        console.log('Winner - Vitkor\nDamage - ' + damageVitkor);
}


medenkaWars([
    '5 white medenkas',
    '5 dark medenkas',
    '4 white medenkas'
]);

medenkaWars([
    '2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas'
]);
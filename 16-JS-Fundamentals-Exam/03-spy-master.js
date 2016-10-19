function spyMaster(input) {
    let key = input.shift();
    // let keyPattern = /(?:^| )([a-zA-Z]+)/;  // 57/100
    // let keyMatch = keyPattern.exec(key);    // 57/100
    // key = keyMatch[1];                      // 57/100
    // if (!keyMatch) {
    //     input.forEach(line => console.log(line)); return; // invalid special key
    // }
    let decodedText = [];
    for (let line of input) {
        // let msgPattern = new RegExp('(?:' + key + '[ ]+)([A-Z!%$#]{8,})(?=([ .,]|$))', 'gi');  // 57/100
        // let msgPattern = new RegExp('(' + key + '[ ]+)([A-Z!%$#]{8,})([ ,.]|$)', 'gi');        // 71/100
        let msgPattern = new RegExp('((?:^| )' + key + '[ ]+)([A-Z!%$#]{8,})([ ,.]|$)', 'gi');    // 100/100
        let wordPattern = /^[A-Z!%$#]{8,}$/;
        let match;
        while(match = msgPattern.exec(line)) {
            let wordMatch = wordPattern.exec(match[2]);
            if (wordMatch) {
                let decodedMsg = match[2]
                                .toLowerCase()
                                .replace(/!/g, '1')
                                .replace(/%/g, '2')
                                .replace(/#/g, '3')
                                .replace(/\$/g,'4');
                // line = line.replace(match[1], decodedMsg); // 57/100
                line = line.replace(match[0],
                                    match[1] + decodedMsg + match[3]); // 71/100
            }
        }
        decodedText.push(line);
    }
    decodedText.forEach(line => console.log(line));
}

spyMaster([
    'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'
]);

spyMaster([
    'enCode',
    'Some messages are just not encoded what can you do?',
    'RE - ENCODE THEMNOW! - he said.',
    'Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%.'
]);
function radicalMarketing(input) {
    let subscribersRegister = new Map(); // person - [subscribers]
    let subscribedToRegister = new Map(); // person - [subscribed to person]

    for (let line of input) {
        let [firstPerson, secondPerson] = line.split('-');
        if (!secondPerson) {
            if (!subscribersRegister.has(firstPerson))
                subscribersRegister.set(firstPerson, new Set());
        }
        else if (subscribersRegister.has(firstPerson) && subscribersRegister.has(secondPerson) &&
                firstPerson != secondPerson) {
            subscribersRegister.get(secondPerson).add(firstPerson);

            if (!subscribedToRegister.has(firstPerson))
                subscribedToRegister.set(firstPerson, new Set());
            subscribedToRegister.get(firstPerson).add(secondPerson);
        }
    }
    // target client
    let subscribersRank = [...subscribersRegister.keys()].sort(sortByRank);
    let target = subscribersRank[0];

    console.log(target);
    let subscribers = [...subscribersRegister.get(target)];
    for (let i = 1; i <= subscribers.length; i++)
        console.log(`${i}. ${subscribers[i - 1]}`);

    function sortByRank(a, b) {
        let subscribersA = [...subscribersRegister.get(a)].length;
        let subscribersB = [...subscribersRegister.get(b)].length;
        if (subscribersA != subscribersB)
            return subscribersB - subscribersA; // DESC subscribers count
        let subscribedToA = 0;
        let subscribedToB = 0;
        if (subscribedToRegister.has(a))
            subscribedToA = [...subscribedToRegister.get(a)].length;
        if (subscribedToRegister.has(b))
            subscribedToB = [...subscribedToRegister.get(b)].length;
        if (subscribedToA != subscribedToB)
            return subscribedToB - subscribedToA; // DESC subscribed-to count
    }
}

radicalMarketing([
    'A',
    'B',
    'C',
    'D',
    'A-B',
    'B-A',
    'C-A',
    'D-A'
]);

radicalMarketing([
    'J',
    'G',
    'P',
    'R',
    'C',
    'J-G',
    'G-J',
    'P-R',
    'R-P',
    'C-J'
]);
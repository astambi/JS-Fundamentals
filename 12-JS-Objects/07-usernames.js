function usernames(arr) {
    let usernames = new Set();
    for (let username of arr)
        usernames.add(username);
    console.log([...usernames].sort(sortByLengthAlpha)
                .join('\n'));

    function sortByLengthAlpha(a, b) {
        if (a.length < b.length)    return -1;  // 1. by length
        if (a.length > b.length)    return 1;
        return a.localeCompare(b);              // 2. then alphabetically
    }
}

usernames([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);

usernames([
    'Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'
]);
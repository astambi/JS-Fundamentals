// function countWordsWithMaps([text]) {
//     text = text.toLowerCase();
//     let wordsCount = new Map();
//     let match, pattern = /\b\w+\b/g;
//     while (match = pattern.exec(text)) {
//         let word = match[0];
//         if (wordsCount.has(word))   wordsCount.set(word, wordsCount.get(word) + 1);
//         else                        wordsCount.set(word, 1);
//     }
//     Array.from(wordsCount.keys()).sort()
//         .forEach(word => console.log(`'${word}' -> ${wordsCount.get(word)} times`));
// }

function countWordsWithMaps([text]) {
    let words = text.toLowerCase()
                    .split(/\W+/g)
                    .filter(x => x != '');
    let wordsCount = new Map();
    for (let word of words)
        wordsCount.has(word) ? wordsCount.set(word, wordsCount.get(word) + 1) : wordsCount.set(word, 1);
    Array.from(wordsCount.keys()).sort()
        .forEach(word => console.log(`'${word}' -> ${wordsCount.get(word)} times`));
}

countWordsWithMaps(["Far too slow, you're far too slow."]);
countWordsWithMaps(["JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --"]);
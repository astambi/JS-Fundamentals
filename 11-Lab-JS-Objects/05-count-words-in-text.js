// function countWordsInText([text]) {
//     let countWords = {};
//     let match, pattern = /\b\w+\b/g;
//     while (match = pattern.exec(text)) {
//         let word = match[0];
//         if(!countWords[word])   countWords[word] = 0;
//         countWords[word]++;
//     }
//     console.log(JSON.stringify(countWords));
// }

function countWordsInText([text]) {
    let words = text.split(/\W+/g).filter(x => x != '');
    let countWords = {};
    for (let word of words)
        countWords[word] ? countWords[word]++ : countWords[word] = 1;
    console.log(JSON.stringify(countWords));
}

countWordsInText(["Far too slow, you're far too slow."]);
countWordsInText(["JS devs use Node.js for server-side JS.-- JS for devs"]);
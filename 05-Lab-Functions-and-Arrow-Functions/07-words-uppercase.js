function wordsUppercase([input]) {
    function extractWords() {
        return input.toUpperCase()
                    .split(/\W+/)
                    .filter(w => w != '');
    }
    return extractWords().join(', ');
}

// function wordsUppercase([input]) {
//     return input.toUpperCase()
//                 .split(/\W+/)
//                 .filter(w => w != '')
//                 .join(', ');
// }

console.log(wordsUppercase(['Hi, how are you?']));
console.log(wordsUppercase(['hello']));
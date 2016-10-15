function captainObvious([firstText, secondText]) {
    let repeatingWords = getRepeatingWords(firstText.toLowerCase());
    // console.log(repeatingWords);
    checkForRepeatingWordsInText(repeatingWords, secondText);

    function checkForRepeatingWordsInText(repeatingWords, text) {
        if (repeatingWords.length == 0)			console.log('No words');
        else if (repeatingWords.length < 2)		console.log('No sentences');
        else {
            let sentencePattern = /\b.+?[.?!]/g;
            let sentences = text.match(sentencePattern);
            // console.log(sentences);
            let matchingSentences = getMatchingSentences(sentences, repeatingWords);
            if (matchingSentences.length == 0)	console.log('No sentences');
            else matchingSentences.forEach(x => console.log(x));
        }
    }

    function getMatchingSentences(sentences, repeatingWords) {
        let matchingSentences = [];
        for (let sentence of sentences) {
            let repeatingWordsInSentence = new Set();
            let match, wordPattern = /\b[a-zA-Z]+\b/g;
            while (match = wordPattern.exec(sentence) ) {
                for (let word of repeatingWords) {
                    if (word == match[0].toLowerCase())
                        repeatingWordsInSentence.add(word);
                }
            }
            if (repeatingWordsInSentence.size >= 2)
                matchingSentences.push(sentence);
        }
        return matchingSentences;
    }

    function getRepeatingWords(text) {
        let match, wordPattern = /\b[a-zA-Z]+\b/g;
        let repeatingWords = []; // word, count
        while (match = wordPattern.exec(text)) {
            if (!repeatingWords[match])
                repeatingWords[match] = 0;
            repeatingWords[match]++;
        }
        let minRepeatingWords = [];
        for (let word in repeatingWords)
            if (repeatingWords[word] >= 3)
                minRepeatingWords.push(word);
        return minRepeatingWords;
    }
}

captainObvious([
    "Captain Obvious was walking down the street. As the captain was walking a person came and told him: You are Captain Obvious! He replied: Thank you CAPTAIN OBVIOUS you are the man!",
    "The captain was walking and he was obvious. He did not know what was going to happen to you in the future. Was he curious? We do not know."
]);

captainObvious([
    "Why, why is he so crazy, so so crazy? Why?",
    "There are no words that you should be matching. You should be careful."
]);
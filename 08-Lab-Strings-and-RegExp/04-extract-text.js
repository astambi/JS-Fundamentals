function extractTextInParentheses([text]) {
    let result = [];
    let startIndex = text.indexOf('(');
    while(startIndex > -1) {
        let endIndex = text.indexOf(')', startIndex + 1);
        if (endIndex == -1) break;
        result.push(text.substring(startIndex + 1, endIndex));
        startIndex = text.indexOf('(', endIndex + 1);
    }
    console.log(result.join(', '));
}

extractTextInParentheses(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']);
function variablesInSentences([text]) {
    let pattern = /\b_([a-zA-Z\d]+)\b/g;
    let match, variables = [];
    while (match = pattern.exec(text))
        variables.push(match[1]);
    console.log(variables.join(','));
}

variablesInSentences(['The _id and _age variables are both integers.']);
variablesInSentences(['Calculate the _area of the _perfectRectangle object.']);
variablesInSentences(['__invalidVariable _evenMoreInvalidVariable_ _validVariable']);
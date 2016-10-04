function printArrayWithDelimiter(arr) {
    let delimiter = arr.pop();
    console.log(arr.join(delimiter));
}

printArrayWithDelimiter(['One','Two','Three','Four','Five ','-']);
printArrayWithDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);
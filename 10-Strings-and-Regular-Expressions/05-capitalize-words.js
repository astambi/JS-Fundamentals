function capitaliseWords([text]) {
    text = text.toUpperCase();
    let match, pattern = /\b\w+\b/g;
    while (match = pattern.exec(text))
        text = text.replace(match, match[0][0] + (match[0].toLowerCase()).substr(1));
    return text;
}

console.log(capitaliseWords(['Capitalize these words']));
console.log(capitaliseWords(['Was that Easy? tRY thIs onE for SiZe!']));
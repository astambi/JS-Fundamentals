// function splitStringWithDelimiter([data, delimiter]) {
//     console.log(data.split(delimiter).join('\n'));
// }

function splitStringWithDelimiter([data, delimiter]) {
    data = data.split(delimiter);
    console.log(data.join('\n'));
}

splitStringWithDelimiter([
    'One-Two-Three-Four-Five ',
    '-'
]);

splitStringWithDelimiter([
    'http://platform.softuni.bg',
    '.'
]);
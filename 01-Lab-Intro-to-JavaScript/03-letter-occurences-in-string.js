// function countLetters([str, letter]) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++)
//         if (str[i] == letter)   count++;
//     return count;
// }

function countLetters([str, letter]) {
    let count = 0;
    for (let ch of str)
        if (ch == letter)   count++;
    return count;
}

console.log(countLetters(['hello', 'l']));
console.log(countLetters(['panther', 'n']));
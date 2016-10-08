// function repeatStringNTimes ([text, n]) {
//     let repeatedStr = '';
//     for (let i = 0; i < n; i++)
//         repeatedStr = repeatedStr + text;
//         // repeatedStr = repeatedStr.concat(text);
//     return repeatedStr;
// }

function repeatStringNTimes ([text, n]) {
    return text.repeat(Number(n));
}

console.log(repeatStringNTimes(['repeat','5']));
console.log(repeatStringNTimes(['magic is real','3']));
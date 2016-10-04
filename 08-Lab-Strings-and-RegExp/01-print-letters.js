function printLetters(str) {
    if (Array.isArray(str))	str = str[0];
    for(let i in str)
        console.log(`str[${i}] -> ${str[i]}`);
}

// function printLetters([str]) {
//     for(let i in str)
//         console.log(`str[${i}] -> ${str[i]}`);
// }

printLetters(['Hello, World!']);
printLetters(['SoftUni']);
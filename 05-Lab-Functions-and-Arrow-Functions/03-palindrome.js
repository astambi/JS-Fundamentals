// function isPalindrome([str]) {
//     for (let ch in str)
//         if (str[ch] != str[str.length - 1 - ch]) return false;
//     return true;
// }

function isPalindrome([str]) {
    for (let i = 0; i <= (str.length-1)/2; i++)
        if (str[i] != str[str.length - 1 - i]) return false;
    return true;
}

console.log(isPalindrome(['haha']));
console.log(isPalindrome(['racecar']));
console.log(isPalindrome(['unitinu']));
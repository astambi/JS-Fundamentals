function numbers1ToN([n]) {
    n = Number(n);
    let str = '';
    for (let i = 1; i <= n; i++)
        str += i;
    return str;
}

console.log(numbers1ToN(['11']));
function oddNumbers1ToN(input) {
    let n = Number(input[0]);
    for (let i = 1; i <= n; i+=2)
        console.log(i);
}

oddNumbers1ToN([5]);
oddNumbers1ToN([4]);
oddNumbers1ToN([7]);
oddNumbers1ToN([5, 3]);
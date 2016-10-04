function dnaHelix([n]) {
    n = Number(n);
    let seq = 'ATCGTTAGGG';
    let len = seq.length;
    let count = 0;
    for (let row = 1; row <= n; row++) {
        switch(row % 4) {
            case 1: console.log(`**${seq[count++%len]}${seq[count++%len]}**`); break;
            case 2:
            case 0: console.log(`*${seq[count++%len]}--${seq[count++%len]}*`); break;
            case 3: console.log(`${seq[count++%len]}----${seq[count++%len]}`); break;
        }
    }
}

dnaHelix([4]);
dnaHelix([10]);
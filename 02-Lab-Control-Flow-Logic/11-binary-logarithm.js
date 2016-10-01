function binaryLog(numbers) {
    numbers = numbers.map(Number);
    for (let num of numbers)
        console.log(Math.log2(num));
}

binaryLog(['1024']);
binaryLog(['1048576']);
binaryLog(['256']);
binaryLog(['1']);
binaryLog(['2']);
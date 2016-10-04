function printEveryNthArrayElement(arr) {
    let n = Number(arr.pop());
    for (let i = 0; i < arr.length; i += n)
        console.log(arr[i]);
}

printEveryNthArrayElement([5, 20, 31, 4, 20, 2]);
printEveryNthArrayElement(['dsa', 'asd', 'test', 'tset', '2']);
printEveryNthArrayElement([1,2,3,4,5,6]);
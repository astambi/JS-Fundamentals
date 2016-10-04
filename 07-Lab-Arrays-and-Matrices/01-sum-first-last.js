function sumFirstLastElements(arr) {
    return Number(arr[0]) + Number(arr[arr.length-1]);
}

console.log(sumFirstLastElements(['20', '30', '40']));
console.log(sumFirstLastElements(['5', '10']));
console.log(sumFirstLastElements([2]));
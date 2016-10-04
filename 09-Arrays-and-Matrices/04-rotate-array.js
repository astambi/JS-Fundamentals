function rotateArray(arr) {
    let rotationsCount = arr.pop() % arr.length;
    for (let i = 0; i < rotationsCount; i++)
        arr.unshift(arr.pop());
    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana','Orange','Coconut','Apple','15']);
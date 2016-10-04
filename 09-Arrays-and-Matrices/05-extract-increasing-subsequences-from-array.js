function extractNonDescSequence(arr) {
    arr = arr.map(Number);
    let seq = [arr[0]];
    for (let i = 1; i < arr.length; i++)
        if(arr[i] >= seq[seq.length - 1])
            seq.push(arr[i]);
    console.log(seq.join('\n'));
}

extractNonDescSequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractNonDescSequence([1,2,3,4]);
extractNonDescSequence([20,3,2,15,6,1]);
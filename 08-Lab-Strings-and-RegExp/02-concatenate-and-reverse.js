function concatenateReverse(arr) {
    console.log(Array.from(arr.join(''))
                    .reverse()
                    .join(''));
}

concatenateReverse(['I', 'am', 'student']);
concatenateReverse(['race', 'car']);
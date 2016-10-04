function processOddPositionNumbers(arr) {
    let result = arr.filter((x, i) => i % 2 != 0)
                    .map(x => 2*x)
                    .reverse();
    console.log(result.join(' '));
}

processOddPositionNumbers(['10', '15', '20', '25']);
processOddPositionNumbers(['3', '0', '10', '4', '7', '3']);
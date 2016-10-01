function  lastMonth(input) {
    let [day, month, year] = input.map(Number);
    let prevMonth = month - 1;
    if (prevMonth == 0) prevMonth = 12;
    let lastDay = 31;
    switch (prevMonth) {
        case 2:
            let isLeapYear = (year % 400 == 0 ) ||
                             (year % 4 == 0 && year % 100 != 0);
            isLeapYear ? lastDay = 29 : lastDay = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            lastDay = 30;
            break;
    }
    console.log(lastDay);
}

lastMonth(['17','3','2002']);
lastMonth(['13','12','2004']);
lastMonth(['13','3','2004']);
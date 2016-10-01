function leapYear(year) {
    year = Number(year);
    let isLeapYear = (year % 400 == 0 ) ||
                     (year % 4 == 0 && year % 100 != 0);
    console.log(isLeapYear ? "yes" : "no");
}

leapYear(['1999']);
leapYear(['2000']);
leapYear(['1900']);
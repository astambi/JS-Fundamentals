function calendar(input) {
    let [day, month, year] = input.map(Number);
    // calc days
    let firstDateCurrMonth = new Date(year, month - 1, 1); // months [0, 11]
    let prevMonthDays = firstDateCurrMonth.getDay();
    let lastDayPrevMonth = lastDayInMonth(month - 1, year);
    let lastDayCurrentMonth = lastDayInMonth(month, year);
    let lastDateDayOfWeek = (new Date(year, month - 1, lastDayCurrentMonth)).getDay();
    let nextMonthDays = 6 - lastDateDayOfWeek;
    // table header
    let calendar = "<table>\n" + "<tr>" + "<th>Sun</th>" + "<th>Mon</th>" + "<th>Tue</th>"
        + "<th>Wed</th>" + "<th>Thu</th>" + "<th>Fri</th>" + "<th>Sat</th>" + "</tr>\n";
    // previous month
    calendar += "<tr>";
    for (let i = prevMonthDays; i > 0; i--)
        calendar += `<td class="prev-month">${lastDayPrevMonth - i + 1}</td>`;
    // current month: incomplete week following prev month
    let currentDay = 0;
    for (let i = 1; i <= 7 - prevMonthDays; i++)
        addDayToCalendar();
    calendar += "</tr>\n";
    // current month: full weeks
    let countFullWeeks = Math.floor((lastDayCurrentMonth - currentDay) / 7);
    for (let j = 0; j < countFullWeeks; j++) {
        calendar += "<tr>";
        for (let i = 0; i < 7; i++)
            addDayToCalendar();
        calendar += "</tr>\n";
    }
    // current month: incomplete week + next month
    if (currentDay < lastDayCurrentMonth) {
        calendar += "<tr>";
        for (let i = currentDay; i < lastDayCurrentMonth; i++ )
            addDayToCalendar();
        for (let i = 1; i <= nextMonthDays; i++)
            calendar += `<td class="next-month">${i}</td>`;
        calendar += "</tr>\n";
    }
    // close table
    calendar += "</table>\n";
    return calendar;

    function addDayToCalendar() {
        if (++currentDay == day)
            return calendar += `<td class="today">${currentDay}</td>`;
        else
            return calendar += `<td>${currentDay}</td>`;
    }

    function  lastDayInMonth(month, year) {
        if (month == 0) month = 12; // [1, 12]
        switch (month) {
            case 2:
                let isLeapYear = (year % 400 == 0 )
                    || (year % 4 == 0 && year % 100 != 0);
                if (isLeapYear) return 29;
                return 28;
            case 4:
            case 6:
            case 9:
            case 11: return 30;
            default: return 31;
        }
    }
}

// console.log(calendar([4, 9, 2016]));
// console.log(calendar([24, 12, 2012]));
// console.log(calendar([1, 4, 2016]));
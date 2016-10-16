function minkaTheJSGoddess(input) {
    let tasks = {};
    for (let line of input) {
        let [name, type, task, score, lines] = line.split(/\s*&\s*/g);
        let taskName = 'Task ' + Number(task);
        if (!tasks.hasOwnProperty(taskName))
            tasks[taskName] = {tasks: [], average: 0, lines: 0};
        tasks[taskName].tasks.push({name: name, type: type});
        tasks[taskName].lines += Number(lines);
        let tasksCountPrev = tasks[taskName].tasks.length - 1;
        let newAverage = (tasks[taskName].average * tasksCountPrev + Number(score)) / (tasksCountPrev + 1);
        tasks[taskName].average = newAverage;
    }
    // sort tasks
    let sortedKeys = Object.keys(tasks).sort(sortByAverageThenLines);
    let sortedTasks = {};
    for (let task of sortedKeys) {
        sortedTasks[task] = tasks[task];
        sortedTasks[task].average = roundNumber(sortedTasks[task].average);
        sortedTasks[task].lines = roundNumber(sortedTasks[task].lines);
        sortedTasks[task].tasks.sort(sortByName);
    }
    console.log(JSON.stringify(sortedTasks));

    function roundNumber(number) {
        return Math.round(number * 100) / 100;
    }

    function sortByName(a, b) {
        return a.name.localeCompare(b.name);
    }

    function sortByAverageThenLines(a, b) {
        let averageA = tasks[a].average;
        let averageB = tasks[b].average;
        if (averageA != averageB)
            return averageB - averageA; // DESC average score
        let linesA = tasks[a].lines;
        let linesB = tasks[b].lines;
        if (linesA != linesB)
            return linesA - linesB;     // ASC lines of code
    }
}

minkaTheJSGoddess([
    'Array Matcher & strings & 4 & 100 & 38',
    'Magic Wand & draw & 3 & 100 & 15',
    'Dream Item & loops & 2 & 88 & 80',
    'Knight Path & bits & 5 & 100 & 65',
    'Basket Battle & conditionals & 2 & 100 & 120',
    'Torrent Pirate & calculations & 1 & 100 & 20',
    'Encrypted Matrix & nested loops & 4 & 90 & 52',
    'Game of bits & bits & 5 &  100 & 18',
    'Fit box in box & conditionals & 1 & 100 & 95',
    'Disk & draw & 3 & 90 & 15',
    'Poker Straight & nested loops & 4 & 40 & 57',
    'Friend Bits & bits & 5 & 100 & 81'
]);
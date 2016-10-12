function examResult (input) {
    let course = input.pop().trim(); // NB! trim
    let [pointsSum, resultsCount] = [0, 0];
    for (let line of input) {
        let [student, exam, examPoints, bonuses] = line.split(/\s+/g).filter(x => x != '');
        [examPoints, bonuses] = [examPoints, bonuses].map(Number);
        let coursePoints = examPoints * 0.2 + bonuses;
        let grade = Math.min(6, coursePoints / 80 * 4 + 2);
        if (course == exam) {
            pointsSum += examPoints;
            resultsCount++;
        }
        if (examPoints < 100)
            console.log(`${student} failed at "${exam}"`);
        else
            console.log(`${student}: Exam - "${exam}"; Points - ${roundNumber(coursePoints)}; Grade - ${grade.toFixed(2)}`);
    }
    if (resultsCount > 0) {
        let averagePoints = roundNumber(pointsSum / resultsCount);
        console.log(`"${course}" average points -> ${averagePoints}`);
    }

    function roundNumber(num) {
        return Math.round(num * 100) / 100; // remove trailing zeroes
    }
}

examResult([
    'Pesho C#-Advanced 100 3',
    'Gosho Java-Basics 157 3',
    'Tosho HTML&CSS 317 12',
    'Minka C#-Advanced 57 15',
    'Stanka C#-Advanced 157 15',
    'Kircho C#-Advanced 300 0',
    'Niki C#-Advanced 400 10',
    'C#-Advanced'
]);
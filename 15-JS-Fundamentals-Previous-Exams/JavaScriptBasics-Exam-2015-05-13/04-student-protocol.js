function studentProtocol(input) {
    let examResults = {}; // exam - [{student, result, makeUpExams}]
    for (let line of input) {
        let [studentName, exam, examResult] = line.split(/ *[-:] */g).map(x => x.trim());
        examResult = Number(examResult);
        if (examResult < 0 || examResult > 400) continue;
        if (!examResults[exam])
            examResults[exam] = [];
        let studentData = false;
        let studentIndex = false;
        for (let i in examResults[exam]) {
            let studentObj = examResults[exam][i];
            if (studentObj.name == studentName) {
                studentData = studentObj;
                studentIndex = i;
                break;
            }
        }
        if (studentData == false) {
            studentData = {name: studentName, result: examResult, makeUpExams: 0};
            examResults[exam].push(studentData);
        }
        else {
            studentData.result = Math.max(examResult, studentData.result);
            studentData.makeUpExams++;
            examResults[exam][studentIndex] = studentData;
        }
    }
    for (let exam in examResults)
        examResults[exam] = examResults[exam].sort(sortResults);
    console.log(JSON.stringify(examResults));

    function sortResults(a,b) {
        if (a.result != b.result)
            return b.result - a.result; // DESC
        if (a.makeUpExams != b.makeUpExams)
            return a.makeUpExams - b.makeUpExams;	// ASC
        return (a.name).localeCompare(b.name);
    }
}

studentProtocol([
    'Peter Jackson - Java : 350',
    'Jane - JavaScript : 200',
    'Jane     -    JavaScript :     400',
    'Simon Cowell - PHP : 100',
    'Simon Cowell-PHP: 500',
    'Simon Cowell - PHP : 200'
]);

studentProtocol([
    'Simon Cowell - PHP : 100',
    'Simon Cowell-PHP: 500',
    'Peter Jackson - PHP: 350',
    'Simon Cowell - PHP : 400'
]);
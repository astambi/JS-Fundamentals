function employeeData(input) {
    let pattern = /^([A-Z][a-zA-Z]*) - ([1-9]\d*) - ([a-zA-Z\d -]+)$/;
    for (let element of input) {
        let match = pattern.exec(element);
        if (match)
            console.log(`Name: ${match[1]}\n` +
                        `Position: ${match[3]}\n` +
                        `Salary: ${match[2]}`);
    }
}

employeeData(['Isacc - 1000 - CEO',
            'Ivan - 500 - Employee',
            'Peter - 500 – Employee']);
employeeData(['Jonathan - 2000 - Manager',
            'Peter- 1000- Chuck',
            'George - 1000 - Team Leader ']);
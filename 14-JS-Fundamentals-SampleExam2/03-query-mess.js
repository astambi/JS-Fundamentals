function queryMess(input) {
    for (let line of input) {
        let pairPattern = /[&?]/g;
        let pairs = line.split(pairPattern);
        let fieldValue = new Map();
        for (let pair of pairs) {
            let keyValuePattern = /=/g;
            pair = pair.replace(/(\+|%20)+/g, ' ');
            let [field, value] = pair.split(keyValuePattern)
                                     .map(x => x.trim());
            if (field && value) {
                if (!fieldValue.has(field))
                    fieldValue.set(field, []);
                fieldValue.get(field).push(value);
            }
        }
        let result = '';
        for (let [field, values] of fieldValue)
            result += (`${field}=[${values.join(', ')}]`);
        console.log(result);
    }
}

queryMess([
    'login=student&password=student'
]);

queryMess([
    'field=value1&field=value2&field=value3',
    'http://example.com/over/there?name=ferret'
]);

queryMess([
    'foo=%20foo&value=+val&foo+=5+%20+203',
    'foo=poo%20&value=valley&dog=wow+',
    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
    'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
]);
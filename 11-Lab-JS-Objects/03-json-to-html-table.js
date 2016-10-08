function jsonToHtmlTable([inputJSON]) {
    let arr = JSON.parse(inputJSON);
    let keys = Object.keys(arr[0]);
    // table header
    let table = '<table>\n' + '  <tr>';
    for (let key of keys)
        table += `<th>${htmlEscape(key)}</th>`;
    table += '</tr>\n';
    // data
    for (let obj of arr) {
        table += '  <tr>';
        for (let key of keys)
            table += `<td>${htmlEscape(obj[key])}</td>`;
        table += '</tr>\n';
    }
    // footer
    table += '</table>';
    console.log(table);

    function htmlEscape(text) {
        text = '' + text;
        return text.replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#39;');
    }
}

jsonToHtmlTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);
jsonToHtmlTable(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']);

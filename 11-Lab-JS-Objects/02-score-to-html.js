function scoreToHTML([inputJSON]) {
    let table = '<table>\n' +
                '  <tr><th>name</th><th>score</th></tr>\n';
    let arr = JSON.parse(inputJSON);
    // console.log(arr);
    for (let obj of arr)
        table += `  <tr><td>${htmlEscape(obj['name'])}</td>` +
                       `<td>${htmlEscape(obj['score'])}</td></tr>\n`;
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

    // function htmlEscape(text) {
    //     let result = '';
    //     text = '' + text;
    //     for(let ch of text)
    //         switch(ch) {
    //             case '&': result += '&amp;'; break;
    //             case '<': result += '&lt;'; break;
    //             case '>': result += '&gt;'; break;
    //             case '"': result += '&quot;'; break;
    //             case "'": result += '&#39;'; break;
    //             default: result += ch; break;
    //         }
    //     return result;
    // }

    // function htmlEscape(text) {
    //     text = '' + text;
    //     let map = {	'&': '&amp;',
    //         '<': '&lt;',
    //         '>': '&gt;',
    //         '"': '&quot;',
    //         "'": '&#39;' };
    //     return text.replace(/[<>&'"]/g, ch => map[ch]);
    // }
}

scoreToHTML(['[{"name":"Pesho","score":70}]']);
scoreToHTML(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']);
scoreToHTML(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']);


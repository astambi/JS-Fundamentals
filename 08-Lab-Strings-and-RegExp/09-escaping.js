function htmlEscaping(items) {
    return '<ul>\n'
        + items.map(htmlEscape)
                .map(item => `\t<li>${item}</li>`)
                .join('\n')
        + '\n</ul>\n';

    function htmlEscape(input) {
        return input.replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#39;');
    }

    // function htmlEscape(input) {
    //     let map = {	'&': '&amp;',
    //                 '<': '&lt;',
    //                 '>': '&gt;',
    //                 '"': '&quot;',
    //                 "'": '&#39;' };
    //     return input.replace(/[<>&'"]/g, ch => map[ch]);
    // }

    // function htmlEscape(input) {
    //     let result = '';
    //     for(let ch of input)
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
}

console.log(htmlEscaping(['<b>unescaped text</b>', 'normal text']));
console.log(htmlEscaping(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']));
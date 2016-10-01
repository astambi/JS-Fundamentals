function colorfulNums(n) {
    n = Number(n);
    let html = '<ul>\n';
    for (let i = 1; i <= n; i++) {
        let color = (i % 2 == 0) ? 'blue' : 'green';
        html += `\t<li><span style='color:${color}'>${i}</span></li>\n`;
    }
    html += '</ul>';
    return html;
}

// test in browser
document.body.innerHTML = colorfulNums(['10']);
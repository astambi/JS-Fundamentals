function multiplicationTable([n]) {
    n = Number(n);
    // heading row
    let table = "<table border='1'>\n" + "<tr>\n" + "\t<th>x</th>\n";
    for (let i = 1; i <= n; i++)
        table += `\t<th>${i}</th>\n`;
    table += "</tr>\n";
    // multiplication table
    for (let row = 1; row <= n; row++) {
        table += "<tr>\n" + `\t<th>${row}</th>\n`;
        for (let col = 1; col <= n; col++)
            table += `\t<td>${row * col}</td>\n`;
        table += "</tr>\n";
    }
    table += "</table>";
    return table;
}

document.body.innerHTML = multiplicationTable(['25']);
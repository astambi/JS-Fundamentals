function templateFormat(input) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
            + '<quiz>\n';
    for (let i = 0; i < input.length; i += 2)
        xml += '\t<question>\n' + `\t\t${input[i]}\n` + '\t</question>\n'
            + '\t<answer>\n' + `\t\t${input[i+1]}\n` + '\t</answer>\n';
    xml += '</quiz>';
    console.log(xml);
}

templateFormat(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]);
templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]);
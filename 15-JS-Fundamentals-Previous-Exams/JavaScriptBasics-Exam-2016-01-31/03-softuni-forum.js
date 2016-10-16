function softuniForum(input) {
    let bannedNames = input.pop().split(' ');
    let text = '';
    input.forEach(line => text += line + '\n');
    // let usernamePattern = /#(\b[a-zA-Z][a-zA-Z\d-_]*[a-zA-Z\d]\b)/g;
    // let blockCommentPattern = /<code>[\w\W]+?<\/code>/g;
    let allPatterns = /(#(\b[a-zA-Z][a-zA-Z\d-_]*[a-zA-Z\d]\b))|(<code>[\w\W]+?<\/code>)/g;
    let linkElements = ['<a href="/users/profile/show/', '">', '</a>'];
    let match;
    while (match = allPatterns.exec(text)) {
        if (match[3]) continue; // ignore block comments
        if (match[1]) {
            let isBannedName = false;
            for (let name of bannedNames) {
                if (name == match[2]) {     // username
                    isBannedName = true;
                    text = text.replace(match[1],     // *username
                        '*'.repeat(match[2].length)); // username
                }
            }
            if (!isBannedName) {
                text = text.replace(match[1],       // *username
                    linkElements[0] + match[2]      // username
                    + linkElements[1] + match[2]    // username
                    + linkElements[2]);
            }
        }
    }
    console.log(text);
}

softuniForum([
    "#RoYaL: I'm not sure what you mean,",
    "but I am confident that I've written",
    "everything correctly. Ask #iordan_93",
    "and #pesho if you don't believe me",
    "<code>",
    "#trying to print stuff",
    'print("yoo")',
    "</code>",
    "pesho gosho"
]);
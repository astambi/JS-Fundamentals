function usernames(input) {
    let usernames = [];
    for (let email of input) {
        let [alias, domain] = email.split('@');
        let domainElements = domain.split('.');
        let username = alias + '.';
        domainElements.forEach(x => username += x[0]);
        usernames.push(username);
    }
    console.log(usernames.join(', '));
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);
// function formFilter(input) {
//     let [username, email, phoneNumber] = input.slice(0, 3);
//     let formData = input.slice(3);
//     let regexUsername = /<![a-zA-Z]+!>/g;
//     let regexEmail = /<@[a-zA-Z]+@>/g;
//     let regexPhoneNumber = /<\+[a-zA-Z]+\+>/g;
//     for (let line of formData) {
//         line = line.replace(regexUsername, username);
//         line = line.replace(regexEmail, email);
//         line = line.replace(regexPhoneNumber, phoneNumber);
//         console.log(line);
//     }
// }

function formFilter(input) {
    let [username, email, phoneNumber] = input.slice(0, 3);
    let formData = input.slice(3);
    let regexUsername = /<![a-zA-Z]+!>/g;
    let regexEmail = /<@[a-zA-Z]+@>/g;
    let regexPhoneNumber = /<\+[a-zA-Z]+\+>/g;
    formData.forEach(line => {
        line = line.replace(regexUsername, username);
        line = line.replace(regexEmail, email);
        line = line.replace(regexPhoneNumber, phoneNumber);
        console.log(line);
    });
}

formFilter(['Pesho',
            'pesho@softuni.bg',
            '90-60-90',
            'Hello, <!username!>!',
            'Welcome to your Personal profile.',
            'Here you can modify your profile freely.',
            'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
            'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
            'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);
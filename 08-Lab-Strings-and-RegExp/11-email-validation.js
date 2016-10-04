function emailValidation([email]) {
    let validation = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/;
    console.log(validation.test(email) ? "Valid" : "Invalid");
}

emailValidation(['valid@email.bg']);
emailValidation(['invalid@emai1.bg']);
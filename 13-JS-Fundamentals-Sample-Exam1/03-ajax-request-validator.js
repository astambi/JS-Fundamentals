function ajaxRequestValidator(input) {
    let hashPattern = input.pop();
    for (let i = 0; i < input.length; i += 3) {
        let [methodInput, credentialsInput, contentInput] = [input[i], input[i+1], input[i+2]];
        let methodPattern = /^Method: (GET|POST|PUT|DELETE)$/;
        let authTokenPattern = /^Credentials: (Basic|Bearer) ([a-zA-z\d]*)$/;
        let contentPattern = /^Content: ([a-zA-Z\d.]+)$/;
        let methodMatch = methodPattern.exec(methodInput);             // [method]
        let authTokenMatch = authTokenPattern.exec(credentialsInput);  // [authType, authToken]
        let contentMatch = contentPattern.exec(contentInput);

        if (!(methodMatch && authTokenMatch && contentMatch))          // invalid format
            console.log('Response-Code:400');
        else {
            let method = methodMatch[1];
            let [authType, authToken] = [authTokenMatch[1],authTokenMatch[2]];
            if (method != 'GET' && authType == 'Basic')                 // invalid auth.type
                console.log(`Response-Method:${method}&Code:401`);
            else if (!isValidAuthToken(authToken, hashPattern))         // invalid auth.token
                console.log(`Response-Method:${method}&Code:403`);
            else
                console.log(`Response-Method:${method}&Code:200&Header:${authToken}`)
        }
    }

    function isValidAuthToken(authToken, hashPattern) {
        let tokens = hashPattern.split('');
        for (let i = 0; i < tokens.length; i+=2) {
            let patternCount = Number(tokens[i]);
            let patternLetter = tokens[i+1];
            let count = 0;
            for (let ch of authToken) {
                if (ch == patternLetter)   count++;
            }
            if (count == patternCount)
                return true;
        }
        return false;
    }
}

ajaxRequestValidator([
   'Method: GET',
   'Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
   'Content: users.asd.1782452.278asd',
   'Method: POST',
   'Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas',
   'Content: Johnathan',
   '2q'
]);

ajaxRequestValidator([
   'Method: PUT',
   'Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
   'Content: users.asd/1782452$278///**asd123',
   'Method: POST',
   'Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas',
   'Content: Johnathan',
   'Method: DELETE',
   'Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx',
   'Content: This.is.a.sample.content',
   '2e5g'
]);
var arg = process.argv[2];
console.log(obfuscate(arg));

function obfuscate(userInput) {
    var password = "";
    var letters = userInput.split("");
    for (var i = 0; i < userInput.length; i++) {
        switch (letters[i]) {
        case 'a':
            password += '4';
            break;
        case 'e' :
            password += '3';  
            break;
        case 'o' :
            password += '0';
            break;
        case 'l':
            password += '1';
            break;
        default :
            password += letters[i];

        }
    }
    return (password);
}

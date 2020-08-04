//Assignment Code
var alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numList = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var speChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?'];

var generateBtn = document.querySelector("#generateBtn");

generateBtn.addEventListener("click", writePassword);


// WHEN prompted for password criteria
function generatePassword() {
    // THEN I select which criteria to include in the password
    var passLength = parseInt(prompt("Welcome to the Password Generator! Please enter the amount of characters you want for password. Please note that it must be at least 8 characters and less than 128 characters."));
    
    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters
    if (confirm(passLength > 8 || passLength < 128)) {
        console.log(passLength);
        
        var passArr = []
        var pass = ''
        
        // WHEN prompted for character types to include in the password
        // THEN I choose lowercase, uppercase, numeric, and/or special characters
        var num = confirm("Would you like Numbers in your password?");
        if (num === true) {
            passArr.push(numList);
        }
        
        var lowerCase = confirm("Would you like Lowercase letters?");
        if (lowerCase === true) {
            passArr.push(alphabetLower);
        }
        
        var upperCase = confirm("Would you like UpperCase letters?");
        if (upperCase === true) {
            passArr.push(alphabetUpper);
        }
        
        var specialChar = confirm("Lastly, would you like any Special Characters in your password?");
        if (specialChar === true) {
            passArr.push(speChar);
        }
        // WHEN I answer each prompt
        // THEN my input should be validated and at least one character type should be selected
        console.log(passArr, passLength)
        
        // WHEN all prompts are answered
        // THEN a password is generated that matches the selected criteria
        for (var i = 0; i < passLength; i++) {
            var randomChar = Math.floor(Math.random() * passArr.length);
            var randomPass = Math.floor(Math.random() * passArr[randomChar].length);
            var newPass = passArr[randomChar][randomPass];
            console.log(randomChar, randomPass, newPass);
            
            pass += newPass;
        }
    }  
    
    else {
        prompt = "Please enter a number that meets the given criteria";
    }
    
    return pass
}

// WHEN the password is generated
generatePassword ();

// THEN the password is either displayed in an alert or written to the page
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
}

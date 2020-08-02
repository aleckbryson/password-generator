// Special characters for the function created
const specChar = "!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompt user regarding password length and whether or not they would any Numbers, Lower/Uppercase letter, and any Special Characters
function generatePassword() {
  var passLength = prompt("Welcome to the Password Generator! Please enter the amount of characters you want for password. Please note that it must be at least 8 characters and less than 128 characters.");

  var num = confirm("Would you like Numbers in your password?");

  var lowerCase = confirm("Would you like Lowercase letters?");

  var upperCase = confirm("Would you like UpperCase letters?");

  var specChar = confirm("Lastly, would you like any Special Characters in your password?");

  // this is a minimum count for the variable defined above
  var minCount = 0;

  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters
  var minNum = "";
  var minLowerCase = "";
  var minUpperCase = "";
  var minSpecChar = "";


  // Functions for the generator created
  var functionArray = {
    getNum: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCase: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCase: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecChar: function() {
      return specChar[Math.floor(Math.random() * specChar.length)]
    }

};

  // Conditionals added based on the user input for the password requirements
  if (num === true) {
    minNum = functionArray.getNum();
    minCount++;

  }

  if (lowerCase === true) {
    minLowerCase = functionArray.getLowerCase();
    minCount++;

  }

  if (upperCase === true) {
    minUpperCase = functionArray.getUpperCase();
    minCount++;

  }

  if (specChar === true) {
    minSpecChar = functionArray.getSpecChar();
    minCount++;

  }


}

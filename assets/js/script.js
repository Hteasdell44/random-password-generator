// Global Variables//

var passwordLength = Math.floor(Math.random() * 128) + 1;

var containLowerCase = true;
var containUpperCase = true;
var containNumbers = true;
var containSpecialCharacters = true;

var includedCharacters = '';
var newPassword = '';

// abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here

function generatePassword() {

  includedCharacters = '';
  newPassword = '';

  alert("Welcome to my Password Generator! Please answer the following questions to craft your unique password.");

  if (confirm("Would you like to specify the length of your password?")) {

    determinePasswordLength();

  }

  if (confirm("Would you like to specify what character types to include in your password?")) {

    specifyCharacterTypes();

  }

  buildIncludedCharactersList();

  for (var i = 0; i < passwordLength; i++) {
    
    newPassword += includedCharacters.charAt(Math.floor(Math.random() * includedCharacters.length));
  }

  return newPassword;

}

function specifyCharacterTypes() {

  containLowerCase = confirm("Okay, should it contain lower cased letters?");
  containUpperCase = confirm("How about upper cased letter?");
  containNumbers = confirm("Should it contain numbers?");
  containSpecialCharacters = confirm("Okay, and last but not least, should it contain any special charachters?");

  if (containLowerCase == false && containUpperCase == false && 
       containNumbers == false && containSpecialCharacters == false) {

        alert("You said that you wanted to specify your character types, but you didn't select any.");

        if (confirm("Are you sure you want to specify your character types? If not, your password will include all character types.")) {

          specifyCharacterTypes();

        } else {

          containLowerCase = true;
          containUpperCase = true;
          containNumbers = true;
          containSpecialCharacters = true;
        }
    }
}

function determinePasswordLength() {

  passwordLength = prompt("How many characters should your password be? Please enter a number between 8 and 128.");

  if(passwordLength == null) {

    alert("You indicated that you wanted to specify your password length, but you didn't enter a value.");

    if (confirm("Are you sure you want to specify your password length? If not, your password will be a random amount of characters.")) {

      determinePasswordLength();

    } else {
      
      passwordLength = Math.floor(Math.random() * 128) + 1;

    }
  }

  if (passwordLength < 8 || passwordLength > 128) {

    alert("Your password length must be between 8 and 128 characters in length.");
    determinePasswordLength();

  }

}

function buildIncludedCharactersList() {

  if (containLowerCase) {

    includedCharacters += 'abcdefghijklmnopqrstuvwxyz';

  } 
  if (containUpperCase) {

    includedCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  }
  
  if (containNumbers) {

    includedCharacters += '0123456789';

  }
  
  if (containSpecialCharacters) {

    includedCharacters += '~!@#$%^&*()_+{}|:"<>?';
  }
}
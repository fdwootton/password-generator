// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var numberOfChar = prompt("How many characters would you like in your password? (Choose a number 8 through 128)");

  if (numberOfChar < 8 || numberOfChar > 128) {
    alert("Not a valid number. Please choose a number 8 through 128.");
  }

  else if (numberOfChar >= 8 && numberOfChar <= 128) {
  var upperCaseAnswer = confirm("Would you like upper case letters in your password?");
  var lowerCaseAnswer = confirm("Would you like lower case letters in your password?");
  var specialCharAnswer = confirm("Would you like special characters in your password?");
    }

  if (upperCaseAnswer === true && lowerCaseAnswer === true && specialCharAnswer === true) {
    console.log("yes");
  }
  }


  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

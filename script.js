// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {

  var specialChars = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  var passwordArray = [];

  // var password = "";

  var numberOfChar = prompt("How many characters would you like in your password? (Choose a number 8 through 128)");

  if (numberOfChar < 8 || numberOfChar > 128) {
    alert("Not a valid number. Please choose a number 8 through 128.");
  }

  else {
    var upperCaseAnswer = confirm("Would you like uppercase letters in your password?");

    if (upperCaseAnswer) {
      passwordArray = passwordArray.concat(upperCaseLetters);
    }

    var lowerCaseAnswer = confirm("Would you like lowercase letters in your password?");

    if (lowerCaseAnswer) {
      passwordArray = passwordArray.concat(lowerCaseLetters);
    }

    var numberAnswer = confirm("Would you like numbers in your password?");

    if (numberAnswer) {
      passwordArray = passwordArray.concat(numbers);
    }

    var specialCharAnswer = confirm("Would you like special characters in your password?");

    if (specialCharAnswer) {
      passwordArray = passwordArray.concat(specialChars);
      console.log(password.Array);
    }

    if (passwordArray.length == 0) {
      alert("Must choose at least one of the following: uppercase letters, lowercase letters, numbers, or special characters.")
    }

    else{
      for (var index = 0; index < parseInt(numberOfChar); index++) {
        password = password.append(passwordArray[Math.floor(Math.random() * (passwordArray.length - 1))]);
        //look for random index usinmg mathl.random
        //append to password string
        // const element = passwordArray[index];
        
      }
    }


  }
  }


// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

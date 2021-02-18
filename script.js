// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




var specialChars = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



/**
 * Required:
 * lowercase, uppercase, numeric, and/or special characters
 * 
 * 8 <= passwordLength <= 128
 */

 //GIVEN a new password --  our application's purpose

 //needed button on doc

 //prompt, window.prompt

 //we're asking the user what they want for their password
 //also another series of prompts
 //what length? we store that
 //what characters? we store that too

 /*
    var allCharactersPossible;

    var if(lowerCase)
    {
      add lowercase to potential password characters
    }
    {
      add uppercase to potential password characters
    }


 var lowerCase = 


//  example:
var dog = ["d", "o", "g"]
var cat = ["c", "a", "t"]

var allAnimalCharacters = (how can i select random index members from each variable)

THINK ABOUT RANDOM SELECTION FOR N NUMBER OF CHARACTERS THE USER WANTED
1. NaN
2. VALIDATION BETWEEN 8-128



//When button is pressed, a random list of numbers and characters is generated

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

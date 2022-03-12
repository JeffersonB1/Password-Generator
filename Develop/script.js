// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var results = "";
  var characters = [];
  var passwordLength = window.prompt("What is the length of the password you want to generate (min 8, max 128)");
  var quantityCharacter = parseInt(passwordLength);
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

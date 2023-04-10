var generateBtn = document.querySelector("#generate");

//setting these variables as globals so any function can access them
// Creating all of the new arrays that will contain each character
var letterUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var letterLower = "abcdefghijklmnopqrstuvwxyz";
var numbChar = "0123456789";
var specChar = "!@#$%^&*()-_=+\|<>,.?/;:'{}[]";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//We will begin writing the generatePassword function
function generatePassword (event) {
  var passLength = prompt ("How many characters would you like your password? (between 8-128)");
    if (passLength < 8 || passLength > 128) {
      alert("Please enter a valid character count between 8-128 characters!");
      // give the user the ability to reinput a correct choice
      var passLength = prompt ("How many characters would you like your password? (between 8-128)");
    }

  var chooseSpecial = confirm ("Would you like your password to include special characters? (!@#$%^&*()-_=+\|<>,.?/;:'{}[])");
  var chooseNumber = confirm ("Would you like your password to include numbers?");
  var chooseLower = confirm ("Would you like your password to include lower case letters?");
  var chooseUpper = confirm ("Would you like your password to include upper case letters?");

  if (!chooseSpecial && !chooseNumber && !chooseLower && !chooseUpper) {
    alert("Please choose at least one type of character input for your password");
    // give the user the ability to confirm at least one option
    var chooseSpecial = confirm ("Would you like your password to include special characters? (!@#$%^&*()-_=+\|<>,.?/;:'{}[])");
    var chooseNumber = confirm ("Would you like your password to include numbers?");
    var chooseLower = confirm ("Would you like your password to include lower case letters?");
    var chooseUpper = confirm ("Would you like your password to include upper case letters?");
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


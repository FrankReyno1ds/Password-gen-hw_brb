// Assignment Code
var generateBtn = document.querySelector("#generate");

var lCase = ['abcdefghijklmnopqrstuvwxyz']
var uCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
var numbers = [1234567890]
var randomChar = ['!@#$%^&*()_+=,./<>?~`|']

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log('hit');
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var passwordLength = prompt('how many characters do you want has to be between 8 and 128 characters')
  

  if (passwordLength < 8 || passwordLength >128){
    passwordLength = prompt('Please try again with password lengh between 8 and 128');
  }

  var  lowerCase = prompt('Do you want to use lower case letters? y or n')

  var upperCase = prompt('Do you want use upper case letters? y or n')

  var randomChar = prompt('Do you want to use random characters? y or n')

  var numbers = propmt('Do you want to use numbers? y or n')

}

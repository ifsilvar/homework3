// Assignment Code
var generateBtn = document.querySelector("#generate");

// character set
var charSet  = "!@#$%^&*-_='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  for (i = 0; i>=8 && i<=128; i++)

  password = charAt(Math.floor(Math.random()*charSet.length));

  passwordText.value = password;

  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



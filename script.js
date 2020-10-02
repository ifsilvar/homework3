// Assignment Code
var generateBtn = document.querySelector("#generate");


// character set
var charSet  = "!@#$%^&*-_=0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Write password to the #password input
function writePassword() {
  var password = ""
  var passwordText = document.querySelector("#password");
  
  for (var i = 0; i<=10 /*&& i<=128*/; i++){

  password = password + charSet.charAt(Math.floor(Math.random()* Math.floor(charSet.length - 1)));

  passwordText.textContent.value = password;
  //password = passwordText.textContent.value;
  //return password;
  document.querySelector("#password").value= password;
}
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthEl = document.querySelector("#length");
// character set
var charSet  = "";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = upper.toLowerCase();
var special = "";
var num = "";
// Write password to the #password input
var hasUpper, hasLower, hasSpecial, hasNum
function getUserPreference(){
    //use some confirm prompts to get user pref about including character types
    hasUpper = confirm("Do you want to include uppercase letters?")
    //build the string of chars to be used for random char depending on user pref
    if(hasUpper){
      charSet += upper;
  }
  if(hasLower){
      //so on
  }
}
function writePassword() {
  var password = ""
  var passwordText = document.querySelector("#password");
  if(isNaN(lengthEl.value)){
      alert("please enter a number!")
  }else{
      for (var i = 0; i<lengthEl.value /*&& i<=128*/; i++){
          //number 0-1 from math.random .420eg.
          var randomVal = Math.random() * charSet.length
          var randomInt = Math.floor(randomVal)
          var newChar = charSet.charAt(randomInt);
          password = password + newChar
          passwordText.textContent.value = password;
          //password = passwordText.textContent.value;
          //return password;
        }
        document.querySelector("#password").value= password;
    }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
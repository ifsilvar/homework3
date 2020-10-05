// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthEl = document.querySelector("#length");
var uppercaseEl = document.querySelector("#uppercase");
var lowercaseEl = document.querySelector("#lowercase");
var numbersEl = document.querySelector("#numbers");
var specialEl = document.querySelector("#special");
var passwordEl = document.querySelector("#password");
// character set
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = upperChar.toLowerCase();
var numChar = "0123456789";
var specialChar = "!@#$%^&*()[]=<>/,.";

var randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    numbers: getRandomNumbers,
    special: getRandomSpecial
};

generateBtn.addEventListener("click", () => {
    if(lengthEl.value >= 8){
        var lengthVal = +lengthEl.value;
        var hasUpper = uppercaseEl.checked;
        var hasLower = lowercaseEl.checked;
        var hasNumbers = numbersEl.checked;
        var hasSpecial = specialEl.checked;

    }else{
        return alert("Please Enter a password length betwen 8-128");
    }
    passwordEl.innerText = generatePassword(hasUpper, hasLower, hasNumbers, hasSpecial, lengthVal);
});

function generatePassword(upper, lower, numbers, special, lengthVal){
    var generatedPassword = "";
    var typesCount = upper + lower + numbers + special;
    var typesArr = [{upper}, {lower}, {numbers}, {special}].filter(item => Object.values(item)[0]);    

    if(typesCount === 0){
        return "";
    }
    for(var i = 0; i < lengthVal; i = i + typesCount){
        typesArr.forEach(type => {
            var funcName = Object.keys(type)[0];

            generatedPassword = generatedPassword + randomFunc[funcName]();
        });
    }
    passwordEl.value = generatedPassword;
    console.log(generatedPassword);
}

function getRandomUpper(){
    return upperChar[Math.floor(Math.random() * upperChar.length)]
}

function getRandomLower(){
    return lowerChar[Math.floor(Math.random() * lowerChar.length)]
}

function getRandomNumbers(){
    return numChar[Math.floor(Math.random() * numChar.length)]
}

function getRandomSpecial(){
    return specialChar[Math.floor(Math.random() * specialChar.length)]
}
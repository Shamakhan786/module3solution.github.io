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
// THEN the password is either displayed in an alert or written to the page// Assignment code here

function generatePassword(){
  var length = parseInt( prompt ('how long do you want your password to be(8 to 128)'))
  if ( isNaN(length) == true || length < 8 || length > 128){
    alert('length is incorrect')
    return
  }
  var includeLoweCase = confirm ('Do you want Lowercase')
  var includeUpperCase = confirm ('Do you want Uppercase')
  var includeNumbers = confirm ('Do you want Number')
  var includeSymbols = confirm ('Do you want Symbols')
  if(includeLoweCase || includeUpperCase || includeNumbers || includeSymbols){
    var newpassword = ""
    for(var i = 0; i < length; i++){
      if(includeLoweCase){
        newpassword = newpassword + getRandomLower()
        
      }
  
      if(newpassword.length == length){
        break
      }
  
      if(includeUpperCase){
        newpassword = newpassword + getRandomUpper()
        
      }
      if(newpassword.length == length){
        break
      }
  
  
      if(includeNumbers){
        newpassword = newpassword + getRandomNumber()
        
      }
      if(newpassword.length == length){
        break
      }
  
  
      if(includeSymbols){
        newpassword = newpassword + getRandomSymbol()
        
      }
      if(newpassword.length == length){
        break
      }
  
    }
  
    alert('you new password is ' + newpassword)

  }
  else{
    alert('Choose atleast one character type')
  }
}

function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random()* 26) + 97);
}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()* 10) + 48);
}

function getRandomSymbol(){
 const symbols = "!@#<>+*^%$//-+~&(&,;'";
 return symbols[Math.floor(Math.random() * symbols.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



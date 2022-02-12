var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!","@","#","$","%","^","&","*","*","="];

function writePassword() {
  var password = "";
  var char = window.prompt("How many characters would you like the password to be (8-128)?");  
  while (char < 8 || char > 128) {// while char is less than 8 or greater than 128, keep running this loop
    char = window.prompt("Bad input. How many characters would you like the password to be (8-128)?");
  }   
  var upper = window.confirm("Would you like to include uppercase letters?");
  var lower = window.confirm("Would you like to include lowercase letters?");
  var num = window.confirm("Would you like to include numbers?");
  var special = window.confirm("Would you like to include special characters?");
while (upper === false && lower === false && num === false && special === false){
  alert("One upper, lower, number, or special character is required")
  upper = window.confirm("Would you like to include uppercase letters?");
  lower = window.confirm("Would you like to include lowercase letters?");
  num = window.confirm("Would you like to include numbers?");
  special = window.confirm("Would you like to include special characters?");
}












// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

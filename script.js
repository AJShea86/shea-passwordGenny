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
var trueCount = 0;
var selectedOp = [];
  if (upper === true) {
    var upperPos = Math.floor(Math.random() * upperCase.length); // gives a number between 0 and 26
    var upperLet = upperCase[upperPos]; //upperCase [7] = "H"
    password = password + upperLet;
    trueCount = trueCount + 1;
    selectedOp.push(upperCase);
  }
  if (lower === true){
    var lowerPos = Math.floor(Math.random() * lowerCase.length);  
    var lowerLet = lowerCase[lowerPos];                              
    password = password + lowerLet;
    trueCount = trueCount + 1;
    selectedOp.push(lowerCase);
  }
  if (num === true){
    var numPos = Math.floor(Math.random() * numbers.length); 
    var numLet = numbers[numPos]; 
    password = password + numLet;
    trueCount = trueCount + 1;
    selectedOp.push(numbers);
  }
  if (special === true){
    var specialPos = Math.floor(Math.random() * specialChar.length); 
    var specialLet = specialChar[specialPos]; 
    password = password + specialLet;
    trueCount = trueCount + 1;
    selectedOp.push(specialChar);
  } 
  for (i = 0; i < char - trueCount; i++){
    var selectedPos = Math.floor(Math.random() * selectedOp.length); //selectedPOs is a random number taken from the array called selectedOp length
    var selectedArr = selectedOp[selectedPos]; // [upperCase,lowerCase,nums,specialChar][1] = lowerCase
    var arrPos = Math.floor(Math.random() * selectedArr.length); // gives us index position for the selected array
    var arrLet = selectedArr[arrPos];                               //gives us the individual character 
    password = password + arrLet;
  }












// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

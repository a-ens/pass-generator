
// function randomLower(){
//   return String.fromCharCode(math.floor(math.random() * 26) + 97);
// }

//   function randomUpper(){
//     return String.fromCharCode(math.floor(math.random() * 26) + 65);
// }

// function randomNumber(){
//   return String.fromCharCode(math.floor(math.random() * 10) + 48);
// }

// function randomSymbol(){
//   const symbols = '~`!@#$%^&*()_-+={[}]|\:;"<,>.?/'
//   return symbols[math.floor(math.random() * symbols.length)]
// }

function generatePassword(){

  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o", "p","q","r","s",'t','u','v','w','x','y','z'];

  var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O', 'P','Q','R','S','T','U','V','W','X','Y','Z'];

  var numbers = ['1','2','3','4','5','6','7','8','9','0'];

  var symbols = ['!',',','@','#','$','%','^','&','*','(',')','_','+','>','?','<',]  ;

  var passwordOutput = [];

  var passwordLength = prompt("Choose a password length between 8 and 128");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose between 8 and 128 characters");
    return "Your secure password";
  }
  else {
  var hasLower = confirm("Would you like lowercase letters in the password?");
  var hasUpper = confirm("Would you like uppercase letters in the password?");
  var hasNumber = confirm("Would you like numbers in the password?");
  var hasSymbol = confirm("Would you like special characters in the password?");
  }

  if (hasLower === true){
    passwordOutput.push(...lowercase);
  }

  if (hasUpper === true){
  passwordOutput.push(...uppercase);
  }

  if (hasNumber === true){
  passwordOutput.push(...numbers);
  }

  if (hasSymbol === true){
  passwordOutput.push(...symbols);
  }

  var emptyString = [];

  for (let i = 0; i < passwordLength; i++) {
       emptyString.push(passwordOutput[(Math.floor(Math.random() * passwordOutput.length))]); 
  }

  console.log(emptyString)
  return emptyString.join("");

}

// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

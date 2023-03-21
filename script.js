// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var passwordLenght = "";
var choiceArr = [];

// Function to prompt user for password options
function getPasswordOptions() {
  choiceArr = [];
  passwordLenght = prompt(
    "Please choose between 8 and 128 characters for your password."
  );
  if (passwordLenght < 8 || passwordLenght > 128) {
    alert("Incorect number of characters!");
    return false;
  }
  if (
    confirm("Press OK if you want your password to have LOWERCASE characters.")
  ) {
    choiceArr = choiceArr.concat(lowerCasedCharacters);
  }
  if (
    confirm("Press OK if you want your password to have UPPERCASE characters.")
  ) {
    choiceArr = choiceArr.concat(upperCasedCharacters);
  }
  if (confirm("Press OK if you want your password to have NUMBERS.")) {
    choiceArr = choiceArr.concat(numericCharacters);
  }
  if (
    confirm("Press OK if you want your password to have SPECIAL characters.")
  ) {
    choiceArr = choiceArr.concat(specialCharacters);
  }
  return true;
}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLenght; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPasswordOptions();
  var passwordText = document.querySelector("#password");
  if (correctPrompts) {
    var password = generatePassword();
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

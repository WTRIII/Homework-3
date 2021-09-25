// GIVEN I need a new, secure password

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Assignment Code

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
//need to listen for a click of the generate button to start prompts of user choices



var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click",writePassword);

var pwdArray = [];
var lowerCase = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number = ['1','2','3','4','5','6','7','8','9','0'];
var special = ['!','@','#','$','%','^','&','*'];

var pwdLength = false;
var pwdLower = false;
var pwdUpper = false;
var pwdNumber = false;
var pwdSpecial = false;

function generatePassword(){
  var pwdLength = window.prompt('Please enter a whole number between 8 and 128 for your password length.'); //password length
  var pwdLower = window.confirm('Would you like to use lowercase letters?'); //lowerCase
  var pwdUpper = window.confirm('Would you like to use uppercase letters?'); //upperCase
  var pwdNumber = window.confirm('Would you like to use numbers?'); //numbers
  var pwdSpecial = window.confirm('Would you like to use special characters?'); //special characters

//user-proofing valid entries into prompt
  if(pwdLength < 8 || pwdLength > 128){
    window.alert('Please enter a whole number between 8 and 128.');
    return;
  } else if (!pwdLower && !pwdUpper && !pwdNumber && !pwdSpecial){
    window.alert('Please select at least one criteria for your password.');
    return;
  } else if(!pwdLength){
    return;
  };
    //logic loop for inputting user selection
    if(pwdLower){
      pwdArray = pwdArray.concat(lowerCase);
    };
    if(pwdUpper){
      pwdArray = pwdArray.concat(upperCase);
    };
    if(pwdNumber){
      pwdArray = pwdArray.concat(number);
    };
    if(pwdSpecial){
      pwdArray = pwdArray.concat(special);
    };
    console.log(pwdArray);
    console.log(pwdLength);

  var finalSel = [];
  //pwdLength = pwdLength * 1; //converts length to a number
  function characterSel(pwdLength, pwdArray){
  for(var i = 0; i < pwdLength; i++){ //from Christa's code
      finalSel.push(pwdArray[Math.floor(Math.random() * pwdArray.length)]);
    };
    }
    characterSel(pwdLength, pwdArray);
    console.log(finalSel);
    finalSel = finalSel.join('');
    return finalSel
    
}

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }








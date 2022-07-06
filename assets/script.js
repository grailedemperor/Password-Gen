// Assignment code 

//User chooses password criteria
//    User chooses from arrays of characters
//    User's selection confirmed
//        - Either confirms criteria or returns to selection screen

//User chooses password length
//    User chooses password length
//    User's choice is verified 
//        - User either confirms selections or returns to selection prompts

//User's password displayed 
//    User is receives option to generate a different password



// Characters

var specialCase = ['`','~','!','@','#','$','%','^','&','*','(',')','-','_','+','=','{','[','}',']','|','?',':',';',',','<','>',];
var lowerCase = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var upperCase = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var numeriCase = ['1','2','3','4','5','6','7','8','9','0'];

// Function to retrieve criteria 
function buildPassword(){
  var passwordLength = prompt("Enter the number of charcters in your password (8-128): ");
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt ("Please enter a number from 8 to 128.");
  }


  var spec = confirm ("Would you like special characters? (!,@,#,$,%,<,^,<,& etc...)");
  var lower = confirm ("Would you like lowercase letters?");
  var upper = confirm ("Would you like uppercase letters?");
  var numeric = confirm ("Would you like numbers?");

  var passwordChoice = { 
  length: passwordLength,
  hasSpec: spec,
  haslower: lower,
  hasupper: upper,
  hasnumeric: numeric
  }

  return passwordChoice;
}

// ****** Function to generate the password
function generatePassword() {
  var passwordChoice = buildPassword();
  console.log(passwordChoice);
  var password1 = [];

    // ****** generate charaters from each criteria
     
      if (passwordChoice.hasSpec) {    
        // for (var i=0; i < passwordChoice.length; i++) {
        //   var special = specialCase[Math.floor(Math.random() * passwordChoice.length)];
        //   password1.push(special);
        // }
        password1= password1.concat(specialCase)
      }    

      
      if (passwordChoice.haslower) {    
        password1= password1.concat(lowerCase)
      }    

     
      if (passwordChoice.hasUpper) {    
        password1= password1.concat(upperCase)
      }    

      
      if (passwordChoice.hasNumeric) {    
        password1= password1.concat(numeriCase)
      }  
        
      // generate password from chosen characters.

var finalpass=[] 
// password1 = [all char] more than 50 lenth. 0 - 50
// 10 length of password
  for (i=0; i < passwordChoice.length; i++) {
    var completePass=password1[Math.floor(Math.random() * password1.length)];
    // 0 - length of password1 -> 0, 10, 50
    finalpass.push(completePass);
  }

  return finalpass.join('');
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

let email =document.getElementById("email");
let username=document.getElementById("namee")
let nameerror=document.getElementById("nameerror");
let error=document.getElementById("error");
let phno=document.getElementById("phno")
let phoneerror=document.getElementById("phnoerror");
let password=document.getElementById("psw")
let confirm_password=document.getElementById("confpsw")
let confirm_pass_error=document.getElementById("confpwderror")





//pasword
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");




function loadfunc()
{
 username.innerText=null;
   password.innerText="";
return true;
  
}

function validate()
{
          let regexp = /^(?!\.)([[A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value.trim()))
    {
     error.innerHTML=null;
     
      return true;
    }
    else
    {
      error.innerHTML="Email ID is Invalid";
      error.style.color="red";
      return false;
    }

}



 
  
 // When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
} 


function matchPassword() {  
  var pw1 = document.getElementById("psw");  
  var pw2 = document.getElementById("confpsw");  
  if(pw1.value == pw2.value)  
  {   
    confirm_pass_error.innerHTML=null;
   // confirm_pass_error.style.color="green";
    return true;
  }
   
  else {  
    confirm_pass_error.innerHTML="Password doesn't  match";
    //alert("Password created successfully"); 
    confirm_pass_error.style.color="red";
 
    return false;
  }  
} 




function main()
{

  return(
  validate());
    

  
  //  if(email.value.trim()=="" || pwd.value.trim()=="")
  //  {
  //   alert("fields cannot be empty");
  //   return false;
  //  }
  //  else
  //  {
  //    alert("validation is proper");
  //    return true;
  // }
 
 
 
  // if(email.value=="")
  // {
  //   alert("email cannot be empty");
  //   return false;
  // }
  // else if(pwd.value=="")
  // {
  //   alert("password cannot be  null");
  //   return false;

  // }
  // else if(pwd.value.length<=5)
  // {
  //   alert("password is too short");
  //   pwd.style.border="2px solid yellow";
  //   return false;
  // }
  // else
  // {
  //   return true;
  // }
}

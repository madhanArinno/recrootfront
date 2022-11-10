export const validator = (values) => {
  let errors = {};
  Object.entries(values).map((item) => {
    switch (item[0]) {
      case "firstName":
        validateFirstName(item[1], errors);
        break;
      case "lastName":
        validateLastName(item[1], errors);
        break;
      case "email":
        validateEmail(item[1], errors);
        break;

      case "password":
        passwordValidation(values.password, errors);
        break;
      case "confirmPassword":
        validateComfiramPassword(item[1], values.password, errors);
        break;
      case "phone":
        //   validatePhoneNumber(values.phone, errors);
        break;
      case "checked":
        agreeTermas(item[1], errors);
        break;

      default:
    }
    return errors;
  });
  return errors;
};

// ******************************
function validateEmail(email, errors) {
  let result = true;

  if (!email) {
    errors.email = "Email is Required";
    result = false;
  } else {
    const re =
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    result = re.test(String(email).toLowerCase());
    if (!result) errors.email = "Invalid Email address";
  }

  return result;
}
// ******************************

function passwordValidation(pass, errors) {
  let result = true;
  var anUpperCase = /[A-Z]/;
  var aLowerCase = /[a-z]/;
  var aNumber = /[0-9]/;
  var aSpecial = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
  //   var obj = {};
  //   obj.result = true;

  if (pass.length < 7) {
    result = false;
    errors.password = "Password should be minimum 8 characters!";
    return result;
  }

  var numUpper = 0;
  var numLower = 0;
  var numNums = 0;
  var numSpecials = 0;
  for (var i = 0; i < pass.length; i++) {
    if (anUpperCase.test(pass[i])) numUpper++;
    else if (aLowerCase.test(pass[i])) numLower++;
    else if (aNumber.test(pass[i])) numNums++;
    else if (aSpecial.test(pass[i])) numSpecials++;
  }

  if (numUpper < 1 || numLower < 1 || numNums < 1 || numSpecials < 1) {
    result = false;
    errors.password =
      "Password must contain at least One uppercase character, One lowercase character ,One Special character and One number";
    return result;
  }
  return result;
}

// ******************************
function validateFirstName(firstName, errors) {
  let result = true;

  if (!firstName) {
    errors.firstName = "First Name is Required";
    result = false;
  }
  return result;
}
// ******************************

// ******************************
function validateLastName(firstName, errors) {
  let result = true;

  if (!firstName) {
    errors.firstName = "Last Name is Required";
    result = false;
  }
  return result;
}
// ******************************

// ******************************
function validateComfiramPassword(cpass, pass, errors) {
  let result = true;

  if (cpass !== pass) {
    errors.confirmPassword = "The password confirmation does not match";
    result = false;
  }
  return result;
}
// ******************************

// ******************************
function agreeTermas(term, errors) {
  let result = true;

  if (!term) {
    errors.agreeTermasValue =
      "You must accept the terms and conditions and privacy policy to register";
    result = false;
  }
  return result;
}
// ******************************

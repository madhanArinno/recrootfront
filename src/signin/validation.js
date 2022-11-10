export const validator = (values) => {
  let errors = {};
  Object.entries(values).map((item) => {
    switch (item[0]) {
      case "email":
        validateEmail(item[1], errors);
        break;
      case "password":
        passwordValidation(values.password, errors);
        break;
      case "phone":
        //   validatePhoneNumber(values.phone, errors);
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

  if (pass.length < 15) {
    result = false;
    errors.password = "Not long enough!";
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

  if (numUpper < 2 || numLower < 2 || numNums < 2 || numSpecials < 2) {
    result = false;
    errors.password = "Wrong Format!";
    return result;
  }
  return result;
}

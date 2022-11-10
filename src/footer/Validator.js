export const validator = (values) => {
  let errors = {};
  Object.entries(values).map((item) => {
    switch (item[0]) {
      case "email":
        validateEmail(item[1], errors);
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

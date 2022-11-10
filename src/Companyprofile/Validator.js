export const validator = (values) => {
  let errors = {};

  Object.entries(values).map((item) => {
    switch (item[0]) {
      case "cmpname":
        validateCompanyName(item[1], errors);
        break;
      case "cmpphone":
        validatePhoneNumber(item[1], errors);
        break;
      case "cmpemail":
        validateEmail(item[1], errors);
        break;
      case "infosector":
        validateSector(item[1], errors);
        break;
      case "infodes":
        validateDescp(item[1], errors);
        break;
      case "fb":
        validateFb(item[1], errors);
        break;
      case "linkin":
        validateLinkin(item[1], errors);
        break;
      case "twitter":
        validateTwitter(item[1], errors);
        break;
      case "address":
        validateAddress(item[1], errors);
        break;
      case "country":
        validateCountry(item[1], errors);
        break;
      case "city":
        validateLCity(item[1], errors);
        break;
      case "state":
        validateState(item[1], errors);
        break;

      default:
    }
    return errors;
  });
  return errors;
};

// ******************************
function validateEmail(cmpemail, errors) {
  let result = true;

  if (!cmpemail) {
    errors.cmpemail = "Email is Required";
    result = false;
  } else {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    result = re.test(String(cmpemail).toLowerCase());
    if (!result) errors.cmpemail = "Invalid Email address";
  }

  return result;
}
// ******************************

// ******************************
function validateCompanyName(cmpname, errors) {
  let result = true;
  if (!cmpname || cmpname === undefined || cmpname === " ") {
    errors.cmpname = "Company Name is Required";
    result = false;
  }
  return result;
}
// ******************************

// ******************************
function validatePhoneNumber(cmpphone, errors) {
  let result = true;

  if (!cmpphone) {
    errors.cmpphone = "Phone Number is Required";
    result = false;
  }
  return result;
}
function validateSector(infosector, errors) {
  let result = true;

  if (!infosector) {
    errors.infosector = "Sector is Required";
    result = false;
  }
  return result;
}

function validateDescp(infodes, errors) {
  let result = true;

  if (!infodes) {
    errors.infodes = "Description is Required";
    result = false;
  }
  return result;
}
function validateFb(fb, errors) {
  let result = true;

  if (!fb) {
    errors.fb = "FaceBook Link is Required";
    result = false;
  }
  return result;
}
function validateTwitter(twitter, errors) {
  let result = true;

  if (!twitter) {
    errors.twitter = "Twitter Link is Required";
    result = false;
  }
  return result;
}
function validateLinkin(linkin, errors) {
  let result = true;

  if (!linkin) {
    errors.linkin = "LinkedIn Link is Required";
    result = false;
  }
  return result;
}
function validateAddress(address, errors) {
  let result = true;

  if (!address) {
    errors.address = "Address is Required";
    result = false;
  }
  return result;
}
function validateLCity(city, errors) {
  let result = true;

  if (!city) {
    errors.city = "City is Required";
    result = false;
  }
  return result;
}
function validateState(state, errors) {
  let result = true;

  if (!state) {
    errors.state = "State is Required";
    result = false;
  }
  return result;
}
function validateCountry(country, errors) {
  let result = true;

  if (!country) {
    errors.country = "Country is Required";
    result = false;
  }
  return result;
}
// ******************************

// ******************************

// ******************************

// ******************************

export const validator = (values) => {
  let errors = {};
  Object.entries(values).map((item) => {
    switch (item[0]) {
      // case "file":
      //   validateFilesField(item[1], errors);
      //   break;
      case "firstName":
        validatefirstNameField(item[1], errors);
        break;
      case "lastName":
        validatelastNameField(item[1], errors);
        break;
      // case "jobField":
      //   validateFilesField(item[1], errors);
      //   break;
      // case "phoneNumber":
      //   validatephoneNumnberField(item[1], errors);
      //   break;
      // case "phoneNumber":
      //   validatephoneNumnberField(item[1], errors);
      //   break;
      default:
    }
  return errors;
  });
  return errors;
};


// ******************************

// ******************************
function validatefirstNameField(firstName, errors) {
  let result = true;

  if (!firstName) {
    errors.firstName = "First Name is Required";
    result = false;
  }
  return result;
}

function validatelastNameField(lastName, errors) {
  let result = true;

  if (!lastName) {
    errors.file = "Last Name is Required";
    result = false;
  }
  return result;
}

// function validatephoneNumnberField(jobField, errors) {
//   let result = true;

//   if (!jobField) {
//     errors.file = "Phone Number is Required";
//     result = false;
//   }
//   return result;
// }

// function validateCarrearLevelField(jobField, errors) {
//   let result = true;

//   if (!jobField) {
//     errors.file = "Phone Number is Required";
//     result = false;
//   }
//   return result;
// }
// ******************************

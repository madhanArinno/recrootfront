export const validator = (values) => {
  let errors = {};

  Object.entries(values).map((item) => {
    switch (item[0]) {
      case "jobRole":
        validateRole(item[1], errors);
        break;
      case "applicationDeadline":
        validateDead(item[1], errors);
        break;
      case "jobType":
        validateTypee(item[1], errors);
        break;
      case "qualification":
        validateQual(item[1], errors);
        break;
      case "experience":
        validateExperi(item[1], errors);
        break;
      case "careerlevel":
        validateCarlevel(item[1], errors);
        break;
      case "address":
        validateAddress(item[1], errors);
        break;
      case "salaryType":
        validateSalryTypee(item[1], errors);
        break;
      case "salaryCrrancy":
        validateScurrn(item[1], errors);
        break;
      case "maxSalary":
        validateMax(item[1], errors);
        break;
      case "minSalary":
        validateMin(item[1], errors);
        break;
      default:
    }
    return errors;
  });
  return errors;
};

// ******************************

// ******************************
function validateRole(jobRole, errors) {
  let result = true;

  if (!jobRole) {
    errors.jobRole = "Job Title is Required";
    result = false;
  }
  return result;
}
function validateDead(applicationDeadline, errors) {
  let result = true;

  if (!applicationDeadline) {
    errors.applicationDeadline = "Deadline is Required";
    result = false;
  }
  return result;
}

function validateTypee(jobType, errors) {
  let result = true;

  if (!jobType) {
    errors.jobType = "Job Type is Required";
    result = false;
  }
  return result;
}
function validateMax(maxSalary, errors) {
  let result = true;

  if (!maxSalary) {
    errors.maxSalary = "Maximum Salary is Required";
    result = false;
  }
  return result;
}
function validateMin(minSalary, errors) {
  let result = true;

  if (!minSalary) {
    errors.minSalary = "Minimum Salary is Required";
    result = false;
  }
  return result;
}
function validateScurrn(salaryCrrancy, errors) {
  let result = true;

  if (!salaryCrrancy) {
    errors.salaryCrrancy = "Salary Currency is Required";
    result = false;
  }
  return result;
}
function validateSalryTypee(salaryType, errors) {
  let result = true;

  if (!salaryType) {
    errors.salaryType = "Salary Type is Required";
    result = false;
  }
  return result;
}
function validateExperi(experience, errors) {
  let result = true;

  if (!experience) {
    errors.experience = "Experience is Required";
    result = false;
  }
  return result;
}
function validateQual(qualification, errors) {
  let result = true;

  if (!qualification) {
    errors.qualification = "Qualification is Required";
    result = false;
  }
  return result;
}
function validateCarlevel(careerlevel, errors) {
  let result = true;

  if (!careerlevel) {
    errors.careerlevel = "Career Level is Required";
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

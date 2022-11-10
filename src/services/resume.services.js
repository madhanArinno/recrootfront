import axios from "axios";
import http from "../http-common";
const API_URL = "http://localhost:3000/api/";

const updateResume = (uplodedFiles, userId) => {
  const formData = new FormData();

  formData.append("userId", userId);
  const user = JSON.parse(localStorage.getItem("User"));
  uplodedFiles.forEach((file) => {
    formData.append("uplodedFiles", file);
  });
  return axios
    .post(API_URL + "updateResumeDetails", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": `${user.token}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.warn(err));
};

const createResumeDetails = (value, userId) => {
  return http.put(`createResumeDetails/${userId}`, value);
};

const finalResumeForm = (value, userId) => {
  const user = JSON.parse(localStorage.getItem("User"));

  return axios
    .post(API_URL + `finalCreateResume/${userId}`, value, {
      headers: {
        "Content-type": "application/json",
        "x-access-token": `${user.token}`,
      },
    })
    .then((res) => {})
    .catch((err) => console.warn(err));
};

const coverLetter = (value, userId) => {
  const user = JSON.parse(localStorage.getItem("User"));
  const formData = new FormData();
  const coverLettters = value.coverFileLocation;
  formData.append("userId", userId);
  coverLettters.forEach((file) => {
    formData.append("coverLettters", file);
  });
  return axios
    .post(API_URL + "updateCoverLetterFiles", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": `${user.token}`,
      },
    })
    .then((res) => {})
    .catch((err) => console.warn(err));
};

const certificates = (value, userId) => {
  const user = JSON.parse(localStorage.getItem("User"));
  const formData = new FormData();
  const certificates = value.inputCertificate;

  formData.append("userId", userId);
  certificates.forEach((file) => {
    formData.append("certificates", file.certificate);
    formData.append("title", file.title);
    formData.append("organization", file.organization);
  });

  return axios
    .post(API_URL + "updateCertificatesFiles", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": `${user.token}`,
      },
    })
    .then((res) => {})
    .catch((err) => console.warn(err));
};

const certificatesAdd = (value) => {
  const user = JSON.parse(localStorage.getItem("User"));
  const userId = user.User._id;
  const formData = new FormData();
  formData.append("userId", userId);
  formData.append("certificates", value.certificate);
  formData.append("title", value.title);
  formData.append("organization", value.organization);

  return axios
    .post(API_URL + `addCertificate`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": `${user.token}`,
      },
    })
    .then((res) => {})
    .catch((err) => console.warn(err));
};
const certificatesEdit = (value) => {
  const user = JSON.parse(localStorage.getItem("User"));

  const formData = new FormData();
  formData.append("Id", value.id);
  formData.append("certificates", value.certificate);
  formData.append("title", value.title);
  formData.append("organization", value.organization);
  formData.append("name", value.certificateName);
  formData.append("path", value.certificatepath);

  return axios
    .put(API_URL + `editCertficates`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": `${user.token}`,
      },
    })
    .then((res) => {})
    .catch((err) => console.warn(err));
};
const resumeService = {
  updateResume,
  createResumeDetails,
  finalResumeForm,
  coverLetter,
  certificates,
  certificatesAdd,
  certificatesEdit,
};
export default resumeService;

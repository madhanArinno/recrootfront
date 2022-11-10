import axios from "axios";
import http from "../http-common";

class PersonalDataService {
  getAll() {
    const user = JSON.parse(localStorage.getItem("User"));
    return http.get(`/getExperience/${user.User._id}`);
  }
  getOneExp(id) {
    return http.get(`getOne/${id}`);
  }
  getOneSkill(id) {
    return http.get(`getOneSkill/${id}`);
  }
  getOneEduca(id) {
    return http.get(`getOneEdu/${id}`);
  }
  getOneProject(id) {
    return http.get(`getOneProject/${id}`);
  }
  getOneTrain(id) {
    return http.get(`getOneTraining/${id}`);
  }
  getOneCert(id) {
    return http.get(`getOneCertificate/${id}`);
  }
  getOneSocial(id) {
    return http.get(`getOneSocial/${id}`);
  }
  getOneResume(id) {
    return http.get(`getOneResume/${id}`);
  }
  getOneCover(id) {
    return http.get(`getOneCover/${id}`);
  }
  addResume(formData) {
    const user = JSON.parse(localStorage.getItem("User"));
    return http.post(`addResume/${user.User._id}`, formData);
  }
  addCover(formData) {
    const user = JSON.parse(localStorage.getItem("User"));
    return http.post(`addCover/${user.User._id}`, formData);
  }
  addCertificate(formData) {
    const user = JSON.parse(localStorage.getItem("User"));
    return http.post(`addCertificate/${user.User._id}`, formData);
  }
  addExperience(value) {
    const user = JSON.parse(localStorage.getItem("User"));
    return http.post(`postExp/${user.User._id}`, value);
  }
  addSkill(value) {
    const user = JSON.parse(localStorage.getItem("User"));
    return http.post(`postSkill/${user.User._id}`, value);
  }
  addEducation(value) {
    const user = JSON.parse(localStorage.getItem("User"));
    return http.post(`postEdu/${user.User._id}`, value);
  }
  addProject(value) {
    const user = JSON.parse(localStorage.getItem("User"));
    return http.post(`postProject/${user.User._id}`, value);
  }
  addTrain(value) {
    const user = JSON.parse(localStorage.getItem("User"));
    return http.post(`postTraining/${user.User._id}`, value);
  }
  addSocial(value) {
    const user = JSON.parse(localStorage.getItem("User"));
    return http.post(`postSocial/${user.User._id}`, value);
  }
  addPhoto(formData) {
    const user = JSON.parse(localStorage.getItem("User"));
    return http.post(`addProfpic/${user.User._id}`, formData);
  }
  applyJob(value) {
    return http.post("/applyJob", value);
  }
  delResume(id) {
    return http.delete(`deleteResume/${id}`);
  }
  delCover(id) {
    return http.delete(`deleteCover/${id}`);
  }
  delCertificate(id) {
    return http.delete(`deleteCertificate/${id}`);
  }
  delExper(id) {
    return http.delete(`deleteExp/${id}`);
  }
  delSkil(id) {
    return http.delete(`deleteSkill/${id}`);
  }
  delEduca(id) {
    return http.delete(`deleteEdu/${id}`);
  }
  delProject(id) {
    return http.delete(`deleteProject/${id}`);
  }
  delTrain(id) {
    return http.delete(`deleteTraining/${id}`);
  }
  delSocial(id) {
    return http.delete(`deleteSocial/${id}`);
  }
  editExper(value, id) {
    return http.put(`editExp/${id}`, value);
  }
  editSkill(value, id) {
    return http.put(`editSkill/${id}`, value);
  }
  editEducation(value, id) {
    return http.put(`editEdu/${id}`, value);
  }
  editProject(value, id) {
    return http.put(`editProject/${id}`, value);
  }
  editTrain(value, id) {
    return http.put(`editTraining/${id}`, value);
  }
  editSocial(value, id) {
    return http.put(`editSocial/${id}`, value);
  }
  editPersonal(value) {
    const user = JSON.parse(localStorage.getItem("User"));
    return http.put(`editPersonal/${user.User._id}`, value);
  }
  editPersonalName(value) {
    const user = JSON.parse(localStorage.getItem("User"));
    return http.put(`editPersonalName/${user.User._id}`, value);
  }
  editVerify(value) {
    return http.put(`verifyEmail`, value);
  }
  resendCode(value) {
    return axios.put(`http://localhost:3000/resendCode`, value);
  }
}

export default new PersonalDataService();

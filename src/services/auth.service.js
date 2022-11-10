import axios from "axios";
import http from "../http-common";
const API_URL = " http://localhost:3000/";
const register = (
  email,
  password,
  firstName,
  lastName,
  sector,
  organization,
  recrootUserType,
  companyId
) => {
  return axios.post(API_URL + "register", {
    email,
    password,
    firstName,
    lastName,
    sector,
    organization,
    recrootUserType,
    companyId,
  });
};
const reRegister = (
  email,
  password,
  firstName,
  lastName,
  recrootUserType,
  id
) => {
  return axios.post(API_URL + "reRegister", {
    email,
    password,
    firstName,
    lastName,
    recrootUserType,
    id,
  });
};
const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      http();
      if (response.data.token) {
        localStorage.setItem("User", JSON.stringify(response.data));
      }
      return response;
    });
};
const logout = () => {
  localStorage.removeItem("User");
};
const authService = {
  register,
  reRegister,
  login,
  logout,
};
export default authService;

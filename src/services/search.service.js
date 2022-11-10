import axios from "axios";
const API_URL = "http://localhost:3000/api/";

const getLatestJObs = () => {
  return axios.get(API_URL + "getLatestJobs").then((response) => {
    return response;
  });
};

const searchJobs = (keyword, location, type) => {
  return axios
    .get(
      API_URL + `search?keyword=${keyword}&location=${location}&type=${type}`
    )
    .then((response) => {
      return response;
    });
};

const searchService = {
  getLatestJObs,
  searchJobs,
};
export default searchService;

import http from "../http-common";

class jobsService {
  addJobss(value, companyId) {
    return http.post(`addJob/${companyId}`, value);
  }
  editJobss(value, id, companyId) {
    return http.post(`editJob/${id}/${companyId}`, value);
  }
}

export default new jobsService();

import http from "../http-common";

class InterviewData {
  getAll(companyId) {
    return http.get(`/getInterview/${companyId}`);
  }
}

export default new InterviewData();

import http from "../http-common";

class applyJobService {
  getDetails(companyId) {
    return http.get(`getApplyCanditates/${companyId}`);
  }
  getResume(id) {
    return http.get(`getResumeSin/${id}`);
  }
  getCover(id) {
    return http.get(`getOneCover/${id}`);
  }
  getJobs(companyId) {
    return http.get(`getJobsComp/${companyId}`);
  }
  getAll(id) {
    return http.get(`/getExperience/${id}`);
  }
}

export default new applyJobService();

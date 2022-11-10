import http from "../http-common";

class CompanyData {
  editExper(value, compId) {
    return http.post(`updateCompanyDetails/${compId}`, value);
  }
  getCompany() {
    const user = JSON.parse(localStorage.getItem("User"));
    return http.get(`getCompanyDetails/${user.User.companyId}`);
  }
  compLogo(value, compId) {
    const formData = new FormData();
    const compLogos = value.companylogo;
    formData.append("logo", compLogos);
    return http.post(`updateCompanyLogo/${compId}`, formData);
  }
}

export default new CompanyData();

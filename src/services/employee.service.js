import http from "../http-common";

class EmployeeDataService {
  getAll() {
    return http.get("/tutorials");
  }

  get(employeeId) {
    return http.get(`/tutorials/${employeeId}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(employeeId, data) {
    return http.put(`/tutorials/${employeeId}`, data);
  }

  delete(employeeId) {
    return http.delete(`/tutorials/${employeeId}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }
}

export default new EmployeeDataService();

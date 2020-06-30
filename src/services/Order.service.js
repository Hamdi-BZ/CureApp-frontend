import http from "../http-common";
class OrderDataService {
  getAll() {
    return http.get("/orders");
  }
  // Get Order Data from DB
  get(id) {
    return http.get(`/orders/${id}`);
  }
  // Create a new Order
  create(data) {
    return http.post("/orders", data);
  }
  delete(id) {
    return http.delete(`/orders/${id}`);
  }
}
export default new OrderDataService();

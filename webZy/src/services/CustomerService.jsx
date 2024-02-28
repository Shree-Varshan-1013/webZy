import axios from "axios";

const CUSTOMER_API_BASE_URL = "http://localhost:2018/api/customer/";

class CustomerService {

  getPlans(operatorName, token) {
    return axios.get(CUSTOMER_API_BASE_URL + "plan/" + operatorName, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  
  getAddon(operatorName, token) {
    return axios.get(CUSTOMER_API_BASE_URL + "getAddons/" + operatorName, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  //Public Route
  loginUserWithEmailAndPassword(user) {
    return axios.post(CUSTOMER_API_BASE_URL + "login", user);
  }

  getUsers() {
    return axios.get("/get");
  }

  // deleteUser(id, user) {
  //   return axios.delete(USER_API_BASE_URL + "del/" + id, user);
  // }

  // updateUser(id, user) {
  //   return axios.put(USER_API_BASE_URL + "edit/" + id, user);
  // }
  addFeedback(token, details) {
    return axios.post("http://localhost:2018/api/v1/user/feedback/add", details, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
  }
  addSample() {
    return axios.get("http://localhost:2020/feedback/get");
  }
}

export default new CustomerService();

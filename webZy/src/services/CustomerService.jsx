import axios from "axios";

const CUSTOMER_API_BASE_URL = "http://localhost:2018/api/v1/customer/";

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

  makeRecharge(username, token, data){
    return axios.post(CUSTOMER_API_BASE_URL + "make-recharge/");
  }

}

export default new CustomerService();

import axios from "axios";

const ADMIN_API_BASE_URL = "http://localhost:2018/api/v1/admin";

class AdminService {
  getUsersInfos(token) {
    return axios.get(
      ADMIN_API_BASE_URL + "/get-all-users",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
  registerNewAdmin(token, data) {
    return axios.post(
        ADMIN_API_BASE_URL + "/register-new-admin",
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
}
  
  getParticularProviderById(token, username) {
    return axios.get(
      ADMIN_API_BASE_URL + "/search/" + username ,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
  updateProviderByEmail(token, email, data) {
    return axios.put(ADMIN_API_BASE_URL + "/update/" + email, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

}

export default new AdminService();

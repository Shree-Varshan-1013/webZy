import axios from "axios";

const PROVIDER_BASE_URL = "http://localhost:2018/api/v1/provider";

class ProviderService {
  getProviderInfos(token, category, location) {
    return axios.get(
      PROVIDER_BASE_URL + "/get-specific/" + category + "/" + location,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
  
  getParticularProviderById(token, id) {
    return axios.get(
      PROVIDER_BASE_URL + "/get/" + id ,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  getParticularProviderByEmail(token, email) {
    return axios.get(PROVIDER_BASE_URL + "/get/" + email, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  updateProviderByEmail(token, email, data) {
    return axios.put(PROVIDER_BASE_URL + "/update/" + email, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getUserBookings(token, email) {
    return axios.get(PROVIDER_BASE_URL + "/get/provider-booking/" + email, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new ProviderService();

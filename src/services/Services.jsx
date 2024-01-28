import axios from "axios";

const SERVICE_BASE_URL = "http://localhost:2018/api/v1/service/";

class Services {
    getServicesInfosWithLocation(token, category, location) {
        return axios.get(
            SERVICE_BASE_URL + "get/category/" + category + "/" + location,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    }

        getServicesInfosById(token, id) {
        return axios.get(
            SERVICE_BASE_URL + "get/"+  id,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    }
}

export default new Services();

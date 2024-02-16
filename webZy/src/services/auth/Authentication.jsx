import axios from 'axios';

const AUTH_API_BASE_URL = "http://127.0.0.1:2018";
class Authentication {
    login(email, password) {
        return axios.post(AUTH_API_BASE_URL + "/authenticate", {
            userName: email,
            userPassword: password,
        });
    }

    register(data) {
        return axios.post(AUTH_API_BASE_URL + "/registerNewUser", data);
    }
}

export default new Authentication();
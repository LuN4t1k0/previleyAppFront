import jwtAxios from "axios";
import { API_DEV, API_PROD } from "config/environment";


const jwtAuthAxios = jwtAxios.create({
    baseURL: "http://localhost:3000/api/v1",
    headers: {
        'Content-Type': 'application/json'
    }
});

jwtAuthAxios.interceptors.response.use(
    res => res,
    err => {
        if(err.response && err.response.data.type === "token-invalid") {
            //todo logout the user
        }
        return Promise.reject(err);
    }
);

export const setAuthToken = (token) => {
    jwtAuthAxios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    sessionStorage.setItem('token', token);
    
};

export const getAuthToken = () => {
    return sessionStorage.getItem("token");
};

//todo: define interceptors and other configuration like baseURL, headers etc. here
export default jwtAuthAxios;
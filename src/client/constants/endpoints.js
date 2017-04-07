import axios from 'axios';
import config from '../../../configs/main';
const apiUrl = `http://localhost:${config.PORT}/api`;
export const axiosInstance = axios.create({
  baseURL: apiUrl,
  validateStatus: (status)=> {
    return status < 500; // Reject only if the status code is greater than or equal to 500
  }
});
axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const login = '/login';

export const checkUsername = '/check_username';

export const signup = '/signup';

export const logout = '/logout';
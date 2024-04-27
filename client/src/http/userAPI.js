import axios from "axios";
import jwt_decode from 'jwt-decode';

const baseURL = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
    baseURL
});

const authInterceptor = (config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};

axiosInstance.interceptors.request.use(authInterceptor);

export const registration = async (email, password) => {
    const { data } = await axiosInstance.post('api/user/registration', { email, password, role: 'ADMIN' });
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
};

export const login = async (email, password) => {
    const { data } = await axiosInstance.post('api/user/login', { email, password });
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
};

export const check = async () => {
    const { data } = await axiosInstance.get('api/user/auth');
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
};

import { TokenService } from '@/service/token.service';
import axios, { type CreateAxiosDefaults } from 'axios';

const options: CreateAxiosDefaults = {
    baseURL: 'http://localhost:8080/api/v1',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
};

const axiosDefault = axios.create(options);

const axiosWithToken = axios.create(options);

axiosWithToken.interceptors.request.use(config => {
    const token = TokenService.getAccessToken();

    if (config?.headers && token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export { axiosDefault, axiosWithToken };

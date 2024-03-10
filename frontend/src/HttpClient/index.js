import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000/api'
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    if (!config.url.includes('employee/sign-in')) {
        // config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
    }
    return config;
}, function (error) {
    console.log(error);
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    console.log(error);
    return Promise.reject(error);
});

export default instance;
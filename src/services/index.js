import axios from 'axios';
import { baseURL } from '../utils/helpers';

// axios.interceptors.request.use(function (config) {
//     const token = localStorage.getItem('jwt');
//     config.headers.Authorization =  `Bearer ${token}`;
    
//     return config;
//   });

const getFunc = (path) => {
    return new Promise((resolve, reject) => {
        axios.get(`${baseURL}${path}`)
        .then(res => {
            return resolve({ ...res });
        })
        .catch(({ response }) => {
            return reject({ response });
        });
    });
};

const delFunc = path => {
    return new Promise((resolve, reject) => {
        axios.delete(baseURL + path)
        .then(res => {
            return resolve({ ...res });
        })
        .catch(({ response }) => {
            return reject({ response });
        });
    });
};

const postFunc = (path, payload) => {
    return new Promise((resolve, reject) => {
        axios.post(baseURL + path, payload)
        .then(res => {
            return resolve({ ...res });
        })
        .catch(({ response }) => {
            return reject({ response });
        });
    });
};

const uploadPostFunc = (path, payload) => {
    return new Promise((resolve, reject) => {
        axios.post(`${baseURL}${path}`, payload, {
            "Content-Type" : "application/x-www-form-urlencoded"
        })
        .then(res => {
            return resolve({ ...res });
        })
        .catch(({ response }) => {
            return reject({ response });
        });
    });
};

const singlePostFunc = (path, payload) => {
    return new Promise((resolve, reject) => {
        axios.post(baseURL + path, payload)
        .then(res => {
            return resolve({ ...res });
        })
        .catch(({ response }) => {
            return reject({ response });
        });
    });
};

const putFunc = (path, payload) => {
    return new Promise((resolve, reject) => {
        axios.put(baseURL + path, payload)
        .then(res => {
            return resolve({ ...res });
        })
        .catch(({ response }) => {
            return reject({ response });
        });
    });
};

export { getFunc, delFunc, postFunc, putFunc, singlePostFunc, uploadPostFunc };
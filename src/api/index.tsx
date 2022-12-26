import axios from 'axios';

export const instance = axios.create({
    baseURL : 'http://124.55.62.184:3060/',
    timeout : 10000,
});

axios.defaults.withCredentials = true;
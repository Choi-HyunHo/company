import axios from 'axios';

export const instance = axios.create({
    baseURL : 'http://106.247.124.178:3060/',
    timeout : 10000,
});
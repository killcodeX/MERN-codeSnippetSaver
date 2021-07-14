import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000/'})

API.interceptors.request.use((req) =>{
    if(localStorage.getItem('backUser')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`
    }

    return req;
})
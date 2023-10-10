import axios from "axios";


const baseUrl = 'http://127.0.0.1:8000/api/';

const login = (username, password) => {
    return axios.post(`${baseUrl}token/`, {
        username,
        password
    })
    .then(res => {
        if(res.data.access){
            localStorage.setItem('user', JSON.stringify(res.data));
        }
        return res.data;
    });
};

const logout = () => {
    localStorage.removeItem('user');
}


const getCurrentUser = () => {
    if(!localStorage.getItem('user')){
        console.log('user = null');
        return null;
    }

    return JSON.parse(localStorage.getItem('user'));
}

export default {
    login,
    logout,
    getCurrentUser,
};
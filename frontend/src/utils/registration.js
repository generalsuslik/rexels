import axios from "axios";


const baseUrl = 'http://127.0.0.1:8000/api/';

const login = async (username, password) => {
    try {
        const res = await axios.post(`${baseUrl}token/`, {
            username,
            password
        });
        if (res.data.access) {
            let user = {"username": username, ...res.data}
            localStorage.setItem('user', JSON.stringify(user));
        }
        
        return res.data;
    } catch (error) {
        console.error(error);
    }
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

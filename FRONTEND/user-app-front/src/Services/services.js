import axios from 'axios';
const baseUrl = 'http://localhost:3005/api/users';

export const getAllUsers = async () => {
    const res = await axios.get(baseUrl);
    return res.data
}

export const addUserService = async (user) => {
    const res = await axios.post(baseUrl, user);
    return res.data;
}

export const deleteUserService = async (id) => {
    const res = await axios.delete(`${baseUrl}/${id}`);
    return res.data
}
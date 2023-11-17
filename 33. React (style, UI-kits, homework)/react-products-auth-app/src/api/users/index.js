import axios from 'axios';
import { BASE_URL } from '../base_url.js';

//get All Users
export async function getAllUsers() {
    let result;
    await axios.get(`${BASE_URL}/users`)
    .then((res)=>{
        result = res.data;
    });
    return result;
}
//get User By ID
export async function getUserByID(id) {
    let result;
    await axios.get(`${BASE_URL}/users/${id}`)
    .then((res)=>{
        result = res.data;
    });
    return result;
}
//put User by ID
export async function putUserByID(id, payload) {
    let result;
    await axios.put(`${BASE_URL}/users/${id}`,payload)
    .then((res)=>{
        result = res.data;
    });
    return result;
}
//post User
export async function postUser(payload) {
    let result;
    await axios.post(`${BASE_URL}/users`,payload)
    .then((res)=>{
        result = res.data;
    });
    return result;
}
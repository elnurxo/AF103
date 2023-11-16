import { BASE_URL } from "./base_url";
import axios from 'axios';

//Get All Categories
export async function getAllCategories() {
    let globalData;
    await axios.get(`${BASE_URL}/categories`)
    .then((res)=>{
        globalData = res.data;
    })
    return globalData;
}

//Get Category by ID
export async function getCategoryByID(id) {
    let globalData;
    await axios.get(`${BASE_URL}/categories/${id}`)
    .then((res)=>{
        globalData = res.data;
    })
    return globalData;
}

//Post Category
export async function postCategory(payload) {
    let result;
    await axios.post(`${BASE_URL}/categories`,payload)
    .then((res)=>{
        result = res.data;
    })
    return result;
}

//Put Category by ID
export async function putCategoryByID(id, payload) {
    let result;
    await axios.put(`${BASE_URL}/categories/${id}`,payload)
    .then((res)=>{
        result = res;
    })
    return result;
}

//Patch Category by ID
export async function patchCategoryByID(id,payload) {
    let result;
    await axios.patch(`${BASE_URL}/categories/${id}`,payload)
    .then((res)=>{
        result = res;
    })
    return result;
}

//Delete Category by ID
export async function deleteCategoryByID(id) {
    let result;
    await axios.delete(`${BASE_URL}/categories/${id}`)
    .then((res)=>{
        result = res;
    })
    return result;
}
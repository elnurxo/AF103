import axios from 'axios';
import { BASE_URL } from '../base_url.js';

//get all products
export async function getAllProducts() {
    let result;
    await axios.get(`${BASE_URL}/products`)
    .then((res)=>{
        result = res.data;
    })

    return result;
}
//get product by id
export async function getProductByID(id) {
    let result;
    await axios.get(`${BASE_URL}/products/${id}`)
    .then((res)=>{
        result = res.data;
    })

    return result;
}
//delete product by id
export async function deleteProductByID(id) {
    let result;
    await axios.delete(`${BASE_URL}/products/${id}`)
    .then((res)=>{
        result = res.data;
    })

    return result;
}
//put product by id
export async function putProductByID(id,payload) {
    let result;
    await axios.put(`${BASE_URL}/products/${id}`,payload)
    .then((res)=>{
        result = res.data;
    })

    return result;
}
//patch product by id
export async function patchProductByID(id,payload) {
    let result;
    await axios.patch(`${BASE_URL}/products/${id}`,payload)
    .then((res)=>{
        result = res.data;
    })

    return result;
}
//post product
export async function postProduct(payload) {
    let result;
    await axios.post(`${BASE_URL}/products`,payload)
    .then((res)=>{
        result = res.data;
    })

    return result;
}


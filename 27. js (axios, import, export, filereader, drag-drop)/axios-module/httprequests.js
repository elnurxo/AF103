let API_BASE_URL = 'https://northwind.vercel.app/api';

//categories get all
export async function getAllCategories(){
    let globalData; //undefined
    await axios.get(API_BASE_URL+'/categories')
    .then((result)=>{
        globalData = result.data;
    });

    return globalData;
}
//categories get by ID
export async function getCategoryByID(id){
    let globalData; //undefined
    await axios.get(API_BASE_URL+`/categories/${id}`)
    .then((result)=>{
        globalData = result.data;
    });
    
    return globalData;
}

//categories delete
export async function deleteCategoryByID(id){
    await axios.delete(API_BASE_URL+`/categories/${id}`);
}

//categories post
export async function postCategory(payload){
    let newCategory;
    newCategory =  await axios.post(API_BASE_URL+`/categories`,payload);

    return newCategory;
}

//categories put
export async function putCategoryByID(id,payload){
    axios.put(API_BASE_URL+`/categories/${id}`,payload);
}

//categories patch
export async function patchCategoryByID(id,payload){
    axios.patch(API_BASE_URL+`/categories/${id}`,payload);
}
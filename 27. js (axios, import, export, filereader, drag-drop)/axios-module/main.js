import { getAllCategories, postCategory, deleteCategoryByID } from "./httprequests.js";

let getBtn = document.querySelector('#get-data');
let list = document.querySelector('#data-list');

getBtn.addEventListener('click',async()=>{
    const categories =  await getAllCategories();
    categories.forEach(category => {
        list.innerHTML += `<li><a href="detail.html?id=${category.id}">${category.name}</a> <button class="delete" id="${category.id}">delete</button></li>`
    });

    //delete
    let deleteBtns = document.querySelectorAll('.delete');
    deleteBtns.forEach((btn)=>{
        btn.addEventListener('click',function(){
            deleteCategoryByID(this.id);
            this.closest('li').remove();
        })
    })
});


//post
const postBtn = document.querySelector('#post-data');
postBtn.addEventListener('click',async()=>{
    const newCategory  = await postCategory({name: 'code post 4',description:'test'});
    list.innerHTML += `<li><a href="detail.html?id${newCategory.data.id}">${newCategory.data.name}</a></li>`
})

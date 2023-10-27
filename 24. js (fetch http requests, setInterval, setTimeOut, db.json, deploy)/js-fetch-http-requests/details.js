
//get by id
let base_url = 'https://northwind.vercel.app/api';
let dataDivision = document.querySelector('.data');
let id = new URLSearchParams(location.search).get('id');
console.log(id);

fetch(base_url+`/categories/${id}`)
.then((response)=>response.json())
.then((data)=>{
    dataDivision.innerHTML = `
        <h2>${data.name}</h2>
        <h3>${data.description}</h3>
        <span>ID: ${data.id}</span>
    `
})
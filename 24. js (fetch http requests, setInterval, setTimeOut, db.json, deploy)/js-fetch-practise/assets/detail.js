let id = new URLSearchParams(location.search).get('id');
let dataName = document.querySelector('.data-name');

document.addEventListener('DOMContentLoaded',()=>{
    fetch(`https://northwind.vercel.app/api/suppliers/${id}`)
    .then(res=>res.json())
    .then(data=>{
        dataName.textContent = data.companyName;
    })
})
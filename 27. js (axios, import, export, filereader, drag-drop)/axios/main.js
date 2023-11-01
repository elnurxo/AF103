let editBtn = document.querySelector('#edit');
let postBtn = document.querySelector('#post');
let deleteBtn = document.querySelector('#delete');
//axios


// get all | get by ID
axios.get('https://northwind.vercel.app/api/categories')
.then((result)=>{
    console.log(result.data);
});

//delete
deleteBtn.addEventListener('click',()=>{
    axios.delete('https://northwind.vercel.app/api/categories/1')
    .then((result)=>{
        console.log(result);
    })
});

//post
postBtn.addEventListener('click',()=>{
    axios.post('https://northwind.vercel.app/api/categories',{
        name: 'code academy',
        description: 'description test'
    })
});

//edit
editBtn.addEventListener('click',()=>{
    axios.patch('https://northwind.vercel.app/api/categories/9',{
        description: 'updated desc 12!'
    })
})
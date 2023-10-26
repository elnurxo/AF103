const result = fetch('https://northwind.vercel.app/api/suppliers')
let list = document.querySelector('#list');

//promise -then (chain)
// result.then((response)=>{
//     return response.json()
// }).then((data)=>{
//     data.forEach(item => {
//         list.innerHTML += `<li>${item.companyName}</li>`
//     });
// })

//async
// async function getData(){
//     try {
//         let response = await fetch('https://northwind.vercel.app/api/suppliers');
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log('salam');
//     }
// }
// console.log(getData());;
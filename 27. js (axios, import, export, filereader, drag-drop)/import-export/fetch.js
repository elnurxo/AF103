import  {BASE_URL as url} from "./url.js";


fetch(url+'/todos')
.then((res)=>res.json())
.then((data)=>{
    console.log('data: ', data);
}).catch((err)=>{
    console.error(err);
}).finally(()=>{
    console.log('finally');
});

displaySum(4,6);


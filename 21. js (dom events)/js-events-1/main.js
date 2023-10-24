let btn = document.querySelector('button');
let box = document.querySelector('.box');
let text = document.querySelector('h4');
let search = document.querySelector('#search');
let color = document.querySelector('#color');

search.addEventListener('keyup',(e)=>{
    if (e.target.value.trim()!='') {
        btn.removeAttribute('disabled'); 
        btn.style.backgroundColor = 'blue';
    }
    else{
        btn.style.backgroundColor = 'red';
        btn.setAttribute('disabled',true); 
    }
})

btn.addEventListener('click',(e)=>{
    if (!search.value.trim()) {
        window.alert('input is empty');
    }
    else{
        box.style.backgroundColor = color.value;        text.textContent = search.value;
        search.value = '';
        box.classList.toggle('active');
    }
})
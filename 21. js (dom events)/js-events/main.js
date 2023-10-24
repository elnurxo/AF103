// let btn = document.querySelector('button');
// let searchInput = document.querySelector('#search');

//event handler
// btn.onclick = function(){
//     document.body.classList.toggle('red');
// }

// searchInput.onkeyup = function(){
//     console.log(searchInput.value);
// }

// event listener
// searchInput.addEventListener('keyup',(e)=>{
//     if (e.keyCode === 13) {
//         console.log('enter is clicked');
//         return;
//     }
// });

// let outerBox = document.querySelector('.outer-box');
// let box = document.querySelector('.box');
// let innerBox = document.querySelector('.inner-box');

// outerBox.addEventListener('click',(e)=>{
//     e.stopPropagation();
//     console.log(`outer box is clicked`);
// });
// box.addEventListener('click',(e)=>{
//     e.stopPropagation();
//     console.log(`box is clicked`);
// })
// innerBox.addEventListener('click',(e)=>{
//     e.stopPropagation();
//     console.log(`inner box is clicked`);
// })

// document.addEventListener('DOMContentLoaded',()=>{
//     console.log('DOM Contect loaded!');
// })

// let btn = document.querySelector('button');
// let box = document.querySelector('.box');

// document.addEventListener('scroll',(e)=>{
//     if (document.body.scrollTop > 200) {
//         document.body.style.backgroundColor = 'skyblue';
//     }
// })

// btn.addEventListener('contextmenu',(event)=>{
//     event.preventDefault();
//     console.log('hey');
// })

// box.addEventListener('mouseleave',(e)=>{
//     console.log('hey');
// })

let fName = document.querySelector('#name');
let surname = document.querySelector('#surname')
let isMarried = document.querySelector('#isMarried')
let list = document.querySelector('#list');
let form = document.querySelector('#form');

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  if (fName.value.trim()=='' || surname.value.trim()=='') {
    window.alert('inputs are empty!')
  } 
  else{
    let listItem = document.createElement('li');
    listItem.textContent = `${fName.value} ${surname.value} is ${isMarried.checked ? "" : "not"} married`;
    list.append(listItem);
    fName.value = '';
    surname.value = '';
    isMarried.checked = false;
  }
})

fName.addEventListener('keyup',(e)=>{
    console.log(e.keyCode);
})


// fName.addEventListener('keyup',(e)=>{
//     console.log(e.target.value);
// })
// surname.addEventListener('keydown',(e)=>{
//     console.log(e.target.value);
// })
// isMarried.addEventListener('click',(e)=>{
//     console.log(e.target.checked);
// })
//selecting elements -> HTML Collection
// let headingOne = document.getElementById("title");
// let headingTwo = document.getElementsByClassName("heading");
// let headingThree = document.getElementsByTagName("li");

// query selector, query selector all -> NodeList
// let query1 = document.querySelector("ul li");
// let queryAll = document.querySelectorAll("ul li");
// let arr = Array.from(queryAll)
// NodeList vs HTMLCollection

// console.log(document.querySelectorAll("button"));
// const body = document.body;
// console.log(body);

//Traversing Elements (parent, children, sibling)
// const listItem = document.querySelector(".list-item");
// console.log(listItem.parentElement.lastElementChild);

//Manipulating elements
// let list = document.createElement("ul");
// let listItem1 = document.createElement("li");
// listItem1.textContent = "list item a";
// let listItem2 = document.createElement("li");
// listItem2.textContent = "list item b";
// let listItem3 = document.createElement("li");
// listItem3.textContent = "list item c";
// let button = document.createElement("button");
// button.innerText = "click me!";
// listItem1.setAttribute("class","list-item-1")
// listItem2.setAttribute("id","list-item-2")
// listItem3.setAttribute("class","list-item-3")
// button.setAttribute("type","submit")
// button.setAttribute("disabled","")
// button.removeAttribute("disabled");
// listItem2.removeAttribute("id");
// console.log(listItem1.getAttribute("id"));
// console.log(listItem1.hasAttribute("class"));

// list.append(listItem1, listItem2, listItem3);
// document.body.append(list, button);

//     document.body.innerHTML += `
//     <ul>
//         <li>list item 1</li>
//         <li>list item b</li>
//         <li>list item c</li>
//     </ul>
//     <button>click me!</button>
// `

//style
// let heading = document.querySelector(".box h1");
// heading.style.border = '1px solid red';
// let btn = document.querySelector('.box button');
// btn.style.color = 'red';
// btn.style.border = 'none';
// btn.style.backgroundColor = 'blue';
// let links = document.querySelectorAll('ul li a');

//classList - add, remove, replace, get, toggle
// let btn = document.querySelector("button");
// let fruits = ["banana", "apple", "kiwi"];
// let list = document.querySelector("ul");

// btn.addEventListener("click", () => {
//   if (fruits.length > 0) {
//     let lastFruit = fruits[fruits.length - 1];
//     let listItem = document.createElement("li");
//     listItem.textContent = lastFruit;
//     list.append(listItem);
//     fruits.pop();
//   } else {
//     alert("no fruits in array!");
//   }
// });

let box = document.createElement('div');
// box.style.width = '100px';
// box.style.height = '100px';
// box.style.backgroundColor = 'red';
box.classList.add('box');
let heading = document.createElement('h3');
heading.textContent = 'hello world';
heading.setAttribute('id','title');
document.body.append(box,heading);

document.body.innerHTML += `
    <div class='container'>
    
    </div>
`
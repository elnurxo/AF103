// console.log(JSON.parse(localStorage.getItem("user")));
// if (JSON.parse(localStorage.getItem("user")) == null) {
//   alert("user is not defined!");
//   window.location.href = "./index.html";
// } else {
//   console.log("fail!");
// }

let backHistory = document.querySelector("#back");
let forwardHistory = document.querySelector("#forward");

backHistory.addEventListener('click',()=>{
    console.log(window.history);
})
forwardHistory.addEventListener('click',()=>{
    window.history.forward();
})

let inp = document.querySelector("#add-todo-inp");
let form = document.querySelector("#add-todo-form");
let clearAllBtn = document.querySelector(".clear-all-btn");
let list = document.querySelector(".to-do-list");
let errorMsg = document.querySelector(".error-msg");
let countToDo = document.querySelector(".count");
let addBtn = document.querySelector(".add-todo-btn");
let counter = 0;

//validation
inp.addEventListener("keyup", (e) => {
  if (e.target.value.trim() === "") {
    errorMsg.classList.replace("d-none", "d-block");
    addBtn.classList.replace("btn-purple", "btn-danger");
    addBtn.setAttribute("disabled", true);
  } else {
    errorMsg.classList.replace("d-block", "d-none");
    addBtn.classList.replace("btn-danger", "btn-purple");
    addBtn.removeAttribute("disabled");
  }
});

//form submit - add todo
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inp.value.trim() === "") {
    alert("input is empty!");
  } else {
    list.innerHTML += `
    <li class="d-flex justify-content-between mb-2">
        <span>${inp.value}</span>
        <div class="btns-wrapper">
            <button class="btn btn-outline-primary mark-as-done"><i class="fa-solid fa-check"></i></button>
            <button class="btn btn-outline-danger delete"><i class="fa-solid fa-trash"></i></button>
        </div>
    </li>
    `;
    counter++;
    countToDo.textContent = counter;
    countToDo.classList.remove("text-danger");
    inp.value = "";

    //delete buttons
    let deleteToDoButtons = document.querySelectorAll(".delete");
    deleteToDoButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        if (window.confirm("are you sure to delete?")) {
          this.closest("li").remove();
          if (!this.parentElement.previousElementSibling.style.textDecoration) {
            counter--;
          }
          if (counter == 0) {
            countToDo.textContent = "no";
            countToDo.classList.add("text-danger");
          } else {
            countToDo.textContent = counter;
          }
        }
      });
    });
    //mark as done buttons
    let markAsDoneButtons = document.querySelectorAll(".mark-as-done");
    markAsDoneButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        this.parentElement.previousElementSibling.style.textDecoration =
          "line-through";
        counter--;
        if (counter == 0) {
          countToDo.classList.add("text-danger");
          countToDo.textContent = "no";
        } else {
          countToDo.textContent = counter;
        }
      });
    });
  }
});

//clear all
clearAllBtn.addEventListener("click", (e) => {
  if (list.children.length === 0) {
    window.alert("you have no todo!");
  } else {
    if (window.confirm("are you sure to delete all?")) {
      list.innerHTML = "";
      counter = 0;
      countToDo.textContent = "no";
      countToDo.classList.add("text-danger");
    }
  }
});

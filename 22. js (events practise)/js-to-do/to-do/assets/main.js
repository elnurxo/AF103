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
            <button class="btn btn-outline-warning edit"><i class="fa-solid fa-edit"></i></button>
        </div>
    </li>
    `;
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'To Do added!',
      showConfirmButton: false,
      timer: 500
    })
    
    counter++;
    countToDo.textContent = counter;
    countToDo.classList.remove("text-danger");
    inp.value = "";

    //delete buttons
    let deleteToDoButtons = document.querySelectorAll(".delete");
    deleteToDoButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        Swal.fire({
          title: 'Are you sure to delete?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
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
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
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

    //edit buttons
    let editButtons = document.querySelectorAll('.edit');
    editButtons.forEach((editBtn)=>{
      editBtn.addEventListener('click',function(){
        Swal.fire({
          title: 'Edit to do',
          input: 'text',
          inputValue: this.parentElement.previousElementSibling.textContent,
          inputAttributes: {
            autocapitalize: 'off',
          },
          showCancelButton: true,
          confirmButtonText: 'Update',
        }).then((result) => {
          if (result.isConfirmed) {
            if (result.value.trim()==='') {
              Swal.fire({
                title: `input cannot be empty!`,
                icon: 'warning'
              })
            }
            else{
              this.parentElement.previousElementSibling.textContent = result.value;
              Swal.fire({
                title: `Updated successfully!`,
              })
            }
           
          }
        })
      })
    })
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

let inp = document.querySelector("#add-input");
let errorSpan = document.querySelector(".error-span");
let form = document.querySelector("#form");
let list = document.querySelector(".list-group");
let emptyToDo = document.querySelector(".empty-to-do");
let addBtn = document.querySelector(".add-btn");

//key up - error
inp.addEventListener("keyup", (e) => {
  if (e.target.value.length < 5) {
    errorSpan.classList.replace("d-none", "d-block");
    addBtn.classList.replace("btn-warning", "btn-danger");
    addBtn.setAttribute("disabled", true);
  } else {
    errorSpan.classList.replace("d-block", "d-none");
    addBtn.classList.replace("btn-danger", "btn-warning");
    addBtn.removeAttribute("disabled");
  }
});

//form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  emptyToDo.style.display = "none";
  list.innerHTML += `
    <li class="list-group-item d-flex justify-content-between">
    <span>${inp.value}</span>
    <div class="buttons-wrapper">
        <button class="btn btn-outline-primary mark-done-btn"><i class="fa-solid fa-check"></i></button>
        <button class="btn btn-outline-danger delete-btn"><i class="fa-solid fa-trash"></i></button>
    </div>
    </li>
    `;
  inp.value = "";

  //delete to do
  let deleteBtns = document.querySelectorAll(".delete-btn");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", function() {
      if (window.confirm("are you sure to delete?")) {
        this.closest("li").remove();
        if (list.children.length===1) {
            list.innerHTML = ` <li class="list-group-item empty-to-do">
            <p class=" text-center fw-bold text-danger">Nothing To Do!</p>
        </li>`
        }
      }
    });
  });

  //mark as done
  let markDoneBtns = document.querySelectorAll('.mark-done-btn');
  markDoneBtns.forEach((btn)=>{
    btn.addEventListener('click',function(){
        this.parentElement.previousElementSibling.style.textDecoration = 'line-through';
    })
  })
});


//add cards task
let fullNameInp = document.querySelector('#fullname');
let imageInp = document.querySelector('#image');
let ageInp = document.querySelector('#age');
let addForm = document.querySelector('#add-human');
let cardsWrapper = document.querySelector('.cards-wrapper');
let myModal = document.querySelector('.my-modal');

addForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  cardsWrapper.innerHTML += `
  <div class="col-3">
  <div class="card">
      <img class="card-img-top" style="height: 200px;object-fit: cover;" src="${imageInp.value}" alt="${fullNameInp.value}">
      <div class="card-body">
        <h5 class="card-title">${fullNameInp.value}</h5>
        <h6>${ageInp.value}</h6>
        <button class="btn btn-primary delete-card">Delete</button>
        <button class="btn btn-primary open-card-modal">Info Modal</button>
      </div>
    </div>
</div>
  `;

  //input reset
  resetInputs();
  //delete button get
  let deleteCardBtns = document.querySelectorAll('.delete-card');
  let openModalBtns = document.querySelectorAll('.open-card-modal');

  deleteCardBtns.forEach((btn)=>{
    btn.addEventListener('click',function(){
      if (window.confirm('are you sure to delete?')) {
        this.closest('.col-3').remove()
      }
    })
  })

  //open modal
  openModalBtns.forEach((btn)=>{
    btn.addEventListener('click',function(){
      myModal.innerHTML = `
      <h3>Full Name: ${this.previousElementSibling.previousElementSibling.previousElementSibling.textContent}</h3>
      <h4>AGE: ${this.previousElementSibling.previousElementSibling.textContent}</h4>
      <img src="${this.parentElement.previousElementSibling.src}" alt="">
      <button class="close-modal">close modal</button>
      `;
      myModal.style.top = '50%';
      let closeModal = document.querySelector('.close-modal');
      closeModal.addEventListener('click',()=>{
        myModal.style.top = '-50%';
      })
    })
  })
 
})

function resetInputs() {
  imageInp.value = '';
  ageInp.value = '';
  fullNameInp.value = '';
}
let list = document.getElementById("list");
let loader = document.querySelector("#loader");
let form = document.querySelector("#add-category");
let nameInp = document.querySelector("#name");
let descInp = document.querySelector("#desc");
let closeModal = document.querySelector('.close-modal');
let editForm = document.querySelector("#edit-data");
let editName = document.querySelector("#edit-name");
let editDesc = document.querySelector("#edit-desc");

//promise - GET, GET by id, DELETE, POST, PUT
let base_url = "https://northwind.vercel.app/api";
fetch(`${base_url}/categories`, {
  method: "GET",
})
  .then((response) => response.json())
  .then((categories) => {
    //data get
    loader.style.display = "none";
    categories.forEach((category) => {
      list.innerHTML += `
        <li>
        <a href="detail.html?id=${category.id}">${category.name}</a>
        <button id="${category.id}" class="delete">delete</button>
        <button data-name="${category.name}" data-desc="${category.description}" class="edit-btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">edit</button>
        </li>
        `;
    });
    deleteData();
    let editBtns = document.querySelectorAll(".edit-btn");
    editBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        let name = this.getAttribute("data-name");
        let desc = this.getAttribute("data-desc");
        let id = this.previousElementSibling.id;
        editName.value = name;
        editDesc.value = desc;

        editForm.addEventListener("submit", (e) => {
          e.preventDefault();
          console.log('test');
          //edit
          fetch(base_url + `/categories/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: editName.value,
              description: editDesc.value,
            }),
          });
        });
      });
    });
  });

function deleteData() {
  let deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (window.confirm("are you sure to delete?")) {
        //delete from UI
        this.parentElement.remove();

        //delete from API
        fetch(`${base_url}/categories/${this.id}`, {
          method: "DELETE",
        });
      }
    });
  });
}

//POST
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //add TO API
  fetch(base_url + "/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      //id - backend
      name: nameInp.value,
      description: descInp.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      list.innerHTML += `
        <li>
            <a href="detail.html?id=${data.id}">${data.name}</a>
            <button id="${data.id}" class="delete">delete</button>
        </li>
    `;
      deleteData();
    });
  nameInp.value = "";
  descInp.value = "";
});

//async await
// async function getData(base_url) {
//     const response = await fetch(base_url+'/categories');
//     const data = await response.json();
//     console.log(data);
// }

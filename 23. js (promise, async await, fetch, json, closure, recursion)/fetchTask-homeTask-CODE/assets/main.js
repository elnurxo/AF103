let tableBody = document.querySelector("#t-body");
let failedToFetch = document.querySelector(".failed-to-fetch");
let getDataBtn = document.querySelector(".get-data");
let resetBtn = document.querySelector(".reset");
let sortByUsernameBtn = document.querySelector(".sort-by-username");
let sortByID = document.querySelector(".sort-by-id");
let loader = document.querySelector(".loader-wrapper");

getDataBtn.addEventListener("click", () => {
  tableBody.innerHTML = "";
  loader.classList.replace("d-none", "d-flex");
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      users.forEach((data, idx) => {
        loader.classList.replace("d-flex", "d-none");
        tableBody.innerHTML += `
            <tr>
            <th scope="row">${idx + 1}</th>
            <td>${data.name}</td>  
            <td>${data.username}</td>
            <td>${data.email}</td>
            <td>${data.address?.city}</td>
            <td><a href="https://${data.website}" target="_blank">${
              data.website
            }</a></td>
            <td><button id="${
              data.id
            }" class="btn btn-outline-success info-modal">Learn More</button></td>
            </tr>
            `;
        let infoBtns = document.querySelectorAll(".info-modal");
        infoBtns.forEach((btn) => {
          btn.addEventListener("click", function () {
            console.log("hey: ", this);
            fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
              .then((res) => res.json())
              .then((data) => {
                Swal.fire({
                  title: `Name: ${data.name}`,
                  text: `Address: ${data.address?.street}, ${data.address?.suite}, ${data.address?.city}`,
                  footer: `Phone: ${data.phone}`,
                });
              });
          });
        });
      });
    });
});

sortByUsernameBtn.addEventListener("click", () => {
  tableBody.innerHTML = "";
  loader.classList.replace("d-none", "d-flex");
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      users
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach((data, idx) => {
          loader.classList.replace("d-flex", "d-none");
          tableBody.innerHTML += `
            <tr>
            <th scope="row">${data.id}</th>
            <td>${data.name}</td>  
            <td>${data.username}</td>
            <td>${data.email}</td>
            <td>${data.address?.city}</td>
            <td><a href="https://${data.website}" target="_blank">${data.website}</a></td>
            <td><button id="${data.id}" class="btn btn-outline-success info-modal">Learn More</button></td>
            </tr>
            `;
          let infoBtns = document.querySelectorAll(".info-modal");
          infoBtns.forEach((btn) => {
            btn.addEventListener("click", function () {
              console.log("hey: ", this);
              fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
                .then((res) => res.json())
                .then((data) => {
                  Swal.fire({
                    title: `Name: ${data.name}`,
                    text: `Address: ${data.address?.street}, ${data.address?.suite}, ${data.address?.city}`,
                    footer: `Phone: ${data.phone}`,
                  });
                });
            });
          });
        });
    });
});

sortByID.addEventListener("click", () => {
  tableBody.innerHTML = "";
  loader.classList.replace("d-none", "d-flex");
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      let sortedUsers = users.sort((a, b) => b.id - a.id);
      sortedUsers.forEach((data, idx) => {
        loader.classList.replace("d-flex", "d-none");
        tableBody.innerHTML += `
              <tr>
              <th scope="row">${data.id}</th>
              <td>${data.name}</td>  
              <td>${data.username}</td>
              <td>${data.email}</td>
              <td>${data.address?.city}</td>
              <td><a href="https://${data.website}" target="_blank">${data.website}</a></td>
              <td><button id="${data.id}" class="btn btn-outline-success info-modal">Learn More</button></td>
              </tr>
              `;
        let infoBtns = document.querySelectorAll(".info-modal");
        infoBtns.forEach((btn) => {
          btn.addEventListener("click", function () {
            console.log("hey: ", this);
            fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
              .then((res) => res.json())
              .then((data) => {
                Swal.fire({
                  title: `Name: ${data.name}`,
                  text: `Address: ${data.address?.street}, ${data.address?.suite}, ${data.address?.city}`,
                  footer: `Phone: ${data.phone}`,
                });
              });
          });
        });
      });
    });
});

resetBtn.addEventListener("click", () => {
  Swal.fire({
    title: "Are you sure to clear the table?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      tableBody.innerHTML = "";
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
});

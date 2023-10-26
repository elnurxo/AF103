let cardsWrapper = document.querySelector(".card-wrapper");
let loading = document.querySelector(".spinner-wrapper");
let API_BASE_URL = "https://northwind.vercel.app/api";
let sortBtn = document.querySelector(".sort-data");
let searchInput = document.querySelector("input");

fetch(`${API_BASE_URL}/categories`)
  .then((resp) => resp.json())
  .then((categories) => {
    //data get
    categories.forEach((category) => {
      cardsWrapper.innerHTML += `
        <li id="${category.id}" style="cursor:pointer;" class="list-group-item items text-decoration-underline">${category.name}</li>
    `;
    });
    let items = document.querySelectorAll('.items');
    items.forEach((item)=>{
      item.addEventListener('click',function(){
        fetch(`${API_BASE_URL}/categories/${this.id}`)
        .then((res)=> res.json())
        .then((item)=> {
            Swal.fire({
                title: `ID: ${item.id}`,
                text: `name: ${item.name}`,
                footer: `description: ${item.description}`
              })
        })
         
      })
    })
  })
  .catch((err) => {
    cardsWrapper.innerHTML = `<li class="list-group-item text-danger text-center">Failed to Fetch Data</li>`;
  })
  .finally(() => {
    loading.classList.replace("d-flex", "d-none");
  });



//search
searchInput.addEventListener("keyup", (e) => {
  console.log("test");
  if (e.target.value.length >= 2) {
    fetch(`${API_BASE_URL}/categories`)
      .then((res) => res.json())
      .then((data) => {
        const foundArr = data.filter((item) =>
          item.name
            .toLowerCase()
            .trim()
            .includes(searchInput.value.trim().toLowerCase())
        );
        cardsWrapper.innerHTML = "";
        foundArr.forEach((item) => {
          cardsWrapper.innerHTML += `<li class="list-group-item">${item.name}</li>`;
        });
      });
  }
  if (e.target.value.trim() === "") {
    fetch(`${API_BASE_URL}/categories`)
      .then((resp) => resp.json())
      .then((categories) => {
        //data get
        categories.forEach((category) => {
          cardsWrapper.innerHTML += `
        <li class="list-group-item">${category.name}</li>
    `;
        });
      })
      .catch((err) => {
        cardsWrapper.innerHTML = `<li class="list-group-item text-danger text-center">Failed to Fetch Data</li>`;
      })
      .finally(() => {
        loading.classList.replace("d-flex", "d-none");
      });
  }
});

//sort
sortBtn.addEventListener("click", () => {
  cardsWrapper.innerHTML = "";
  fetch(`${API_BASE_URL}/categories`)
    .then((resp) => resp.json())
    .then((categories) => {
      //data get
      console.log(categories);
      const sortedCats = categories.sort((x, y) =>
        x.name.localeCompare(y.name)
      );
      console.log("sorted: ", categories);
      sortedCats.forEach((category) => {
        cardsWrapper.innerHTML += `
        <li class="list-group-item">${category.name}</li>
    `;
      });
    })
    .catch((err) => {
      cardsWrapper.innerHTML = `<li class="list-group-item text-danger text-center">Failed to Fetch Data</li>`;
    })
    .finally(() => {
      loading.classList.replace("d-flex", "d-none");
    });
});

// document.addEventListener('DOMContentLoaded',async()=>{
// })

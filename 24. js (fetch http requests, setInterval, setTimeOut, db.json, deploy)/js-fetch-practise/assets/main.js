let loader = document.querySelector(".loader-wrapper");
let dataWrapper = document.querySelector(".cards-wrapper");

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://northwind.vercel.app/api/suppliers")
    .then((response) => response.json())
    .then((suppliers) => {
      loader.classList.add("d-none");
      suppliers.forEach((supplier) => {
        dataWrapper.innerHTML += `
            <div class="col-3 mb-3">
                <div class="card" style="min-height:200px;">
                    <div class="card-body">
                        <h5 class="card-title">${supplier.companyName}</h5>
                        <p class="card-text">${supplier.contactTitle}</p>
                        <p class="card-text">${supplier.address?.street}, ${supplier.address?.city}</p>
                        <button id="${supplier.id}" class="btn btn-primary open-my-modal">Learn More</button>
                        <button data-id="${supplier.id}" class="btn btn-danger delete-supplier">Delete</button>
                        <a class="card-text" href="detail.html?id=${supplier.id}">Go To Detail Page</a>
                    </div>
                </div>
            </div>
            `;
        let modals = document.querySelectorAll(".open-my-modal");
        modals.forEach((modal) => {
          modal.addEventListener("click", function () {
            fetch(`https://northwind.vercel.app/api/suppliers/${this.id}`)
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                Swal.fire({
                  title: data.companyName,
                  text: data.address?.phone,
                });
              });
          });
        });

        let deleteBtns = document.querySelectorAll(".delete-supplier");
        deleteBtns.forEach((btn) => {
          btn.addEventListener("click", function () {
            let id = this.getAttribute("data-id");
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                fetch(`https://northwind.vercel.app/api/suppliers/${id}`, {
                  method: "DELETE",
                });
                this.closest('.col-3').remove();
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
              }
            });
          });
        });
      });
    });
});

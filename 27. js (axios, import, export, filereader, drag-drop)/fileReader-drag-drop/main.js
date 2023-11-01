let uploadInp = document.querySelector("#upload");
let uploadForm = document.querySelector("form");
let cardsWrapper = document.querySelector(".cards-wrapper");
let dropZone = document.querySelector(".drop-zone");

uploadInp.addEventListener("change", (event) => {
  const files = event.target.files;
  Array.from(files).forEach((file) => {
    const name = file.name;
    const type = file.type;
    const size = Math.round(file.size / 1024);

    let fileBitCode = new FileReader();
    fileBitCode.readAsDataURL(file);

    if (type.includes("image/")) {
      if (size > 1024) {
        alert("file size is bigger than 1mb");
      } else {
        fileBitCode.addEventListener("loadend", (e) => {
          let src = e.target.result;

          cardsWrapper.innerHTML += `
                <div class="col-3 mb-3">
                <div class="my-card">
                    <img src="${src}" alt="${name}">
                    <p id="size">${size}KB</p>
                    <button class="btn btn-danger" id="remove">x</button>
                </div>
            </div>
                `;

          uploadInp.value = "";

          let removeBtns = document.querySelectorAll("#remove");
          removeBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
              if (window.confirm("are you sure to delete?")) {
                e.target.closest(".col-3").remove();
              }
            });
          });
        });
      }
    } else {
      alert("wrong format!");
    }

    uploadInp.value = "";
  });
});

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});
dropZone.addEventListener("drop", (e) => {
  e.preventDefault();

  if (e.dataTransfer.items) {
    [...e.dataTransfer.items].forEach((item) => {
      if (item.kind === "file") {
        const file = item.getAsFile();
        const name = file.name;
        const size = Math.round(file.size / 1024);
        const type = file.type;

        let fileBitCode = new FileReader();
        fileBitCode.readAsDataURL(file);

        if (type.includes("image/")) {
          if (size > 1024) {
            alert("file size is bigger than 1mb");
          } else {
            fileBitCode.addEventListener("loadend", (e) => {
              let src = e.target.result;

              cardsWrapper.innerHTML += `
                            <div class="col-3 mb-3">
                            <div class="my-card">
                                <img src="${src}" alt="${name}">
                                <p id="size">${size}KB</p>
                                <button class="btn btn-danger" id="remove">x</button>
                            </div>
                        </div>
                            `;

              uploadInp.value = "";

              let removeBtns = document.querySelectorAll("#remove");
              removeBtns.forEach((btn) => {
                btn.addEventListener("click", (e) => {
                  if (window.confirm("are you sure to delete?")) {
                    e.target.closest(".col-3").remove();
                  }
                });
              });
            });
          }
        } else {
          alert("wrong format!");
        }
      }
    });
  }
});

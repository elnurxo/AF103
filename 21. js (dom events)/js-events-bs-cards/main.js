// let removeButtons = document.querySelectorAll('.btn-danger');

// removeButtons.forEach((removeBtn)=>{
//     removeBtn.addEventListener('click',(e)=>{
//        if (window.confirm('are you sure to delete?')) {
//             e.target.closest('.col-3').remove();
//        }
//     })
// })

let form = document.querySelector("#add-student-form");
let tbody = document.querySelector("tbody");
let fname = document.querySelector("#fname");
let surname = document.querySelector("#surname");
let age = document.querySelector("#age");
let isGraduated = document.querySelector("#isGraduated");
let counter = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  counter++;
  tbody.innerHTML += `
    <tr>
    <th class="${!isGraduated.checked ? "" : "bg-danger text-light"}">${counter}</th>
    <td class="${!isGraduated.checked ? "" : "bg-danger text-light"}"> ${fname.value}</td>
    <td class="${!isGraduated.checked ? "" : "bg-danger text-light"}">${surname.value}</td>
    <td class="${!isGraduated.checked ? "" : "bg-danger text-light"}">${age.value}</td>
    <td class="${!isGraduated.checked ? "" : "bg-danger text-light"}">${isGraduated.checked}</td>
    <td><button class="btn remove btn-danger">delete</button></td>
  </tr>
    `;
    resetInputs();

    let removeButtons = document.querySelectorAll('.remove');
    console.log(removeButtons);
    removeButtons.forEach((remove)=>{
        remove.addEventListener('click',(e)=>{
            e.target.closest('tr').remove();
        })
    })
});

function resetInputs() {
    fname.value = '';
    surname.value = '';
    age.value = '';
    isGraduated.checked = false;
}

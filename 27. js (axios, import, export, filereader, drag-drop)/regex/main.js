let passwordInp = document.querySelector("#password");
let emailErrorMsg = document.querySelector(".error-message");
// let emailREGEX = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
let passwordREGEX =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;

passwordInp.addEventListener("keyup", (e) => {
  if (!e.target.value.match(passwordREGEX)) {
    emailErrorMsg.classList.replace("d-none", "d-block");
    emailErrorMsg.textContent = "password validation error [aA1$ - 7 chars]";
  } else {
    emailErrorMsg.classList.replace("d-block", "d-none");
    emailErrorMsg.textContent = "";
  }
});

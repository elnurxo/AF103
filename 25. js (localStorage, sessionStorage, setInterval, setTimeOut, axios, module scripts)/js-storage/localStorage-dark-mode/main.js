let modeBtn = document.querySelector(".mode");

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("dark-mode")) {
     let mode = JSON.parse(localStorage.getItem('dark-mode'));
     if (mode) {
        modeBtn.textContent = 'Light Mode';
        modeBtn.classList.replace('btn-dark','btn-light');
        document.body.classList.add('bg-dark');
     }
     else{
        modeBtn.textContent = 'Dark Mode';
        modeBtn.classList.replace('btn-light','btn-dark');
        document.body.classList.remove('bg-dark');
     }
  }
});

modeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("dark-mode") == null) {
    localStorage.setItem("dark-mode", true);
    document.body.classList.add("bg-dark");
    e.target.classList.replace("btn-dark", "btn-light");
    e.target.textContent = "Light Mode";
  } else {
    setMode();
  }
});

function setMode() {
  if (JSON.parse(localStorage.getItem("dark-mode")) == true) {
    localStorage.setItem("dark-mode", false);
    document.body.classList.remove("bg-dark");
    modeBtn.classList.replace("btn-light", "btn-dark");
    modeBtn.textContent = "Dark Mode";
  } else {
    localStorage.setItem("dark-mode", true);
    document.body.classList.add("bg-dark");
    modeBtn.classList.replace("btn-dark", "btn-light");
    modeBtn.textContent = "Light Mode";
  }
}

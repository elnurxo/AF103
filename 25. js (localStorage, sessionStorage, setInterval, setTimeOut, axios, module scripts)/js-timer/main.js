let bakuTime = document.querySelector("#baku-time");
let moscowTime = document.querySelector("#moscow-time");
let newYorkTime = document.querySelector("#new-york-time");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    let currentDate = new Date();
    bakuTime.textContent = moment(currentDate).format(
      "MMMM Do YYYY, h:mm:ss a"
    );
    moscowTime.textContent = moment(currentDate)
      .subtract(1, "hours")
      .format("MMMM Do YYYY, h:mm:ss a");
    newYorkTime.textContent = moment(currentDate)
      .subtract(8, "hours")
      .format("MMMM Do YYYY, h:mm:ss a");
  }, 1000);
});

//alarm
let alarmForm = document.querySelector("#set-alarm");
let alarmInp = document.querySelector("#date-time-inp");

alarmForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let currentDate = new Date();
  let alarmDateValue = alarmInp.value; //string
  let alarmDate = new Date(alarmDateValue);
  let totalMilliSeconds = alarmDate.getTime() - currentDate.getTime();
  let alarmWrapper = document.querySelector('.alarm-wrapper'); 
  let Totalseconds = Math.round(totalMilliSeconds / 1000);
  let Totalminutes = Math.round(Totalseconds / 60);
  let Totalhours = Math.round(Totalminutes / 60);
  let days = Math.round(Totalhours / 24);

  let seconds = Totalseconds % 60;
  let minutes = Totalminutes % 60;
  let hours = Totalhours % 24;

 setInterval(() => {
    seconds -= 1;
 }, 1000);

  setTimeout(() => {
    alarmWrapper.textContent = 'ALARM!';
  }, totalMilliSeconds);
});

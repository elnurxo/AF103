const date = new Date();

const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
// let months = ['jan','feb','mar'];
// console.log(currentYear);
// console.log(months[currentMonth]);
// const currentDay = date.getDate();
// const weekDay = date.getDay();
// console.log(weekDay);

//1970 1 jan 
let formattedDate = moment(date).subtract(1, 'days').calendar();  
console.log(formattedDate);
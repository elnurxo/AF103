// let employeeCount = Number(prompt("enter employee count: "));
// while (
//   isNaN(employeeCount) ||
//   employeeCount == "" ||
//   employeeCount > 10 ||
//   employeeCount < 0
// ) {
//   alert("wrong format!");
//   employeeCount = Number(prompt("enter employee count: "));
// }
// for (let i = 0; i < employeeCount; i++) {
//   let fullname = prompt(`enter name of employee #${i + 1}`);
//   let age = Number(prompt(`enter age of employee #${i + 1}`));
//   while (age < 18) {
//     age = Number(prompt(`try again: `));
//   }
//   let isMarried = confirm(`is ${fullname} Married?`);
//   let isMale = confirm(`is ${fullname} Male?`);
//   let salary = Number(prompt(`enter salary of employee #${i + 1}`));
//   let department = prompt(`enter department of employee #${i + 1}`);

//   let employee = createEmp(
//     fullname,
//     age,
//     isMarried,
//     isMale,
//     salary,
//     department
//   );
//   employees.push(employee);
// }

// //create Employee
// function createEmp(fullname, age, isMarried, isMale, salary, department) {
//   let employee = {
//     fullname,
//     age,
//     isMale,
//     isMarried,
//     salary,
//     department,
//   };
//   return employee;
// }

let employees = [
  {
    fullName: "Zamir Guliyev",
    age: 20,
    isMarred: false,
    isMale: true,
    salary: 2000,
    department: "IT",
  },
  {
    fullName: "Ismayil Ismayilli",
    age: 64,
    isMarred: true,
    isMale: true,
    salary: 2300,
    department: "Finance",
  },
  {
    fullName: "Ehmed Ismayilov",
    age: 64,
    isMarred: true,
    isMale: true,
    salary: 3100,
    department: "Finance",
  },
  {
    fullName: "Zohre Eliyeva",
    age: 72,
    isMarred: false,
    isMale: false,
    salary: 3000,
    department: "Marketing",
  },
]; //empty array

//21.1 - Average Age

function AvgAge(arr) {
  let totalAge = 0;
  for (let i = 0; i < arr.length; i++) {
    totalAge += arr[i].age;
  }
  return Math.floor(totalAge / arr.length);
}

//21.2 - salary increase +500
function IncreaseSalary(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].salary < 1000) {
      arr[i].salary += 500;
    }
  }
  return arr;
}

//21.3 - age greater than 60
function retireOlds(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].age > 60) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

//21.4 - IT department
function ITdepartment(arr) {
  let IT = []; //other reference
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].department == "IT") {
      IT.push({ ...arr[i] });
    }
  }
  return IT;
}

//21.5 - max salary in Finance
function maxFinance(arr) {
  let maxSalary = arr[0].salary;
  let fullname = "";
  for (let i = 0; i < arr.length; i++) {
    if (maxSalary < arr[i].salary && arr[i].department === "Finance") {
      maxSalary = arr[i].salary;
      fullname = arr[i].fullName
    }
  }
  return fullname;
}



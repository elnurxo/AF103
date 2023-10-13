// let arraySize = Number(prompt("enter array size: "));
// let students = [];
// //students - fullname, age, grade
// for (let i = 0; i < arraySize; i++) {
//     //fullname
//     let fullname = prompt(`Enter name of student #${i+1} `);
    
//     //age
//     let age = Number(prompt(`Enter age of student #${i+1} `));

//     //grade
//     let grade = Number(prompt(`Enter grade of student #${i+1} `));


//     //object
//     let student = {
//         name: fullname,
//         age: age,
//         grade: grade
//     }
//     //array
//     students.push(student);
// }
// let avgGrade = 0;
// for (let i = 0; i < students.length; i++) {
//     avgGrade += students[i].grade;
// }
// alert(`Average grade of group is ${Math.round(avgGrade/students.length)}`);

// let obj = {};
// let person1 = {name: 'Elnur'}; //reference
// let person2 = {name: 'Elnur'};



// console.log(person2.name);

let arr = [1,2,3];
let newArr = [];

//spread, destructing
// newArr = [...arr];
// newArr[0] = 71;

// console.log(arr[0]);

let employee1 = {
    fullname: 'Ali Aliyev',
    salary: 4000,
    address: {
        country: 'Az',
        city: 'Baku'
    }
}
let employee2 = {
    fullname: 'Hikmet Ehmedov',
    salary: 3000,
    address: {
        country: 'Ru',
        city: 'Moscow'
    }
}
let employee3 = {
    fullname: 'Vali Valiyev',
    salary: 1000,

}

// let employees = [employee1,employee2,employee3];
// let counter = 0;
// // Baki-dan olan ishcilerin sayi
// for (let i = 0; i < employees.length; i++) {
//     if (employees[i]?.address?.city == 'Baku') {
//         counter++;
//     }
// }
// alert(`Bakidan ${counter} qeder ishci var!`);

// // Object.keys
// console.log(Object.keys(employee1));
// // Object.values
// console.log(Object.values(employee1));

// // Object.entries
// console.log(Object.entries(employee1));

let product1 = {
    "id": 4,
    "quantityPerUnit": "48 - 6 oz jars",
    "unitPrice": 22,
    "unitsInStock": 53,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": true,
    "name": "Chef Anton's Cajun Seasoning",
    "supplier": {
    "id": 2,
    "companyName": "New Orleans Cajun Delights",
    "contactName": "Shelley Burke",
    "contactTitle": "Order Administrator",
    "address": {
    "street": "P.O. Box 78934",
    "city": "New Orleans",
    "region": "LA",
    "postalCode": 70117,
    "country": "USA",
    "phone": "(100) 555-4822"
    }
    }
}
let product2 = {
    "id": 4,
    "quantityPerUnit": "48 - 6 oz jars",
    "unitPrice": 27,
    "unitsInStock": 53,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": true,
    "name": "Chef Anton's Cajun Seasoning",
    "supplier": {
    "id": 2,
    "companyName": "New Orleans Cajun Delights",
    "contactName": "Shelley Burke",
    "contactTitle": "Order Administrator",
    "address": {
    "street": "P.O. Box 78934",
    "city": "New Orleans",
    "region": "LA",
    "postalCode": 70117,
    "country": "USA",
    "phone": "(100) 555-4822"
    }
    }
}
let product3 = {
    "id": 4,
    "quantityPerUnit": "48 - 6 oz jars",
    "unitPrice": 34,
    "unitsInStock": 53,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": true,
    "name": "Chef Anton's Cajun Seasoning",
    "supplier": {
    "id": 2,
    "companyName": "New Orleans Cajun Delights",
    "contactName": "Shelley Burke",
    "contactTitle": "Order Administrator",
    "address": {
    "street": "P.O. Box 78934",
    "city": "New Orleans",
    "region": "LA",
    "postalCode": 70117,
    "country": "USA",
    "phone": "(100) 555-4822"
    }
    }
}

// let productName = prompt("enter product name: ");
// let productCostPrice = Number(prompt("enter product cost price: "));
// let productSalePrice = Number(prompt("enter product sale price: "));
// let isDiscounted = confirm("is product discounted?");
// let profit = 0;


// if (isDiscounted) {
//     let productDiscount = Number(prompt("enter product discount!"));
//     profit = (productSalePrice-productSalePrice*productDiscount/100) - productCostPrice;
//     alert(profit);
// }
// else{
//     profit = productSalePrice - productCostPrice;
//     alert(profit);
// }

let fullName = '   Joe Smith   '; //15
//STRING METHODS
console.log(fullName);
//trim - start,end
// fullName = fullName.trim();
// console.log(fullName);
// console.log(fullName.length);

// fullName = fullName.toUpperCase();
// fullName = fullName.toLowerCase();
// console.log(fullName);


// let name1 = 'avali';
// let name2 = 'vali';

// console.log(name1.includes(name2));

//trim, includes, toLower/toUpper

// let capitals = ['Baku','Ankara','Moscow','Washington','Berlin','Roma','Paris','Copenhagen'];
// //bAKU
// let search = prompt("search for capital: ");

// for (let i = 0; i < capitals.length; i++) {
//     if (capitals[i].toLowerCase().includes(search.toLowerCase().trim())) {
//         alert(`${capitals[i]}`);
//     }
// }

// let country = 'Azerbaijan';
// console.log(country.substring(2,5)); //erb
// console.log(country.substr(2,5)); 

// let text = 'backend is the bəst branch of programming, backend is awesome!';
// text = text.replaceAll('ə','e');
// console.log(text);

// let text = "Please visit microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/i, "W3Schools"); //incaseSensitive

// console.log(newText);

// console.log('joe'+' '+'smith'); //concat
// let text = "a";
// text = text.padEnd(10,"b");
// console.log(text); //bbba

// let text = 'Ahello';
//char - character
// char a = '@';
// console.log(text.charAt(0)); //h
// console.log(text.charCodeAt(0)); //h
// console.log(text[0]); //h

// if ('h'=='H') {
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// let arr = [1,2,3,4];
// console.log(typeof arr.join('-')); ///array to string

//split
// let str = 'apple,banana,kiwi - 0';
// let newArr = str.split('-');
// console.log(newArr);

// let text = "banana, apple, kiwi, apple, pineapple, peach";
// let search = 'apple'; //-1 
// let index = text.lastIndexOf(search);
// console.log(index);
// if (index==-1) {
//     console.log('not found!');
// }
// else{
//     let newStr = text.slice(index);
//     console.log(newStr);
// }

let text = 'frontends';

console.log(text.endsWith('end'));
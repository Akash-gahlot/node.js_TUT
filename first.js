const app = require("./app.js");
//console.log("Akash Gahlot");
// console.log(app);
// console.log(app.arr);
// console.log(app.add(3, 4));

const a = 10;
//console.warn(a + 10);

// var b = '10';
// if (b ==10) {
//     console.log("matching");
// }
// else { 
//     console.log('not matched');
// }


//for loop

// for (i = 0; i < 5; i++) { 
//     console.log("Akash Gahlot " + (i + 1));
// }

//while loop
// var i = 0;
// while (i != 3) { 
//     console.log("make me three plz");
//     i = i + 1;
// }

//arrays in js

var arr = [1, 2, 3, 4, 5, 6, 7];
// for (i = 0; i < arr.length; i++) { 
//     console.log(arr[i]);
// }

//filter funcion

var res=arr.filter((n) => {
    return n >=6;
})
 
console.log(res);

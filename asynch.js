// we will learn about Asynchronous and synchronous in node.js
//--> node.js is anysnchronous in itself.

//Example 1.

// console.log("1");
// console.log("2");
// console.log("3");


// setTimeout(() => {      
//     console.log("1")
// }, 2000);

// console.log("2");

// console.log("3");
  ///in this example 2,3 will get execute before 1 ,which shows node.js have asynchronous functionality.

  ///Disadvantage of being asysnchronous

let x = 10;
let y = 0;

setTimeout(() => {
    y = 10;    //here the value of y will set late and line 29 will get exec
}, 1000);

console.log(x - y);


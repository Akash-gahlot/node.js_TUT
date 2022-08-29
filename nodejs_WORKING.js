
console.log("goes into call stack queue");

let firstname = "akash";

setTimeout(() => {
    firstname = "sumitesh";
}, 2000);

setTimeout(() => {
    firstname = "brijesh"
}, 0);

console.log(firstname);


//here main function will get execute first-->console.log will goest into call stack and execute -->firstname goes into call stack and execute--> now 1st settimeout will go into API stack -->then 2nd timeout will get into API stack-->line 14 console will get into call stack and execute-->meawhile timeout with mininmum time that is 2one will get into callback queue bcz still main function is not completed -->now main fucntion will get execute and from callback 2nd timout will get into call stack and get execute and then similarly 1st timeout with max time get into callback -->to call stack queue and finish.
 
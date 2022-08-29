let a = 10;
let b = 5;

let waiting_data = new Promise((resolve, reject) => {
    setTimeout(() => { 
        resolve(10);
    },3000)        /// here waiting data will get this 10 value from resolve
})
waiting_data.then((data) => {   //and here we can use this waiting data value.
    b = data;
    console.log(a + b);
})

//to resolve asyncronous issue we use promise.

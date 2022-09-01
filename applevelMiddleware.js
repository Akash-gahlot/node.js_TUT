import express from 'express';

import putfilter from './middleware.js';



const app = express();

// const putfilter = (req, resp, next) => {
//     if (!req.query.age) {
//         resp.send("<h1>Please enter you age first!!</h1>");
//     }
//     else if (req.query.age < 18) {
//         resp.send("<h1>Your age is less than 18 ,cannot access!!<h1/>")
//     }
//     else { 
//         next();
//     }
// }
app.use(putfilter);

app.get("/Home", (req,resp) => { 
    resp.send("<h1>Welcome to HomePage</h1>");
})
app.get("/", (req,resp) => { 
    resp.send("<h1>Welcome to  Page 2</h1>");
})

app.listen(4000);

//if i want that only person above 18 can access this page ,then i have to put middlewares.
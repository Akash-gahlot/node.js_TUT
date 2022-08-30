import express from 'express';

const app = express();

app.get('', (request, response) => { 
    response.send("<h1>welcome to express learning MR. </h1>"+request.query.name);
})

app.get('/About', (request, response) => { 
    response.send("About Page");
})

app.listen(5000);
import express from 'express';
import putfilter from './middleware.js';

const app = express();

app.get("/", putfilter, (req, resp) => { 
    resp.write("<h1>I am learing about middlewares</h1>");

})

app.get("/Get", putfilter, (req, resp) => { 
    resp.write("<h1>I am learing about single level middlewares</h1>");

})

app.listen(3000);


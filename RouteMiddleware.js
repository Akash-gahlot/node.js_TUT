import express from 'express';
import putfilter from './middleware.js';

const app = express();

const route = express.Router();

route.use(putfilter);

route.get("/",(req, resp) => { 
    resp.write("<h1>I am learing about middlewares</h1>");

})

route.get("/Get",(req, resp) => { 
    resp.write("<h1>I am learing about single level middlewares</h1>");

})

app.use(route);

app.listen(3000);

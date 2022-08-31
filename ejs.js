//dynamic pages builind in nodejs

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import data_2 from './data.js';

const val = data_2;

const filepath = fileURLToPath(import.meta.url);

const dirpath = path.dirname(filepath);

//const folderpath = path.join(dirpath, "Tempelate Engine");

const app = express();

app.set("view engine", "ejs");

app.get("/profile", (req, res) => { 
    res.render("myprofile", {val});
})

app.listen(5000);

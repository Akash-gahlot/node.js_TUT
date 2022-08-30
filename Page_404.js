import path from 'path';
import express from 'express';

import { fileURLToPath } from 'url';

const filepath = fileURLToPath(import.meta.url);

const dirpath = path.dirname(filepath);

const folderpath = path.join(dirpath, "HTML");

const app = express();


app.get('/ME', (req,res) => { 
    res.sendFile(`${folderpath}/myprofile.html`);   
})

app.get('/About', (req, res) => { 
    res.sendFile(`${folderpath}/About.html`); 
})
app.get('/Support', (req, res) => { 
    res.sendFile(`${folderpath}/Support.html`); 
})

app.get('/Contact', (req, res) => { 
    res.sendFile(`${folderpath}/Contact.html`); 
})

app.get('*', (req, res) => { 
    res.sendFile(`${folderpath}/PAGE404.html`); 
})

app.listen(5000);

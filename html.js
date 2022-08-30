import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const filepath = fileURLToPath(import.meta.url);

const dirpath = path.dirname(filepath);

const folderpath = path.join(dirpath, "HTML");

const app = express();

app.use(express.static(folderpath));

app.listen(5000);



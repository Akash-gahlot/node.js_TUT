import { dir } from 'console';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const filepath = fileURLToPath(import.meta.url);

//console.log(filepath);

const dirpath = path.dirname(filepath);

const folder = path.join(dirpath, "crud");

const newfile = `${folder}/person.txt`;

//fs.writeFileSync(newfile, "this file contain some impo. information");   //CREATION


// fs.appendFile(newfile, " i am appending some content into it", (error) => { 
//     if (!error) { 
//         console.log("content is added into file");
//     }
// });   //UPDATION

// fs.readFile(newfile,'utf8', (error, item) => { 
//     console.log(item);
// })                           //READ


//FILE RENAMING

// fs.rename(newfile, `${folder}/akash.txt`, (error) => {
//     if (!error) { 
//         console.warn("File has been renamed");
//     }
// });

//FILE DELETION

fs.unlinkSync(`${folder}/akash.txt`);


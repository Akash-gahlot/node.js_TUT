import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
//const dirpath = path.join(__filename, "file_folder");
const filepath = fileURLToPath(import.meta.url);

const dirpath = path.dirname(filepath);
const folder_name = path.join(dirpath, "file_folder");
//console.warn(folder);

// for (var i = 0; i < 4; i++) { 
//     fs.writeFileSync(folder_name + "/file" + [i] + ".txt", "it is txt file ,made by akash gahlot");  /// creating text file in a folder through looping 
// }


// how to read file name through looping 

fs.readdir(folder_name,(error, file) => { 
    file.forEach((item) => { 
        console.warn("file name :"+item);
    })
})

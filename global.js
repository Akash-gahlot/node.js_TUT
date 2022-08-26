const fs = require("fs");
console.log("global vs non global ");
fs.writeFileSync("file.txt", "hii my name is akash gahlot");
console.log(__dirname);

//core modules -->inbuilt functions ,variables which are already defined
// they are of two types-->1.global=> does not require import word to use ,they are globally declared.
                       //2.Non global=> require import statement to use ,they  are not globally declared.


                       
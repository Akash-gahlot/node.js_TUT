const http = require("http");
//approach1
http.createServer((req, res) => {
    res.write("<h1>I am http request</h1>");
    res.end();
}).listen(8000);
//approach 2
const data = (req, res) => { 
    res.write("<h1>This is approach 2</h1>");
    res.end();
}
http.createServer((data)).listen(4500);
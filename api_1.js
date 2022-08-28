//const http = require("http");
import http from "http";
import data from './data.js';
import data_2 from './data.js';
//const data = require('./data');
http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application\json" });
    response.write(JSON.stringify(data_2));
    response.end();
}).listen(5000);
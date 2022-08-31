import express, { response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.set("view engine", "ejs");

app.get("/Index", (req, res) => {
    const data = { name: "Akash Gahlot", cities: ["Meerut", "Noida", "Hapur", "Ghaziabad"], Courses: ["10th", "12th", "Btech"], companies: ["Wipro", "TCS", "Infosys"] };
    res.render("Myself", {data})
})
app.get('/login', (req,res) => {
    res.render("login");
})

app.listen(3000);



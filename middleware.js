

const putfilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("<h1>Please enter you age first!!</h1>");
    }
    else if (req.query.age < 18) {
        resp.send("<h1>Your age is less than 18 ,cannot access!!<h1/>")
    }
    else { 
        next();
    }
}

export default putfilter;

//if i want that only person above 18 can access this page ,then i have to put middlewares.
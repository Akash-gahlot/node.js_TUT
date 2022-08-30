import express from 'express';

const app = express();

app.get('', (request, response) => { 
    response.send( 
        `<input type="text" value=${request.query.name}/>
         <button>click me </button>
         <a href="/About"> Go to about page</a>`
         
    );
})

app.get('/About', (request, response) => { 
    response.send("About Page");
})


app.listen(5000);
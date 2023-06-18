const express = require('express'); // import the express module to our application

const app = express(); // first instance of the express

app.set('view engine', 'ejs'); //tell express we will be using ejs view template engine

app.get("/", (req, res)=>{
    res.render('index')
})

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`The server is running on port ${PORT}`)

    // create express server
})
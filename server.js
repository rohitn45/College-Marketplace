const express = require('express');
const app = express(); 
app.use(express.static(__dirname));

const bodyParser = require("body-parser");
app.use( bodyParser.urlencoded( {extended:true})); 


app.get("/", (req,res) => {
    res.sendFile(__dirname+"/home.html");
});

app.get("/login", (req,res) => {
    res.sendFile(__dirname+"/login.html"); 
});


app.get("/signup", (req,res) => {
    res.sendFile(__dirname+"/signup.html"); 
});


app.post("/", (req,res) => {
    res.send("yo"+req.body.e1);
})


app.listen(3000, () =>{ 
    console.log("Server started on port 3000" );
})
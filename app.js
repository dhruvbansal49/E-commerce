const express = require("express");
const app = express();

//Database connection
require('./Database/connection');

//Customers Model
const Customers = require('./Database/Models/customer');


app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));




//Home Route
app.get("/", (req, res) =>{
    res.render("index");
});


//Login Page Route
app.get('/login/:userType',(req,res)=>{
    const userType = req.params.userType.toLowerCase();
    res.render('login'({userType}));
});


//Register Page route
app.get('/register/:userType',(req,res)=>{
    const userType = req.params.userType.toLowerCase();
    res.render('register',({userType}));
});







//server running on PORT: PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, process.env.IP, ()=>{
    console.log(`Running on PORT: ${PORT} Started!`);
});
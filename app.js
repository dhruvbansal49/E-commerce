var express = require("express");
var app = express();

// var request = require("request");

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) =>{
    res.render("index");
});

app.get('/login/:userTyep',(req,res)=>{
    const userType = req.params.userType.toLowerCase();
    res.render('login'({userType}));
});

app.get('/register/:userType',(req,res)=>{
    const userType = req.params.userType.toLowerCase();
    res.render('register',({userType}));
});







const PORT = process.env.PORT || 3000;

app.listen(PORT, process.env.IP, ()=>{
    console.log("IMDB server has started");
});
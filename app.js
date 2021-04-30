var express = require("express");
var app = express();
var bodyparser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/js"));

app.get("/", (req, res)=>{	
	res.render("home");
});

app.get("/about", (req, res)=>{
	res.render("freelance");
});

app.get("/contact", (req, res)=>{
	res.render("contact");
});

app.listen("3001", (req, res)=>{
	console.log("the server started");
});

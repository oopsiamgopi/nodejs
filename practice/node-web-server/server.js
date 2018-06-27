const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

var app = express();
hbs.registerPartials(__dirname + "/views/partials");

var port = process.env.PORT || 3000;
/*app.use((req,res,next) => {
    res.render("maintanace.hbs", {});
});
*/
app.use(express.static(__dirname + "/public"));

app.use((req,res,next) => {
    var now = new Date();
    log = `${now}: ${req.method} ${req.path}\n`;
    fs.appendFile("server.log", log, (error)=> {
        if(error) {
            console.log("unable to append to file");
        }
    });
    next();
});


hbs.registerHelper("getCurrentYear", () => {
    return new Date().getFullYear();
});
hbs.registerHelper("screamIt", (text) => {
    return text.toUpperCase();
});
/*app.get("/", (req, res) => {
    res.send({name:"gopinat"});
});*/
app.get("/", (req, res) => {
    res.render('home.hbs', {
        pageTitle: "Home",
        welcomeMessage: "Welcome to sunday samaiyal"
    });
});

app.get("/bad", (req, res) => {
    res.send({errorMessage: "Unable to process request"});
});

app.get("/about", (req, res) => {
    res.render('about.hbs', {
        pageTitle: "About Us"
    })
});

app.listen(port, () => {
    console.log("Server is running");
});
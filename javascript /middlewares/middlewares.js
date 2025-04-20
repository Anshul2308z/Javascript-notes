// authentication and input validation 
// middlewares 

const express = require("express");

const app = express();

app.get("/health-checkup", (req, res) =>{
    const username = req.headers.username;
    const password = req.headers.password;


})
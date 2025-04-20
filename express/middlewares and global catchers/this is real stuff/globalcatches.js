//global catches are error handling middleware
const express = require("express");
const app = express();

app.get(express.json());

app.post("/w", (req,res) => {
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;
    res.send (`Number of kidneys: ${kidneysLength}`);
})

//global catches : defined at the end 

app.use(function (err,req, res, next) {
    res.json({msg: "something is up with the server"})
})
app.listen(3000, () => { console.log("Server is running on port 3000")})

// data is exposed in case of an error and it is not a good practice to expose data in case of an error
// so we use global catches to catch the error and send a generic message
// and not the actual error message 
// also app.use is a fuction with 4 arguments and it gets instantly triggered when an error occurs

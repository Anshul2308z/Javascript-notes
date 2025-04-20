const express = require("express");

const app = express();


/* this is the highlevel of app.get!
 app.get("/", (req,res,next) => {something next()}, (req,res,next) => {some other thing  next()} ,(req,res,  ) => {something different altogether} )
    call next() to move to the next middleware
      
    middleware are functions that sit between the route and the final handler , they do some checks  
    you cannot respond to an http request twice therefore using res.json or res.send twice will throw an error
 */ 

// ratelimmiter : limit the number of requests from a single ip address per second; its a middleware 


app.use(express.json()); // wirte this in order to catch request body in json format
// this middleware will be called in every request & inorder to do that we use the command app.use() 
// after line 17 to be specific 
// also you are expecting json as an input

function usernameValidator(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    if (username != "Anshul" || password != "1234") {
        res.status(405).json({
            msg: "invalid username or password"
        })}
    else {
        next()
         return;
    }
}

function inputvalidator(req,res,next){
    const kidney_id = req.query.kidney_id;
    if (kidney_id != 1 && kidney_id != 2) {
        res.status(406).json({
            msg: "invalid kidney id"
        })
    }
    next(); // heck yeah 
    }

app.get("/health_checkup",usernameValidator,inputvalidator,(req,res,main) => {
    res.json({
        msg: "you are eligible to buy a brand new Iphone"
    })
    
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}
)

/* if you write something like 
let noofrequests = 0;
function calculaterequests(req,res,next){
    noofrequests++;
    console.log(noofrequests);
    next();
}
app.use(calculaterequests); 

app.get("/health_checkup",() => {
    res.json({
        msg: welcome to our clinic
    })
    
}
    */



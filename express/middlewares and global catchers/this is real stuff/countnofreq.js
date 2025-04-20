//  if you write something like 
const express = require("express");   
const app = express();

let noofrequests = 0;
function calculaterequests(req,res,next){
    noofrequests++;
    console.log(noofrequests);
    next();
}
app.use(calculaterequests); 

app.get("/health_checkup",(req,res) => {
    res.json({
        msg: "welcome to our clinic"
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}
)
// it will count no of requests by the user
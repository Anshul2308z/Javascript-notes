// authentication and input validation 
// fails DRY principle (dont repeat yourself)
// this is a dumb way to do input validation, but it works
// and is easy to understand.

const express = require("express");  

const app = express();

app.get("/health-checkup", (req, res) =>{
    const username = req.headers.username;
    const password = req.headers.password; 
    const kidney_id = req.query.kidney_id;

    if(username==="Anshul" && password ==="1234"){
        if(kidney_id ==1 || kidney_id ==2){
            // do something 
            res.json({
                msg: "you are eligible to buy a brand new Iphone"
            })
        }
    }  
    res.status(400).json({msg: "your inputs are fishy!!!"})
}
) 
/* there is another way of doing it;

app.get("/health-checkup", (req, res) =>{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidney_id = req.headers.kidney_id;

    if(!(username==="Anshul" && password ==="1234")){
        res.status(400).json({msg: "your inputs are fishy!!!"})
    }    

        if(kidney_id ==1 || kidney_id ==2){
            // do something 
            res.json({
                msg: "you are eligible to buy a brand new Iphone"
            })
        }
}  
) 
I hope I didnt do any blunder here, hmh; anyways this is better becuase it stops the execution of the code if the first condition is not met. 
also, if(kidney_id ==1 || kidney_id ==2) can be written as if(!(kidney_id !=1 && kidney_id !=2));  both have the same meaning
*/ 
 
// lets check this code
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
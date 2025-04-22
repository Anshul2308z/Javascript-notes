// we provide token to the client so they dont have to give useername and password headers again and again
// token is a very long giberish string that is locally stored in our browser local storage

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtpassword = "123456";

const app = express();

const allUsers = [
  { 
    username: "admin",
    password: "admin",
  },
  {
    username: "user1",
    password: "user1",
  },
  {
    username: "user2",
    password: "user2",
  },
  {
    username: "user3",
    password: "user3",
  }
]

function userexists(username,password){

    for (let i=0 ; i < allUsers.length; i++){
        if (allUsers[i].username == username && allUsers[i].password == password){
            return true;
        }
    }
    return false;
}

app.use(express.json());

app.post("/login" , (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userexists(username,password)){
        res.status(412).json({
            msg: "invalid user!"
        })       
    }
    var token =jwt.sign({username: username},jwtpassword)
    return res.json({
        token ,
    })
})


app.get("/users",(req,res) =>{
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token,jwtpassword);
        const username = decoded.username;
        res.json({
        users: allUsers.filter(function(value){
            if(value.username == username){
                return false
            }
            return true
        })// filtering your username and password from username and password database
        })
    }
    catch(err){
        return res.status(409).json({
            msg: "invalid token"
        })
    } 

}) 

app.listen(3000)
/*const express = require("express");
const app = express();

app.use(express.json());
 

function count(n){
    let ans = 0;
    for(let i =0 ; i<=n; i++){
     ans =ans +1;
    }return     ans ;
}


app.get("/",(req,res) => {
    const n = Number(req.query.n);
    const w = count(n);
    res.send("your answer is : "+ w);
})



app.listen(3000, ()=> console.log("Server is running on port 3000"));

I have installed express module so the server is running fine ; now searching how to add package.json and package.lock.json
for package.json type 'npm init -y'
for package.lock.json type n'ode install'

starting server from terminal is a process comprising of two methods i know 
first is directly starting file running using 'node filename'& second is via package.json (refer for that method there!!!)

*/

// there is some error above

const express = require("express");

const app = express();


function sum(n){
    let ans=0;
    for (let i=0;i<n;i++){
        ans = ans +i;
    }
       return ans;
    
}

// initiate a query to the server such as localhost:3000/sum?number=10


app.get("/", function(req, res){
    const n =req.query.n;
    const ans = sum(n);
    res.send("your answer is "+ans);
})
app.listen(3000)
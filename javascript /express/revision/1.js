const express = require("express");

const app = express() ;

function thunder(n){
    let a = 0;
    for(let i =0 ; i<n ; i++){
        a = a + i
    }
    return a ;
}

app.get("/", (req, res) =>{
    const n = req.query.n;
    const ans = thunder(n);
    res.send(ans);

})
app.listen(3000,()=> {console.log("qw")});

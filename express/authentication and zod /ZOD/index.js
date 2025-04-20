// debugging required : endpoint 20 april/22:37




const express = require(express);
const z = require(zod);

const app = express();

const schema = z.array(z.number()); 

app.use(express.json());

app.post("/", (req,res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    res.send({
        response
    })

    res.json({
        message: `Received ${kidneys.length} kidneys`,
        kidneys,
    });

});

app.use(function(err,req,res,next){
    res.status(500).json({
        msg: "Yikes ,internal server error",
    });
    
})



app.listen(3000, () => {    
    console.log("Server is running on port 3000");
})
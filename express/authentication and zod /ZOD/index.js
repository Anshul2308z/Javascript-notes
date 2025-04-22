
// valid email and password creation
// expecting input as an object with str username and pwd

const express = require("express");
const app = express();
const z = require("zod");


app.use(express.json());

app.post("/", (req, res) => {
    const obj = req.body;
    const schema = z.object({
        username: z.string().email(),
        password: z.string().min(8).max(20),
    })
    const response = schema.safeParse(obj);
    if (!response.success) {
        res.status(400).json({
            message: "Invalid input",
            errors: response.error.errors,
        })
        console.log("failed");
    }
    else {
        res.send({
            response
        });
        console.log(response.success);
    }


})



app.listen(3000, () => {
    console.log("Server is running on port 3000");

/* coercisio in zod; read zod documentation 
*/
}
);
// Its working, I was just about to cry :(

/*IMP 
 in json 
[{},{}] : array of obj 
 {} : object

*/


// const express = require("express");
// const app = express();
// const z = require("zod"); // zod documentation at https://zod.dev/?id=basic-usage



// const schema = z.array(z.number());
// app.use(express.json());

// app.post("/", (req, res) => {
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys)

//     if (!response.success) {
//         res.status(400).json({
//             message: "Invalid input",
//             errors: response.error.errors,// this will give you the error message
            
//         })
//         console.log("failed");
//     }
//     else{
//     res.send({
//         response
//     });
//     console.log(response.success);
// }

// }
// )
// //global catches
// app.use(function(err, req, res, next) {
//     res.status(500).json({
//         msg: "Yikes ,internal server error",
//     });
    
// })


// app.listen(3000, () => {    
//     console.log("Server is running on port 3000");})





















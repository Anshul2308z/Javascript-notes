//async wait and promises
const fs = require("fs"); 
// fs stands for file system it is actually a library from node.js which lets us read and write a file
fs.readFile("a.txt"/*path of a file*/,"utf-8"/*encodingin which you want to read file */, function (err, data){
    console.log(data);
})
a = 0;
for(let i = 0; i<100000;i++){
a = a + i }
console.log (a);

console.log("hello world ")
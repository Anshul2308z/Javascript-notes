/* STRING MANUPILATION */

//functions inbuilt in js
//String manupulation 

// function getlength(str){
//     console.log("original string :",str)
//     console.log("length: ",str.length)
// }
// getlength("rabbit")

//instead of yapping this much directly use str.length

const omega="Breaking the Sky Swordsmanship"
const alpha="   electrification   "

console.log(omega.length/*this denotes length of the string*/)
console.log(omega.slice(0,8))
// console.log(omega.substr(0,7))
console.log(omega.charAt(5))
// prints value of character at console

console.log(omega.indexOf("s"))
console.log(omega.lastIndexOf("s"))

console.log(omega.startswith("B")
console.log(omega.endswith("B")
// returns a boolean


console.log(omega.replace("manship"," saint"))
console.log(omega.replaceAll(" ","_")

 
console.log(omega.padStart(30,"0")
console.log(omega.padEnd(30,"0")
            

console.log(omega.split(" "))

console.log(alpha.trim( ))

console.log(omega.toUpperCase())
console.log(omega.toLowerCase())

/* NUMBERS*/

// parseInt is a global function ; it converts strings into integers

console.log(parseInt("42px"))
console.log(parseInt("awqww23"))  

//parseFloat
console.log(parseFloat("23.67apolo"))

/* ARRAYS */

//push
const x = [1,2,3];
x.push(4);
console.log(x)

//pop : last element gets eleminated.
const y =[1,2,3];
y.pop();
console.log(y)

//shift : First element gets eleminated.
const z=[1,2,3]
z.shift();
console.log(z)

//unshift : assigns its argument as the first element shifting everything back.
const w =[1,2,3];
w.unshift(0);
console.log(w)

//concat : merges two arrays

const a = [1,2,3];
const b = [4,5,6];

console.log(a.concat(b))
 
//foreach: expects function as an argument.
const initialarray= [1,2,3,4,5,6];

function logthing(str){
    console.log(str);
}
// function logthing(str){
//     console.log(str+str);
// } 
initialarray.forEach(logthing);

//CALLBACK

function log1(){
    console.log("hello world 1");
}
function log2(){
    console.log("hello world 2")
}

function rather(fn){//this is a callback function 
    fn();
}
const value = rather(log2);  

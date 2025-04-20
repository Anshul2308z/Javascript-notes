/* pseudo code
function name(arguments){
    perform ml operations 
    return something;
}
*/

/*syntax for sum of two numbers and callback

function sum(numb1,numb2){
    let addition=numb1+numb2
    return addition;
}

console.log(sum(1,2))
*/

// USING FUNCTIONS AS ARGUMENTS (COMPLEX AND CONFUSING )

// function sum(numb1,numb2,FnToCall){
//     let addition=numb1+numb2
//     return FnToCall(addition)
// }

// function output(data){
//     console.log("The sum of following numbers is : "+data)
// }

// const ans = sum(1,2,output)

//arthimaticCalculator -

// function arthimaticCalculator(a,b,type){
//     if(type=="sum"){
//         return sum(a,b);
//     }
//     if(type=="substract"){
//         return sub(a,b);
//     }
// }

// function sum(a,b){
//      return a+b;
// }
// function sub(a,b){
//      return a-b;
// }

// const value = arthimaticCalculator(2,3,"sum")
// console.log(value)



// settimeoutfunction

// function greet (){
//     console.log("hello world");

// }

// setTimeout(greet,1*1000 /*this isv basicaly delay in  call/excecuting function greet*/);

// setInterval(greet,1*1000 /*this will call greet every 1 second*/);

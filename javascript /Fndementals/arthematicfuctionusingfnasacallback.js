//arthimaticCalculator -

function arthimaticCalculator(a,b,type){
    if(type=="sum"){
        return sum(a,b);
    }
    if(type=="substract"){
        return sub(a,b);
    }
}

function sum(a,b){
     return a+b;
}
function sub(a,b){
     return a-b;
}

const value = arthimaticCalculator(2,3,"sum")
console.log(value)



settimeoutfunction

function greet (){
    console.log("hello world");

}

setTimeout(greet,1*1000 /*this isv basicaly delay in  call/excecuting function greet*/);

setInterval(greet,1*1000 /*this will call greet every 1 second*/);
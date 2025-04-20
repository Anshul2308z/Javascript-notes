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

function sum(numb1,numb2,FnToCall){
    let addition=numb1+numb2
    return FnToCall(addition)
}

function output(data){
    console.log("The sum of following numbers is : "+data)
}

const ans = sum(1,2,output)



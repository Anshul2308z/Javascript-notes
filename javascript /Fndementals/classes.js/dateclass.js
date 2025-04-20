// Date class : an existing class in js 

let currentDate = new Date();
console.log(currentDate.getMonth() + 1) //januray is 0th month
console.log(currentDate.getDate() )//accurate
console.log(currentDate.getYear() +1900)//currentDate.getYear() gives curent year -1900
console.log(currentDate.getFullYear() )//accurate
console.log(currentDate.getHours() )//accurate
console.log(currentDate.getMinutes() )//accurate
console.log(currentDate.getSeconds() )//accurate

function summation(n){
    let a =0;
    for(let i=0;i<n;i++){
        a = a+i
    }
    return a;
   
}
const beforedate =new Date();
const beforTimeInMs=beforedate.getTime();

summation(100000 )

const afterdate =new Date();
const afterTimeInMs= afterdate.getTime();

console.log(afterTimeInMs-beforTimeInMs)
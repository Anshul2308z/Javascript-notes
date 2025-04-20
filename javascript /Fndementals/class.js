
// class Identity{
//     constructor(name,age,gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;

//     }
// introduction(){
//     return `Good morning everyone, my name is ${this.name} and I am ${this.age} years old and my gender is ${this.gender}.`
// }
// }
// let emilia = new Identity("Emilia", 18, "female" );
// let subaru = new Identity("Subaru", 19, "Male");
// let beako = new Identity("Beatrice","400+","female(spirit)")

// console.log(emilia.introduction())
// console.log(subaru.introduction())
// console.log(beako.introduction())

//Date class : an existing class in js 

let currentDate = new Date();
// console.log(currentDate.getMonth() + 1) //januray is 0th month
// console.log(currentDate.getDate() )//accurate
// console.log(currentDate.getYear() +1900)//currentDate.getYear() gives curent year -1900
// console.log(currentDate.getFullYear() )//accurate
// console.log(currentDate.getHours() )//accurate
// console.log(currentDate.getMinutes() )//accurate
// console.log(currentDate.getSeconds() )//accurate

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
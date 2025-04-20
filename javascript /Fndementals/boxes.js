// storing info in objects is the best js method

/*styntax of objects 

 const user1 = {
    firstname: "arthur",//commas are used for seperation and : is used for filling data as "=" is reseved for naming variables, firstname is not a variable. 
    lastname:"leywin",
    age: 16-17,

} */
// taking info out of objects 
// console.log(user1.firstname) 

/* although multiple users can be created and orgainsed like below
user1
user2
user3
user4
user5...
  it is better to create users in an array for ease of access */
const allusers = { 
    user1: {
    firstname: "arthur",//commas are used for seperation and : is used for filling data as "=" is reseved for naming variables, firstname is not a variable. 
    lastname:"leywin",
    age: 16
},
user2: {
    firstname: "Tessia",//commas are used for seperation and : is used for filling data as "=" is reseved for naming variables, firstname is not a variable. 
    lastname:"Elarith",
    age: 16
}

};
//getting output 
console.log(allusers.user1);


    
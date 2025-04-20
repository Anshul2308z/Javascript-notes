
class Identity{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;

    }
introduction(){
    return `Good morning everyone, my name is ${this.name} and I am ${this.age} years old and my gender is ${this.gender}.`
}
}
let emilia = new Identity("Emilia", 18, "female" );
let subaru = new Identity("Subaru", 19, "Male");
let beako = new Identity("Beatrice","400+","female(spirit)")

console.log(emilia.introduction())
console.log(subaru.introduction())
console.log(beako.introduction())


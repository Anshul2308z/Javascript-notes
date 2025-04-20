// function add(a,b){
//     let  c = a+b;
//     return c ;
// }
// function square(n){
//     let b =n*n;
//     return b;
// }
// function cube(n){
//     let a =n*n*n;
//     return a;
// }

// function sqcubesum(a,b){
//     c = add(square(a),square(b));
//     d = add(cube(a),cube(b));

//     return (`sum of square: ${c}; sum of cubes ${d}`);
// }
// console.log(sqcubesum(2,4))


function square(a){
    const n = a*a;
    return n ;
}

function cube(a){
    const n = a*a*a;
    return n ;
}

function sumofsomething(a , b , fn){
    const val1 = fn(a);
    const val2 = fn(b);
    sum= val1 +val2;
    
    return console.log(`Sum of ${fn.name}:${sum} `);
}/* was having difficulty printing name of fn due to wahatever reason
ways to do it are 2 : first is fn.name second is let w = console.log(fn)*/

sumofsomething(4,4,square);
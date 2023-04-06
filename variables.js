console.log(z)
//console.log(x)
let x=2
const y=5
var z=8

//y="ten"

console.log(add(2,3))
//function declaration
function add(x,y){             //function donot need a return type in js
    return x+y
}


//function expression
const multiply = function(x,y){
    return x*y
}
console.log(multiply(2,3))


//arrow functions
//const subtract =(x,y) =>{
  //  return x-y
//} 
   //OR

const subtract =(x,y) => x-y

console.log(subtract(5,3))



// array   (object)(mixed of types such as boolean, number)

const arr =[1,2,3]
arr.forEach((value) => value * 2)   //value =local variable
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

arr.push(5)
console.log(arr)

arr.concat(6)
console.log(arr)

const arr1= arr.concat(7)
console.log(arr1)
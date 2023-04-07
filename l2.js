const ages = [12,14,16,19]

//array operations
//map, filter and reduce

//js objects
const user1 ={
    "name" : "Manisha",
    "age" : 22,
    isAdult : true
} 


//1. data cannot be changed in this method--- it's performance is  better than 2 and 3 for multiple course
const new_ages =[]
for (let i=0; i<ages.length; i++){
    new_ages.push(2*ages[i]);
}
console.log(new_ages)

//2.OR

for (let i=0; i<ages.length; i++){
    ages[i]=ages[i]*2;
}
console.log(ages)

//3. OR

for (let i=0; i<ages.length; i++){
    console.log(ages[i]*2);
}

//



//better than above process use  ; map, filter and reduce


//map function -------return type array ---- tranform every item
const new_ages1 =ages.map(function(item){
    return item *2;
})
console.log(new_ages1)


//Or
const new_ages2 = ages.map((item) => 2* item)
console.log(new_ages2)

//or
const new_ages3 = ages.map(item => '<l>${item}</li>')
console.log(new_ages3) 





//-----------------------------------------------------------------------------------


for (let i=0; i<ages.length; i++){
    if (ages>=14){
        print(ages);
        
    }
}

sum=0;
for (let i=0; i<ages.length; i++){
    
}


//Filter function-----------------------
const filtered = ages.filter(item => item>14)



//total function
const total = ages.reduce((acc, curr) => acc += curr,0) //acc=accumulator(previous value)## curr=current value

console.log(filtered)
console.log(total)
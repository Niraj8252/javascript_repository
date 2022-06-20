// case 01


function sum(a,b) {
 console.log(a+b);   // nan
    
}sum(6)


// case 02

// function sum(a,b=3) {
//     console.log(a+b);
    
// }sum(4)


// case 03

// function sum(a,b=3) {
//     console.log(a+b);
    
// }sum(4,4)


// case 04
class add{
 constructor(a,b=3) {
    console.log(a+b);
    
}
}
var sum = new add(2)
var sum1 = new add(5,6)
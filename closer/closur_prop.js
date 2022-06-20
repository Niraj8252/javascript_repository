// var a = 20
// var b =70
// function sample() {
// console.log(a);
// console.log(b);
// var b = 400
// console.log(b);

//     function inner() {
//         console.log(a);
//         var a = 50
//         console.log(b);
//         console.log(a);
     
//  }  inner()  
// }sample()


//===========================================================

var a = 290
var b =65
function sample() {
console.log(a);
console.log(b);
var b = 400
console.log(b);

    function inner() {
        var a = 500
        var b = 600
        console.log(b);
        console.log(a);
     
 }  inner()  
}sample()

//========================================

// function outer(value1) {
//     return function inner(value2) {
//         return (value1+value2)
//     }
// }

// var add = outer(6)
// console.log(add(9));
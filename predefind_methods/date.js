
var d = new Date();

// console.log(d.toDateString());                    // Mon Jun 06 2022
// console.log("Today's date : " + d.getDate());        //Today's date : 6   
// console.log("Today's day : " + d.getDay());          //Today's day : 1      
// console.log("Today's year : " + d.getFullYear());      //Today's year : 2022
// console.log("Today's month : " + d.getMonth());         //Today's month : 5


var date = d.toDateString();   
console.log(date);                //Mon Jun 06 2022
console.log(date.split(" ")[1]);  //Jun
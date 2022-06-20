var array = [70,30,20,50,80]

// case -1 : accessing an array in normal way
// let x = array[2]
// let y = array[3]
// console.log(x,y);   // 20 50


// case 02 : accessing first 2 element of an array

// let [x,y] = array
// console.log(x,y);        // 70 30

// case 03 : accessing first 3 element of an array

// let [x,y,z,a] = array
// console.log(x,y,z);             // 70 30 20 

// case 04 : accessing the element of an array by skipping the elements in between 

let [x,,,,y] = array
console.log(x,y);              // 70 80
var arr = [20,40,"niraj",60]


//case 01 : combining the existing array

// var arr1 = [80,90,"test"]

// console.log(...arr,...arr1);
// console.log(arr);

// //case 02 : combining the existing array

// console.log(...arr,"kumar",30);
// console.log(arr);

// case 03 : copying object using spreed parameter
// obj2 is given all the properties of abj1 using the spread parameter(==)

// const obj1 = {
//     fname : "niraj",
//     lname : "kumar"
// }


// var obj2 = {...obj1}
// console.log(obj2);


//case 04 : combine 2 objects 
// the properties that did not match ,but the properties that did match overriden by the last object that was passed


const obj1 = {
        fname : "niraj",
        lname : "kumar",
        salary : 50000
    }
    
    const obj2 = {
        c_name : "testyantra",
        c_address : "btm",
        salary : 60000
    }

    const obj3 = {...obj1,...obj2}
    console.log(obj3);
    


var arr = [3,6,8,4,60,36,56]

//========================== for of loop
arr.forEach((element,index,array) => {
    // console.log(index +" = "+ element +" = "+ arr);
    console.log(index);
});

for (var index of array) {
    console.log(index);
}

//=================================== for in loop
arr.forEach((element,index,arr) => {
     console.log(index +" = "+ element +" = "+ arr);
   // console.log(arr[index]);
});

// for (var index in arr) {
//      console.log(index + "=" + arr[index]);
//}
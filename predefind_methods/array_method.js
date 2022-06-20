
// var arr = [2,6,7,9,3]
// var arr1=['a',22,55]

//================================
// 01. ==> array.concat(number[])
//combine 2 or more array
//This method will return a new array without modifying any existing array

// console.log(arr.concat(arr1)); 
//console.log(arr);

//====================================
// 02.==> array.push(elements)
//it will add the given element at the end and return the lenth of an array
//it will modify the existing array

// arr.push(10)
// console.log(arr);

//====================================
// 03.==> array.pop()
// It will remove the last element from the array and return the removed element
//it will modify the existing array

// console.log(arr.pop());
// console.log(arr);

//===============================
// 04.==> aaray.unshift(elements)
// It will add the elements in the begining of the array and return the lenth of an array
//it will modify the existing array

// console.log(arr.unshift("niraj"));
// console.log(arr);

//==================================
// 05.==> array.shift()
//It will remove the first element from the array and return removed elements
// It will modify the existing array

// console.log(arr.shift());
// console.log(arr);

//===================================
//  06.==> array.splice(start index, delete count, new element)
//It will delete as well as add the given element to specific index of an array and return the delete element in the form of an array
// It will modify the existing array

// console.log(arr.splice(2,1,60));
// console.log(arr);

//====================================
//  07.==> array.slice(start index, end index)
//It will return the fregnent of an array based on the specified index and end index will be excluded returns the fregnent in the form of an array

// console.log(arr.slice(1,3));
// console.log(arr);

//================================
//  08.==>array.every(()=>{})
//It will return boolean result based on the condition satisfied by all the elements of an array i.e. return true only if all the elements satisfied the given condition 


// console.log(arr.every((element)=>{
//     return element>1

//  }));
// console.log(arr);

//=======================================
// 09.==> array.some(()=>{})
//It will return boolean result based on condition satisfy by one of the element of an array i.e. return true

// console.log(arr.some((element)=>{
// return element >5
// }));                                 //true
// console.log(arr)

//======================================
// 10.==> array.indexOf(search element,start position)
//It will return the index value of search element traversing from left to right (left==right)

// console.log(arr.indexOf(9,2)); // 3
// console.log(arr);

//=================================
// 11.==> array.lastIndexOf(search element , start position)
//It will return the index value of search element traversing from right to left (right==left)

// console.log(arr.lastIndexOf(7,5));       // 2
// console.log(arr);

//===========================================
// 12.==> array.reverse()
// It will return the array in reverse order 
//It will modify the existing aaray

// console.log(arr);
// console.log(arr.reverse());

//======================================================
//  13.==> array.includes(search element)
//It will return the boolean result based on the search element present

// console.olog(arr.includes(7));
// console.lg(arr);

//=================================================
// 14.==> array.join(join character)
// It will add the element of an array based on the character specified and return string

// console.log(arr.join("add"));
// console.log(arr);

//=========================================
// 15.==> array.forEach(()=>{//task})
// It will perform the task given in the callback function and returns void
//implemented by map method of an array
//Bt it will not modify the existing array

// arr.forEach((element,index)=>{
// console.log(element +" : "+ index);
// })
// console.log(arr);


//==========================================
// 16.==>  array.map(()=>{})
// It will return the modified form of an array and implement by filter method of an array 
// But it will not modify the existing array

// console.log(arr.map((element, index)=>{              
//     return element*2
// })); 
// console.log(arr);                                      //return type is different from foreach

//=============================================
// 17.==> array.filter(()=>{})
// It will return the array based on the filter condition i.e.it will return the element in the form of array than only satisfied the given condition
//It will not modify the existing array


// console.log(arr.filter((element,index,array)=>{
//     if (element>30){
//         return element
//     }
// }));
// console.log(arr);

//=================================================
// 18.==>  aaray.sort(()=>{//compare function})
//It will sort the array in ascending order (return a-b)
//Decending order (return b-a) based on return specified in compare function

// console.log(arr.sort((a,b)=>{
//     return b-a
// }));
// console.log(arr);


//====================================
//  19.==> array.reduce((previous value, current value)=>{})
// It will return the entire array into a single unit/to the required form (array, object, number) traversing from left ==>right


// eg -01
// const numbers = [123,456,790]
// function myFunc(total, num) {
// return total-num    
// }
// console.log(numbers.reduce(myFunc));
// console.log(arr);


//eg - 02

// const numbers1 = [23.5,4.5,6.8,2.8]
// function getSum(total,num) {
//     return total + Math.round(num)
// }
// console.log(numbers1.reduce(getSum,0));

//===========================================
// 20.==> array.reduceRight((previous value, current value)=>{})
// Similar to reduce method but traversion is from right ===>left


// eg :- 01
const numbers3 = [5,7,6,10,4]

function myFunc(total, num) {
    return total - num;
}
console.log(numbers3.reduceRight(myFunc));

// console.log(arr);

// eg : 02
// const numbers4 = [8,34,67]
// console.log(numbers4.reduceRight(getSum));

// function getSum(total, num) 
// {
//     return total + num;
// }
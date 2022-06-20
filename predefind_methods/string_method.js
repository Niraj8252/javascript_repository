var str = " test yantra "

// 01.==> str.length
//return the lenth of the string object

// console.log(str.length);
// console.log(str);

//======================
// 02.==> str.split(separator)
//split the string into sub string based on the separator
//return type is in the form of array
//does not modify the existing array

// console.log(str.split(" "));
// console.log(str);

//====================
// 03.==> str.chatAt(position)
//return the character of the specified index

// console.log(str.charAt(3));
// console.log(str.charAt(7));
// console.log(str.charAt(-1));
// console.log(str);

//=================================
// 04.==> str.charCodeAt(index)
// print the unicode of the character


// console.log(str.charCodeAt('y'));
// console.log(str.charCodeAt(5));
// console.log(str);


//===========================
// 05.==> str.concat()
// does not modify the existing string
// return type is string
// string is appeared to the end of the existing string


// console.log(str);
// console.log(str.concat("deployed"));
// console.log(str);

//==============================
// 06.==> str.endWith()
// check whether the string is ending with the same searching string


//  console.log(str.endsWith('a')); //false
// console.log(str.endsWith('t')); //false
// console.log(str.endsWith(""));  // true
// console.log(str);

//=====================================
// 07.==> str.includes("search string")
// check whether the string is contains the same searching string or not

//  console.log(str.includes("tra"));  // true
// console.log(str.includes("t"));    // true
// console.log(str.includes("pq"));    // false


//=====================================
// 08.==> str.indexOf("search string")
//Returns the position of the first occurrence of a substring.

//console.log(str.indexOf(" "));  // 0
// console.log(str.indexOf("t"));   // 1

//=======================================
// 09.==> str.lastIndexOf("search string")
//Returns the last occurrence of a substring in the string.


//  console.log(str.lastIndexOf(" "));   //12
// console.log(str.lastIndexOf("y"));    //6

//===============================
// 10.==> str.replace("search string")
//This method is used to replace the old string with new string

//str.replace(" ")  // nothing
//  console.log(str.replace("test" , "soft"));  //soft yantra
// console.log(str);

//===============================
// 11.==> str.repeat(number)
// it returns the multiple copy of the string


console.log(str.repeat(4));








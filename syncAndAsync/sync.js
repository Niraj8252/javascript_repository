console.log("start");
 function f1() {
    console.log("f1 executed");
    f2()
 }

 function f2() {
    console.log("f2 executed");
    f3()
 }

 function f3() {
    console.log("f3 executed");
  
 }

 console.log("end");
 f1()

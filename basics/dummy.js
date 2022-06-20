
// var emp ={
//     fname : "niraj",
//     lname : "kumar",
//     details : function(){
//        console.log("my name is "+ this.fname+" "+ this.lname)
//        }
//    }
   
//    var emp2 ={
//     fname : "nitish",
//     lname : "sharma",
//     fulldetails : function(){
//        console.log("this is "+ this.fname+" "+ this.lname)
//        }
//    }
//    function greeting(greet1,greet2){
//    console.log(greet1 +" "+this.fname+" "+this.lname+" "+greet2)
//    }
//    emp.details.call(emp2)
//    greeting.call(emp,"hello","welcome")

//===========================================


// var emp ={
//     fname : "niraj",
//     lname : "kumar",
//     details : function(){
//        console.log("my name is "+ this.fname+" "+ this.lname)
//        }
//    }
   
//    var emp2 ={
//     fname : "nitish",
//     lname : "sharma",
//     fulldetails : function(){
//        console.log("this is "+ this.fname+" "+ this.lname)
//        }
//    }
//    function greeting(greet1,greet2){
//    console.log(greet1 +" "+this.fname+" "+this.lname+" "+greet2)
//    }
//    emp.details.apply(emp2)
//    greeting.apply(emp,["hello","welcome"])

//======================================

var emp ={
    fname : "niraj",
    lname : "kumar",
    details : function(){
       console.log("my name is "+ this.fname+" "+ this.lname)
       }
   }
   
   var emp2 ={
    fname : "nitish",
    lname : "sharma",
    fulldetails : function(){
       console.log("this is "+ this.fname+" "+ this.lname)
       }
   }
   function greeting(greet1,greet2){
   console.log(greet1 +" "+this.fname+" "+this.lname+" "+greet2)
   }
   var info = emp.details.bind(emp2)
   info()
   var fullinfo = greeting.bind(emp,"hello","welcome")
   fullinfo()

    
//===============================

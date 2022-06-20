var emp = {
    fname : "iron",
    lname : "man",
    intro : function () {
        console.log("i am " + this.fname +" "+ this.lname);
        // this.name.apply(emp)
    }
}

var emp2 = {
    fname : "black",
    lname : "panther",
    name : function () {
        console.log("hello " + this.fname +" "+ this.lname);
        this.intro.apply(emp2)
    }
}

function greeting(greet1,greet2,greet3) {
   console.log(greet1+" "+ this.fname+" "+this.lname+" "+greet2+" "+greet3); 
}

emp.intro.apply(emp2)
emp2.name.apply(emp)
// greeting.apply(emp, ["welcome","good","morning"])
// greeting.apply(emp2, ["welcome","good","morning"])
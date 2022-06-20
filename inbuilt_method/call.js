var person = {
    fname : "Niraj",
    lname : "kumar",
    introduction : function () {
        console.log("i am " + this.fname +" "+ this.lname);
        this.detail.call(person)
    }
}

var person2 = {
    fname : "Amit",
    lname : "chatterjee",
    detail : function () {
        console.log("hello " + this.fname +" "+ this.lname);
    // this.introduction(person)
    }
}

function greeting(greet1,greet2) {
   console.log(greet1+" "+ this.fname+" "+this.lname+" "+greet2); 
}

// person.introduction()
// person2.detail()

person.introduction.call(person2)
// greeting.call(person, "hi" ,"welcome")
// greeting.call(person2, "bengalore","btm")
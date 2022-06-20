var company ={
    c_name : "google",
    address : "bangalore",
     
    name : function () {
        console.log("hello" + this.c_name+" "+this.address);
        
    }
}

var company2 ={
    c_name : "microsoft",
    address : "sarjapur",
     
    details : function () {
        console.log("hi"+" "+ this.c_name+" "+this.address);
        
    }
}

 function greeting (greet1,greet2) {
    console.log(greet1+" "+this.c_name+" "+this.address+" "+greet2);
}

// var result = company.name.bind(company2)
// result()
var returndetails= greeting.bind(company2,"welcome","to","company")
returndetails()
var returndetails1= greeting.bind(company,"welcome","to","company")
returndetails1()
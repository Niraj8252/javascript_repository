var myself={
    fname : "niraj",
    lname : "kumar",
   
    skillset : ["java","selenium","javascript"],     // array

    greet : function () {                                // function
        return "this is "+" "+ this.fname+" "+ this.lname   
    },

    company: {                               // ==> object
        company_name: "testyantra",
        c_address : "banshankri"
    }
}

// //case 01
// let myName = myself.fname
// let skills = myself.skillset
// console.log(myName);
// console.log(skills);

//case 02       
// codition 1 : curly braces
// condition 2 : reference name should be same as that which is in the object 

// let {fname} = myself 
// let {company} = myself
// console.log(fname);
// console.log(company);

//case 03 : change the refrence variable => so that we can declare our own variable
// name in object fname will be renamed as myName
 
let {fname:myName}= myself
console.log(myName);
console.log(fname);
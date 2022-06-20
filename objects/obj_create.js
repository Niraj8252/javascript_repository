var myself ={
    f_name : "Niraj",
    l_name : "Kumar",
    yoe :3,
    skillset : ["java","selenium","javascripted"],

    greet : function () {
        return "i am " +" "+ this.f_name+" "+this.l_name
        
    },
}

var biodata = Object.create(myself)
biodata.__proto__ = myself
biodata.f_name = "test"
biodata.l_name = "yantra"

// console.log(myself);
console.log(biodata);
// console.log(biodata.skillset);
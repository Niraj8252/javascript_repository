let inheritanceImport = require("./inheritance")
console.log(inheritanceImport.x);

class C {
    constructor(m){
        this.m = m
    }
}
var c = new C(70)
console.log(c.m);
console.log(c.q);
// console.log(inheritanceImport.x);
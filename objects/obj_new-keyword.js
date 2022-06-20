var vahical = new Object()

vahical.type = "car"
vahical.name = "ford"
vahical.model = "fordfigo"

vahical.specification =["power break","auto gear","five seater"]

vahical.greet = function () {
    return "This is my car"+" "+ this.name+" "+ this.model   
},

vahical.company = {
    c_name : "ford_retailer",
    C_add : "btm"
}


console.log(vahical);
console.log(vahical.specification[1]);
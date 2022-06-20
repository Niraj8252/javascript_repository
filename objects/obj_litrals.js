var bike={
    bike_name : "fz",
    bike_color : "black",
    cc : 150,
    specification : ["milege","speed","disk_break"],     // array

    greet : function () {                                // function
        return "this is my bike"+" "+ this.bike_name+" "+ this.bike_color   
    },

    company: {                               // ==> object
        company_name: "yamaha showroom",
        c_name : "yamaha"
    }
}

bike.location = "Bangalore","btm"

 console.log(bike);
//  console.log(bike.greet());
// delete bike.location            //==> Deleting element from object
// console.log(bike);
// console.log(bike["company"]);  // ==> printing the corresponding value for the particular property(Method 1)
// console.log(bike.company);     // ==> printing the corresponding value for the particular property(Method 2)

// console.log(bike.specification[1]);
// console.log(bike.company.company_name);
// console.log(bike.bike_name);
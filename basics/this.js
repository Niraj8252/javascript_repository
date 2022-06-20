
var bike={
    bike_name : "fz",
    bike_color : "black",
    cc : 150,
    specification : ["milege","speed","disk_break"],    

    greet : function () { 
       console.log(bike1.greet()); 
    }
} 


var bike1={
    bike_name : "apache",
    bike_color : "red",
    cc : 150,
    specification : ["milege","speed","disk_break"],    
    x:5,
    greet : function () { 
        x=10                               
       console.log(bike.bike_color); 
       console.log(this.x);
       console.log(x);
    }
}  
bike.greet()







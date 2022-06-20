

// class myself{
// 	constructor(fname,lname,address,mobileNo)
// 	{
// 	this.fname=fname
// 	this.lname=lname
// 	this.address=address
// 	this.mobileNo=mobileNo
// 	}
// 	x=50
// 	static y = 70
	
// 	 demo(){
// 	console.log(this.x)  // 50
// 	console.log(myself.y) // 70
// 	console.log(this.y)   // undefined
// 	console.log(this.fname) // niraj
// 	}
// 	static sample(){
// 	console.log(this.y)   // 70
// 	console.log(this.x)   // undefined
	
// 	console.log(details.x)  // 50
// 	}

// 	display(){
// 	myself.sample()  // invoking static method in non-static method
// 	}

// 	static display1(){
// 	details.demo()  // invoking non-static method in static method
// 	}
	
// 	}
// 	var details = new myself("niraj","kumar","btm",9857549)
	
// 	// details.demo()   // o/p :- 50 70 undefind niraj
// 	// myself.sample() // 70 undefind 50 

// 	details.display() //70 undefind 50 
// 	myself.display1()  // 50 70 undefind niraj


// =======================================
// array destructuring
// =======================================
let array = [20,30,40,50,60]

// let x = array[2]  
// let y = array[3]
// console.log(x,y)   // 40 50

// let [x,y] = array
// console.log(x,y)  //  20 30

// let [x,y,z] = array
// console.log(x,y,z)  // 20 30 40

let [x,,,y] = array
console.log(x,y)  // 20 50

// ===============================
// object destructuring
// ===============================

//  var bike = { 
// 	bike_name : "apache",
// 	bike_color : "black",
// 	specification : ["disk","milege","fuel engine"],

// 	company : {
// 	c_name : "tvs"
// 	c-add : "bengalore"
//     }
// }
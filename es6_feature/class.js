class biodata{
    constructor(fname,lname,address,email){
        this.fname = fname
        this.lname = lname
        this.address = address
        this.email = email
    }
    x=50
    static y = 70

    Demo(){
        console.log(this.x);        //50              ==> non-static method invoking non-static variable by this keyword
        console.log(this.y);        //undefined 
        console.log(biodata.y);       // 70            ==> non-static method invoking static variable by class name
        console.log(this.fname);      // niraj
    }

    static sample(){
        console.log(this.x);          // undefined
        console.log(this.y);          //70            ==>  static method invoking static variable by this keyword    
        console.log(bio.x);           //50            ==>  static method invoking non-static variable by object refrence
        console.log(this.fname);      //undefined
        console.log(bio.fname);       //niraj
    }

    display(){
        biodata.sample()
        this.Demo()             // invoking static method inside non-static method
    }

    static display1(obj_ref){
        obj_ref.Demo() 
        this.sample()                  // invoking non-static method inside the static method
    }
}

var bio = new biodata("niraj","kumar","btm","niraj82@gmail.com")
var bio1 = new biodata("amit","mahto","banshankri","amit82@gmail.com")
// console.log(bio.fname);
// console.log(biodata.y);
// console.log(bio);
// bio.Demo()            // invoking non-static method
// biodata.sample()       // invoking static method 
// bio.display()           // invoking a static method inside the non-static method
biodata.display1(bio1)   // invoking a non-static method inside the static method
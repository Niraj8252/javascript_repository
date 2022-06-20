class biodata{
    constructor(fname,lname,address,email){
        this.fname = fname
        this.lname = lname
        this.address = address
        this.email = email
    }
    x=50
    static y = 70
    display(){
        console.log(this.x);
        console.log(this.y);
        console.log(biodata.y);
    }

    static sample(){
        console.log(this.x);
        console.log(this.y);
        console.log(biodata.y);
    }
}

var bio = new biodata("niraj","kumar","btm","niraj82@gmail.com")
bio.display()
biodata.sample()
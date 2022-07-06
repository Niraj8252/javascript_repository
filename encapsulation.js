class encapsulation{

    #data = "javascript"

    get getdata(){
       return  this.#data
    }

    set modifydata(value){
        return this.#data=value

    }
    }
    var en = new encapsulation()
    console.log(en.getdata); 
    en.modifydata = "webdriver"
    console.log(en.getdata);

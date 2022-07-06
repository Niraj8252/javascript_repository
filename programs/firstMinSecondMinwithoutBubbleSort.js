var array = [20,50,36,6,50,70,65,90,38]


    var Fmin = array[0]
    var Smin = array[0]
    for (let index = 0; index < array.length; index++) {
        if(Fmin>array[index])
        {
            Smin = Fmin
            Fmin = array[index]
        }
       
}
console.log(Smin);
console.log(Fmin);
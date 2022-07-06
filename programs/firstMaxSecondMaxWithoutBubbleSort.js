var array = [20.50,36,50,70,65,90,38]


    var Fmax = array[0]
    var Smax = array[0]
    for (let index = 0; index < array.length; index++) {
        if(Fmax<array[index])
        {
            Smax = Fmax
            Fmax = array[index]
        }
}
console.log(Smax);
console.log(Fmax);
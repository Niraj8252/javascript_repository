var a=20
function substract(a,b) {
    {
        var a = 30
        var b = 40
        let c=20
        const d=10
        
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d); 
        {
            var e = 40
            let f=20
            const g=10  
        }
    }
 
console.log(a-b);
}substract(70,40)


//global -> a=20
//block -> a=70 , b=40, a=30, b=40 , f=20 , g=10
//local -> c=20, d=10 e=40
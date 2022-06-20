var x=20
function substract(x,y) {
    {
        var x = 30
        var y = 40
        let a=20
        const b=10
        
        console.log(x);
        console.log(y);
        console.log(a);
        console.log(b); 
        function sum(c,d) {
        console.log(c+d);
            
        } sum(3,6)
    }
 
console.log(x-y);
}substract(70,40)

//global -> x=20
//local -> x=70 y=40 x=30 y=40 c=3 d=6
//block-> a=20 b=10
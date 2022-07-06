var str = ["niraj", "btm", "bengalore", "ktm", "lap"]

var Fmin = str[0]
for(var i = 0; i<str.length; i++)
{
    if(Fmin.length>str[i].length)
    {
        Fmin = str[i]
    }
}
console.log(Fmin);
var str = ["niraj", "btm", "bengalore", "ktm", "lap"]

var Fmax = str[0]
for(var i = 0; i<str.length; i++)
{
    if(Fmax.length<str[i].length)
    {
        Fmax = str[i]
    }
}
console.log(Fmax);
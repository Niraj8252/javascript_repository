var str = "today is sunday"
var str = str.split(" ")
var rev =" "
for(var i = 0; i<str.length; i++)
{
    rev = str[i]+" "+rev
}
console.log(rev);

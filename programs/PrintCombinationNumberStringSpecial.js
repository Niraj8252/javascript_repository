var s = "n@1I5%r#7j&?"
var alpha = ""
var num = ""
var special = ""
for(var i = 0; i<s.length; i++)
{
    var ch = s.charAt(i)
    if(ch>='a' && ch<='z' || ch>='A' && ch<='Z') 
    {
        alpha =  alpha+ ch
    }
   else if(ch>='0' && ch<='9')
    {
        num = num + ch
    }
    else{
        special = special + ch
    }
   
}
console.log(alpha);
console.log(num);
console.log(special);

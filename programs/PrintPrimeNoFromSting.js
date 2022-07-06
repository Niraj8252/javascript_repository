var str="123487"
var s=str.split("")
for (var i = 0; i < s.length; i++) {
    
    var ch = s[i]
    var n=2
    while(ch>n)
    {
    if(ch%n==0){
        break
    }
    
        n++
    }
if(ch==n){
    console.log(str[i]);
    }
}
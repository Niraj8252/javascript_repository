var s = "lavakumar"
// var str = s.split("")

// for(var i=0; i<str.length; i++)
// {
//     var count=0;
//    str.forEach((element)=>{
//     if(str[i]== (element))
//     {
//        count++
//     }
//     if(count>1){
//         console.log(str[i]+"  "+count);
//     }
//    })
// }

for (var i = 0; i < s.length; i++) {
    var ch = s.charAt(i)
    var count=0
    for(var j = 0; j<s.length; j++ )
    {
        var ch1 = s.charAt(j)
    
    if (ch==ch1 && i>j) {
        break;
    }
    if (ch==ch1) {
       count++; 
    }
}
    if(count>=1){
        console.log(s[i]+" "+count);
    }

}
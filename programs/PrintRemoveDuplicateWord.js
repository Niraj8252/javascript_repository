var str = "i am niraj kumar i am a good boy"
var str = str.split(" ")

for (var i = 0; i < str.length; i++) {
    
    var count=0
    for(var j = 0; j<str.length; j++ )
    {
    
    if (str[i]==str[j] && i>j) {
        break;
    }
    if (str[i]==str[j]) {
       count++; 
    }
}
    if(count==1){
        console.log(str[i]+" "+count);
    }

}
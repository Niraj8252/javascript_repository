var info = [{fname:"abc", address:"india"},
{fname:"def", address:"USA"},
{fname:"ghi", address:"Rassia"},
{fname:"jkl", address:"Europe"},
{fname:"mno", address:"india"},]

var str =""
var country =[]
for(var i = 0; i<info.length; i++)
{
     str =info[i]
    country.push(str.address)  
}
console.log(country);

for(var i=0; i<country.length;i++){
    var count=0
    for(var j=0; j<country.length;j++){
        if(country[i]==country[j] && i>j){
            break
        }
        if(country[i]==country[j]){
            count++
        }   
    }
    if(count>1){
        console.log(country[i]+" "+count);
    }
    if(count>0){
        console.log(country[i]+" "+count);
    }
}
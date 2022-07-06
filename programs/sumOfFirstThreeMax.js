var arr = [20,50,70,30,45,90,36]

for(var i = 0; i<arr.length; i++)
{
    for(var j=i+1; j<arr.length; j++)
    {
        if(arr[i]<arr[j])
        {
            var temp = arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}
console.log(arr);
var sum =0
for(var i = 0; i<3; i++)
{
    sum = sum+arr[i]
  
}
console.log("sum of first 3 max number : "+sum);
var arr = [20,70,50,25,15,55]

for(var i = 0; i<2; i++)
{
    var temp = arr[0]
    for(var j=1; j<arr.length; j++)
    {
        arr[j-1]= arr[j]
    }
    arr[arr.length-1]=temp
}
console.log(arr);

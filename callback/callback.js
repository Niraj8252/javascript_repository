// case 01 : callback

// function add(a,b,callback) {
//     callback();
//     console.log("the add function is executed");  
// }

// function sample() {
//     console.log("sample function is executed");
// }
// add(5,8,sample)

// case 02 : callback

// function add(callback) {
//     callback();
//     console.log("the add function is executed"); 
// }

// function sample() {
//     console.log("sample function is exesuted");
    
// }

// add(sample)

// case 03 : callback

function eccomerce(status) {
    var result = status()
    if(result() == "paymentsuccessfull")
    {
        console.log("product booked successfully");
}else{
    console.log("not booked");
}    
}
eccomerce(function paymentstatus() {
    return function () {
        return "paymentsuccessfull"
        
    }   
})

// step 1 : eccomerce() is being invoked
// step 02 : status() == paymentstatus()  ==> callback function , name has been overrided
//step 03 : invoking the paymentstatus() function
// step 04 : result == function(){                 ==>in line 30 (result is having annonymous function)
               //     return "paymentsuccessfull"
               // }

// step 05 : invoking the result function in line 31   
// step 06 : redirecting to line 39
// step 07 : return the data "paymentsuccessefull"
// step 08 : redirecting to line 31
// step 09 : if the returned data is matching with the condition provided in if statement  ==> if block will be executed or else         

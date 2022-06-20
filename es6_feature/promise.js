// var pro = new Promise((resolve,reject)=>{
//     var x = "xy"
//     var y = "tys"
//     if(x==y){
//         resolve("x and y are equal")
//     }
//     else{
//         reject("x and y not equal")
//     }
// })

// pro.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})

//=====================================================

async function sync() {
    console.log("login");
    
    //================================
    var p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("problem resolved")
        },2000)
    })
    //===============================================================
    await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
    //==================================================================
    console.log("logout");
}
sync()
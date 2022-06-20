// console.log("login");

// setTimeout(()=>{
//     console.log("this is tieout method1");
// },3000)


// setTimeout(()=>{
//     console.log("this is tieout method2");
// },1000)


// setTimeout(()=>{
//     console.log("this is tieout method3");
// },2000)

// console.log("logout");


//===============================e.log("login");


async function sync() {
    console.log("login");
var p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
            resolve("this is timeout method1");
        },2000)
})

 await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})

 var p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
            reject("this is timeout method2");
        },2000)
})

 await p1.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})

// setTimeout(()=>{
//     console.log("this is tieout method2");
// },2000)


// setTimeout(()=>{
//     console.log("this is tieout method3");
// },2000)


console.log("logout")
}
sync()
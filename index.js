// function myName(){
//     console.log("mohit singh");
// }
// let myfirstPromise = new Promise((resolve,reject)=>{
// console.log("hi");
// setTimeout(myName,5000);
// // resolve(1);
// // reject(new Error("promise not full filled"));
// });

// let promise1 = new Promise((resolve,reject)=>{
//     let ans = false;
//     if( ans){
//         resolve("promise is done");
//     }
//     else{
//         reject("promise is not fullfilled ");
//     }
// });

// promise1.then((message)=>{
// console.log("babau janti ho "+message);
// }).catch((error)=>{
// console.log("babbu janti ho "+error);
// });

// let promise2 = new Promise((resolve,reject)=>{
//     let car = "nano";
//     // let car ="jaguar";
//     if( car == "jaguar" ){
//         resolve("love you ");
//     }
//     else{
//         reject("hate you ");
//     }
// });

// promise2.then((message)=>{
//     console.log("babu jante ho"+message);
//     return "hotel chale";
// }).then((message)=>{
//     console.log("janu chalo "+message);
// }).catch((error)=>{
//     console.log("babbu"+error);
// }).finally((message)=>{
//     console.log("mai to promise hu ");
// });

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"1");
})
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"2");
})
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,5000,"3");
})

Promise.all([promise1,promise2,promise3])
.then((values)=>{
    console.log("valuse are "+ values);
})
.catch((error)=>{
    console.error( "erroe are "+error);
})
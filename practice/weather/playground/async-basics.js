console.log("starting App");
setTimeout(() => {
    console.log("inside timeout");
},2000)

setTimeout(() => {
    console.log("2nd inside timeout");
},0)
console.log("Finishing App");
/*
Call Stack
Node API
Callback Queue
*/
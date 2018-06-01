var asysncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a ==='number' && typeof b ==='number') {
                resolve(a+b);
            } else{
                reject('Arguments should be number');
            }            
        },1500);        
    });
};

asysncAdd(1, '1').then((result) => {
    console.log('Result: ', result);
    return asysncAdd(result, 10);
}).then((result) => {
    console.log('ChainResult: ', result);
}).catch((errorMessage) => {
    console.log(errorMessage);
});
// var somePromise = new Promise((resolve, reject) => {
//     // resolve("funny");
//     reject("unknown caption");
// });
// somePromise.then((message) => {
//     console.log("Success Message: ", message);
// }, (errorMessage) => {
//     console.log("Error Message: ", message);
// });
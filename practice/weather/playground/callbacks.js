var getUser = (id, callback) => {
    var user = {
        id,
        name: "Gopinath"
    }
    setTimeout(() => {
        callback(user);    
    },3000);    
}
getUser(52, (userObject) => {
    console.log(userObject);
});
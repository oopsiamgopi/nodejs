var square = (x) => x*x;

console.log(typeof square);
console.log(square(9));

var user = {
    name: "Gopinath",
    sayHi: () => {
        //this object will not be bind to arrow function
        console.log(`Hi ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi ${this.name}`);
    }
}

user.sayHi();
user.sayHiAlt();
user.sayHiAlt(1,2,3,4);
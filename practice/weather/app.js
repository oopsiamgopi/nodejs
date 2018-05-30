const yargs = require("yargs");
const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

const argv = yargs
.option({
    a:{
        demand: true,
        description: "Address to fetch",
        alias: "address",
        string: true
    }
})
.help()
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results);
        weather.getWeather(results.lat, results.long, (errorMesage, result) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`Temperature: ${result}`);
            }
        });
    }
});
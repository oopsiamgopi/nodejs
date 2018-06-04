const yargs = require("yargs");
const axios = require("axios");
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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDpFoJrtJa3sauQfOoV4VRF4sSK5AUUPp8`

axios.get(geocodeURL)
.then((response)=>{
    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;
    console.log("Address: ", response.data.results[0].formatted_address);
    console.log("Latitude: ", latitude);
    console.log("Longitude: ", longitude);

    var weatherURL = `https://api.darksky.net/forecast/afaf211030520b8ad0307578a7e92767/${latitude},${longitude}`;
    return axios.get(geocodeURL);
})
.then((response) => {
    console.log("Temperature: ", response.data.currently.temperature);
})
.catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log("Unbale to reach API server");
    } else {
        console.log(e.message);
    }
})
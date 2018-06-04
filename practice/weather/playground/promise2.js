const request = require("request");

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDpFoJrtJa3sauQfOoV4VRF4sSK5AUUPp8`,
            json: true
        },(error, response, body) => {
            if (error) {
                reject("Unbale to reach google server");
            } else if (body.status === 'ZERO_RESULTS') {
                reject("Address not found");
            } else if(body.status === 'OK') {
                resolve(body);
            }
        });
    });
};
geocodeAddress("639107").then((geoCodeResponse) => {
    console.log("Address: ", geoCodeResponse.results[0].formatted_address);
    console.log("Latitude: ", geoCodeResponse.results[0].geometry.location.lat);
    console.log("Longitude: ", geoCodeResponse.results[0].geometry.location.lng);
}, (errorMessage) => {
    console.log(errorMessage);
});
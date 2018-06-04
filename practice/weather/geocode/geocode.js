const request = require("request");

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDpFoJrtJa3sauQfOoV4VRF4sSK5AUUPp8`,
        json: true
    },(error, response, body) => {
        // console.log(JSON.stringify(body, undefined, 2));
        if (error) {
            callback("Unbale to reach google server");
        } else if (body.status === 'ZERO_RESULTS') {
            callback("Address not found");
        } else if(body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                long: body.results[0].geometry.location.lng
            });
        }
    });
    return 1;
};

module.exports = {
 geocodeAddress   
}
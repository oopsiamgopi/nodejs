var request = require("request");

request({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=siruseri",
    json: true
},(error, response, body) => {
    console.log(body);
});
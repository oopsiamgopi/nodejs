const request = require("request");

var getWeather = (latitude, longitude, callback) => {
    request({
        url:`https://api.darksky.net/forecast//${latitude},${longitude}`,
        json: true
    },(error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined,body.currently.temperature);
        } else{
            callback("unbale to fetch weather details");
        }
    });    
};

module.exports = {
    getWeather
};
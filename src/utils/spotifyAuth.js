var client_id = "64c9c56cb34345eea2a3eb334ea30cc3"; // Your client id
var client_secret = "a911991c607a4511990fddf6da2ca5e3"; // Your secret
var request = require("request");

var token;
exports.auth = function() {
    var authOptions = {
        url: "https://accounts.spotify.com/api/token",
        headers: {
            Authorization: "Basic " +
                new Buffer.from(client_id + ":" + client_secret).toString("base64")
        },
        form: {
            grant_type: "client_credentials"
        },
        json: true
    };

    request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            // use the access token to access the Spotify Web API
            token = body.access_token;
            console.log(token);
            return token;
        }
    });
};
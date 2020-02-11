var client_id = "64c9c56cb34345eea2a3eb334ea30cc3"; // Your client id
var client_secret = "a911991c607a4511990fddf6da2ca5e3"; // Your secret
var request = require("request");
var token;

exports.getPlaylist = async function(playlist_id) {
    var playlistNames = {};
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
            var options = {
                url: "https://api.spotify.com/v1/playlists/" + playlist_id + "/tracks",
                headers: {
                    Authorization: "Bearer " + token
                },
                json: true
            };

            request.get(options, function(error, res, body) {
                if (!error && response.statusCode === 200) {
                    playlistNames = makeArray(body.items);
                    console.log("Playlist: \n" + playlistNames);
                    return playlistNames;
                }
            });
        }
    });
};

function makeArray(list) {
    var playList = [];
    for (let index = 0; index < list.length; index++) {
        playList[index] = list[index].track.name;
    }
    return playList;
}
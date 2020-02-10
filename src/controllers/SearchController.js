const axios = require("axios");
const spotifyAuth = require("../utils/spotifyAuth");
module.exports = {
    async searchTemp(req) {
        try {
            const { city_name } = req.body;

            city_name[0].toUpperCase();

            let axiosTemperature = axios.create({
                baseURL: "http://api.openweathermap.org/data/2.5/weather?q=" +
                    city_name +
                    "&appid=b77e07f479efe92156376a8b07640ced&units=metric",
                timeout: 5000,
                headers: {
                    "Content-Type": "application/json"
                }
            });

            let tempResponse = await axiosTemperature.get().catch(err => {});
            let temperature = tempResponse.data.main.temp;
            let token = await spotifyAuth.auth();

            searchPlaylist(temperature, token);

            //return res.json(playlist);
        } catch (error) {
            console.log(error);
        }
    }
};

async function searchPlaylist(temp, token, res) {
    let playlist_id = "";

    if (temp > 30.0) {
        playlist_id = "4UvlO8zrSfNhncnU3WQBgj";
    } else if (temp >= 15.0) {
        playlist_id = "37i9dQZF1DX6aTaZa0K6VA";
    } else if (temp >= 10.0) {
        playlist_id = "37i9dQZF1DWXRqgorJj26U";
    } else {
        playlist_id = "37i9dQZF1DWWEJlAGA9gs0";
    }

    let axiosPlaylist = axios.create({
        baseURL: "https://api.spotify.com/v1/playlists/" + playlist_id + "/tracks",
        timeout: 5000,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        }
    });
    let data = await axiosPlaylist.get().catch(err => {});
    console.log(data);
    return res.json(data);
}
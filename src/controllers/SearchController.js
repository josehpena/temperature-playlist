const axios = require("axios");
const spotifyAuth = require("../utils/spotifyAuth");
const searchPlaylistID = require("../utils/searchPlaylistID");

module.exports = {
    async searchTemp(req, res) {
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
            let playlist_id = searchPlaylistID(temperature);

            let playlist = await spotifyAuth.getPlaylist(playlist_id);
            res.send("Playlist is on console!");
        } catch (error) {
            console.log(error);
        }
    }
};
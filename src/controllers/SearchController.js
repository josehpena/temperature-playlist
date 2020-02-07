const axios = require("axios");

module.exports = {
    async searchTemp(req) {
        try {
            const { city_name } = req.body;

            city_name[0].toUpperCase();

            let tempResponse = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=b77e07f479efe92156376a8b07640ced&units=metric`
            );
            let temperature = tempResponse.data.main.temp;

            return searchPlaylist(temperature);

            //return res.json(playlist);
        } catch (error) {
            console.log(error);
        }
    }
};

async function searchPlaylist(temp, res) {
    if (temp > 30.0) return console.log("Party Tracks");
    else if (temp >= 15.0) return console.log("Pop");
    else if (temp >= 10.0) return console.log("Rock");
    else return console.log("Classical");

    /*
                    const axiosInstance = axios.create({
                        baseURL: "https://api.spotify.com/v1/playlists/4oq9wx7oNEasiqNMxTB29G/tracks",
                        timeout: 5000,
                        headers: {
                            Authorization: "Bearer 08c1a6be652e4fdca07f1815bfd167e4",
                            "Content-Type": "application/json"
                        }
                    });

                    let data = await axiosInstance.get().catch(err => {});
                    console.log(data);
                    return res.json(data);
                    https://api.spotify.com/v1/playlists/{playlist_id}*/
}
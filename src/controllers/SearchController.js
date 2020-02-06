const axios = require("axios");

module.exports = {
    async searchTemp(req, res) {
        let { city_name } = req.params;
        console.log(city_name);
        city_name[0].toUpperCase();

        const tempResponse = await axios.get(
            "api.openweathermap.org/data/2.5/weather?q=${city_name}"
        );
        return res.json(tempResponse);
    }
};
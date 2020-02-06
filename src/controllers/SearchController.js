const axios = require("axios");

module.exports = {
    async searchTemp(req, res) {
        const { city_name } = req.body;
        city_name[0].toUpperCase();

        const tempResponse = await axios.get(
            "api.openweathermap.org/data/2.5/weather?q=${city_name}"
        );
        return res.json(tempResponse);
    }
};
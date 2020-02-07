const axios = require("axios");

module.exports = {
    async searchTemp(req, res) {
        try {
            const { city_name } = req.body;

            city_name[0].toUpperCase();

            let tempResponse = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=87a219ebc928e209b94f1e455f4a2917&units=metric`
            );
            let data = tempResponse.data;

            return res.json(data);
        } catch (error) {
            console.log(error);
        }
    }
};
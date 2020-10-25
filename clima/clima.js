const axios = require('axios')

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e3c6b41f507e5d0a53eb32bc18f1bb98&units=metric`)

    return resp.data.main.temp
}

module.exports = {
    getClima
}
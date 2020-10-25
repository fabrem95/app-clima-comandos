const axios = require('axios')


const getLocationLatLng = async (location) => {
    
    const encodeLocation = encodeURI(location)

    const instance = axios.create({
        baseURL: `http://api.weatherstack.com/current?access_key=7bcec0426d4e90f0b702779ab60445b5&query=${encodeLocation}`
    });
    
    const resp = await instance.get()

    if (resp.data.location.length === 0) {
        throw new Error (`No hay resultados para ${location}`)
    }

    const data = resp.data.location
    const direccion = data.name
    const lat = data.lat
    const lng = data.lon

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLocationLatLng
}
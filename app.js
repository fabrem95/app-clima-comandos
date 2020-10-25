const location = require('./location/location.js')
const clima = require('./clima/clima.js')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// location.getLocationLatLng(argv.direccion)
//     .then(console.log)

// clima.getClima(40.400, -3.683)
//     .then(console.log)
//     .catch(console.log)

const getIfo = async (dir) => {

    try {
        const coordenadas = await location.getLocationLatLng(dir)
        const temp = await clima.getClima(coordenadas.lat, coordenadas.lng)
    
        return `El clima de ${dir} es de ${temp}`
    } catch (error) {
        return `No se pudo determinar el clima de ${dir}`
    }


}

getIfo(argv.direccion)
    .then(console.log)
    .catch(console.log)
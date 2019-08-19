const weatherAPI = require( '../../services/weather/weather' );
const isPrimeDate = require( '../../utility/utility' );

const getWeather = ( req, res ) => {
    if(!isPrimeDate()) {
        return res.send( { success: false, error: 'Today\'s date is not prime... Unable to send data.' } );
    }

    weatherAPI( req.params.city, ( error, { weather, main, name } ) => {
        if( error ) {
            return res.send( { success: false, error: error } );
        } else {
            let message = `Current temperature in ${name} is ${main.temp} degree C, Min temperature: ${main.temp_min} degree C, Max temperature: ${main.temp_max} degree C, Forecast: ${weather[0].description}`;
            return res.status(200).send( { success: true, forecast: message } );
        }
    });
}

module.exports = getWeather;
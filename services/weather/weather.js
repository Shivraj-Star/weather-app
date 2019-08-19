const request = require('request');

const getWeatherDetails = ( cityname, callback ) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=3701cc107a462080c6630f187dbe5535`

    request( url, ( error, {body} ) => {
        let data = JSON.parse( body )

        if( error ) {
            callback( error, {} );
        } else if( 200 === data.cod ) {
            callback( null, data );
        } else {
            callback( data.message, {} )
        }
    })
}

module.exports = getWeatherDetails;
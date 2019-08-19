const express = require( 'express' );
const router = express.Router();
const getWeather = require( './weather' )

router.get( '/:city', getWeather );

module.exports = router;
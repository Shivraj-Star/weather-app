const express = require( 'express' );
const router = express.Router();
const weather = require( '../handler/weather' )

router.use( '/getweather/', weather );

module.exports = router;
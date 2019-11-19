const express = require('express');
const app = express();
const routes = require( './routes' );
const port = 8000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use( routes );

app.use(( req, res, next ) => {
    res.status(404).send( 'Not found' );
});
app.listen( port, () => {
    console.log( 'Server started......' );
} );

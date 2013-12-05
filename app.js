var express = require('express'),
    path = require('path'),
    restaurantWS = require('./server/ws/RestaurantWS'),
    menuItemWS = require('./server/ws/MenuItemWS');

var app = express();

app.configure(function() {
    app.set('port', process.env.PORT || 3000);
    app.use(express.compress());
    app.use(express.json());
    app.use(express.methodOverride());
    app.use(express.static(path.join(__dirname, 'public')));
});

if('development' == app.get('env')){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

restaurantWS.init(app);
menuItemWS.init(app);

app.listen(app.get('port'), function() {
        console.log("Express server listening on port " + app.get('port'));
});
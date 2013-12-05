var restaurantService = require('../service/RestaurantService');

exports.init = function(app) {
    app.get('/api/v1/restaurants', function(req, res) {
        restaurantService.findAll(function(error, restaurants) {
            res.send(restaurants);
        });
    });
    app.get('/api/v1/restaurant/:id', function(req, res) {
        restaurantService.findById(req.params.id, function(error, restaurant) {
            if(!error)
                res.send(restaurant);
            else
                res.status(404).send(error);
        });
    });
    app.del('/api/v1/restaurant/:id', function(req, res) {
        restaurantService.delete(req.params.id, function(error) {
            if(!error)
                res.send(204);
            else
                res.status(404).send(error);
        });
    });
    app.post('/api/v1/restaurants', function(req, res) {
        var restaurant = req.body;
        restaurantService.add(restaurant, function(error, restaurant) {
            if(!error)
                res.status(201).send(restaurant);
            else
                res.status(400).send(error);
        });
    });
    app.put('/api/v1/restaurant/:id', function(req, res) {
        var restaurant = req.body;
        restaurantService.update(req.params.id, restaurant, function(error, restaurant) {
            if(!error)
                res.status(201).send(restaurant);
            else
                res.status(404).send(error);
        });
    });
}
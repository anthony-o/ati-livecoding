var menuItemService = require('../service/MenuItemService');

exports.init = function(app) {
    app.get('/api/v1/restaurant/:id/menuitems', function(req, res) {
        menuItemService.findAllByIdRestaurant(req.params.id, function(error, menuItems){
            res.send(menuItems);
        });
    });
    app.get('/api/v1/restaurant/:idRestaurant/menuitem/:id', function(req, res) {
        menuItemService.findOneById(req.params.idRestaurant, req.params.id, function(error, menuItem) {
            if(!error)
                res.send(menuItem);
            else
                res.status(404).send(error);
        });
    });
    app.post('/api/v1/restaurant/:id/menuitems', function(req, res) {
        var menuitem = req.body;
        menuItemService.add(req.params.id, menuitem, function(error, menuitem) {
            if(!error)
                res.status(201).send(menuitem);
            else
                res.status(400).send(error);
        });
    });
    app.del('/api/v1/restaurant/:idRestaurant/menuitem/:id', function(req, res) {
        menuItemService.delete(req.params.idRestaurant, req.params.id, function(error) {
            if(!error)
                res.send(204);
            else
                res.status(404).send(error);
        });
    });
    app.put('/api/v1/restaurant/:idRestaurant/menuitem/:id', function(req, res) {
        var menuitem = req.body;
        menuItemService.update(req.params.id, menuitem, function(error, menuitem) {
            if(!error)
                res.status(201).send(menuitem);
            else
                res.status(404).send(error);
        });
    });
}
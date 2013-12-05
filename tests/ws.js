var request = require('superagent');
var expect = require('expect.js');

describe('Suite Restaurant', function(){
    it('must return restaurants', function (done){
        request.get('localhost:3000/api/v1/restaurants').end(function(res){
            expect(res).to.exist;
            expect(res.status).to.equal(200);
            done();
        });
    });
    it('must return restaurant', function (done){
        request.get('localhost:3000/api/v1/restaurant/1').end(function(res){
            expect(res).to.exist;
            expect(res.status).to.equal(200);
            done();
        });
    });
    it('must add restaurant', function(done){
        request.post('localhost:3000/api/v1/restaurants').send({nom: 'Restaurant 3', type: 1}).end(function(res){
            expect(res).to.exist;
            expect(res.status).to.equal(201);
            expect(res.body.nom).to.equal('Restaurant 3');
            done();
        });
    });
    it('must update restaurant', function(done){
        request.put('localhost:3000/api/v1/restaurant/3').send({nom: 'Nouveau restaurant 3', type: 2}).end(function(res){
            expect(res).to.exist;
            expect(res.status).to.equal(201);
            expect(res.body.nom).to.equal('Nouveau restaurant 3');
            done();
        });
    });
    it('must delete restaurant', function(done){
        request.del('localhost:3000/api/v1/restaurant/3').end(function(res){
            expect(res.status).to.equal(204);
            done();
        });
    });
});

describe('Suite Menu Item', function(){
    it('must return restaurant menu items', function (done){
        request.get('localhost:3000/api/v1/restaurant/1/menuitems').end(function(res){
            expect(res).to.exist;
            expect(res.status).to.equal(200);
            done();
        });
    });
    it('must return restaurant menu item', function (done){
        request.get('localhost:3000/api/v1/restaurant/1/menuitem/1').end(function(res){
            expect(res).to.exist;
            expect(res.status).to.equal(200);
            done();
        });
    });
    it('must add restaurant menu item', function(done){
        request.post('localhost:3000/api/v1/restaurant/1/menuitems').send({nom: 'Sushis', pu: 2, idRestaurant: 1}).end(function(res){
            expect(res).to.exist;
            expect(res.status).to.equal(201);
            expect(res.body.nom).to.equal('Sushis');
            done();
        });
    });
    it('must update restaurant menu item', function(done){
        request.put('localhost:3000/api/v1/restaurant/1/menuitem/3').send({nom: 'Nems', pu: 3 }).end(function(res){
            expect(res).to.exist;
            expect(res.status).to.equal(201);
            console.log(res.body.nom);
            expect(res.body.nom).to.equal('Nems');
            done();
        });
    });
    it('must delete restaurant menu item', function(done){
        request.del('localhost:3000/api/v1/restaurant/1/menuitem/3').end(function(res){
            expect(res.status).to.equal(204);
            done();
        });
    });
});
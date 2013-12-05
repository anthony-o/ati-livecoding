var restaurantCounter = 1,
        dummyData = [];


exports.findAll = function(callback){
    callback(null, dummyData);
};

exports.findById = function(id, callback){
    var result = null, error = null;
    for(var i = 0; i < dummyData.length; i++){
        if(dummyData[i]._id == id){
            result = dummyData[i];
            break;
        }
    }
    if(result == null)
        error = 'restaurant not found';
    callback(error, result);
};

exports.save = function(restaurants, callback){
    var dummyDataLength = dummyData.length, error = null;
    for (var i = 0; i < restaurants.length; i++){
        restaurant = restaurants[i];
        restaurant._id = restaurantCounter ++;
        dummyData.push(restaurant);
    }
    if(dummyData.length == dummyDataLength)
        error = '0 restaurant inserted';
    callback(error, restaurants);
};

exports.add = function(restaurant, callback){
    var dummyDataLength = dummyData.length, error = null;
    restaurant._id = restaurantCounter ++;
    dummyData.push(restaurant);
    if(dummyData.length == dummyDataLength)
        error = '0 restaurant inserted';
    callback(error, restaurant);
};

exports.update = function(id, restaurant, callback){
    var error = null, result = null;
    for(var i = 0; i < dummyData.length; i++){
        if(dummyData[i]._id == id){
            extend(dummyData[i], restaurant);
            result = dummyData[i];
            isUpdated = true;
            break;
        }
    }
    if(!result)
        error = 'restaurant not found';
    callback(error, result);
};

function extend(a, b){
    for(var key in b)
        if(a.hasOwnProperty(key))
            a[key] = b[key];
    return a;
}

exports.delete = function(id, callback){
    var isDeleted = false, error = null;
    for (var i = 0; i < dummyData.length; i++) {
        if(dummyData[i]._id == id){
            dummyData.splice(i,1);
            isDeleted = true;
        }
    }
    if(!isDeleted)
        error = 'restaurant not found';
    callback(error);
};

exports.save([
    {nom: 'Restaurant 1', type: 1},
    {nom: 'Restaurant 2', type: 2}
], function(error, restaurants){});
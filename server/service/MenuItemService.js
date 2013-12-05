var menuItemCounter = 1,
        dummyData = [];

exports.findAllByIdRestaurant = function(id, callback){
    var result = [], error = null;
    for(var i = 0; i < dummyData.length; i++){
        if(dummyData[i].idRestaurant == id){
            result.push(dummyData[i]);
            break;
        }
    }
    callback(error, result);
};

exports.findOneById = function(idRestaurant, idMenuItem, callback){
    var result = null, error = null;
    for(var i = 0; i < dummyData.length; i++){
        if(dummyData[i]._id == idMenuItem && dummyData[i].idRestaurant == idRestaurant){
            result = dummyData[i];
            break;
        }
    }
    if(result == null)
        error = 'menu item not found';
    callback(error, result);
};

exports.save = function(menuItems, callback){
    var dummyDataLength = dummyData.length, error = null;
    for (var i = 0; i < menuItems.length; i++){
        menuItem = menuItems[i];
        menuItem._id = menuItemCounter ++;
        dummyData.push(menuItem);
    }
    if(dummyData.length == dummyDataLength)
        error = '0 menu item inserted';
    callback(error, menuItems);
};

exports.add = function(idRestaurant, menuItem, callback){
    var dummyDataLength = dummyData.length, error = null;
    menuItem._id = menuItemCounter ++;
    menuItem.idRestaurant = idRestaurant;
    dummyData.push(menuItem);
    if(dummyData.length == dummyDataLength)
        error = '0 menu item inserted';
    callback(error, menuItem);
};

exports.update = function(id, menuitem, callback){
    var error = null, result = null;
    for(var i = 0; i < dummyData.length; i++){
        if(dummyData[i]._id == id){
            extend(dummyData[i], menuitem);
            result = dummyData[i];
            isUpdated = true;
            break;
        }
    }
    if(!result)
        error = 'menu item not found';
    callback(error, result);
};

function extend(a, b){
    for(var key in b)
        if(a.hasOwnProperty(key))
            a[key] = b[key];
    return a;
}

exports.delete = function(idRestaurant, idMenuItem, callback){
    var isDeleted = false, error = null;
    for (var i = 0; i < dummyData.length; i++) {
        if(dummyData[i]._id == idMenuItem && dummyData[i].idRestaurant == idRestaurant){
            dummyData.splice(i,1);
            isDeleted = true;
        }
    }
    if(!isDeleted)
        error = 'menu item not found';
    callback(error);
};

exports.save([
    {nom: 'Pâtes', pu: 5.25, idRestaurant: 1},
    {nom: 'Sandwish', pu: 2, idRestaurant: 2}
], function(error, menuItems){});
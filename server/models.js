let mongoose = require("mongoose");
let uri = 'mongodb://localhost:27017/test';

module.exports = function(wagner){
    mongoose.connect(uri);
    let Category = mongoose.model('Category', require('./category'));
    wagner.factory('Category', function() {
        return Category;
    });

    return {
        Category: Category
    }
};

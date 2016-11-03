let express = require('express'),
    status = require('http-status');

module.exports =  function(wagner) {
    let api = express.Router();

    api.get('/category/id/:id', wagner.invoke(function(Category) {
        return function(req, res) {
            console.log(req.params.id);
            Category.find({_id: req.params.id}, function(error, category) {
                if (error) {
                    return res.status(status.INTERNAL_SERVER_ERROR).json({error: error.toString()});
                }
                if (!category) {
                    return res.status(status.NOT_FOUND).json({error: 'Not Found'})
                }
                res.json({category: category});
            });
        }
    }));

    api.get('/category/parent/:id', wagner.invoke(function (Category) {
        return function (req, res) {
            Category.find({parent: req.params.id}).sort({_id: 1}).exec(function (error, categories) {
                if (error) {
                    return res.status(status.INTERNAL_SERVER_ERROR).json({error: error.toString()});
                }
                res.json({category: categories})
            })
        }
    }));
    
    return api;
};

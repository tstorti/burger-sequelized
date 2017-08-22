

var db = require("../models");

// Routes
var router = {
    //landing page for app - render all burgers, handlebars index template will categorize based on devoured state
    index: function(app){
        app.get("/", function(req, res) {
            db.Burger.findAll({}).then(function(result1) {
                db.Customer.findAll({}).then(function(result2){
                    res.render("index", {
                        "burgers": result1,
                        "customers": result2,
                    });
                });
            });
        });
    },

    //runs post script to add a new burger to the database
    add: function(app){
        app.post("/add",function(req,res){
            db.Burger.create(req.body).then(function(results){
                res.send({result: 'redirect', url:'/'});
            });
        });
    },

    new: function(app){
        app.post("/new",function(req,res){
            db.Customer.create(req.body).then(function(results){
                res.send({result: 'redirect', url:'/'});
            });
        });
    },
    //updates devoured status to true.
    devour: function(app){
        app.post("/devour",function(req,res){
            db.Burger.update({
                devoured: true,
                CustomerId: req.body.customer
            }, {
                where: {
                    id: req.body.id
                }
            }).then(function(results){
                res.send({result: 'redirect', url:'/'});
            });
        });
    }
};

module.exports = router;


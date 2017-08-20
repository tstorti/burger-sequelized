

var express = require("express");

// Routes
var router = {
    //landing page for app - render all burgers, handlebars index template will categorize based on devoured state
    index: function(app){
        app.get("/", function(req, res) {
           
        });
    },

    //runs post script to add a new burger to the database
    add: function(app){
        app.post("/add",function(req,res){
          
        });
    },
    devour: function(app){
        app.post("/devour",function(req,res){
            
        });
    }
};

module.exports = router;


// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var router = require("./controllers/burgers_controller.js");

// Create an instance of the express app.
var app = express();

// Specify the port.
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// //use logic and css files linked on main.handlebars
app.use(express.static(__dirname + '/'));

//always shows main layout, route will determine what gets rendered inside of {{{body}}}
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Router
// =============================================================
router.index(app);
router.add(app);
router.new(app);
router.devour(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});
  




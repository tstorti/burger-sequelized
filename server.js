// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var router = require("./controllers/burgers_controller.js");

// Create an instance of the express app.
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// //use logic and css files linked on main.handlebars
app.use(express.static(__dirname + '/'));

// Specify the port.
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

//always shows main layout, route will determine what gets rendered inside of {{{body}}}
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//router.  See burgers_controller.js for logic.
router.index(app);
router.add(app);
router.devour(app);

// Initiate the listener.
app.listen(PORT);

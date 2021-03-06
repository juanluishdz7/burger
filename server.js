var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var orm = require("./config/orm.js");


// orm.select("*");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(process.cwd() + '/public'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



var routes = require("./controllers/burgers_controller.js");
app.use('/',routes);
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
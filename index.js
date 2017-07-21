// server.js

// BASE SETUP
// =============================================================================
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/local');
//mongoose.connect('mongodb://admin:123456@ds161032.mlab.com:61032/kocsis-portal-db');
var Project = require('./app/models/project');
var Phase = require('./app/models/phase');
var EstimatingFactor = require('./app/models/estimatingFactor');

// call the packages we need
var express = require('express');        // call express
var cors = require('cors');
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var routes = require('./app/routes/routes');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9090;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router
// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    next(); // make sure we go to the next routes and don't stop here
});
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

routes(router);

router.route('/statistics').get(function (req, res) {
    statistics = { projectCount: 0, phaseCount: 0, estFactCount: 0, projectCostProfitData: [] };
    Project.count({}, function (err, count) {
        statistics.projectCount = count;
        Phase.count({}, function (err, count) {
            statistics.phaseCount = count;
            EstimatingFactor.count({}, function (err, count) {
                statistics.estFactCount = count;
                res.send(statistics);
            });
        })
    });
});
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use(cors());
app.use('/api', router);
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

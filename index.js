// server.js

// BASE SETUP
// =============================================================================
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/local');
var Phase = require('./app/models/phase');
var Project = require('./app/models/project');
var EstimatingFactor = require('./app/models/estimatingfactor');

// call the packages we need
var express = require('express');        // call express
var cors = require('cors');
var app = express();                 // define our app using express
var bodyParser = require('body-parser');

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


router.route('/projects').get(function (req, res) {
    console.log('get geldi');
    Project.find({}, function (err, projects) {
        if (err) throw err;
        // object of all the users
        res.send(projects);
    });
}
);

router.route('/projects').delete(function (req, res) {
    Project.findByIdAndRemove({ _id: new mongoose.mongo.ObjectID(req.body._id) }, function (err) {
        if (err) {
            res.send('{message: error}');
            console.log(err);
        } else {
            res.send('{message: succesfully deleted}');
        }
    })
}
);


router.route('/projects')
    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function (req, res) {
        var newProject = new Project();
        newProject.projectName = req.body.projectName;
        newProject.customer = req.body.customer;
        newProject.description = req.body.description;
        newProject.projectPhase = req.body.projectPhase;

        newProject.save(function (err) {
            if (err) {
                res.send('{message: error}');
                console.log(err);
            } else {
                res.send("OK")
                console.log('message: project succesfully added');
            }
        });

    });
router.route('/phases')
    .post(function (req, res) {

        console.log(req.body);
        var newPhase = new Phase();
        newPhase._project = req.body.projectId;
        newPhase.pManagement = req.body.pManagement;
        newPhase.analysis = req.body.analysis;
        newPhase.design = req.body.design;
        newPhase.dev = req.body.dev;
        newPhase.unitTest = req.body.unitTest;
        newPhase.intTest = req.body.intTest;
        newPhase.uat = req.body.uat;
        newPhase.solArch = req.body.solArch;
        newPhase.codeMergeReg = req.body.codeMergeReg;

        newPhase.save(function (err) {
            if (err) {
                res.send('{message: phase error}');
                console.log(err);
            } else {
                console.log('message: phase succesfully added');
            }
        });

    });



router.route('/phases').get(function (req, res) {
    Phase.find({}).populate('_project', 'projectName').exec(function (err, phases) {
        if (err) throw err;
        // object of all the users
        res.send(phases);
    });

}
);

router.route('/phases').delete(function (req, res) {
    Phase.findByIdAndRemove({ _id: new mongoose.mongo.ObjectID(req.body._id) }, function (err) {
        if (err) {
            res.send('{message: error}');
            console.log(err);
        } else {
            res.send('{message: succesfully deleted}');
        }
    })
}
);

router.route('/estimatingfactors').delete(function (req, res) {
    EstimatingFactor.findByIdAndRemove({ _id: new mongoose.mongo.ObjectID(req.body._id) }, function (err) {
        if (err) {
            res.send('{message: error}');
            console.log(err);
        } else {
            res.send('{message: succesfully deleted}');
        }
    })
}
);

router.route('/estimatingfactors').get(function (req, res) {
    EstimatingFactor.find({}).populate('_project', 'projectName').exec(function (err, estFactors) {
        if (err) throw err;
        // object of all the users
        res.send(estFactors);
    });

}
);
router.route('/estimatingfactors')
    .post(function (req, res) {

        console.log(req.body);
        var newEstFactor = new EstimatingFactor();
        newEstFactor._project = new mongoose.mongo.ObjectID(req.body.projectId);
        newEstFactor.component = req.body.component;
        newEstFactor.complexity = req.body.complexity;
        newEstFactor.newOrModified = req.body.newOrModified;
        newEstFactor.value = req.body.value;

        newEstFactor.save(function (err) {
            if (err) {
                res.send('{message: phase error}');
                console.log(err);
            } else {
                console.log('message: est factor succesfully added');
                res.send('message: est factor succesfully added');
            }
        });

    });

router.route('/statistics').get(function (req, res) {
    statistics = { projectCount: 0, phaseCount: 0, estFactCount: 0 };
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

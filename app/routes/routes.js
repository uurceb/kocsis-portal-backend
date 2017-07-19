'use strict';
module.exports = function (router) {
  var project = require('../controllers/projectController');
  var phase = require('../controllers/phaseController');
  var estFact = require('../controllers/estFactController');
  
  // project Routes
  router.route('/projects')
    .get(project.listAllProjects)
    .post(project.createAProject)
    .delete(project.deleteAProject);

  router.route('/projects/:_id')
    .get(project.readAProject);

    //phase routes
  router.route('/phases')
    .get(phase.listAllPhases)
    .post(phase.createAPhase)
    .delete(phase.deleteAPhase);

  router.route('/phases/:_id')
    .get(phase.readAPhase);

    //estimating factors routes
  router.route('/estimatingfactors')
    .get(estFact.listAllEstimationFactors)
    .post(estFact.createAEstimationFactor)
    .delete(estFact.deleteAEstimationFactor);

  router.route('/estimatingfactors/:_id')
    .get(estFact.readAEstimationFactor);
};
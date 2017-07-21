'use strict';
module.exports = function (router) {
  var project = require('../controllers/projectController');
  var phase = require('../controllers/phaseController');
  var estFact = require('../controllers/estFactController');
  var component = require('../controllers/componentController');
  var complexity = require('../controllers/complexityController');
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

  router.route('/phases/getPhaseByProjectId/:_id').get(
    phase.readAPhaseByProjectId
  );

  router.route('/phases/:_id')
    .get(phase.readAPhase);

  //estimating factors routes
  router.route('/estimatingfactors')
    .get(estFact.listAllEstimationFactors)
    .post(estFact.createAEstimationFactor)
    .delete(estFact.deleteAEstimationFactor);

  router.route('/estimatingfactors/:_id')
    .get(estFact.readAEstimationFactor);
  router.route('/estimatingfactors/getEstFactorsByProjectId/:_id')
    .get(estFact.readEstimationFactorsByProjectId);

  router.route('/components')
    .get(component.listAllComponents)
    .post(component.createAComponent);

  router.route('/complexities')
    .get(complexity.listAllComplexities)
    .post(complexity.createAComplexity);
};
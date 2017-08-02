'use strict';
module.exports = function (router) {
  var project = require('../controllers/projectController');
  var phase = require('../controllers/phaseController');
  var estFact = require('../controllers/estFactController');
  var component = require('../controllers/componentController');
  var complexity = require('../controllers/complexityController');
  var category = require('../controllers/categoryController');
  var inventoryItem = require('../controllers/inventoryItemController');
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
  router.route('/estimatingfactors/getEstFactorsByCatId/:_id')
    .get(estFact.readEstimationFactorsByCatId);

  router.route('/components')
    .get(component.listAllComponents)
    .post(component.createAComponent);
    
  router.route('/components/getCompByCatId/:_id')
  .get(component.readComponentsByCatId);

  router.route('/complexities')
    .get(complexity.listAllComplexities)
    .post(complexity.createAComplexity);

    router.route('/categories')
    .get(category.listAllCategories)
    .post(category.createACategory);

  router.route('/inventoryitems')
    .get(inventoryItem.listAllInventoryItems)
    .post(inventoryItem.createAnInventoryItem)
    .delete(inventoryItem.deleteAnInventoryItem);

  router.route('/inventoryitems/getInventoryItemsByProjectId/:_id')
    .get(inventoryItem.readInventoryItemsByProjectId)
};
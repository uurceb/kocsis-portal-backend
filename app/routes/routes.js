'use strict';
module.exports = function (router) {
  var project = require('../controllers/projectController');
  var phase = require('../controllers/phaseController');
  var estFact = require('../controllers/estFactController');
  var component = require('../controllers/componentController');
  var complexity = require('../controllers/complexityController');
  var category = require('../controllers/categoryController');
  var status = require('../controllers/statusController');
  var inventoryItem = require('../controllers/inventoryItemController');
  var user = require('../controllers/userController');
  var comment = require('../controllers/commentController');
  // project Routes
  router.route('/projects')
    .get(project.listAllProjects)
    .post(project.createAProject)
    .delete(project.deleteAProject)
    .put(project.updateAProject);

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
    .post(component.createAComponent)
    .delete(component.deleteAComponent);

  router.route('/components/getCompByCatId/:_id')
    .get(component.readComponentsByCatId);

  router.route('/complexities')
    .get(complexity.listAllComplexities)
    .post(complexity.createAComplexity)
    .delete(complexity.deleteAComplexity);

  router.route('/categories')
    .get(category.listAllCategories)
    .post(category.createACategory)
    .delete(category.deleteACategory);

    router.route('/projectstatus')
    .get(status.listAllStatus)
    .post(status.createAStatus)
    .delete(status.deleteAStatus);

  router.route('/inventoryitems')
    .get(inventoryItem.listAllInventoryItems)
    .post(inventoryItem.createAnInventoryItem)
    .delete(inventoryItem.deleteAnInventoryItem);

  router.route('/inventoryitems/getInventoryItemsByProjectId/:_id')
    .get(inventoryItem.readInventoryItemsByProjectId)

  router.route('/users')
    .get(user.listAllUsers)
    .post(user.createAUser)
    .delete(user.deleteAUser);

    router.route('/comments')
    .get(comment.listAllComments)
    .post(comment.createAComment)
    .delete(comment.deleteAComment);

    router.route('/comments/getCommentsByObjectId/:_id')
    .get(comment.readCommentsByProjectId)
};
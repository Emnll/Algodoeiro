const express = require('express');
const userController = require('../controllers/MaterialController');

const router = express.Router();

router
  .route('/')
  .get(userController.getAllMateriais)
  .post(userController.createMaterial);

router
  .route('/:id')
  .get(userController.getMaterial)
  .patch(userController.updateMaterial)
  .delete(userController.deleteMaterial);

module.exports = router;
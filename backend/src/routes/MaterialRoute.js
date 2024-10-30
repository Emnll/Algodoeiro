const express = require('express');
const materialController = require('../controllers/MaterialController');

const router = express.Router();

router
  .route('/')
  .get(materialController.getAllMateriais)
  .post(materialController.createMaterial);

router
  .route('/:id')
  .get(materialController.getMaterial)
  .patch(materialController.updateMaterial)
  .delete(materialController.deleteMaterial);

module.exports = router;
const express = require('express');
const userController = require('../controllers/ProjetoController');

const router = express.Router();

router
  .route('/')
  .get(userController.getAllProjetos)
  .post(userController.createProjeto);

router
  .route('/:id')
  .get(userController.getProjeto)
  .patch(userController.updateProjeto)
  .delete(userController.deleteProjeto);

module.exports = router;
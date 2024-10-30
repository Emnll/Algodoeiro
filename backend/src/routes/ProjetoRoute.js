const express = require('express');
const projetoController = require('../controllers/ProjetoController');

const router = express.Router();

router
  .route('/')
  .get(projetoController.getAllProjetos)
  .post(projetoController.createProjeto);

router
  .route('/:id')
  .get(projetoController.getProjeto)
  .patch(projetoController.updateProjeto)
  .delete(projetoController.deleteProjeto);

module.exports = router;
import express from 'express';
import BaseController from '../controllers/base.controller';

const router = express.Router();

router
  .get('/', BaseController.getAll)
  .get('/:id', BaseController.getById)
  .post('/', BaseController.create)
  .put('/:id', BaseController.update)
  .delete('/:id', BaseController.delete);

export default router;
import { Request, Response, NextFunction } from 'express';
import BaseService from '../services/base.service';

class BaseController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const items = await BaseService.findAll();
      res.json(items);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = +req.params.id;
      const item = await BaseService.findById(id);
      if (!item) res.status(404).json({ message: 'Not found' });
      res.json(item);
    } catch (error) {
      next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const newItem = await BaseService.create(data);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = +req.params.id;
      const data = req.body;
      const updatedItem = await BaseService.update(id, data);
      res.json(updatedItem);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = +req.params.id;
      await BaseService.delete(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default BaseController;
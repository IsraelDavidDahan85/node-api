import express from 'express';
import SubscriptionController from '../controllers/subscription-controller.js';
import auth from '../middlewares/auth.js';
const router = express.Router();

export default class SubscriptionRouter {
    constructor() {
        router.get('/', SubscriptionController.getAll);
        router.get('/:id', SubscriptionController.getById);
        router.post('/', SubscriptionController.create);
        router.put('/:id', SubscriptionController.update);
        router.delete('/:id', SubscriptionController.delete);
    }

    getRouter() {
        return router;
    }
}
import express from 'express';
import SubscriptionTypeController from '../controllers/subscription-type-controller.js';

const router = express.Router();

export default class SubscriptionTypeRouter {
    constructor() {
        router.get('/', SubscriptionTypeController.getAll);
        router.get('/:id', SubscriptionTypeController.getById);
        router.post('/', SubscriptionTypeController.create);
        router.put('/:id', SubscriptionTypeController.update);
        router.delete('/:id', SubscriptionTypeController.delete);
    }

    getRouter() {
        return router;
    }
}
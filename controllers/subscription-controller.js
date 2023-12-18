import subcriptionService from '../services/subscription-service.js';

export default class SubscriptionController {
    static async getAll(req, res) {
        try {
            const subscriptions = await subcriptionService.getAll();
            if (!subscriptions) {
                return res.status(404).json({msg: "Subscriptions not found"});
            }
            return res.status(200).json(subscriptions);
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    }

    static async getById(req, res) {
        try {
            const subscription = await subcriptionService.getById(req.params.id);
            if (!subscription) {
                return res.status(404).json({msg: "Subscription not found"});
            }
            res.status(200).json(subscription);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    static async create(req, res) {
        try {
            const subscription = await subcriptionService.create(req.body);
            if (!subscription) {
                return res.status(404).json({msg: "Subscription not found"});
            }
            res.status(200).json(subscription);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    static async update(req, res) {
        try {
            const subscription = await subcriptionService.update(req.params.id, req.body);
            if (!subscription) {
                return res.status(404).json({msg: "Subscription not found"});
            }
            res.status(200).json(subscription);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    static async delete(req, res) {
        try {
            const subscription = await subcriptionService.deleteById(req.params.id);
            if (!subscription) {
                return res.status(404).json({msg: "Subscription not found"});
            }
            res.status(200).json(subscription);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }
}
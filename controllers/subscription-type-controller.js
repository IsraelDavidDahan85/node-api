import subcriptionTypeService from '../services/subscription-type-service.js';

export default class SubscriptionTypeController {
    static async getAll(req, res) {
        try {
            const subscriptions = await subcriptionTypeService.getAll();
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
            const subscription = await subcriptionTypeService.getById(req.params.id);
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
            const subscription = await subcriptionTypeService.create(req.body);
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
            const subscription = await subcriptionTypeService.update(req.params.id, req.body);
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
            const subscription = await subcriptionTypeService.deleteById(req.params.id);
            if (!subscription) {
                return res.status(404).json({msg: "Subscription not found"});
            }
            res.status(200).json(subscription);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }
}
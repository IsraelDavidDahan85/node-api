import SubscriptionRouter from "./subscription-routes.js";
import SubscriptionTypeRouter from "./subscription-type-routes.js";
import UserRouter from "./user-routes.js";
import { Router } from "express";

const router = Router();

router.get("/healthz", (req, res) => {
    res.status(200).json({ status: "ok" });
});

router.get("/readyz", (req, res) => {
    res.status(200).json({ status: "ok" });
});

router.use("/users", new UserRouter().getRouter());
router.use("/subscriptions", new SubscriptionRouter().getRouter());
router.use("/subscriptions-type", new SubscriptionTypeRouter().getRouter());

export default router;
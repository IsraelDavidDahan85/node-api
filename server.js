import express from "express";
import cors from "cors";

import UserRouter from "./routers/user-routes.js";
import SubscriptionRouter from "./routers/subscription-routes.js";
import SubscriptionTypeRouter from "./routers/subscription-type-routes.js";
import { syncModels } from "./database/index.js";

const port = process.env.PORT || 3000;
const app = express();

//connect to db and sync models
syncModels();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors
var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }  
  
app.use(cors(corsOptions));

//routes
app.use("/users", new UserRouter().getRouter());
app.use("/subscriptions", new SubscriptionRouter().getRouter());
app.use("/subscriptions-type", new SubscriptionTypeRouter().getRouter());

app.get("/", (req, res) => {
    res.send({msg: "Hello World"});
    }
);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    }
);


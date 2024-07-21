import express from "express";
import cors from "cors";

import router from "./routers/index.js";
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
app.use("/api", router);

app.get("/", (req, res) => {
    res.send({msg: "Hello World"});
    }
);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    }
);


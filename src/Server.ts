import * as express from "express";
import * as bodyParser from "body-parser";

import { errorHandeler, notFoundRoute } from "./lib/routes";
import router from "./router";

export default class Server {
    private app: express.Express

    constructor(private config: any) {
        this.app = express();
    }

    get application() {
        return this.app;
    };

    public bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this.app;
    };
    public setupRoutes() {
        this.app.use('/health-check', function (req, res) {
            res.send('I am OK');
        })
        this.app.use("/api", router)
        this.app.use(errorHandeler);
        this.app.use(notFoundRoute);
    };
    public run() {
        const { port, env } = this.config;
        this.app.listen(port, () => {
            console.log("server is running on port", port);
        });
        return this;
    };
    private initBodyParser() {
        const { app } = this;
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

    }

};

import * as express from "express";

export default class Server {
    private app: express.Express

    constructor(private config: any) {
        this.app = express();
    }

    get application() {
        return this.app;
    };

    public bootstrap() {

        this.setupRoutes();
        return this.app;
    };
    public setupRoutes() {

        this.app.use('/health-check', function (req, res) { 
            res.send('I am OK');
        })

    };

    public run() {
        const { port, env } = this.config;
        this.app.listen(port, () => {
           
            console.log("server is running on port", port);

        });
        return this;
    };






};
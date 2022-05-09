import { config } from "dotenv";

config();

import { IConfig } from "./IConfig";
const envVrs: NodeJS.ProcessEnv = process.env;

const configrations: IConfig = Object.freeze({
    port: envVrs.PORT,
    env: envVrs.ENV,
    key:envVrs.key,
});
export default configrations;

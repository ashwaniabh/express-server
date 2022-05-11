import * as jwt from "jsonwebtoken"
import configrations from "../../config/configuration";
import { hasPermission } from "../../../extraTs/utils";

export default (module, type) => async (req, res, next) => {
    const { authorization } = req.headers;//const token = req.header('Authorization');
    const { key } = configrations;
    if (!authorization) {
        return next({
            error: "Unauthorized",
            message: "Token Not found",
            status: 403,
        })
    }
    try {
        const user = jwt.decode(authorization.replace(/^Bearer\s/, ''), key);
        if (!user) {
            return next({
                error: "Unauthorized",
                message: "user Not authorized",
                status: 403,
            })
        }
        if (!hasPermission(module, user.role, type)) {
            return next({
                error: "Unauthorized",
                message: "user Not authorized",
                status: 403,
            })
        }
        req.user = user;
        next();
    } catch (error) {
        return next({
            error: "Unauthorized",
            message: "User Not authorized",
            status: 403,
        })
    }
}
import { Request, Response, NextFunction } from 'express';
class UserController {
    get(req: Request, res: Response) {
        console.log("inside get req of user controller");
        const data = [{
            name: "User1",
        },
        {
            name: "User2",
        }];
        res.status(200).send({
            message: "Succesfully fetched Users",
            data: data,
            status: "Success",
        });
    }

    create(req: Request, res: Response, next: NextFunction) {
        console.log("inside create req of Users controller");
        const { name, id } = req.body;
        if (!name) {
            return next({
                erorr: "Bad Request",
                message: "Name is Required",
                status: 400
            });
        }
        if (!id) {
            return next({
                erorr: "Bad Request",
                message: "ID is Required",
                status: 400
            });
        }
        res.status(200).send({
            message: "Users created succesfully",
            data: {
                name,
                id,
            },
            status: "Success",
        });
    }

    update(req: Request, res: Response, next: NextFunction) {
        console.log("inside update req of Users controller");
        const { id } = req.body;
        if (!id) {
            return next({
                erorr: "Bad Request",
                message: "ID is Required",
                status: 400
            });
        }
        res.status(200).send({
            message: "User updated succesfully",
            data: {
                id,
            },
            status: "Success",
        });

    }

    delete(req: Request, res: Response, next: NextFunction) {
        console.log("inside delete req of user controller");
        const { id } = req.params;
        if (!id) {
            return next({
                erorr: "Bad Request",
                message: "ID is Required",
                status: 400
            });
        }
        res.status(200).send({
            message: "user deleted succesfully",
            data: {
                id,
            },
            status: "Success",
        });
    }
}
export default new UserController();
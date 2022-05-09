import { Request, Response, NextFunction } from 'express';
class TraineeController {
    get(req: Request, res: Response) {
        console.log("inside get req of trainee controller");
        const data = [{
            name: "Trainee1",
        },
        {
            name: "Trainee2",
        }];
        res.status(200).send({
            message: "Succesfully fetched trainee",
            data: data,
            status: "Success",
        });
    }

    create(req: Request, res: Response, next: NextFunction) {
        console.log("inside create req of trainee controller");
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
            message: "Trainee created succesfully",
            data: {
                name,
                id,
            },
            status: "Success",
        });
    }

    update(req: Request, res: Response, next: NextFunction) {
        console.log("inside update req of trainee controller");
        const { id } = req.body;
        if (!id) {
            return next({
                erorr: "Bad Request",
                message: "ID is Required",
                status: 400
            });
        }
        res.status(200).send({
            message: "Trainee updated succesfully",
            data: {
                id,
            },
            status: "Success",
        });

    }

    delete(req: Request, res: Response, next: NextFunction) {
        console.log("inside delete req of trainee controller");
        const { id } = req.params;
        if (!id) {
            return next({
                erorr: "Bad Request",
                message: "ID is Required",
                status: 400
            });
        }
        res.status(200).send({
            message: "Trainee deleted succesfully",
            data: {
                id,
            },
            status: "Success",
        });
    }
}
export default new TraineeController();
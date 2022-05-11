import { validationResult } from 'express-validator/check';

export default function validationHandler() {
    return (req: any, res: any, next: any) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next({ message: 'Bad Request', status: 422, error: errors.array() });
        }
        next();
    }
};


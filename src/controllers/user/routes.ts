import { Router } from 'express';
import { checkSchema } from 'express-validator/check';
import validationHandler from '../../lib/routes/validationHandler';
import validation from './validation';

import User from './Controller';

const userRouters: Router = Router();
userRouters.get('/', checkSchema(validation.get as any), validationHandler(), User.get);
userRouters.post('/', checkSchema(validation.get as any), validationHandler(), User.create);
userRouters.put('/', checkSchema(validation.get as any), validationHandler(), User.update);
userRouters.delete('/:id', checkSchema(validation.get as any), validationHandler(), User.delete);


export default userRouters;

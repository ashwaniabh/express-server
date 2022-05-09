import { Router } from 'express';
import { checkSchema } from 'express-validator/check';
import trainee from './Controller';
import validationHandler from '../../lib/routes/validationHandler';
import validation from './validation';
import authMiddleWare from '../../lib/routes/authMiddleWare';
import {GET_USERS} from '../../../extraTs/constants'

const traineeRouters: Router = Router();
traineeRouters.get('/', authMiddleWare(GET_USERS,"write"), checkSchema(validation.get as any), validationHandler(), trainee.get);
traineeRouters.post('/', checkSchema(validation.create as any), validationHandler(), trainee.create);
traineeRouters.put('/', checkSchema(validation.update as any), validationHandler(), trainee.update);
traineeRouters.delete('/:id', checkSchema(validation.delete as any), validationHandler(), trainee.delete);


export default traineeRouters;
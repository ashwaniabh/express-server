import * as express from 'express';

import  traineeRouters  from './controllers/trainee';

import userRouters from './controllers/user';

const router: express.Router = express.Router();

router.use('/trainee', traineeRouters);
router.use('/user',userRouters);

export default router;
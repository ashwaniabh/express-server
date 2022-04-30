
export const GET_USERS = 'getUsers';
export const HEAD_TRAINER = 'head-trainer';
export const TRAINEE = 'trainee';
export const TRAINER = 'trainer';

export const permissions = {
   [GET_USERS]: {
        all: [HEAD_TRAINER],
        read: [TRAINEE, TRAINER],
        write: [TRAINER],
        delete: [],
    }
};
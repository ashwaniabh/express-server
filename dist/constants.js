"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = exports.TRAINER = exports.TRAINEE = exports.HEAD_TRAINER = exports.GET_USERS = void 0;
exports.GET_USERS = 'getUsers';
exports.HEAD_TRAINER = 'head-trainer';
exports.TRAINEE = 'trainee';
exports.TRAINER = 'trainer';
exports.permissions = {
    [exports.GET_USERS]: {
        all: [exports.HEAD_TRAINER],
        read: [exports.TRAINEE, exports.TRAINER],
        write: [exports.TRAINER],
        delete: [],
    }
};
//# sourceMappingURL=constants.js.map
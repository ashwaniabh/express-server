"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./patterns/index");
const index_2 = require("./utils/index");
(0, index_1.diamond)(5);
(0, index_1.printTraingle)(4);
let user = [{
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
    }];
(0, index_2.hasPermission)('getUsers', 'trainer', 'write');
(0, index_2.validateUsers)(user);
//# sourceMappingURL=index.js.map
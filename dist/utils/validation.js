"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("./helper.js");
var user = [{
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
    }];
function validateUsers(user) {
    user.forEach((element) => {
        const { traineeEmail, reviewerEmail } = element;
        let result = (0, helper_js_1.validation)(traineeEmail);
        let result2 = (0, helper_js_1.validation)(reviewerEmail);
        console.log(result, result2);
    });
}
exports.default = validateUsers;
//# sourceMappingURL=validation.js.map
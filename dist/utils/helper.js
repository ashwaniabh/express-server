"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
function validation(email) {
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
}
exports.validation = validation;
//# sourceMappingURL=helper.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_js_1 = require("../constants.js");
function hasPermission(moduleName, role, permissionType) {
    return console.log(constants_js_1.permissions.hasOwnProperty(moduleName) && constants_js_1.permissions[moduleName].hasOwnProperty(permissionType) && constants_js_1.permissions[moduleName][permissionType].includes(role));
}
exports.default = hasPermission;
//# sourceMappingURL=permissions.js.map
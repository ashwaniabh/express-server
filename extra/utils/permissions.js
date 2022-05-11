import {permissions} from "../constants.js";

export default function hasPermission(moduleName, role, permissionType) {
     return console.log(permissions.hasOwnProperty(moduleName) && permissions[moduleName].hasOwnProperty(permissionType) && permissions[moduleName][permissionType].includes(role))

}


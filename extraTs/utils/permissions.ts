import {permissions} from "../constants.js";
import {str}from "../interfaces";

export default function hasPermission(moduleName:str, role:str, permissionType:str)  {
     return console.log(permissions.hasOwnProperty(moduleName) && permissions[moduleName].hasOwnProperty(permissionType) && permissions[moduleName][permissionType].includes(role))

}


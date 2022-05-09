import {permissions} from "../constants";
import {str}from "../interfaces";

export default function hasPermission(moduleName:str, role:str, permissionType:str)  {
     return (permissions.hasOwnProperty(moduleName) && permissions[moduleName].hasOwnProperty(permissionType) && permissions[moduleName][permissionType].includes(role))

}


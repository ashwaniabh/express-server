import { diamond, printTraingle } from "./patterns/index";
import { hasPermission, validateUsers } from "./utils/index.js";
diamond(5);
printTraingle(4);

let user = [{
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
}]

hasPermission('getUsers', 'trainer', 'write');
validateUsers(user);


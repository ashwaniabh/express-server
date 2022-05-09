import { validation } from "./helper";
import {User,str}from "../interfaces";


var user = [{
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
}]

export default function validateUsers(user:User[]) {
    user.forEach((element:User) => {
        const { traineeEmail, reviewerEmail } = element;

        let result = validation(traineeEmail);
        let result2 = validation(reviewerEmail);
        console.log(result,result2);
    });
}
import { validation } from "./helper.js";


export default function validateUsers(user) {
    user.forEach(element => {
        const { traineeEmail, reviewerEmail } = element;

        let result = validation(traineeEmail);
        let result2 = validation(reviewerEmail);
        console.log(result,result2);
    });
}
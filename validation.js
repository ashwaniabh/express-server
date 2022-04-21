var user = [{
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
}]
const validation = email => {
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    return pattern.test(email)
}
// console.log(validation(user[0].traineeEmail,));
//console.log(validation('anurag@succesive.tech'));

// user.forEach(validation(user[0].reviewerEmail));
//console.log(user.forEach(validation(user[0].reviewerEmail)));

user.map(e => {
    let {traineeEmail, reviewerEmail} = e;
    let x = validation(traineeEmail);
    let y = validation(reviewerEmail);
    console.log(x,y);

});
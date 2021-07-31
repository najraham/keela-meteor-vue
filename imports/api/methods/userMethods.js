import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
    createUser(user) {
        console.log("this is wrong")
        Accounts.createUser({
            username: user.username,
            email: user.email,
            password: user.password
        })
    }
});
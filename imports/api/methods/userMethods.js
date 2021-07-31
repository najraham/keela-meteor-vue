import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
    registerUser(user) {
        Accounts.createUser({
            username: user.username,
            email: user.email,
            password: user.password
        })
    }
});
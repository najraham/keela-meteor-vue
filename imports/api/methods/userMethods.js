import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
    registerUser(user) {
        const userWithEmail = Accounts.findUserByEmail(user.email)
        if(userWithEmail) {
            throw new Meteor.Error('bad', 'Email is already taken')
        }
        Accounts.createUser({
            username: user.username,
            email: user.email,
            password: user.password
        })
    },
    passwordChange(userId, newpwd, oldpwd) {
        Accounts.setPassword(userId, newpwd)
    }
});
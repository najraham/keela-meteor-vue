import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
    registerUser(user) {
        const userWithEmail = Accounts.findUserByEmail({email: user.email})
        if(userWithEmail) {
            throw new Meteor.Error('bad', 'Email is already taken')
        }
        else {
            Accounts.createUser({
                username: user.username,
                email: user.email,
                password: user.password
            })
        }
    }
});
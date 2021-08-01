import { Accounts } from "meteor/accounts-base";

Meteor.methods({
  registerUser(user) {
    const userWithEmail = Accounts.findUserByEmail(user.email);
    if (userWithEmail) {
      throw new Meteor.Error("bad", "Email is already taken");
    }
    Accounts.createUser({
      username: user.username,
      email: user.email,
      password: user.password,
    });
  },

  passwordChange(userId, newpwd) {
    Accounts.setPassword(userId, newpwd);
  },

  sendResetPwdEmail(userEmail) {
    let user = Accounts.findUserByEmail(userEmail);
    if (user) {
      Accounts.sendResetPasswordEmail(user._id);
    }
    else {
        throw new Meteor.Error("bad", "Email could not be sent");
    }
  },

  resetPwd(token, newpwd) {
    Accounts.resetForgottenPassword(token, newpwd);
  },
});

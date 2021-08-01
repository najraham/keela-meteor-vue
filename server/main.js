import "../imports/db/Tasks";

import "../imports/api/fixtures";
import "../imports/api/methods";
import "../imports/api/publications";
import { Accounts } from "meteor/accounts-base";

Meteor.startup(() => {
  Accounts.emailTemplates.from = "anishamaharjan4@gmail.com";
  Accounts.emailTemplates.resetPassword.text = function (user, url) {
    url = url.replace("#/", "");
    return " To reset your password, simply click the link below:\n\n" + url;
  };
});

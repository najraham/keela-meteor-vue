import { Meteor } from "meteor/meteor";
import { Tasks } from "../../db/Tasks";

Meteor.publish("tasks", function publishTasks() {
  return Tasks.find({ userId: this.userId }, {sort: {createdAt: -1}});
});

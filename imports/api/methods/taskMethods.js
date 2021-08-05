import { Tasks } from "../../db/Tasks";

Meteor.methods({
  createTask(task) {
    if (task.title === "") {
      throw new Meteor.Error("bad", "Titile of task is required");
    }
    return Tasks.insert(task);
  },

  editTask(task) {
    if (task.title === "") {
      throw new Meteor.Error("bad", "Titile of task is required");
    }
    return Tasks.update(task._id, task);
  },

  deleteTask(id) {
    return Tasks.remove({ _id: id });
  },
});

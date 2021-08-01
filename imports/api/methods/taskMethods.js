import { Tasks } from '../../db/Tasks';
 
Meteor.methods({
    createTask(task) {
        return Tasks.insert(task)
    },
    
    deleteTask(id) {
        return Tasks.remove({ _id: id })
    }
});
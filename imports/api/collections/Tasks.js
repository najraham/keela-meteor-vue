import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'

export const Tasks = new Mongo.Collection('tasks')

if(Meteor.isServer) {
    Meteor.publish('allTasks', () => {
        // return Tasks.find({price: {$gt: 100}})
        return Tasks.find()
    })
}

Meteor.methods({
    createTask(task) {
        return Tasks.insert(task)
    },
    deleteTask(id) {
        return Tasks.remove({ _id: id })
    }
})
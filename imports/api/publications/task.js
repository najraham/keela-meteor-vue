import { Meteor } from 'meteor/meteor';
import {Tasks} from '../../db/Tasks';

    Meteor.publish('tasks', function publishTasks() {
        // return Tasks.find({price: {$gt: 100}})
        return Tasks.find({userId: Meteor.user()._id})
    })
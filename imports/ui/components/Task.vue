<template>
    <div class="container">
        <div class="card mb-4">
            <h3 class="card-header">Add Task</h3>
            <b-form class="card-body" @submit.prevent="saveNewTask">
                <b-form-input type="text" id="task-title" v-model="task.title" placeholder='Enter task'></b-form-input>
                <br>
                <button class="btn btn-success float-right">Add</button>
            </b-form>
        </div>
        
        <div class=" w-50">
            <h2>To-do(s)</h2>
            <b-list-group>
                <b-list-group-item v-for="(task,index) in tasks" :key="index">
                    {{task.title}}
                    <div class="float-right">
                        <button class="btn btn-danger" @click="deleteTask(task._id)"><b-icon-trash></b-icon-trash></button>
                    </div>
                </b-list-group-item>
            </b-list-group>
        </div>
    </div>
</template>

<script>
import {Meteor} from 'meteor/meteor'
import {Tasks} from '../../api/collections/Tasks'
import {Tracker} from 'meteor/tracker'
    export default {
        data() {
            return {
                task: {
                    title: '',
                    createdAt: new Date()
                },
                isLoggedIn:false
            }
        },
        meteor: {
            $subscribe: {
                allTasks: []
            },
            tasks() {
                return Tasks.find({}).fetch()
            }
        },
        created() {
            if(localStorage.getItem('username') === null){
                this.$router.push('/login')
            }
        },
        methods: {
            saveNewTask() {
                Meteor.call('createTask', this.task, (error,result) => {
                    if(error) {
                        this.flashMessage.error({title: 'Attempt failed'})
                    }
                    else {
                        this.flashMessage.success({title: 'Task added successfully'})
                        this.task = {
                            title: ''
                        }
                    }
                })
            },
            deleteTask(id) {
                Meteor.call('deleteTask', id,  (error,result) => {
                    if(error) {
                        console.log('something went wrong', error)
                    }
                    else {
                        console.log(result)
                    }
                })
            }
        }
    }
</script>
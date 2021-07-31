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
    import {Tasks} from '../../db/Tasks'
    export default {
        data() {
            return {
                task: {
                    title: '',
                    createdAt: new Date(),
                    userId: ''
                },
            }
        },
        meteor: {
            $subscribe: {
                tasks: []
            },
            tasks() {
                return Tasks.find({}).fetch()
            }
        },
        created() {
            if(!Meteor.userId()){
                this.$router.push('/login')
            }
        },
        methods: {
            
            saveNewTask() {
                var payload = {...this.task, userId: Meteor.userId()}
                Meteor.call('createTask', payload, (error) => {
                    if(error) {
                        this.flashMessage.error({title: 'Attempt failed', message: error.reason})
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
                Meteor.call('deleteTask', id,  (error) => {
                    if(error) {
                        this.flashMessage.error({title: 'Attempt failed', message: error.reason})
                    }
                    else {
                        this.flashMessage.success({title: 'Task deleted successfully'})
                    }
                })
            }
        }
    }
</script>
<template>
    <div class="container">
        <div class="card mb-4">
            <h3 class=" bg-dark text-white card-header">Login</h3>
            <b-form class="card-body" @submit.prevent="login">
                <b-form-input id="username" name="username" type="text" placeholder="Username" required v-model="user.username"></b-form-input>
                
                <br>

                <b-form-input id="password" name="password" type="password" placeholder="Password" required v-model="user.password"></b-form-input>
            
                <br>

                <button class="btn btn-primary float-right">Login</button>
            </b-form>
        </div>
    </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import {Tracker} from 'meteor/tracker'

export default {
    name: "LoginForm",
    data() {
        return {
            user: {
                username: "",
                password: ""
            },
            isLoggedIn:false
        };
    },
    created() {
        Tracker.autorun(() => {
            if(Meteor.user()) {
                this.isLoggedIn = true
            }
        })
        if(this.isLoggedIn){
            this.$router.push('/')
        }
    },
    methods: {
        login() {
            Meteor.loginWithPassword(this.user.username, this.user.password, () => {
                this.$router.push('/')
            })
        }
    },
}
</script>
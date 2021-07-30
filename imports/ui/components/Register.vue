<template>
    <div class="container">
        <div class="card mb-4">
            <h3 class=" bg-dark text-white card-header">Register</h3>
            <b-form class="card-body" @submit.prevent="register">
                <b-form-input id="username" name="username" type="text" placeholder="Username" required v-model="user.username"></b-form-input>
                
                <br>

                <b-form-input id="email" name="email" type="email" placeholder="E-mail" required v-model="user.email"></b-form-input>
                
                <br>

                <b-form-input id="password" name="password" type="password" placeholder="Password" required v-model="user.password"></b-form-input>
            
                <br>

                <button class="btn btn-primary float-right">Register</button>
            </b-form>
        </div>
    </div>
</template>

<script>
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import {Tracker} from 'meteor/tracker'

export default {
    name: "LoginForm",
    data() {
        return {
            user: {
                username: "",
                email: "",
                password: "",
            },
            isLoggedIn:false
        };
    },
    created() {
        if(localStorage.getItem('username') !== null){
            this.$router.push('/')
        }
    },
    methods: {
        register() {
            Accounts.createUser({
                username: this.user.username,
                email: this.user.email,
                password: this.user.password
            }, (error,result) => {
                if(error) {
                    this.flashMessage.error({title: 'Registration failed'});
                }
                else {
                    this.flashMessage.success({title: 'Registration successful'});
                    localStorage.setItem('username', this.user.username)
                    this.$router.push('/')
                }
            })
        }
    },
}
</script>
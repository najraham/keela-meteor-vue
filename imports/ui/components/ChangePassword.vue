<template>
    <div class="container">
        <div class="card mb-4">
            <h3 class=" bg-dark text-white card-header">Change Password</h3>
            <b-form class="card-body" @submit.prevent="change_password">
                <b-form-input id="newpwd" name="newpwd" type="password" placeholder="New Password" required v-model="newpwd"></b-form-input>
            
                <br>

                <button class="btn btn-primary float-right">Change</button>
            </b-form>
        </div>
    </div>
</template>

<script>
import { Meteor } from 'meteor/meteor'

    export default {
    name: "Change Password",
        data() {
            return {
                newpwd: "",
            }
        },
        created() {
            if(!Meteor.userId()){
                this.$router.push('/login')
            }
        },
        methods: {
            change_password() {
                const userId = Meteor.userId()
                Meteor.call('passwordChange',userId, this.newpwd , (error) => {
                    if(error) {
                        this.flashMessage.error({title: 'Attempt failed', message: error.reason})
                    }
                    else {
                        this.flashMessage.success({title: 'Password changed successfully'})
                        Meteor.logout(() => {
                            this.$router.push('/login')
                        })
                    }
                })
            }
        }
    }
</script>
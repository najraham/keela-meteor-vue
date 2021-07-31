<template>
    <div class="container">
        <div class="card mb-4">
            <h3 class=" bg-dark text-white card-header">Change Password</h3>
            <b-form class="card-body" @submit.prevent="change_password">
                <b-form-input id="oldpwd" name="oldpwd" type="text" placeholder="Old Password" required v-model="oldpwd"></b-form-input>
                
                <br>

                <b-form-input id="newpwd" name="newpwd" type="text" placeholder="New Password" required v-model="newpwd"></b-form-input>
            
                <br>

                <button class="btn btn-primary float-right">Change</button>
            </b-form>
        </div>
    </div>
</template>

<script>
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

    export default {
    name: "Change Password",
        data() {
            return {
                oldpwd: "",
                newpwd: "",
            }
        },
        methods: {
            change_password() {
                Accounts.changePassword(this.oldpwd, this.newpwd, (error) => {
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
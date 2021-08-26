<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3 fixed-top">
      <table style="width:100%">
        <tr>
          <td>
            <router-link class="navbar-brand" to="/">Todo List</router-link>
          </td>
          <td style="text-align:right">
            <div v-if="userId">
              <router-link class="btn btn-dark" to="/users"> Users </router-link>
              <button class="btn btn-dark" @click="logout"> Logout </button>
              <router-link class="btn btn-dark" to="/change-password"> Change Password ? </router-link>
              <button class="btn btn-primary"> User : {{user ? user.username : ''}} </button>
            </div>
            <div v-else>
              <router-link class="btn btn-dark" to="/login"> Login </router-link>
              <router-link class="btn btn-dark" to="/register"> Register </router-link>
            </div>
          </td>
        </tr>
      </table>
    </nav>
    <FlashMessage :position="'right top'"></FlashMessage>
    <div style="height:90px"></div>
    <div class="mt-3 p-5 ">
      <router-view/>
    </div>
  </div>
</template>

<script>
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'
export default {
  data() {
    return {
      userId: null,
      user: null
    }
  },
  created() {
    Tracker.autorun(() => {
      this.userId = Meteor.userId()
      this.user = Meteor.user()
    })
  },
  methods: {
    logout()  {
      Meteor.logout(() => {
        this.userId = null
        this.$router.push('/login')
      })
    }
  }
};
</script>

<style>
body {
  font-family: sans-serif;
  padding: 10px;
}
</style>

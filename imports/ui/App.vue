<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <router-link class="navbar-brand" to="/">Todo List</router-link>
      <div v-if="user">
        <button class="btn btn-dark" @click="logout"> Logout </button>
        <router-link class="btn btn-dark" to="/change-password"> Change Password ? </router-link>
      </div>
      <div v-else>
        <router-link class="btn btn-dark" to="/login"> Login </router-link>
        <router-link class="btn btn-dark" to="/register"> Register </router-link>
      </div>
    </nav>
    <div class="container">
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
      user: null
    }
  },
  created() {
    Tracker.autorun(() => {
      this.user = Meteor.user()
    })
  },
  methods: {
    logout()  {
      Meteor.logout(() => {
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

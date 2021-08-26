<template>
  <div class="container">
    <table class="w-100 mb-3">
      <tr>
        <td>
          <h2>Users</h2>
        </td>
        <td class="float-right">
          <button class="btn btn-success">
            <b-icon-plus></b-icon-plus>
          </button>
        </td>
      </tr>
    </table>

    {{users}}
    <b-list-group>
      <b-list-group-item v-for="(user, index) in users" :key="index">
        {{ user.username }}
        <br />
        <span class="text-muted" v-for="(email, index) in user.emails" :key="index">
          {{ email.address }}
        </span>
        <div class="float-right">
          <button class="btn btn-warning text-white">
            <b-icon-pen></b-icon-pen>
          </button>
          <button class="btn btn-danger">
            <b-icon-trash></b-icon-trash>
          </button>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";
export default {
  data() {
    return {};
  },
  meteor: {
    $subscribe: {
      users: []
    },
    users() {
      return Meteor.users.find()
    },
  },
  methods: {},
};
</script>

<template>
  <div class="container">
    <div class="card mb-4">
      <h3 class="bg-dark text-white card-header">Register</h3>
      <b-form class="card-body" @submit.prevent="register">
        <b-form-input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          required
          v-model="user.username"
        ></b-form-input>

        <br />

        <b-form-input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          required
          v-model="user.email"
        ></b-form-input>

        <br />

        <b-form-input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          required
          v-model="user.password"
        ></b-form-input>

        <br />

        <button class="btn btn-primary float-right">Register</button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";

export default {
  name: "LoginForm",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  created() {
    if (Meteor.userId()) {
      this.$router.push("/");
    }
  },
  methods: {
    register() {
      Meteor.call("registerUser", this.user, (error) => {
        if (error) {
          this.flashMessage.error({
            title: "Registration failed",
            message: error.reason,
            y: 70,
            x: 10,
          });
        } else {
          Meteor.loginWithPassword(this.user.username, this.user.password);
          this.flashMessage.success({
            title: "Registration successful",
            y: 70,
            x: 10,
          });
          this.$router.push("/");
        }
      });
    },
  },
};
</script>

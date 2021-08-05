<template>
  <div class="container">
    <div class="card mb-4">
      <h3 class="bg-dark text-white card-header">Forgot Password</h3>
      <b-form class="card-body" @submit.prevent="forgot_password">
        <b-form-input
          id="userEmail"
          name="userEmail"
          type="email"
          placeholder="Enter e-mail used when registered"
          required
          v-model="userEmail"
        ></b-form-input>

        <br />

        <button class="btn btn-primary float-right">Send email</button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";
export default {
  data() {
    return {
      userEmail: "",
    };
  },
  methods: {
    forgot_password() {
      Meteor.call("sendResetPwdEmail", this.userEmail, (error) => {
        if (error) {
          this.flashMessage.error({
            title: "Attempt failed",
            message: error.reason,
            y: 70,
            x: 10,
          });
        } else {
          this.flashMessage.success({
            title: "Email sent successfully",
            y: 70,
            x: 10,
          });
        }
      });
    },
  },
};
</script>

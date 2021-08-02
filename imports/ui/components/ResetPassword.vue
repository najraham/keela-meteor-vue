<template>
  <div class="container">
    <div class="card mb-4">
      <h3 class="bg-dark text-white card-header">Reset Password</h3>
      <b-form class="card-body" @submit.prevent="reset_password">
        <b-form-input
          id="newpwd"
          name="newpwd"
          type="password"
          placeholder="New Password"
          required
          v-model="newpwd"
        ></b-form-input>

        <br />

        <button class="btn btn-primary float-right">Reset</button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { Accounts } from "meteor/accounts-base";
export default {
  data() {
    return {
      newpwd: "",
      token: this.$route.params.token,
    };
  },
  methods: {
    reset_password() {
      Accounts.resetPassword( this.token, this.newpwd, (error) => {
        if (error) {
          this.flashMessage.error({
            title: "Attempt failed",
            message: error.reason,
          });
        } else {
          this.flashMessage.success({ title: "Password reset successfully" });
          this.$router.push("/");
          this.newpwd = ''
        }
      });
    },
  },
};
</script>

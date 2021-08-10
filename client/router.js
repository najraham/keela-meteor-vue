

export default [
    {
      path: "/",
      name: "home",
      component: () => import("../imports/ui/components/Task.vue"),
      meta: {conditionalRoute:true}
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../imports/ui/components/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../imports/ui/components/Register.vue"),
    },
    {
      path: "/change-password",
      name: "change-password",
      component: () => import("../imports/ui/components/ChangePassword.vue"),
      meta: {conditionalRoute:true}
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: () => import("../imports/ui/components/ForgotPassword.vue"),
    },
    {
      path: "/reset-password/:token",
      name: "reset-password",
      component: () => import("../imports/ui/components/ResetPassword.vue"),
    },
  ]
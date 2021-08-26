export default [
  {
    path: "/",
    name: "home",
    component: () => import("../imports/ui/components/Task/Tasks.vue"),
    meta: { conditionalRoute: true },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../imports/ui/components/Auth/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../imports/ui/components/Auth/Register.vue"),
  },
  {
    path: "/change-password",
    name: "change-password",
    component: () => import("../imports/ui/components/Auth/ChangePassword.vue"),
    meta: { conditionalRoute: true },
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("../imports/ui/components/Auth/ForgotPassword.vue"),
  },
  {
    path: "/reset-password/:token",
    name: "reset-password",
    component: () => import("../imports/ui/components/Auth/ResetPassword.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../imports/ui/components/User/Users.vue"),
    meta: { conditionalRoute: true },
  },
];

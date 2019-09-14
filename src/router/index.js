import Vue from "vue";
import Router from "vue-router";
// 建议大家使用更加简单的方式来完成组件的引入
// import test from "@/views/test";
// import login from "@/views/login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      // 测试 vant 的基本使用
      name: "test",
      path: "/test",
      // 导入一个组件
      component: () => import("@/views/test")
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/views/login")
    }
  ]
});

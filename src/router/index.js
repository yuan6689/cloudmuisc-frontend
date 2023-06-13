import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import store from "@/store/index";

const routes = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    name: "Main",
    component: MainView,
    redirect: "/main/home",
    children: [
      {
        path: "/main/home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "HomeView" */ "@/views/HomeView.vue"),
      },
      {
        path: "/main/mine",
        name: "Mine",
        component: () =>
          import(/* webpackChunkName: "MineView" */ "@/views/MineView.vue"),
      },
    ],
  },
  {
    path: "/itemMusic",
    name: "ItemMusic",
    component: () =>
      import(/* webpackChunkName: "ItemMusic" */ "../views/ItemMusic.vue"),
    meta: {
      KeepAlive: true,
    },
  },
  {
    path: "/search",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "Search" */ "../views/Search.vue"),
  },
  // {
  //   path: "/loginName",
  //   name: "LoginName",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "LoginName" */ "@/components/Login/LoginName.vue"
  //     ),
  // },
  // {
  //   path: "/loginScan",
  //   name: "LoginScan",
  //   component: () => import(/* webpackChunkName: "LoginScan" */ "@/components/Login/LoginScan.vue")
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  const blockFooter = ["/loginName", "/loginScan"];
  console.log(to, from,router);
  //处理进出不让 footerMusic 显示的页面时的逻辑
  if (!blockFooter.indexOf(to.path)) {
    console.log("enter");
    store.commit("updateIsFooterShow", false);
  } else {
    store.commit("updateIsFooterShow", true);
  }
});

export default router;

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import autoRegister from "./plugin";
// import 'postcss-import'

const app = createApp(App);
app.use(store).use(router).mount("#app");
autoRegister(app);

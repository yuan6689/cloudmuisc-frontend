<template>
  <div class="mine">
    <div class="info-module" v-if="$store.state.isLogin">
      我的信息
      <button @click="loginOutUpdate">退出登录</button>
    </div>
    <div class="login-module" v-else>
      <login-qr/>
    </div>
  </div>
</template>

<script>
import LoginQr from "@/components/Login/LoginQr.vue"
import { loginOut } from "@/request/api/login";
import { mapMutations } from "vuex";
export default {
  name: "MineView",
  components: {
    LoginQr
  },
  methods:{
    ...mapMutations(["updateIsLogin"]),
    async loginOutUpdate(){
      await loginOut();
      this.updateIsLogin(false);
    }
  }
};
</script>

<style lang="less">
.mine {
  height: 80vh;
  .info-module,
  .login-module{
    height: 100%;
  }
}
</style>

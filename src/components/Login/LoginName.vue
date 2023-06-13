<template>
  <section class="login-wrap">
    <form action @submit.stop="tryToLogin">
      <div class="phone-number-container">
        <input
          class="tel-input"
          type="tel"
          autofocus
          v-model="name"
          required
          placeholder="请输入账号"
        />
      </div>
      <div class="password-container">
        <input
          class="password-input"
          type="password"
          placeholder="请输入密码"
          v-model="password"
          required
        />
      </div>
      <div class="login-btn">
        <input type="button" value="登录" />
      </div>
    </form>
  </section>
</template>

<script>
// import { mapActions } from 'vuex';
// import BackHeader from '../../components/BackHeader.vue';
// import Reminder from '../../components/Reminder.vue';
// import { login } from '../../api/Login';

export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    tryToLogin(e) {

      return;
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
.login-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
  .phone-number-container,
  .password-container {
    position: relative;
    border-bottom: 0.02rem solid #e4e4e4;
    padding: 0.05rem 0;
    margin: 0.2rem 0.2rem;
  }
  .tel-input,
  .password-input {
    font-size: 0.32rem;
    margin-left: 0.1rem;
    border: none;
  }
  .iconfont {
    font-size: 0.36rem;
    color: gray;
  }
  .country-code {
    font-size: 0.32rem;
    margin: 0 0.1rem;
  }
  .login-btn input {
    background: #d44439;
    color: #f1f1f1;
    border: none;
    width: 90%;
    height: 0.8rem;
    border-radius: 0.4rem;
    font-size: 0.32rem;
  }
}
</style>

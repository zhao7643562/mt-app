<template>

  <div class="page-login">
    <div class="login-header">
      <a
        class="logo"
        href="http://www.meituan.com"
      ></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        >
      </div>
      <div class="form">
        <h4
          v-if="error"
          class="tips"
        >
          <i class="el-icon-remove"></i>
          {{error}}</h4>
        <p>
          <span>账号登陆</span>
        </p>
        <el-input
          prefix-icon="profile"
          v-model="userName"
          placeholder="手机号/用户名/邮箱"
          :class="{error:error && !userName}"
        ></el-input>
        <el-input
          prefix-icon="password"
          placeholder="密码"
          type="password"
          v-model="passWord"
          show-password
          :class="{error:error && !passWord}"
        ></el-input>
        <div class="foot">
          <a href="#">忘记密码？</a>
        </div>
        <el-button
          class="btn-login"
          type="primary"
          @click="submit"
        >登陆</el-button>
        <p class="reg">
          <span>还没有账号？</span>
          <router-link :to="{name:'register'}">免费注册</router-link>
        </p>

      </div>
    </div>

    <footer>
      <ul>
        <li><a href="#">关于美团</a></li>
        <li><a href="#">加入我们</a></li>
        <li><a href="#">商家入驻</a></li>
        <li><a href="#">帮助我们</a></li>
        <li><a href="#">美团手机版</a></li>

      </ul>
      <p>
        ©<span>2019</span>
        <a href="https://www.meituan.com">美团网团购</a>
        meituan.com
        <a
          href="http://www.miibeian.gov.cn/"
          target="_blank"
        >京ICP证070791号</a>
        京公网安备11010502025545号
      </p>
    </footer>

  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      userName: "",
      passWord: "",
      error: ""
    };
  },
  methods: {
    submit() {
      //   console.log(this.userName, this.passWord);
      //   if (!this.userName) {
      //     this.error = "请输入账号";
      //     return false;
      //   }
      //   if (!this.passWord) {
      //     this.error = "请输入密码";
      //     return false;
      //   }

      //   api.login({
      //       params: {
      //         userName: this.userName,
      //         passWord: this.passWord
      //       }
      //     }).then(res => {
      //       if (res.data.status == "success") {
      //         this.$router.push({ name: "index" });
      //         this.$store.commit("setUserName",this.userName)
      //       } else {
      //         this.error = res.data.msg;
      //       }
      //     });
      //后端错误自己尝试
      if (!this.userName) {
        this.error = "请输入账号";
        return false;
      } else if (!this.passWord) {
        this.error = "请输入密码";
        return false;
      } else {
        this.$router.push({ name: "index" });
        this.$store.commit("setUserName", this.userName);
      }
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/login/index.scss";
</style>
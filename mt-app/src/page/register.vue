<template>

  <div class="page-register">
    <div class="header">
      <header>
        <a
          href="#"
          class="site-logo"
        ></a>
        <div class="login">
          <span>已有美团账号</span>
          <router-link :to="{name:'login'}">登陆</router-link>
        </div>
      </header>
    </div>

    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        :rules="rules"
        ref="registerForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="用户名"
          prop="userName"
        >
          <el-input
            type="text"
            v-model="registerForm.userName"
            autocomplete="off"
          ></el-input>
          <!-- <span class="inline-tip"><i class="tip-status tip-status--opinfo"></i>请输入您的用户名</span>             -->
        </el-form-item>

        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input
            type="password"
            v-model="registerForm.password"
            autocomplete="off"
            @input="myinput"
          >
          </el-input>
          <div class="pw-strength">
            <div :class="['bar',strengthClass]"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>

        <el-form-item
          label="确认密码"
          prop="rePassword"
        >
          <el-input
            type="password"
            v-model="registerForm.rePassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('registerForm')"
            class="mybut"
          >同意以下协议并注册</el-button>
          <a class="f1" href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>
        </el-form-item>
      </el-form>
    </div>
    <footer>
      <p class="copyright">
        ©<a class="f1" href="https://www.meituan.com">meituan.com</a>&nbsp;
        <a class="f1" target="_blank" href="http://www.miibeian.gov.cn/">京ICP证070791号</a>&nbsp;
        <span class="f1">京公网安备11010502025545号</span>
    </p>
    </footer>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      // console.log('+++++')
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      // console.log('------')
      if (value === "") {
        // this.strengthClass = "";
        // callback(new Error("请输入密码"));
        callback(new Error(" "))
      } else if(value.length < 4 || value.length > 16){
        callback(new Error(" "));
      }else{
        if (this.registerForm.rePassword !== "") {
          this.$refs.registerForm.validateField("rePassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      // console.log("++++++",value,this.registerForm.password,this.registerForm.rePassword)
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      mima:'',
      registerForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
      strengthClass: "",
      rules: {
        userName: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          api.register({
              params:this.registerForm
          }).then(res=>{
              if(res.data.status == 'success'){
                  this.$router.push({name:'login'})
              }else{
                  alert(res.data.msg)
              }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    myinput() {
      //   console.log(this.registerForm.password)
      // 只能输入5-20个以字母开头、可带数字、“_”、“.”的字串
      // var reg =/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/

      //强：字母+数字+特殊字符
      var reg = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;
      //弱类型密码 纯数字，字母
      var regEasy = /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/;
      let mypassword = this.registerForm.password;
      //   if (this.registerForm.password.length > 20||(this.registerForm.password.length > 6 && this.registerForm.password.match(reg))) {
      //     this.strengthClass = "strong";
      //   } else if (this.registerForm.password.length < 6) {
      //       console.log(111)
      //     this.strengthClass = "week";
      //   } else if (!this.registerForm.password) {
      //     this.strengthClass = "";
      //   } else {
      //     this.strengthClass = "normal";
      //   }
      //
      if ((mypassword && mypassword.length < 4) || mypassword.match(regEasy)) {
        console.log("---弱");
        this.strengthClass = "week";
      } else if (
        mypassword.length > 20 ||
        (mypassword.length > 6 && mypassword.match(reg))
      ) {
        console.log("---强");
        this.strengthClass = "strong";
      } else if (!mypassword) {
        console.log("---空");
        this.strengthClass = "";
      } else {
        console.log("---中");
        this.strengthClass = "normal";
      }
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/register/index.scss";
</style>
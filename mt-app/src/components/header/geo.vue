<template>

  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location" />
      {{$store.state.position.name ? $store.state.position.name : $store.state.position }}
      <router-link
        class="changeCity"
        :to="{name:'changeCity'}"
      >
        切换城市
      </router-link>
      [
      <a href="#" v-for="(item,index) in nearCity" :key="index">{{item.name}}</a>
      ]
    </div>
    <div class="m-user">
      <router-link
        class="login"
        :to="{name:'login'}"
        v-if="!$store.state.userName"
      >
        立即登陆
      </router-link>
      <router-link
        class="register"
        :to="{name:'register'}"
      >
        注册
      </router-link>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
    data(){
        return {
            nearCity:[],
        }
    },
    watch:{
        "$store.state.position":function(){
          
            this.nearCity = this.$store.state.position.nearCity;
            // console.log(this.nearCity)
        }
    },
  created() {
    
    api.getCurPosition().then(res => {
      this.$store.dispatch("setPosition", res.data.data);
      // console.log(res.data.data);
      this.nearCity = res.data.data.nearCity
    });
  }
};
</script>

<style scoped>
</style>
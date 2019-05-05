// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/main.css';
import store from "./store"

Vue.use(ElementUI);

Vue.config.productionTip = false
// 自定义方法
Vue.directive('document-click',{
  //1 当前绑定DOM元素 2 vue对象 3 虚拟节点
  bind(el,binding,vnode){
    // console.log('-----bind')
    // console.log(binding.value)
                              //绑定什么  参数   是否捕获
    document.addEventListener('click',binding.value,false)
    
  },
  inserted(){
    // console.log('------inserted')
  },
 update(){
  // console.log('------update')
 }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


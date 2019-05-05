<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col
        :span="3"
        class="left"
      >
        <img
          src="http://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
          alt=""
        >
      </el-col>
      <el-col
        :span="15"
        class="center"
      >
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="请输入内容"
            @focus="focus"
            @blur="blur"
            @input="input"
          ></el-input>
          <el-button
            type="primary"
            icon="el-icon-search"
          >搜索</el-button>
          <dl
            class="hotPlace"
            v-if="isHotPlace"
          >
            <dt>
              热门搜索
            </dt>
            <dd v-for="(item,index) in hotPlaceList " :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl
            class="searchList"
            v-if="isSearchList"
          >
            <dd v-for="(item,index) in searchList" :key="index" @click="myjump(item)">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <router-link 
          :to="{name:'goods',params:{name:item}}"
          v-for="(item,index) in suggestList" :key="index" >{{item}}</router-link>
        </p>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import api from '@//api/index.js'
export default {
  data() {
    return {
      searchWord: "",
      //   isHotPlace:false,
      //   isSearchList:false,
      isFocus: false,
      hotPlaceList:[],
      searchList:[],
      suggestList:[]
    };
  },
  created(){
    api.getSearchHotWord().then(res=>{
      // console.log(res);
      this.hotPlaceList = res.data.data;
      this.suggestList = res.data.data
    })
  },
  computed: {
    isHotPlace: function() {
      return this.isFocus && this.searchWord;
    },
    isSearchList: function() {
      // console.log(this.searchWord)
      return this.isFocus && this.searchWord;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
      // console.log(this.searchList)
    },
    blur() {
      let self = this;
      setTimeout(function() {
        self.isFocus = false;
      }, 200);
    },
    myjump(item){
      // console.log(item)
      this.searchWord = item
    },
    input(){
      // console.log(this.searchWord)
      let val = this.searchWord
      api.getSearchList().then(res=>{
        // console.log(res.data.data)
        this.searchList = res.data.data.list.filter((item,index)=>{
          return item.indexOf(val) > -1;
        })
      })
    }
  }
};
</script>




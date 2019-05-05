<template>

  <div>
    <span class="name">按省份选择:</span>
    <mselect
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
      className="province"
    />
    <mselect
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      className="city"
    />
    <span>直接搜索：</span>
    <!-- multiple多选   filterable可过滤  remote远程搜索-->
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
      @blur="zhijie"
    >
      <el-option
        v-for="item in searchList"
        :key="item"
        :label="item"
        :value="item"
      >
      <p @click="myClick(item)">{{item}}</p>
      </el-option>
    </el-select>
  </div>
</template>

<script>
import api from "@/api/index.js";
import Mselect from "./select.vue";
export default {
  data() {
    return {
      provinceList: [],
      cityList: [],
      province: "省份",
      city: "城市",
      cityActive: false,
      provinceActive: false,
      searchList: ["山东", "北京", "浙江", "上海", "郑州", "衢州"],
      searchWord: "",
      loading: false,
      //----
      cityDisabled: false
    };
  },
  created() {
    api.getProvinceList().then(res => {
      this.provinceList = res.data.data.map(item => {
        item.name = item.provinceName;
        return item;
      });
    });
    api.getCityList().then(res => {
      // console.log(res.data)
      this.cityList = res.data.data.map(item => {
        item.name = item.pinyin;
        // console.log(item)
        return item;
      });
    });
  },
  components: {
    Mselect
  },

  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;

      if (flag) {
        this.provinceActive = false;
      }
    },

    changeProvince(item) {
      this.province = item;
      this.cityDisabled = false;
      this.$store.dispatch("setPosition", item);
      // this.cityList = item;
    //跳转
      this.$router.push({ name: "index" });
    },
    changeCity(item) {
      this.city = item;
      // this.$store.dispatch("setPosition", item);
      // console.log(item)
      //跳转页面
      this.$router.push({ name: "index" });
    },

    remoteMethod(val) {
      // console.log(val)
      //请求后端接口
    },
    zhijie(){
      this.searchWord = ""
    },
    myClick(item){
      // console.log(123)
      this.$store.dispatch("setPosition", item);

      //跳转
       this.$router.push({ name: "index" });
    }
  }
};
</script>
 
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
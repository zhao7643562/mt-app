<template>
  <div
    :class="['choose-wrap',disabled ? 'disabled' : '']"
    @click="showWrapper"
  >
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom" />
      <div
        :class="{'mt-content':true,'active':showWrapperActive}"
        v-document-click="documentClick"
      >
        <h2>{{title}}</h2>
        <div :class="['wrapper', className]">
          <div
            class="col"
            v-for="(listData,index) in renderList"
            :key="index"
          >
            <span
              :class="{'mt-item':true,'active':item.name == value}"
              v-for="(item,index) in listData"
              :key="index"
              @click="changeValue(item)"
            >
              {{item.name}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ["list", "title", "value", "showWrapperActive", "disabled", "className"],
  data() {
    return {
      // showWrapperActive: false
    };
  },
  computed: {
    renderList: function() {
      var col = Math.ceil(this.list.length/12);
      let resultList = [];
      for (var i = 0; i < col; i++) {
        let data = this.list.slice(i * 12, i * 12 + 12);
        resultList.push(data);
      }
      //  console.log(resultList)
      return resultList;
    }
  },
  methods: {
    showWrapper(e) {
      //阻止冒泡
      e.stopPropagation();
        // this.showWrapperActive = true;
      if (!this.disabled) {
        this.$emit("change_active", true);
      }
    },
    documentClick() {
      // console.log('documentClick')
      // this.showWrapperActive = false;
      this.$emit("change_active", false);
    },
    changeValue(item) {
      // console.log(item.name)
      this.$emit("change", item.name);
      // this.$router.push({name:'index'})
      
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>
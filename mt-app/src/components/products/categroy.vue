<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd
        v-for="item in classicList"
        :key="item.type"
      >
        <m-select
          :name="item.title"
          :list="item.sub_list"
        />
      </dd>
    </dl>
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd
        v-for="item in areaList"
        :key="item.type"
      >
        <m-select
          :name="item.title"
          :list="item.sub_list"
        />
      </dd>
    </dl>
  </div>
</template>

<script>
import MSelect from "./select.vue";
export default {
  data() {
    return {
      classicList: [
        {
          title: "美食",
          type: "food",
          sub_list: [
            {
              name: "中国菜",
              id: "CHINA"
            },
            {
              name: "美国菜",
              id: "USA"
            },{
              name: "印度菜",
              id: "YD"
            },{
              name: "日本菜",
              id: "Japan"
            }
          ]
        },
        {
          title: "酒店住宿",

          type: "hotal",

          sub_list: [
            {
              name: "温泉酒店",

              id: "hot_spring"
            }
          ]
        },
        {
          title: "休闲娱乐",

          type: "play",

          sub_list: [
            {
              name: "休闲娱乐",

              id: "hot_spring"
            }
          ]
        },
        {
          title: "生活服务",

          type: "happy",

          sub_list: [
            {
              name: "生活服务",

              id: "hot_spring"
            }
          ]
        }
      ],
      areaList: [
        {
          title: "推荐商圈",

          sub_list: [
            {
              name: "望京",

              id: 120000
            },
            {
              name: "昌平",

              id: 12222
            }
          ]
        }
      ]
    };
  },
  components: {
    MSelect
  }
};
</script>

<style lang='scss'>
</style>
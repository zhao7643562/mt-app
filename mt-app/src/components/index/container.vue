<template>

  <div class="m-istyle">
    <dl
      @mouseover="over"
      :class="nav.class"
    >
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item,index) in nav.list"
        :key='index'
        :class="{active:kind == item.tab}"
        :data-type='item.tab'
      >{{item.text}}</dd>
    </dl>
    <ul class=ibody>
      <li
        v-for="(item,index) in list"
        :key="index"
      >
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="never"
        >
          <img
            :src="item.image"
            class="image"
          >
          <div class="cbody">
            <div
              class="title"
              :title="item.title"
            >{{item.title}}</div>
            <div
              class="sub-title"
              :title="item.sub_title"
            >{{item.sub_title}}</div>
            <div
              class="price-info"
              v-if="item.rentNum && item.price_infon.current_price"
            >
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_infon.current_price}}</span>
              </span>
              <span class="old-price">门市价¥{{item.price_infon.oli_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <div
              class="price-info"
              v-else-if="!item.rentNum"
            >
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
            </div>
            <div
              v-else
              class="price-info"
            >
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_infon.avg_price}}</span>
                <span class="units">/{{item.price_infon.units}}均</span>
              </span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["nav"],
  data() {
    return {
      kind: "all",
      list: [
        {
          image:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          title: "纯味烘焙开心手工蛋糕（西湖文化广场店）",
          sub_title: "A款-I款9种款式10英寸1个，约10英寸，圆形",
          price_infon: {
            current_price: null,
            oli_price: null,
            avg_price: 18,
            units: "人"
          },
          rentNum: 1,
          address: "西湖文化广场"
        },
        {
          image:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          title: "纯味烘焙开心手工蛋糕（西湖文化广场店）",
          sub_title: "A款-I款9种款式10英寸1个，约10英寸，圆形",
          price_infon: {
            current_price: 238,
            oli_price: "338",
            avg_price: null,
            units: null
          },
          rentNum: 0,
          address: "西湖文化广场"
        },
        {
          image:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          title: "纯味烘焙开心手工蛋糕（西湖文化广场店）",
          sub_title: "A款-I款9种款式10英寸1个，约10英寸，圆形",
          price_infon: {
            current_price: 238,
            oli_price: "338"
          },
          rentNum: 1,
          address: "西湖文化广场"
        }
      ]
    };
  },
  created() {},
  methods: {
    over(e) {
      //判断触发 获取dd值

      let dom = e.target;
      //   console.log(dom);
      //   console.log(dom.tagName.toLowerCase());
      //toLowerCase 改变大小写
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }

      // getAttribute返回指定属性名的属性值
      this.kind = dom.getAttribute("data-type");
      //动态获取数据 ajax请求   从后端获取数据
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
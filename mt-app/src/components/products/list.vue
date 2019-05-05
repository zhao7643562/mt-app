<template>
  <div class="m-products-list">
    <ul>
      <li
        v-for="(item) in nav"
        :key="item.key"
        :class="{'s-nav-active':item.active}"
      >{{item.name}}</li>
    </ul>
    <el-row>
      <item
        v-for="(item,index) in productList"
        :key="index"
        :meta = "item"
      />
    </el-row>
  </div>

</template>

<script>
import api from '@/api/index.js'
import Item from "./item.vue";
export default {
  created(){
    api.getProductsList().then(res=>{
      // console.log(res.data.data)
      this.productList = res.data.data
    })
  },
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productList: [
        // {
        //   itemId: "2571323",
        //   title: "井格重庆火锅（哈西万达店）",
        //   image: "//p0.meituan.net/msmerchant/92f178b960a7f055c507e333e4649a8d1136345.jpg@220w_125h_1e_1c",
        //   type: "food",
        //   score: 4.1,
        //   commentNum: 2555,
        //   comment: [
        //     {
        //       username: "匿名用户",
        //       image: "https://www.dpfile.com/ugc/user/anonymous.png",
        //       rate: 5,
        //       pics: ["http://p0picxxxxx", "http://picxxxxx"],
        //       evalaute: "xxxx"
        //     }
        //   ],
        //   tab: ["重庆火锅", "哈西万达"],
        //   address: "南岗区中兴大街168号万达广场3层3055",
        //   phone: "0451-85717159",
        //   businessTime: "周一至周日 09:30-21:00",
        //   service: ["提供wifi"],
        //   recommend: ["现炸酥肉", "井格毛肚"],
        //   avg_price: 95,
        //   deal_items: [
        //     {
        //       title: "100元代金券1张",
        //       price: 28.9,
        //       counter_price: 100,
        //       sale_num: 3409,
        //       priceType: "元"
        //     },{
        //       title: "50元代金券1张",
        //       price: 88,
        //       counter_price: 888,
        //       sale_num: 123,
        //       priceType: "元"
        //     }
        //   ]
        // }
      ]
    };
  },
  components: {
    Item
  }
};
</script>

<style lang='scss'>
</style>
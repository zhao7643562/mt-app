<template>
  <div class="right-content">
    <div class="map-container">
      <img
        src="#"
        alt="我是地图"
      >
    </div>
    <div class="recommend-box-wrapper">
      <div class="recommend-box">
        <div class="top-nav-box">
          <div class="label">猜你喜欢</div>
        </div>
        <div class="recommend-list">
          <a
            class="recommend-item"
            href=""
            v-for="(item,index) in productList"
            :key="index"
          >
            <div class="img-box">
              <img :src="item.image" alt="#">
            </div>
            <div class="info-box">
              <div class="">{{item.title}}</div>
              <div class="score-line">
                <el-rate
                  class="score"
                  v-model="item.score"
                  disabled
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate>
                <div class="comment-number">{{item.commentNum}}个评价</div>
              </div>
              <div class="desc">{{item.address}}</div>
              <div class="yuan">
                <span><span >￥</span><span class="price-number">{{item.avg_price}}</span><span class="price-desc">起</span></span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: [
        {
          itemId: "2571323",
          title: "井格重庆火锅（哈西万达店）",
          image: "http://img4.imgtn.bdimg.com/it/u=2153937626,1074119156&fm=26&gp=0.jpg",
          type: "food",
          score: 4.1,
          commentNum: 2555,
          comment: [
            {
              username: "匿名用户",
              image: "https://www.dpfile.com/ugc/user/anonymous.png",
              rate: 5,
              pics: ["http://p0picxxxxx", "http://picxxxxx"],
              evalaute: "xxxx"
            }
          ],
          tab: ["重庆火锅", "哈西万达"],
          address: "南岗区中兴大街168号",
          phone: "0451-85717159",
          businessTime: "周一至周日 09:30-21:00",
          service: ["提供wifi"],
          recommend: ["现炸酥肉", "井格毛肚"],
          avg_price: 95,
          deal_items: [
            {
              title: "100元代金券1张",
              price: 28.9,
              counter_price: 100,
              sale_num: 3409,
              priceType: "元"
            },
            {
              title: "50元代金券1张",
              price: 88,
              counter_price: 888,
              sale_num: 123,
              priceType: "元"
            }
          ]
        },
           {
          itemId: "2571323",
          title: "井格重庆火锅（哈西万达店）",
          image: "http://img4.imgtn.bdimg.com/it/u=2153937626,1074119156&fm=26&gp=0.jpg",
          type: "food",
          score: 4.1,
          commentNum: 2555,
          comment: [
            {
              username: "匿名用户",
              image: "https://www.dpfile.com/ugc/user/anonymous.png",
              rate: 5,
              pics: ["http://p0picxxxxx", "http://picxxxxx"],
              evalaute: "xxxx"
            }
          ],
          tab: ["重庆火锅", "哈西万达"],
          address: "南岗区中兴大街168号",
          phone: "0451-85717159",
          businessTime: "周一至周日 09:30-21:00",
          service: ["提供wifi"],
          recommend: ["现炸酥肉", "井格毛肚"],
          avg_price: 95,
          deal_items: [
            {
              title: "100元代金券1张",
              price: 28.9,
              counter_price: 100,
              sale_num: 3409,
              priceType: "元"
            },
            {
              title: "50元代金券1张",
              price: 88,
              counter_price: 888,
              sale_num: 123,
              priceType: "元"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/products/right.scss";
</style>
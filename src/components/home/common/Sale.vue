<template>
  <div class="Sale">
    <div class="grab_top">
      <div class="con">
        <div class="title">
          <div class="left">
            <p class="name">健康优享</p>
            <p class="time">
              <span class="text">距时间仅剩 |</span>
              <span class="item">22222</span>
            </p>
          </div>
          <div class="more">
            更多
            <i class="iconfont icon-iconfontjiantou4"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="grab_list">
      <!-- {{grabTogether}} -->
      <ul class="list_ul">
        <li v-for="(item,idx) in grabTogether" :key="idx" @click="goto(item.itemId)">
          <div class="img_box default_pic">
            <img :src="item.mainimg3" alt>
            <p class="">{{item.flashSaleProductName}}</p>
            <p class="price">¥{{item.promotionPrice}}</p>
          </div>
        </li>
      
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    grabTogether:{
      type:[Array,String]
    }
  },
  methods: {
      goto(id){
        this.$router.push(`goods/item/${id}`)
      }
  }

};
</script>

<style lang="less" scoped>
.Sale {
  background-color: white;
      margin-top: .21333333rem;
    margin-bottom: .26666667rem;
  // margin-top: 0.21333333rem;
  .grab_top {
    border-bottom: 1px solid #eee;
  }
  .title {
    height: 1.333333rem;
    line-height: 1.333333rem;
    display: flex;
    justify-content: space-between;
    // align-items: center;
    .left {
      display: flex;
      .name {
        font-size: 0.5rem;
        font-weight: bold;
      }

      .time {
        .text {
          font-size: 0.4rem;
          color: #929292;
          margin-left: 0.533333rem;
          vertical-align: bottom;
        }
        .item {
          color: red;
          font-size: 0.5rem;
          vertical-align: bottom;
          margin-left: 0.166667rem;
        }
      }
    }

    .more {
      justify-content: flex-end;
      font-size: 0.32rem;
      color: #929292;
    }
  }

  .grab_list{
      height: 4.56rem;
      ul{
          display: flex;
           height: 4.56rem;
           width: 100%;
           overflow-y: hidden;
        overflow-x: auto;
   
           li{
                height: 4.56rem;
                .img_box{
                    text-align: center;
                    margin: .26666667rem .13333333rem;
                    img{
                        width: 2.133333rem;
                        
                    }
                  
                    p{
                 
                        height: .96rem;
                        line-height: .48rem;
                        font-size: .34666667rem;
                        color: #333;
                        padding: 0 .13333333rem;
                        width: 2.66666667rem;
                        white-space: normal;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .price{
                        color: #f35448;
                        font-size: .4rem;
                        padding: .13333333rem .13333333rem 0;
                    }
                }
           }
      }
      
  }
}
</style>

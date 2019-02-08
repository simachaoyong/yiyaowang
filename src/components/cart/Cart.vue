<template>
    <div class="Cart">
         <div class="device" id="page-cart">
            <header>
                <span class="header-title">购物清单</span>
                <span class="header-edit"  @click="toggleDelBtn">
                    <span v-show="!delFlag">编辑</span>
                    <span class="wc" v-show="delFlag">完成</span>
                </span>
            </header>
            <div class="page">
                <div class="empty-states" v-if="cart.length === 0">
                    <span>这里是空的，快去逛逛吧</span>    
                </div>
                <ul class="goods-list cart-list"  v-else>
                    
                    <li class="goods-item" v-for="(item, index) in cart" :key="index">
                      
                        <div class="item-selector">
                            <div class="icon-selector"  v-bind:class="{'selector-active': item.checked}" @click="checkGoodsHandel(item.id)">
                                <svg t="1504061791962" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2922" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12">
                                    <path d="M908.288 127.488l-537.6 537.6-254.976-254.976L0 525.824l254.976 254.976 115.712 115.712L486.4 780.8l537.6-537.6z"
                                        fill="#ffffff" p-id="2923"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="goods-img">
                            <img v-bind:src="item.img" v-bind:alt="item.name">
                        </div>
                        <div class="goods-info">
                            <p class="goods-title">{{ item.name }}</p>
                            <div class="goods-price">
                                <span>¥<b>{{ item.price }}</b></span>
                            </div>
                            <span class="des">库存99件</span>
                            <div class="goods-num">
                                <div class="num-btn" @click="plusCarPanelData(true, item.id)">+</div>
                                <div class="show-num">{{ item.quantity }}</div>
                                <div class="num-btn"  @click="subCarPanelData(false, item.id)">-</div>
                            </div>
                        </div>
                    </li>
                </ul>
                    
            </div>
            <div class="action-bar" v-bind:class="{ 'del-box': delFlag }" >
                <!-- del-box -->
                <div class="g-selector" @click="allCheckGoods(allChecked)">
                     
                    <div class="item-selector">
                      
                        <div class="icon-selector"   v-bind:class="{'selector-active': allChecked}">
                            <svg t="1504061791962" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2922" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12">
                                <path d="M908.288 127.488l-537.6 537.6-254.976-254.976L0 525.824l254.976 254.976 115.712 115.712L486.4 780.8l537.6-537.6z"
                                    fill="#ffffff" p-id="2923"></path>
                            </svg>
                        </div>
                    </div>
                    <span>全选</span>
                </div>
                <div class="action-btn buy-btn">去结算({{ checkedCount }})</div>
                <div class="action-btn del-btn" @click="delCheckedGoods">删除({{ checkedCount }})</div>
                <div class="total">合计：<span>¥<b>{{checkedPrice}}</b></span></div>
            </div>
        </div>   
        <FooterBar :navBar='router'/>
    </div>    
</template>

<script>

import FooterBar from 'com/Footer_tabBar';
export default {
    data () {
        return {
            router:'Cart',  
            // cart:this.$store.state.Cart.cart,
            checkAllFlag: false,
            selectedNum: 0,
            delFlag: false,
        }
    },
    components: {
        FooterBar
    },
    created () {
        console.log(this.$store.state.Cart.cart) 
        // this.cart=this.$store.state.Cart.cart;
    },
     methods: {
   
        toggleDelBtn: function () {

            this.delFlag = !this.delFlag;
            console.log(this.delFlag)
        },

      
      
        plusCarPanelData (state,id) {
            this.$store.commit('plusCarPanelData',id)
      },
      // 减少商品数量按钮
      subCarPanelData (state,id) {
        this.$store.commit('subCarPanelData',id)
      },
      // 商品勾选按钮
      checkGoodsHandel(id){
        this.$store.commit('checkGoods',id)
      },
      allCheckGoods(allChecked){
        
        this.$store.commit('allCheckGoods',this.$store.getters.allChecked)
        this.$store.commit('setAllChecked')
       
      },
         delCheckedGoods(){
      this.$store.commit('delCheckedGoods')
      },
                        
    },
    computed: {
       cart:function(){
           console.log(this.$store.state)
           return this.$store.state.Cart.cart;
       },
         totalPrice: function () {
          
            var num = 0;
            this.cart.forEach(function (item) {
                item.checked && (num += parseFloat(item.subtotal));
            });
           
            return num;
        },
        
        // 总数量
         count(){
        return this.$store.getters.totleCount

      },
       allChecked(){
           console.log(this.$store)
            return this.$store.getters.allChecked
      },
           // 商品总数
      checkedCount(){
         return this.$store.getters.checkedCount
      },
      // 商品全额
      checkedPrice(){
        return this.$store.getters.checkedPrice.toFixed(1)
      },
    
    },
    
   
}
</script>

<style lang="less" scoped>
device {
    position: relative;
    margin: .266667rem;
    float: left;
    width: 10rem;
    height: 17.786667rem;
    background-color: #eee;
    border-radius: .106667rem;
    overflow: hidden;
}

header {
    padding: 0 4%;
    position: relative;
    height: 1.173333rem;
    line-height: 1.173333rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
}

.header-title {
    position: absolute;
    margin-left: 21%;
    width: 50%;
    font-size: .426667rem;
    text-align: center;
}

.header-edit {
    float: right;
    padding: 0 .266667rem;
    cursor: pointer;
    font-size: .426667rem;
    
}

.tab-wrap {
    height: 1.6rem;
    background: red;
    overflow: hidden;
}

.cate-tab {
    white-space: nowrap;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    background-color: #5D4285;
}

.cate {
    display: inline-block;
    width: 2.133333rem;
    height: 1.866667rem;
    color: #fff;
    line-height: 1.6rem;
    text-align: center;
}

.tab-active {
    background-color: #9A51FF;
}

.filter-bar {
    display: flex;
    height: 1.066667rem;
    background-color: #fff;
    border-bottom: 1px solid #E5E5E5;
    line-height: 1.066667rem;
}

.filter-opt {
    position: relative;
    width: 33.3%;
    color: #5F646E;
    text-align: center;
}

.filter-active {
    color: #7B57C5;
}

.filter-price:after {
    position: absolute;
    top: .346667rem;
    margin-left: .106667rem;
    content: '';
    display: inline-block;
    width: .213333rem;
    height: .373333rem;
    background: url('../../assets/arrow-default.png') no-repeat;
    background-size: .213333rem .373333rem;
}

.filter-active.price-up:after {
    background: url('../../assets/arrow-down.png') no-repeat;
    background-size: .213333rem .373333rem;
}

.filter-active.price-down:after {
    background: url('../../assets/arrow-up.png') no-repeat;
    background-size:.213333rem .373333rem;
}

.goods-list {
    padding-top: .213333rem;
    height: 13.68rem;
    overflow-y: scroll;
}

.cart-list {
    height: 14.933333rem;
}

.goods-item {
    display: flex;
    margin-bottom: .213333rem;
    padding: .266667rem .16rem;
    min-height: 1.653333rem;
    background: #fff;
}

.goods-img {
    position: relative;
    margin-right: 4%;
    display: block;
    width: 16%;
}

.goods-img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.goods-item .flag {
    position: absolute;
    top: 0;
    left: 0;
    width: .533333rem;
    height: .533333rem;
    font-size: .32rem;
    color: #fff;
    text-align: center;
    line-height: .533333rem;
    background-color: #FC5951;
    border-radius: 50%;
}

.goods-info {
    position: relative;
    width: 80%;
}

.goods-title {
    width: 80%;
    height: 1.013333rem;
    color: #363636;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.goods-price {
    margin-top: .16rem;
    line-height: 1;
}

.goods-price span {
    font-size: .48rem;
    color: #7a45e5;
    /*   background: linear-gradient(90deg, #03D2B3 0, #2181FB 80%, #2181FB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
}

.des {
    font-size: .32rem;
    color: #888;
}

.save {
    position: absolute;
    right: .266667rem;
    bottom: .053333rem;
    width: .853333rem;
    height: .586667rem;
    background-color: #7a45e5;
    font-size: .426667rem;
    line-height: .506667rem;
    text-align: center;
    color: #fff;
    border-radius: .32rem;
    overflow: hidden;
}

.empty-states {
    padding-top: 1.6rem;
    font-size: .48rem;
    color: #AEB0B7;
    text-align: center;
}

.cart-list .goods-info {
    width: 68%;
}

.item-selector {
    width: 12%;
}

.icon-selector {
    position: relative;
    margin: .426667rem auto 0 auto;
    width: .426667rem;
    height: .426667rem;
    border-radius: 50%;
    border: .053333rem solid #ccc;
    cursor: pointer;
}

.selector-active {
    background-color: #7a45e5;
    border-color: #7a45e5;
}

.selector-active .icon {
    position: absolute;
    top: .053333rem;
    left: .053333rem;
}

.goods-num {
    position: absolute;
    right: .266667rem;
    top: .106667rem;
    width: .853333rem;
    color: #999;
    text-align: center;
}

.show-num {
    line-height: .746667rem;
}

.num-btn {
    width: 100%;
    height: .64rem;
    font-size: .533333rem;
    line-height: .533333rem;
    cursor: pointer;
}

.action-bar {
    position: fixed;
    left: 0;
    bottom: 1.466667rem;
    width: 100%;
    height: 1.386667rem;
    font-size:.4rem;
    background-color: #fff;
    border-top: 1px solid #ddd;
}

.g-selector {
    float: left;
    width: 1.973333rem;
    margin-left: 4%;
    height: 1.386667rem;
    cursor: pointer;
}

.g-selector .item-selector {
    position: relative;
    display: inline-block;
}

.g-selector span {
    position: absolute;
    margin-left: .533333rem;
    color: #5F646E;
    top: .4rem;
}

.total {
    float: right;
    color: #363636;
    font-size: .373333rem;
    line-height: 1.333333rem;
    margin-right: .533333rem;
}

.total span {
    color: #7A45E5;
}

.total b {
    font-size: .453333rem;
    margin-left: .106667rem;
}

.action-btn {
    float: right;
    width: 3.2rem;
    height: 100%;
    color: #fff;
    text-align: center;
    font-weight: 300;
    line-height: 1.386667rem;
    cursor: pointer;
}

.buy-btn {
    background-color: #7A45E5;
}

.del-btn {
    display: none;
    background-color: #FF4069;
}

.del-box .total {
    display: none;
}

.del-box .buy-btn {
    display: none;
}

.del-box .del-btn {
    display: block;
}
</style>

<template>
    <div class="CartBar">
        <ul>
            <li class="icon">
                <i class="iconfont icon-service_icon">

                </i>
                <span>
                    客服
                </span>
            </li>
            <li class="icon">
                <i class="iconfont icon-icowodeshoucang">

                </i>
                <span>
                    收藏
                </span>
            </li>
            <li class="icon cart_info">
                <i class="iconfont icon-xiazai1">

                </i>
                <span>
                      <mt-badge type="warning">{{checkedCount}}</mt-badge>
                    购物车
                </span>
            </li>
            <li class="btn"  @click="showCart">
                  
                    加入购物车
            </li>
        </ul>
    </div>    
</template>

<script>
import qs from 'qs';

export default {
    methods: {
        showCart(){
            // 没有商品规格的产品
            if(!this.product_info.seriesAttrs){
                console.log(666)
            }
            // 有商品规格的产品
            else{
                // 初始化数据
                let activeItem=this.product_info.seriesAttrs.match(/:[\S]+/)[0].slice(1,-1);
                this.bus.$emit('active',activeItem);
                this.$store.commit('chageProductSize',true);
                 this.bus.$emit('mingcheng',this.product_info.originalPrice);


            }
        },
        addToCart(){
            
             var alreadyIndex = Cart.cart.findIndex(function (item, index) {
                return item.id === goods.id;
            });
        }


    },
     props: {
        //商品具体信息
        product_info:{
            type:[Object,String]
        },
    
    },
    mounted () {
        // this.getProduct()

    },
    computed: {
          // 总数量
         checkedCount(){
           console.log(this.$store.getters.checkedCount)
            return this.$store.getters.checkedCount

        }
    }
}
</script>

<style lang="less" scoped>
    .CartBar{
        height:1.466667rem;
        position:fixed;
        bottom: 0;
        left: 0;
        right:0;
        ul{
            background-color: white;
            display: flex;
            align-items: center;
            li{
                height:1.466667rem;
                border-top: 1px solid #eeeeee;
                border-right: 1px solid #eeeeee;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: .426667rem;
            }
            .icon{
                flex: 1;
            }
            .btn{
                max-width: 4.8rem;
                min-width: 4.26666667rem;
                font-size: 0.42666667rem;
                background: #FF6666;
                color: #fff;
            }
        }
        .cart_info{
            position: relative;
            &/deep/.mint-badge.is-size-normal{
                position: absolute;
                top: .266667rem;
                right:.16rem;
                background-color: red;
                padding: 1px 3px;
            }
        }
    }
</style>

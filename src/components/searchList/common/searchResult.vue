<template>
    <div class="searchResult">
        <div class="search_list_type">
            <div v-for="(item,index) in goodslist" :key="index" @click="goto(item.itemId)">
                <div class="search_result_list_unit">
                    <img class="pro_img" :src="item.img">
                    <h2 class="pro_name">
                        <img v-if="item.venderType==1" src="../../../assets/self.png"><!-- 自营 -->
                        <img v-if="item.venderType==0" src="../../../assets/business.png"><!-- 商家 -->
                        {{item.name}}
                    </h2>
                    <div class="pro_type">
                        <img v-if="item.attrLabels==3" src="../../../assets/chinese.png"><!-- 中成药 -->
                        <img v-if="item.attrLabels==4" src="../../../assets/western.png"><!-- 西药 -->
                    </div>
                    <div class="pro_promotion_type">
                        <img v-if="item.tcProducts!=null" src="../../../assets/setmeal.png"><!-- 套餐 -->
                        <img v-if="item.activity!=''" src="../../../assets/gift.png"><!-- 满赠 -->
                        <img v-if="item.isGoldMedal==1" src="../../../assets/goldmedal.png"><!--金牌药房-->
                        <img v-if="item.isGoldMedal==2" src="../../../assets/diamond.png"><!-- 钻石商家 -->
                    </div>
                    <span v-if="item.prescription==13&&item.userGrade!=0" class="review_num">
                        {{item.userGrade}}条评论  <i>好评率{{item.goodsUserGradeRate}}%</i>
                    </span>
                    <span v-if="item.prescription==16&&item.comments!=0" class="ask_answer_num">
                        {{item.comments}}条问答
                    </span>
                    <div class="search_price">
                        <span class="price">￥<i>{{item.price|getPrice}}</i>.{{item.price|getPrice2}}</span>
                        <span class="del_price">￥{{item.marketPrice}}</span>
                    </div>
                    <!-- 13属于非处方药，16属于处方药 -->
                    <span v-if="item.prescription==13" class="search_add_cart_btn" 
                    @click.stop="addCart(item.itemId,item.name,item.price,item.img)">
                        <i class="iconfont">&#xe602;</i>
                    </span>
                </div>
            </div>
            <div class="loading-layer">没有数据了</div>
        </div>
    </div>
</template>

<script>
import qs from 'qs';
export default {
    name:'SearchResult',
    components: {
        
    },
    props:['goodslist'],
    data () {
        return {
            // goodslist:[]
        }
    },
    methods:{
        goto(id){
            this.$router.push(`goods/item/${id}`);
        },
        //加入购物车
        addCart(id,name,price,img){
            // console.log(name);
            // let id=id;
            // let name=name;
            // let quantity=1;
            // let price=price;
            // let img=img;
            // let checked=false;
            let data={id,name,quantity:1,price,img,checked:false}
            // console.log(data);
            this.$store.commit('addToCart',data);
        }
    },
    created(){
        // this.getGoods();
    }
}
</script>

<style lang="less" scoped>
@import url('../../../styles/main.less');
.searchResult{
    .padding(132,0,0,0);
    .search_list_type{
        background: #fff;
        .margin(10,0,0,0);
        overflow: hidden;
        .search_result_list_unit{
            position: relative;
            .padding(0,0,0,112);
            .minh(141);
            border-bottom: 1px solid #eee;
            .pro_img{
                .w(80);
                .h(80);
                position: absolute;
                .left(12);
                .top(28);
            }
            .pro_name{
                overflow: hidden;
                .lh(20);
                .fs(14);
                .padding(10,8,0,0);
                .maxh(50);
                img{
                    .h(13);
                    float: left;
                    .margin(3,4,0,0);
                }
            }
            .pro_type{
                overflow: hidden;
                .margin(4,0,0,0);
                img{
                    .h(12);
                    .margin(0,4,0,0);
                }
            }
            .pro_promotion_type{
                overflow: hidden;
                .margin(4,0,0,0);
                img{
                    float: left;
                    .h(12);
                    .margin(0,4,4,0);
                }
            }
            .review_num{
                color: #999;
                display: block;
                position: absolute;
                .left(112);
                .bottom(12);
                .fs(13);
            }
            .ask_answer_num{
                color: #1a6abd;
                display: block;
                position: absolute;
                .left(112);
                .bottom(12);
                .fs(13);
            }
            .search_price{
                position: absolute;
                .left(112);
                .bottom(32);
                clear: both;
                span{
                    float: left;
                    .margin(0,4,0,0);
                }
                .price{
                    color: #f66;
                    .fs(13);
                    i{
                        .fs(20);
                    }
                }
                .del_price{
                    text-decoration: line-through;
                    color: #999;
                    display: none;
                    .fs(13);
                }
            }
            .search_add_cart_btn{
                .padding(10,10,10,10);
                position: absolute;
                .right(10);
                .bottom(2);
                cursor: pointer;
                i{
                    color: #f66;
                    .fs(26);
                }
            }
        }
        .loading-layer{
            width: 100%;
            .h(60);
            text-align: center;
            .lh(60);
            .fs(16);
            color: #aaa;
        }
    }
}
</style>
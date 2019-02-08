<template>
    <div class="searchResult2">
        <div class="search_list_type">
            <div v-for="(item,index) in goodslist" :key="index" @click="goto(item.itemId)">
                <div class="search_result_list_unit">
                    <img class="pro_img" :src="item.img">
                    <h2 class="pro_name">
                        <img v-if="item.venderType==1" src="../../../assets/self.png"><!-- 自营 -->
                        <img v-if="item.venderType==0" src="../../../assets/business.png"><!-- 商家 -->
                        {{item.name}}
                    </h2>
                    <div class="pro_promotion_type">
                        <img v-if="item.tcProducts!=null" src="../../../assets/setmeal.png"><!-- 套餐 -->
                        <img v-if="item.activity!=''" src="../../../assets/gift.png"><!-- 满赠 -->
                        <img v-if="item.isGoldMedal==1" src="../../../assets/goldmedal.png"><!--金牌药房-->
                        <img v-if="item.isGoldMedal==2" src="../../../assets/diamond.png"><!-- 钻石商家 -->
                    </div>
                    <span v-if="item.prescription==13&&item.userGrade!=0" class="review_num">
                        {{item.userGrade}}条评论
                    </span>
                    <span v-if="item.prescription==16&&item.comments!=0" class="ask_answer_num">
                        {{item.comments}}条问答
                    </span>
                    <div class="search_price">
                        <span class="price">￥<i>{{item.price|getPrice}}</i>.{{item.price|getPrice2}}</span>
                        <span class="del_price">￥{{item.marketPrice}}</span>
                    </div> 
                    <span v-if="item.prescription==13" class="search_add_cart_btn" @click.stop="addCart(item.name)">
                        <i class="iconfont">&#xe602;</i>
                    </span>     
                </div>
            </div>
            <div class="loading-layer">没有数据了</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'SearchResult2',
    components: {
        
    },
    props:['goodslist'],
    data () {
        return {

        }
    },
    methods:{
        goto(id){
            this.$router.push(`goods/item/${id}`);
        },
        addCart(name){
            console.log(name);
        }
    },
    created(){
        
    }
}
</script>

<style lang="less" scoped>
@import url('../../../styles/main.less');
.searchResult2{
    .padding(132,0,0,0);
    .search_list_type{
        background: #fff;
        .margin(10,0,0,0);
        overflow: hidden;
        .search_result_list_unit{
            position: relative;
            width: 50%;
            float: left;
            border-bottom: 1px solid #eee;
            text-align: center;
            .minh(270);
            border-right: 1px solid #e7e7e7;
            .pro_img{
                .w(140);
                .h(140);
                display: inline-block;
                .margin(10,0,0,0);
            }
            .pro_name{
                text-align: left;
                overflow: hidden;
                .padding(10,10,0,10);
                .maxh(50);
                .lh(20);
                .fs(14);
                img{
                    .h(13);
                    float: left;
                    .margin(3,4,0,0);
                }
            }
            .pro_promotion_type{
                overflow: hidden;
                .h(14);
                .padding(0,0,0,10);
                .margin(4,0,0,0);
                img{
                    float: left;
                    .h(12);
                    .margin(0,4,4,0);
                }
            }
            .review_num{
                position: absolute;
                .left(10);
                .bottom(10);
                text-align: left;
                clear: both;
                color: #999;
                .fs(12);
            }
            .ask_answer_num{
                text-align: left;
                color: #1a6abd;
                display: block;
                .padding(0,0,0,10);
                .fs(12);
            }
            .review_num~.search_price{
                position: absolute;
                .left(10);
                .bottom(22);
            }
            .search_price{
                position: absolute;
                .left(10);
                .bottom(10);
                clear: both;
                overflow: hidden;
                .price{
                    color: #f66;
                    .fs(13);
                    i{
                        .fs(18);
                    }
                }
                .del_price{
                    text-decoration: line-through;
                    color: #999;
                    display: none;
                }
            }
            .search_add_cart_btn{
                .padding(5,5,5,5);
                position: absolute;
                .right(10);
                .bottom(5);
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
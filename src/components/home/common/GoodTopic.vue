<template>
    <div class="Goods">
        <div class="good_top">
            <div class="con">
                 <i class="iconfont icon-like">

                </i>
                  <p>精选专题</p>
               
            </div>
        </div>
        <!-- {{goodsTopic}} -->
        <div class="good_list" v-for="item in goodsTopic" :key="item.id">
            <div class="con">
                 <div class="good_banner default_img">
                    <img :src="item.picUrl" alt="">
                </div>
                <ul class="list_ul">
                    <li v-for="Item in item.goodProducts" :key="Item.id" @click="goto(Item.itemid)">
                        <div class="img_box">
                            <img :src="Item.productImg" alt="">
                        </div>
                        <p class="pro_name">
                            {{Item.productName}}
                        </p>
                        <p class="price">
                                ¥{{Item.sellPrice}}
                        </p>
                    </li>
                </ul>
            </div>
           
        </div>
    </div>
</template>


<script>
export default {
    props:{
        goodsTopic:{
            type:[Object,Array,String]
        }
    },
    methods: {
        goto(item){
           this.$router.push(`goods/item/${item}`)
        }
    }
}
</script>



<style lang="less" scoped>
    .Goods{
        background-color: white;
        margin-top: .266667rem;
        .good_top{
            .con{
                display: flex;
                font-size: .4rem;
                background-color: white;
                height: 1.2rem;
                align-items: center;
                i{
                    color: red;
                    font-weight: bold;
                }
                p{
                    color: #4a4a4a;
                    margin-left: .233333rem;
                }
            }
        }

        .good_list{
            .con{
                .good_banner{
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }

                .list_ul{
                    width: 100%;
                    overflow-y: hidden;
                    overflow-x: auto;
                    white-space: nowrap;
                    li{
                        width: 33.333333%;
                        height: 4.53333333rem;
                        display: inline-block;
                        padding: 0 .13333333rem;
                        overflow: hidden;
                        img{
                            height: 2.13333333rem;
                            text-align: center;
                            width: auto;
                            max-width: 100%;
                        }
                        .pro_name{
                            font-size: .34666667rem;
                            color: #333;
                            padding: 0;
                            height: 1.06666667rem;
                            line-height: .53333333rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            white-space: normal;
                        }
                        .price{
                            color: #f35448;
                            font-size: .4rem;
                            padding-top: .13333333rem;
                        }
                    }
                }
            }
        }

    }
</style>

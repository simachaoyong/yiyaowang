<template>
    <div class="itemPart ">
      
        <div class="title" >
            <div class="pro_sider_des con" v-if="product_info.gift">
		{{product_info.gift}}
            </div>     
        </div>
        
        
        <!-- 商品信息 -->
        <div class="pro_part">

            <div class="pro_title" v-if="product_info.productName">
                <h1>
                    <span class="icon_ziying">
                       {{product_info.productName}}
                    </span>
                </h1>
            </div>
            <div class="pro_price" v-if="product_info.originalPrice">
                <span>
                   ￥{{product_info.originalPrice}}
                </span>
                
            </div>
            <p class="pro_note">
                {{product.supplier}}
            </p>
            <p class="pro_note">
                <i>批准文号：</i>
                <span class="biaozhun">{{product_info.approvalnum}}</span>
                <span class="hreft">(国家食药局查询)</span>
            </p>
            <p class="pro_label"  @click="showDefault">
                <span v-for="(item,idx) in product.service_list" :key="idx">
                    {{item.service_desc}}
                </span>
                
            </p>

        </div>
            <!-- 商品信息 END-->

            <!-- 推荐装 -->
            <!-- <div class="pro_group">
                <div class="pro_block">
                    <div class="pro_item">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAYAAAB/E6/TAAAAAXNSR0IArs4c6QAAAodJREFUSA3tVU1oE1EQntlsiqkEAk2L3gQvFSF48Ad76EnsST3UFi+KCB6kP7QIEaXSFOnB1EPJpueeegqKRz2IiCVgCf6BRepJECrYHGxIm2Kyz++F0Oy+t4l72HgQF4adeTPffPPmzb5lkUxGaXd3moRIEFEIEtwjRJUMY416eiyTdnaWQTIcXHYlk21fpq2tPgMkFxVXJ8whA1nDncis5AxLor/yeBGViHmUEokuHOQJVPHRRyV5Ms1+xB8A9gZkT8XoRIYxw9lsjtbXz2BavgAwAhEqcN+WSbu7h8m2N2VhwC7D92jf31B0IqI1MTV1mKrV11QsXuGlpQ1U+FMFOuyvvLDwHUS3JEakUnJXbxz+uqoTCXGWFxc3EXwKEStifLwfkxlTgQ77SL2wSCRL4fBpTqUqiB9w+OuqTkT0AMlH0IICIo5CHqsgly1EF3bylCqVPhT4XkxM3ATRbVcMDBZjY3r/mcsUj8fwoY0CtKKCWtjnKRotUKlUlHldMcyfvXaEoxcHcT5DIHuCFn5zgbyNT9Tb+4LK5UsaSSPem0g6bfsezc7uYZKugUwb1wZevkqIuYq3CUzSse5SWxMRDdDk5F3OZF5SKHQOZBsupDSYP2AABtmy3qHNaawc02IaC95n5Iw2jPuUycxTLmfQ6uogqpa3vA15S5aVp7m5UJ1EiGknzKXjjP5MJBHMBchDikSeczpdkksY6RhIL1CtdgfmcbnW8vFN1MxQg/oDYoA4jqFp1/omCkRm0/KlyR/joXqk0L+Kdhn8VdQug0/ffyKfjdLD/sXWMVf1jQa+8ku27lngadWEzK9M/EOu0/b2PG7gk/AHe2ZC1HCD5HF1zajcHbN/AyH8xVGDOtcWAAAAAElFTkSuQmCC" alt="">
                        推荐装
                    </div>
                    <div class="pro_group_box">
                        <span>
                            3件
                        </span>
                        <i>|</i>
                         ¥31.50 * 1件
                    </div>
                </div>
            </div> -->
            <!-- 推荐装 END-->

            <!-- 推荐商品组合 -->
            <div class="recommend" v-if="comboData">
                <div class="con">
                    <div class="title">
                            <p>
                              {{comboData[0].productname}}
                            </p>
                    </div>

                    <div class="pro_group_list">
                        <ul >
                         
                            
                            <li v-for="item in comboData[0].details" :key="item.id" >
                                <img :src="item.mainimg5" alt="">
                                <p class="pro_name">{{item.productname}}</p>
                                <div class="item">
                                    <p class="price">¥{{item.tcd_detail_price}}</p>
                                <i>x2</i>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 推荐商品组合 END -->

            <!-- 药师推荐 -->
            <!-- <div class="pro_appraise">
                <div class="con">
                     <div class="pro_block">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAAXNSR0IArs4c6QAAATFJREFUSA1jDF31n+3p3e9NDAz/4/4z/JdkoDFgZGB8zsDAuEhambNudRjjLxaQ5f8Z/pXT2F648RBP/i8H2gsSq2AC+RwuS1cGxF4megQ7Nn/B7AWGwMCCUQewEIqA45U8jITUgOQt27/8J0YdupoBjwKCIUCuz9B9ios/4CEw4A4gGAXEJkL0ICY26gZ/CBDrE/QQIJY/4CEw6oCRGwKMjIzPQAl1wEIA2DZcBHIAgYKI8R9IEZUBsFHKsEhbkLP+KJCB1QFA1z1mYWJxP1TOfp3KlsONOw5lYTqAkeE6Cyuj+6Fi9sdw1TRkoKQBYMI4wcfGbXOomIsuloP8BXcAMNi3CQtyOe8sYnxHQw9jGA2JAkbGRWzmXMmbHRn/YKigtYB1x7fu////E9Xuo4VbAHA6Sgn7T91sAAAAAElFTkSuQmCC" alt="">
                        <span>
                            药师点评
                        </span>
                    </div>
                    <div class="pro_appraise_text">
                            <p>
                                暂无
                            </p>
                            <i class="iconfont icon-iconfontjiantou4">

                            </i>
                    </div>
                </div>
               
            </div> -->
            <!-- 药师推荐 END -->

            <!-- 价格合计 -->
            <!-- <div class="pro_part heji">
             
                        <div class="l">
                            <p class="pro_total_price">
                                合计:
                                <span>
                                    ¥ 80.00
                                </span>
                            </p>
                            <p class="pro_original_price">
                                原价:
                                <span>
                                     ¥ 81.00
                                </span>
                            </p>
                        </div>
                        <div class="r btn">
                            加入购物车
                        </div>
                
            </div> -->
            <!-- 价格合计 END -->

            <!-- 商品规格 -->
            <div class="productSize con" v-if="product_info.seriesAttrs" @click="showSize(product_info.seriesAttrs)">
                <div class="l">
                    <span>
                        已选：
                    </span>
                    <p>{{product_info.seriesAttrs}}</p>
                </div>
                <div class="r">
                    <i class="iconfont icon-iconfontjiantou4"></i>
                </div>
            </div>

            <!-- 商品规格 END -->

            <!-- 商家评价 -->
            <div class="pro_review" v-if="productComment"> 
               
                    <div class="title">
                        <div class="con">
                             <span>
                                商品评价
                            </span>
                        </div>
                    </div>
 
                    <ul class="con">
                    
                            <li v-for="(item,idx) in productComment" :key="item.id">
                                <div class="l">
                                    <p class="info">{{item.content}}</p>
                                    <p class="time">
                                        <span>{{item.userName}}</span>
                                        <i>|</i>
                                        <span>{{item.releaseDate}}</span>

                                    </p>
                                </div>
                                <div class="r">
                                       <vm-rate
                                        v-model="valueD1[idx]"
                                        disabled
                                        size=".3rem"
                                        :allow-half="true"
                                        show-text
                                        text-color="#ff9900"></vm-rate>
                                </div>
                           
                            </li>
                      
                        
                    </ul>

                    <div class="btn_more" @click="goComment">
                        查看<span>
                            {{usergradecount}}
                        </span>
                        条评价
                    </div>
                
            </div>

            <!-- 商家评价 END -->


            <!-- 继续上划加载图文详情 -->
            <div class="pro_notice">
                <span>
                    继续上滑，加载图文详情
                </span>
            </div>
             <!-- 继续上划加载图文详情 END -->

            
    </div>    
</template>


<script>
import qs from 'qs';
import Vue from 'vue'
import VmRate from 'vue-multiple-rate'
import 'vue-multiple-rate/lib/rate.css'

Vue.component(VmRate.name, VmRate)
export default {
    data () {
        return {
            selected:'1',
            Comment:'',     //处理用户评论 
            productComment:'',        //用户评论
            valueD1:[],               //获取星星的评分
            usergradecount:'',         // 用户评论总数
        }
    },
    props: {
        //商品具体信息
        product_info:{
            type:[Object,String]
        },
        //所有信息
        product:{
            type:[Object,String]
        },
        //多商品推荐
        comboData:{
            type:[Object,String,Array]
        },
        // 商品id
        picInfoId:{
            type:[Object,String,Array]
        }

    },
    async created () {
        // console.log(this.product_info)
       // 用户评论
    //    console.log(this.picInfoId)
         let timer = Date.now();
        let Comment=qs.stringify({
            token:'',
            cartkey: 'b9d028bb67a6fd684cc25024c0e120f5',
            demandcartkey: 'b9d028bb67a6fd684cc25024c0e120f5',
            provinceid: 1,
            province: 1,
            provincename: '广东',
            tradername: 'yw_app',
            trader: 'h5',
            closesignature: 'yes',
            signature_method: 'md5',
            timestamp: this.timer,
            signature: '****',
            siteid: 9,
            itemId: this.picInfoId,
           
        });
        let CommentData=await this.$axios.post(
            `/api/product/v1/review/getReviewOfDetailBtn?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1547276906588&signature=****&siteid=9`,
            Comment
          )
          this.usergradecount=CommentData.data.data.usergradecount
        
           if(CommentData.data.data.comment){
               
            this.productComment=CommentData.data.data.comment.splice(0,2);
           
            //获取星星评分
            for(let i=0;i<this.productComment.length;i++){
                this.valueD1.push(this.productComment[i].grade*1);
            }
          
          }
          else{
              this.productComment=null;
          }
    
    },
    methods: {
        showDefault() {
            let data=this.product.service_list;
            console.log(this.product.service_list)
            // data[0].service_content
      this.$createActionSheet({
        title: '服务详情',
        data: [
            
          {
            content: `<div id="productIngo" style="padding: 0.26666667rem 0;">
                    <p style="height: .693333rem;line-height: .693333rem;color: #333;">${data[0].service_content}</p>
                    <p style="height: .693333rem;line-height: .693333rem;color: #808080;">${data[0].service_desc}</p>
            </div>`,
            align: 'left',
           
              
          },
          {
            content: `<div id="productIngo" style="padding: 0.26666667rem 0;">
                    <p style="height: .693333rem;line-height: .693333rem;color: #333;">${data[1].service_content}</p>
                    <p style="height: .693333rem;line-height: .693333rem;color: #808080;">${data[1].service_desc}</p>
            </div>`,
            align: 'left',
        
          },
          {
            content:`<div id="productIngo" style="padding: 0.26666667rem 0;">
                    <p style="height: .693333rem;line-height: .693333rem;color: #333;">${data[2].service_desc}</p>
                    <p style="height: .693333rem;line-height: .693333rem;color: #808080;    white-space: pre-wrap;">${data[2].service_content}</p>
            </div>`,
            align: 'left',
            
          }
        ],
        class: 'ddd',
        
        // onSelect: (item, index) => {
        //   this.$createToast({
        //     txt: `正在加载`,
        //     time: 1000
        //   }).show()
        // }
      }).show()
    },
    showSize(item){
        let activeItem=item.match(/:[\S]+/)[0].slice(1,-1);
        this.$store.commit('chageProductSize',true)
        // console.log(this.$store.state.Product.ProductSizeState)
        this.bus.$emit('active',activeItem);

        this.bus.$emit('mingcheng',this.product_info.originalPrice);

    }
    ,
    goComment(){
          this.$store.commit('changeProductClass','comment');
            localStorage.setItem('ProductClass','comment')
             this.$router.replace(`/goods/comment/${this.picInfoId}`)
    }
  }
    
}
</script>

<style lang="less" scoped>
    .itemPart{
        //  background: #fff;
        &>.title{
            background-color: white;
            margin-bottom: 0.13333333rem;
                &> .pro_sider_des{
                font-size: 0.37333333rem;
                color: #FF6666;
                margin-bottom: 0.13333333rem;
                padding-left:0.4rem;
                padding-right: 0.4rem;
            }
        }
      
      

        // 商品信息
        &>.pro_part{
            background-color: white;
            margin-top: .333333rem;
            font-size: 0.42666667rem;
            padding: 0.26666667rem 0.26666667rem 0.26666667rem 0.4rem;
            word-break: break-all;
            font-size: 0.42666667rem;
            color: #010101;
            line-height: 0.64rem;
            min-height: 0.8rem;
            border-bottom: 1px solid #DFDFDF;
            &> .pro_title{
                font-size: 0.42666667rem;
                border-bottom: 1px solid #DFDFDF;
                height: 1.493333rem;
                line-height: 1.493333rem;
                h1{
                      width: 9.333333rem;
                   overflow: hidden;
                   white-space:nowrap;
                   text-overflow: ellipsis;
                 
                }
            }
            &>.pro_price{
                    font-size: 0.42666667rem;
                    color: #FF6666;
                line-height: 1.333333rem;
                height: 1.333333rem;
                    span{
                        font-size: 0.64rem;
                    }
                }



            &>.pro_note{
                padding: 0 0.4rem 0.26666667rem 0;
            color: #808080;
            font-size: 0.37333333rem;
            line-height: 0.53333333rem;
                .biaozhun{
                    margin: 0 .213333rem;
                }
                .hreft{
                    color: blue;
                }
            }

            &>.pro_label{
                padding: 0 0.4rem 0.26666667rem 0;
                // border-bottom: 1px solid #e1e1e1;
                span{
                        color: #676767;
                        font-size: 0.34666667rem;
                }

               
            }
                

        

        }
         

        // 推荐组合
        &>.recommend{
            background-color: white;
            margin-top: 0.13333333rem;
            .title{
                height: 1.28rem;
                line-height: 1.28rem;
                border-bottom: 1px solid #E1E1E1;
                p{
                    color: #3987F4;
                    border-bottom: 1px solid #3987F4;
                    height: 1.28rem;
                    line-height: 1.28rem;
                    width: 2.666667rem;
                    font-size: .333333rem;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow:ellipsis;
                }
            }
             .pro_group_list{
                 ul{
                    display: flex;

                }
                 li{
                    width: 2.933333rem;
                    margin-right: .266667rem;
                     img{
                        width: 2.666667rem;

                    }
                     p{
                        font-size: 0.34666667rem;
                        color: #333;
                        margin: 0 0 0.13333333rem 0;
                        height: 0.90666667rem;
                        line-height: 0.45333333rem;
                        width: 2.66666667rem;
                        white-space: normal;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .item{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        p{
                            
                            height: .346667rem;
                        }
                        i{
                            color: #A7A7A7;
                            font-size: .333333rem;
                        }
                    }
                }
            }

        }
        
        //  合计
        &>.heji{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .l{
                font-size: 0.42666667rem;
                color: #666;
                .pro_total_price{
                    height: .693333rem;
                    line-height: .693333rem;
                    span{
                        color: #FF6666;
                        font-size: 0.48rem;
                    }
                }
                .pro_original_price{
                        color: #999;
                        text-decoration: line-through;
                        font-size: .34rem;
                }
            }
            .btn{
                    color: #FF6666;
                    border: 1px solid #FF6666;
                        width: 2.88rem;
                    height: 0.85333333rem;
                    line-height: 0.85333333rem;
                    border-radius: 14px;
                    text-align: center;
            }
        }


        // 商家评价
        &>.pro_review{
            margin-top:0.13333333rem;
            background-color: white;
            
            .title{
                height: 1.146667rem;
                line-height: 1.146667rem;
                font-size: 0.37333333rem;
                color: #FF6666;
                border-bottom: 1px solid #e1e1e1;
                height: 1.146667rem;
                    span{
                        border-bottom: 1px solid #FF6666;
                        display: inline-block;
                        height: 1.146667rem;
                        line-height: 1.146667rem;
                    }
            }

            ul{
                li{
                   border-bottom: 1px solid #e1e1e1;
                    padding: 0.26666667rem 0;
                    height: 2rem;
                    display: flex;
                    justify-content: space-between;
                    .l{
                          font-size: 0.37333333rem;
                        .info{
                            color: #020202;
                          
                        }
                        p{
                            line-height: .693333rem;
                            
                        }
                        i{
                            margin: 0 .16rem;
                        }
                        .time{
                            color: #828282;

                        }
                    }

                    .r{
                        align-self: flex-end;
                        &/deep/.vm-rate-icon-star-full{
                            color: red !important;

                        }
                        &/depp/.vm-rate__text{
                            color: red !important;
                            
                        }
                    }
                    
                }
            }

            .btn_more{
                font-size: 0.37333333rem;
                text-align: center;
                color: #828282;
                height: .746667rem;
                line-height: .746667rem;

            }
        }
    
        //已选的商品规格
        &>.productSize{
            background-color: white;
            margin: .266667rem 0;
            display: flex;
            justify-content: space-between;
            height: 1.146667rem;
            font-size: .48rem;
            align-items: center;
            .l{
                display: flex;
                
            }
        }
    
        //继续上划加载图文详情
        &>.pro_notice{
          
            height: 1.146667rem;
            color: #999;
            padding-top: .133333rem;
            padding-bottom: .133333rem;
            font-size: 0.34666667rem;
            margin: 0 0.53333333rem;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            &:before{
                position: absolute;
                top: 50%;
                left: 0;
                content: '';
                width: 100%;
                margin-top: -0.02666667rem;
                height: 0.05333333rem;
                background: #000000;
                opacity: 0.2;
            }
            & span{
                   position: relative;
                    background: #f5f5f5;
                    padding: 0 0.4rem;
                   

            }
        }
    
    
    
    }
    .cube-action-sheet-item:after{
        border-bottom: none;
    }
     
</style>


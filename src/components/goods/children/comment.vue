<template>
   <div class="commen" ref="search"
   
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="50"

    >
          
        <ul class="con" v-if="productComment"
      
        >
        
                <li v-for="(item,idx) in productComment" :key="item.id">
                    <div class="l">
                        <p class="info">{{item.content}}</p>
                        <p class="time">
                            <span>{{item.username}}</span>
                            <i>|</i>
                            <span>{{item.postdate}}</span>

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
        <!-- 商家评价 END -->
    
   </div>
</template>

<script>

import qs from 'qs';
import Vue from 'vue';
import VmRate from 'vue-multiple-rate';
import 'vue-multiple-rate/lib/rate.css';
Vue.component(VmRate.name, VmRate)
import { Indicator,Header,Button,InfiniteScroll,Loadmore} from 'mint-ui';
Vue.use(InfiniteScroll)


export default {
     created () {
        
          

            
    },
    data () {
        return {
            Comment:'',               // 处理用户评论 
            productComment:[],        // 用户评论
            valueD1:[],               // 获取星星的评分
            usergradecount:'',        // 用户评论总数
            page:0,                   // 请求的页数
            pageSize:9,               // 请求的条数
             loading:false,
             onoff:false,
             allCount:1,              // 请求过来的总页数
             cur:0
        }
    },
    props: ['id'],
    methods: {
        loadMore(){
           
          
            this.getCom()
        },
         getCom(){
                // 用户评论
           // console.log(this.picInfoId)
    
        if (this.page==this.allCount) {
        
         setTimeout(()=>{
               Indicator.open({
            text: '已经到底了',
            spinnerType: 'fading-circle'
            });
            return false;
         },1000)
        }

        if(this.loading){
           
           return false;
       }
        this.loading=true
      
          let timer = Date.now();
         let Comment=qs.stringify({
            token:'',
            cartkey: '426f4bf2be9a323a25f12e09b7d3e98e',
            demandcartkey: '426f4bf2be9a323a25f12e09b7d3e98e',
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
            category:'ALL',
            itemId: this.id,
            pageId: this.page+1,
            pageSize:10,
           
        });
    
      
        this.$axios.post(
            `/api/product/v1/review/getReviewOfDetail?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1547811437814&signature=****&siteid=9`,
            Comment
          )
        .then((result) => {
               if(result.data.data.details){
                 
                        this.productComment=this.productComment.concat(result.data.data.details);
                        this.page+=1
                        this.loading=false
                        this.allCount=result.data.data.allCount
                        //获取星星评分
                            for(let i=0;i<this.productComment.length;i++){
                                this.valueD1.push(this.productComment[i].productGrade*1);
                            }
                            console.log(this.valueD1)
                    
                }
                else{
                    //  toast.close()
                    this.loading=false
                    this.productComment=null;
                    
                }
        
        }).catch((err) => {
            
        });
        
         
    }
    }
    ,watch: {
        page:function(){
          
            this.page=this.page++;
        }
    }
}
</script>

<style lang="less" scoped>
     .commen{
       
         // 商家评价
           
         
            .con{
                 background-color: white;
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
                        // &/deep/.vm-rate-icon-star-full{
                        //     color: red !important;

                        // }
                        // &/depp/.vm-rate__text{
                        //     color: red !important;
                            
                        // }
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
</style>

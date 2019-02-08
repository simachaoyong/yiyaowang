<template>
    <div class="ItemSizeTc" @click="onoff">
        <transition
            enter-active-class='animated fadeIn'
        >
            
             <div class="bg" v-show="show"> </div>
        </transition>
       

       <transition
        enter-active-class='animated fadeInUp'
       >
           <div class="box"  @click.stop="" v-show="show">
                <div class="infoTitle">
                    <div class="con" >
                        <div class="l" v-if="productinfo.length===2">
                            <div class="img">
                                <img :src="productinfo[productinfo.length-1].mainimg3" alt="">
                            </div>
                            
                            <div class="info">
                                <p class="price" v-if="productinfo[productinfo.length-1]">
                                    ¥{{checkedMingcheng}}    
                                </p> 
                                <span class="choose_mark" v-if="productinfo[productinfo.length-1]">
                                    已选：
                                    <span>
                                        {{checkedItem}}
                                       <!-- {{productinfo[productinfo.length-1].attribute}} -->
                                    </span>
                                </span>
                            </div>  
                        </div>    
                        <div class="l" v-if="productinfo.length===3">
                            <div class="img"  >
                                <img :src="productinfo[productinfo.length-1].mainimg3" alt="">
                            </div>
                            
                            <div class="info">
                                <p class="price" v-if="productinfo[productinfo.length-1]">
                                    ¥{{checkedMingcheng}}    
                                </p> 
                                <span class="choose_mark" v-if="productinfo[productinfo.length-1]">
                                    已选：
                                    <span>
                                        {{checkedItem}}
                                       <!-- {{productinfo[productinfo.length-1].attribute}} -->
                                    </span>
                                </span>
                            </div>  
                        </div>    
                        <div class="r">
                            <i class="iconfont icon-shanchu" @click="onoff"></i>
                        </div>
                    </div>    
                </div> 
                <!-- 规格 -->
                <div class="pro_series_info">
                    <div class="con">
                        <dl class="series_unit" v-for="(val,key) in clasify" :key="key">
                            <dt>
                                {{key}}
                            </dt>
                              
                            <dd v-for="(item,i) in val.split(',')" :key="i" style="float:left" >
                               
                                <span @click="active1(item)" :class="{active:activ==item?true:false}" >
                                    {{item}}
                                </span>
                            
                            </dd>
                        
                        </dl>
                    </div>
                </div>

                <!-- 购买数量 -->
                <div class="pro_change_num">
                    <span class="num_mark">
                        购买数量
                    </span>
                    <div class="price_count">
                            <a href="javascript:;" class="btn_reduce" @click="jian">-</a>
                            <input type="text" maxlength="6" id="inputTag4Series" :placeholder="val">
                            <a href="javascript:;" class="btn_add btn_ok" @click="jia">+</a>
                    </div>
                </div>

                <!-- 加入购物车 -->
                <span class="btn_self pro_sure_btn" @click="addToCart">
                        加入购物车
                </span>
          

         </div>

       </transition>
            

   
         

    </div>
</template>

<script>
import qs from 'qs';
export default {
    name:'ItemSize',
    data () {
        return {
            productinfo:'',         //产品信息数组
            clasify:'',             // 产品分类数组  
            activ:'',               //默认产品规格第一栏
            Active:'',              //默认产品规格第二栏
            checkedItem:'',         // 默认产品
            checkedMingcheng:'',    // 默认价格
            val:1,                  //默认初始数量
        }
    },
    methods: {
        // 设置弹窗开关
        onoff(){
            this.$store.commit('chageProductSize',false)
        },
       // 请求数据
        getProduct(){
                let timer = Date.now();
                let Comment=qs.stringify({
                    token: '',
                    cartkey: '8abf55ec0a1693bdc074fb46bc88a9d9',
                    demandcartkey: '8abf55ec0a1693bdc074fb46bc88a9d9',
                    provinceid: 1,
                    province: 1,
                    provincename: '广州',
                    tradername: 'yw_app',
                    trader: 'h5',
                    closesignature: 'yes',
                    signature_method: 'md5',
                    timestamp: timer,
                    signature: '****',
                    siteid: 9,
                    itemcode: this.picInfoId,
                    width: 320,
                    os: 'iphone',
                
                });
                return this.$axios.post('/api/product/v1/series/getseries?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1548071762795&signature=****&siteid=9',Comment)
               
        },

        // 选中设置高亮
        active1(item){
            console.log
             this.activ=item;
             this.checkedItem=item;
            //  this.checkedMingcheng=item;   
        },
        // 选中设置高亮
        active2(item){
             this.Active=item;
        },

        // 减
        jian(){
            if(this.val<2){
                return
            }
            this.val--;
        }
        ,
        // 加
        jia(){
            this.val++
        },
        // 添加到购物车
        addToCart(){
            console.log(this.checkedItem,this.val)
            let id=this.picInfoId;
            let name=this.checkedItem;
            let quantity=this.val;
            let price=this.checkedMingcheng;
            let img=this.productinfo[this.productinfo.length-1].mainimg3;
             let checked=false;
            let data={id,name,quantity,price,img,checked}
            console.log(data,this.productinfo)
            this.$store.commit('addToCart',data)
          
        }


    },
     computed: {
        show(){
            return this.$store.state.Product.ProductSizeState  
            
        }
    },
    async created () {
        
        let result=await this.getProduct()
       
        if(!result.data.data.data_source){
            return false
        }
        this.productinfo=result.data.data.data_source;
        this.clasify=result.data.data.main_attr_val;
    },
    props: ['picInfoId'],
    mounted () {
         this.bus.$on('active',(res)=>{
            if(res.split(';').length>1){
                 console.log(res.split(';')[1].match(/:[\S]+/)[0].slice(1))
                 this.checkedItem=res;
                 this.activ=res.split(';')[0];
                 this.Active=res.split(';')[1].match(/:[\S]+/)[0].slice(1);
                 return
            }
             this.checkedItem=res;
             this.activ=res.split(';')[0];
         })
         this.bus.$on('mingcheng',(res)=>{
          
             this.checkedMingcheng=res;
          
         })
    }
}
</script>


<style lang="less" scoped>
    .ItemSizeTc{
        .bg{
              position: fixed;
                top: 0;
                left: 0;
                right: 0;
                opacity: 1;
                background: rgba(0, 0, 0, 0.4);
                z-index: 999;
                height: 100%;
                width: 100%;
        }
       
        .box{
           
                z-index: 1000;
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                height: 11.466667rem;
                background-color: white;
                font-size:.426667rem;
            // 头部新闻
            .infoTitle{
               border: 1px solid #f8f8f8;
                .con{
                     display: flex;
                     height: 2.426667rem;
                     justify-content: space-between;
                     .l{
                         display: flex;
                         .img{
                             position: relative;
                             img{
                                 height: 2.4rem;
                                width: 2.4rem;
                                background: #fff;
                                border: 1px solid #e5e5e5;
                                position: absolute;
                               
                                top: -0.4rem;
                             }
                         }
                         .info{
                            margin-left: 2.666667rem;
                            .price{
                                color: #FF6666;
                                line-height: 1.066667rem
                            }
                            .choose_mark{
                                color: #ADADAD;
                                span{
                                    color: #333;

                                }
                            }
                         }
                     }

                     .r{
                           margin-top: .266667rem;
                          
                         i{
                             width: .8rem;
                           font-size: .533333rem;
                           height: .8rem;
                           display: inline-block;
                           display: flex;
                           justify-content: center;
                         }
                     }
                }
            }   
            
            // 规格
            .pro_series_info{
                height: 5.893333rem;
                border-bottom: 1px solid #f8f8f8;
                .con{
                    dl{
                        height: 2.4rem;
                        border-bottom: 1px solid #f8f8f8;
                        dt{
                                font-size: 0.34666667rem;
                                color: #666;
                                padding: 0.13333333rem;
                        }
                        dd{
                               span{
                                    height: 0.8rem;
                                    line-height: 0.8rem;
                                    display: inline-block;
                                    border: 1px solid #e3e3e3;
                                    color: #ADADAD;
                                    padding: 0 0.26666667rem;
                                    cursor: pointer;
                                    margin: 0.26666667rem 0.26666667rem 0 0;

                                    &.active{
                                        border: 1px solid red;

                                    }
                               }
                        }
                    }
                }
            }


            // 购买数量
            .pro_change_num{
                font-size:.373333rem;
                display: flex;
                height: 1.68rem;
                justify-content: space-between;
                align-items: center;

                .price_count{
                        width: 2.66666667rem;
                       
                     
                        border: 1px solid #e5e5e5;
                        -webkit-border-radius: 2px;
                        border-radius: 2px;
                        padding: 0.08rem 0;
                        text-align: center;
                        display: flex;
                        a{
                            width: .72rem;
                            height: .533333rem;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        input{
                            width: 1.2rem;
                            color: #666;
                              height: .533333rem;
                              border-left:  1px solid #e5e5e5;
                              border-right: 1px solid #e5e5e5;  
                              text-align: center;
                        }
                        font-size: .533333rem;
                }
            }

            // 加入购物车
            .pro_sure_btn{
                height: 1.46666667rem;
                line-height: 1.46666667rem;
                display: block;
                background: #FF6666;
                color: #fff;
                text-align: center;
                font-size: 0.48rem;
            }
        }
        
    }
</style>

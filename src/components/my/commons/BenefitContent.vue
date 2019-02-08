<template>
     <div class="BenefitContent">
        <div class="con">
            <div class="title">
                <span class="order_title">
                    福利中心
                </span>
               
            </div>

            <ul class="item_wrapper">
                <li>
                    <i class="iconfont icon-ziyuan"></i>
                    <span>
                        待付款
                    </span>
                </li>
                <li>
                    <i class="iconfont icon-daifahuo"></i>
                    <span>
                        代发货
                    </span>
                </li>
              
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.BenefitContent{
        margin-bottom: 1.866667rem;
        font-size:.426667rem;
        margin-top: .53333333rem;
        background: white;
          
        .con{
            padding: 0.333333rem;
        }
        .title{
            height: .64rem;
            padding-top: .266667rem;
            display: flex;
            font-size:.4rem;
            justify-content: space-between;
            align-items: center;
        }

        .item_wrapper{
            display: flex;
           
             padding-top:.533333rem;
            align-items: center;
            li{
                width:2.133333rem;
                 height:1.333333rem;
                display: flex;
                flex-direction: column;
                // justify-content: space-between;
                
                align-items: center;
                span{
                    margin-top: .533333rem;
                }
            }
        }
    }
</style>

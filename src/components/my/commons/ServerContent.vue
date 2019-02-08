<template>
    <div class="ServerContent">
          <div class="con">
            <div class="title">
                <span class="order_title">
                    我的服务
                </span>
                <!-- <span class="check_all">
                    查看全部
                </span> -->
            </div>

            <ul class="item_wrapper">
                <li>
                    <i class="iconfont icon-jiankangdangan"></i>
                    <span>
                        健康档案
                    </span>
                </li>
                <li>
                    <i class="iconfont icon-kanguo"></i>
                    <span>
                        看过买过
                    </span>
                </li>
                <li>
                    <i class="iconfont icon-icowodeshoucang"></i>
                    <span>
                        我的收藏
                    </span>
                </li>
                <li>
                    <i class="iconfont icon-zixun"></i>
                    <span>
                        咨询中心
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
   .ServerContent{
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
                width: 25%;
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

<template>
    <div class="Lately">
        <div class="con">
            <div class="search_key_title">
                <span>
                    最近搜索
                </span>
                <i class="iconfont icon-lajitong">

                </i>
            </div>

            <div class="search_key_world">
                <a href="javjascript:;">
                    测试
                </a>
                <a href="javjascript:;">
                    测试
                </a>
            </div>
        </div>
    </div>    

</template>


<script>
export default {
    name:'Lately'
}
</script>


<style lang="less" scoped>
    .Lately{
        .con{
            padding: .26666667rem .4rem;
            .search_key_title{
                height: .8rem;
                color: #666;
                line-height: .8rem;
                display: flex;
                justify-content: space-between;
                span{
                    font-size: .3593333rem;
                    color: #666;

                }
                i{
                    color: #505050;
                    font-size: .5193333rem;
                    
                }
            }

            .search_key_world{
                    padding-bottom: .26666667rem;
                    height: 1.386667rem;
                    a{
                        color: #333;
                        height: .85333333rem;
                        padding: 0 .4rem;
                        background: #f5f5f5;
                        // float: left;
                        display: inline-block;
                        line-height: .85333333rem;
                        margin-top: .26666667rem;
                        margin-right: .26666667rem;
                        -webkit-border-radius: .13333333rem;
                        border-radius: .13333333rem;
                        font-size: .413333rem;
                    }
            }
        }
    }   
</style>

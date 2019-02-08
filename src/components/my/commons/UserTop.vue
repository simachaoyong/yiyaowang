<template>
    <div class="user_top">
       <div class="con">
            <div class="city_area">
            <i class="iconfont icon-map">

            </i>
            <span>
                广东
            </span>
        </div>  
        <div class="setting_area">
            设置
        </div>
       </div>
    </div>
</template>

<script>
export default {
    
}
</script>



<style lang="less" scoped>
    .user_top{
      .con{
            display: flex;
        justify-content: space-between;height: 3.14666667rem;
        background: -webkit-gradient(linear,left top,left bottom,from(#908bff),to(#9bb3ff));
        background: linear-gradient(#908bff,#9bb3ff);
        color: white;
        font-size: .426667rem;
        padding-top: .8rem;
      }
    }
</style>

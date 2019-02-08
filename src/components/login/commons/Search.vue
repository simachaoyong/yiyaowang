<template>
    <div class="SearchFrom con">
   
         <div class="left">
        <i class="iconfont icon-iconfontjiantou4" @click="goto"></i>
        <!-- {{searchWor}} -->
       <div class="listBox">
         
              免密登录
       
   
       </div>
       
          
      </div>
      <span class="serach">...</span>
  
  </div>
</template>


<script>
 

export default {
    methods: {
         goto() {
            this.$router.go(-1);
         },
       
    },
    data () {
        return {
          
           
        }
    },computed: {
    
    },
  
   
}
</script>


<style lang="less" scoped>
.SearchFrom {
  height: 1.066667rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9f9f9;
  border: 1px solid #e7e7e7;
  .left {
    display: flex;

    & > i {
      transform: rotate(180deg);
      display: flex;
      align-items: center;
    }
   .listBox{
       width: 8rem;
        text-align: center;
        font-size: .48rem;
   }
  
  }

  .serach {
    display: inline-block;
    padding: 0 0.26666667rem;
    cursor: pointer;
    color: #666;
    font-size: 0.333333rem;
  }


  

  
}
</style>

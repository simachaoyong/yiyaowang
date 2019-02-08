<template>
    <div class="SearchFrom con">
   
         <div class="left">
        <i class="iconfont icon-iconfontjiantou4" @click="goto"></i>
        <!-- {{searchWor}} -->
       <div class="listBox">
            <ul class="list">
            <li v-for="item in childrenList" :key="item.name" @click="change(item.name)" :class="{active:Active==item.name?'active':''}"> 
                    {{item.content}}
            </li>
          
        </ul>
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
         change(item){
             this.$store.commit('changeProductClass',item);
             localStorage.setItem('ProductClass',item)
             this.$router.replace(`/goods/${item}/${this.id}`)
         }
    },
    data () {
        return {
            childrenList:[
                {name:'item',content:'商品'},
                {name:'detail',content:'详情'},
                {name:'comment',content:'评价'},
            ],
           
        }
    },computed: {
        Active(){
            // console.log(this.$store.state.Product.ProductClass)
            return this.$store.state.Product.ProductClass;
        }
    },props: ['id'],
    created () {
        // console.log(this.$store.state.Product.ProductClass);

    }
   
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
        .list{
            width:4.4rem;
            margin: 0 auto;
      overflow: hidden;
      li{
          width:1.466667rem;
            text-align: center;
            font-size:  0.42666667rem;
          float: left;
          padding-bottom: .133333rem;
         &.active{
              border-bottom: 1px solid red;
         }
      }
   }
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

<template>

  <div class="Search"  ref="search">
    
    <div class="ce" >
              <!-- 搜索框 -->
        <SearchFrom :searchWord='searchWord'/>
        <!-- 搜索框 END --> 

        <SearchConnect/>
        <!-- 最近搜索记录 -->
        <Lately/>
        <!-- 最近搜索记录 END -->

        <!-- 热门搜索 -->
        <Hot :HotWord='HotWord'/>
        <!-- 热门搜索 END -->
</div>
       
   
     
    </div>


   
</template>

<script>

import SearchFrom from './commons/SearchFrom';
import Lately from './commons/Lately';
import Hot from './commons/Hot';
import SearchConnect from './commons/SearchConnect';
export default {
    name:'Search',
   components: {
       SearchFrom,
       Lately,
       Hot,
       SearchConnect
   },
   data () {
       return {
          searchWord:'',  // 关键字
          HotWord:'',     // 热门药品
            
}

   },
   created () {
       this.getTradername();
       this.gethotword();
      
   },
    methods: {
         
        // 获取关键字
         getTradername(){
              
              this.$axios.post(`api/search/barword?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1547034740697&signature=****&siteid=9`)
              .then((result) => {
                 this.searchWord=result.data.data.keyword;
              }).catch((err) => {
                  
              });
           },

        //获取热门搜索
            gethotword(){
                  this.$axios.post(`api/search/hotword?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1547037183470&signature=****&siteid=9`)
              .then((result) => {
                  console.log(result.data.data)
                 this.HotWord=result.data.data;
              }).catch((err) => {
                  
              });
              
            },

        

            
    },
    
}
</script>


<style lang="less" scoped>
   
</style>

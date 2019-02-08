<template>
  <div class="SearchFrom">
    
      <div class="left">
        <i class="iconfont icon-iconfontjiantou4" @click="goto"></i>
        <!-- {{searchWor}} -->
        <div class="from">
          <div class="bg">
            <input
              type="text"
              v-model="searchWor"
              ref="input"
              @input="search"
              :placeholder="searchWord"
            
            >
            <i class="iconfont icon-fangdajing"></i>
          </div>
        </div>
      </div>
      <span class="serach" @click="SearchGoto">搜索</span>
    

    
  </div>
</template>


<script>
import qs from "qs"; // 引入qs插件
export default {
  name: "SearchFrom",
  data() {
    return {
      timer: null,
      searchWor: "",
      SearchState:false,
    };
  },
  props: {
    searchWord: {
      type: [Array, String, Object]
    }
  },
  methods: {
    goto() {
      this.$router.go(-1);
    },

    search() {
      let timer = Date.now();
      let data = qs.stringify({
        token: "",
        demandcartkey: "e2d00b53cd753125cb4df0e6dfca8340",
        cartkey: "e2d00b53cd753125cb4df0e6dfca8340",
        provinceid: 20,
        province: 20,
        provincename: "广东",
        tradername: "yw_app",
        trader: "h5",
        closesignature: "yes",
        signature_method: "md5",
        timestamp: 1547039501387,
        signature: "****",
        siteid: 9,
        keyword: this.searchWor,
        type: 0
      });
      clearTimeout(this.timer);
      if(this.searchWor.length<=0){
           
      this.SearchState=false;
        this.bus.$emit('SearchState',[this.SearchState,1]);   //bus 传递是否有输入内容
      }
      else if(this.searchWor.length>0){
        this.SearchState=true;
        this.bus.$emit('SearchState',[this.SearchState,1]);    //bus 传递是否有输入内容
      }
      if (!this.searchWor) return;
      if (!this.searchWord) return;


      this.timer = setTimeout(() => {
        this.$axios
          .post(
            `api/search/suggest?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1547039501387&signature=****&siteid=9`,
            data
          )
          .then(result => {
            console.log(result);
          
            let data=result.data.data;
         
              this.bus.$emit('SearchSuggest',data);
          })
          .catch(err => {});
      }, 1000);

     

   
      
    },


    // 搜索
    SearchGoto(){
      this.$router.push({path:'./searchList',query:{searchWord:this.searchWord}})
    }

  },
  activated() {
    this.$refs["input"].focus();
  },
  created() {
    
        this.searchWor=this.$route.query.searchWord;  //获取搜索列表得到的搜索值
  },
  mounted () {
  
     this.$refs["input"].focus();
  }
};
</script>

<style lang="less" scoped>
.SearchFrom {
  height: 1.066667rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  border: 1px solid #e7e7e7;
  .left {
    display: flex;

    & > i {
      transform: rotate(180deg);
      display: flex;
      align-items: center;
    }
    .from {
      margin-left: 0.266667rem;
      .bg {
        position: relative;
        width: 7.28rem;
        height: 0.8rem;
        background-color: #ebebeb;
        border-radius: 0.4rem;
        padding: 0 1.06666667rem 0 1.17333333rem;
        input {
          background-color: transparent;
          font-size: 0.32rem;
          color: #333;
          width: 100%;
          height: 0.8rem;
          border: 0;
          background: none;
          display: block;
          overflow: hidden;
        }
        i {
          position: absolute;
          top: 0.166667rem;
          left: 0.266667rem;
          font-size: 0.533333rem;
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

<template>
    <div class="search_connect_div">
       
        <ul v-show="SearchState">
            
             <li v-for="item in SearchSuggest" :key="item.id" @click="goto(item.word)">
                <span class="key_world">
                  {{item.word}}
                </span>
            </li>
          
        </ul>
    </div>
</template>


<script>
import qs from "qs"; // 引入qs插件
export default {
    data () {
        return {
            SearchState:'',
            SearchSuggest:'',
        }
    },
    created () {
        this.SearchSuggest='';

         this.bus.$on('SearchState',msg=>{
             this.SearchState=msg[0];
        })

        this.bus.$on('SearchSuggest',msg=>{
             this.SearchSuggest=msg;
            //  console.log(this.SearchSuggest)
        })


         this.getSearchWord()
    },
    methods: {
        goto(item){
            console.log(1)
            this.$router.push({path:'./searchList',query:{searchWord:item}})
        },
         // 获取产品列表跳转过来的数据用作获取列表
        async getSearchWord(){


            // console.log(this.$route.query.searchWord)
            if(this.$route.query.searchWord){
                // console.log(66)
               this.SearchState=this.$route.query.searchWord;


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
                        keyword:  this.SearchState,
                        type: 0
                    });
                 let Data=await this.$axios.post(
            `api/search/suggest?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1547039501387&signature=****&siteid=9`,
            data
          )
                this.SearchSuggest=Data.data.data
               
            }
             
        }
    }
}
</script>



<style lang="less" scoped>
.search_connect_div{
 
    ul{
        z-index: 99;
          position: absolute;
   height: 100%;
   top: 1.066667rem;
   bottom:0;
   left: 0;
   right: 0;
    background-color: white;
    //   position: absolute;
    //   top: 1.066667rem;
    width: 100%;
    }
    li{
            height: 1.17333333rem;
            border-bottom: 1px solid #c8c7cc;
            padding: 0 .4rem;
            position: relative;
            span{
                    font-size: .37333333rem;
                    line-height: 1.17333333rem;
                    color: #666;
            }
    }
  }
</style>

<template>
    <div class="Hot" ref="search">
        <div class="con">
            <div class="title">
                热门搜索
            </div>
            <div class="search_key_world">

                <a href="javascript:;" v-for="(item,idx) in HotWord" :key="idx" @click='goto(item.keyword)'>
                  {{item.keyword}}
                </a>
              
            </div>
        </div>
    </div>
</template>


<script>
import BScroll from 'better-scroll'
export default {
   name:'Hot',
   props: ['HotWord'],
   data () {
       return {
          
       }
   },
   methods: {
       goto(item){
           console.log(item)
           this.$router.push({path:'/searchList',query:{searchWord:item}})
       },
      
   },
   mounted () {
    // this.scroll = new BScroll(this.$refs.search)
   
      this.$nextTick(function () {
        setTimeout(() => {
          const options = {
            scrollY: true, // 因为scrollY默认为true，其实可以省略
            scrollX: true,
            mouseWheel: true,
            click: true,
            taps: true
          }
          this.scroll = new BScroll(this.$refs.search, options)
        }, 20)
      })
    

  }
}
</script>

<style lang="less" scoped>
    .Hot{
        
         height: 6.333333rem;
        .con{
             height:6.366667rem;
            border-top: 1px solid #f7f7f7;
            font-size: .34666667rem;
            .title{
                height: .8rem;
                line-height: .8rem;
                color: #666;
            }
            .search_key_world{
                a{
                    height: .85333333rem;
                    padding: 0 .4rem;
                    background: #f5f5f5;
                    
                    display: inline-block;
                    line-height: .85333333rem;
                    margin-top: .26666667rem;
                    margin-right: .26666667rem;
                    -webkit-border-radius: .13333333rem;
                    border-radius: .13333333rem;
                    color: #333;
                }
                

            }
        }
    }
</style>

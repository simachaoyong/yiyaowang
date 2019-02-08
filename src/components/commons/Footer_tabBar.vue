<template>
    <div class="Footer_tabBar">
      
      <cube-tab-bar
        v-model="selectedLabelDefault"
        :data="tabs"
        @click="clickHandler"
        @change="changeHandler">
   
  </cube-tab-bar>
   <mt-badge type="warning">10</mt-badge>
    </div>
</template>

<script>

export default {
   
  data () {
    return {
      selectedLabelDefault:'',
      tabs: [{
        label: '首页',
        value:'Home',
        icon: 'iconfont icon-shouyedianpujishishangcheng'
      }, {
        label: '找药',
        value:'Classify',
        icon: 'iconfont icon-shouye'
      }, {
        label: '购物车',
        value:'Cart',
        icon: 'iconfont icon-xiazai1'
      }, {
        label: '我的',
        value:'My',
        icon: 'iconfont icon-wode'
      },]
    }
  },
  methods: {
    clickHandler (name) {
      // if you clicked home tab, then print 'Home'
      // console.log(name,this.navBar)
      this.$store.commit('changeQty',name);

      sessionStorage.setItem('RouterState',name)
      this.$router.push({name});

    },
    changeHandler (label) {
        // console.log(label)
      // if you clicked different tab, this methods can be emitted
    }
  },created () {
    // console.log(this.$route)
    this.selectedLabelDefault=this.$route.name
    // console.log(this.$store.state.RouteState.State)
    // this.selectedLabelDefault=this.$store.state.RouteState.State;
  }
  ,
  watch: {
     $route(newValue,oldValue){
           this.selectedLabelDefault=newValue.name;
              this.$store.commit('changeQty',newValue.path);
            sessionStorage.setItem('RouterState',newValue.path)
         
      }
  }
}
</script>

<style lang="less" scoped>
    .Footer_tabBar{
        position: fixed;
        z-index: 999;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1.466667rem;
        width: 100%;
        background: white;
        border-top: 1px solid #d8d8d8;
         &/deep/i{
            font-size: .62rem;
        }
        &/deep/.cube-tab{
            div{
                font-size: .32rem;
            }

        }
         &/deep/.cube-tab_active{
            color: red;

        }
    }
</style>

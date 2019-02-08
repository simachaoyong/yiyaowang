<template>
  <div id="app">

    <keep-alive >
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
   
</router-view>
  </div>
</template>


<script>



// import Home from 'componentas/home/Home';
export default {
    // components: {
    //     Home
    // }
}
</script>

<style lang="less">

</style>

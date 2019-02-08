<template>
    <div>
        <Search/>
        <LoginPage/>
    </div>
</template>

<script>
import Search from './commons/Search';
import LoginPage from './commons/LoginPage'
export default {
    components: {
        Search,
        LoginPage
    }
}
</script>


<style lang="less" scoped>
    body,html{
        background-color: white !important;
        height: 100%;
    }
</style>

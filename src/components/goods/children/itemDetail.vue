<template>
    <div class="ItemDetail">
        <Detail :picInfoId="picInfoId"/>
    </div>
</template>


<script>
import Detail from '../common/itemDetail';
export default {
    data () {
        return {
            picInfoId:this.$route.params.id
        }
    },
    created () {
        console.log(this.$route.params.id)
    },
    components: {
        Detail
    }
}
</script>

<style lang="less" scoped>

</style>

<template>
    <div class="singerdata">
        1
    </div>
</template>

<script>
    export default {
        name:'SingerData',
        data(){
            return {
                singidData:'',
                singerinfoData:[]
            }
        },
        created(){
            this.singidData = this.$store.state.singerId;
        },
        computed:{
            //歌手id
            Singid(){
                return this.$store.state.singerId
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
<template>
    <div class="login">
        1
    </div>
</template>

<script>
    export default {
        name:'Login',
        methods:{
            getMuise(){
                this.axios({
                    method:'GET',
                    url:'/user/subcount'
                })
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
<template>
    <div class="login">
        1
    </div>
</template>

<script>
    export default {
        name:'Login',
        created(){
            this.getMuise();
        },
        methods:{
            getMuise(){
                this.axios({
                    method:'POST',
                    url:'/hot/topic',
                    data:{
                        email:"18818866387@163.com",
                        
                    }
                }).then((result)=>{
                     (result);
                }).catch((err) =>{
                     (err);
                })
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
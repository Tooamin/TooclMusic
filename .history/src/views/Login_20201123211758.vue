<template>
    <div class="login">
        <div @click="getMuise">111</div>
    </div>
</template>

<script>
    export default {
        name:'Login',
        created(){
            this.getMuise();
            // this.gettheRefresh();
        },
        methods:{
            getMuise(){
                this.axios({
                    method:'POST',
                    url:'/login?email=18818866387@163.com&password=tanjinghua12345',
                }).then((result)=>{
                     ("11");
                     (result);
                }).catch((err) =>{
                     (err);
                })
            },
            gettheRefresh(){
                this.axios({
                    method:'POST',
                    url:'/login/refresh',
                    data:{
                        email:"18818866387@163.com",
                        password:"tanjinghua12345"
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
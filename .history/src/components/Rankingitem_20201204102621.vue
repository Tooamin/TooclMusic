<template>
    <div class="rankingitem">
        <div class="ranking-number">01</div>
        <div class="ranking-title">茫</div>
        <div class="ranking-name">利润其</div>
    </div>
</template>

<script>
    export default {
        name:'Rankingitem'
    }
</script>

<style lang="less" scoped>
.rankingitem{
    &::after{
        content: "";
        display: block;
        clear: both;
    }
    .ranking-number{
        float: left;
        font-size: 16px;
        // color: #2ddae8;
    }
    .ranking-title{
        float: left;
        font-size: 18px;
    }
    .ranking-name{
        float: left;
    }
}
</style>
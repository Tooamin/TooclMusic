<template>
  <div class="everydayradiolist">
    <van-nav-bar
      title="24小时榜"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
  name: "Everydayradiolist",
};
</script>

<style lang="less" scoped>
</style>
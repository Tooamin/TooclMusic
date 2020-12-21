<template>
  <div class="home">
    <div class="banner">
      <van-swipe>
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </van-swipe>
    </div>

  </div>
</template>

<script>
import '../assets/less/home.less'
export default {
  name: "Home",
};
</script>

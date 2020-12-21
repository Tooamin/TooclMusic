<template>
  <div class="home">
    <div class="banner">
      <van-swipe>
        <van-swipe-item><img src="" alt=""></van-swipe-item>
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
  data(){
    return{
      
    }
  },
  created(){

  },
  
};
</script>

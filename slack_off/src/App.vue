<script setup lang="ts">
import TabBar from '@/components/TabBar/index.vue'
import { RouterView } from 'vue-router';


</script>

<template>
  <h1>You did it!</h1>
  <KeepAlive>
    <RouterView />
  </KeepAlive>
  <TabBar :class="$style.tabbar" :tabs="[
    { name: '视频', icon: '🏠' },
    { name: '小说', icon: '👤' },
    { name: '我的', icon: '⚙️' }
  ]" />
</template>

<style module>
  .tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    height: 50px;
    background-color: red;
  }
</style>

<template>
  <div :class="$style.tabbar">
    <div
      v-for="tab in props.tabs"
      :key="tab.name"
      :class="$style.tab"
    >
      <span :class="$style.tabIcon">{{ tab.icon }}</span>
      <span :class="$style.tabName">{{ tab.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    tabs: Array<{ name: string; icon: string }>
  }>()
</script>

<style module>
  .tabbar {
    display: flex;
    align-items: center;
  }

  .tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }
</style>

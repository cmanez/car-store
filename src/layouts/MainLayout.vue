<template>
  <div class="main-layout">
    <MyNav></MyNav>
    <div class="main-layout-item">
      <slot></slot>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script setup>
import MyNav from '@/components/MyNav.vue'
import MyFooter from '@/components/MyFooter.vue'

// const newClass = selectState.changeDisplay
</script>

<style lang="scss">
.main-layout {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-item {
    display: flex;
    height: 86%;
  }
}
</style>

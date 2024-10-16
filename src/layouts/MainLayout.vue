<template>
  <div class="main-layout">
    <MyNav></MyNav>

    <slot></slot>

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
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 7% 86% 7%;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
}
</style>

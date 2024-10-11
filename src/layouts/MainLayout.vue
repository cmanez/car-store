<template>
  <div class="main-layout">
    <MyNav></MyNav>
    <div style="margin: 0 auto">ХУЙ</div>
    <MyFooter></MyFooter>
  </div>
</template>

<script setup>
import MyNav from '@/components/MyNav.vue'
import MyFooter from '@/components/MyFooter.vue'
</script>

<style lang="scss">
.main-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>

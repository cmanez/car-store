<template>
  <div class="main-layout">
    <MyNav></MyNav>
    <div class="item-grid">
      <MyItem></MyItem>
      <MyItem></MyItem>
      <MyItem></MyItem>
      <MyItem></MyItem>
      <MyItem></MyItem>
      <MyItem></MyItem>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script setup>
import MyNav from '@/components/MyNav.vue'
import MyFooter from '@/components/MyFooter.vue'
import MyItem from '@/components/MyItem.vue'
</script>

<style lang="scss">
.main-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .item-grid {
    display: grid;
    height: 100%;
    padding: 2rem;
    grid-template-columns: repeat(auto-fill, 19%);
    grid-template-rows: repeat(auto-fill, 30%);
    gap: 10px;
  }
}
</style>

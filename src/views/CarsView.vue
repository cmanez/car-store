<template>
  <div class="item-grid">
    <MyItem></MyItem>
  </div>
</template>

<script setup>
import MyItem from '@/components/MyItem.vue'

import { onMounted } from 'vue'
import { autoArrayStore } from '@/stores/auto_array'
const autoArrayState = autoArrayStore()

onMounted(() => {
  autoArrayState.uploadCarItems()
})
</script>

<style lang="scss">
.item-grid {
  display: grid;
  height: 100%;
  width: 100vw;
  padding: 2rem;
  grid-template-columns: repeat(auto-fill, 19%);
  grid-template-rows: repeat(auto-fill, 30%);
  gap: 10px;
}
</style>

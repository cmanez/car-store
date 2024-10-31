<template>
  <MyAd v-if="modalState.modalName === 'carCard'"></MyAd>
  <div class="item-grid">
    <MyItem v-if="autoArrayState.itemCarArray.length"></MyItem>
    <div v-else>Объявлений нет</div>
  </div>
</template>

<script setup>
import MyItem from '@/components/MyItem.vue'
import MyAd from '../components/MyAd.vue'
import { onBeforeMount } from 'vue'
import { autoArrayStore } from '@/stores/auto_array'
import { modalStore } from '../stores/modal'
const autoArrayState = autoArrayStore()
const modalState = modalStore()
onBeforeMount(() => {
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
  &_wrapper {
    height: 100%;
    width: 100%;
  }
}
</style>

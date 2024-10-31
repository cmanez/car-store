<template>
  <div class="ad-wrapper">
    <MyModal>
      <div>
        Об объявлении:
        <img src="@/assets/img/car.webp" alt="" />
        <div>Марка авто: {{ carCardState.carInfoArray.model }}</div>
        <div>Цена: {{ carCardState.carInfoArray.price }} ₽</div>
        <div>Пробег: {{ carCardState.carInfoArray.mileage }} км.</div>
        <div>Контактный номер телефона: {{ carCardState.carInfoArray.phoneNum }}</div>
      </div>
    </MyModal>
  </div>
</template>

<script setup>
import MyModal from './MyModal.vue'
import { carCardStore } from '../stores/carCard'

const carCardState = carCardStore()
</script>

<style lang="scss" scoped>
.ad-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 99999;
  img {
    width: 100%;
  }
}
</style>

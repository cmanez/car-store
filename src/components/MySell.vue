<template>
  <div class="wrapper_sell">
    <div class="background"></div>
    <div class="sell">
      <div class="sell_header">
        Продайте свой автомобиль, оставив объявление
        <div class="sell_header-close">
          <img
            @click="sellState.changeClass"
            src="../assets/close.svg"
            alt=""
            class="sell_header-close-item"
          />
        </div>
      </div>
      <div class="sell_car-option">
        Модель автомобиля:
        <MySelect></MySelect>
      </div>
      <div class="sell_car-option">
        Пробег:
        <MyInput></MyInput>
      </div>
      <div class="sell_car-option">
        Цена:
        <MyInput></MyInput>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyInput from '@/UI/MyInput.vue'
import MySelect from '../UI/MySelect.vue'

import { sellStore } from '../stores/sell'

const sellState = sellStore()
</script>

<style lang="scss">
.sells {
  display: none !important;
}
.wrapper_sell {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
}
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
}
.sell {
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  text-align: center;
  padding: 1rem;
  transition: opacity 0.5s ease;
  background-color: $main-light;
  height: 30rem;
  width: 25rem;
  border: solid 1px rgb(184, 127, 127);
  border-radius: 10px;
  &_car-option {
    display: flex;
    flex-direction: column;
  }
  &_header {
    display: flex;
    justify-content: center;
    &-close {
      width: 32px;
      height: 32px;
      &-item {
        width: 100%;
        height: 100%;
      }
      &-item:hover {
        transform: scale(1.25);
        transition: 0.2s;
      }
    }
  }
}
</style>

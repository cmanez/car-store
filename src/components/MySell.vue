<template>
  <div class="background"></div>
  <div class="sell">
    <div>Продайте свой автомобиль, оставив объявление</div>
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
</template>

<script setup>
import MyInput from '@/UI/MyInput.vue'
import MySelect from '../UI/MySelect.vue'
</script>

<style lang="scss">
// .sell_none {
//   display: none;
// }
.background {
  position: absolute;
  height: 100vh;
  width: 100vh;
  background-color: black;
  opacity: 0.5;
}
.sell {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  position: absolute;
  text-align: center;
  padding: 1rem;
  transition: opacity 0.5s ease;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: $main-light;
  height: 30rem;
  width: 25rem;
  border: solid 1px rgb(184, 127, 127);
  border-radius: 10px;
  &_car-option {
    display: flex;
    flex-direction: column;
  }
}
</style>

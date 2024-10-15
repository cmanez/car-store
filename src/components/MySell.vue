<template>
  <MyModal>
    <div class="wrapper_sell">
      <div class="sell">
        <div class="sell_header">Продайте свой автомобиль, оставив объявление</div>
        <div class="sell_car-option">
          Загрузите фото
          <MyInput type="file"></MyInput>
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
  </MyModal>
</template>

<script setup>
import MyInput from '@/UI/MyInput.vue'
import MySelect from '../UI/MySelect.vue'
import MyModal from './MyModal.vue'
</script>

<style lang="scss">
.modal_none {
  display: none !important;
}
.wrapper_sell {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.sell {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  text-align: center;
  height: 100%;
  &_car-option {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>

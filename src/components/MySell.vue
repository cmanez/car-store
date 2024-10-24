<template>
  <MyModal>
    <div class="wrapper_sell">
      <div class="sell">
        <div class="sell_header">Продайте свой автомобиль, оставив объявление</div>
        <div class="sell_car-option">
          Загрузите фото
          <MyInput type="file"></MyInput>
        </div>
        <div v-if="autoArrayState.checkArrayLength === false">Загрузка...</div>
        <div v-else class="sell_car-option">
          Модель автомобиля:
          <MySelect v-model="carModel"
            ><option value="" disabled selected>Выберите марку:</option>

            <option v-for="car in autoArrayState.carsArray" :key="car.id">
              {{ car.name }}
            </option>
          </MySelect>
        </div>
        <div class="sell_car-option">
          Пробег (км):
          <MyInput
            type="number"
            v-model="carMileage"
            :class="{
              invalidpass: autoArrayState.notEnoughData === true
            }"
          ></MyInput>
        </div>
        <div class="sell_car-option">
          Цена (в рублях):
          <MyInput
            type="number"
            v-model="carPrice"
            :class="{
              invalidpass: autoArrayState.notEnoughData === true
            }"
          ></MyInput>
        </div>
        <MyButton @click="autoArrayState.newItem(carModel, carPrice, carMileage)"
          >Разместить</MyButton
        >
      </div>
    </div>
  </MyModal>
</template>

<script setup>
import MyInput from '@/UI/MyInput.vue'
import MySelect from '../UI/MySelect.vue'
import MyButton from '@/UI/MyButton.vue'
import MyModal from './MyModal.vue'
import { onMounted, ref } from 'vue'

import { autoArrayStore } from '../stores/auto_array'

const autoArrayState = autoArrayStore()
const carModel = ref()
const carPrice = ref()
const carMileage = ref()

onMounted(() => {
  autoArrayState.sortCars
})
</script>

<style lang="scss">
.sell_none {
  display: none;
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
    &-car {
      height: 100px;
      width: 100px;
    }
  }
}
</style>

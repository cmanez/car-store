<template>
  <MyModal>
    <div class="wrapper_sell">
      <div class="sell">
        <div class="sell_header">Продайте свой автомобиль, оставив объявление</div>
        <div class="sell_car-option">
          Загрузите фото
          <MyInput type="file" v-model="carPhoto"></MyInput>
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
            v-model="carMileage"
            maxlength="8"
            :class="{
              invalidpass: autoArrayState.notEnoughData === true
            }"
          ></MyInput>
        </div>
        <div class="sell_car-option">
          Цена (в рублях):
          <MyInput
            v-model="carPrice"
            maxlength="10"
            :class="{
              invalidpass: autoArrayState.notEnoughData === true
            }"
          ></MyInput>
        </div>
        <div class="sell_car-option">
          Контактный номер телефона:
          <MyInput
            v-model="signState.phoneNum"
            required
            @input="signState.phoneAddPlus()"
            :class="{
              validpass: signState.checkValidePhone,
              invalidpass: signState.checkValidePhone === false
            }"
            maxlength="12"
          ></MyInput>
        </div>
        <MyButton @click="handleClick()">Разместить</MyButton>
      </div>
    </div>
  </MyModal>
</template>

<script setup>
import MyInput from '@/UI/MyInput.vue'
import MySelect from '@/UI/MySelect.vue'
import MyButton from '@/UI/MyButton.vue'
import MyModal from './MyModal.vue'
import { onMounted, ref } from 'vue'

import { autoArrayStore } from '@/stores/auto_array'
import { signStore } from '@/stores/signin'
import { modalStore } from '@/stores/modal'

const signState = signStore()
const autoArrayState = autoArrayStore()
const modalState = modalStore()

const carModel = ref()
const carPrice = ref()
const carMileage = ref()
const carPhoto = ref()

const checkBeforeClose = () => {
  autoArrayState.notEnoughData ? 0 : modalState.modalClose()
}
const handleClick = () => {
  autoArrayState.newItem(carModel, carPrice, carMileage, signState.phoneNum),
    autoArrayState.setCarsArray,
    signState.startCheckValid(),
    checkBeforeClose()
}
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

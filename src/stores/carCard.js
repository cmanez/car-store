import { defineStore } from 'pinia'
import { ref } from 'vue'

export const carCardStore = defineStore('carState', () => {
  const carInfoArray = ref([])
  const pushInfoCar = (model, price, mileage, phoneNum) => {
    carInfoArray.value = { model, price, mileage, phoneNum }
    console.log(carInfoArray.value)
  }
  return {
    carInfoArray,
    pushInfoCar
  }
})

import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const autoArrayStore = defineStore('auto', () => {
  const carsArray = ref([
    { name: 'bmw', id: 1 },
    { name: 'audi', id: 2 },
    { name: 'mercedes', id: 3 },
    { name: 'hyuindai', id: 4 },
    { name: 'BMW', id: 5 }
  ])

  const itemCarArray = ref([])
  const sortCarsArray = ref([])

  const sortCars = computed(() => {
    carsArray.value.sort((a, b) => {
      return a.name.localeCompare(b.name.toLocaleLowerCase())
    })
    return carsArray
  })

  const checkArrayLength = computed(() => {
    return carsArray.value.length ? true : false
  })

  const newItem = (model, price, mileage) => {
    itemCarArray.value.push({ model, price, mileage })
  }

  return {
    carsArray,
    checkArrayLength,
    sortCarsArray,
    sortCars,
    newItem,
    itemCarArray
  }
})

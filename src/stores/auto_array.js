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
  const notEnoughData = ref(false)
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
    if (model && price && mileage) {
      const id = Date.now()
      itemCarArray.value.push({ model, price, mileage, id })
      notEnoughData.value = false
    } else {
      return (notEnoughData.value = true)
    }
  }

  const newCarArray = (id) => {
    itemCarArray.value = itemCarArray.value.filter((item) => item.id !== id)
  }
  // const setCarsArray = () => {
  //   localStorage.setItem('testarray', JSON.stringify(itemCarArray.value))
  // }
  return {
    carsArray,
    checkArrayLength,
    sortCarsArray,
    sortCars,
    newItem,
    itemCarArray,
    newCarArray,
    notEnoughData
  }
})

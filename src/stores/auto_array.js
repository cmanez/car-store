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
      return a.name.localeCompare(b.name.toLowerCase())
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
    itemCarArray.value = itemCarArray.value.filter((item) => item.id !== id) //удаление элементов из массива и localstorage
    localStorage.setItem('carsarray', JSON.stringify(itemCarArray.value))
  }
  const setCarsArray = computed(() => {
    return localStorage.setItem('carsarray', JSON.stringify(itemCarArray.value))
  })

  const uploadCarItems = () => {
    //загрузка элементов из localStorage
    if (localStorage.getItem('carsarray')) {
      const carParse = JSON.parse(localStorage.getItem('carsarray'))
      carParse !== itemCarArray.value ? (itemCarArray.value = carParse) : 0
    }
  }
  return {
    carsArray,
    checkArrayLength,
    sortCarsArray,
    sortCars,
    newItem,
    itemCarArray,
    newCarArray,
    notEnoughData,
    setCarsArray,
    uploadCarItems
  }
})

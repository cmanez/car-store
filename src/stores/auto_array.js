import { defineStore } from 'pinia'
import { computed } from 'vue'
export const autoArrayStore = defineStore('auto', () => {
  const carsArray = [
    { name: 'audi', id: 1 },
    { name: 'bmw', id: 2 },
    { name: 'mercedes', id: 3 }
  ]

  const checkArrayLength = computed(() => {
    return carsArray.length ? true : false
  })

  return {
    carsArray,
    checkArrayLength
  }
})

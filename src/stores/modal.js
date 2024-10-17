import { ref } from 'vue'
import { defineStore } from 'pinia'

export const modalStore = defineStore('sell', () => {
  const modalName = ref(null)
  const modalVisible = (className) => {
    modalName.value = className
  }
  const modalClose = () => {
    modalName.value = null
  }
  return {
    modalVisible,
    modalClose,
    modalName
  }
})

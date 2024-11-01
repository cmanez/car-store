import { ref } from 'vue'
import { defineStore } from 'pinia'
import { clearStore } from './clear'

export const modalStore = defineStore('sell', () => {
  const clearState = clearStore()
  const modalName = ref(null)
  const modalVisible = (className) => {
    modalName.value = className
  }
  const modalClose = () => {
    modalName.value = null
    clearState.clearItems()
  }
  return {
    modalVisible,
    modalClose,
    modalName
  }
})
